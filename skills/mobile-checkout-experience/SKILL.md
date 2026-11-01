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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the results heading; Tab goes to the filter button, then the removable filter chips, then each product, in order.
  - Announced (A11Y-S1): The title names the category; “Show 24 results” and updated counts are announced politely, and each chip reads its name and Remove.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep filter names plain and the count in full; “No matches” explains what to remove in one tap.

### 2. Product

- Delivery estimate above the fold
- Add to bag stays in thumb reach
- **error:** Out of stock in a size — offer notify me
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the product heading; Tab goes to size choices, then Add to bag, which stays in thumb reach, then delivery information.
  - Announced (A11Y-S1): The delivery date “Arrives Tuesday” is read with the price; adding to the bag is announced politely.
  - Errors (A11Y-E1): The out-of-stock message is text beside the size choice, linked to it, with a Notify me option; the size choice is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the delivery day and price in full, such as “$222 including delivery”, and say Add to bag, not “Add”.

### 3. Bag

- Total includes delivery and tax up front
- Edit quantity in place
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Bag heading; Tab goes through each item's quantity control, then Remove, then Checkout.
  - Announced (A11Y-S1): The table has header cells; quantity changes and the new total are announced politely, and the total includes delivery and tax.
  - Errors (A11Y-E1): A quantity error is text beside the control and kept at the last valid number; items can be removed and added back, so the person can check the bag before paying.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the total with delivery and tax in full, and avoid abbreviations like “qty”.

### 4. Checkout

- Wallet pay first; card second
- Autofill-friendly fields with correct input types
- **error:** Keep every field; explain the fix beside the field
- **loading:** Disable the button, keep its label, show progress
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Checkout heading; Tab goes to the wallet button, then card fields with numeric keyboards and autofill, then the pay button naming the amount.
  - Announced (A11Y-S1): “Processing” is announced politely, the button keeps its label while loading, and failures are announced assertively.
  - Errors (A11Y-E1): Errors appear in text beside each field with the fix, linked by aria-describedby and listed in a summary, and every field keeps what was typed; the pay button states the amount so it is checked before confirming.
  - Time limits (A11Y-W1): No time limit; state is kept locally, so a slow connection does not lose entries.
  - Language (A11Y-L1): Label each field in plain words, and write the amount on the button, such as “Pay $222”.

### 5. Confirmed

- Order number, delivery date and how to track
- Offer account creation after, never before
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the Order confirmed heading; Tab reaches the tracking link, then an optional Create account option.
  - Announced (A11Y-S1): “Order SO-657 confirmed” is announced politely with the delivery date and how to track.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give the order number, delivery date and tracking steps in short sentences, and offer an account only after the order.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-N1: Every field has a visible label and the correct autocomplete token, with numeric keyboards for numbers.
- A11Y-E1: Errors are linked with aria-describedby, appear beside the field, are summarised at the top, and the entered values are kept.
- A11Y-S1: Price changes, filter counts and processing status are announced through a polite live region.
- A11Y-R1: The page supports 200% text and Dynamic Type without horizontal scroll at 390px.
- A11Y-T1: Touch targets, including chips, quantity controls and the pay button, are at least 44px.
- A11Y-E3: The bag shows the full total including delivery and tax, and the pay button names the amount before anything is charged.
- A11Y-K1: The filter sheet and chips work with VoiceOver and a keyboard, and focus returns to the filter button when the sheet closes.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
