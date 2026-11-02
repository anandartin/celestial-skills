# Privacy by design

A Celestial engineering skill — how the product is built and shipped.

## What's inside
- `SKILL.md`
- `AGENTS.md`
- `rules/privacy-by-design-engineering.mdc`
- `README.md`

## Use it
- **Claude Code** — put the `privacy-by-design-engineering` folder in `~/.claude/skills/` (all projects) or `.claude/skills/` in a repo. Claude uses it whenever a request fits.
- **Claude (claude.ai)** — Settings → Capabilities → Skills → Upload skill, and choose a .zip of this folder. Or add `SKILL.md` to a Project's knowledge.
- **ChatGPT, Gemini and other assistants** — attach `SKILL.md` (and the other files) to the chat or a custom GPT / Gem, or paste the text of `SKILL.md`, then ask, e.g. “Make a 10-slide deck in this brand.”
- **Codex, Copilot, Cursor** — add `AGENTS.md` at the root of the app it describes (in a monorepo, that app's folder), `privacy-by-design-engineering/SKILL.md` to `.github/skills/privacy-by-design-engineering/`, and `rules/privacy-by-design-engineering.mdc` to `.cursor/rules/`.
- **Already have an `AGENTS.md`?** Don't replace it: append this file's sections under a `## Privacy by design` heading and keep your own instructions above it. Where they disagree, decide which wins and delete the other line.
- **Combining skills** — use one *stack* skill per app (two stacks in one folder give conflicting conventions); *practice* skills (code review, testing, security …) combine with any stack. The Cursor rule only applies to files the agent asks it for.

Source: https://celestialskill.com/#/e/privacy-by-design
