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
- **Accessibility:**
  - Keyboard (A11Y-K1): Screen reader focus lands on the heading, then each passenger checkbox in order; switch access steps through the same order, and all are selected by default.
  - Announced (A11Y-S1): Page title is Who's checking in; each passenger is read with name and whether an infant is linked, and the selected count is announced politely.
  - Errors (A11Y-E1): Booking not found is named beside the reference field with the cause, and the reference and last name stay as typed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'booking reference' plainly and write the check-in opening as Tuesday 11 November at 07:15.

### 2. Travel documents

- Scan passport with camera or type it
- Expiry checked against the return date
- **error:** This passport expires before your return flight — check entry rules
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first passenger's scan button; typing the passport details is an equal alternative, and fields follow the visual order for switch access.
  - Announced (A11Y-S1): Each passenger's section has a heading; a successful scan is announced politely, 'Passport details read, please check them'.
  - Errors (A11Y-E1): The expiry problem is named beside the date field, linked from a summary, and the details typed or scanned stay; no scan is required.
  - Time limits (A11Y-W1): No time limit on document entry.
  - Language (A11Y-L1): Say 'passport photo page' and 'expiry date' in full, and give the return date alongside the expiry date.

### 3. Seats

- Seat map plus list view with seat features in words
- Free seats shown first; paid seats clearly priced
- **error:** Seats taken — suggest the nearest group of free seats
- **loading:** Loading seat map
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading, then the list view of seats; the seat map has a list alternative, and each seat is a button of at least 44px.
  - Announced (A11Y-S1): Each seat is read as row, letter, window or aisle, and price, for example '14A, window, no charge'; the map loading is announced politely.
  - Errors (A11Y-E1): Seats taken is named in text with the nearest free group offered as a button; the current choices stay, and changing a seat shows the price before confirming.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give seat features in words, such as 'window' and 'extra legroom', and show prices in full pounds.

### 4. Safety declaration

- Short list of banned items with images and text
- Single plain confirmation
- **empty:** If they are, explain how to travel with them or call the airline
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the banned items list; the single confirmation is a native checkbox reachable with one tab stop, and images have text equivalents.
  - Announced (A11Y-S1): The list is read as items with text descriptions; the confirmation is announced as 'I'm not carrying any of these items, not checked'.
  - Errors (A11Y-E1): The missing confirmation is named next to the checkbox, and the person can read how to travel with these items or call; nothing else is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name each banned item in everyday words, and avoid terms such as 'dangerous goods' without a short explanation.

### 5. Boarding passes

- One pass per passenger, swipeable, add to wallet
- Assistance confirmation shown with the father's pass
- **error:** Wallet add failed — passes saved in the app and available offline
- **loading:** Creating your boarding passes
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; passes are reached in order with next and previous buttons as well as swiping, and Add to wallet is a button.
  - Announced (A11Y-S1): 'You're checked in' is announced politely; each pass is read with the passenger name, seat and gate time, and the assistance confirmation is read with the father's pass.
  - Errors (A11Y-E1): A failed wallet add is named in text with the saved-offline message; the passes remain available and nothing is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write times as '40 minutes before departure' and give the departure time in full.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Meets WCAG 2.2 AA; the seat list announces row, letter, window or aisle and price for each seat.
- A11Y-T1: Seat targets are at least 44px, with a list alternative for small grids.
- A11Y-K1: Boarding passes can be changed with next and previous buttons as well as by swiping, and work with switch access and a screen reader.
- A11Y-C1: The boarding pass barcode screen raises brightness and offers a large-text summary with 4.5:1 contrast.
- A11Y-W1: Passport scanning has a typed-entry alternative and no time limit on document entry.
- A11Y-E1: Passport and seat errors are named beside the field and linked from a summary, and entered details are kept.
- A11Y-E3: Seat changes show the price before confirming, and the safety declaration is a single explicit confirmation that can be reviewed.
- A11Y-H1: Help and the airline contact appear in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
