---
name: report-builder-experience
type: experience
journey: user
persona: Finance lead (58)
domain: Business intelligence · reporting
technology: Desktop web app
core: "1.4"
description: "Experience skill: Building and sharing a report from a dashboard — the best-practice user journey for a finance lead (58) in Business intelligence · reporting on Desktop web app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Building and sharing a report from a dashboard

An analyst turns a dashboard view into a report with clear filters, shares it with people who can see the same data, and schedules a regular export.

**Outcome** — A user builds and shares a filtered report in under 5 minutes, and every recipient sees only data they are allowed to see, with the filters stated on the report.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.4 components and patterns, and let the active design skill render them.

---

## Persona — Helen, Finance lead (58)

> “Every month I send the same numbers to the same people. I want to set it once and trust it.”

Runs monthly cost reporting for a regional bus operator's depots; works with screen magnification and keyboard.

**Goals**
- Turn the dashboard view into a monthly report
- Share it only with the right people
- Schedule the export so it goes out on time

**Pains**
- Exports that drop the filters, so numbers look wrong
- Recipients seeing depots they shouldn't
- Charts that can't be read at high zoom

**Behaviours**
- Uses 300% screen magnification
- Navigates mostly by keyboard
- Checks totals against the finance system

**Access needs**
- Low vision — 300% magnification, needs reflow
- Keyboard-only — no hover-only controls

---

## Domain — Business intelligence · reporting

- Reports respect each viewer's data permissions (row-level access); sharing never widens access
- Scheduled exports go only to people inside the organisation or to approved external domains
- Every report and export states its filters, date range and data refresh time
- Personal data columns are masked in shared and exported reports unless the recipient has access
- Changes to a scheduled report are logged with who changed what

Vocabulary to use: `report`, `filter`, `date range`, `schedule`, `recipient`, `data refresh`

## Technology — Desktop web app

Inputs: Keyboard, Mouse, Screen magnifier, Screen reader

- Exports to PDF and CSV; CSV escapes formula-leading characters
- Scheduled runs at a set time zone with retry on failure
- Report queries limited to 60 seconds with a clear timeout message

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Start** | Begin from a dashboard view or a blank report | `dashboard · empty state` | “Create a report from this view” |
| 2 | **Filters** | Set what data the report covers | `list + filters` | “Showing: Last full month · Depots: North, East” |
| 3 | **Build** | Choose the tables and charts and check totals | `table + totals` | “Total cost: £1,284,300 · 4 depots” |
| 4 | **Summary** | Add a written summary of what changed | `AI approval` | “Draft summary: costs rose 4% vs September, mostly fuel. Edit or accept” |
| 5 | **Share** | Share with people who should see it | `form` | “Kofi will see North depot only, based on his access” |
| 6 | **Schedule** | Send the export on a regular schedule | `table + export` | “Next export: Monday 3 November, 08:00 GMT · PDF and CSV” |

### 1. Start

- “Create report from this view” keeps current filters
- Templates for common reports
- **empty:** No reports yet. Start from a dashboard or a template
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; Create a report and the template options are native buttons reachable in order, no hover-only controls.
  - Announced (A11Y-S1): Announces the page title and heading, then the options; the empty state is plain text.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'report' and 'template' in plain words.

### 2. Filters

- Active filters shown as removable chips with text
- Relative dates available: last full month
- **empty:** No data for these filters. Try a wider date range
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first filter; date and depot controls are labelled, and the depot list is a checkbox group.
  - Announced (A11Y-S1): Announces the current filter summary, 'Last full month, depots North, East', and politely the result count.
  - Errors (A11Y-E1): An empty result is explained in text beside the filters, with a suggestion to widen the date range; chosen filters stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write date ranges in words, such as 1 to 30 September.

### 3. Build

- Each chart has a data table alternative
- Totals match the dashboard with the same filters
- **error:** This query took too long. Try fewer depots or a shorter range
- **loading:** Running query…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the table has headers and a caption, and chart elements are reachable with a text table alternative.
  - Announced (A11Y-S1): Announces 'Total cost £1,284,300, 4 depots' politely; 'Running query' is polite; timeouts are assertive.
  - Errors (A11Y-E1): A timeout is explained next to the query with a fewer-depots suggestion; choices stay.
  - Time limits (A11Y-W1): Queries stop after 60 seconds; the person is told in text at 40 seconds that it is taking long and can cancel or narrow it.
  - Language (A11Y-L1): Write the total in pounds in full and explain chart terms in text.

### 4. Summary

- AI draft labelled and editable; user approves before it's saved
- Every figure in the summary links to its source table
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the draft summary; Edit and Accept are buttons in order, and the draft is a text area.
  - Announced (A11Y-S1): Announces the heading, then the draft text, and 'Summary accepted' politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep summaries short, state 'costs rose 4 percent' and say it was drafted by a tool.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The owner chooses Draft summary once the tables and totals are set.
  - Agent goal: Draft a short, accurate account of what changed that the owner can check and sign off.
  - Agent actions: Says it is an AI assistant that drafts summaries from the report's own tables, and that the owner edits and approves it. Drafts two or three sentences labelled as a draft by the AI assistant, with every figure linked to its source table; the owner edits, accepts or discards it, and only accepted text is saved, with their name.
  - Agent tone: Plain and factual: “rose 4%”, not “surged”.
  - Agent type: Vertical reporting AI assistant; single.
  - Multi-agent handoff: The query service supplies the filtered tables, the AI assistant drafts, the owner approves.
  - Goal failure response: Low confidence (a change with no clear cause): state the change and say the cause isn't clear from the data. Data unavailable (query timed out or data is stale): don't draft; say why and show the refresh time. Goal drift (the draft mentions depots outside the filters): drop it and redraft from the filtered tables only. Constraint violation: never quote masked personal data.
  - Failure handover trigger: Totals don't match the finance system: the owner checks with the data owner, and the AI assistant doesn't explain the gap away. The owner asks for a person: product support immediately, with the handover context package.
  - Data needs: The report's filtered tables and totals, the comparison period, the data refresh time.
  - Agent memory: Short-term: the draft. Episodic: accepted summaries kept with the report version and who approved them.
  - Regulatory classification: Minimal AI Act risk; financial reporting accuracy and row-level access rules apply; AI-drafted text labelled and approved by the owner.

### 5. Share

- Show what each recipient will see given their access
- Warn before sharing outside the organisation
- **error:** This email isn't in an approved domain
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the email field; added people are a list with Remove buttons.
  - Announced (A11Y-S1): Announces the label, then each person's access in words, such as 'Kofi sees North depot only'; errors are assertive.
  - Errors (A11Y-E1): The domain error sits beside the email field, linked to it, and the address stays; access is shown for review before sharing.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say what each person will see in plain words.

### 6. Schedule

- Pick format, day, time and time zone
- Show next send date and a run history
- **error:** Last run failed: data source unavailable. We'll retry at 09:00
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; day, time and time zone are labelled controls, and Run now is separate.
  - Announced (A11Y-S1): Announces the next export 'Monday 3 November, 08:00 GMT' politely; the failed run is assertive.
  - Errors (A11Y-E1): The failed-run message is in text with the retry time, 09:00; schedule settings stay.
  - Time limits (A11Y-W1): The retry time is stated in text, and a failed run can be retried or the schedule turned off.
  - Language (A11Y-L1): Write times with the zone, such as 08:00 GMT, and the date in full.

---

## Principles

1. Filters travel with the report everywhere
2. Sharing never widens access
3. Every number traceable to a source
4. Show the data freshness on every view
5. Scheduled jobs report their own failures

## Do / Don't

**Do**
- Preview what each recipient will see
- Print filters and refresh time on exports
- Offer a table view for every chart

**Don't**
- Export without stating filters
- Let sharing override data permissions
- Hide controls behind hover

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-R1: The layout reflows at 400% and 320px width without horizontal scrolling for non-table content (WCAG 1.4.10).
- A11Y-N1: Charts have text alternatives and a data table (WCAG 1.1.1).
- A11Y-K1: All builder actions are keyboard operable with no hover-only controls (WCAG 2.4.7, 2.4.11).
- A11Y-C1: Chart colours meet 3:1 non-text contrast and use patterns or labels as well (WCAG 1.4.11).
- A11Y-W1: Queries over 60 seconds show a warning and can be cancelled or narrowed.
- A11Y-E3: Sharing and scheduling show what will happen for review before being saved, and can be turned off.
- A11Y-E1: Share and filter errors are named in text beside the control and entries are kept.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- State scope in every title: “Depot costs · September 2026 · North, East”
- Times with zone: “08:00 GMT”
- Failures name the cause and next step: “Data source unavailable. Retrying at 09:00”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The written summary is drafted only when the owner asks, is labelled as a draft by the AI assistant, and is saved only after the owner edits or accepts it
- Every figure in the summary links to the table it came from and matches it exactly; a figure that can't be linked is left out
- The AI assistant takes no part in filters, recipients, sharing, access or schedules; who sees what follows the organisation's permission rules exactly
- A recipient whose access is narrower than the report's filters does not see the summary, because it may describe data they cannot see; they get the tables for their access with a note
- A scheduled export includes the summary only for the period it was accepted for; later runs go without it, with a note, until the owner accepts a new one

## Edge cases

- Recipient's access changes after scheduling — next export uses their current access
- Recipient leaves the organisation — removed from schedules and owner notified
- Report query times out — partial results are never sent; owner notified
- Data refresh late at scheduled time — wait up to a set limit, then send with a stale-data note or skip, per owner setting
- Owner deactivated — schedules paused and admin asked to reassign

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Report — title with scope, filters, date range, data refresh time, tables and charts, owner · relates to Summary, Share, Schedule
- Summary — text, drafted by the AI assistant (yes or no), edited by owner, approved by, approved at, period covered, source table links · relates to Report
- Recipient — name, email, inside or outside the organisation, data access scope · relates to Share, Schedule · personal data
- Share — report, recipient, shared by, shared at · relates to Report, Recipient · personal data
- Schedule — formats (PDF, CSV), day, time, time zone, recipients, next run, stale-data rule, owner · relates to Report, Run
- Run — time, status, retries, failure reason, stale-data note · relates to Schedule
- Change log — what changed, who, when · relates to Report, Schedule · personal data

### Systems it touches

- Data query service — reads dashboard data, refresh times · when down: Queries stop after 60 seconds with a clear message; partial results are never sent.
- Permission service — reads row-level access for each person, masked columns · when down: Sharing and scheduled sends wait; nobody receives data that can't be checked.
- Export service — reads report, recipient access; writes PDF and CSV files with filters and refresh time, formula characters escaped · when down: The run fails, is retried at the set time and the owner is told.
- Scheduler and email — reads schedules; writes runs, sends, failure notices · when down: Runs are retried; after the retry limit the owner is notified and nothing partial is sent.
- AI assistant service — reads the report's filtered tables; writes summary drafts labelled as from the AI assistant · when down: The summary is written by hand.

### Roles

- Report owner — build and filter reports, ask for, edit, accept or discard a summary draft, share, schedule and change schedules
- Recipient — view reports limited to their own data access
- Data owner — set row-level access and masked columns, check totals against source systems
- Workspace admin — set approved external domains, reassign schedules of deactivated owners, read change logs
- AI assistant — draft a written summary from the report's tables, labelled as a draft, with figures linked to source, works at most in Advisory mode; no part in access or sharing

### Default targets (the product confirms or replaces them)

- Query time limit: 60 seconds (range 30–120 seconds)
- Time to first shared report: under 5 minutes (range 3–10 minutes)
- Access leaks: 0 (range 0)
- Scheduled export reliability: 99.5% (range 99–99.9%)
- Exports showing filters and refresh time: 100% (range 100%)
- Retry after a failed run: 1 hour (range 15 minutes–4 hours)

### Required inputs and configuration

- Data sources and refresh schedule
- Row-level access rules and masked personal data columns
- Approved external domains
- Report templates
- Default time zone
- Stale-data rule: wait limit, then send with a note or skip

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to first shared report | < 5 min | Median, start → shared |
| Access leaks | 0 | Audit of exports vs recipient permissions |
| Scheduled export reliability | ≥ 99.5% | Runs delivered on time / scheduled runs |
| Reports with filters shown | 100% | Exports containing filter and refresh statement |

Research: Contextual inquiry with finance and operations analysts; Accessibility testing at 300–400% zoom and keyboard-only; Security review of sharing and scheduled export permissions.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
