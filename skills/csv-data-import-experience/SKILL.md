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

### 2. Map columns

- Auto-match by header name, shown for review
- Sample values beside each mapping; date format chosen explicitly

### 3. Review

- Totals: ready, errors, duplicates
- Filter to error rows with the reason in each row
- **loading:** Checking 5,000 rows…

### 4. Fix errors

- Edit cells inline with immediate re-validation
- Export error rows with reasons to fix offline
- **empty:** No errors left. You're ready to import

### 5. Import

- Progress by rows with time estimate
- Can leave the page; notified on finish
- **loading:** 1,200 of 4,955

### 6. Done

- Counts for created, updated, skipped with a downloadable report
- Undo available for 24 hours

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

## Accessibility

- Meets WCAG 2.2 AA; drag-and-drop has a button alternative (2.5.7)
- Error cells marked with icon and text, not only red (1.4.1)
- Data table uses proper headers so row and column are announced (1.3.1)
- Progress updates announced at 25% intervals, not continuously

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
