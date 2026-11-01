---
name: event-tickets-experience
type: experience
journey: customer
persona: Music fan (31), buying two tickets for a concert
domain: Live events ticketing
technology: Responsive web and mobile app
core: "1.0"
description: "Experience skill: Buying tickets for an event with seat choice and fair queueing — the best-practice customer journey for a music fan (31), buying two tickets for a concert in Live events ticketing on Responsive web and mobile app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Buying tickets for an event with seat choice and fair queueing

A fan joins a fair queue, picks seats on an accessible map with full prices shown, and pays before their seats are released.

**Outcome** — At least 85% of fans who reach seat selection complete purchase within the hold time, and the all-in price never rises after seats are chosen.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

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
- Seat holds expire after a stated time with a visible timer and one extension
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

### 4. Pay

- Timer visible with one extension of at least 2 minutes
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

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Prices always all-in: “£58 each including fees”
- Queue copy is honest: “About 12 minutes” and “Tickets aren’t guaranteed until you pay”
- Seat-taken copy offers the next action: “Here are the 3 closest pairs.”

## AI interactions

- Optional: suggest the best available seats for stated needs (budget, view, step-free), shown as choices the fan selects
- Bot detection runs in the background; any challenge offers an accessible alternative and never depends on vision alone

## Edge cases

- Event postponed or cancelled — notify immediately with refund or keep-tickets options and deadlines
- Fan in the queue on two devices — keep the better position, release the other
- Hold expires during bank authentication — extend the hold until authentication returns
- Ticket limit reached across accounts — explain the limit plainly without accusing the fan
- Companion seat sold separately by mistake — keep wheelchair space and companion seat together in one hold

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
