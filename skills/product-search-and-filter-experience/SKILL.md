---
name: product-search-and-filter-experience
type: experience
journey: customer
persona: Shopper (34), buying a replacement kettle
domain: Retail e-commerce
technology: Responsive web, mobile first
core: "1.3"
description: "Experience skill: Finding a product in a large catalogue with search and filters — the best-practice customer journey for a shopper (34), buying a replacement kettle in Retail e-commerce on Responsive web, mobile first. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Finding a product in a large catalogue with search and filters

A shopper narrows thousands of products to a short list they trust, using forgiving search and filters that never hide how many results remain.

**Outcome** — A shopper reaches a product page that matches their need in under two minutes, with fewer than 10% of searches ending on zero results.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.3 components and patterns, and let the active design skill render them.

---

## Persona — Rohan, Shopper (34), buying a replacement kettle

> “I know roughly what I want. Let me type it badly and still find it.”

Shops on her phone during a commute; has dyslexia and often misspells product names.

**Goals**
- Find products that meet two or three must-have needs
- Compare a short list without reopening the search
- Trust that filters are not hiding good options

**Pains**
- Zero results because of one misspelt word
- Filters that reset when she goes back
- Sponsored items mixed in without a label

**Behaviours**
- Types short, partial queries
- Sorts by rating before price
- Opens several products in a row and returns to the list

**Access needs**
- Dyslexia — relies on typo tolerance and suggestions
- Uses one hand on a crowded train

---

## Domain — Retail e-commerce

- Paid or sponsored placements are labelled as such next to the item (consumer protection and advertising rules)
- Prices shown in lists include mandatory taxes where the law requires total pricing
- Ranking that is personalised says so and offers a non-personalised sort (EU Digital Services Act transparency)
- Search queries are not stored against an identity without consent (GDPR data minimisation)

Vocabulary to use: `query`, `facet / filter`, `sort order`, `result count`, `in stock`, `sponsored`

## Technology — Responsive web, mobile first

Inputs: Touch, Keyboard, Voice dictation, Screen reader

- Suggestions return in under 200 ms at the 95th percentile
- Filter and sort state kept in the URL so back and share work
- Works on a slow 3G connection with results paginated or loaded in batches of 24

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Search** | Type a rough query and get useful suggestions | `form + chips` | “Search 12,400 products” |
| 2 | **Results** | See a ranked list with the count and the active sort | `list + filters` | “248 results for “kettle” · Sorted by relevance” |
| 3 | **Filter** | Narrow by the needs that matter | `form + chips` | “Show 31 results” |
| 4 | **Compare** | Shortlist two to four products side by side | `table + totals` | “Compare 3 kettles” |
| 5 | **Open product** | Go to the chosen product and return without losing the list | `detail` | “Back to 31 results” |

### 1. Search

- Typo tolerance and synonyms on by default
- Suggestions show categories as well as products
- **error:** Search is slow right now — show popular categories instead
- **loading:** Keep the typed text; show suggestions as they arrive without moving focus
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays in the search field; arrow keys move through suggestions, Enter selects one, Escape closes the list, and Tab reaches the search button.
  - Announced (A11Y-S1): The field is a combobox with a visible label; the suggestion count is announced politely and focus does not move as suggestions arrive.
  - Errors (A11Y-E1): The slow-search message is text under the field with popular categories, linked to it; the typed text is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Accept rough spelling and say what is shown, for example “Showing popular categories”; avoid search jargon.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The shopper types or dictates a plain-language request, such as “quiet kettle under £40”.
  - Agent goal: Turn the request into filters the shopper can see and change.
  - Agent actions: Says it is an AI assistant that turns requests into filters the shopper can remove. Shows suggested chips such as “Under £40” and “Quiet operation”, each with the words it came from and the result count, marked as suggested by the AI assistant; the shopper applies all, some or none. A link searches the exact words typed.
  - Agent tone: Brief and forgiving of spelling; plain words.
  - Agent type: Vertical shopping search AI assistant; single.
  - Multi-agent handoff: AI assistant → search and filter service (read only) for counts; the shopper’s choice → results.
  - Goal failure response: Ambiguous input (“a good one”): ask what matters, offering two or three common needs. Data unavailable (no noise data for kettles): say quiet can’t be filtered and suggest reading reviews that mention noise. Goal drift (adds a brand the shopper didn’t ask for): drop it; only what was typed becomes a filter. Slow response: show ordinary suggestions and keep the typed text.
  - Failure handover trigger: The shopper asks for a person → customer service chat immediately, with the handover context package.
  - Data needs: The query, the filter catalogue with real values and counts, category names.
  - Agent memory: Short-term: the query and chips for this session, kept in the URL; not stored against the shopper’s identity without consent.
  - Regulatory classification: Consumer protection and platform transparency (no hidden ranking; sponsored labels kept) and personal data (queries minimised); minimal AI risk; AI interaction disclosed.

### 2. Results

- Result count and sort always visible above the list
- Sponsored items carry a visible “Sponsored” label
- **empty:** No exact matches for “ketle”. Showing results for “kettle”.
- **loading:** Skeleton cards at the final size so nothing jumps
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the results heading; Tab goes to the sort control, then filters, then each product, with one hand reachable controls near the bottom.
  - Announced (A11Y-S1): The title and heading read “248 results for kettle”, and the sort is read as “Sorted by relevance”; changes are announced politely.
  - Errors (A11Y-E1): The typo-correction message is text above the list, linked to the search field, and the original query is kept so it can be restored.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say “Showing results for kettle” in plain words and label sponsored items with the visible word Sponsored.

### 3. Filter

- Each filter option shows how many results it leaves
- Applied filters appear as removable chips with “Clear all”
- **empty:** No kettles match all 4 filters. Remove “Under £25” to see 12.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the filter that changed, then moves to the results heading after Apply; each checkbox, chip and Clear all button is operable by keyboard.
  - Announced (A11Y-S1): Each option reads its label and count; the new result count is announced politely, and removing a chip is announced.
  - Errors (A11Y-E1): The no-match message is text above the list, names which filter to remove, and the chosen filters are kept so they can be undone one by one.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show counts in full, such as “31 results”, and name each filter in plain words.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: On the filter panel the shopper asks to refine in words, such as “make it cordless and stainless steel”, or a filter combination leaves no results.
  - Agent goal: Help narrow the list without dead ends.
  - Agent actions: Proposes filters to add or remove as chips marked as suggested by the AI assistant, each with the count it would leave. When filters leave no results, names the one to remove and how many it brings back, such as “Remove Under £25 to see 12”. The shopper applies the change; the order of results never changes out of sight.
  - Agent tone: Plain and in the shopper’s words, such as “Cordless”, not technical labels.
  - Agent type: Vertical shopping search AI assistant; single.
  - Multi-agent handoff: AI assistant → search and filter service (read only) for counts; the shopper’s choice → filtered results.
  - Goal failure response: Low confidence mapping a word to a filter: show two options and ask. Data unavailable (counts not loading): show the chips without counts and say so. Constraint violation (asked to hide sponsored labels): keep the labels and explain why. Goal drift (removes a must-have filter to get more results): keep it and ask first.
  - Failure handover trigger: The shopper asks for a person → customer service immediately, with the handover context package including the applied filters.
  - Data needs: Applied filters, filter options with counts, real stock and prices.
  - Agent memory: Short-term: filter state in the URL so back, refresh and sharing work.
  - Regulatory classification: Consumer protection and platform transparency (filters reflect real stock and prices; no hidden re-ranking); minimal AI risk; suggestions marked as made by the AI assistant.

### 4. Compare

- Same attributes in the same rows for every product
- Differences highlighted with text, not colour alone
- **error:** One product went out of stock — keep it in the table, marked “Out of stock”
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Compare heading; Tab moves across the shortlist, and each product has a Remove from compare button.
  - Announced (A11Y-S1): The table has row and column headers so each attribute is read with its product; differences are written as text.
  - Errors (A11Y-E1): The out-of-stock message is text in the column, linked to that product, which stays in the table; the shortlist is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use the same attribute names in the same rows, and mark differences with words, not colour alone.

### 5. Open product

- Back restores scroll position, filters and sort
- Product page repeats the attributes that matched the filters
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the product heading; the Back to 31 results link is first in order and restores the list, scroll position, filters and sort.
  - Announced (A11Y-S1): The title is the product name; the matched attributes are read as text, and the back link names the result count.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Repeat the attributes that matched the filters in the same words used on the filter.

---

## Principles

1. Never end on a dead end: zero results always offer a correction or a wider search
2. Show what is applied: count, sort and filters visible at all times
3. Filters reflect real stock and real prices
4. Paid placement is always labelled
5. State survives back, refresh and sharing the link

## Do / Don't

**Do**
- Show the count each filter option would leave
- Offer “Did you mean” and auto-correct with a way to search the exact words
- Keep filters in the URL

**Don't**
- Apply a filter that leaves zero results without warning
- Reset filters when someone returns from a product
- Disguise sponsored results as organic ones

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Search suggestions use the combobox pattern; arrow keys move, Enter selects and Escape closes.
- A11Y-S1: Result counts and filter changes are announced in a polite live region, without moving focus.
- A11Y-T1: Filter checkboxes and chip remove buttons are at least 44×44px.
- A11Y-K1: After applying filters, focus moves to the results heading, not to the top of the page.
- A11Y-C2: Sponsored labels, out-of-stock marks and compare differences are text, never colour alone.
- A11Y-E1: Typed search text is never cleared by an error or correction, and the no-match message names the filter to remove.
- A11Y-L1: Suggestions and corrections use plain language and accept rough spelling for people with dyslexia.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- State the fix on zero results: “No matches for ‘ketle’. Showing results for ‘kettle’.”
- Filter labels use the shopper’s words: “Cordless” not “Base type: 360°”
- Sort names say what they do: “Lowest price first”, “Highest rated first”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is AI and turns a plain-language request into filter chips, each marked as suggested by the AI assistant and shown before any is applied
- Each suggested filter shows the words it came from and how many results it leaves; the shopper can remove any chip, and Clear all removes them
- The AI assistant never re-ranks results, hides items or changes the sort, and sponsored items keep their label
- When a request can’t be matched to a real filter, the AI assistant says so instead of guessing, and a link always searches the exact words typed
- Queries sent to the AI assistant are not stored against the shopper’s identity without consent, and a non-personalised sort is always available
- A request for a person goes to customer service immediately with the handover context package

## Edge cases

- Query matches a category name exactly — offer the category page as the first suggestion
- Item goes out of stock between list and product page — show it, mark it, offer similar in-stock items
- Very broad query with 10,000+ results — suggest the top three categories to narrow
- Prices change during the session — show the current price on the product page and in the compare table

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Query — text typed, corrected text, time, linked to shopper (only with consent) · relates to Search session
- Search session — query, applied filters, sort, scroll position, page · relates to Query, Filter suggestion, Shortlist
- Filter — name in shoppers’ words, options, result count per option · relates to Product
- Product — name, price including tax, stock, attributes, rating, sponsored · relates to Filter, Shortlist
- Filter suggestion — chip, words it came from, result count, made by the AI assistant, applied by shopper · relates to Search session, Filter
- Shortlist — two to four products, compared attributes · relates to Product, Search session
- Shopper consent — personalised ranking, keep search history · relates to Query · personal data

### Systems it touches

- Search index — reads products, synonyms, typo rules, categories; writes suggestions, results · when down: Show popular categories and keep the typed text.
- Catalogue, stock and price service — reads prices, stock, attributes · when down: Show the last known price and stock marked with their time, and check again on the product page.
- Sponsored placement service — reads paid placements · when down: Show results with no sponsored items.
- Personalisation (opt-in) — reads consented history · when down: Use the non-personalised sort.
- AI assistant service — reads query, filter catalogue, counts; writes filter suggestions marked as made by the AI assistant · when down: Search, typo matching and filters work unchanged; suggestions are simply not offered.

### Roles

- Shopper — search in their own words, apply or remove any filter, choose the sort, including non-personalised, compare up to four products, turn off personalisation, ask for a person
- Merchandiser — name filters and categories in shoppers’ words, manage synonyms, label sponsored placements
- Customer service — help shoppers find products, take product questions
- AI assistant — turn a plain request into suggested filters, suggest which filter to remove to avoid no results, show how to reach a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Search suggestion response (95th percentile): under 200 ms (range 150–300 ms)
- Results per batch on a slow connection: 24 (range 12–48)
- Zero-result searches (weekly): under 10% (range 5–15%)
- Search to product view: at least 70% (range 60–80%)
- Time to first relevant product (median): under 2 minutes (range 1–3 minutes)
- Filter abandonment: under 15% (range 10–20%)

### Required inputs and configuration

- Product attributes mapped to filter names in shoppers’ words
- Synonym and common-misspelling lists
- Category tree
- Sponsored placement and labelling rules
- Personalisation consent wording and the non-personalised sort
- Customer service contact route and hours

---

## Measures

| Measure | Target | How |
|---|---|---|
| Zero-result searches | < 10% | Share of searches returning no results, weekly |
| Search to product view | ≥ 70% | Sessions with a search that open a product |
| Time to first relevant product | < 2 min | Median in moderated tests |
| Filter abandonment | < 15% | Sessions that apply a filter then leave from the list |

Research: Search log analysis of zero-result and reformulated queries; Moderated tests with dyslexic participants and one-handed mobile use; Tree test of filter names and categories.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
