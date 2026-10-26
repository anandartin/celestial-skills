---
name: test-first-development-engineering
description: "Engineering practice: Test-first development — Write a failing test for one small behaviour, make it pass with the least code, then tidy up, so every line you ship is already proven. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Test-first development

Write a failing test for one small behaviour, make it pass with the least code, then tidy up, so every line you ship is already proven.

Use this when adding behaviour or fixing a bug in code that has a test runner, especially when the logic has edge cases or will change often. Working in thin red-green-refactor slices keeps the design driven by real usage and stops untested branches, speculative code and tests that pass for the wrong reason.

## How to do it
1. **List the behaviours** — Before touching code, write a short list of the observable behaviours the change needs, ordered from simplest to hardest. Each item is one sentence a test name could carry.
2. **Pick one vertical slice** — Take the next item from the list. A slice crosses only the layers it needs to produce one visible outcome; do not write all tests up front.
3. **Write one failing test** — Call the code the way a real caller would, assert on the outcome rather than internals, and name the test after the behaviour.
4. **Watch it fail for the right reason** — Run only that test. Confirm the failure message points at the missing behaviour, not at a typo, import error or broken fixture. Fix the test until it fails cleanly.
5. **Make it pass with the least code** — Write the simplest code that turns the test green, even if it looks naive. Do not add branches no test asks for.
6. **Run the whole suite** — Run every test in the affected module. A green new test with a red old test is not progress.
7. **Refactor while green** — Remove duplication, rename for clarity and extract functions in both production and test code, re-running tests after each change. Behaviour must not change in this step.
8. **Commit and repeat** — Commit the slice with its test, cross the item off the list, and add any new cases you discovered as new list items.

## Checklist
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

## Do
- Start with the most trivial case to set up the test harness and call shape
- Use one assertion focus per test so a failure names exactly one broken behaviour
- Treat a test that passes on first run as suspect and check it can fail

## Don't
- Do not write a batch of tests and then implement them all at once
- Do not change a test's expectation to make it pass without understanding why it failed
- Do not refactor while any test is red

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Changed-line coverage | Coverage report on the diff | At least 90% of changed lines covered | Every pull request |
| Mutation check on changed code | Mutation testing tool for the stack, scoped to changed files | No surviving mutants in new logic | Pull requests that add business logic |

## Workflow
**Review**
- Check the commit history shows tests arriving with or before the code they cover
- Flip one condition in the new code and confirm a test fails

**Definition of done**
- Behaviour list fully crossed off, each item backed by a test
- Suite green with no skipped or focused tests left behind

## Examples
### One slice: red then green (`src/pricing/discount.test.ts`)

```typescript
import { describe, it, expect } from 'vitest';
import { applyDiscount } from './discount';

describe('applyDiscount', () => {
  it('returns the original total when no code is given', () => {
    expect(applyDiscount(100, undefined)).toBe(100);
  });

  it('takes 10% off with code SAVE10', () => {
    expect(applyDiscount(100, 'SAVE10')).toBe(90);
  });

  it('never returns a negative total', () => {
    expect(applyDiscount(5, 'FLAT20')).toBe(0);
  });

  it('rejects an unknown code with a clear error', () => {
    expect(() => applyDiscount(100, 'NOPE')).toThrow(/unknown discount code/i);
  });
});
```

## Further reading
- [obra/superpowers](https://github.com/obra/superpowers) — An open-source agent skill library that includes a test-driven development workflow for coding agents.
- [mattpocock/skills](https://github.com/mattpocock/skills) — Engineering skills for agents with a strong focus on test-first work.
- [Refactoring](https://refactoring.com/) — A catalogue of the small, named changes to use in the refactor step.

_Written for Celestial; the sources above inspired it._
