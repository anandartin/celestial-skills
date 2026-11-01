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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first allergen chip; chips are toggle buttons with Space, and voice control can select them by their visible names.
  - Announced (A11Y-S1): Title "Your dietary needs" is read; each chip reads its name and "selected", and saved needs are announced politely.
  - Errors (A11Y-E1): If saving fails, the message in text beside the chips says what to try, and the chosen needs are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain that unlisted dishes are hidden, not safe, in one plain sentence, and name each allergen in full.

### 2. Browse

- Active filters shown at the top of every menu
- Count of hidden dishes visible with a reason
- **empty:** No dishes here meet your needs. Try another restaurant.
- **loading:** Menu loading — filters apply before dishes appear
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the active filters at the top, then the dish list; filters are buttons, and each dish is one link that can be opened by voice.
  - Announced (A11Y-S1): Title is the restaurant name; "38 dishes without peanuts or tree nuts" and the hidden count are announced politely when filters apply.
  - Errors (A11Y-E1): An empty list is explained in text with a link to try another restaurant; the person's needs and filters are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say "dishes without peanuts" in plain words and give the reason each dish is hidden.

### 3. Dish detail

- Contains and may contain listed separately
- Allergen info shows the date it was last updated
- **error:** Allergen information isn’t available for this dish. Contact the restaurant before ordering.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the dish heading; allergen lists are text with Contains and May contain as separate headings, and extras are native checkboxes before Add.
  - Announced (A11Y-S1): The dish name, then "Contains: milk, gluten" and "May contain: sesame" are read with the last-updated date; added to basket is announced politely.
  - Errors (A11Y-E1): If allergen data is missing, a text message beside the list says to contact the restaurant, and Add is explained, not hidden; selected extras are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep Contains and May contain separate, and show the last-updated date in full words.

### 4. Checkout

- Allergy note field pre-filled from saved needs and editable
- All fees itemised before payment
- **error:** One dish changed since you added it. Check the new allergen info.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the basket heading, then items, the allergy note and fees; the note is a labelled text field pre-filled and editable, and Pay follows a review of the total.
  - Announced (A11Y-S1): The total and each fee are read in order; a changed dish is announced assertively, and the new allergen information is linked from the message.
  - Errors (A11Y-E1): A changed dish is named in text beside the item, linked to its new allergen information, and the basket and allergy note are kept; payment needs a review of items and total.
  - Time limits (A11Y-W1): The basket is kept for 24 hours; a warning appears at least 20 seconds before any payment session ends, with a button to continue.
  - Language (A11Y-L1): Itemise every fee in pounds, such as "2.99 pounds delivery", and say what the allergy note is for.

### 5. Track

- Stages: Accepted, Preparing, On the way, Delivered
- Delays shown with a new window and an option to cancel
- **loading:** Waiting for the restaurant to accept — usually under 3 minutes
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the status heading; the four stages are an ordered list with the current one marked in text, and Cancel is a normal button when offered.
  - Announced (A11Y-S1): Status changes, such as "Being prepared, arriving 7:10 to 7:25 pm", are announced politely; the window update and a delay are read in full, without moving focus.
  - Errors (A11Y-E1): If the restaurant has not accepted, the text says so and the usual wait; cancelling asks for a confirm step and shows what happens to payment.
  - Time limits (A11Y-W1): No time limit. The wait for acceptance is stated, and the person can leave and return.
  - Language (A11Y-L1): Write the arrival window as full times, and name the four stages in the same words each time.

### 6. Delivered

- Report missing items or allergy concerns quickly
- Allergy incidents go to a priority route, not a rating
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; Report is one clear button, then a short list of problems with allergy concerns first.
  - Announced (A11Y-S1): "Enjoy your meal" is read as the heading; a submitted report is announced politely with its reference.
  - Errors (A11Y-E1): Report errors are written in text beside the field and linked to it; what was typed is kept, and allergy issues are marked as priority in words.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use "allergy concern" and "missing item" as plain labels, and say what happens after a report.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-N1: Allergen lists are text, with icons also labelled for screen readers, and Contains and May contain are separate headed lists
- A11Y-T1: Filter chips are at least 44 by 44px and selected state is shown in text and shape
- A11Y-S1: Delivery status updates are announced politely, and no content moves automatically without a pause control
- A11Y-R1: At system text size 200% allergen text is never truncated and no horizontal scrolling is needed
- A11Y-E3: Checkout shows itemised fees, the allergy note and a review of the basket before payment, and cancelling shows the effect on payment
- A11Y-E1: Changed dishes and missing allergen data are named in text beside the item, with the basket kept
- A11Y-W1: The 24-hour basket is kept, and any payment session timeout is warned at least 20 seconds before

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

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
