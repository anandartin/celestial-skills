---
name: mobile-checkout-experience
type: experience
journey: customer
persona: Returning shopper
domain: Retail ecommerce
technology: Mobile web (390–430px)
core: "1.0"
description: "Experience skill: Mobile checkout for a returning shopper — the best-practice customer journey for a returning shopper in Retail ecommerce on Mobile web (390–430px). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Mobile checkout for a returning shopper

From product to paid in under a minute on a phone, with nothing re-typed and no surprise costs at the end.

**Outcome** — A returning shopper completes payment in under 60 seconds without re-entering saved details or meeting a surprise cost.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Leo, Returning shopper

> “I know what I want. Don’t make me type my address again on a bus.”

Buys 3–4 times a year, mostly on mobile, often one-handed and on patchy data.

**Goals**
- Pay in a few taps with saved details
- Know the total, delivery date and returns before paying
- Trust the payment step

**Pains**
- Forced account creation
- Shipping costs revealed at the last step
- Forms that clear on error

**Behaviours**
- Thumb-only navigation
- Leaves and returns to the cart
- Uses wallet payments when offered

**Access needs**
- Large text (iOS Dynamic Type)
- Uses VoiceOver occasionally

---

## Domain — Retail ecommerce

- PCI DSS: card data handled only by the payment provider
- Strong Customer Authentication (3-D Secure) in the EU/UK
- Price, taxes and delivery cost shown before payment

Vocabulary to use: `bag`, `delivery`, `returns`, `promo code`, `order`

## Technology — Mobile web (390–430px)

Inputs: Touch, Autofill, Wallet pay (Apple Pay / Google Pay)

- Slow 3G resilience: keep state locally
- 44px touch targets
- Numeric keyboards for numbers

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Browse** | Find the product with filters that remember their size | `list + filters` | “Show 24 results” |
| 2 | **Product** | Decide with price, delivery date and returns visible | `detail` | “Add to bag · Arrives Tue” |
| 3 | **Bag** | Review items and the full total | `table + totals` | “Total $222 incl. delivery” |
| 4 | **Checkout** | Pay with saved details or a wallet | `form` | “Pay $222” |
| 5 | **Confirmed** | Know it worked and what happens next | `confirmation` | “Order SO-657 confirmed” |

### 1. Browse

- Filters as removable chips
- Sticky “filter” button at the bottom for thumbs
- **empty:** No matches — remove the last filter in one tap

### 2. Product

- Delivery estimate above the fold
- Add to bag stays in thumb reach
- **error:** Out of stock in a size — offer notify me

### 3. Bag

- Total includes delivery and tax up front
- Edit quantity in place

### 4. Checkout

- Wallet pay first; card second
- Autofill-friendly fields with correct input types
- **error:** Keep every field; explain the fix beside the field
- **loading:** Disable the button, keep its label, show progress

### 5. Confirmed

- Order number, delivery date and how to track
- Offer account creation after, never before

---

## Principles

1. Never make people re-type what the browser already knows
2. No surprise costs — totals are final before payment
3. Guest checkout by default
4. Every tap target ≥ 44px; primary actions in the thumb zone
5. Errors keep input and say how to fix it

## Do / Don't

**Do**
- Offer wallet payment as the first option where available
- Use one-column forms with inputmode and autocomplete
- Save the bag across sessions and devices

**Don't**
- Force sign-up before payment
- Hide delivery cost until the last step
- Use carousels for key product information

## Accessibility

- Every field has a visible label and autocomplete token
- Errors linked with aria-describedby and summarised at the top
- Price changes announced in a live region
- Supports 200% text without horizontal scroll

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plain totals: “Total $222 incl. delivery”
- Buttons say what happens: “Pay $222”
- Delivery as a date, not a range of days

## AI interactions

- Size suggestion based on past orders, shown with its reason and easy to ignore

## Edge cases

- 3-D Secure challenge — return to the same step with state intact
- Promo code invalid — explain why (expired, minimum spend)
- Address outside delivery area — say so before payment

---

## Measures

| Measure | Target | How |
|---|---|---|
| Checkout conversion | ≥ 65% | Bag → paid, returning shoppers |
| Time to pay | < 60 s | Checkout start → payment confirmed |
| Error rate | < 5% | Sessions with a field error at checkout |
| Wallet share | ≥ 40% | Payments made with a wallet |

Research: Mobile usability test on a real device, 3G throttled; Form analytics per field; Exit survey on abandoned checkouts.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
