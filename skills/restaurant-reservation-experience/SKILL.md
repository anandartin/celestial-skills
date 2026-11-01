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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the party size group; chips are toggle buttons reached with Tab or arrow keys, then date, then time chips grouped by sitting, all at least 48px.
  - Announced (A11Y-S1): Title reads “Reserve a table”; each chip announces its state as pressed, and times are grouped by lunch and dinner.
  - Errors (A11Y-E1): If no tables are free, the message sits beside the time chips with nearest times; the chosen party size and date are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write dates and times in full, such as “Saturday 15 November, 19:30”, and say “people”, not “covers”.

### 2. Needs

- Chips: step-free, space for a wheelchair or frame, quiet table, high chair
- Allergy field with a note that the kitchen will confirm
- **error:** Ground-floor table not available at 19:30 — show times that are
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Needs heading; the need chips are toggle buttons, and Tab then reaches the allergy field and Continue.
  - Announced (A11Y-S1): Each chip is announced with pressed or not pressed; the note that the kitchen will confirm allergies is read with the field.
  - Errors (A11Y-E1): The unavailable-table message is text beside the chips, listing times that suit, and the needs already chosen are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use plain words such as “step-free” with a short explanation, and say the kitchen will confirm allergies.

### 3. Deposit

- Deposit per person and total; refund deadline as a date and time
- What happens on no-show stated plainly
- **error:** Payment failed — table held for 10 minutes while you try again
- **loading:** Securing your table
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Deposit heading; Tab reads the terms, then goes to the hosted payment fields and the pay button, which is reached after the terms. Autofill and paste work.
  - Announced (A11Y-S1): The deposit is read as text, “£10 per person, £60 total”, with the refund date; “Securing your table” is announced politely and a failure assertively.
  - Errors (A11Y-E1): The payment error is text beside the fields, and the details and table choice are kept; the pay button names the amount, and the terms are checked before paying.
  - Time limits (A11Y-W1): The table is held for 10 minutes; a warning is given at least 20 seconds before it ends and the hold can be extended with a button.
  - Language (A11Y-L1): State the deposit, total and refund deadline in full, such as “by 19:30 on Friday 14 November”, and what happens on a no-show.

### 4. Confirmed

- Restaurant name, date, time, party size and notes
- Change and cancel in one tap
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the Booking confirmed heading; Tab reaches Change booking, Cancel booking, then Add to calendar.
  - Announced (A11Y-S1): The confirmation is announced politely with the restaurant, date, time, party size and notes.
  - Errors (A11Y-E1): No input on this step; Change and Cancel open their own confirm steps, so the booking can be corrected or undone.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give the date, time and notes in full, and say how to change or cancel in one short sentence.

### 5. Reminder

- Reminder includes access and allergy notes and the restaurant's acknowledgement
- Confirm or cancel without signing in
- **empty:** If the restaurant hasn't acknowledged notes, say so and offer a call
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the reminder heading; Tab reaches Confirm, Change, Cancel and Call us, and none needs a sign-in.
  - Announced (A11Y-S1): The reminder is read in full, including access and allergy notes and the restaurant's acknowledgement.
  - Errors (A11Y-E1): Cancel needs a confirm step that restates the booking; if notes are not acknowledged, the message is text with a call option.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say clearly whether the restaurant has acknowledged the notes, and write the time in full.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Chips are toggle buttons and the pressed state is announced by a screen reader.
- A11Y-T1: Party size and time chips are at least 48px, with enough space for a hand tremor.
- A11Y-N1: Deposit terms are text before the pay button, not an image, and the amounts and refund date are written in full.
- A11Y-E1: Error messages appear next to the field and in a summary, and the party, date and needs are kept.
- A11Y-W1: The 10-minute table hold gives a warning at least 20 seconds before it ends, with a way to extend it.
- A11Y-E3: Payment restates the deposit, and a booking can be changed or cancelled with a confirm step.
- A11Y-C2: Chip state is shown by text, an icon or a tick, never colour alone.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
