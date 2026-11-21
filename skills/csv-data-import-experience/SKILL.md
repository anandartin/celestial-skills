---
name: csv-data-import-experience
type: experience
journey: user
persona: Operations coordinator (36)
domain: Data operations · import
technology: Desktop web app
core: "1.3"
description: "Experience skill: Importing a spreadsheet of records with column mapping — the best-practice user journey for a operations coordinator (36) in Data operations · import on Desktop web app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Importing a spreadsheet of records with column mapping

A user uploads a spreadsheet, maps columns to fields, fixes errors in place, and imports only clean records with an undo window.

**Outcome** — A user imports a 5,000-row spreadsheet with all valid rows written and every error explained, in under 10 minutes and with no silent data loss.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.3 components and patterns, and let the active design skill render them.

---

## Persona — Rafael, Operations coordinator (36)

> “Show me which rows are wrong and why, let me fix them here, and don't import half a file without telling me.”

Moves a client list from an old system into a scheduling tool for a chain of physiotherapy clinics.

**Goals**
- Import thousands of records in one go
- Fix problems without going back to the spreadsheet
- Avoid duplicates of existing clients

**Pains**
- Imports that fail with one generic error
- Partial imports with no record of what was skipped
- Date formats that silently switch day and month

**Behaviours**
- Exports from the old system as CSV
- Checks a sample of rows before committing
- Runs imports at quiet times of day

**Access needs**
- Red–green colour blindness — errors must not rely on colour
- Uses keyboard shortcuts heavily

---

## Domain — Data operations · import

- Validate the whole file before writing anything; import is all-valid-rows with a clear skipped list, never silent partial writes
- Detect duplicates against existing records using a stated matching rule and let the user choose skip, update or create
- Personal data in imports follows data minimisation; unmapped columns are discarded, not stored
- Escape cells beginning with = + - @ on any later export to prevent formula injection
- Keep an undo window (e.g. 24 hours) and an audit log of who imported what

Vocabulary to use: `column mapping`, `field`, `validation`, `duplicate`, `row error`, `rollback`

## Technology — Desktop web app

Inputs: File upload and drag-and-drop, Keyboard, Mouse, Screen reader

- CSV and XLSX up to 50 MB or 100,000 rows
- Parsing and validation in a background job with progress
- Character encoding detected with manual override

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Upload** | Choose the file to import | `form` | “Upload a CSV or Excel file. Download a template if you're starting fresh” |
| 2 | **Map columns** | Match spreadsheet columns to fields | `form + chips` | “We matched 9 of 11 columns. Check the 2 we couldn't match” |
| 3 | **Review** | See how many rows are ready and what's wrong | `table + totals` | “4,812 ready · 143 with errors · 45 possible duplicates” |
| 4 | **Fix errors** | Correct problems in place or download them | `table + export` | “Row 218: “31/02/2024” isn't a real date” |
| 5 | **Import** | Write the records and watch progress | `progress` | “Importing 4,955 records… you can leave this page” |
| 6 | **Done** | Know what was imported and how to undo | `confirmation` | “4,955 records imported, 45 skipped. Undo until 10:30 tomorrow” |

### 1. Upload

- Drop zone plus a standard file button
- Template download with required columns
- **error:** This file is over 50 MB. Split it into smaller files
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading then the file button; the drop zone is a real button and the template link is next in Tab order.
  - Announced (A11Y-S1): Announces the step title, then the file name and size when chosen; an oversize error is announced assertively.
  - Errors (A11Y-E1): The 50 MB message sits next to the file control in text, naming the limit and a fix; the chosen file stays listed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'CSV or Excel file' and give the limit as '50 megabytes or 100,000 rows'.

### 2. Map columns

- Auto-match by header name, shown for review
- Sample values beside each mapping; date format chosen explicitly
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first column row; each mapping is a labelled select, and Tab moves row by row.
  - Announced (A11Y-S1): Announces '9 of 11 columns matched' politely and each unmatched row as 'needs a field' in text.
  - Errors (A11Y-E1): Unmatched columns are marked with an icon and the words 'Not matched', listed in a summary, and chosen mappings stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Call them 'spreadsheet columns' and 'fields', and keep the names the same as in the template.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The file is parsed and some headers don't match a field by name.
  - Agent goal: Get every column mapped to the right field, with dates read the right way.
  - Agent actions: Says it is an AI assistant that suggests mappings and fixes for the person to accept, and that it never imports. Suggests a field for each unmatched column with sample values and a short reason, marked as suggested by the AI assistant; the person accepts, changes or leaves the column unmapped. For ambiguous dates it asks which format to use for the whole column.
  - Agent tone: Neutral and exact: “Couldn't match”, never “Invalid”.
  - Agent type: Vertical data-import AI assistant; single.
  - Multi-agent handoff: Header auto-match runs first, then the AI assistant suggests for the rest, then the person accepts.
  - Goal failure response: Ambiguous input (03/04 dates, or two columns that could be the phone field): ask once and never guess. Low confidence: leave the column unmapped and say why. Constraint violation (a required field has no column): name the field and offer the template.
  - Failure handover trigger: The person asks for a person: product support immediately, with the handover context package (file name, mapping so far and errors; no row data unless the person agrees).
  - Data needs: Headers, a few sample values per column, target fields and formats.
  - Agent memory: Short-term: this mapping. Procedural: mappings the person saves for files from the same source, viewable and deletable.
  - Regulatory classification: Personal data, possibly health-related because the records are clinic clients; data minimisation applies; minimal AI Act risk with suggestions labelled.

### 3. Review

- Totals: ready, errors, duplicates
- Filter to error rows with the reason in each row
- **loading:** Checking 5,000 rows…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the totals heading; the table has header cells, and arrow keys or Tab move between rows and filters.
  - Announced (A11Y-S1): Announces '4,812 ready, 143 with errors, 45 possible duplicates' politely once checking finishes; progress is not read per row.
  - Errors (A11Y-E1): Errors and duplicates are labelled in text and icon, never colour alone, and each links to its rows.
  - Time limits (A11Y-W1): The checking job runs in the background with no time limit; the person can leave and return.
  - Language (A11Y-L1): Write counts in full with commas and say 'possible duplicates' rather than 'collisions'.

### 4. Fix errors

- Edit cells inline with immediate re-validation
- Export error rows with reasons to fix offline
- **empty:** No errors left. You're ready to import
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first error cell; Tab and arrow keys move through cells, and Enter edits in place.
  - Announced (A11Y-S1): Announces the row and column with each cell, such as 'Row 218, date'; saved fixes are polite, and the empty state is announced.
  - Errors (A11Y-E1): Each error is text beside the cell, such as 'isn't a real date', linked to it; the original value stays until corrected, and errors can be downloaded.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain the date problem in words and show the expected format, such as day, month, year.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person filters to rows with errors or opens one.
  - Agent goal: Suggest a fix for each error that the person can check and accept.
  - Agent actions: Shows a suggested fix beside each fixable error, such as a date in the chosen format, with the original value beside it and the fix marked as suggested by the AI assistant. The person accepts row by row, or in bulk after seeing exactly how many rows will change; accepted fixes are re-validated at once and a bulk fix can be undone.
  - Agent tone: Row, column and fix, in that order.
  - Agent type: Vertical data-import AI assistant; single.
  - Multi-agent handoff: AI assistant suggests, the person accepts, then validation re-checks the row.
  - Goal failure response: Low confidence (“31/02/2024” isn't a real date): offer no fix and leave the row for the person with the reason. Goal drift (a bulk fix would change rows that were fine): show the count and a sample before acceptance. Data unavailable: inline editing and exporting error rows still work.
  - Failure handover trigger: The person asks for a person: product support immediately, with the handover context package.
  - Data needs: Rows with errors and their reasons, the column format rules.
  - Agent memory: Short-term: suggestions and acceptances for this import, recorded in the import report.
  - Regulatory classification: Personal data; every change is traceable to the person who accepted it.

### 5. Import

- Progress by rows with time estimate
- Can leave the page; notified on finish
- **loading:** 1,200 of 4,955
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the progress heading; a Leave page link and a status region are reachable by Tab.
  - Announced (A11Y-S1): Announces progress politely at 25% steps, such as '1,200 of 4,955', not every record.
  - Errors (A11Y-E1): Failed rows are listed afterwards in text; the import starts only after the person selects Import on a reviewed total.
  - Time limits (A11Y-W1): No time limit; the import continues if the person leaves and a message is sent on completion.
  - Language (A11Y-L1): Say 'records' consistently and give totals in full.

### 6. Done

- Counts for created, updated, skipped with a downloadable report
- Undo available for 24 hours
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the done heading; the Undo button and the report link follow in order.
  - Announced (A11Y-S1): Announces '4,955 records imported, 45 skipped' and the undo deadline politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): Undo is available until 10:30 tomorrow; the deadline is written in full and the person is told before it ends.
  - Language (A11Y-L1): Write the deadline with the date and time in full, not only 'tomorrow'.

---

## Principles

1. Validate everything before writing anything
2. Every skipped row has a reason
3. Never guess ambiguous dates
4. Fix errors where they are found
5. Every import can be undone

## Do / Don't

**Do**
- Show sample values next to each mapping
- Let users choose how duplicates are handled
- Give a downloadable import report

**Don't**
- Import valid rows silently and drop the rest
- Store columns that weren't mapped
- Use colour alone to mark errors

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: Drag and drop has a file-button alternative that works by keyboard (WCAG 2.5.7).
- A11Y-C2: Error cells carry an icon and text, not only red (WCAG 1.4.1).
- A11Y-P1: Data tables use header cells so row and column are announced (WCAG 1.3.1).
- A11Y-S1: Import progress is announced politely at 25% intervals, never continuously.
- A11Y-E3: Import starts only after reviewing totals and can be undone until the stated time.
- A11Y-E1: Each error names the row, column and fix next to the cell and keeps the typed value.
- A11Y-W1: Background jobs have no time limit and the person can leave and return.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Name the row, column and fix: “Row 218, Date of birth: use DD/MM/YYYY”
- Counts first, then detail: “143 rows need attention”
- Neutral wording: “Couldn't match” not “Invalid”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- Every column mapping and cell fix from the AI assistant is marked as suggested until the person accepts it, one by one or in bulk, and nothing changes without acceptance
- The AI assistant never guesses an ambiguous date format; the person chooses the format once for the whole column
- The AI assistant never imports, updates existing records or chooses how duplicates are handled; the person confirms the exact counts to create, update and skip
- The import report shows which values came from accepted AI suggestions, and the whole import can be undone for 24 hours
- Unmapped columns are discarded and never passed to the AI assistant; it sees only sample values for mapping and the cells it is asked to fix

## Edge cases

- File in an unexpected encoding — show a preview and let the user pick encoding
- Ambiguous dates (03/04) — ask for the format once for the whole column
- User closes browser during import — job continues and emails a report
- Import would exceed plan limits — warn before writing and show the count that fits
- Two users import the same file — detect and warn about likely duplicates

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Import job — file name, size, encoding, row count, status, started by, started at, undo deadline · relates to Column mapping, Row result, Import report · personal data
- Column mapping — source header, target field, date format, from an accepted AI suggestion (yes or no) · relates to Import job
- Row result — row number, outcome (created, updated, skipped, error), reason, values fixed by accepted AI suggestion · relates to Import job, Client record · personal data
- Client record — name, contact details, date of birth, clinic, created or updated by import · relates to Row result · personal data
- Duplicate rule — matching fields, handling chosen (skip, update, create) · relates to Import job
- Import report — created count, updated count, skipped rows with reasons, who imported, when · relates to Import job · personal data

### Systems it touches

- Upload storage — reads uploaded files; writes uploaded files · when down: Upload fails with a reason; nothing is parsed or written.
- Validation job — reads file, mapping, existing records for duplicates; writes row results · when down: Validation pauses and resumes; nothing is imported until the whole file is checked.
- Records database — reads existing records; writes created and updated records, undo snapshot · when down: The import stops before writing or rolls back the batch; the person sees what was and wasn't written.
- Notification and email service — reads job status; writes finish notices, import reports · when down: The report stays available in the app.
- AI assistant service — reads headers, sample values, cells with errors; writes mapping and fix suggestions labelled as from the AI assistant · when down: Auto-match by header, manual mapping and inline fixing work as normal.

### Roles

- Importer — upload and map, accept or reject AI suggestions, choose duplicate handling, start and undo their import, ask for a person
- Workspace admin — set plan and import limits, read the import audit log, undo any import in the window
- Product support — see job status and error summaries, help with mapping
- AI assistant — suggest column mappings, marked as suggested, suggest fixes for row errors, marked as suggested, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Largest file: 50 MB or 100,000 rows (range set by plan)
- Time to import 5,000 rows, including fixes: under 10 minutes (range 5–15 minutes)
- Import success: 95% (range 90–98%)
- Silent data loss: 0 rows (range 0)
- Undo window: 24 hours (range 1–72 hours)
- Imports undone: under 5% (range 2–8%)
- Uploaded file kept: until the undo window closes (range 0–7 days)

### Required inputs and configuration

- Target fields, required fields and formats
- Template file with required columns
- Duplicate matching rule
- Accepted date formats
- Plan limits
- Undo window and report email settings

---

## Measures

| Measure | Target | How |
|---|---|---|
| Import success | ≥ 95% | Imports finished without abandonment |
| Silent data loss | 0 | Rows neither imported nor listed as skipped |
| Time to import 5,000 rows | < 10 min | Median, upload → done, including fixes |
| Undo usage | < 5% | Imports undone within 24 hrs (proxy for bad imports) |

Research: Tests with real messy customer files under NDA; Task-based usability with keyboard-only and colour-blind users; Log analysis of mapping corrections to improve auto-match.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
