---
name: clinic-booking-experience
type: experience
journey: customer
persona: Patient (67) or carer
domain: Healthcare
technology: Native mobile app (iOS / Android)
core: "1.0"
description: "Experience skill: Booking a clinic appointment — the best-practice customer journey for a patient (67) or carer in Healthcare on Native mobile app (iOS / Android). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Booking a clinic appointment

An older patient or their carer books the right appointment on a phone, with large text, clear choices and nothing clinical left ambiguous.

**Outcome** — A patient or carer books the right appointment in under three minutes, understands every choice, and receives a reminder they can act on.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Ruth, Patient (67) or carer

> “Just tell me when and where, in big letters, and let me change it if I can’t make it.”

Manages two long-term conditions; sometimes books on behalf of her partner.

**Goals**
- Find a time that works with transport
- Book for herself or someone she cares for
- Get a reminder she can act on

**Pains**
- Tiny text and timed-out forms
- Medical jargon
- Not knowing if the booking went through

**Behaviours**
- Uses large text and zoom
- Reads every word before acting
- Calls the clinic if unsure

**Access needs**
- Large text (200%)
- Low vision — high contrast
- Mild tremor — larger targets

---

## Domain — Healthcare

- Health data is special-category (GDPR) / PHI (HIPAA): minimum necessary
- Clinical safety: urgent symptoms routed to the right service, not a booking
- Booking on behalf of someone requires recorded consent

Vocabulary to use: `appointment`, `clinician`, `surgery / clinic`, `reminder`, `carer`

## Technology — Native mobile app (iOS / Android)

Inputs: Touch, Voice dictation, Screen reader

- Supports Dynamic Type / font scaling to 200%
- No timeouts under 20 minutes without warning
- Calendar and reminder integration

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Find** | Choose the kind of appointment in plain words | `list + filters` | “What do you need help with?” |
| 2 | **Choose a time** | Pick a slot that fits transport | `detail` | “Tue 14 Oct · 10:40 · Riverside Clinic” |
| 3 | **Your details** | Confirm who it is for and how to reach them | `form` | “Who is this appointment for?” |
| 4 | **Confirm** | Know it is booked and how to change it | `confirmation` | “You’re booked” |
| 5 | **Reminder** | Act on the reminder the day before | `feedback` | “Tomorrow 10:40 · Confirm or change” |

### 1. Find

- Plain-language categories, not clinical codes
- Urgent-symptoms link on every screen
- **empty:** No times this week — offer the earliest date and a call-back

### 2. Choose a time

- Times grouped by morning / afternoon
- Location and travel shown with each slot

### 3. Your details

- “Booking for someone else?” as a clear choice
- Pre-fill from the account; ask only what is missing
- **error:** Explain the fix in plain words; never clear fields

### 4. Confirm

- Date, time, place and clinician in large text
- Add to calendar and change / cancel in one tap

### 5. Reminder

- Reminder has Confirm, Change and Cancel actions
- Directions and what to bring

---

## Principles

1. Plain language at a reading age of 9–11
2. Large targets and text that scales to 200% without loss
3. No timeouts that lose work
4. Safety first: urgent symptoms never end in a booking form
5. Always show how to change or cancel

## Do / Don't

**Do**
- Group times by part of day with travel info
- Let carers book with recorded consent
- Confirm in words and in the calendar

**Don't**
- Use clinical codes or abbreviations
- Hide the cancel option
- Ask for symptoms in free text without triage guidance

## Accessibility

- Meets WCAG 2.2 AA; aims for AAA contrast on text (7:1)
- Every control ≥ 48px on mobile
- Screen reader order follows the visual order; times read as full dates
- No reliance on colour for availability

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- “You’re booked for Tuesday 14 October at 10:40”
- Avoid jargon: “blood test” not “phlebotomy”
- Reassure without promising clinical outcomes

## AI interactions

- Optional: suggest the right appointment type from a short description, always with a “talk to someone” route and never for urgent symptoms

## Edge cases

- Slot taken while booking — offer the nearest alternatives immediately
- Carer without consent recorded — explain how to add it
- Offline — queue the request and confirm when sent

---

## Measures

| Measure | Target | How |
|---|---|---|
| Booking completion | ≥ 80% | Start → confirmed, all ages |
| Time to book | < 3 min | Median, 65+ users |
| Missed appointments | −25% | vs phone booking, after reminders |
| Calls about bookings | −30% | Calls to clinic about existing bookings |

Research: Usability sessions with 65+ users on their own phones; Accessibility audit with screen reader and 200% text; Clinical safety review of triage copy.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
