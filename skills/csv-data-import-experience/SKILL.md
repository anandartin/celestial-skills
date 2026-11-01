---
name: csv-data-import-experience
type: experience
journey: user
persona: Operations coordinator (36)
domain: Data operations · import
technology: Desktop web app
core: "1.0"
description: "Experience skill: Importing a spreadsheet of records with column mapping — the best-practice user journey for a operations coordinator (36) in Data operations · import on Desktop web app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Importing a spreadsheet of records with column mapping

A user uploads a spreadsheet, maps columns to fields, fixes errors in place, and imports only clean records with an undo window.

**Outcome** — A user imports a 5,000-row spreadsheet with all valid rows written and every error explained, in under 10 minutes and with no silent data loss.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

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

## AI interactions

- Optional: suggest column mappings and fixes (e.g. date formats) that the user reviews and accepts row by row or in bulk; nothing is changed without acceptance

## Edge cases

- File in an unexpected encoding — show a preview and let the user pick encoding
- Ambiguous dates (03/04) — ask for the format once for the whole column
- User closes browser during import — job continues and emails a report
- Import would exceed plan limits — warn before writing and show the count that fits
- Two users import the same file — detect and warn about likely duplicates

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
