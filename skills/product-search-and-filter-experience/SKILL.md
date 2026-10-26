---
name: product-search-and-filter-experience
type: experience
journey: customer
persona: Shopper (34), buying a replacement kettle
domain: Retail e-commerce
technology: Responsive web, mobile first
core: "1.0"
description: "Experience skill: Finding a product in a large catalogue with search and filters — the best-practice customer journey for a shopper (34), buying a replacement kettle in Retail e-commerce on Responsive web, mobile first. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Finding a product in a large catalogue with search and filters

A shopper narrows thousands of products to a short list they trust, using forgiving search and filters that never hide how many results remain.

**Outcome** — A shopper reaches a product page that matches their need in under two minutes, with fewer than 10% of searches ending on zero results.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

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

### 2. Results

- Result count and sort always visible above the list
- Sponsored items carry a visible “Sponsored” label
- **empty:** No exact matches for “ketle”. Showing results for “kettle”.
- **loading:** Skeleton cards at the final size so nothing jumps

### 3. Filter

- Each filter option shows how many results it leaves
- Applied filters appear as removable chips with “Clear all”
- **empty:** No kettles match all 4 filters. Remove “Under £25” to see 12.

### 4. Compare

- Same attributes in the same rows for every product
- Differences highlighted with text, not colour alone
- **error:** One product went out of stock — keep it in the table, marked “Out of stock”

### 5. Open product

- Back restores scroll position, filters and sort
- Product page repeats the attributes that matched the filters

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

## Accessibility

- Search suggestions use the combobox pattern; arrow keys move, Enter selects, Escape closes (WCAG 2.2 4.1.2)
- Result count changes are announced in a polite live region (WCAG 2.2 4.1.3)
- Filter checkboxes and chip remove buttons are at least 44 × 44 px (WCAG 2.2 2.5.8 exceeded)
- Focus moves to the results heading after applying filters, not to the top of the page

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- State the fix on zero results: “No matches for ‘ketle’. Showing results for ‘kettle’.”
- Filter labels use the shopper’s words: “Cordless” not “Base type: 360°”
- Sort names say what they do: “Lowest price first”, “Highest rated first”

## AI interactions

- Optional: turn a plain-language request (“quiet kettle under £40”) into suggested filters the shopper can see and remove; no hidden re-ranking
- Typo and synonym matching is automatic, with a link to search the exact words typed

## Edge cases

- Query matches a category name exactly — offer the category page as the first suggestion
- Item goes out of stock between list and product page — show it, mark it, offer similar in-stock items
- Very broad query with 10,000+ results — suggest the top three categories to narrow
- Prices change during the session — show the current price on the product page and in the compare table

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
