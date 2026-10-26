# Contributing to Celestial skills

Thanks for helping. There are three ways to contribute, from quickest to most involved.

## 1. Ask for a skill

Missing a stack, a journey or a practice your team relies on? [Open a skill request](https://github.com/anandartin/celestial-skills/issues/new?template=skill-request.yml) and say who it's for and what it should cover. Requests with a concrete example ("our checkout for repeat buyers on mobile") get written first.

## 2. Report a problem in a skill

If a skill gives an agent wrong, outdated or unclear instructions — a version that has moved on, a step that doesn't work, an accessibility rule that's off — [report it](https://github.com/anandartin/celestial-skills/issues/new?template=skill-problem.yml). Quote the line, say what's wrong and, if you can, what it should say.

## 3. Write or improve a skill

Skills are written and reviewed on [celestialskill.com](https://celestialskill.com), and this repository is regenerated from there within minutes. That keeps every copy — the site, the downloads and this repository — identical, so **please don't open pull requests that edit `skills/`**; the next sync would overwrite them.

Instead:

1. Sign in at [celestialskill.com](https://celestialskill.com).
2. **New skill:** use *Create a skill* and describe it, or start from a file, website or Figma link. **Improve an existing one:** open it and choose *Reskill* to make your own copy.
3. When it's ready, request publishing. Each public skill is reviewed before it appears.
4. Once approved, it shows up here automatically, credited to you on the site.

By requesting publishing, you agree that your skill is released under this repository's [Apache License 2.0](LICENSE).

## What makes a good skill

- **Original.** Write it yourself; don't copy text from other skill collections, docs or articles. Credit sources you learned from under *Further reading*.
- **Specific and checkable.** Every rule should be something an agent or a reviewer can verify. Prefer "targets of at least 44 × 44 px" to "make it accessible".
- **No brand names in the copy** except the names of the technologies themselves (React, Django, WCAG). Don't name companies as examples.
- **No secrets or personal data** in examples — use environment variables and invented names.
- **Current.** Engineering skills give version ranges and the date they were checked.

## Pull requests

Pull requests are welcome for everything outside `skills/` — the README template and sync script in `.github/sync/`, the workflow, and these docs. Keep changes small and say why.

## Code of conduct

Be kind and assume good intent. Harassment or discrimination of any kind isn't tolerated.
