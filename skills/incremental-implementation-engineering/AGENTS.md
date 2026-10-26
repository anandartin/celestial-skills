# AGENTS.md — Incremental implementation

Build in thin vertical slices that each compile, pass tests and get committed, so you always have a working save point and any mistake costs one small revert.

## How to do it
1. **Pick one slice** — Take the next task from the plan and define the smallest piece of behaviour that works end to end. Write down the check that will prove it: usually one test.
2. **Start from green** — Run the build and tests before changing anything. If they already fail, stop and report or fix that first; never start a slice on a red baseline.
3. **Make one thing fail** — Add or change a single test for the slice and watch it fail for the expected reason. Keep only one failing thing at a time.
4. **Make it pass with a small diff** — Write the least code that turns that test green without breaking others. Defer cleanup and generalisation to a later step.
5. **Run the full checks** — Run lint, type checks and the relevant test suite. The slice is not done until all of them pass.
6. **Commit a checkpoint** — Commit the green slice with a message naming the task or requirement ID. Each commit is a save point you can return to. Hide unfinished user-facing behaviour behind a feature flag so the commit could ship.
7. **Tidy, then commit again** — Refactor with tests green, as a separate commit. Never mix behaviour changes and cleanup in one commit.
8. **Stop and report when stuck** — If a slice is still red after a few focused attempts or a set time box, revert to the last checkpoint and report: the goal, what was tried, the exact failure output and a proposed next step. Do not pile on further changes.

## Checklist (before a pull request)
- [ ] The baseline was green before the first change
- [ ] Every commit compiles and passes lint, types and tests
- [ ] No commit contains more than one slice of behaviour
- [ ] Behaviour changes and refactors are in separate commits
- [ ] Unfinished user-facing behaviour is behind a flag that defaults off
- [ ] Any slice that could not be made green was reverted and reported
- [ ] The pull request diff is small enough to review in one sitting

## Rules
- Never have more than one failing test or broken thing at a time. _(With one failure, the cause is the last change; with several, you are debugging combinations.)_
- Commit after every green slice, and never commit red. _(Green checkpoints make rollback a single revert and keep bisecting useful.)_
- Roll back by reverting the slice's commit, not by hand-editing code back. _(A revert is exact and recorded; manual undo leaves fragments behind.)_
- Build the error and empty states in their own slices, each with a test. _(Edge cases added at the end tend to be skipped under deadline.)_
- Ship schema changes as additive slices before the code that uses them, and remove old columns in a later slice. _(Each step stays deployable and reversible on its own.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Green commits | CI run on every pushed commit | Every commit in the pull request passes lint, types and tests | Every push |
| Small diffs | Pull request size check | Under 400 changed lines; no single commit over 200 | Every pull request |

_Generated from the Celestial engineering practice “Incremental implementation”._
