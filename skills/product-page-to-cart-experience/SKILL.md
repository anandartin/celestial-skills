---
name: product-page-to-cart-experience
type: experience
journey: customer
persona: Shopper (41), buying walking boots
domain: Retail e-commerce
technology: Responsive web
core: "1.0"
description: "Experience skill: Comparing options on a product page and adding to basket — the best-practice customer journey for a shopper (41), buying walking boots in Retail e-commerce on Responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Comparing options on a product page and adding to basket

A shopper picks the right size, colour and delivery option on one product page and adds it to the basket knowing the full price and when it will arrive.

**Outcome** — At least 60% of shoppers who choose an option add to basket, and fewer than 5% of those orders are returned for wrong size or variant.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Esperanza, Shopper (41), buying walking boots

> “Tell me if it fits, what it costs to my door, and when it gets here.”

Shops on a laptop in the evening; has red-green colour vision deficiency and cannot rely on colour swatches alone.

**Goals**
- Choose the right size first time
- Know the delivered price before the basket
- Compare two colours without guessing

**Pains**
- Colour swatches with no names
- Delivery cost revealed only at checkout
- Size picked, then told it is out of stock

**Behaviours**
- Reads the size guide and reviews about fit
- Zooms product photos
- Adds to basket to check the total, then decides

**Access needs**
- Colour vision deficiency — needs colour names in text
- Uses browser zoom at 150%

---

## Domain — Retail e-commerce

- The total price, including taxes and any unavoidable fees, is shown before the shopper commits (consumer price-indication rules)
- Reference or “was” prices are genuine prior prices and stated with their period
- Stock and delivery claims are accurate at the time of display; low-stock messages are real counts, not pressure tactics
- Reviews show how they were collected and whether incentivised reviews are included

Vocabulary to use: `variant`, `size guide`, `in stock / back order`, `delivery estimate`, `basket`, `RRP / was price`

## Technology — Responsive web

Inputs: Mouse and keyboard, Touch, Screen reader

- Variant stock fetched live when an option is selected
- Delivery estimate based on postcode, stored only in the session unless signed in
- Images lazy-load with fixed aspect ratios to avoid layout shift

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Review product** | Understand what the product is and who it suits | `detail` | “Waterproof leather walking boot · £89 including VAT” |
| 2 | **Choose options** | Pick colour and size with stock shown per option | `form + chips` | “Colour: Moss green · Size: UK 9” |
| 3 | **Check fit** | Confirm the size using the guide and other buyers’ fit notes | `table + totals` | “Most buyers say this fits true to size” |
| 4 | **Delivery** | See delivered price and arrival date | `form` | “Free delivery · Arrives Thursday 30 October to SW9” |
| 5 | **Add to basket** | Add the chosen variant and know it worked | `confirmation` | “Added: Moss green, UK 9 · Basket total £89” |

### 1. Review product

- Price, key facts and rating above the fold
- Photos show scale and each colour
- **loading:** Reserve image and price space so the page does not jump
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the product heading; the gallery has Previous and Next buttons with alt text, and the layout reserves space so nothing jumps.
  - Announced (A11Y-S1): Announces the product name, then '£89 including VAT'; image alt text names the colour.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'including VAT' in plain words and name colours in text.

### 2. Choose options

- Colour swatches always carry a text name
- Unavailable sizes shown and labelled, not hidden
- **empty:** Choose a size to see delivery dates
- **error:** UK 9 in Moss green is out of stock. UK 9 is available in Charcoal.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the colour group; options are radio buttons, arrow keys move within a group, and each shows its stock in text.
  - Announced (A11Y-S1): Announces the group label, the chosen colour and size, and 'out of stock' as text; stock is a polite status.
  - Errors (A11Y-E1): The out-of-stock message names the alternative, Charcoal, in text beside the group; selections stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name the colour as text, such as Moss green, never just by swatch.

### 3. Check fit

- Size guide in the shopper’s units with a measure-your-foot tip
- Fit summary from reviews shows the number of reviews it is based on
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the size guide heading; the table has header cells, and fit notes are read as text.
  - Announced (A11Y-S1): Announces the table caption and each cell, then 'most buyers say it fits true to size'.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give sizes in UK numbers and explain 'true to size'.

### 4. Delivery

- Delivery cost and date shown before Add to basket
- Postcode remembered for the session
- **error:** We can’t find that postcode. Check it, or see standard delivery times.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the postcode field; Enter checks it, and the stored-in-session note is visible text.
  - Announced (A11Y-S1): Announces the label, then politely 'Free delivery, arrives Thursday 30 October'.
  - Errors (A11Y-E1): The postcode message sits next to the field with a link to delivery times; the typed postcode is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the arrival date in full with the weekday and the cost.

### 5. Add to basket

- Confirmation repeats the variant chosen
- Offer “Go to basket” and “Keep shopping” equally
- **error:** Couldn’t add to basket. Your choices are saved — try again.
- **loading:** Button shows “Adding…” and blocks double taps
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the Add to basket button; the button reads 'Adding…' and blocks double taps.
  - Announced (A11Y-S1): Announces politely 'Added: Moss green, UK 9, basket total £89'; failure is announced assertively.
  - Errors (A11Y-E1): A failure is stated near the button with a Try again button; the chosen colour and size stay and the basket can be reviewed before paying.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Repeat the colour, size and total in text.

---

## Principles

1. Total price and delivery date known before the basket
2. Every option identifiable without colour
3. Show unavailable options rather than hiding them
4. Urgency messages only when true and specific
5. Confirm exactly what was added

## Do / Don't

**Do**
- Name every colour in text next to the swatch
- Show stock per size as soon as a colour is picked
- Repeat size and colour in the add-to-basket confirmation

**Don't**
- Use fake countdowns or invented “only 2 left” messages
- Pre-select add-ons such as insurance or gift wrap
- Reveal delivery fees for the first time at payment

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Option groups use radio semantics with a visible group label; arrow keys move between options (WCAG 1.3.1).
- A11Y-C2: Selected and unavailable states use text and shape, not colour alone (WCAG 1.4.1).
- A11Y-S1: The add-to-basket result is announced in a live region and focus stays on the button (WCAG 4.1.3).
- A11Y-R1: The page reflows at 400% zoom without horizontal scrolling (WCAG 1.4.10).
- A11Y-E1: Out-of-stock and postcode errors are text beside the field and selections are kept.
- A11Y-E2: The postcode and choices are not asked for again later in the basket.
- A11Y-L1: Colours are named in text and prices include VAT in plain words.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Prices always say what is included: “£89 including VAT”
- Fit copy is specific: “Roomy at the toe — consider half a size down”
- Stock copy is factual: “3 left in UK 9” only when the count is real

## AI interactions

- Optional: summarise review comments about fit and comfort, with the review count and a link to read them all
- No AI size recommendation without showing the measurements it used and letting the shopper override

## Edge cases

- Variant sells out after it is added — warn in the basket and offer the nearest size or a back-in-stock alert
- Shopper outside delivery area — say so on the product page, not at checkout
- Price changes while the page is open — show the new price before adding
- Bundle or multi-buy offer — show the per-item and total price

---

## Measures

| Measure | Target | How |
|---|---|---|
| Add-to-basket rate | ≥ 60% | Option selected → added, per session |
| Wrong-size returns | < 5% | Returns with reason “size” or “wrong item” |
| Checkout price surprise | < 3% | Survey: “The total was higher than I expected” |
| Out-of-stock dead ends | −50% | Sessions ending on an unavailable variant, vs baseline |

Research: Usability tests with colour-blind participants choosing variants; Return-reason analysis by product category; A/B test showing delivery date before vs after add to basket.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
