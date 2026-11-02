// Regenerate this repository from the public Celestial library (run by .github/workflows/sync.yml).
//
//   node .github/sync/export.mjs <repo-dir> [--site <url-or-path-to-index.html>] [--exclude id,id]
//
// Each public, admin-approved skill becomes skills/<slug>/ with the same files as the site's Download, built by the site's
// own skillFiles() from the live page (or a local index.html), minus uploaded font files, whose licences may not allow
// redistribution. Skills listed in .github/sync/config.json "exclude" (and --exclude) are left out. Writes the catalogue
// README.md; LICENSE, NOTICE and .github are left alone. skills/ is replaced, so unpublished or deleted skills disappear.
//
// Safe by construction: the export is built in a temporary folder and validated (every expected skill present, required
// files and metadata, no unresolved token aliases, local links resolve, no sudden drop in the catalogue). Only a complete,
// valid export replaces skills/; anything else exits non-zero and the workflow commits nothing.
import { JSDOM, VirtualConsole } from 'jsdom';
import { readFile, writeFile, mkdir, rm, rename, readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';

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
// fingerprint of the site code these files were built with; the site's Worker compares it with what is deployed and asks for a
// sync when they differ, so a code change reaches this repository after a deploy without anyone starting a sync by hand
const siteVersion = createHash('sha256').update(page).digest('hex').slice(0, 16);
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

const fail = (msg) => { console.error(`✗ ${msg}\nNothing was replaced.`); process.exit(1); };
const total0 = groups.reduce((n, g) => n + g.items.length, 0);
if (!total0) fail('the library returned no public skills');
const stage = join(out, '.skills-next');
await rm(stage, { recursive: true, force: true });
let files = 0; const skipped = [];
for (const g of groups) for (const s of g.items) {
  let list;
  try { list = w.skillFiles(s, g.kind, { fonts: false }); } catch (e) { skipped.push(`${s.id}: ${e.message}`); continue; }
  const fontNote = (s.fontFiles || []).length ? `\n## Fonts\nFont files aren't included here — their licences may not allow redistribution. Install ${[...new Set(s.fontFiles.map((f) => f.family))].join(', ')} from the type foundry or your licensed copy.\n` : '';
  for (const f of list) {
    let data = f.data;
    if (f.name.endsWith('/README.md') && f.name.split('/').length === 2) data = data.replace('and choose this .zip', 'and choose a .zip of this folder') + fontNote;
    const p = join(stage, f.name);
    await mkdir(dirname(p), { recursive: true });
    await writeFile(p, data);
    files++;
  }
  s._slug = slugify(s.slug || s.name);
}

// ── validate the whole export before it replaces anything ──
const problems = [];
if (skipped.length) problems.push(...skipped.map((x) => `could not build ${x}`));
const exists = async (p) => stat(p).then(() => true, () => false);
const expected = groups.flatMap((g) => g.items.filter((s) => s._slug).map((s) => ({ s, kind: g.kind, dir: join(stage, s._slug) })));
for (const { s, kind, dir } of expected) {
  const md = await readFile(join(dir, 'SKILL.md'), 'utf8').catch(() => null);
  if (md === null) { problems.push(`${s._slug}: SKILL.md missing`); continue; }
  const fm = (md.match(/^---\n([\s\S]*?)\n---/) || [])[1] || '';
  if (!/^name:\s*\S/m.test(fm)) problems.push(`${s._slug}: frontmatter has no name`);
  if (!/^description:\s*\S/m.test(fm)) problems.push(`${s._slug}: frontmatter has no description`);
  if (!(await exists(join(dir, 'README.md')))) problems.push(`${s._slug}: README.md missing`);
  if (kind === 'design') {
    const tok = await readFile(join(dir, 'tokens.json'), 'utf8').catch(() => null);
    if (tok === null) problems.push(`${s._slug}: tokens.json missing`);
    else { try { JSON.parse(tok); } catch { problems.push(`${s._slug}: tokens.json is not valid JSON`); }
      const alias = tok.match(/"\$value"\s*:\s*"\{[^}]+\}"/g); if (alias) problems.push(`${s._slug}: tokens.json has unresolved aliases ${alias.slice(0, 3).join(', ')}`); }
  }
  // local links in the package's markdown must resolve inside the package
  for (const f of (await readdir(dir, { recursive: true })).filter((x) => x.endsWith('.md'))) {
    const text = await readFile(join(dir, f), 'utf8');
    for (const m of text.matchAll(/\]\((?!https?:|mailto:|#)([^)\s#]+)/g)) if (!(await exists(join(dir, dirname(f), m[1])))) problems.push(`${s._slug}/${f}: broken link ${m[1]}`);
  }
}
// a sudden drop usually means the library or site failed to load, not that skills were withdrawn
const before = (await readdir(join(out, 'skills')).catch(() => [])).length;
if (before && expected.length < before * 0.8) problems.push(`catalogue would shrink from ${before} to ${expected.length} skills (more than 20%)`);
if (problems.length) { await rm(stage, { recursive: true, force: true }); fail(`export failed validation (${problems.length}):\n  ${problems.slice(0, 40).join('\n  ')}`); }
await rm(join(out, 'skills'), { recursive: true, force: true });
await rename(stage, join(out, 'skills'));
console.log(`✓ validated ${expected.length} skills`);

const row = (s, kind) => `| [${s.name}](skills/${s._slug}/) | ${String(s.tagline || '').replace(/\|/g, '/').replace(/\s+/g, ' ').trim()} |`;
const total = groups.reduce((n, g) => n + g.items.filter((s) => s._slug).length, 0);
const n = (k) => (groups.find((g) => g.kind === k) || { items: [] }).items.filter((s) => s._slug).length;
await writeFile(join(out, 'README.md'), `<p align="center"><img src=".github/assets/social-preview.png" alt="Celestial skills — ${total} open skills for AI agents" width="100%"></p>

<p align="center">
  <a href="LICENSE"><img alt="Licence: Apache-2.0" src="https://img.shields.io/badge/licence-Apache--2.0-blue"></a>
  <img alt="${total} skills" src="https://img.shields.io/badge/skills-${total}-7c5cff">
  <a href="https://celestialskill.com"><img alt="Browse on celestialskill.com" src="https://img.shields.io/badge/browse-celestialskill.com-111"></a>
</p>

# Celestial skills

**${total} open skills that teach AI agents how your product should look, work and be built** — ${n('design')} design skills (how a brand looks), ${n('experience')} experience skills (how a journey works) and ${n('engineering')} engineering skills (how it's built and shipped), all written on one shared core so they work together.

Each folder in [\`skills/\`](skills/) is one skill: a \`SKILL.md\` your agent reads, plus tokens, a logo, \`AGENTS.md\` or editor rules where the skill has them.

## Quick start

**Claude Code — one skill** (the whole folder, into your personal skills):

\`\`\`bash
npx degit anandartin/celestial-skills/skills/sign-up-and-verify-experience ~/.claude/skills/sign-up-and-verify-experience
\`\`\`

Put it in \`.claude/skills/\` inside a repository instead to share it with your team. Claude picks a skill up whenever a request fits.

**Any agent that reads skills** (Claude Code, Codex, Cursor, OpenCode and more) — pick from the library with the open [skills CLI](https://www.npmjs.com/package/skills):

\`\`\`bash
npx skills add anandartin/celestial-skills
\`\`\`

It asks which skills and agents to install; add \`--skill <name>\` for one skill, or \`-g\` to install for every project.

**ChatGPT, Gemini, claude.ai and other assistants** — attach or paste a skill's \`SKILL.md\` into the chat (on claude.ai you can also zip a folder and upload it under Settings → Capabilities → Skills).

**Codex, Copilot, Cursor** — engineering skills include \`AGENTS.md\` and \`rules/<name>.mdc\`; each skill's README says where they go.

## See it work

Skills are layers. Install one of each and ask for the work:

\`\`\`bash
npx degit anandartin/celestial-skills/skills/mercury-design ~/.claude/skills/mercury-design
npx degit anandartin/celestial-skills/skills/sign-up-and-verify-experience ~/.claude/skills/sign-up-and-verify-experience
npx degit anandartin/celestial-skills/skills/react-web-app-engineering ~/.claude/skills/react-web-app-engineering
\`\`\`

> **You:** Build our sign-up and email verification flow.

The agent now has three things it didn't have before:

| Layer | Skill | What the agent takes from it |
|---|---|---|
| How it looks | \`mercury-design\` | Colours, type, spacing, components and the brand's rules, as tokens it can apply |
| How it works | \`sign-up-and-verify-experience\` | The persona, each step and screen, the copy, empty / loading / error states, accessibility rules and the measures of success |
| How it's built | \`react-web-app-engineering\` | The stack, folder structure, conventions and the quality gates to pass before it's done |

So the first draft follows your brand, covers the edge cases and passes your checks — instead of you correcting each one afterwards.

Browse, preview and remix every skill — and see each one rendered in any design skill — at [celestialskill.com](https://celestialskill.com).

${groups.map((g) => `## ${g.title} (${g.items.filter((s) => s._slug).length})

${g.blurb}.

| Skill | What it covers |
|---|---|
${g.items.filter((s) => s._slug).map((s) => row(s, g.kind)).join('\n')}
`).join('\n')}
## Contributing

Requests, fixes and new skills are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). The skills are written and reviewed on [celestialskill.com](https://celestialskill.com) and this repository updates itself from there within minutes, so please don't edit \`skills/\` directly; changes there are overwritten.

## Licence

[Apache License 2.0](LICENSE). The licence covers the skill text and files; it grants no rights to any trademark, brand name or logo a skill describes.
`);

await writeFile(join(out, '.github', 'sync', 'site-version'), siteVersion + '\n');
console.log(`${total} skills · ${files} files → ${out}`);
console.log(`  site version ${siteVersion}`);
groups.forEach((g) => console.log(`  ${g.title}: ${g.items.filter((s) => s._slug).length}`));
if (exclude.size) console.log(`  excluded: ${[...exclude].join(', ')}`);
w.close(); process.exit(0);
