---
name: returns-and-exchanges-experience
type: experience
journey: customer
persona: Customer (38), returning a jacket that does not fit
domain: Retail returns
technology: Responsive web and email
core: "1.3"
description: "Experience skill: Starting a return or exchange and getting the refund — the best-practice customer journey for a customer (38), returning a jacket that does not fit in Retail returns on Responsive web and email. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Starting a return or exchange and getting the refund

A customer returns or swaps an item in a few steps, picks an accessible drop-off or collection, and knows exactly when the refund will land.

**Outcome** — At least 85% of returns are started online without contacting support, and refunds are issued within 5 working days of receipt.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.3 components and patterns, and let the active design skill render them.

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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first item checkbox; Tab moves through items in order, and each shows its deadline in text and works with switch access.
  - Announced (A11Y-S1): Page title is Find order; each item is read with its return deadline, and the empty message is read as text.
  - Errors (A11Y-E1): An order not found, or an item past its window, is named beside the field with what can still be done; the order number stays.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write return deadlines in full, such as 12 October, and explain 'non-returnable' with the reason.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The customer asks the AI assistant to start a return, for example "send back the jacket from last week".
  - Agent goal: Find the right order and items without the customer hunting for an order number.
  - Agent actions: Says it is an AI assistant that can find orders, explain the return rules and set up a return the customer confirms. Finds the order, ticks the items it thinks are meant and marks them as selected by the AI; the customer confirms or changes the selection. Shows each item's return deadline and explains non-returnable items with the reason.
  - Agent tone: Friendly and brief; plain words.
  - Agent type: Vertical retail returns assistant; single.
  - Multi-agent handoff: AI assistant looks up the order in the order system, then the returns policy service.
  - Goal failure response: Ambiguous input (two recent jackets): show both with dates and ask which. Data unavailable (order not found): say so plainly and offer lookup by email and order number. Constraint violation (past the return window): say the date it ended and offer the faulty-item route; never hide it.
  - Failure handover trigger: The customer asks for a person, or the order still can't be found after 2 tries: customer service, immediately for a request, with the handover context package.
  - Data needs: Order lines, purchase dates, return deadlines, returns policy, non-returnable rules.
  - Agent memory: Short-term: the request and selected items. Episodic: past orders, shown only after the customer is signed in or has matched email and order number.
  - Regulatory classification: Minimal risk under the EU AI Act; AI interaction disclosed; personal data used only to find the order (data protection).

### 2. Reason

- Reason is optional for change-of-mind returns
- Exchange shows live stock for the new size
- **error:** Size 14 is out of stock. Choose a refund or get an alert when it’s back.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the refund or exchange choice, a labelled radio group; reasons are optional, and the size choice is a native select.
  - Announced (A11Y-S1): The choice is read as 'Refund or swap for another size'; stock status is announced politely when the size changes.
  - Errors (A11Y-E1): Out of stock is named beside the size with a refund or alert offered; reasons and choices stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'refund' and 'swap' plainly and write the size as 'size 14'.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: Items are chosen and the customer is asked for a reason and refund or exchange.
  - Agent goal: Help the customer choose between a refund and an exchange that will actually fit.
  - Agent actions: Asks for a reason only as an option, never required for change of mind. If the customer says it is too small, suggests a size from the reason and past orders, with live stock, marked as a suggestion from the AI. Shows refund and exchange side by side with equal weight; the customer picks.
  - Agent tone: Neutral and helpful; never salesy.
  - Agent type: Vertical retail returns assistant; single.
  - Multi-agent handoff: AI assistant checks the inventory service for the suggested size.
  - Goal failure response: Data unavailable (stock service down): say stock can't be checked now, offer the refund or a back-in-stock alert. Low confidence on size: show two sizes with reasons and let the customer choose. Goal drift (steering to exchange when the customer said refund): keep to what they asked.
  - Failure handover trigger: The customer reports a fault, damage or a safety issue: the returns team with the handover context package, because faulty-goods rights apply. A request for a person goes through immediately.
  - Data needs: Reason list, size history, live stock by size.
  - Agent memory: Short-term: reason and choice. Procedural: preferred sizes, if the customer allows it to be kept.
  - Regulatory classification: Minimal risk; consumer law on refunds and faulty goods; suggestions disclosed as AI-made.

### 3. Send back

- Filter by step-free access and opening hours
- Home collection offered with any cost shown
- **empty:** No step-free drop-off within 2 miles. Book a free collection instead.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the filter group; step-free access is a labelled checkbox, and each location is a list item with access details in text.
  - Announced (A11Y-S1): The location count is announced politely after filtering; each location is read with its access details and opening hours.
  - Errors (A11Y-E1): The empty result names the filter and offers free collection; nothing entered is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Describe access in words, such as 'no steps at the entrance', and give distance in miles.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The customer reaches the send-back step.
  - Agent goal: Find a send-back option the customer can actually use.
  - Agent actions: Asks about access needs only if the customer raises them or uses the filter. Lists step-free drop-off points and home collection, with access details, opening hours, distance and any cost, ranked and marked as suggested by the AI. Booking a collection is shown in full and confirmed by the customer.
  - Agent tone: Practical and respectful.
  - Agent type: Vertical retail returns assistant; single.
  - Multi-agent handoff: AI assistant queries the carrier and drop-off location service, then the collection booking service after the customer confirms.
  - Goal failure response: Data unavailable (no access data for a point): say access is unknown rather than guessing. Ambiguous input (no location given): ask for a postcode. Partial completion (collection slot not confirmed by the carrier): show it as not booked yet and retry, never as booked.
  - Failure handover trigger: Collection booking fails after 2 retries, or the customer asks for a person: customer service with the handover context package and the options already shown.
  - Data needs: Drop-off locations with step-free access data, opening hours, collection slots and costs.
  - Agent memory: Short-term: location and chosen method. Episodic: the customer's saved address, if signed in.
  - Regulatory classification: Minimal risk; access needs are sensitive personal data and are used only for this return, not stored unless the customer asks.

### 4. Label

- QR code also sent by email
- State the deadline to send it back
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the label heading; the code and its number in text are first, followed by Email me the code, all reachable by keyboard.
  - Announced (A11Y-S1): 'Show this code at the counter' is read, along with the code number and the send-back deadline in full.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit; the send-back deadline is shown as a full date.
  - Language (A11Y-L1): Write the code number in text for manual entry and state the deadline as a full date.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The return is confirmed and the code is created.
  - Agent goal: Make sure the customer can use the code and knows the deadline.
  - Agent actions: Answers questions about the code if asked, resends it by email on request, and states the send-back deadline as a full date. The customer can cancel the return from here until it is sent.
  - Agent tone: Clear and short.
  - Agent type: Vertical retail returns assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Partial completion (code shown but email not sent): say the email failed, keep the code on screen and offer to resend. Data unavailable (code service down): say so and offer a printable label when it returns.
  - Failure handover trigger: The code can't be created after 2 retries, or the customer asks for a person: customer service, with the handover context package.
  - Data needs: Return code, label, send-back deadline, customer email.
  - Agent memory: Short-term: the return reference.
  - Regulatory classification: Minimal risk; email address used only to send the code.

### 5. Refund

- Stages: Sent, Received, Checked, Refunded
- Amount, method and timing in one line
- **error:** Part of your return didn’t pass checks — here’s why and how to appeal
- **loading:** We’ve received your return. Checking it usually takes 2 days.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the status heading; stages are an ordered list, and the appeal link is a real link.
  - Announced (A11Y-S1): Each stage change is announced politely, such as 'Received', and 'Refund of £65 issued to card ending 4471' is read in full.
  - Errors (A11Y-E1): A failed check explains why in text, and the appeal can be started with the details kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write 'allow 3 to 5 working days' and give the amount and card ending together.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The customer asks where their refund is, or the return changes stage.
  - Agent goal: Tell the customer exactly where the return is and when the money arrives.
  - Agent actions: Answers with the stage, refund amount, method and expected date in one line; explains split refunds and multi-buy calculations. Never sees or asks for card details; refunds go to the original payment method. If a check failed, gives the reason the inspector recorded and starts an appeal the customer confirms.
  - Agent tone: Reassuring and exact; calm if the customer is worried.
  - Agent type: Vertical retail returns assistant; single.
  - Multi-agent handoff: AI assistant reads the returns service and payment service status; an appeal goes to a person.
  - Goal failure response: Data unavailable (status not updated): say when it was last updated and the deadline the law sets. Constraint violation (customer asks the AI to approve a rejected item): explain that a person decides and offer the appeal. Partial completion (part of the return failed checks): show what was refunded and what was not, and why.
  - Failure handover trigger: Any refund failure, a refund past its promised date, a parcel lost on the way back, a dispute or an appeal: the returns team immediately with the handover context package, because money is involved. A request for a person goes through at once.
  - Data needs: Return stages, inspection result, refund amount, payment method (masked), refund date.
  - Agent memory: Episodic: the return and its history, for later questions.
  - Regulatory classification: Refunds are money: the AI assistant only informs; any rejection or photo-based fault decision is reviewed by a person (automated-decision safeguards); consumer law refund deadlines apply.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: The drop-off list has a step-free filter, and each location states its access details in text.
- A11Y-C1: The QR code screen supports a brightness boost and shows the code number in text for manual entry.
- A11Y-K1: All controls work with switch access and keyboard, and focus order follows the visual order.
- A11Y-T1: Targets are at least 44 × 44 px, and refund status changes are announced.
- A11Y-E1: Return window and stock errors are named beside the field with options, and entries are kept.
- A11Y-E3: The return shows items, method and refund amount for checking before it is confirmed, and can be changed before collection.
- A11Y-W1: Return deadlines are shown as full dates and a reminder is sent before they end.
- A11Y-H1: A help link appears in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Refund copy is exact: “£65 to your card ending 4471 by Friday 7 November”
- Deadlines in words: “Send it back by Sunday 9 November”
- Rejected returns explain the reason and the next step, never just “Return declined”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is AI before it does anything, and every item, reason or option it picked is marked as chosen by the AI until the customer accepts it
- The AI assistant offers an exchange only when the new size is in stock, and never pushes an exchange or store credit over a refund
- Nothing is booked or confirmed until the customer has seen the exact items, send-back method, any cost and the refund amount; they can change or cancel it before collection
- A rejected return or failed check is decided by a person; the customer gets the main reason and can appeal to a person
- Statutory rights, such as the cooling-off period and faulty-goods rights, are stated as they are; the AI assistant never narrows them
- Asking for a person works on every step and passes the handover context package, so nothing is asked twice

## Edge cases

- Gift return without the order number — refund as a gift card or to the buyer, explained clearly
- Faulty item after the returns window — route to faulty-goods claim with statutory rights stated
- Parcel lost on the way back — proof of drop-off from the QR scan is enough to refund
- Partial return of a multi-buy offer — show how the refund amount was calculated
- Customer has paid with two methods — split the refund and explain each amount

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Customer — name, email, delivery address, access needs (optional) · relates to Order, Return · personal data
- Order — order number, order date, items, amount paid, payment methods · relates to Customer, Return · personal data
- Return — items, reason (optional), refund or exchange, send-back method, return code, send-back deadline, stage, made with AI assistant (yes/no) · relates to Order, Inspection, Refund · personal data
- Inspection — result, reason, photos, inspector, date · relates to Return, Appeal
- Refund — amount, method (masked), split amounts, issued date, expected arrival · relates to Return · personal data
- Appeal — reason, evidence, reviewer, outcome, date · relates to Inspection, Customer · personal data
- Drop-off point — address, opening hours, step-free access, counter height, distance · relates to Return

### Systems it touches

- Order management system — reads orders, items, payment methods (masked); writes return started on order · when down: The customer can still enter email and order number; the return is saved and checked when the system is back.
- Returns management service — reads return policy, return windows; writes returns, stages, appeals · when down: Say returns can't be started right now, give the time to try again, and keep the return deadline unchanged.
- Inventory service — reads live stock by size · when down: Offer the refund or a back-in-stock alert; never promise an exchange.
- Carrier and drop-off location service — reads locations, access data, collection slots; writes collection bookings, return codes · when down: Show a printable label route and a free collection request handled by customer service.
- Payment service — reads refund status; writes refunds to the original method · when down: Refunds are queued, the customer is told the legal deadline still applies, and the returns team is alerted.
- Email and notification service; writes codes, stage updates, refund notices · when down: Keep everything on screen and in the order page; resend when it is back.

### Roles

- Customer — start, change and cancel a return before it is sent, choose refund or exchange, appeal a failed check, ask for a person at any step
- Customer service adviser — see the handover context package, start or fix a return for the customer, book a collection
- Warehouse inspector — record inspection results with reasons, decide failed checks
- Returns team lead — decide appeals and disputes, approve refunds outside policy, set returns policy within the law
- AI assistant — find orders and pre-select items, marked as AI-chosen, suggest a size and send-back options, explain status and reasons, prepare an appeal the customer confirms, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- AI assistant reply time: Under 3 seconds (range 1–5 seconds)
- Refund after the return is received: 5 working days (range 1 day up to the legal deadline (14 days in the UK and EU))
- Appeal decision by a person: 2 working days (range 1–5 working days)
- Returns service availability: 99.9% (range 99.5–99.95%)
- Return and refund records kept: The legal minimum for the jurisdiction (range Set by consumer and tax law)

### Required inputs and configuration

- Returns policy and return windows by product type
- Non-returnable rules with plain-language reasons
- Who pays return costs, by method
- Drop-off locations with access data
- Collection service and costs
- Refund timing and methods
- Customer service contact routes
- Appeal process and its time limit

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
