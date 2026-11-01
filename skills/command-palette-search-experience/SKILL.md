---
name: command-palette-search-experience
type: experience
journey: user
persona: Operations lead (41), heavy keyboard user
domain: Workplace software · navigation
technology: Web app (desktop browser), also usable on tablet with a keyboard
core: "1.0"
description: "Experience skill: Finding anything in a product with search and a command palette — the best-practice user journey for a operations lead (41), heavy keyboard user in Workplace software · navigation on Web app (desktop browser), also usable on tablet with a keyboard. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Finding anything in a product with search and a command palette

A busy product user jumps to any record, page or action from one keyboard shortcut, with results that are ranked, scoped and safe to act on.

**Outcome** — A user reaches the record or action they want in under five seconds from anywhere in the product, without touching the mouse.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Tomasz, Operations lead (41), heavy keyboard user

> “If I know what I want, I should be able to type it and be there.”

Moves between customer records, reports and settings dozens of times a day; has repetitive strain injury and limits mouse use.

**Goals**
- Open any record by name or number
- Run common actions without hunting through menus
- Get back to recent items quickly

**Pains**
- Search that only matches exact titles
- Results that mix deleted and live items
- Shortcuts that clash with the browser or screen reader

**Behaviours**
- Uses the keyboard for almost everything
- Types partial names and IDs
- Repeats the same few actions each morning

**Access needs**
- Repetitive strain injury — keyboard only
- Uses voice control on bad days

---

## Domain — Workplace software · navigation

- Results respect the user's permissions: never reveal titles of records they cannot open
- Destructive actions from the palette need the same confirmation as from the page
- Search queries are not shared with other users; recent items are per person
- Archived and deleted items are labelled and excluded by default

Vocabulary to use: `command palette`, `global search`, `scope`, `recent items`, `action`, `shortcut`

## Technology — Web app (desktop browser), also usable on tablet with a keyboard

Inputs: Keyboard, Voice control, Screen reader, Pointer

- First results in under 200 ms for recent items, under 800 ms for full search
- Shortcut must not override browser or assistive technology keys
- Index updates within one minute of a change

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Open** | Open the palette from anywhere | `detail` | “Search or type a command…” |
| 2 | **Type** | Narrow results as they type | `list + filters` | “3 customers · 2 invoices · 1 action” |
| 3 | **Scope** | Limit the search to one kind of thing | `form + chips` | “Searching in Invoices · Backspace to search everything” |
| 4 | **Act** | Open a result or run an action | `detail` | “Create invoice  ⌘ I” |
| 5 | **Confirm** | Confirm risky actions before they run | `confirmation` | “Archive “Riverside Supplies”? You can restore it from Archive.” |

### 1. Open

- One documented shortcut plus a visible search button
- Focus lands in the input; the page behind is inert
- **empty:** Show recent items and suggested actions, not a blank list
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands in the search field when the shortcut opens the palette, and returns to the trigger on Escape; the shortcut can be remapped or turned off.
  - Announced (A11Y-S1): Announces a dialog named 'Search or run a command' with the combobox; recent items and suggested actions are read as a labelled list.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use plain command names such as 'Create invoice', and avoid jargon in suggested actions.

### 2. Type

- Match partial words, IDs and common misspellings
- Group results by type: records, pages, actions
- **empty:** No matches for “nrthline” — did you mean “Northline”?
- **loading:** Keep previous results visible with a quiet progress bar
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays in the field; Down and Up arrows move the active result through aria-activedescendant, Enter opens it and filters are reachable by Tab.
  - Announced (A11Y-S1): After a typing pause, announces the count politely, for example '6 results'; the previous results stay while loading, with no spoken progress.
  - Errors (A11Y-E1): The no-matches message names the term and offers the 'Northline' suggestion as a button; the query stays in the field.
  - Time limits (A11Y-W1): No time limit; results appear within 200 milliseconds for recent items and 800 for full search.
  - Language (A11Y-L1): State counts in words such as '3 customers, 2 invoices, 1 action' and use the person's own terms.

### 3. Scope

- Scope chips like Customers, Invoices, Settings
- A typed prefix such as “>” switches to actions only
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays in the field; Backspace on an empty field clears the scope, and scope chips can also be chosen with Tab and Enter.
  - Announced (A11Y-S1): Announces 'Searching in Invoices' politely when the scope changes; removing the scope announces 'Searching everything'.
  - Errors (A11Y-E1): Nothing can fail here; the scope can be removed by keyboard and the typed query is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name scopes as plain nouns, such as Invoices, and show the Backspace hint as text.

### 4. Act

- Enter opens; a secondary key opens in a new tab
- Actions show their shortcut next to the name
- **error:** Action failed — say why and keep the palette open with the query
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the chosen result; Enter runs it, and the shown shortcut for each action is read as text, for example 'Command I'.
  - Announced (A11Y-S1): Announces the action result politely, such as 'Invoice created'; a failure is announced assertively and focus returns to the field.
  - Errors (A11Y-E1): A failed action says why in text under the field, keeps the palette open and keeps the query; no input is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show shortcuts as words as well as symbols, and say why an action failed in one plain sentence.

### 5. Confirm

- Destructive actions ask once, naming the item
- Undo offered for at least 10 seconds where possible
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirm dialog and lands on the safe button, Cancel; Tab reaches Archive, and Escape cancels.
  - Announced (A11Y-S1): Announces the dialog title 'Archive Riverside Supplies?' and its description about restoring from Archive; the outcome is announced politely.
  - Errors (A11Y-E1): Archiving is confirmed first, can be restored from Archive, and Escape cancels without change; this step has a clear way back.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name the item in full in the question and say 'restore' rather than 'undo archive'.

---

## Principles

1. Keyboard first, but every path also works with a pointer and voice
2. Recent and frequent items appear before anything is typed
3. Results are grouped and labelled by type
4. Permissions apply to every result and every action
5. The palette never runs a destructive action without confirmation

## Do / Don't

**Do**
- Show the shortcut for each action in the result row
- Keep the query when an action fails
- Let users remap the opening shortcut

**Don't**
- Hijack common browser or screen reader keys
- Show titles of records the user cannot access
- Reorder results while the user is moving through them

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: The palette is a modal dialog with role=dialog and a labelled combobox; focus is trapped and returns to the trigger on close (WCAG 2.4.3).
- A11Y-S1: The result count is announced politely after typing pauses, for example '6 results'.
- A11Y-K1: The active result is exposed with aria-activedescendant; arrow keys move and Enter selects.
- A11Y-K1: The opening shortcut can be turned off or remapped and never overrides browser or assistive technology keys (WCAG 2.1.4).
- A11Y-E3: Risky actions ask for confirmation first, default focus is on Cancel, and the item can be restored.
- A11Y-E1: A failed action keeps the palette open with the query and states the reason in text.
- A11Y-F1: The active result and focused chips have a visible focus indicator at 3:1 contrast.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Placeholder says what is possible: “Search or type a command…”
- Action names are verbs: “Create invoice”, not “Invoice creation”
- No-match copy suggests a fix: “Try a customer number or check the spelling”

## AI interactions

- Optional: suggest likely actions from recent behaviour, shown in a separate “Suggested” group the user can turn off; never runs an action on its own

## Edge cases

- User lacks permission for a matching record — show nothing, not a locked title
- Index is behind after a bulk import — label results “May be out of date” and offer a full search
- Two records share a name — show a second line with ID and owner
- Palette opened inside a form with unsaved changes — opening a result asks before leaving

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to target | < 5 s | Median from shortcut to record open, product analytics |
| Search success | ≥ 90% | Sessions where a result is opened after a query |
| Zero-result queries | < 5% | Share of queries with no results, reviewed weekly |
| Keyboard-only completion | 100% | Accessibility test of top 20 tasks |

Research: Task-based usability tests with keyboard-only and voice-control users; Query log review to find misspellings and missing synonyms; Screen reader testing across two reader and browser pairs.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
