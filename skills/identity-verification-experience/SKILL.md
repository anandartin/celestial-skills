---
name: identity-verification-experience
type: experience
journey: customer
persona: Graduate (26), opening an account with a new savings provider; deaf
domain: Regulated identity checks (KYC / AML)
technology: Mobile app and mobile web, with a desktop-to-phone handoff
core: "1.0"
description: "Experience skill: Verifying identity with a document and selfie for a regulated service — the best-practice customer journey for a graduate (26), opening an account with a new savings provider; deaf in Regulated identity checks (KYC / AML) on Mobile app and mobile web, with a desktop-to-phone handoff. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Verifying identity with a document and selfie for a regulated service

A customer opening an account with a regulated service photographs an identity document and takes a selfie, understands why and how the data is used, and gets a clear decision or a human alternative.

**Outcome** — At least 80% of genuine customers are verified automatically within five minutes, every rejection offers a human route, and no biometric data is kept longer than stated.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Aroha, Graduate (26), opening an account with a new savings provider; deaf

> “I'm happy to prove who I am. I just want to know who sees my passport and what happens if the camera won't work.”

Recently moved country; her document is from abroad and her proof of address is new. Uses a mid-range phone in a dim flat.

**Goals**
- Open the account in one sitting
- Know her document and face data are protected
- Have an option if automatic checks fail

**Pains**
- Camera screens with spoken instructions only
- Rejections with no reason
- Being asked to phone a helpline she can't hear

**Behaviours**
- Reads captions and on-screen text
- Researches a provider before giving documents
- Retries a few times before giving up

**Access needs**
- Deaf — needs visual instructions and non-phone support (chat, email, text relay)
- Low light at home

---

## Domain — Regulated identity checks (KYC / AML)

- Identity checks are required by anti-money-laundering rules before the account can be used; say so plainly at the start
- Biometric data is special-category data (GDPR Article 9): get explicit consent, state the purpose, processor and retention, and offer a non-biometric alternative
- Delete selfie and liveness images once the check completes, within a stated period, keeping only the result and audit record
- A person can ask for a human review of an automated rejection (GDPR Article 22)
- Never tell a customer they were flagged on a sanctions or fraud list; give a neutral outcome and next step

Vocabulary to use: `identity check`, `photo ID`, `selfie`, `liveness check`, `manual review`, `proof of address`

## Technology — Mobile app and mobile web, with a desktop-to-phone handoff

Inputs: Rear and front camera, Touch, File upload as fallback

- Capture works in low light with guidance; auto-capture with a manual shutter option
- Images encrypted on device before upload
- Supports documents from many countries, including non-Latin scripts

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Why** | Understand why ID is needed and how data is handled | `onboarding` | “We're required by law to check your identity. Your selfie is deleted within 30 days.” |
| 2 | **Document** | Photograph a valid identity document | `progress` | “Place your passport photo page inside the frame” |
| 3 | **Selfie** | Take a selfie for the liveness check | `progress` | “Look at the camera and slowly turn your head when you see the arrow” |
| 4 | **Checking** | Wait for a decision with a clear expectation | `progress` | “Usually under 2 minutes. You can close the app — we'll notify you.” |
| 5 | **Outcome** | Know the result and the next step | `confirmation` | “You're verified. Your account is ready.” |

### 1. Why

- Purpose, data kept, who checks it and for how long, in five lines
- Explicit consent checkbox for biometric processing, with an alternative

### 2. Document

- Visual frame and text guidance; no audio-only cues
- Show a preview and let them retake
- **error:** Too much glare on the photo. Tilt the passport slightly and try again.
- **loading:** Checking the photo is clear…

### 3. Selfie

- Instructions as on-screen text and icons, with vibration as a cue
- Tips for light and glasses; no time limit to start
- **error:** We couldn't see your face clearly. Move closer to a light and try again.

### 4. Checking

- Say how long it usually takes
- Allow leaving the app; notify when done
- **loading:** Checking your details…

### 5. Outcome

- Verified: go straight to the account
- Not verified: plain reason category, retry and a human review option by chat or email
- **error:** We couldn't verify your document automatically. A specialist will review it within 1 working day.

---

## Principles

1. Explain the legal reason and data use before the camera opens
2. Guidance is visual and textual, never audio only
3. Every automated rejection has a human route
4. Collect the minimum and delete biometrics on schedule
5. Outcomes are neutral and never reveal screening details

## Do / Don't

**Do**
- Offer a phone handoff via a code when the person starts on desktop
- Accept a range of document types and countries
- Offer support by chat, email and text relay, not phone alone

**Don't**
- Store selfies after the check is complete
- Show a raw rejection code or blame the person
- Make the camera the only way to proceed

## Accessibility

- Meets WCAG 2.2 AA; camera guidance is shown as text and announced via a live region for screen reader users
- No information conveyed by sound alone; haptic and visual cues for capture
- Manual shutter button at least 48 × 48 px as an alternative to auto-capture
- Non-camera route (upload or in-person/video-assisted check) offered for people who cannot use the camera flow

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Say why first: “We're required by law to check your identity before you can save with us”
- Retry guidance is specific: “Too much glare — tilt the passport slightly”
- Neutral outcome wording: “We need to check a few more details” rather than “Failed”

## AI interactions

- AI performs document and liveness checks; any rejection or low-confidence result goes to a trained reviewer, and the customer can request human review
- Bias testing across skin tones, ages, disabilities and document types before launch and every quarter, with results reviewed by compliance

## Edge cases

- Document from a country the system can't read — route to manual review with upload, not a dead end
- Name on document differs from the application (e.g. after marriage, transliteration) — ask for the document name and accept a supporting document
- Facial difference, prosthetic or religious covering — offer an alternative check with a trained reviewer in private
- Possible fraud or sanctions match — show a neutral pending message and escalate internally; do not disclose the reason
- Person under the minimum age — stop and explain the age requirement plainly; delete the captured data

---

## Measures

| Measure | Target | How |
|---|---|---|
| Automatic pass rate | ≥ 80% | Genuine applicants verified without review |
| Time to decision | < 5 min | Median, start → outcome, automatic route |
| Pass-rate gap | < 3 points | Difference across demographic and document groups in bias tests |
| Biometric deletion | 100% within 30 days | Audit of storage against retention schedule |

Research: Usability sessions with deaf, blind and low-vision participants using their own phones; Bias and accuracy testing across demographics and document types; Compliance and data-protection review (DPIA) of the full flow.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
