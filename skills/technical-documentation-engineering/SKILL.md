---
name: technical-documentation-engineering
description: "Engineering practice: Technical documentation — Keep a working README, short decision records and docs that change in the same pull request as the code, so people and agents can trust what they read. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Technical documentation

Keep a working README, short decision records and docs that change in the same pull request as the code, so people and agents can trust what they read.

Use this for any repository others will run, change or depend on. Docs that live beside the code and are updated with it prevent stale setup steps, forgotten reasons for past decisions and onboarding that depends on asking the one person who knows.

## How to do it
1. **Write a README that runs** — Cover what the project is in two sentences, prerequisites with versions, install, run, test and deploy commands, and where to get help. Follow it on a clean machine or container to prove it works.
2. **Record decisions as ADRs** — For each significant technical choice, add a numbered decision record with context, the decision, alternatives considered and consequences. Never edit an accepted record; supersede it with a new one.
3. **Document the architecture briefly** — Keep one page with a simple diagram of the main components, data flow and external dependencies. Link to code entry points rather than describing them in prose.
4. **Explain why in code, not what** — Use comments for intent, constraints and non-obvious trade-offs. Document public functions and APIs with their inputs, outputs and errors.
5. **Update docs with the change** — When a pull request changes setup, configuration, an API or behaviour, update the related docs in that same pull request.
6. **Write for the task** — Organise guides around what the reader is trying to do. Use numbered steps, copyable commands and expected output.
7. **Check docs automatically** — Lint Markdown, check links in CI, and run code samples or commands where practical so broken docs fail the build.

## Checklist
- [ ] README install, run and test steps work on a clean environment
- [ ] Significant decisions in this change have an ADR
- [ ] Docs affected by the change are updated in the same pull request
- [ ] Public APIs list inputs, outputs and errors
- [ ] All links in docs resolve
- [ ] Changelog has an entry for user-visible changes

## Rules
- Store docs in the repository next to the code they describe. _(Docs reviewed with the code stay accurate; docs in a separate tool drift.)_
- Never put real credentials, internal hostnames or personal data in docs or examples; use placeholders and environment variable names. _(Docs are copied, shared and indexed widely.)_
- Delete docs that are wrong rather than leaving them with a warning. _(Wrong docs cost more time than missing docs.)_
- Give every diagram a text description and use real headings in order. _(Readers using assistive technology need the same information.)_

## Do
- Keep a CONTRIBUTING file with branch, test and review expectations
- Date ADRs and give each a status: proposed, accepted or superseded
- Write docs a coding agent can follow: exact commands and file paths

## Don't
- Do not describe line by line what the code already says
- Do not leave TODO sections in published docs
- Do not merge behaviour changes without updating the docs they invalidate

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Docs checks | Markdown linter + link checker in CI | 0 lint errors; 0 broken links | Every pull request touching docs |

## Workflow
**Review**
- Ask whether the change invalidates any README step, API doc or ADR

**Definition of done**
- Docs and changelog updated in the same pull request as the behaviour change

## Examples
### Decision record template (`docs/adr/0007-use-postgres-for-jobs.md`)

```markdown
# 7. Use the main Postgres database for background jobs

Date: 2026-10-26
Status: accepted

## Context
We need retries and scheduling for about 2,000 jobs a day. Running a
separate queue service adds another system to operate and monitor.

## Decision
Store jobs in a dedicated table in the existing database and process
them with row-level locking.

## Alternatives considered
- Dedicated message broker: more throughput than we need, more ops.
- In-process timers: lost on restart.

## Consequences
- One less service to run.
- Revisit if volume passes 100,000 jobs a day (see ADR 3 for limits).
```

## Further reading
- [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) — A simple, readable format for recording user-visible changes.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents that include documentation and decision-record workflows.
- [anthropics/skills](https://github.com/anthropics/skills) — Shows how instructions are written so agents can follow them, a useful model for agent-readable docs.

_Written for Celestial; the sources above inspired it._
