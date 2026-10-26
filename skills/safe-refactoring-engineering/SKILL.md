---
name: safe-refactoring-engineering
description: "Engineering practice: Safe refactoring — Restructure code in small steps that never change behaviour, each one checked by tests, so the design improves without new bugs. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Safe refactoring

Restructure code in small steps that never change behaviour, each one checked by tests, so the design improves without new bugs.

Use this before adding a feature to code that resists change, or when cleaning up duplication, long functions or tangled modules. Keeping every step behaviour-preserving and tested prevents the big-bang rewrite that breaks things nobody knew depended on the old shape.

## How to do it
1. **Name the goal** — Write one sentence on the structure you want and why, for example 'move pricing rules out of the controller so the new tax rule has one home'.
2. **Secure a safety net** — Run the tests that cover the code. If coverage is thin, add characterisation tests that pin current behaviour, including odd behaviour, before changing anything.
3. **Separate refactoring from behaviour change** — Do the refactor on its own branch or in its own commits. Feature or bug-fix changes come after, in separate commits.
4. **Take one small step** — Apply one named move: rename, extract function, inline, move module, introduce parameter. Prefer the editor's automated refactorings where they exist.
5. **Run tests after every step** — Run the relevant tests and the type checker. If anything fails, undo the step rather than debugging forward.
6. **Commit each green step** — Commit after each working step with a message naming the move. Small commits make bisecting and review simple.
7. **Keep public interfaces stable** — When a widely used function or API must change, add the new form, migrate callers, then remove the old form in a later step.
8. **Review the diff as pure structure** — Before the pull request, read the diff and confirm no logic, output or test expectation changed. Note any deliberate exception.

## Checklist
- [ ] Tests covering the touched code passed before and after the refactor
- [ ] No test expectations were changed except renames that follow the code
- [ ] Refactoring commits contain no feature or bug-fix changes
- [ ] Each commit builds and passes tests on its own
- [ ] Old interfaces kept during migration are marked deprecated with a removal plan
- [ ] Type checker and linter report no new errors

## Rules
- Never refactor code that has no tests covering it; add characterisation tests first. _(Without a safety net you cannot tell a refactor from a rewrite.)_
- Keep each refactoring pull request focused on one structural goal. _(Reviewers can verify behaviour is unchanged only when the diff has one purpose.)_
- Benchmark before and after when refactoring a hot path. _(Cleaner code can still be slower, and that is a behaviour change users notice.)_
- Preserve error types, messages and status codes callers rely on. _(Callers often branch on errors, so changing them breaks contracts silently.)_

## Do
- Use automated rename and extract tools to avoid manual slips
- Leave the code slightly better each time you touch it, in small moves
- Stop and ship when the goal is met rather than polishing further

## Don't
- Do not mix a refactor and a behaviour change in the same commit
- Do not push through a red test by changing its expectation
- Do not rewrite a module from scratch when a sequence of small moves will do

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Behaviour unchanged | Full test suite + snapshot or contract tests | All pass with no changed expectations | Every refactoring pull request |

## Workflow
**Review**
- Confirm the diff changes structure only; ask for any logic change to be split out

**Definition of done**
- Stated structural goal met with all tests green and no changed expectations

## Further reading
- [Refactoring](https://refactoring.com/) — The catalogue of named refactorings to use as small, safe steps.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents, including code-simplification and cleanup workflows.
- [mattpocock/skills](https://github.com/mattpocock/skills) — Agent skills that pair test-first work with improving code structure.

_Written for Celestial; the sources above inspired it._
