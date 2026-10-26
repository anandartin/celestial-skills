# AGENTS.md — Technical documentation

Keep a working README, short decision records and docs that change in the same pull request as the code, so people and agents can trust what they read.

## How to do it
1. **Write a README that runs** — Cover what the project is in two sentences, prerequisites with versions, install, run, test and deploy commands, and where to get help. Follow it on a clean machine or container to prove it works.
2. **Record decisions as ADRs** — For each significant technical choice, add a numbered decision record with context, the decision, alternatives considered and consequences. Never edit an accepted record; supersede it with a new one.
3. **Document the architecture briefly** — Keep one page with a simple diagram of the main components, data flow and external dependencies. Link to code entry points rather than describing them in prose.
4. **Explain why in code, not what** — Use comments for intent, constraints and non-obvious trade-offs. Document public functions and APIs with their inputs, outputs and errors.
5. **Update docs with the change** — When a pull request changes setup, configuration, an API or behaviour, update the related docs in that same pull request.
6. **Write for the task** — Organise guides around what the reader is trying to do. Use numbered steps, copyable commands and expected output.
7. **Check docs automatically** — Lint Markdown, check links in CI, and run code samples or commands where practical so broken docs fail the build.

## Checklist (before a pull request)
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

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Docs checks | Markdown linter + link checker in CI | 0 lint errors; 0 broken links | Every pull request touching docs |

_Generated from the Celestial engineering practice “Technical documentation”._
