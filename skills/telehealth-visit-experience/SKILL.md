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

### 2. Device test

- Request permissions here, with a plain reason first
- Offer audio-only and phone fallback if a check fails
- **error:** Your microphone is blocked. Here's how to allow it in your browser
- **loading:** Checking your connection…

### 3. Waiting room

- Show position or expected wait, updated at least every minute
- Text the patient if the clinician is running more than 10 minutes late
- **loading:** Connecting you to the waiting room…

### 4. Visit

- Captions toggle and chat visible without opening a menu
- Identity and location confirmed in the first minute
- **error:** Connection lost. Rejoining… If this fails, Dr Okafor will call 07700 900123

### 5. Follow-up

- Summary written in plain language within one hour
- Prescription and referral status shown with what happens next
- **empty:** Summary not ready yet — we'll notify you when Dr Okafor signs it off

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

## Accessibility

- Meets WCAG 2.2 AA; captions on by default when the patient's profile requests them
- Call controls are at least 48×48px and reachable by keyboard in a logical order: mute, camera, captions, chat, leave
- Waiting-room updates announced through a polite live region, not every second
- Leave button needs confirmation so it can't be hit by accident (3.3.4 style error prevention)

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
