# AGENTS.md — Feature flags

Ship code dark, roll it out in stages, switch it off in seconds, and delete the flag once the rollout is done.

## How to do it
1. **Pick the flag type** — Release flag (temporary, hides unfinished work), experiment flag (temporary, splits users for measurement), operational kill switch (long-lived, disables a costly or fragile path), or permission flag (long-lived, entitlement). Record the type when creating it.
2. **Create the flag with an owner and expiry** — Name it area_change in snake_case, set the owner, the type, a removal date for temporary flags, and a safe default that is used when the flag service is unreachable.
3. **Evaluate at one decision point** — Read the flag once per request near the edge and pass the result down. Keep both code paths tested; the off path must be today's behaviour.
4. **Roll out in stages** — Internal users, then 1%, 10%, 50%, 100%, holding at each step long enough to see error rate, latency and the journey's key metric. Use sticky bucketing by user or account ID.
5. **Define the kill criteria in advance** — Write which metric movement turns the flag off (e.g. error rate up 0.5 points or p95 latency up 20%) and who may flip it. Flipping off must not need a deploy.
6. **Remove the flag after full rollout** — Within two weeks of 100%, delete the flag check, the old code path, its tests and the flag definition in one pull request. Archive the flag in the flag service last.

## Checklist (before a pull request)
- [ ] Flag has an owner, a type and, if temporary, a removal date
- [ ] Default value is safe when the flag service is down
- [ ] Tests cover both the on and off paths
- [ ] Rollout stages and kill criteria are written in the pull request or ticket
- [ ] Flag changes are audited: who changed what, when
- [ ] No temporary flag is older than its removal date

## Rules
- Never use a client-side flag to protect data or permissions; enforce access on the server. _(Client flags can be read and flipped by anyone with developer tools.)_
- Evaluate flags from a locally cached rule set; never make a network call per check. _(Flag checks sit in hot paths and must not add latency or a new failure point.)_
- Do not nest flags or make one flag depend on another. _(Combinations grow exponentially and untested paths reach production.)_
- Log flag variant with analytics events and traces for any flagged code path. _(Lets you compare outcomes between variants and spot which one caused an incident.)_
- Database schema changes behind a flag use expand-then-contract so both paths work at once. _(Turning a flag off must not break on data written by the other path.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Stale flag check | CI script comparing flag definitions to code references and expiry dates | 0 temporary flags past removal date; 0 flags defined but unreferenced | Every pull request and weekly |

_Generated from the Celestial engineering practice “Feature flags”._
