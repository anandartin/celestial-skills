// Regenerate this repository from the public Celestial library (run by .github/workflows/sync.yml).
//
//   node .github/sync/export.mjs <repo-dir> [--site <url-or-path-to-index.html>] [--exclude id,id]
//
// Each public, admin-approved skill becomes skills/<slug>/ with the same files as the site's Download, built by the site's
// own skillFiles() from the live page (or a local index.html), minus uploaded font files, whose licences may not allow
// redistribution. Skills listed in .github/sync/config.json "exclude" (and --exclude) are left out. Writes the catalogue
// README.md; LICENSE, NOTICE and .github are left alone. skills/ is replaced, so unpublished or deleted skills disappear.
import { JSDOM, VirtualConsole } from 'jsdom';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const API = (process.env.CELESTIAL_API || 'https://celestialskill.com').replace(/\/$/, '');
const [out, ...rest] = process.argv.slice(2);
if (!out) { console.error('usage: node .github/sync/export.mjs <repo-dir> [--site url|path] [--exclude id,id]'); process.exit(1); }
// same as slugify in public/index.html (a const there, so not reachable on window)
const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'skill';
const arg = (flag) => (rest.includes(flag) ? rest[rest.indexOf(flag) + 1] || '' : '');
const config = JSON.parse(await readFile(new URL('./config.json', import.meta.url), 'utf8').catch(() => '{}'));
const exclude = new Set([...(config.exclude || []), ...arg('--exclude').split(',').filter(Boolean)]);
const site = arg('--site') || API + '/';

// load the site so packages are built by exactly the code behind Download
const page = /^https?:/.test(site) ? await (await fetch(site, { headers: { 'cache-control': 'no-cache' } })).text() : await readFile(site, 'utf8');
const html = page.replace(/<script[^>]+src=[^>]*><\/script>/g, '');
const vc = new VirtualConsole();
const dom = new JSDOM(html, { runScripts: 'dangerously', url: API + '/', virtualConsole: vc, pretendToBeVisual: true,
  beforeParse(w) { w.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {} }); w.fetch = async () => ({ ok: false, json: async () => ({}) }); w.IntersectionObserver = class { observe() {} disconnect() {} }; w.scrollTo = () => {}; } });
const w = dom.window;
if (typeof w.skillFiles !== 'function') { console.error(`skillFiles not found in ${site}`); process.exit(1); }

// public listing only (no admin key): approved public skills
const KINDS = [['skills', 'design', 'Design skills', 'How a brand looks'], ['experiences', 'experience', 'Experience skills', 'How a journey works'], ['engineering', 'engineering', 'Engineering skills', 'How it is built and shipped']];
const groups = [];
for (const [col, kind, title, blurb] of KINDS) {
  const j = await (await fetch(`${API}/api/${col}`)).json();
  const items = (j.items || []).filter((s) => s.visibility === 'public' && !s.archived && !exclude.has(s.id)).sort((a, b) => a.name.localeCompare(b.name));
  groups.push({ col, kind, title, blurb, items });
}

await rm(join(out, 'skills'), { recursive: true, force: true });
let files = 0; const skipped = [];
for (const g of groups) for (const s of g.items) {
  let list;
  try { list = w.skillFiles(s, g.kind, { fonts: false }); } catch (e) { skipped.push(`${s.id}: ${e.message}`); continue; }
  const fontNote = (s.fontFiles || []).length ? `\n## Fonts\nFont files aren't included here — their licences may not allow redistribution. Install ${[...new Set(s.fontFiles.map((f) => f.family))].join(', ')} from the type foundry or your licensed copy.\n` : '';
  for (const f of list) {
    let data = f.data;
    if (f.name.endsWith('/README.md') && f.name.split('/').length === 2) data = data.replace('and choose this .zip', 'and choose a .zip of this folder') + fontNote;
    const p = join(out, 'skills', f.name);
    await mkdir(dirname(p), { recursive: true });
    await writeFile(p, data);
    files++;
  }
  s._slug = slugify(s.slug || s.name);
}

const row = (s, kind) => `| [${s.name}](skills/${s._slug}/) | ${String(s.tagline || '').replace(/\|/g, '/').replace(/\s+/g, ' ').trim()} |`;
const total = groups.reduce((n, g) => n + g.items.filter((s) => s._slug).length, 0);
await writeFile(join(out, 'README.md'), `# Celestial skills

${total} open skills for AI agents from [Celestial](https://celestialskill.com) — design skills (how a brand looks), experience skills (how a journey works) and engineering skills (how it's built and shipped), all on one shared core.

Each folder in [\`skills/\`](skills/) is one skill: a \`SKILL.md\` your agent reads, plus tokens, a logo, \`AGENTS.md\` or editor rules where the skill has them.

## Use a skill

- **Claude Code** — copy a folder into \`~/.claude/skills/\` (every project) or \`.claude/skills/\` in a repository. Claude uses it whenever a request fits.
- **Any agent that reads skills** — install with the open skills CLI: \`npx skills add anandartin/celestial-skills\`.
- **Claude (claude.ai)** — zip a skill's folder and upload it under Settings → Capabilities → Skills.
- **ChatGPT, Gemini and other assistants** — attach or paste the skill's \`SKILL.md\`, then ask, e.g. "Build the sign-up flow with this skill."
- **Codex, Copilot, Cursor** — engineering skills include \`AGENTS.md\` and \`rules/<name>.mdc\`; each skill's README says where they go.

Browse, preview and remix every skill at [celestialskill.com](https://celestialskill.com).

${groups.map((g) => `## ${g.title} (${g.items.filter((s) => s._slug).length})

${g.blurb}.

| Skill | What it covers |
|---|---|
${g.items.filter((s) => s._slug).map((s) => row(s, g.kind)).join('\n')}
`).join('\n')}
## Contributing

The skills are written and reviewed on [celestialskill.com](https://celestialskill.com). This repository updates itself from there: a skill appears here within minutes of being published on the site, and the full set is re-checked every six hours. Please don't edit \`skills/\` by hand — changes are overwritten. To suggest a change, open an issue, or create or remix a skill on the site and request publishing.

## Licence

[Apache License 2.0](LICENSE). The licence covers the skill text and files; it grants no rights to any trademark, brand name or logo a skill describes.
`);

console.log(`${total} skills · ${files} files → ${out}`);
groups.forEach((g) => console.log(`  ${g.title}: ${g.items.filter((s) => s._slug).length}`));
if (exclude.size) console.log(`  excluded: ${[...exclude].join(', ')}`);
if (skipped.length) { console.log('  skipped:'); skipped.forEach((x) => console.log('   ', x)); }
w.close(); process.exit(0);
