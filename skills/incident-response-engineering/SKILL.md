---
name: incident-response-engineering
description: "Engineering practice: Incident response — Clear roles, mitigation before diagnosis and a blameless postmortem, so outages end sooner and do not repeat. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Incident response

Clear roles, mitigation before diagnosis and a blameless postmortem, so outages end sooner and do not repeat.

Use whenever users are affected by a production problem, or one is likely within minutes. It prevents several people changing things at once, long silences toward stakeholders, and the same failure returning because nobody followed up.

## How to do it
1. **Declare early and open one channel** — Anyone who sees user impact declares an incident, picks a severity from the written scale and opens a single incident channel. Downgrading later is cheap; declaring late is not.
2. **Assign roles** — Name an incident commander who coordinates and decides, an operations lead who makes changes, and a communications lead who updates stakeholders. In a small team one person may hold two roles, never all three.
3. **Mitigate first** — Stop the user impact before finding the root cause: roll back the last deploy, turn off the feature flag, fail over, shed load or scale up. Prefer the reversible action.
4. **Keep a timeline as you go** — Write timestamped entries in the channel for each observation, hypothesis, action and result. Announce every production change before making it.
5. **Communicate on a schedule** — Post a status update at a fixed interval (every 30 minutes for high severity) with impact, current action and next update time, even when nothing has changed.
6. **Resolve and hand off** — Close the incident when user impact has ended and metrics are back within objective. Record any temporary mitigations that must be undone.
7. **Write a blameless postmortem within five working days** — Cover summary, impact (who, how many, how long), timeline, contributing factors, what went well, what was hard and action items. Describe systems and decisions, not individuals' failings.
8. **Track action items to completion** — Each action item has an owner, a due date and a ticket. Review open items weekly until all are closed or explicitly dropped with a reason.

## Checklist
- [ ] A severity scale and an on-call rota are written down and known
- [ ] The incident had a named commander from the start
- [ ] The timeline records every production change with a timestamp
- [ ] Stakeholders received updates at the agreed interval
- [ ] The postmortem is published and reviewed within five working days
- [ ] Every action item has an owner, a ticket and a due date
- [ ] A test, alert or guardrail now exists that would catch the same failure

## Rules
- Only the operations lead changes production during an incident, and only after announcing the change. _(Parallel, unannounced changes make it impossible to know what fixed or worsened things.)_
- Suspected security incidents follow the security escalation path; preserve logs and do not wipe affected hosts before evidence is captured. _(Containment and forensics need data that a quick rebuild destroys.)_
- Postmortems measure impact in user terms: affected users, failed requests, duration and data affected. _(Impact in user terms sets priority for the follow-up work.)_
- Action items change systems (tests, alerts, limits, automation, docs), not people's carefulness. _("Be more careful" does not prevent recurrence; guardrails do.)_

## Do
- Keep a ready-made incident template with roles, severity table and update format
- Ask "how did the system allow this?" rather than "who did this?"
- Run a practice incident each quarter so roles feel familiar

## Don't
- Debug the root cause while users are still affected and a rollback is available
- Name or blame individuals in the postmortem
- Close the incident while a temporary mitigation is unrecorded

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Postmortem on time | Incident tracker | 100% of high-severity incidents have a published postmortem within 5 working days | After every high-severity incident |
| Action items closed | Issue tracker filtered by postmortem label | ≥ 90% of action items closed or explicitly dropped by their due date | Reviewed weekly |

## Workflow
**Review**
- Postmortem reviewed in a meeting with the responders and at least one engineer from outside the team

**Definition of done**
- Postmortem published, action items ticketed, and the regression test or alert merged

## Examples
### Postmortem outline (`docs/postmortems/2026-10-24-checkout-errors.md`)

```markdown
# Checkout errors — 2026-10-24

Severity: SEV-2 · Commander: on-call lead · Status: action items open

## Summary
A config change halved the database connection pool; checkout failed for 18% of requests for 42 minutes.

## Impact
- ~3,100 failed checkout attempts; no data lost
- Detected by burn-rate alert 6 minutes after deploy

## Timeline (UTC)
- 14:02 Deploy of config change
- 14:08 Page: checkout SLO fast burn
- 14:19 Rollback started
- 14:44 Error rate back within objective; incident resolved

## Contributing factors
- Pool size had no validation or staging load test

## What went well / what was hard

## Action items
- [ ] Validate pool size range in config schema — owner, due date, ticket
- [ ] Add saturation panel to checkout dashboard — owner, due date, ticket
```

## Further reading
- [Site Reliability Engineering (book)](https://sre.google/sre-book/table-of-contents/) — Chapters on managing incidents and postmortem culture.
- [obra/superpowers](https://github.com/obra/superpowers) — Agent workflow skills including systematic debugging and root-cause tracing.
- [anthropics/skills](https://github.com/anthropics/skills) — Skill format reference for packaging a runbook or postmortem template as a skill.

_Written for Celestial; the sources above inspired it._
