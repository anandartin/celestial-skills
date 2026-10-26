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

### 2. Type

- Match partial words, IDs and common misspellings
- Group results by type: records, pages, actions
- **empty:** No matches for “nrthline” — did you mean “Northline”?
- **loading:** Keep previous results visible with a quiet progress bar

### 3. Scope

- Scope chips like Customers, Invoices, Settings
- A typed prefix such as “>” switches to actions only

### 4. Act

- Enter opens; a secondary key opens in a new tab
- Actions show their shortcut next to the name
- **error:** Action failed — say why and keep the palette open with the query

### 5. Confirm

- Destructive actions ask once, naming the item
- Undo offered for at least 10 seconds where possible

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

## Accessibility

- Palette is a modal dialog with role=dialog and a labelled combobox; focus is trapped and returns to the trigger on close (WCAG 2.4.3)
- Result count announced politely after typing pauses, e.g. “6 results”
- Active result exposed with aria-activedescendant; arrow keys move, Enter selects
- Shortcut can be turned off or remapped (WCAG 2.1.4 character key shortcuts)

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
