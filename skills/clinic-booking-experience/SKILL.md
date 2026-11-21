---
name: clinic-booking-experience
type: experience
journey: customer
persona: Patient (67) or carer
domain: Healthcare
technology: Native mobile app (iOS / Android)
core: "1.2"
description: "Experience skill: Booking a clinic appointment — the best-practice customer journey for a patient (67) or carer in Healthcare on Native mobile app (iOS / Android). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Booking a clinic appointment

An older patient or their carer books the right appointment on a phone, with large text, clear choices and nothing clinical left ambiguous.

**Outcome** — A patient or carer books the right appointment in under three minutes, understands every choice, and receives a reminder they can act on.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.2 components and patterns, and let the active design skill render them.

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
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The patient or carer opens the app and says what they need.
  - Agent goal: Find the right kind of appointment.
  - Agent actions: Says it is an AI booking assistant and what it can do; asks only what it needs to suggest the right kind of appointment; a button to phone the clinic is always visible.
  - Agent tone: Warm, slow, plain words; one question at a time.
  - Agent type: Vertical booking assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input: ask one simple question. Constraint violation (asks for medical advice): say it can't give medical advice and offer the clinic's number.
  - Failure handover trigger: Anything urgent or clinical, or the person asks → the clinic's phone line immediately, with the context package for the receptionist.
  - Data needs: Appointment types, clinic list.
  - Agent memory: Short-term.
  - Regulatory classification: Health context: no clinical advice; AI interaction disclosed.

### 2. Choose a time

- Times grouped by morning / afternoon
- Location and travel shown with each slot
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first slot heading; slots are grouped under morning and afternoon headings, and each slot is one large target reachable in order by switch access.
  - Announced (A11Y-S1): Each slot reads as a full date, such as "Tuesday 14 October, 10:40 am, Riverside Clinic, 12 minutes by bus", and the selected slot is announced politely.
  - Errors (A11Y-E1): If a slot is taken, the message names it beside the list and offers the nearest times; the person's filters are kept.
  - Time limits (A11Y-W1): No time limit. The slot is not held until confirmed, and the screen says so.
  - Language (A11Y-L1): Write dates in full with the weekday, use 12-hour times with am or pm, and describe travel in minutes.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The kind of appointment is known.
  - Agent goal: Offer a time that fits the person's transport.
  - Agent actions: Recommends slots with the reason (earliest, matches transport) and the person chooses; no pressure or countdowns.
  - Agent tone: Patient.
  - Agent type: Vertical booking assistant; single.
  - Multi-agent handoff: Assistant → scheduling system.
  - Goal failure response: Data unavailable (no slots loading): say so and offer the phone line. Low confidence about travel time: say so and show the address.
  - Failure handover trigger: No suitable slot or the person is stuck → receptionist by phone.
  - Data needs: Slots, clinic addresses.
  - Agent memory: Procedural: preferred clinic and times.
  - Regulatory classification: Minimal risk.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: A slot is chosen.
  - Agent goal: Confirm who the appointment is for and how to reach them.
  - Agent actions: Pre-fills details marked as filled by the assistant; the person confirms each; for a carer it asks and confirms who the booking is for. Consent and identity answers are given by the person; the assistant never fills them in.
  - Agent tone: Respectful; doesn't assume.
  - Agent type: Vertical booking assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Details don't match the record: ask the person to check rather than guessing.
  - Failure handover trigger: The person can't confirm identity or details → receptionist.
  - Data needs: Patient record (contact details only).
  - Agent memory: Short-term.
  - Regulatory classification: Health data: minimum necessary; data protection applies.

### 4. Confirm

- Date, time, place and clinician in large text
- Add to calendar and change / cancel in one tap
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "You're booked" heading; Add to calendar, Change and Cancel are separate large buttons in that order, each reachable by switch access.
  - Announced (A11Y-S1): "You're booked" is read as the heading, followed by the full date, time, place and clinician; saved to calendar is announced politely.
  - Errors (A11Y-E1): Cancel opens a confirm step that restates the appointment and offers undo; Change keeps the existing booking until a new one is confirmed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep the date, time, place and clinician as short labelled lines in full words, not abbreviations.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: Details are confirmed.
  - Agent goal: Book the exact appointment the person chose.
  - Agent actions: Reads back who, what, where and when; the person confirms before it is booked; the confirmation says how to change or cancel.
  - Agent tone: Clear and calm.
  - Agent type: Vertical booking assistant; scheduling system.
  - Multi-agent handoff: Assistant → scheduling system after the person confirms.
  - Goal failure response: Slot taken in the meantime: say so and offer the next slots. Booking system down: don't book, say so, offer the phone line.
  - Failure handover trigger: Booking fails twice → receptionist with the context package.
  - Data needs: Slot, patient contact details.
  - Agent memory: Episodic: the booking joins history.
  - Regulatory classification: Health service booking; record kept.

### 5. Reminder

- Reminder has Confirm, Change and Cancel actions
- Directions and what to bring
- **Accessibility:**
  - Keyboard (A11Y-K1): Opening the reminder places focus on the heading; Confirm, Change and Cancel are large separate buttons, and directions open as text first.
  - Announced (A11Y-S1): The reminder is read as "Tomorrow, Tuesday 14 October, 10:40 am" with the three actions named; the chosen action is confirmed politely.
  - Errors (A11Y-E1): Cancel asks for a confirm step first, and if the change fails the original appointment is kept and the reason given beside the action.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say "what to bring" as a plain list, and give directions as short steps rather than a map alone.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The day before the appointment.
  - Agent goal: Help the person attend or change in time.
  - Agent actions: The reminder names the assistant; rescheduling is offered but never done without the person's confirmation; the phone line is easy to find.
  - Agent tone: Gentle reminder.
  - Agent type: Vertical booking assistant; notification service.
  - Multi-agent handoff: Notification service → assistant if the person replies.
  - Goal failure response: Reminder not delivered: fall back to a text message.
  - Failure handover trigger: The person says they're unwell or confused → the clinic by phone.
  - Data needs: Appointment, contact preferences.
  - Agent memory: Short-term.
  - Regulatory classification: Health context; vulnerable users.

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

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- “You’re booked for Tuesday 14 October at 10:40”
- Avoid jargon: “blood test” not “phlebotomy”
- Reassure without promising clinical outcomes

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The assistant says it is AI and what it can do, and a way to phone the clinic is always visible
- Details the assistant filled are marked until the person confirms them; for a carer it confirms who the booking is for
- Nothing is booked or changed without the person confirming the exact appointment
- No pressure or countdowns; the person can stop and continue later
- Anything clinical or urgent goes to a person immediately

## Edge cases

- Slot taken while booking — offer the nearest alternatives immediately
- Carer without consent recorded — explain how to add it
- Offline — queue the request and confirm when sent

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Patient — name, date of birth, contact details, contact preferences, accessibility needs · relates to Appointment, Carer link · personal data
- Carer link — carer, patient, consent recorded, consent date, scope · relates to Patient · personal data
- Appointment type — plain-language name, duration, who can see the patient, what to bring · relates to Slot
- Clinic — name, address, travel information, phone number, opening hours · relates to Slot
- Slot — date and time, clinic, clinician, appointment type, available · relates to Clinic, Appointment
- Appointment — patient, booked by (patient or carer), slot, status (booked, changed, cancelled, attended), booked at · relates to Patient, Slot, Reminder · personal data
- Reminder — appointment, channel, sent at, delivered, response (confirm, change, cancel) · relates to Appointment · personal data
- Audit event — actor (patient, carer, assistant, staff, system), action, what the assistant filled in, who confirmed, time · relates to Appointment, Carer link · personal data

### Systems it touches

- Clinic scheduling system — reads appointment types, slots, clinics; writes booking, change, cancellation · when down: Don't book; say so and show the clinic's phone number.
- Patient record (contact details only) — reads name, contact details, carer consent; writes updated contact details · when down: Let the person type their details and ask them to check; don't guess.
- Notification service; writes confirmation, reminders · when down: Fall back to a text message; if that fails, show the booking in the app.
- Device calendar; writes calendar entry · when down: Show the booking details to copy by hand.
- Clinic phone line and reception — reads handover status; writes call-back request with context package · when down: Show urgent-care signposting and the clinic's opening hours.

### Roles

- Patient — find, book, change and cancel their appointments, confirm their details, respond to reminders
- Carer — book and manage appointments for someone with recorded consent, confirm who the booking is for
- Receptionist — take handovers by phone with the context package, book or change on the patient's behalf, record carer consent
- AI booking assistant — suggest an appointment type from a short description, recommend slots with reasons, pre-fill details, marked until confirmed, read back the booking for confirmation, highest mode: Advisory — no clinical advice; never fills consent or identity answers

### Default targets (the product confirms or replaces them)

- Time to book: under 3 minutes median for people aged 65 and over (range 2–5 minutes)
- Slot list response: under 2 seconds (range 1–3 seconds)
- Session timeout: none under 20 minutes without a warning (range 20 minutes or more)
- Reminder sent: the day before the appointment (range 1–3 days before)
- Handover for urgent or clinical questions: immediate (range immediate)
- Booking service availability: 99.5% (range 99–99.9%)
- Booking and consent record retention: the legal minimum for the jurisdiction (range set by health records law)

### Required inputs and configuration

- Appointment types in plain words, with durations
- Clinics, addresses, travel information and opening hours
- Urgent-symptoms routing and the services to signpost
- How carer consent is recorded and checked
- Reminder timing and channels
- Change and cancellation rules
- Clinic phone numbers for handover
- Record retention period for bookings and consent

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
