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

### 2. Ticket needs

- Access options on the same screen as ticket count
- Companion seat shown with its price
- **empty:** No wheelchair spaces left at this price. 2 available in Section C at £58.

### 3. Choose seats

- Map and list views show the same seats and prices
- Step-free route and view notes per section
- **error:** These seats were just taken. Here are the 3 closest pairs.
- **loading:** Loading seats — list view available now

### 4. Pay

- Timer visible with one extension of at least 2 minutes
- Total identical to the seat price shown earlier
- **error:** Payment declined. Your seats are held for 3 more minutes.

### 5. Tickets

- Tickets in account and wallet, with offline access
- Accessible entrance, parking and contact details included

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

## Accessibility

- Hold timer can be extended at least once with a simple action before expiry (WCAG 2.2 2.2.1)
- Seat map has a list alternative sortable by price and section, fully keyboard operable (WCAG 2.2 2.1.1)
- Queue position changes announced at most once a minute to avoid noise (WCAG 2.2 4.1.3)
- Seat availability uses labels and patterns, not colour alone (WCAG 2.2 1.4.1)

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
