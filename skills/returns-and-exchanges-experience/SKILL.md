---
name: returns-and-exchanges-experience
type: experience
journey: customer
persona: Customer (38), returning a jacket that does not fit
domain: Retail returns
technology: Responsive web and email
core: "1.0"
description: "Experience skill: Starting a return or exchange and getting the refund — the best-practice customer journey for a customer (38), returning a jacket that does not fit in Retail returns on Responsive web and email. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Starting a return or exchange and getting the refund

A customer returns or swaps an item in a few steps, picks an accessible drop-off or collection, and knows exactly when the refund will land.

**Outcome** — At least 85% of returns are started online without contacting support, and refunds are issued within 5 working days of receipt.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Leila, Customer (38), returning a jacket that does not fit

> “I just want my money back or the right size — and not to drive across town to do it.”

Uses a wheelchair; some drop-off points have steps or high counters she cannot use.

**Goals**
- Swap for another size if it is in stock
- Use a drop-off point she can access, or a collection
- Know when the refund will arrive

**Pains**
- Printing labels without a printer
- Drop-off points with no access information
- Refunds that take weeks with no update

**Behaviours**
- Checks the returns policy before buying
- Prefers a QR code to a printed label
- Keeps the original packaging

**Access needs**
- Wheelchair user — needs step-free drop-off or home collection
- Uses a phone with switch access at times

---

## Domain — Retail returns

- Online purchases can be cancelled within the statutory cooling-off period (14 days in the EU and UK) without giving a reason, with exceptions such as sealed hygiene items
- Refunds are made within the legal deadline (14 days in the EU and UK) using the original payment method unless the customer agrees otherwise
- Faulty goods have separate statutory rights that are not limited by the shop’s own returns window
- Return costs and who pays them are stated before purchase and again when starting the return

Vocabulary to use: `return window`, `exchange`, `refund`, `return label / QR code`, `drop-off point`, `faulty item`

## Technology — Responsive web and email

Inputs: Touch, Keyboard, Switch access, Camera for photos of faults

- Order lookup by email and order number without sign-in
- QR code and printable label both available
- Drop-off locations include step-free access data

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Find order** | Locate the order and choose items | `list + filters` | “Which items are you sending back?” |
| 2 | **Reason** | Say why, and choose refund or exchange | `form + chips` | “Refund or swap for another size?” |
| 3 | **Send back** | Pick drop-off or collection that suits access needs | `list + filters` | “Step-free drop-off points near you” |
| 4 | **Label** | Get a QR code or label | `confirmation` | “Show this code at the counter — no printing needed” |
| 5 | **Refund** | Track the return and know when money arrives | `progress` | “Refund of £65 issued to your card ending 4471 · allow 3–5 working days” |

### 1. Find order

- Show the return deadline next to each item
- Non-returnable items explained, not hidden
- **empty:** We can’t find an order with that number. Check your confirmation email.
- **error:** This item’s return window ended on 12 October. If it’s faulty, you can still report it.

### 2. Reason

- Reason is optional for change-of-mind returns
- Exchange shows live stock for the new size
- **error:** Size 14 is out of stock. Choose a refund or get an alert when it’s back.

### 3. Send back

- Filter by step-free access and opening hours
- Home collection offered with any cost shown
- **empty:** No step-free drop-off within 2 miles. Book a free collection instead.

### 4. Label

- QR code also sent by email
- State the deadline to send it back

### 5. Refund

- Stages: Sent, Received, Checked, Refunded
- Amount, method and timing in one line
- **error:** Part of your return didn’t pass checks — here’s why and how to appeal
- **loading:** We’ve received your return. Checking it usually takes 2 days.

---

## Principles

1. Make returning as easy as buying
2. State deadlines, costs and refund timing up front
3. Offer exchange first only when it is in stock; never push it over a refund
4. Accessible drop-off and collection options
5. Statutory rights are never narrowed by shop policy copy

## Do / Don't

**Do**
- Offer QR codes as well as printable labels
- Show the refund amount, method and date
- Explain why an item cannot be returned

**Don't**
- Default to store credit instead of a refund
- Require a reason for change-of-mind returns within the cooling-off period
- Hide the faulty-item route behind the returns window

## Accessibility

- Drop-off list has a step-free filter and each location states its access details in text
- QR code screen supports brightness boost and has the code number in text for manual entry (WCAG 2.2 1.1.1)
- All controls work with switch and keyboard; focus order follows the visual order (WCAG 2.2 2.4.3)
- Targets at least 44 × 44 px; refund status changes announced (WCAG 2.2 2.5.8, 4.1.3)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Refund copy is exact: “£65 to your card ending 4471 by Friday 7 November”
- Deadlines in words: “Send it back by Sunday 9 November”
- Rejected returns explain the reason and the next step, never just “Return declined”

## AI interactions

- Optional: suggest the right size for an exchange from the reason given and past orders, shown as a suggestion the customer confirms
- Photo check of a reported fault may speed approval, but a person reviews any rejection

## Edge cases

- Gift return without the order number — refund as a gift card or to the buyer, explained clearly
- Faulty item after the returns window — route to faulty-goods claim with statutory rights stated
- Parcel lost on the way back — proof of drop-off from the QR scan is enough to refund
- Partial return of a multi-buy offer — show how the refund amount was calculated
- Customer has paid with two methods — split the refund and explain each amount

---

## Measures

| Measure | Target | How |
|---|---|---|
| Self-service returns | ≥ 85% | Returns started online without a support contact |
| Refund time | ≤ 5 working days | Warehouse receipt → refund issued, median |
| Exchange rate | ≥ 30% | Size or colour returns that become exchanges |
| Refund status contacts | −50% | Contacts asking about refund status vs baseline |

Research: Usability tests with wheelchair users choosing drop-off points; Journey mapping of returns from start to refund using real orders; Legal review of returns copy against statutory rights in each market.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
