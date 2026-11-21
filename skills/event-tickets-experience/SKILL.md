---
name: event-tickets-experience
type: experience
journey: customer
persona: Music fan (31), buying two tickets for a concert
domain: Live events ticketing
technology: Responsive web and mobile app
core: "1.1"
description: "Experience skill: Buying tickets for an event with seat choice and fair queueing — the best-practice customer journey for a music fan (31), buying two tickets for a concert in Live events ticketing on Responsive web and mobile app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Buying tickets for an event with seat choice and fair queueing

A fan joins a fair queue, picks seats on an accessible map with full prices shown, and pays before their seats are released.

**Outcome** — At least 85% of fans who reach seat selection complete purchase within the hold time, and the all-in price never rises after seats are chosen.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.1 components and patterns, and let the active design skill render them.

---

## Persona — Hiroshi, Music fan (31), buying two tickets for a concert

> “Just tell me where I am in the queue, and let me book a wheelchair space without phoning.”

Uses a wheelchair and needs a wheelchair space plus a companion seat; often on patchy mobile data.

**Goals**
- Book a wheelchair space and a companion seat together
- Know the full price including fees from the start
- Not lose his place if his connection drops

**Pains**
- Accessible seats only bookable by phone
- Fees added at the last step
- Queue pages that reset on refresh

**Behaviours**
- Joins the queue on two devices to be safe
- Compares views from different sections
- Buys as soon as sales open

**Access needs**
- Wheelchair user — needs accessible spaces and step-free route information
- Patchy connection — needs a queue that survives reconnects

---

## Domain — Live events ticketing

- The total price including all mandatory fees is shown from the first price displayed (all-in pricing rules in several jurisdictions)
- Accessible seating and companion tickets are bookable online on equal terms (ADA, Equality Act, European Accessibility Act)
- Queue order is fair and transparent; position is held across reconnects and devices for the same account
- Ticket limits per buyer and bot protection are enforced; resale terms are stated before purchase
- Identity checks for accessible bookings ask only what is needed and do not require medical evidence where law forbids it

Vocabulary to use: `queue`, `seat map`, `section / row / seat`, `wheelchair space`, `companion seat`, `hold time`

## Technology — Responsive web and mobile app

Inputs: Touch, Keyboard, Screen reader

- Queue token tied to account and survives refresh, reconnect and app switch
- Seat holds expire after a stated time with a visible timer, a warning at least 20 seconds before expiry, and at least ten extensions
- Seat map has a list view equivalent for keyboard and screen reader users

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Join queue** | Get a fair place in the queue and know the wait | `progress` | “You’re number 4,120 in the queue · About 12 minutes” |
| 2 | **Ticket needs** | Say how many tickets and any access needs | `form + chips` | “1 wheelchair space · 1 companion seat” |
| 3 | **Choose seats** | Pick seats on a map or list with all-in prices | `list + filters` | “Section C · Row 4 · Seats 11–12 · £58 each including fees” |
| 4 | **Pay** | Pay within the hold time with no new fees | `table + totals` | “Seats held for 8:00 · Total £116” |
| 5 | **Tickets** | Get tickets and access information | `confirmation` | “You’re going. 2 tickets added to your account · Entry from 18:30 at Gate B (step-free).” |

### 1. Join queue

- Position and estimate update without a page reload
- Safe to close the tab: place held for 10 minutes
- **error:** Connection lost. Your place is held until 20:14. Reopen this page to continue.
- **loading:** Reconnecting — your place is saved
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the queue heading; a Leave and return later button and the position text are the only controls, and no keys are needed to stay in the queue.
  - Announced (A11Y-S1): Position and estimate are announced politely at most once a minute, such as "Number 4,120, about 12 minutes"; a lost connection is announced assertively.
  - Errors (A11Y-E1): The connection-lost message is text with the held-until time and a reopen button; the place is saved so nothing is lost.
  - Time limits (A11Y-W1): The place is held for 10 minutes after closing; a warning appears at least 20 seconds before it ends, with a button to keep the place.
  - Language (A11Y-L1): State the held-until time in full, such as "until 8:14 pm", and explain the queue in one short sentence.

### 2. Ticket needs

- Access options on the same screen as ticket count
- Companion seat shown with its price
- **empty:** No wheelchair spaces left at this price. 2 available in Section C at £58.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the ticket count; counts are native steppers with plus and minus buttons, access options are checkboxes on the same screen, and the companion seat price is next to its option.
  - Announced (A11Y-S1): Title "Ticket needs" is read; each change announces "1 wheelchair space, 1 companion seat" and the new total politely.
  - Errors (A11Y-E1): When no wheelchair spaces remain, the message is text beside the options, with the alternative section and price; choices are kept.
  - Time limits (A11Y-W1): No time limit on this step; the hold timer starts only when seats are chosen.
  - Language (A11Y-L1): Say "wheelchair space" and "companion seat" plainly, and give each price in pounds in full.

### 3. Choose seats

- Map and list views show the same seats and prices
- Step-free route and view notes per section
- **error:** These seats were just taken. Here are the 3 closest pairs.
- **loading:** Loading seats — list view available now
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the view toggle; the list view is the default for keyboard users, sortable by price and section, and every seat is a native button reachable in order. The map has arrow-key movement and the same list as a full alternative.
  - Announced (A11Y-S1): Each seat reads "Section C, row 4, seats 11 to 12, 58 pounds each including fees, step-free route"; loading is announced politely, and taken seats are announced assertively.
  - Errors (A11Y-E1): If seats are taken, the message in text names the seats and lists the closest three pairs; the person's filters and view are kept.
  - Time limits (A11Y-W1): No hold yet. The seat hold timer begins at the next step, and the screen states its length first.
  - Language (A11Y-L1): Include fees in every price, and describe step-free routes in short plain sentences rather than symbols alone.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The fan opens the seat map or list and asks the AI assistant for seats that fit, such as “2 seats under £60, step-free”.
  - Agent goal: Suggest seats that meet the stated needs so the fan can choose quickly and fairly.
  - Agent actions: Says it is an AI assistant that can suggest seats, but the fan chooses and pays. Shows up to three options in the list view, each with section, row, seats, all-in price and why it matches (price, view note, step-free route), marked as suggested by the AI assistant; a wheelchair space always comes with its companion seat. Selecting a suggestion is the fan’s own action and starts the stated hold.
  - Agent tone: Calm and factual; no hurry words and no talk of seats running out beyond the real count.
  - Agent type: Vertical ticketing AI assistant; single.
  - Multi-agent handoff: AI assistant → seat availability service (read only); the fan’s selection → hold service.
  - Goal failure response: Ambiguous input (“a good view”): ask whether closer to the stage or more central matters. Data unavailable (seats still loading): say so and point to the list view. Constraint violation (no step-free pair within budget): say so and show the nearest option with the price difference. Goal drift (suggests a pricier section): re-align to the stated budget. Seats taken while suggesting: drop them and show the next closest pairs.
  - Failure handover trigger: The fan asks for a person, or an accessible booking can’t be matched online → customer service immediately, with the handover context package including the stated needs and the seats considered.
  - Data needs: Live seat availability, all-in prices, section view and step-free notes, the needs the fan stated for this booking.
  - Agent memory: Short-term only: the stated needs for this booking; access needs are not kept for later suggestions unless the fan agrees, and can be viewed or deleted.
  - Regulatory classification: Consumer protection (all-in pricing, fair queueing) and personal data (access needs are sensitive); minimal AI risk; AI interaction disclosed when the AI assistant opens.

### 4. Pay

- Timer visible; before it ends people can extend the hold at least ten times, each by at least 2 minutes, with at least 20 seconds to respond (WCAG 2.2.1)
- Total identical to the seat price shown earlier
- **error:** Payment declined. Your seats are held for 3 more minutes.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the total and timer, then the payment fields; pasting and autofill work in card fields, and the Pay button follows a review of seats and total.
  - Announced (A11Y-S1): The total is read first; the timer is announced politely at 2 minutes and 30 seconds, and a declined payment is announced assertively with focus on the message.
  - Errors (A11Y-E1): A decline is stated in text beside the card fields with the remaining hold time, card details are kept, and a review of seats and total comes before Pay.
  - Time limits (A11Y-W1): The hold is 8 minutes; a warning appears at least 20 seconds before the end, with an Extend button giving at least 2 more minutes, used once.
  - Language (A11Y-L1): Show the timer as minutes and seconds in words, and the total in pounds in full, identical to the seat price.

### 5. Tickets

- Tickets in account and wallet, with offline access
- Accessible entrance, parking and contact details included
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "You're going" heading; links to tickets, wallet and access information follow in that order.
  - Announced (A11Y-S1): "You're going" is read as the heading, then the number of tickets, entry time and gate; "Tickets added" is announced politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the entry time and gate in full, such as "6:30 pm at Gate B, step-free", and explain any wallet term.

---

## Principles

1. All-in price from the first number shown
2. Fair queue that keeps your place through reconnects
3. Accessible seats bookable online like any other seat
4. Hold times visible and extendable
5. Equivalent list view for every map

## Do / Don't

**Do**
- Show position and estimated wait in the queue
- Offer a seat list view with the same data as the map
- Include access and entry details with the tickets

**Don't**
- Add fees after seat selection
- Restart someone’s queue place because they refreshed
- Require phone calls to book accessible seating

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-W1: The seat hold timer warns at least 20 seconds before expiry and can be extended at least once by a simple action
- A11Y-K1: The seat map has a list alternative, sortable by price and section, and every seat can be chosen by keyboard without dragging
- A11Y-S1: Queue position changes are announced politely at most once a minute, and lost connections are announced assertively
- A11Y-C2: Seat availability uses text labels and patterns, never colour alone
- A11Y-E3: Pay shows seats and an all-in total identical to the earlier price before payment, and a decline keeps the seats and shows time left
- A11Y-E1: Taken seats and declined payments are named in text beside the control, with choices kept
- A11Y-H1: Access information and help stay in the same place on every step

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Prices always all-in: “£58 each including fees”
- Queue copy is honest: “About 12 minutes” and “Tickets aren’t guaranteed until you pay”
- Seat-taken copy offers the next action: “Here are the 3 closest pairs.”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant appears only at seat choice, says it is AI, and explains why each suggested pair of seats matches the fan’s stated needs (budget, view, step-free)
- The AI assistant has no part in the queue: using it never changes, holds or speeds up a queue place, and fans who don’t use it have the same chance of seats
- Every price the AI assistant quotes is the all-in price from the seat map; it never suggests a pricier seat without saying so and why, and never uses the hold timer or seat counts to hurry the fan
- A wheelchair space and its companion seat are always suggested together, and suggestions stay marked as from the AI assistant until the fan selects them
- The AI assistant steps back before Pay: the fan sees the seats, the all-in total and the time left, pays and does any bank check themselves, and the tickets screen states the refund terms if the event is cancelled or postponed
- A payment problem, a hold lost during payment, or a request for a person goes to customer service immediately with the handover context package

## Edge cases

- Event postponed or cancelled — notify immediately with refund or keep-tickets options and deadlines
- Fan in the queue on two devices — keep the better position, release the other
- Hold expires during bank authentication — extend the hold until authentication returns
- Ticket limit reached across accounts — explain the limit plainly without accusing the fan
- Companion seat sold separately by mistake — keep wheelchair space and companion seat together in one hold

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Fan account — name, email, phone, tickets bought for this event (for the limit) · relates to Queue place, Order, Access requirement · personal data
- Queue place — queue token, position, estimated wait, held until, devices joined · relates to Fan account · personal data
- Access requirement — wheelchair space, companion seat, step-free route needed, keep for future bookings (consent) · relates to Fan account, Hold · personal data
- Seat — section, row, seat number, all-in price, fees included, seat type (standard, wheelchair space, companion), view note, step-free route, status · relates to Hold
- Hold — seats, started at, expires at, extensions used, paused for bank check · relates to Seat, Order
- Order — order number, seats, all-in total, fees, status, refund and resale terms, idempotency key · relates to Fan account, Payment, Ticket · personal data
- Payment — amount, method type, payment token, authentication outcome, status · relates to Order · personal data
- Ticket — ticket code, wallet pass, seat, entry time, gate, step-free entrance, parking and access contact · relates to Order · personal data
- AI assistant conversation — needs stated, seats suggested with reasons, suggestion chosen, handover if any, time · relates to Fan account, Hold · personal data

### Systems it touches

- Queue service — reads queue tokens, account sessions; writes positions, estimates, held-until times · when down: Places are frozen, not reset; the fan sees the last position and that their place is saved.
- Seat availability and hold service — reads seats, all-in prices, holds; writes holds, extensions, releases · when down: Seat choice pauses; no hold starts, so no timer runs, and the fan is told plainly.
- Bot protection — reads request patterns, ticket limits; writes challenges · when down: Ticket limits are still checked at payment; any challenge has an accessible alternative that doesn’t rely on sight.
- Payment provider — reads authentication outcome, payment status; writes payment token, charge, refund · when down: Pay is unavailable, the hold is extended and no charge is made; the fan is told plainly.
- Ticketing and wallet service — reads orders; writes tickets, wallet passes, access information · when down: The order shows on screen and tickets are issued to the account when the service is back.
- Notification service; writes order emails, postponement and cancellation notices · when down: Notices are queued and the account page shows them.
- AI assistant service — reads seat availability, all-in prices, view and step-free notes; writes seat suggestions marked as made by the AI assistant · when down: Seat choice works fully by map and list; the AI assistant is simply not offered.

### Roles

- Fan — join the queue on any device, state ticket and access needs, choose seats, extend the hold, pay and authenticate, ask for a person
- Customer service and access team — see queue, hold and order status, book accessible seating with the fan, fix ticket problems, refund
- Event organiser — set sections, prices and fees, set ticket limits, postpone or cancel with refund options
- AI assistant — suggest seats for stated needs with reasons, explain view and step-free notes, show how to reach a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Purchase completion (seat selection to paid, within the hold): at least 85% (range 80–90%)
- Price consistency (checkout total equals seat price shown): 100% (range 100%; no lower target)
- Queue place held after closing the page: 10 minutes (range 10–15 minutes)
- Seat hold at Pay: 8 minutes, extendable at least ten times by at least 2 minutes (range 8–15 minutes)
- Warning before a hold or queue place ends: at least 20 seconds (range 20–60 seconds)
- Queue resets after a reconnect: under 0.5% (range 0–0.5%)
- Accessible bookings made online: at least 90% (range 90–100%)
- Order and payment records: the legal minimum for the jurisdiction (range set by tax and consumer law)

### Required inputs and configuration

- Venue seat map with sections, views and step-free routes
- All-in price and fee rules for each jurisdiction sold into
- Ticket limits per buyer and bot protection rules
- Accessible seating and companion ticket policy, and any proof asked for where law allows
- Refund policy for cancelled or postponed events, and resale terms
- Payment provider with bank authentication
- Customer service and access team contact route and hours

---

## Measures

| Measure | Target | How |
|---|---|---|
| Purchase completion | ≥ 85% | Seat selection → paid, within hold time |
| Price consistency | 100% | Orders where checkout total equals the seat price shown |
| Accessible bookings online | ≥ 90% | Accessible seats booked without a phone call |
| Queue resets | < 0.5% | Users who lose their place after a reconnect |

Research: Usability tests with wheelchair users booking spaces and companion seats; Load testing of the queue with simulated reconnects; Screen reader audit of the seat map and list view.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
