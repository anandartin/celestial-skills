# AGENTS.md — Incident response

Clear roles, mitigation before diagnosis and a blameless postmortem, so outages end sooner and do not repeat.

## How to do it
1. **Declare early and open one channel** — Anyone who sees user impact declares an incident, picks a severity from the written scale and opens a single incident channel. Downgrading later is cheap; declaring late is not.
2. **Assign roles** — Name an incident commander who coordinates and decides, an operations lead who makes changes, and a communications lead who updates stakeholders. In a small team one person may hold two roles, never all three.
3. **Mitigate first** — Stop the user impact before finding the root cause: roll back the last deploy, turn off the feature flag, fail over, shed load or scale up. Prefer the reversible action.
4. **Keep a timeline as you go** — Write timestamped entries in the channel for each observation, hypothesis, action and result. Announce every production change before making it.
5. **Communicate on a schedule** — Post a status update at a fixed interval (every 30 minutes for high severity) with impact, current action and next update time, even when nothing has changed.
6. **Resolve and hand off** — Close the incident when user impact has ended and metrics are back within objective. Record any temporary mitigations that must be undone.
7. **Write a blameless postmortem within five working days** — Cover summary, impact (who, how many, how long), timeline, contributing factors, what went well, what was hard and action items. Describe systems and decisions, not individuals' failings.
8. **Track action items to completion** — Each action item has an owner, a due date and a ticket. Review open items weekly until all are closed or explicitly dropped with a reason.

## Checklist (before a pull request)
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

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Postmortem on time | Incident tracker | 100% of high-severity incidents have a published postmortem within 5 working days | After every high-severity incident |
| Action items closed | Issue tracker filtered by postmortem label | ≥ 90% of action items closed or explicitly dropped by their due date | Reviewed weekly |

_Generated from the Celestial engineering practice “Incident response”._
