---
name: ride-booking-experience
type: experience
journey: customer
persona: Student (20), deaf, getting home late
domain: Ride-hailing
technology: Native mobile app (iOS / Android)
core: "1.0"
description: "Experience skill: Booking a ride and sharing the trip — the best-practice customer journey for a student (20), deaf, getting home late in Ride-hailing on Native mobile app (iOS / Android). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Booking a ride and sharing the trip

A rider books a car, sees the driver and fare before it arrives, and can share their trip or get help at any point.

**Outcome** — At least 95% of riders confirm the car matches the app before getting in, and the safety tools are reachable in one tap on every trip screen.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Jordan, Student (20), deaf, getting home late

> “I want to know it's the right car and that my flatmate can see where I am.”

Travels home from evening classes; communicates with drivers by text.

**Goals**
- Get home safely and affordably
- Know the car and driver before stepping in
- Let a friend follow the trip

**Pains**
- Drivers calling instead of texting
- Fares changing mid-trip without explanation
- Not knowing where pickup actually is

**Behaviours**
- Books from inside a building, then walks out
- Shares trips with a flatmate
- Rates every trip

**Access needs**
- Deaf — uses text and visual alerts only
- British Sign Language user; written English is a second language

---

## Domain — Ride-hailing

- Show the fare or fare range and how it is calculated before booking; surge pricing disclosed with the multiplier
- Driver identity, vehicle make, colour and plate shown before pickup
- Location sharing for trip sharing requires explicit consent and ends when the trip ends
- Emergency help route available throughout the trip, with location sent on use
- Licensing rules for drivers and vehicles must be met; licence details available to riders

Vocabulary to use: `pickup`, `drop-off`, `fare`, `driver`, `plate`, `share trip`

## Technology — Native mobile app (iOS / Android)

Inputs: Touch, Location services, In-app messaging

- Works with location off by typing an address
- Trip share link expires at drop-off
- Emergency button works with low battery mode on

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Where to** | Set pickup and destination | `form` | “Where are you going?” |
| 2 | **Choose ride** | Compare ride types on fare and arrival | `list + filters` | “Standard · £9–£11 · 4 min away” |
| 3 | **Driver on way** | Recognise the car and driver | `detail` | “Check the plate: KD71 XRT · Grey hatchback · Sam” |
| 4 | **On trip** | Share the trip and reach safety tools | `progress` | “Share your trip so someone can follow along” |
| 5 | **Arrived** | Pay, rate and report issues | `feedback` | “You've arrived. £10.40 charged to your card.” |

### 1. Where to

- Pickup shown as a named spot, not just a pin
- Saved places and recent trips first
- **error:** We can't pick up here — choose the nearest marked spot
- **Accessibility:**
  - Keyboard (A11Y-K1): VoiceOver or TalkBack focus starts at the screen title, then pickup and destination fields; saved places follow in order, and a typed address works with location off, with switch access reaching each.
  - Announced (A11Y-S1): Title "Where are you going?" is read; each field reads its label and value, and suggested places are announced politely as they appear.
  - Errors (A11Y-E1): A pickup that is not allowed is named in text beside the field and linked to it, with the nearest marked spot suggested; typed addresses are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name pickup spots plainly, such as "outside the main door", and keep written English short for second-language readers.

### 2. Choose ride

- Fare range and arrival time for each option
- Accessible vehicle option shown as standard
- **empty:** No cars nearby — 'Try again in a few minutes or book for later'
- **loading:** Finding drivers
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first ride option; options are in a list, each one a single large target, and accessible vehicles appear as standard rather than as an extra.
  - Announced (A11Y-S1): Each option reads "Standard, 9 to 11 pounds, 4 minutes away"; a refreshed list is announced politely, and no cars nearby is read in text.
  - Errors (A11Y-E1): The empty state is text with a Book for later button; selected pickup and destination are kept.
  - Time limits (A11Y-W1): Prices refresh over time; the person is told at least 20 seconds before a fare range changes, with a button to keep it.
  - Language (A11Y-L1): Give the fare range in full, such as "9 to 11 pounds", and arrival in minutes.

### 3. Driver on way

- Plate in large text first, then colour and model
- Message driver with preset texts; 'I'm deaf, please text' option
- **error:** Driver cancelled — we're finding you another car
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the plate in large text, then colour, model and driver name; Message driver and preset texts are buttons, and the "I'm deaf, please text" option is one tap.
  - Announced (A11Y-S1): The plate is read letter by letter first, such as "K D 7 1 X R T", then the car and driver; arrival changes are announced politely.
  - Errors (A11Y-E1): A cancelled driver is announced assertively and explained in text, and the booking is kept while another car is found.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Spell the plate with clear letters and numbers, and keep driver messages as short, plain preset texts.

### 4. On trip

- Share trip and safety buttons pinned on screen
- Live route with arrival time
- **error:** Route change detected — 'Is everything OK?' check-in
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Share trip button, then Safety; both stay pinned in the same place, and the route is also available as text steps for switch access.
  - Announced (A11Y-S1): "Share your trip" is read; arrival time is announced politely, and a route change check-in is announced assertively with a text and haptic alert.
  - Errors (A11Y-E1): A route change shows "Is everything OK?" in text with two clear buttons, and a share failure is explained beside the button.
  - Time limits (A11Y-W1): The trip share link expires at drop-off; this is stated before sharing, with no hidden timer.
  - Language (A11Y-L1): Label the safety button "Safety" in plain words and say what happens when it is pressed.

### 5. Arrived

- Final fare with breakdown
- Rating optional; report link always visible
- **error:** Fare higher than quoted — show why and a dispute option
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the "You've arrived" heading; the fare breakdown, then rating and Report problem, which is always visible.
  - Announced (A11Y-S1): "You've arrived, 10.40 pounds charged to your card" is read as the heading; the breakdown is a list in text.
  - Errors (A11Y-E1): A higher-than-quoted fare is explained in text with the reason and a Dispute button; a review of the fare and card comes before any charge, and the rating is optional.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give the fare in full pounds and pence, explain each charge line, and keep reports in plain text.

---

## Principles

1. Know the car before you get in: plate first
2. Safety is one tap from every trip screen
3. Fare shown before booking, with any surge explained
4. Text-first communication is fully supported
5. Location sharing is temporary and visible

## Do / Don't

**Do**
- Show the plate in large text
- Let riders tell drivers they prefer text
- End trip sharing automatically at drop-off

**Don't**
- Default to voice calls between driver and rider
- Hide surge pricing until the receipt
- Keep sharing location after the trip

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C2: All alerts are visual and haptic, never sound only
- A11Y-S1: Plate and driver information is read by screen readers in a logical order, with the plate first
- A11Y-T1: The Safety button is at least 48px, fixed in position and labelled "Safety"
- A11Y-S1: A polite live region announces "Driver arriving in 1 minute" without moving focus
- A11Y-L1: Written English is short and plain for second-language readers, and key actions have visual icons with text
- A11Y-E3: The final fare shows a breakdown and a dispute option, and any charge is shown before it is taken
- A11Y-K1: Every control works with switch access and screen reader focus order matches the visual order

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plate first: 'Check the plate: KD71 XRT'
- Preset messages are short and clear: 'I'm at the main entrance'
- Safety copy is calm and direct: 'Need help? Call emergency services or tell us now'

## AI interactions

- Detects unusual stops or route changes and asks the rider if they're OK; the rider chooses what happens, and no alert is sent without them unless they don't respond and emergency criteria are met

## Edge cases

- Car doesn't match the app — 'Don't get in' guidance with report and rebook
- Phone dies mid-trip — share link shows last location and status
- Rider is a minor using a parent's account — follow the account's teen rules
- Driver asks to end the trip early off-app — show a warning and keep the trip active

---

## Measures

| Measure | Target | How |
|---|---|---|
| Plate check confirmation | ≥ 95% | Riders tapping 'This is my car' before pickup |
| Safety tool reach | 1 tap | Expert review of every trip screen |
| Fare within quote | ≥ 97% | Trips where final fare is within the quoted range |
| Trip shares | ≥ 20% of night trips | Trips 22:00–05:00 with sharing on |

Research: Diary study of late-night riders; Usability tests with deaf and hard-of-hearing riders; Safety feature review with rider safety experts.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
