# AGENTS.md — Requirements interview

Turn a vague request into a confirmed plan by asking one decision-changing question at a time with a recommended default, so nothing gets built on a guess.

## How to do it
1. **List the unknowns** — Read the request and write down every gap: users, inputs, outputs, scale, constraints, edge cases, deadlines. Check the code, issue history and docs first so you only ask what they cannot answer.
2. **Rank by impact** — Order the unknowns by how much each answer would change the plan. Questions about scope, data shape and irreversible choices go first; naming and styling go last or become defaults.
3. **Ask one question** — Ask the top question alone, in plain words, with two to four concrete options and your recommended default marked with a one-line reason. Wait for the answer before asking the next.
4. **Adjust the list** — After each answer, drop questions it made irrelevant and re-rank the rest. New unknowns raised by the answer join the list in their impact order.
5. **Stop at diminishing returns** — Stop asking when no remaining answer would change the approach, the scope or the estimate. Turn the rest into stated assumptions with your defaults.
6. **Play back the summary** — Write a short summary: goal, users, in scope, out of scope, decisions with their answers, assumptions. Ask for an explicit yes or corrections before any build starts.
7. **Record the decisions** — Save the confirmed summary where the work is tracked (issue, spec or decision log) and link it from the pull request, so later readers see what was agreed and why.

## Checklist (before a pull request)
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

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Decisions recorded | Issue or pull request template check | Work that began as an underspecified request links a confirmed summary with decisions and assumptions | Before the first commit and on the pull request |

_Generated from the Celestial engineering practice “Requirements interview”._
