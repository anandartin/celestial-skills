---
name: systematic-debugging-engineering
description: "Engineering practice: Systematic debugging — Reproduce the fault, narrow it down, test one hypothesis at a time and fix the cause, so bugs stay fixed instead of moving around. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Systematic debugging

Reproduce the fault, narrow it down, test one hypothesis at a time and fix the cause, so bugs stay fixed instead of moving around.

Use this whenever a defect, failing test or production incident is not obvious within a few minutes of looking. It replaces guess-and-patch cycles with evidence, and prevents fixes that hide a symptom while the real cause keeps breaking other paths.

## How to do it
1. **Write down the symptom** — Record what was expected, what happened instead, exact error text, environment, version and when it started. Note what you have not yet confirmed.
2. **Reproduce it reliably** — Find the smallest set of steps, inputs or a failing automated test that triggers the fault every time. If it is intermittent, find the condition that raises its frequency (load, timing, data shape) before going further.
3. **Isolate the area** — Shrink the search space: bisect commits, remove inputs, disable components or compare a working and failing environment until one change or module flips the result.
4. **Form one hypothesis** — State a single, falsifiable cause in a sentence, plus the observation that would prove it wrong. Write it in the issue or your notes.
5. **Test the hypothesis** — Add a log line, breakpoint, assertion or experiment that checks only that hypothesis. Change one variable at a time. If it is disproved, record that and form the next one.
6. **Fix the root cause** — Change the code where the wrong behaviour originates, not where it surfaces. If the fix sits downstream as a guard, say why the origin cannot be changed.
7. **Lock it with a regression test** — Turn the reproduction into an automated test that fails without the fix and passes with it. Keep it in the suite permanently.
8. **Check for siblings and clean up** — Search for the same pattern elsewhere in the codebase, remove temporary logging, and write a short note on cause and fix in the pull request.

## Checklist
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

## Do
- Use version-control bisect to find the commit that introduced a regression
- Compare a working case and a failing case side by side and list every difference
- Explain the bug aloud or in writing step by step to expose gaps in your model

## Don't
- Do not add retries, sleeps or broad try/catch blocks to make a symptom go away
- Do not delete or skip a failing test to get the build green
- Do not edit several files speculatively and hope one change helps

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Regression test present | Pull request review + test runner | Every bug-fix pull request adds a test that fails without the fix | Every bug-fix pull request |

## Workflow
**Review**
- Confirm the stated root cause matches the code change
- Revert the fix locally and check the new test fails

**Definition of done**
- Root cause, fix and regression test documented in the pull request
- Original reporter or monitoring confirms the symptom is gone

## Examples
### Bisect a regression automatically (`scripts/bisect.sh`)

```bash
#!/usr/bin/env bash
# Usage: scripts/bisect.sh <good-commit> <test-file>
set -euo pipefail
good="$1"
test_file="$2"

git bisect start
git bisect bad HEAD
git bisect good "$good"
# Exit 0 = good, non-zero = bad, 125 = skip (cannot build)
git bisect run sh -c "npm ci --silent || exit 125; npx vitest run $test_file"
git bisect log > bisect.log
git bisect reset
echo "First bad commit is recorded in bisect.log"
```

## Further reading
- [obra/superpowers](https://github.com/obra/superpowers) — Includes a systematic debugging workflow written as an agent skill.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents, including debugging and investigation flows.
- [Git documentation](https://git-scm.com/doc) — Reference for bisect and the history tools used to isolate regressions.

_Written for Celestial; the sources above inspired it._
