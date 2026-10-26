---
name: code-review-engineering
description: "Engineering practice: Code review — Review a pull request in a fixed order, from whether it is correct to whether it is tested, so real problems are caught and feedback is clear enough to act on. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Code review

Review a pull request in a fixed order, from whether it is correct to whether it is tested, so real problems are caught and feedback is clear enough to act on.

Use this for every pull request you review, whether a teammate or a coding agent wrote it. A consistent pass catches defects, security holes and design drift before merge, and stops reviews that only comment on style or approve without reading.

## How to do it
1. **Read the intent first** — Read the linked issue, description and acceptance criteria before the diff. If you cannot say in one sentence what the change should do, ask before reviewing.
2. **Check size and scope** — If the diff is over about 400 changed lines or mixes unrelated changes, ask for it to be split before a detailed review.
3. **Verify correctness** — Trace the main path and each edge case: empty input, nulls, limits, concurrency, failure of every external call. Run the branch or the preview link when behaviour is user-visible.
4. **Check security** — Look for unvalidated input, injection, missing authorisation checks, secrets in code or logs, unsafe deserialisation and new dependencies with known issues.
5. **Judge design and readability** — Is the code in the right module, with clear names and boundaries? Could a new teammate change it safely? Flag duplication of existing helpers.
6. **Check performance** — Look for queries in loops, unbounded lists, missing pagination or indexes, large bundle additions and work on hot paths.
7. **Check the tests** — Confirm tests cover new behaviour and error paths and would fail if the code were wrong. Mentally flip a condition and ask whether any test catches it.
8. **Write the review** — Label each comment as blocking, suggestion or question, explain why, and propose a fix where you can. Approve only when every blocking item is resolved.

## Checklist
- [ ] The change does what the issue asks, including stated edge cases
- [ ] No input reaches a query, shell, template or file path without validation
- [ ] No secrets, tokens or personal data appear in code, tests or logs
- [ ] New behaviour and failure paths have tests that would catch a regression
- [ ] Names, module placement and boundaries match the surrounding code
- [ ] Every comment is labelled blocking, suggestion or question
- [ ] CI is green on the final commit that was reviewed

## Rules
- Review the behaviour, not the author; phrase comments about the code. _(People act on feedback that does not feel personal.)_
- Treat any new endpoint, permission check or dependency as blocking until reviewed explicitly. _(These are the changes most likely to open a vulnerability.)_
- Leave style and formatting to automated tools; do not spend review comments on them. _(Human attention is the scarce resource in review.)_
- Ask what happens when each external call fails or times out. _(Unhandled failures are the most common gap in otherwise correct code.)_
- Request evidence, such as a query plan or benchmark, when a change touches a hot path. _(Performance claims without measurement are guesses.)_

## Do
- Start a review within one working day of the request
- Point to the exact line and suggest concrete code for non-trivial fixes
- Say what is good when it is notably good, briefly

## Don't
- Do not approve a diff you did not read in full
- Do not block on personal preference without a stated reason
- Do not let a pull request grow during review with unrelated changes

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Required approval | Branch protection on the main branch | At least one approving review from someone other than the author; all blocking comments resolved | Every pull request |

## Workflow
**Review**
- Correctness, security, design, performance, tests, in that order
- Re-review only the changes since your last pass, then confirm blocking items are closed

**Definition of done**
- All blocking comments resolved and CI green on the reviewed commit

## Examples
### Review comment labels (`.github/pull_request_template.md`)

```markdown
## What and why
<!-- One paragraph: the problem and the change. Link the issue. -->

## How to test
<!-- Steps or the preview link. -->

## Risk
- [ ] Touches auth, permissions or payments
- [ ] Adds or upgrades a dependency
- [ ] Changes a database schema

## Reviewer key
- **blocking:** must change before merge
- **suggestion:** worth doing, author decides
- **question:** I need to understand this before approving
```

## Further reading
- [obra/superpowers](https://github.com/obra/superpowers) — Contains agent skills for requesting and responding to code review.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents that include review workflows.
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) — Concise references for the security checks a reviewer should apply.

_Written for Celestial; the sources above inspired it._
