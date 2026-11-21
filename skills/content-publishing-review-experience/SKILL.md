---
name: content-publishing-review-experience
type: experience
journey: workflow
persona: Content writer (38); editor Marcus; legal reviewer Aisha; brand reviewer Ben
domain: Marketing · editorial governance
technology: Web app (content management)
core: "1.2"
description: "Experience skill: Drafting, reviewing and scheduling a publication — the best-practice workflow for a content writer (38); editor marcus; legal reviewer aisha; brand reviewer ben in Marketing · editorial governance on Web app (content management). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Drafting, reviewing and scheduling a publication

A writer drafts a piece, legal and brand reviewers check it in parallel, and an editor schedules it once every required approval is in.

**Outcome** — Every published piece has all required approvals recorded, and approved pieces go live at the scheduled time with no unreviewed edits.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.2 components and patterns, and let the active design skill render them.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The writer saves a draft or opens the required-items checklist.
  - Agent goal: Catch unevidenced claims, missing alt text and hard-to-read passages before review.
  - Agent actions: Says it is an AI assistant that checks drafts and suggests changes, and that only named reviewers approve. Highlights claims about prices, savings or the environment with no evidence attached, images without alt text and long or complex passages, each with its reason; the writer accepts, edits or dismisses each one. Drafted alt text and rewordings are marked as AI-drafted until accepted.
  - Agent tone: Specific and calm; names the fix.
  - Agent type: Vertical editorial-check AI assistant; single.
  - Multi-agent handoff: Draft autosaves, then the AI assistant checks, then suggestions appear in the checklist.
  - Goal failure response: Low confidence (unsure whether a sentence is a claim): flag it as a question, not an error. Ambiguous input (evidence attached but unclear which claim it supports): ask the writer to link them. Goal drift (a rewording makes a claim stronger): only suggest wording the attached evidence supports. Data unavailable: the checklist works by hand and says the AI check is off.
  - Failure handover trigger: Unsure whether a claim needs evidence: the writer asks Legal through the review request, not the AI assistant. The writer asks for a person: the editor or product support immediately, with the handover context package.
  - Data needs: Draft text, attached evidence, image details and alt text, the reading-level target for the channel.
  - Agent memory: Short-term: suggestions for this version. Episodic: which suggestions were accepted or dismissed, kept with the version history.
  - Regulatory classification: Content governance; claims fall under consumer protection law, so suggestions support but never replace legal review; minimal AI Act risk with suggestions labelled.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: A reviewer requests changes and the writer starts revising.
  - Agent goal: Help the writer address each requested change without resetting more approvals than needed.
  - Agent actions: Re-runs the checks on edited text and, when the writer asks, suggests wording for a reviewer comment, marked as AI-drafted. Before a suggestion is accepted it shows which approvals the edit will reset; the writer decides, and the diff records which changes came from the AI assistant.
  - Agent tone: Brief and practical; suited to short sessions.
  - Agent type: Vertical editorial-check AI assistant; single.
  - Multi-agent handoff: AI assistant suggests, the writer accepts or edits, then the version service records the change and resets the affected approvals.
  - Goal failure response: Goal drift (a suggestion fixes the comment but adds a new claim): re-check and flag it. Constraint violation (a suggestion touches an approved paragraph): say which approval resets. Low confidence about what the reviewer meant: suggest the writer reply to the comment instead.
  - Failure handover trigger: Writer and reviewer disagree: the editor decides, with the comment thread. The writer asks for a person: the editor or product support immediately, with the handover context package.
  - Data needs: Reviewer comments, current and approved versions, which approval covers which paragraph.
  - Agent memory: Short-term: this revision. Episodic: version history with AI-drafted changes marked.
  - Regulatory classification: Content governance; approvals attach to exact versions and the audit trail shows AI-drafted edits.

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

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Feedback is specific: “Replace ‘cheapest’ with a claim we can evidence”
- Status copy names the blocker: “Waiting on Legal (Aisha) · due Wed”
- Schedule copy always includes the time zone

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- Every check result from the AI assistant (an unevidenced claim, missing alt text, a hard-to-read passage) is a labelled suggestion and changes nothing until the writer accepts it
- Approvals come only from named reviewers on an exact version; the AI assistant never approves, requests changes, schedules, publishes or takes down
- A clean AI check never unblocks publishing; the system still blocks until every required approval is current
- Alt text and rewordings drafted by the AI assistant are marked as AI-drafted and must be checked by the writer before the item counts as done
- Accepting an AI suggestion after approval is an edit like any other: the approvals it will reset are shown before it is accepted

## Edge cases

- Urgent correction after publishing — fast-track path with editor and legal approval, logged
- Reviewer away past due date — editor reassigns; writer notified
- Scheduled time passes while an approval is reset — hold publication and alert editor
- Image rights expire — flag published pages using it for replacement
- Takedown request — editor can unpublish immediately with a reason recorded

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Contributor — name, role (writer, editor, legal reviewer, brand reviewer), availability · relates to Version, Approval · personal data
- Piece — title, content type, channels, status (draft, in review, approved, scheduled, live) · relates to Version, Schedule
- Version — number, author, created, diff, changes drafted by the AI assistant · relates to Piece, Approval
- Review request — reviewer, version, due date, notes · relates to Version, Contributor
- Approval — reviewer, version, decision, comments, date, reset by edit (yes or no) · relates to Version, Contributor · personal data
- Claim evidence — claim text, evidence file, version · relates to Version
- Image — file, usage rights, rights expiry, alt text, alt text drafted by the AI assistant (yes or no) · relates to Version
- Schedule — publish time, time zone, channels, scheduled by · relates to Piece
- Publication record — live version, approvals, published at, takedown reason · relates to Piece, Version

### Systems it touches

- Content management system — reads drafts, versions; writes drafts, versions, diffs · when down: Autosave keeps changes on the device and syncs later; the writer is told.
- Approval workflow — reads required reviewers by content type; writes review requests, approvals, resets · when down: Scheduling stays blocked; reviewers and the editor see the delay.
- Asset library — reads image rights, expiry; writes alt text · when down: Images can't be marked ready until rights can be checked.
- Publishing scheduler — reads schedules, approval status; writes live pages, emails, takedowns · when down: Publication is held and the editor is alerted; nothing goes live without current approvals.
- AI assistant service — reads draft text, evidence, image details; writes suggestions labelled as from the AI assistant · when down: The checklist works by hand.

### Roles

- Writer — draft and revise, attach evidence and rights, accept or dismiss AI suggestions, request review
- Editor — set and change reviewers, reassign overdue reviews, schedule, take down with a reason, fast-track urgent corrections with legal approval
- Legal reviewer — approve or request changes on an exact version
- Brand reviewer — approve or request changes on an exact version
- Auditor — read published versions, approvals and change history
- AI assistant — check drafts for unevidenced claims, missing alt text and reading level, draft alt text and wording, marked as AI-drafted, show which approvals an edit resets, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Published pieces with full approvals: 100% (range 100%)
- Review cycle time: 3 working days (range 1–5 working days)
- Edits after approval without re-review: 0 (range 0)
- On-time publishing: 98% (range 95–99.5%)
- Published versions and approvals kept: the legal minimum for the jurisdiction (range set by consumer protection law and organisation policy)

### Required inputs and configuration

- Content types and required reviewers for each
- Claim types that need evidence
- Reading-level target per channel
- Publication time zone and channels for preview
- Urgent correction and takedown policy
- Image rights source

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
