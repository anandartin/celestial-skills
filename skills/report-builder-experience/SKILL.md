---
name: report-builder-experience
type: experience
journey: user
persona: Finance lead (58)
domain: Business intelligence · reporting
technology: Desktop web app
core: "1.0"
description: "Experience skill: Building and sharing a report from a dashboard — the best-practice user journey for a finance lead (58) in Business intelligence · reporting on Desktop web app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Building and sharing a report from a dashboard

An analyst turns a dashboard view into a report with clear filters, shares it with people who can see the same data, and schedules a regular export.

**Outcome** — A user builds and shares a filtered report in under 5 minutes, and every recipient sees only data they are allowed to see, with the filters stated on the report.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

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

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- State scope in every title: “Depot costs · September 2026 · North, East”
- Times with zone: “08:00 GMT”
- Failures name the cause and next step: “Data source unavailable. Retrying at 09:00”

## AI interactions

- Optional: draft a written summary of changes from the report data; the user edits and approves it, and each figure links to the table it came from
- No AI in deciding who can see what because access must follow the organisation's permission rules exactly

## Edge cases

- Recipient's access changes after scheduling — next export uses their current access
- Recipient leaves the organisation — removed from schedules and owner notified
- Report query times out — partial results are never sent; owner notified
- Data refresh late at scheduled time — wait up to a set limit, then send with a stale-data note or skip, per owner setting
- Owner deactivated — schedules paused and admin asked to reassign

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
