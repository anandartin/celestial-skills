# AGENTS.md — Spec before code

Write a one-page spec and a step plan before implementing, then build and check against it, so the work matches what was asked the first time.

## How to do it
1. **State the problem** — Write two or three sentences on who has the problem, what they cannot do today and why it matters now. Leave solutions out of this part.
2. **Define acceptance criteria** — List the observable outcomes that mean done, each written so a test or a reviewer can check it. Include error and empty cases.
3. **Mark scope and non-goals** — List what is in scope and, just as explicitly, what is out. Name any constraints: performance targets, compatibility, deadlines.
4. **Sketch the approach** — Describe the design in a few paragraphs: modules touched, data changes, interfaces, and alternatives you rejected with one line each on why.
5. **Resolve open questions** — List unknowns and get answers from the requester or owner before coding. Unanswered questions become explicit assumptions in the spec.
6. **Break it into steps** — Split the work into ordered tasks that each end in a green build and a reviewable commit. Note which acceptance criterion each step satisfies.
7. **Build against the plan** — Implement step by step, ticking tasks off. When reality differs from the plan, update the spec first, then the code.
8. **Verify against the spec** — Before opening the pull request, walk every acceptance criterion and show evidence (test name, screenshot, preview link). Link the spec in the pull request.

## Checklist (before a pull request)
- [ ] The spec has a problem statement, acceptance criteria, non-goals and an approach
- [ ] Every acceptance criterion is testable and has evidence attached
- [ ] Open questions are answered or recorded as assumptions
- [ ] The plan's steps are all complete or explicitly deferred
- [ ] The spec was updated where the build departed from it
- [ ] The pull request links the spec

## Rules
- Keep the spec to about one page; split the feature if it needs more. _(Long specs go unread and hide the decisions that matter.)_
- Write acceptance criteria as observable behaviour, never as implementation steps. _(Criteria tied to implementation cannot catch a wrong design.)_
- Call out every schema, API contract or data migration in the approach section. _(These are the hardest changes to undo after release.)_
- Note who is allowed to do each new action and how that is enforced. _(Authorisation decided during coding is often forgotten.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Spec linked | Pull request template check | Pull requests over 200 changed lines link a spec with acceptance criteria | Every pull request |

_Generated from the Celestial engineering practice “Spec before code”._
