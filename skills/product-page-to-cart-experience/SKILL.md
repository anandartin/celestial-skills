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

### 2. Choose options

- Colour swatches always carry a text name
- Unavailable sizes shown and labelled, not hidden
- **empty:** Choose a size to see delivery dates
- **error:** UK 9 in Moss green is out of stock. UK 9 is available in Charcoal.

### 3. Check fit

- Size guide in the shopper’s units with a measure-your-foot tip
- Fit summary from reviews shows the number of reviews it is based on

### 4. Delivery

- Delivery cost and date shown before Add to basket
- Postcode remembered for the session
- **error:** We can’t find that postcode. Check it, or see standard delivery times.

### 5. Add to basket

- Confirmation repeats the variant chosen
- Offer “Go to basket” and “Keep shopping” equally
- **error:** Couldn’t add to basket. Your choices are saved — try again.
- **loading:** Button shows “Adding…” and blocks double taps

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

## Accessibility

- Option groups use radio semantics with a visible group label; arrow keys move between options (WCAG 2.2 1.3.1)
- Selected and unavailable states use text and shape, not colour alone (WCAG 2.2 1.4.1)
- Add-to-basket result is announced in a live region and focus stays on the button (WCAG 2.2 4.1.3)
- Page reflows at 400% zoom without horizontal scroll (WCAG 2.2 1.4.10)

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
