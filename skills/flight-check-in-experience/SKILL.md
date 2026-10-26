---
name: flight-check-in-experience
type: experience
journey: customer
persona: Mother (35) flying with a toddler and her father
domain: Air travel
technology: Native mobile app with mobile web fallback
core: "1.0"
description: "Experience skill: Checking in for a flight on a phone — the best-practice customer journey for a mother (35) flying with a toddler and her father in Air travel on Native mobile app with mobile web fallback. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Checking in for a flight on a phone

A passenger checks in on their phone, chooses or keeps a seat, and gets a boarding pass that works offline at the gate.

**Outcome** — At least 85% of eligible passengers check in on mobile in under three minutes, and 99% of mobile boarding passes scan first time.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Agnieszka, Mother (35) flying with a toddler and her father

> “I need us sitting together and the passes on my phone — that's it.”

Checks in herself, her 2-year-old on her lap, and her father, who uses wheelchair assistance at the airport.

**Goals**
- Sit together without paying extra if possible
- Get all three passes on one phone
- Confirm assistance is booked

**Pains**
- Seat maps that are impossible to tap
- Being pushed to buy upgrades at every step
- Passes that vanish without signal

**Behaviours**
- Checks in the moment it opens
- Uses the phone one-handed while holding her child
- Screenshots everything just in case

**Access needs**
- One-handed use
- Travelling with a passenger needing wheelchair assistance

---

## Domain — Air travel

- Travel document details (passport, visa) required for international routes must be checked against the destination's entry rules
- Dangerous goods declaration must be accepted before a boarding pass is issued
- Children under 12 must be seated with an accompanying adult where the carrier's policy requires it
- Assistance requests for passengers with reduced mobility carried through check-in (passenger rights rules)
- Optional extras are opt-in; mandatory steps are never mixed with upsells

Vocabulary to use: `check-in`, `boarding pass`, `seat map`, `gate`, `infant on lap`, `special assistance`

## Technology — Native mobile app with mobile web fallback

Inputs: Touch, Camera (passport scan), Wallet passes

- Boarding pass stored offline and in the device wallet
- Seat map usable as a list as well as a grid
- Check-in window opens at a fixed time before departure

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Find trip** | Retrieve the booking and pick passengers | `list + filters` | “Who's checking in?” |
| 2 | **Travel documents** | Add passport details for each passenger | `form` | “Scan your passport photo page” |
| 3 | **Seats** | Keep or change seats, together | `detail` | “Seats 14A, 14B and 14C — together, no charge.” |
| 4 | **Safety declaration** | Confirm dangerous goods rules | `form` | “I'm not carrying any of these items” |
| 5 | **Boarding passes** | Get passes and gate info | `confirmation` | “You're checked in. Gate opens 40 minutes before departure.” |

### 1. Find trip

- Show all passengers with checkboxes, all selected by default
- Infant linked to adult shown together
- **empty:** Check-in not open yet — 'Opens Tuesday 11 November at 07:15'
- **error:** Booking not found — check the reference and last name

### 2. Travel documents

- Scan passport with camera or type it
- Expiry checked against the return date
- **error:** This passport expires before your return flight — check entry rules

### 3. Seats

- Seat map plus list view with seat features in words
- Free seats shown first; paid seats clearly priced
- **error:** Seats taken — suggest the nearest group of free seats
- **loading:** Loading seat map

### 4. Safety declaration

- Short list of banned items with images and text
- Single plain confirmation
- **empty:** If they are, explain how to travel with them or call the airline

### 5. Boarding passes

- One pass per passenger, swipeable, add to wallet
- Assistance confirmation shown with the father's pass
- **error:** Wallet add failed — passes saved in the app and available offline
- **loading:** Creating your boarding passes

---

## Principles

1. Mandatory steps and optional extras are never on the same screen
2. Groups stay together by default
3. Every pass works with no signal
4. The seat map has an equally usable list form
5. Assistance bookings are visible and confirmed

## Do / Don't

**Do**
- Seat families together automatically when free seats allow
- Save passes to wallet and in-app offline
- Show the check-in opening time in local time

**Don't**
- Insert paid upgrades between mandatory steps
- Make the seat grid the only way to choose
- Hide the 'skip seat selection' option

## Accessibility

- Meets WCAG 2.2 AA; seat list announces row, letter, window or aisle and price
- Seat targets ≥ 44px, with a list alternative for smaller grids (2.5.8)
- Boarding pass barcode screen raises brightness and offers a large-text summary
- Passport scan has typed-entry alternative; no time limit on document entry

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Times always in local time with the airport: '07:15 at Eastport'
- Upsell copy says what it costs and is easy to skip: 'Extra legroom, £18 — skip'
- Safety copy is direct: 'You can't carry these in any bag'

## AI interactions

- Passport scan reads the machine-readable zone and pre-fills fields; the passenger confirms each passenger's details
- No AI for seat allocation messaging because group seating rules must be deterministic

## Edge cases

- Infant turns 2 before the return flight — prompt for a seat on that leg
- Passenger needs documents checked at the desk — explain why and what to bring
- Flight changed during check-in — refresh and show the new time before issuing passes
- Name on passport differs from booking — route to a name correction

---

## Measures

| Measure | Target | How |
|---|---|---|
| Mobile check-in rate | ≥ 85% | Eligible passengers checked in via mobile |
| Check-in time | < 3 min median | Trip found → passes issued, per booking |
| First-scan success | ≥ 99% | Gate scans accepted at first attempt |
| Family seated together | ≥ 95% | Bookings with children seated with an adult |

Research: Field observation at gates and bag drop; Usability tests one-handed with parents of young children; Accessibility audit of seat list and boarding pass screens.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
