---
name: insurance-claim-experience
type: experience
journey: customer
persona: Wheelchair user (33), home contents claim
domain: Insurance claims
technology: Mobile web and native app
core: "1.0"
description: "Experience skill: Making an insurance claim after an incident — the best-practice customer journey for a wheelchair user (33), home contents claim in Insurance claims on Mobile web and native app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Making an insurance claim after an incident

A policyholder reports what happened, adds photos, and always knows where the claim stands and what happens next.

**Outcome** — At least 80% of straightforward claims are submitted in one sitting in under 15 minutes, and claimants receive a status update at every stage change.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Aisha, Wheelchair user (33), home contents claim

> “I've just had a flood. Please don't make me repeat it three times.”

Water leak from the flat above damaged her laptop and sofa; she's staying with a friend.

**Goals**
- Report it quickly while it's fresh
- Know what's covered
- Get replacements without chasing

**Pains**
- Being asked the same questions on the phone and online
- No idea who is handling the claim
- Assessor visits booked without asking about access

**Behaviours**
- Photographs everything on her phone
- Prefers messages over calls
- Keeps receipts in email

**Access needs**
- Wheelchair user — needs accessible visit arrangements
- Uses voice control on her phone

---

## Domain — Insurance claims

- Treat customers fairly: handle claims promptly, explain decisions and give reasons for any rejection
- Ask only what's needed for this claim type; reuse what the policy already holds
- Customers must be told their right to complain and to escalate to the independent ombudsman
- Photos and documents are personal data — state retention and who sees them
- Vulnerable customers identified with consent and offered adjustments

Vocabulary to use: `claim`, `excess`, `policy`, `assessor`, `settlement`, `claim reference`

## Technology — Mobile web and native app

Inputs: Touch, Camera and photo library, Voice control

- Photo upload resumes after connection loss
- Images compressed on device to under 2 MB each
- Claim draft saved for 30 days

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **What happened** | Pick incident type and date | `form + chips` | “What happened, and when?” |
| 2 | **Tell us more** | Describe the incident and damaged items | `form` | “Which items were damaged?” |
| 3 | **Add photos** | Upload evidence of damage | `progress` | “3 of 5 photos uploaded — you can carry on while we finish.” |
| 4 | **Check and send** | Review and submit the claim | `confirmation` | “Claim CL-48213 sent. Jonah from our team will contact you by Tuesday 28 October.” |
| 5 | **Claim status** | Track progress and respond to requests | `progress` | “We need one more thing: a receipt or photo of your laptop's model number.” |

### 1. What happened

- Incident chips: water, fire, theft, accidental damage, storm
- Show the policy cover and excess for the type picked
- **empty:** If no policy is found, ask for the policy number or postcode

### 2. Tell us more

- Short questions, one per screen on mobile
- Item list with estimated value and age
- **error:** Explain missing fields; never clear the description

### 3. Add photos

- Upload in background while they continue
- Show which items still have no photo
- **error:** Upload paused — we'll keep trying when you're back online
- **loading:** Uploading photos

### 4. Check and send

- Summary with claim reference and handler name
- Say exactly what happens next and by when

### 5. Claim status

- Stage tracker: received, reviewing, assessor visit, decision, paid
- Requests for information shown as tasks with due dates
- **empty:** No updates yet — 'We'll message you as soon as anything changes'
- **error:** If the claim is declined, give reasons and the complaints route

---

## Principles

1. Ask once, reuse everywhere — online answers reach the handler and phone team
2. Status changes always trigger a message with the next step
3. Cover and excess shown before effort is spent
4. Access needs asked once and honoured on every visit
5. A named handler for every claim

## Do / Don't

**Do**
- Show the excess before the claim is submitted
- Let photos upload in the background
- Ask about visit access needs up front

**Don't**
- Ask for information the policy already holds
- Decline without giving reasons
- Book assessor visits without the customer's choice of time

## Accessibility

- Meets WCAG 2.2 AA; all actions operable by voice control with visible labels matching accessible names (2.5.3)
- Stage tracker has text status for each stage, not just filled circles
- Upload progress announced at intervals, not every percent
- Target size at least 24×24 CSS px (2.5.8); primary actions 48px

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Acknowledge the situation once, then be practical: 'Sorry this has happened. Here's what we need.'
- Say 'excess' with the amount and an explanation the first time: '£250 excess — the part you pay'
- Status messages say what changed and what's next: 'Your assessor is booked for Friday 31 October, 10:00–12:00'

## AI interactions

- AI can suggest item values and draft the damage description from photos; the claimant edits and confirms, and suggestions are labelled
- Fraud signals route to a human investigator; no automatic declines

## Edge cases

- Claimant is in temporary accommodation — capture a contact address and offer emergency support
- Incident outside the policy period — explain clearly before more detail is collected
- Injury involved — route to a phone call with a person
- Photos lost in the incident — accept descriptions and receipts instead
- Customer disputes the decision — show the complaint and ombudsman route

---

## Measures

| Measure | Target | How |
|---|---|---|
| Single-sitting submission | ≥ 80% | Claims started → submitted in one session |
| Time to submit | < 15 min median | Start → submitted, straightforward claims |
| Update coverage | 100% of stage changes | Stage changes with a message sent within 1 hour |
| Calls asking for status | −40% | Status calls per open claim vs baseline |

Research: Contextual interviews with recent claimants; Accessibility testing with voice-control and wheelchair users on visit booking; Service blueprint review with claims handlers.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
