---
name: hotel-booking-experience
type: experience
journey: customer
persona: Software tester (29), blind, travelling for a conference
domain: Travel accommodation
technology: Responsive web and mobile app
core: "1.0"
description: "Experience skill: Searching, comparing and booking a hotel stay — the best-practice customer journey for a software tester (29), blind, travelling for a conference in Travel accommodation on Responsive web and mobile app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Searching, comparing and booking a hotel stay

A traveller searches for a stay, compares options on the full price including taxes and fees, and books knowing the cancellation terms.

**Outcome** — The price on the results list matches the price paid in at least 99% of bookings, and 70% of searchers who pick a room complete booking.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Sven, Software tester (29), blind, travelling for a conference

> “Give me the real price and the cancellation rule without making me hunt through a map.”

Books a three-night stay in a city he hasn't visited; uses a screen reader on laptop and phone.

**Goals**
- Find a room near the venue
- Know the full price up front
- Confirm step-free and guide-dog access

**Pains**
- Prices that grow at checkout
- Map-only search with no list
- Accessibility info that is vague

**Behaviours**
- Navigates by headings and landmarks
- Filters hard, then reads every listing
- Saves a shortlist across devices

**Access needs**
- Blind — uses a screen reader
- Travels with a guide dog

---

## Domain — Travel accommodation

- Show total price including mandatory taxes and fees from the first price shown (drip pricing is not allowed)
- Cancellation and payment terms shown before booking, in plain words
- Card data handled to PCI DSS; never stored by the booking front end
- Accessibility information must be specific (step-free routes, door widths, assistance animals) and kept current
- Ranking that is paid for must be labelled

Vocabulary to use: `stay`, `room type`, `total price`, `free cancellation`, `check-in`, `deposit`

## Technology — Responsive web and mobile app

Inputs: Keyboard, Touch, Screen reader

- Live availability and price checked at selection and at payment
- List view equal to map view
- Price held for 15 minutes once a room is chosen, with notice

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Search** | Enter place, dates and guests | `marketing hero` | “Where are you going?” |
| 2 | **Results** | Compare stays on total price | `list + filters` | “£486 total for 3 nights · taxes and fees included” |
| 3 | **Stay details** | Check room, access and terms | `detail` | “Free cancellation until 18:00 on Thursday 13 November.” |
| 4 | **Guest and pay** | Enter guest details and pay | `form` | “Pay £486.00 now” |
| 5 | **Booked** | Know it's booked and what to do next | `confirmation` | “You're booked at Harbourview House, 12–15 November. Confirmation 7QK-2219.” |

### 1. Search

- Dates typeable as well as pickable
- Guests and rooms in one control with clear labels
- **error:** Check-out must be after check-in — set the dates again

### 2. Results

- Total for all nights shown first, per-night second
- Filters include accessibility features and free cancellation
- **empty:** No stays match — suggest removing a filter, named
- **loading:** Finding stays

### 3. Stay details

- Accessibility section with specific facts and a contact route
- Cancellation deadline as a date and time
- **error:** Room no longer available — show similar rooms at this hotel

### 4. Guest and pay

- Price breakdown visible next to the form
- Access requests sent to the hotel as a note
- **error:** Card declined — keep details, suggest another card
- **loading:** Confirming with the hotel

### 5. Booked

- Confirmation number, address, check-in time and cancellation deadline
- Add to calendar and share options

---

## Principles

1. The first price you see is the price you pay
2. List and map are equal; nothing is map-only
3. Cancellation terms are a date, not a phrase
4. Accessibility facts are specific and verifiable
5. Price or availability changes are announced before payment

## Do / Don't

**Do**
- Show taxes and fees in the headline total
- Label sponsored results
- Offer a typed date entry

**Don't**
- Use fake scarcity like 'Only 1 left!' without real data
- Add fees on the payment step
- Rely on hover to show price breakdowns

## Accessibility

- Meets WCAG 2.2 AA; results are a list with headings per stay and prices read in full
- Filter changes announce the new result count in a live region
- Map has a full text-list equivalent; no info only on the map (1.1.1)
- Focus is not obscured by sticky headers or price bars (2.4.11)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Price wording: '£486 total for 3 nights' not 'from £162'
- Cancellation: 'Free cancellation until 18:00 on Thursday 13 November'
- Accessibility: 'Step-free entrance; bathroom door 85 cm wide' not 'accessible'

## AI interactions

- Optional: summarise guest reviews by topic (quiet, access, breakfast); summaries are labelled and link to source reviews
- No AI in pricing display because totals must be exact and auditable

## Edge cases

- Price changes between results and payment — show both prices and ask to continue
- Hotel overbooked after confirmation — rebook equivalent stay at no extra cost and notify immediately
- Guest's access request can't be met — hotel response shown before payment if possible
- Currency differs from card — show both and any conversion fee

---

## Measures

| Measure | Target | How |
|---|---|---|
| Price consistency | ≥ 99% | Bookings where paid price = results price |
| Select-to-book conversion | ≥ 70% | Room selected → booked |
| Screen reader task success | ≥ 90% | Moderated tests, search to booking |
| Cancellation-related complaints | −30% | Complaints about terms vs baseline |

Research: Moderated tests with screen reader users; Price transparency comparison against prior checkout; Survey on clarity of cancellation terms.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
