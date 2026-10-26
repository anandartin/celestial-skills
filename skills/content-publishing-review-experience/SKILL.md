---
name: content-publishing-review-experience
type: experience
journey: workflow
persona: Content writer (38); editor Marcus; legal reviewer Aisha; brand reviewer Ben
domain: Marketing · editorial governance
technology: Web app (content management)
core: "1.0"
description: "Experience skill: Drafting, reviewing and scheduling a publication — the best-practice workflow for a content writer (38); editor marcus; legal reviewer aisha; brand reviewer ben in Marketing · editorial governance on Web app (content management). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Drafting, reviewing and scheduling a publication

A writer drafts a piece, legal and brand reviewers check it in parallel, and an editor schedules it once every required approval is in.

**Outcome** — Every published piece has all required approvals recorded, and approved pieces go live at the scheduled time with no unreviewed edits.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Sofia, Content writer (38); editor Marcus; legal reviewer Aisha; brand reviewer Ben

> “Tell me what's blocking it and who's got it, so I'm not chasing people in chat.”

Writes articles and campaign pages for a regional energy cooperative; works part-time with a chronic illness that limits screen time.

**Goals**
- Get clear, specific feedback
- Know when the piece will go live
- Avoid last-minute surprise changes

**Pains**
- Reviewers commenting on old versions
- Vague feedback like “make it pop”
- Edits sneaking in after approval

**Behaviours**
- Writes in focused bursts
- Works asynchronously
- Checks status once a day

**Access needs**
- Chronic fatigue — needs short sessions and saved progress
- Uses dark mode and reduced motion

---

## Domain — Marketing · editorial governance

- Required reviewers are set by content type; publishing is blocked until all approve
- Any edit after approval resets the affected approvals
- Claims about prices, savings or the environment need evidence attached (consumer protection law)
- Images need recorded usage rights and alt text before publishing
- Published versions are kept with their approvals for audit

Vocabulary to use: `draft`, `review`, `approval`, `version`, `schedule`, `takedown`

## Technology — Web app (content management)

Inputs: Keyboard, Pointer, Image upload

- Version history with diffs
- Scheduling in the publication's time zone
- Preview for web and email channels

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Draft** | Write and prepare the piece | `form` | “Draft saved · 2 items needed before review” |
| 2 | **Request review** | Send to the right reviewers | `form + chips` | “Send to Legal and Brand · due Wed 29 Oct” |
| 3 | **Review** | Reviewers check and decide in parallel | `AI approval` | “Approve version 4 for Legal?” |
| 4 | **Revise** | Writer addresses changes | `detail` | “Editing this paragraph will reset Legal's approval” |
| 5 | **Schedule** | Editor sets the publish time | `confirmation` | “Scheduled for Tue 4 Nov, 08:00 GMT · All approvals current” |
| 6 | **Track** | Everyone sees status through to live | `progress` | “Live · Published at 08:00 · View page” |

### 1. Draft

- Autosave with version history
- Checklist of required items: alt text, evidence, rights

### 2. Request review

- Reviewers pre-set by content type, editable by editor
- Due date and notes for each reviewer
- **error:** Add evidence for “save up to 20%” before sending to Legal

### 3. Review

- Comments anchored to text; approve or request changes
- Reviewers see the exact version they approve
- **empty:** Nothing to review today

### 4. Revise

- Show which approvals an edit will reset
- Diff between versions

### 5. Schedule

- Blocked until all approvals are current
- Time shown with time zone and preview

### 6. Track

- Stages: draft, in review, approved, scheduled, live
- Takedown path visible to editors

---

## Principles

1. Approvals attach to versions, not to documents
2. Required reviews are enforced by the system
3. Feedback is anchored and actionable
4. Status is visible to everyone without asking
5. Claims, rights and accessibility are checked before publishing

## Do / Don't

**Do**
- Show which approvals an edit resets
- Attach evidence to claims
- Preview in every channel before scheduling

**Don't**
- Allow edits after approval without re-review
- Publish without alt text
- Hide who is blocking a piece

## Accessibility

- Editor meets WCAG 2.2 AA and supports reduced motion and dark mode
- Alt text required for informative images; decorative images marked as such (WCAG 1.1.1)
- Diff view uses insert/delete markup and text labels, not colour alone (WCAG 1.4.1)
- Published output checked for heading order and link text before scheduling

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Feedback is specific: “Replace ‘cheapest’ with a claim we can evidence”
- Status copy names the blocker: “Waiting on Legal (Aisha) · due Wed”
- Schedule copy always includes the time zone

## AI interactions

- Optional: check drafts for unevidenced claims, missing alt text and reading level, shown as suggestions the writer accepts; approvals are only by named reviewers

## Edge cases

- Urgent correction after publishing — fast-track path with editor and legal approval, logged
- Reviewer away past due date — editor reassigns; writer notified
- Scheduled time passes while an approval is reset — hold publication and alert editor
- Image rights expire — flag published pages using it for replacement
- Takedown request — editor can unpublish immediately with a reason recorded

---

## Measures

| Measure | Target | How |
|---|---|---|
| Pieces with full approvals | 100% | Audit of published versions |
| Review cycle time | ≤ 3 working days | Request review to all approved, median |
| Post-approval edits without re-review | 0 | Version log audit |
| On-time publishing | ≥ 98% | Scheduled vs actual publish time |

Research: Service mapping with writers, editors and reviewers; Usability tests of the review and diff views; Retrospective analysis of past corrections and takedowns.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
