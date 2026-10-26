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

### 2. Choose ride

- Fare range and arrival time for each option
- Accessible vehicle option shown as standard
- **empty:** No cars nearby — 'Try again in a few minutes or book for later'
- **loading:** Finding drivers

### 3. Driver on way

- Plate in large text first, then colour and model
- Message driver with preset texts; 'I'm deaf, please text' option
- **error:** Driver cancelled — we're finding you another car

### 4. On trip

- Share trip and safety buttons pinned on screen
- Live route with arrival time
- **error:** Route change detected — 'Is everything OK?' check-in

### 5. Arrived

- Final fare with breakdown
- Rating optional; report link always visible
- **error:** Fare higher than quoted — show why and a dispute option

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

## Accessibility

- Meets WCAG 2.2 AA; all alerts are visual and haptic, never sound only
- Plate and driver info read in a logical order by screen readers
- Safety button ≥ 48px, fixed position, labelled 'Safety'
- Live region announces 'Driver arriving in 1 minute' without moving focus

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
