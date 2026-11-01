---
name: telehealth-visit-experience
type: experience
journey: customer
persona: Patient (34), hard of hearing
domain: Healthcare · telehealth
technology: Mobile and desktop web (no install), with native app optional
core: "1.0"
description: "Experience skill: Joining a video consultation as a patient — the best-practice customer journey for a patient (34), hard of hearing in Healthcare · telehealth on Mobile and desktop web (no install), with native app optional. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Joining a video consultation as a patient

A patient checks their device, waits in a clear virtual waiting room, talks to a clinician with captions available, and leaves knowing exactly what happens next.

**Outcome** — A patient joins their video visit on time with working audio and video at least 95% of the time, and leaves with a written summary and next steps within one hour.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Greta, Patient (34), hard of hearing

> “If I can't follow what the doctor says, the appointment is wasted. Give me captions and the plan in writing.”

Works rotating shifts at a distribution centre; books video visits for a long-term skin condition so she doesn't lose a half day of pay.

**Goals**
- Join from her phone on a break without installing anything
- Follow everything the clinician says
- Get the treatment plan and prescription in writing

**Pains**
- Audio-only instructions she can't hear clearly
- Not knowing whether she is in the right queue or forgotten
- Links that expire or ask for a password she never set

**Behaviours**
- Joins from a parked car or a quiet break room
- Uses live captions on every call
- Screenshots important information

**Access needs**
- Hard of hearing — live captions and text chat
- Lip-reading — clinician video must stay on and well lit
- Uses hearing aids paired by Bluetooth

---

## Domain — Healthcare · telehealth

- Confirm patient identity (name and date of birth) at the start of every visit before any clinical discussion
- Confirm the patient's current location; clinicians may only consult where they are licensed, and location is needed for emergency services
- Health data is special-category (GDPR) / PHI (HIPAA): video is not recorded unless the patient gives explicit, separate consent
- Video service must use end-to-end or transport encryption and a signed business associate / processor agreement
- Urgent symptoms reported in pre-visit questions route to emergency guidance, not the waiting room

Vocabulary to use: `video visit`, `waiting room`, `clinician`, `visit summary`, `follow-up`, `consent to record`

## Technology — Mobile and desktop web (no install), with native app optional

Inputs: Camera and microphone, Touch and keyboard, Text chat during the call, Screen reader

- Works on 3G-class connections with automatic drop to audio-only
- Browser permissions requested only on the device-check step
- Join link is single-use, tied to the appointment and expires 2 hours after the slot

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Pre-visit check** | Answer a few questions and confirm details before the day | `form` | “Is anything worse since you booked?” |
| 2 | **Device test** | Check camera, microphone and connection before joining | `progress` | “We need your camera and microphone so the clinician can see and hear you” |
| 3 | **Waiting room** | Know you are in the queue and roughly how long the wait is | `progress` | “Dr Okafor is running about 8 minutes late. You can stay here or we'll text you” |
| 4 | **Visit** | Talk with the clinician and follow everything said | `detail` | “Turn on captions” |
| 5 | **Follow-up** | Leave with the plan, prescriptions and next appointment in writing | `confirmation` | “Your visit summary is ready” |

### 1. Pre-visit check

- Ask only what the clinician will use, max 6 questions
- Urgent-symptom answers show emergency guidance immediately
- **error:** Keep all answers; say which question needs attention and why
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first question; Tab follows the questions in order, up to 6, and answers are native radios or text fields.
  - Announced (A11Y-S1): Page title is Pre-visit check; emergency guidance is announced assertively as soon as an urgent answer is chosen, and progress is polite.
  - Errors (A11Y-E1): The question needing attention is named in text beside it with why, linked from a summary; all answers are kept.
  - Time limits (A11Y-W1): No time limit; answers are saved so the form can be finished later.
  - Language (A11Y-L1): Ask in plain words, such as 'Is anything worse?', and explain why each question is asked.

### 2. Device test

- Request permissions here, with a plain reason first
- Offer audio-only and phone fallback if a check fails
- **error:** Your microphone is blocked. Here's how to allow it in your browser
- **loading:** Checking your connection…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the permission explanation; Allow camera and microphone is a button after the reason, and the audio-only option is the next stop.
  - Announced (A11Y-S1): 'Checking your connection' is a polite status; each check passes or fails in text, and a blocked microphone is announced assertively.
  - Errors (A11Y-E1): The blocked microphone is named in text with steps for the browser; audio-only and phone fallback are offered and settings are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give the reason for each permission in one sentence and avoid terms such as 'bandwidth'.

### 3. Waiting room

- Show position or expected wait, updated at least every minute
- Text the patient if the clinician is running more than 10 minutes late
- **loading:** Connecting you to the waiting room…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the waiting heading; Leave the queue and Text me are buttons, and nothing grabs focus when the wait updates.
  - Announced (A11Y-S1): Wait updates are polite and at most once a minute, such as 'about 8 minutes late'; the heading is read first.
  - Errors (A11Y-E1): No input beyond choosing to stay or be texted; the choice is kept and can be changed.
  - Time limits (A11Y-W1): The wait time updates every minute; a message warns before the room closes, at least 20 seconds ahead, and the person can stay or be texted.
  - Language (A11Y-L1): Say 'about 8 minutes late' and write times in full; explain the text option in one line.

### 4. Visit

- Captions toggle and chat visible without opening a menu
- Identity and location confirmed in the first minute
- **error:** Connection lost. Rejoining… If this fails, Dr Okafor will call 07700 900123
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the captions button; the call controls follow in order: mute, camera, captions, chat, leave, and the clinician's video stays on.
  - Announced (A11Y-S1): Captions are on by default if the profile asks, and 'Captions on' is a polite status; connection loss is assertive.
  - Errors (A11Y-E1): Leave asks for confirmation so it cannot be pressed by accident; a lost connection says Dr Okafor will call and the chat stays.
  - Time limits (A11Y-W1): No time limit for the visit; a warning appears at least 20 seconds before any session limit with a button to extend.
  - Language (A11Y-L1): Use 'captions' and 'chat' with the phone number written in full as 07700 900123.

### 5. Follow-up

- Summary written in plain language within one hour
- Prescription and referral status shown with what happens next
- **empty:** Summary not ready yet — we'll notify you when Dr Okafor signs it off
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the summary heading; Tab reaches the plan, prescriptions and the next appointment in order.
  - Announced (A11Y-S1): 'Your visit summary is ready' is announced politely; prescription and referral statuses are read in text.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the plan in plain language, explain medicine names, and give dates in full.

---

## Principles

1. Test the device before the clinician's time is used
2. Never leave a patient in a silent queue
3. Spoken information is always also available as text
4. Fail over to audio or phone rather than end the visit
5. The patient ends with a written plan

## Do / Don't

**Do**
- Show the expected wait and update it
- Offer captions and chat on every visit
- Keep a phone fallback number on screen during the call

**Don't**
- Ask for permissions on page load
- Record the visit without separate explicit consent
- Require an account password to join a single visit

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Meets WCAG 2.2 AA; captions are on by default when the patient's profile requests them.
- A11Y-K1: Call controls are at least 48×48px and reachable by keyboard in a logical order: mute, camera, captions, chat, leave.
- A11Y-S1: Waiting-room updates are announced through a polite live region, at most once a minute, not every second.
- A11Y-E3: The Leave button needs confirmation so it cannot be pressed by accident.
- A11Y-E1: Questions that need attention are named beside the field and listed in a summary, and all answers are kept.
- A11Y-C2: Urgent guidance and connection states use text and icons, never colour alone, and do not rely on audio.
- A11Y-W1: Any waiting-room or session time limit is warned at least 20 seconds before and can be extended.
- A11Y-H1: A help link and a phone fallback appear in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Name the clinician and the time: “Dr Okafor will see you at 14:20”
- Explain why before asking: “We need your camera so the clinician can see your skin”
- Never blame the patient for technical problems: “The connection dropped” not “You lost connection”

## AI interactions

- Optional: draft the visit summary from the clinician's notes for the clinician to edit and sign; nothing reaches the patient unsigned
- Live captions are machine-generated and labelled as such, with a way to flag errors

## Edge cases

- Patient joins from a different country — pause, explain the clinician can't consult there, offer to rebook
- Patient reports chest pain in the waiting room chat — show emergency guidance and alert staff
- Clinician's connection fails — patient is told within 60 seconds and offered a call-back
- Someone else answers on the patient's device — clinician confirms identity before continuing
- Interpreter needed — add a third participant with patient consent

---

## Measures

| Measure | Target | How |
|---|---|---|
| Joined on time | ≥ 95% | Patients in waiting room by slot start / all visits |
| Visits completed by video | ≥ 90% | Visits not switched to phone or rebooked for tech reasons |
| Summary delivered | < 1 hr | Median from visit end to summary sent |
| Patient understood the plan | ≥ 90% | Post-visit question “I know what happens next” |

Research: Remote usability tests on patients' own phones and connections; Sessions with deaf and hard-of-hearing participants on captions and chat; Clinical safety review of pre-visit triage questions.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
