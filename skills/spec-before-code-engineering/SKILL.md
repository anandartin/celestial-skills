---
name: spec-before-code-engineering
description: "Engineering practice: Spec before code — Write a one-page spec and a step plan before implementing, then build and check against it, so the work matches what was asked the first time. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Spec before code

Write a one-page spec and a step plan before implementing, then build and check against it, so the work matches what was asked the first time.

Use this for any change larger than a small fix, and always before handing work to a coding agent. A short written spec surfaces open questions and scope early, and prevents rework from misread requirements, scope creep and changes nobody can verify.

## How to do it
1. **State the problem** — Write two or three sentences on who has the problem, what they cannot do today and why it matters now. Leave solutions out of this part.
2. **Define acceptance criteria** — List the observable outcomes that mean done, each written so a test or a reviewer can check it. Include error and empty cases.
3. **Mark scope and non-goals** — List what is in scope and, just as explicitly, what is out. Name any constraints: performance targets, compatibility, deadlines.
4. **Sketch the approach** — Describe the design in a few paragraphs: modules touched, data changes, interfaces, and alternatives you rejected with one line each on why.
5. **Resolve open questions** — List unknowns and get answers from the requester or owner before coding. Unanswered questions become explicit assumptions in the spec.
6. **Break it into steps** — Split the work into ordered tasks that each end in a green build and a reviewable commit. Note which acceptance criterion each step satisfies.
7. **Build against the plan** — Implement step by step, ticking tasks off. When reality differs from the plan, update the spec first, then the code.
8. **Verify against the spec** — Before opening the pull request, walk every acceptance criterion and show evidence (test name, screenshot, preview link). Link the spec in the pull request.

## Checklist
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

## Do
- Get the requester to confirm the acceptance criteria before you start
- Keep the spec next to the code or linked from the issue so it is easy to find
- Give a coding agent the spec and plan as its task, not a one-line request

## Don't
- Do not start coding while a question that changes the design is still open
- Do not let the spec silently drift from what was built
- Do not pad the spec with background nobody needs to make a decision

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| Spec linked | Pull request template check | Pull requests over 200 changed lines link a spec with acceptance criteria | Every pull request |

## Workflow
**Review**
- Review the spec before the code; approve the approach first
- Check each acceptance criterion against evidence in the pull request

**Definition of done**
- All acceptance criteria verified with evidence
- Spec reflects what was actually built

## Examples
### One-page spec template (`docs/specs/_template.md`)

```markdown
# <Feature name>

Status: draft | agreed | built
Owner: <name>   Issue: <link>

## Problem
<Who, what they cannot do, why now.>

## Acceptance criteria
- [ ] Given <state>, when <action>, then <observable result>
- [ ] Error: when <failure>, the user sees <message> and can <recover>

## Non-goals
- <Explicitly out of scope>

## Approach
<Modules, data changes, interfaces. Rejected options, one line each.>

## Open questions / assumptions
- <Question> -> <answer or assumption>

## Plan
1. <Step> (criteria 1)
2. <Step> (criteria 2)
```

## Further reading
- [obra/superpowers](https://github.com/obra/superpowers) — Includes brainstorming, spec and plan-writing skills that agents follow before coding.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills that cover planning and spec-driven work for agents.
- [anthropics/skills](https://github.com/anthropics/skills) — Shows the skill format used to hand structured plans to an agent.

_Written for Celestial; the sources above inspired it._
