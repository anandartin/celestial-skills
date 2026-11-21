---
name: order-tracking-experience
type: experience
journey: customer
persona: Customer (72), waiting for a medical supplies parcel
domain: Retail logistics
technology: Responsive web tracking page plus SMS and email
core: "1.1"
description: "Experience skill: Following an order from dispatch to delivery, including delays — the best-practice customer journey for a customer (72), waiting for a medical supplies parcel in Retail logistics on Responsive web tracking page plus SMS and email. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Following an order from dispatch to delivery, including delays

A customer always knows where their parcel is, when it will arrive and what to do if it is late, without having to contact support.

**Outcome** — At least 90% of customers can state their delivery date from one screen, and “where is my order” contacts fall by 40%.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Assistive — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.1 components and patterns, and let the active design skill render them.

---

## Persona — Ken, Customer (72), waiting for a medical supplies parcel

> “I need to know which day to stay in. If it’s late, tell me before I find out.”

Lives alone; has hearing loss and cannot rely on a phone call or doorbell from the courier.

**Goals**
- Know which day and roughly what time to be home
- Be told early if it will be late
- Leave delivery instructions

**Pains**
- Courier jargon such as “exception at hub”
- Updates that only come by phone call
- Estimated windows that change without explanation

**Behaviours**
- Checks the tracking link several times a day
- Prefers text messages to app notifications
- Asks a neighbour to take parcels

**Access needs**
- Hearing loss — needs text updates, not calls
- Large text (150%)

---

## Domain — Retail logistics

- The retailer remains responsible for goods until they are delivered to the customer (consumer law in many regions)
- Delivery timeframes promised at checkout are honoured or the customer is told of the right to cancel if they are missed
- Tracking links do not expose the full address or name to anyone with the link; show a partial address
- Delivery photos are kept only as long as needed to resolve disputes

Vocabulary to use: `dispatched`, `out for delivery`, `delivery window`, `safe place`, `neighbour delivery`, `proof of delivery`

## Technology — Responsive web tracking page plus SMS and email

Inputs: Touch, Keyboard, SMS reply

- Carrier status events mapped to plain-language stages
- Tracking page works from a link without sign-in
- Notifications respect quiet hours and chosen channel

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Dispatched** | Know the order has left and when it should arrive | `feedback` | “Your order is on its way · Arriving Wednesday 29 October” |
| 2 | **Track** | See the current stage and estimate at a glance | `progress` | “Stage 3 of 4 · Out for delivery · 13:00–15:00” |
| 3 | **Instructions** | Choose a safe place or neighbour | `form` | “Where should we leave it if you’re out?” |
| 4 | **Delay** | Learn about a delay early and what the options are | `feedback` | “Your parcel is delayed. New date: Friday 31 October.” |
| 5 | **Delivered** | Confirm where it was left and report a problem | `confirmation` | “Delivered 14:22 · Left with neighbour at number 12” |

### 1. Dispatched

- Lead with the day, not the carrier status
- Link to tracking with no sign-in
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the tracking link is the first link and works without sign-in, with the arrival day in the first line of the email or text.
  - Announced (A11Y-S1): "Your order is on its way, arriving Wednesday 29 October" is the title or subject, read in full, and an SMS reads the same in plain text.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Lead with the day and write it in full, such as "Wednesday 29 October", without carrier terms.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The customer replies to the dispatch text or email, or asks on the tracking page, such as “When is it coming?”.
  - Agent goal: Tell the customer the delivery day plainly, from the tracking record.
  - Agent actions: Says it is an AI assistant that answers questions about this parcel from tracking data and can pass them to a person. Answers with the day in words and the time of the last update, such as “Wednesday 29 October, last updated 08:40”, and never asks the customer to sign in or repeat the order number.
  - Agent tone: Clear and calm; short sentences, no carrier jargon.
  - Agent type: Vertical support AI assistant; single.
  - Multi-agent handoff: AI assistant → tracking service (read only).
  - Goal failure response: Data unavailable (no carrier event yet): give the promised date from the order and say tracking will follow. Ambiguous input (several parcels on one order): ask which, naming each by item. Constraint violation (someone with the link asks for the full address or name): give only the partial address and say why.
  - Failure handover trigger: The customer asks for a person → customer service by text immediately, with the handover context package; no phone call unless the customer asks for one.
  - Data needs: Order, promised date, carrier events mapped to plain stages, partial address, chosen channel and quiet hours.
  - Agent memory: Short-term: this conversation and parcel; nothing kept beyond the order record.
  - Regulatory classification: Consumer protection (the retailer is responsible until delivery) and personal data (partial address only through the link); minimal AI risk; AI interaction disclosed in the first reply.

### 2. Track

- Four plain stages: Ordered, Dispatched, Out for delivery, Delivered
- Window narrows as the day goes on, with the time it was updated
- **error:** We can’t reach the courier right now. Last update 09:12: Out for delivery.
- **loading:** Show the last known stage with its time while refreshing
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the stage heading; the four stages are an ordered list with the current one marked in text, and Refresh is a normal button.
  - Announced (A11Y-S1): "Stage 3 of 4, out for delivery, between 1 and 3 pm" is read, and changes are announced politely without moving focus.
  - Errors (A11Y-E1): If the courier cannot be reached, the message says "Last update 9:12 am, out for delivery" in text, and the last known stage is kept visible.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the delivery window as full times, such as "between 1 and 3 pm", and name stages the same way each time.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The customer opens the tracking page or asks “what time will it arrive?” on delivery day.
  - Agent goal: Give the most useful honest window for when to be home.
  - Agent actions: Shows the stage and the carrier’s window and, when route data supports it, a narrower window labelled “Estimate by the AI assistant, updated 11:05”. Says in one sentence that the estimate can change and the carrier’s window still stands.
  - Agent tone: Plain and reassuring; times written in full.
  - Agent type: Vertical support AI assistant with a delivery-window estimator behind it; orchestrated.
  - Multi-agent handoff: Courier route data → window estimator → AI assistant explains.
  - Goal failure response: Data unavailable (courier can’t be reached): show the last known stage with its time and drop the estimate. Low confidence (sparse route data): show only the carrier’s window and say why. Goal drift (estimate falls outside the carrier’s window): don’t show it and log it for review.
  - Failure handover trigger: The window passes with no delivery, or the customer asks → customer service, with the handover context package.
  - Data needs: Courier route and stop order, current stage, carrier window, time of last update.
  - Agent memory: Short-term only.
  - Regulatory classification: Minimal AI risk; the estimate is labelled as made by the AI assistant with its update time; the courier’s live position is not shown in a way that tracks the courier.

### 3. Instructions

- Options listed with what each means for liability
- Changes allowed until the parcel is out for delivery
- **error:** It’s too late to change this delivery. You can still pick it up from the depot.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first option; options are native radio buttons with the meaning for liability written under each, and Save follows a review of the choice.
  - Announced (A11Y-S1): Title "Where to leave it" is read; each option reads its liability text, and the saved choice is announced politely.
  - Errors (A11Y-E1): A too-late change is explained in text beside the options with a link to pick up from the depot; the chosen option is kept and the change can be undone until dispatch.
  - Time limits (A11Y-W1): Changes are allowed until the parcel is out for delivery; the cut-off time is stated in full, with a warning at least 20 seconds before it.
  - Language (A11Y-L1): Explain liability in a plain sentence and name each safe place in the same words as the confirmation.

### 4. Delay

- Say why in plain words, the new date and the options
- Offer cancel and refund if the promised date is missed
- **empty:** No new date yet — we’ll text you by 6pm tomorrow
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the delay heading; the new date, reason and options follow in order, with Cancel and refund as a normal button after a confirm step.
  - Announced (A11Y-S1): "Your parcel is delayed, new date Friday 31 October" is read as the heading, and a new date is announced politely.
  - Errors (A11Y-E1): If no new date is known, the text says "we'll text you by 6 pm tomorrow" beside the status; a refund choice shows a confirm step first.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give the reason in plain words and the new date in full, and avoid carrier terms.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: A delay is recorded, or the customer asks “why is it late?”.
  - Agent goal: Explain the delay, the new date and the options before the original date passes.
  - Agent actions: Gives the reason in plain words, the new date in words and the options the order allows: wait, collect from the depot, or cancel for a full refund if the promised date is missed. States the refund amount and how long it takes; the customer chooses and confirms on the order page, and the AI assistant never cancels for them.
  - Agent tone: Sorry without blame; direct.
  - Agent type: Vertical support AI assistant; single.
  - Multi-agent handoff: AI assistant → tracking and order services (read only).
  - Goal failure response: Data unavailable (no new date yet): say when the next update will come, such as by 6pm tomorrow. Constraint violation (asked to cancel for them): explain the customer confirms it and link to the page. Ambiguous input (“can I get it sooner?”): ask whether collecting it or another day suits.
  - Failure handover trigger: A medical or perishable item is delayed, the carrier has sent nothing for 48 hours, or the customer asks → customer service immediately with the handover context package, offering reshipment or a refund.
  - Data needs: Delay reason, new date, promised date, the order’s cancel and refund rights, item flags (medical, perishable).
  - Agent memory: Short-term; the delay history joins the order record.
  - Regulatory classification: Consumer protection: the right to cancel when the promised date is missed; refunds are made by the order system after the customer confirms, never by the AI assistant; minimal AI risk.

### 5. Delivered

- Show where it was left and the photo if taken
- “I haven’t received it” route on the same screen
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "Delivered" heading; the photo has alt text, and "I haven't received it" is a button on the same screen.
  - Announced (A11Y-S1): "Delivered 2:22 pm, left with neighbour at number 12" is read as the heading, and the photo's alt text says where it was left.
  - Errors (A11Y-E1): A report problem is named in text beside the field and linked to it; what was typed is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give the time in full, such as "2:22 pm", and describe the place the parcel was left in plain words.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: Delivery is recorded, or the customer asks where it was left.
  - Agent goal: Tell the customer exactly where the parcel is and route any problem fast.
  - Agent actions: States the time and place it was left and offers the delivery photo if one was taken. If the customer says they haven’t received it, the AI assistant opens the claim in two taps and passes it to a person straight away, asking for no proof first.
  - Agent tone: Calm and believing; no blame.
  - Agent type: Vertical support AI assistant; single.
  - Multi-agent handoff: AI assistant → proof of delivery (read only) → claims team when a problem is reported.
  - Goal failure response: Data unavailable (no proof of delivery yet): say so and give the time it was marked delivered. Partial completion (split shipment, one parcel missing): show each parcel’s status separately. Ambiguous input (“it’s not here”): check which parcel, then open the claim.
  - Failure handover trigger: Not received, damaged or wrong item → customer service immediately with the handover context package, including the proof of delivery and the customer’s own words.
  - Data needs: Proof of delivery (time, place, photo), parcel list for the order.
  - Agent memory: Short-term; the delivery photo is kept only as long as needed to resolve disputes.
  - Regulatory classification: Consumer protection (retailer liable until delivery) and personal data (the photo may show the home); minimal AI risk.

---

## Principles

1. Lead with the date and place, not the carrier’s status code
2. Tell people about delays before the original date passes
3. Every update offers the next action
4. Let customers choose their notification channel
5. Never expose personal data through a shared tracking link

## Do / Don't

**Do**
- Translate carrier events into four plain stages
- Show the time of the last update
- Offer text-only updates for people who cannot take calls

**Don't**
- Show raw carrier codes such as “exception at hub”
- Mark as delivered without saying where
- Hide the cancel or refund option when a promise is missed

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C2: Progress stages are an ordered list with the current stage marked in text, not colour only
- A11Y-S1: Status changes on the page are announced in a polite live region without moving focus
- A11Y-L1: Times and dates are read in full, such as "Wednesday 29 October, between 1 and 3 pm"
- A11Y-N1: Delivery photos have alt text describing where the parcel was left
- A11Y-R1: At 150% and 200% text the stage list and notices reflow without horizontal scrolling
- A11Y-E1: Late changes and unreachable courier states are explained in text next to the control, keeping the choice made
- A11Y-H1: The "I haven't received it" route sits in the same place on every step

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Dates in words: “Wednesday 29 October”, never “29/10” alone
- Delay copy gives reason, new date and options: “Delayed by weather. New date Friday. Cancel for a full refund if you prefer.”
- No blame language towards the customer for missed deliveries

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is AI in its first reply, by text or on the tracking page, and answers “where is my order” only from tracking data, giving the time of the last update
- Any narrower delivery window is labelled as an estimate by the AI assistant with when it was last updated, and never replaces the promised date or the carrier’s window
- The AI assistant never cancels, refunds or changes delivery instructions; it links to where the customer does it, and the refund amount and timing are shown before they confirm
- A lost, damaged or not-received parcel, a delayed medical or perishable item, or a request for a person goes to a person immediately with the handover context package
- Every answer works by text alone, gives dates in words and plain stages, and never shows the full name or address to someone holding the tracking link

## Edge cases

- Parcel marked delivered but not received — start a claim in two taps; no proof burden on the customer before investigation
- Split shipment — show each parcel with its own stage and date
- Carrier stops sending updates for 48 hours — flag it and contact the customer proactively
- Medication or perishable item delayed — highlight and offer reshipment or refund immediately
- Customer moves address mid-delivery — explain what can and cannot be changed

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Customer — name, phone, email, delivery address, chosen channel, quiet hours · relates to Order · personal data
- Order — order number, items, promised date, status, item flags (medical, perishable), cancel and refund rights · relates to Customer, Parcel, Claim · personal data
- Parcel — tracking reference, carrier, plain stage, carrier window, estimate by the AI assistant, last update time, partial address · relates to Order, Carrier event, Proof of delivery · personal data
- Carrier event — carrier code, plain stage, time, place · relates to Parcel
- Delivery instruction — safe place or neighbour, what it means for liability, changeable until · relates to Parcel · personal data
- Delay — reason, new date, notified at, options offered · relates to Parcel
- Proof of delivery — time, place left, photo, delete after · relates to Parcel · personal data
- Claim — type (not received, damaged, wrong item), customer’s words, status, outcome (refund or reshipment), opened at · relates to Order · personal data
- AI assistant conversation — questions, answers with data time, channel, handover if any, time · relates to Order · personal data

### Systems it touches

- Carrier tracking feed — reads carrier events, route data, proof of delivery · when down: Show the last known stage with its time; after 48 hours of silence, contact the customer proactively.
- Order service — reads orders, promised dates, rights; writes cancellations, refunds, delivery instructions · when down: Tracking still shows; changes and cancellations wait and the customer is told when to try again.
- Delivery-window estimator — reads route data, stop order; writes estimates marked as made by the AI assistant · when down: Only the carrier’s window is shown.
- Notification service (text and email) — reads chosen channel, quiet hours; writes dispatch, delay and delivery messages · when down: Messages queue and the tracking page shows the latest update.
- Claims and customer service — reads orders, proof of delivery, handover packages; writes claims, refunds, reshipments · when down: The claim is saved and the customer is told when a person will reply.
- AI assistant service — reads tracking, orders, proof of delivery; writes answers, handovers · when down: The tracking page and messages work unchanged; the AI assistant is simply not offered.

### Roles

- Customer — track without signing in, set a safe place or neighbour, choose a channel, cancel for a refund when the promised date is missed, report a parcel not received, ask for a person
- Courier — update stages, record where a parcel was left, take a delivery photo
- Customer service — see tracking and proof of delivery, resolve claims, refund or reship, change delivery where possible
- AI assistant — answer “where is my order” from tracking data, give a labelled window estimate, explain delays and options, open a claim and pass it to a person, works at most in Assistive mode

### Default targets (the product confirms or replaces them)

- Delivery date understood from one screen: at least 90% (range 85–95%)
- “Where is my order” contacts: 40% fewer than baseline (range 30–50% fewer)
- Delays notified before the original date passes: at least 95% (range 90–99%)
- Missing-parcel claims resolved (median): under 3 days (range 1–5 days)
- Carrier silence before proactive contact: 48 hours (range 24–48 hours)
- Delivery photos: kept only until the dispute window closes (range set by the claims period)
- Order and refund records: the legal minimum for the jurisdiction (range set by tax and consumer law)

### Required inputs and configuration

- Carrier event codes and their mapping to four plain stages
- Promised delivery rules and the right to cancel when they are missed
- Delivery instruction options and what each means for liability
- Notification channels and quiet hours
- Claims, reshipment and refund policy, including medical and perishable items
- Proof of delivery photo retention period
- Customer service text route and hours

---

## Measures

| Measure | Target | How |
|---|---|---|
| Delivery date understood | ≥ 90% | Test participants state the date from one screen |
| “Where is my order” contacts | −40% | Support contacts tagged WISMO vs baseline |
| Proactive delay notice | ≥ 95% | Delays notified before the original date passes |
| Missing-parcel claims resolved | < 3 days | Median time from claim to refund or reship |

Research: Diary study of customers waiting for deliveries across a week; Usability tests with older and Deaf or hard-of-hearing participants; Analysis of carrier event codes vs customer contact reasons.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
