---
name: food-delivery-order-experience
type: experience
journey: customer
persona: Parent (36), ordering dinner for a family of four
domain: Food delivery
technology: Native mobile app (iOS / Android) and web
core: "1.0"
description: "Experience skill: Ordering a meal for delivery with dietary and allergen needs — the best-practice customer journey for a parent (36), ordering dinner for a family of four in Food delivery on Native mobile app (iOS / Android) and web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Ordering a meal for delivery with dietary and allergen needs

A parent orders dinner for the family, filters reliably by allergens, and gets food that is safe, on time and as described.

**Outcome** — Every dish shown under an allergen filter has declared allergen data, and at least 80% of orders arrive within the quoted window.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Tariq, Parent (36), ordering dinner for a family of four

> “My son has a nut allergy. If you’re not sure, don’t show me the dish.”

Orders on her phone after work; one child has a severe peanut allergy and her partner is vegetarian.

**Goals**
- See only dishes safe for her son
- Order for everyone in one basket
- Know when it will arrive

**Pains**
- “May contain” info missing or hidden
- Allergy notes ignored by the kitchen
- Delivery windows that keep slipping

**Behaviours**
- Reorders from trusted restaurants
- Reads allergen details for every new dish
- Phones the restaurant when unsure

**Access needs**
- Busy and often interrupted — needs the basket to persist
- Sometimes orders by voice while cooking

---

## Domain — Food delivery

- Allergen information for the 14 regulated allergens (UK/EU food information rules) is available before ordering for every dish
- Dishes without complete allergen data are excluded from allergen filters, never assumed safe
- Allergy notes are passed to the restaurant prominently and the customer is told to contact the restaurant for severe allergies
- Alcohol and age-restricted items require age verification at delivery
- Prices, service fees and delivery fees are shown before checkout

Vocabulary to use: `allergen`, `may contain`, `dietary filter`, `delivery window`, `service fee`, `rider / courier`

## Technology — Native mobile app (iOS / Android) and web

Inputs: Touch, Voice assistant, Screen reader

- Allergen data comes from the restaurant menu record, versioned with a last-updated date
- Live courier location updates at least every 30 seconds
- Basket persists across app closes for 24 hours

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Set needs** | Save dietary and allergen needs once | `form + chips` | “Hide dishes containing: Peanuts, Tree nuts” |
| 2 | **Browse** | Find restaurants and dishes that meet those needs | `list + filters` | “38 dishes without peanuts or tree nuts at Hill Street Kitchen” |
| 3 | **Dish detail** | Check allergens and customise | `detail` | “Contains: milk, gluten · May contain: sesame” |
| 4 | **Checkout** | Review basket, fees, allergy note and time | `table + totals` | “Total £42.60 · includes £2.99 delivery and £1.50 service fee” |
| 5 | **Track** | Follow preparation and delivery | `progress` | “Being prepared · Arriving 19:10–19:25” |
| 6 | **Delivered** | Confirm delivery and report problems | `feedback` | “Enjoy your meal. Something wrong? Report it in 2 taps.” |

### 1. Set needs

- Needs saved to the profile and applied everywhere
- Explain that unlisted dishes are hidden, not assumed safe

### 2. Browse

- Active filters shown at the top of every menu
- Count of hidden dishes visible with a reason
- **empty:** No dishes here meet your needs. Try another restaurant.
- **loading:** Menu loading — filters apply before dishes appear

### 3. Dish detail

- Contains and may contain listed separately
- Allergen info shows the date it was last updated
- **error:** Allergen information isn’t available for this dish. Contact the restaurant before ordering.

### 4. Checkout

- Allergy note field pre-filled from saved needs and editable
- All fees itemised before payment
- **error:** One dish changed since you added it. Check the new allergen info.

### 5. Track

- Stages: Accepted, Preparing, On the way, Delivered
- Delays shown with a new window and an option to cancel
- **loading:** Waiting for the restaurant to accept — usually under 3 minutes

### 6. Delivered

- Report missing items or allergy concerns quickly
- Allergy incidents go to a priority route, not a rating

---

## Principles

1. Safety over choice: missing allergen data means hidden, not safe
2. Saved needs apply everywhere without re-entering
3. All fees before payment
4. Honest, updated delivery windows
5. A fast route to report allergy incidents

## Do / Don't

**Do**
- Separate “contains” from “may contain”
- Pass allergy notes to the kitchen prominently
- Show the last-updated date of allergen info

**Don't**
- Assume a dish is safe because no allergens are listed
- Hide service fees until the last screen
- Treat an allergy incident as a normal star rating

## Accessibility

- Allergen lists are text, not icons alone, with icon labels for screen readers (WCAG 2.2 1.1.1)
- Filter chips at least 44 × 44 px with selected state in text and shape (WCAG 2.2 2.5.8, 1.4.1)
- Delivery status updates announced politely; no auto-moving content without a pause control (WCAG 2.2 2.2.2)
- Supports system text size to 200% without truncating allergen text (WCAG 2.2 1.4.4)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Allergen copy is literal: “Contains: peanuts” never “Nutty goodness”
- Safety prompt is clear and calm: “For severe allergies, call the restaurant before ordering.”
- Delay copy gives a new window: “Running 10 minutes late — now 19:20–19:35.”

## AI interactions

- Optional: suggest dishes similar to past orders that meet saved needs; suggestions never override allergen filters
- No AI to infer allergens from dish names or photos, because a wrong guess can cause harm

## Edge cases

- Restaurant updates a recipe after the order — notify the customer and allow cancellation
- Substitution offered by the restaurant — require the customer to accept it, with allergen info
- Courier cannot find the address — call or text options plus a map pin
- Age-restricted item and no ID at the door — item returned, refund issued, explained in advance
- Customer reports an allergic reaction — show emergency guidance first, then the incident form

---

## Measures

| Measure | Target | How |
|---|---|---|
| Allergen data coverage | 100% | Dishes in allergen-filtered results with complete data |
| On-time delivery | ≥ 80% | Orders delivered within the quoted window |
| Allergy incidents | 0 caused by data errors | Incident reports traced to wrong or missing data |
| Order completion | ≥ 70% | Basket started → order placed |

Research: Interviews and ordering tests with parents of children with severe allergies; Audit of restaurant allergen data completeness and freshness; Food safety review of allergen copy and incident routing.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
