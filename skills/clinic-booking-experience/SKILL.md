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
- **Accessibility:**
  - Keyboard (A11Y-K1): On native mobile, VoiceOver or TalkBack focus starts at the screen title, then categories in visual order; the urgent-symptoms link is last and reachable by switch access.
  - Announced (A11Y-S1): Title "Find an appointment" is read first; each category reads its plain name and a politely announced count follows when filters change.
  - Errors (A11Y-E1): A filter that returns nothing is explained in text beside it, with the earliest date and a call-back offered; chosen filters are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use everyday words such as "a check-up" instead of clinical codes, and keep the urgent-symptoms wording the same on every screen.

### 2. Choose a time

- Times grouped by morning / afternoon
- Location and travel shown with each slot
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first slot heading; slots are grouped under morning and afternoon headings, and each slot is one large target reachable in order by switch access.
  - Announced (A11Y-S1): Each slot reads as a full date, such as "Tuesday 14 October, 10:40 am, Riverside Clinic, 12 minutes by bus", and the selected slot is announced politely.
  - Errors (A11Y-E1): If a slot is taken, the message names it beside the list and offers the nearest times; the person's filters are kept.
  - Time limits (A11Y-W1): No time limit. The slot is not held until confirmed, and the screen says so.
  - Language (A11Y-L1): Write dates in full with the weekday, use 12-hour times with am or pm, and describe travel in minutes.

### 3. Your details

- “Booking for someone else?” as a clear choice
- Pre-fill from the account; ask only what is missing
- **error:** Explain the fix in plain words; never clear fields
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first unanswered field; fields follow reading order, "Booking for someone else?" is a clear radio choice, and fields can be filled by dictation.
  - Announced (A11Y-S1): Title "Your details" is read; each field reads its visible label and required state, and an error summary is announced assertively.
  - Errors (A11Y-E1): Each error is written in plain words beside the field and linked to it, listed in a summary at the top, and nothing typed is ever cleared.
  - Time limits (A11Y-W1): No time limit; progress is kept if the app is closed.
  - Language (A11Y-L1): Ask for things in plain words, say why each detail is needed, and avoid terms such as "registrant".

### 4. Confirm

- Date, time, place and clinician in large text
- Add to calendar and change / cancel in one tap
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "You're booked" heading; Add to calendar, Change and Cancel are separate large buttons in that order, each reachable by switch access.
  - Announced (A11Y-S1): "You're booked" is read as the heading, followed by the full date, time, place and clinician; saved to calendar is announced politely.
  - Errors (A11Y-E1): Cancel opens a confirm step that restates the appointment and offers undo; Change keeps the existing booking until a new one is confirmed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep the date, time, place and clinician as short labelled lines in full words, not abbreviations.

### 5. Reminder

- Reminder has Confirm, Change and Cancel actions
- Directions and what to bring
- **Accessibility:**
  - Keyboard (A11Y-K1): Opening the reminder places focus on the heading; Confirm, Change and Cancel are large separate buttons, and directions open as text first.
  - Announced (A11Y-S1): The reminder is read as "Tomorrow, Tuesday 14 October, 10:40 am" with the three actions named; the chosen action is confirmed politely.
  - Errors (A11Y-E1): Cancel asks for a confirm step first, and if the change fails the original appointment is kept and the reason given beside the action.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say "what to bring" as a plain list, and give directions as short steps rather than a map alone.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C1: Text meets 7:1 contrast against its background and every non-text control meets 3:1, including in high contrast settings
- A11Y-T1: Every control is at least 48px high and wide on mobile, with space between so a mild tremor does not cause a mis-tap
- A11Y-R1: At 200% Dynamic Type or font scaling all text stays visible, wraps and is never truncated, and no horizontal scrolling is needed
- A11Y-S1: Screen reader order follows the visual order, and times are read as full dates such as "Tuesday 14 October, 10:40 am"
- A11Y-C2: Slot availability is shown with text labels, never colour alone
- A11Y-H1: The urgent-symptoms link sits in the same place on every screen
- A11Y-E3: Cancel and change show a confirm step and can be undone from the confirmation

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

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
