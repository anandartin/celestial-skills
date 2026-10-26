# AGENTS.md — Systematic debugging

Reproduce the fault, narrow it down, test one hypothesis at a time and fix the cause, so bugs stay fixed instead of moving around.

## How to do it
1. **Write down the symptom** — Record what was expected, what happened instead, exact error text, environment, version and when it started. Note what you have not yet confirmed.
2. **Reproduce it reliably** — Find the smallest set of steps, inputs or a failing automated test that triggers the fault every time. If it is intermittent, find the condition that raises its frequency (load, timing, data shape) before going further.
3. **Isolate the area** — Shrink the search space: bisect commits, remove inputs, disable components or compare a working and failing environment until one change or module flips the result.
4. **Form one hypothesis** — State a single, falsifiable cause in a sentence, plus the observation that would prove it wrong. Write it in the issue or your notes.
5. **Test the hypothesis** — Add a log line, breakpoint, assertion or experiment that checks only that hypothesis. Change one variable at a time. If it is disproved, record that and form the next one.
6. **Fix the root cause** — Change the code where the wrong behaviour originates, not where it surfaces. If the fix sits downstream as a guard, say why the origin cannot be changed.
7. **Lock it with a regression test** — Turn the reproduction into an automated test that fails without the fix and passes with it. Keep it in the suite permanently.
8. **Check for siblings and clean up** — Search for the same pattern elsewhere in the codebase, remove temporary logging, and write a short note on cause and fix in the pull request.

## Checklist (before a pull request)
- [ ] A written reproduction exists and triggers the fault before the fix
- [ ] The root cause is stated in one or two sentences in the pull request
- [ ] A regression test fails on the old code and passes on the new
- [ ] Temporary debug output and commented-out code are removed
- [ ] Other occurrences of the same faulty pattern were searched for
- [ ] The fix was verified in the environment where the bug was reported

## Rules
- Change one thing per experiment and record the result. _(Changing several things at once makes it impossible to know which one mattered.)_
- Read the full error message and stack trace before forming any hypothesis. _(The answer is often in the part of the trace people skip.)_
- Do not ship a fix you cannot explain. _(An unexplained fix is a coincidence that will stop working.)_
- Copy production data for reproduction only after removing personal information. _(Debugging must not create a privacy incident.)_
- After three failed hypotheses, step back and re-check your assumptions about inputs, versions and environment. _(Repeated misses usually mean a premise is wrong, not that the next guess will work.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Regression test present | Pull request review + test runner | Every bug-fix pull request adds a test that fails without the fix | Every bug-fix pull request |

_Generated from the Celestial engineering practice “Systematic debugging”._
