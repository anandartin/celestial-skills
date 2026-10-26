---
name: restaurant-reservation-experience
type: experience
journey: customer
persona: Retired engineer (68), uses a walking frame
domain: Hospitality
technology: Responsive web and tablet
core: "1.0"
description: "Experience skill: Reserving a restaurant table with access needs and deposits — the best-practice customer journey for a retired engineer (68), uses a walking frame in Hospitality on Responsive web and tablet. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Reserving a restaurant table with access needs and deposits

A diner reserves a table for their group, says what access or dietary needs they have, and understands any deposit before paying it.

**Outcome** — At least 90% of reservations with access notes are seated as requested, and no-shows fall by 30% without deposit complaints rising.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Harold, Retired engineer (68), uses a walking frame

> “I need a table I can get to without squeezing between chairs, and I want to know if I lose money cancelling.”

Booking a birthday dinner for six, including his granddaughter who has a nut allergy.

**Goals**
- Get a table that suits his mobility
- Tell the restaurant about the allergy
- Know the deposit rules

**Pains**
- Booking forms with no place for access needs
- Deposits taken without clear refund terms
- Being seated upstairs

**Behaviours**
- Books on a tablet a week ahead
- Calls to double-check if unsure
- Reads reviews about seating

**Access needs**
- Uses a walking frame — needs step-free access and space
- Slight hand tremor — larger targets

---

## Domain — Hospitality

- Deposit amount, refund deadline and no-show charge stated before payment
- Allergy information is health data — share only with the restaurant, and remind that the kitchen must confirm
- Card details handled to PCI DSS by a payment provider; front end never stores them
- Access needs passed to the restaurant and acknowledged before the visit
- Cancellation available online up to the stated deadline

Vocabulary to use: `reservation`, `party size`, `deposit`, `no-show`, `access needs`, `dietary needs`

## Technology — Responsive web and tablet

Inputs: Touch, Keyboard, Screen reader

- Live table availability by area (ground floor, outside)
- Deposit held, not charged, where the payment provider supports it
- Confirmation by email and SMS

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Party and date** | Pick group size, date and time | `form + chips` | “How many people, and when?” |
| 2 | **Needs** | Note access and dietary needs | `form + chips` | “Anything we should know so your visit goes well?” |
| 3 | **Deposit** | Understand and pay the deposit | `detail` | “£10 per person, £60 total. Full refund if you cancel by 19:30 on Friday 14 November.” |
| 4 | **Confirmed** | Know the booking and how to change it | `confirmation` | “Table for 6 at The Lantern Room, Saturday 15 November, 19:30.” |
| 5 | **Reminder** | Confirm, change or cancel the day before | `inbox` | “See you tomorrow at 19:30. Your ground-floor table is confirmed.” |

### 1. Party and date

- Party size chips 1–8 with 'more than 8' option
- Times as large chips by sitting
- **empty:** No tables at that time — show nearest times and a waitlist

### 2. Needs

- Chips: step-free, space for a wheelchair or frame, quiet table, high chair
- Allergy field with a note that the kitchen will confirm
- **error:** Ground-floor table not available at 19:30 — show times that are

### 3. Deposit

- Deposit per person and total; refund deadline as a date and time
- What happens on no-show stated plainly
- **error:** Payment failed — table held for 10 minutes while you try again
- **loading:** Securing your table

### 4. Confirmed

- Restaurant name, date, time, party size and notes
- Change and cancel in one tap

### 5. Reminder

- Reminder includes access and allergy notes and the restaurant's acknowledgement
- Confirm or cancel without signing in
- **empty:** If the restaurant hasn't acknowledged notes, say so and offer a call

---

## Principles

1. Access needs are a first-class field, not free text at the end
2. Deposits always come with a refund date
3. Allergy notes are passed on and the limits are stated
4. Cancelling is easy until the deadline
5. The restaurant's acknowledgement is visible to the diner

## Do / Don't

**Do**
- Show deposit terms before card entry
- Offer ground-floor and space options as chips
- Send the restaurant's acknowledgement of notes

**Don't**
- Promise allergen-free food on the restaurant's behalf
- Charge deposits without a refund deadline
- Require an account to cancel

## Accessibility

- Meets WCAG 2.2 AA; chips are toggle buttons with pressed state announced
- Targets ≥ 48px for time and party chips
- Deposit terms are text, not an image, and read before the pay button
- Error messages appear next to the field and in a summary (3.3.1)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plain money copy: '£10 per person, £60 total'
- Allergy reminder is honest: 'The kitchen will confirm what they can prepare safely'
- Warm but brief: 'Anything we should know so your visit goes well?'

## AI interactions

- No AI in this journey because allergy and access information must be passed on exactly as written

## Edge cases

- Severe allergy the restaurant cannot cater for — restaurant replies before the visit, deposit refundable
- Party size grows after booking — check table capacity and deposit difference
- Restaurant closes unexpectedly — full refund and alternative suggestions
- Diner arrives late — show how long the table is held

---

## Measures

| Measure | Target | How |
|---|---|---|
| Access notes honoured | ≥ 90% | Post-visit survey: seated as requested |
| No-show rate | −30% | No-shows vs baseline without deposits |
| Deposit complaints | No increase | Complaints about deposits per 1,000 bookings |
| Booking time | < 2 min median | Start → confirmed |

Research: Usability tests with older diners and mobility-aid users; Interviews with front-of-house staff on how notes arrive; Survey of diners after deposit bookings.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
