# AGENTS.md — Launch readiness

Run a fixed set of checks before a production launch, from a tested rollback to named owners and a watch window, so launches are boring and problems are caught while they are small.

## How to do it
1. **Write the rollout plan** — Define the stages (internal users, a small percentage such as 1 to 5, then wider steps to 100), the gate metric for each step, how long each stage lasts and who presses go. Put it behind a flag or traffic split you can change without a deploy.
2. **Test and time the rollback** — Roll back in staging or a production-like environment using the exact steps from the runbook. Record how long it takes from decision to recovered and fix anything that needed improvising.
3. **Make data changes reversible** — Write migrations in expand-and-contract steps so old and new code both work, or take and test-restore a backup before running them. Note which steps cannot be undone and get explicit sign-off on those.
4. **Put monitoring in place first** — Build the dashboard and alerts for error rate, latency, saturation and the feature's key business event before any traffic arrives. Trigger each alert once on purpose to prove it reaches the on-call person.
5. **Check the load** — Estimate peak traffic, compare it with capacity limits, quotas and rate limits of every dependency, and run a load test at least at the expected peak with headroom. Fix or scale anything that saturates.
6. **Brief the people** — Tell on-call what is launching, what can break and where the runbook is. Give support a short note with expected questions, known limits and how to escalate.
7. **Hold the go/no-go** — Walk the checklist in a short meeting or written thread with named owners for engineering, product, on-call and support. Each owner says go or no-go; any no-go stops the launch until resolved.
8. **Watch, then clean up** — Keep an owner watching dashboards through a defined window after each stage, typically the first hours and the next business day. Set a dated task to remove the launch flag and dead code paths once fully rolled out.

## Checklist (before a pull request)
- [ ] A staged rollout plan with gate metrics per stage is written
- [ ] Rollback was rehearsed and its duration recorded
- [ ] Data migrations are reversible or a restore-tested backup exists
- [ ] Dashboards and alerts exist and each alert was fired once as a test
- [ ] Expected peak load was tested against capacity and dependency limits
- [ ] On-call and support were briefed and know where the runbook is
- [ ] Go/no-go was recorded with a named owner for each area
- [ ] A post-launch watch owner and a dated flag cleanup task exist

## Rules
- Never launch without a rollback that has been rehearsed and timed. _(An untested rollback usually fails exactly when you need it.)_
- Load-test to at least the expected peak with headroom and check every dependency's quota. _(Launch traffic finds the smallest limit in the chain first.)_
- Split schema changes so the previous release still works against the new schema. _(It keeps rollback possible after the migration has run.)_
- Review access controls and rate limits on every newly exposed endpoint before the first external stage. _(New surfaces attract abuse as soon as they are discoverable.)_
- Advance each rollout stage only when its gate metric is met for the full stage duration. _(Rushing stages removes the reason for staging.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Rollback rehearsed | Runbook drill in staging | Rollback completed from the runbook within the agreed target, duration recorded | Before the first production stage |
| Go/no-go recorded | Launch checklist in the issue or release ticket | Every checklist item ticked and a go from each named owner | Before each rollout stage beyond internal users |

_Generated from the Celestial engineering practice “Launch readiness”._
