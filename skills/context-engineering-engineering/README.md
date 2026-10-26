# Context engineering for coding agents

A Celestial engineering skill — how the product is built and shipped.

## What's inside
- `SKILL.md`
- `AGENTS.md`
- `rules/context-engineering-engineering.mdc`
- `README.md`

## Use it
- **Claude Code** — put the `context-engineering-engineering` folder in `~/.claude/skills/` (all projects) or `.claude/skills/` in a repo. Claude uses it whenever a request fits.
- **Claude (claude.ai)** — Settings → Capabilities → Skills → Upload skill, and choose a .zip of this folder. Or add `SKILL.md` to a Project's knowledge.
- **ChatGPT, Gemini and other assistants** — attach `SKILL.md` (and the other files) to the chat or a custom GPT / Gem, or paste the text of `SKILL.md`, then ask, e.g. “Make a 10-slide deck in this brand.”
- **Codex, Copilot, Cursor** — copy `AGENTS.md` to your repo root, `context-engineering-engineering/SKILL.md` to `.github/skills/context-engineering-engineering/`, and `rules/context-engineering-engineering.mdc` to `.cursor/rules/`.

Source: https://celestialskill.com/#/e/context-engineering
