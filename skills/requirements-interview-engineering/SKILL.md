---
name: requirements-interview-engineering
description: "Engineering practice: Requirements interview — Turn a vague request into a confirmed plan by asking one decision-changing question at a time with a recommended default, so nothing gets built on a guess. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Requirements interview

Turn a vague request into a confirmed plan by asking one decision-changing question at a time with a recommended default, so nothing gets built on a guess.

Use this when a request leaves out who it is for, what done looks like, or a choice that would change the design. A short, ordered interview replaces long question lists nobody answers, and prevents building the wrong thing, silent assumptions and rework after the demo.

## How to do it
1. **List the unknowns** — Read the request and write down every gap: users, inputs, outputs, scale, constraints, edge cases, deadlines. Check the code, issue history and docs first so you only ask what they cannot answer.
2. **Rank by impact** — Order the unknowns by how much each answer would change the plan. Questions about scope, data shape and irreversible choices go first; naming and styling go last or become defaults.
3. **Ask one question** — Ask the top question alone, in plain words, with two to four concrete options and your recommended default marked with a one-line reason. Wait for the answer before asking the next.
4. **Adjust the list** — After each answer, drop questions it made irrelevant and re-rank the rest. New unknowns raised by the answer join the list in their impact order.
5. **Stop at diminishing returns** — Stop asking when no remaining answer would change the approach, the scope or the estimate. Turn the rest into stated assumptions with your defaults.
6. **Play back the summary** — Write a short summary: goal, users, in scope, out of scope, decisions with their answers, assumptions. Ask for an explicit yes or corrections before any build starts.
7. **Record the decisions** — Save the confirmed summary where the work is tracked (issue, spec or decision log) and link it from the pull request, so later readers see what was agreed and why.

## Checklist
- [ ] Only questions the code and docs could not answer were asked
- [ ] Questions were asked one at a time, highest impact first
- [ ] Each question offered options and a recommended default
- [ ] Remaining unknowns are written down as assumptions
- [ ] The requester confirmed the summary before building began
- [ ] Decisions are recorded in the issue, spec or decision log

## Rules
- Ask exactly one question per message and wait for the answer. _(A batch of questions gets partial answers and the most important one is often skipped.)_
- Attach a recommended default and its reason to every question. _(It lets the requester answer with a single word and shows your reasoning.)_
- Do not start building until the summary is confirmed. _(Code written before agreement anchors everyone on the first guess.)_
- Ask about data ownership, retention and migrations before any UI detail. _(Data decisions are the most expensive to reverse.)_
- Ask who may see and change each new piece of data when the request touches permissions or personal data. _(Access rules left implicit end up decided by accident in code.)_

## Do
- Look things up yourself before asking someone else
- Phrase options so each leads to a visibly different result
- Keep the playback short enough to read in under a minute

## Don't
- Do not send a numbered list of ten questions at once
- Do not ask about details your default already covers well
- Do not treat silence as agreement; ask for a clear yes

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Decisions recorded | Issue or pull request template check | Work that began as an underspecified request links a confirmed summary with decisions and assumptions | Before the first commit and on the pull request |

## Workflow
**Review**
- Check the build against the confirmed summary, not the original request

**Definition of done**
- Confirmed summary linked from the pull request
- Every assumption either confirmed or still listed as open

## Examples
### Question and playback format (`docs/templates/requirements-interview.md`)

```markdown
**Question 2 of ~4: Who can export reports?**

This decides whether we need a new permission and an audit log.

- A. Only workspace admins
- B. Admins and members with an "analyst" role
- C. Everyone in the workspace

**Recommended: A.** It needs no new role and we can widen access later
without breaking anyone. Reply with a letter or your own answer.

---

**Summary for confirmation**

- Goal: admins export monthly usage as CSV
- In scope: CSV export, last 12 months, admin only
- Out of scope: scheduled exports, PDF
- Decisions: Q1 CSV only; Q2 admins only (A)
- Assumptions: max 50k rows; times in the workspace time zone

Reply "yes" to start, or correct any line.
```

## Further reading
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for agents that cover clarifying requirements before planning.
- [obra/superpowers](https://github.com/obra/superpowers) — Includes a brainstorming skill that refines an idea through focused questions before any plan.
- [mattpocock/skills](https://github.com/mattpocock/skills) — Engineering skills that pair well with this practice when moving from agreed requirements to tests.

_Written for Celestial; the sources above inspired it._
