# AGENTS.md — Test-first development

Write a failing test for one small behaviour, make it pass with the least code, then tidy up, so every line you ship is already proven.

## How to do it
1. **List the behaviours** — Before touching code, write a short list of the observable behaviours the change needs, ordered from simplest to hardest. Each item is one sentence a test name could carry.
2. **Pick one vertical slice** — Take the next item from the list. A slice crosses only the layers it needs to produce one visible outcome; do not write all tests up front.
3. **Write one failing test** — Call the code the way a real caller would, assert on the outcome rather than internals, and name the test after the behaviour.
4. **Watch it fail for the right reason** — Run only that test. Confirm the failure message points at the missing behaviour, not at a typo, import error or broken fixture. Fix the test until it fails cleanly.
5. **Make it pass with the least code** — Write the simplest code that turns the test green, even if it looks naive. Do not add branches no test asks for.
6. **Run the whole suite** — Run every test in the affected module. A green new test with a red old test is not progress.
7. **Refactor while green** — Remove duplication, rename for clarity and extract functions in both production and test code, re-running tests after each change. Behaviour must not change in this step.
8. **Commit and repeat** — Commit the slice with its test, cross the item off the list, and add any new cases you discovered as new list items.

## Checklist (before a pull request)
- [ ] Every new behaviour has a test that was seen failing before the code existed
- [ ] Each test asserts on observable output or side effects, not private state
- [ ] No production branch exists without a test that exercises it
- [ ] The full test suite passes locally and in CI
- [ ] Test names read as a description of the behaviour
- [ ] Refactoring commits change no test expectations

## Rules
- Never write production code without a failing test that demands it. _(Code written ahead of a test is code nobody has proven is needed or correct.)_
- Keep each red-green-refactor cycle under about ten minutes; split the behaviour if it takes longer. _(Short cycles keep failures easy to locate and the design easy to change.)_
- Write a test for each error path and boundary value, not only the happy path. _(Edge cases are where defects cluster and where tests pay back the most.)_
- Mock only at boundaries you do not own, such as the network, clock or file system. _(Mocking your own modules couples tests to structure and makes refactoring painful.)_
- Keep unit tests fast enough that the affected suite runs in seconds. _(Slow tests get skipped, which ends the practice.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Changed-line coverage | Coverage report on the diff | At least 90% of changed lines covered | Every pull request |
| Mutation check on changed code | Mutation testing tool for the stack, scoped to changed files | No surviving mutants in new logic | Pull requests that add business logic |

_Generated from the Celestial engineering practice “Test-first development”._
