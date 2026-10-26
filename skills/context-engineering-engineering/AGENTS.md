# AGENTS.md — Context engineering for coding agents

Give a coding agent the right information at the right time, and nothing else, so it follows your conventions, touches the right files and needs fewer corrections.

## How to do it
1. **Write a compact instructions file** — Keep an AGENTS.md or CLAUDE.md at the repository root with the exact install, test, lint and build commands, the folder map, coding conventions and hard boundaries. Aim for under 150 lines; link to longer docs instead of inlining them.
2. **State boundaries explicitly** — List what the agent must never do without asking: touch migrations, change public APIs, edit generated files, push, add dependencies. Name the folders that are off limits.
3. **Load only the files the task needs** — Start each task by naming the spec, the entry files and one example of the pattern to follow. Let the agent search for the rest rather than pasting whole directories.
4. **Point to sources of truth** — Reference the schema, the API contract, the design tokens or the spec by path instead of pasting copies into the prompt. Copies drift; paths stay current.
5. **Scope tools and connections** — Enable only the tools and MCP servers the task uses, with the narrowest permissions: read-only database access for investigation, no production credentials, no write access to systems the task does not change.
6. **Start a fresh session per task** — Begin each unrelated task in a new session so earlier dead ends, abandoned plans and old file contents do not steer the new work.
7. **Summarise and reset long sessions** — When a session grows long or starts repeating mistakes, have the agent write a short state summary (goal, decisions, done, next, open questions) to a file, then continue in a new session from that summary.
8. **Measure and tune** — Track rework: review comments per agent pull request, reverted agent commits and repeated corrections. When the same correction appears twice, add one line to the instructions file or fix the doc it points to.

## Checklist (before a pull request)
- [ ] The repository has a root instructions file with working commands, a folder map, conventions and boundaries
- [ ] Every command in the instructions file runs successfully on a clean checkout
- [ ] The task prompt names the spec or issue, the entry files and an example to follow
- [ ] Only the tools and connections the task needs are enabled, with least privilege
- [ ] No secrets, tokens, customer data or personal data were placed in the prompt or loaded files
- [ ] Long sessions were summarised into a state file before being reset
- [ ] Repeated review corrections were turned into an instructions-file change

## Rules
- Never put secrets, tokens, production connection strings or personal data into prompts, instructions files or files the agent is asked to read; reference environment variable names only. _(Anything in context can be echoed into code, logs, commits or third-party services.)_
- Exclude .env files, credential stores and customer data exports from what the agent can read. _(An agent searching the repository will read whatever it finds.)_
- Keep the instructions file short, specific and current; delete lines that no longer change behaviour. _(Long instruction files dilute the rules that matter and go stale.)_
- Write conventions as concrete examples or file references, not adjectives. _("Follow src/api/orders.ts" is actionable; "write clean code" is not.)_
- Prefer search and targeted file reads over loading whole folders or dumps. _(Irrelevant context costs tokens and pulls attention away from the files that matter.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Instructions file current | CI job that runs each command listed in the instructions file | All listed commands exit 0 on a clean checkout | Every pull request that touches the instructions file or build config |
| No secrets in agent context | Secret scanner over instructions files and prompt templates | 0 findings | Every pull request |

_Generated from the Celestial engineering practice “Context engineering for coding agents”._
