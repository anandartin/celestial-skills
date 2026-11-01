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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus returns to the last edited field after a reload; Tab reaches the editor, the checklist and Save, and the checklist items link to the field they need.
  - Announced (A11Y-S1): 'Draft saved' is announced politely after autosave and '2 items needed before review' is read as a list of the missing items.
  - Errors (A11Y-E1): Missing alt text, evidence or rights are named beside the item and listed in a summary with links; all text typed is kept.
  - Time limits (A11Y-W1): No time limit; progress is saved automatically so short sessions can stop and resume.
  - Language (A11Y-L1): Say 'rights' and 'evidence' with a one-line explanation, and use plain names for checklist items.

### 2. Request review

- Reviewers pre-set by content type, editable by editor
- Due date and notes for each reviewer
- **error:** Add evidence for “save up to 20%” before sending to Legal
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the reviewer list; Tab reaches each reviewer chip, due date and note, and chips are removed with Delete.
  - Announced (A11Y-S1): Reviewers and due date are read in full as 'Legal, due Wednesday 29 October'; sending is announced politely.
  - Errors (A11Y-E1): The missing evidence for “save up to 20%” is named beside the claim, linked from a summary, and the request and notes are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write due dates in full with the weekday and month, and name teams by what they check.

### 3. Review

- Comments anchored to text; approve or request changes
- Reviewers see the exact version they approve
- **empty:** Nothing to review today
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the document heading; Tab goes through comments in text order, then Approve and Request changes as separate buttons.
  - Announced (A11Y-S1): The question 'Approve version 4 for Legal?' is read with the version number; the decision is announced politely and the empty state is read as text.
  - Errors (A11Y-E1): Approval is a signing action, so it shows the exact version first and allows changing the decision; a comment left unfinished is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'approve' and 'request changes' plainly and keep version numbers and the team name in the button label.

### 4. Revise

- Show which approvals an edit will reset
- Diff between versions
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the warning when an edit would reset approval; Tab reaches Continue editing and Cancel, and the diff is navigable change by change.
  - Announced (A11Y-S1): The warning is read before the edit proceeds, 'Editing this paragraph will reset Legal's approval'; diff changes are labelled 'inserted' and 'removed'.
  - Errors (A11Y-E1): The reset warning names which approvals are affected before the edit, and Cancel keeps the text exactly as it was.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain 'reset' as 'Legal will need to approve again'.

### 5. Schedule

- Blocked until all approvals are current
- Time shown with time zone and preview
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the schedule heading; the date and time can be typed, and the preview and Schedule buttons follow in order.
  - Announced (A11Y-S1): 'Scheduled for Tuesday 4 November, 08:00 GMT' is announced politely, with the time zone spoken in full.
  - Errors (A11Y-E1): Scheduling is blocked with a text reason if an approval is stale; the time can be corrected or the schedule cancelled before it goes live.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Always show date, time and time zone in full, such as 08:00 GMT, and never just 'tomorrow'.

### 6. Track

- Stages: draft, in review, approved, scheduled, live
- Takedown path visible to editors
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the status heading; stages are an ordered list, and the Takedown button is reachable by keyboard for editors.
  - Announced (A11Y-S1): Each stage change is announced politely, 'Live, published at 08:00', and the current stage is marked in text.
  - Errors (A11Y-E1): Takedown asks for a confirmation and can be reversed by republishing; a failed publish is named in text.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name stages in plain words and keep 'takedown' explained as 'remove from the site'.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C1: The editor meets contrast of 4.5:1 for text in light and dark themes.
- A11Y-M1: Animation is removed or reduced when the person asks the system for reduced motion, including stage changes.
- A11Y-N1: Informative images require alt text before review, and decorative images are marked as such.
- A11Y-C2: The diff view uses insert and delete labels as well as colour, so changes show without colour.
- A11Y-N1: Published output is checked for heading order and meaningful link text before scheduling.
- A11Y-E1: Missing checklist items are named beside the field and listed in a summary with links, and typed content is kept.
- A11Y-E3: Scheduling shows approvals and the time zone first and can be cancelled before it goes live.
- A11Y-W1: Autosave keeps progress so no session has to be finished in one go, and there is no time limit.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

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
