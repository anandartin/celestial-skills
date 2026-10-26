# AGENTS.md — Task breakdown

Turn a spec into small, ordered tasks that each have acceptance criteria and a check that proves them done, so work can be reviewed, handed to an agent and finished one piece at a time.

## How to do it
1. **Start from the acceptance criteria** — List the spec's acceptance criteria or requirement IDs. Every task you write must serve at least one, and every criterion must be covered by some task.
2. **Find the risky unknowns** — Name anything you cannot estimate: an unfamiliar API, a performance limit, a migration on a large table. Make each a time-boxed spike task that ends in a written answer, placed first.
3. **Slice vertically** — Cut tasks so each delivers a thin piece of behaviour end to end (interface, logic, storage, test) rather than one layer at a time. The first slice is the simplest path that works.
4. **Write each task completely** — Give every task a title, the criteria or IDs it covers, acceptance criteria, files likely touched, the command or test that proves it done, and its dependencies.
5. **Apply a size limit** — Split any task whose diff would take a reviewer more than about 30 minutes, or that touches more than a handful of files. If you cannot name its done check, it is too vague; split or clarify it.
6. **Order by dependency and risk** — Sequence spikes first, then the walking-skeleton slice, then the remaining slices. Mark tasks that can run in parallel and those that block others.
7. **Make it executable one at a time** — Save the list as a checklist in the repository or issue. An agent takes the top unblocked task, completes it, runs its check, ticks it off and stops for review before the next.
8. **Revise as you learn** — When a spike or task changes the picture, update the remaining tasks before continuing. Record removed or deferred tasks rather than deleting them silently.

## Checklist (before a pull request)
- [ ] Every acceptance criterion or requirement ID maps to at least one task
- [ ] Each task has acceptance criteria, likely files, a done check and dependencies
- [ ] No task is larger than about 30 minutes of review
- [ ] Risky unknowns are spikes at the front of the list with a time box
- [ ] Tasks are vertical slices that each leave the build green
- [ ] The order respects dependencies and parallel tasks are marked
- [ ] The task list is saved where the implementer and reviewer can both see it

## Rules
- Every task ends in a state where the build passes and the change could merge on its own. _(Tasks that leave the build broken force several tasks to be reviewed and merged together.)_
- Give every task a done check that a machine or reviewer can run: a test name, a command or a visible result. _(A task without a check cannot be called finished with confidence.)_
- Time-box spikes and throw their code away; keep only the written finding. _(Spike code is written to learn, not to last.)_
- Put schema and migration changes in their own task ahead of the code that depends on them, and make them backward compatible. _(Separating them lets each deploy and roll back independently.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Task size | Pull request size check | Pull requests linked to a task stay under 400 changed lines | Every pull request |

_Generated from the Celestial engineering practice “Task breakdown”._
