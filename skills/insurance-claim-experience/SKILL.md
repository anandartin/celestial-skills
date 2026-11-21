---
name: insurance-claim-experience
type: experience
journey: customer
persona: Wheelchair user (33), home contents claim
domain: Insurance claims
technology: Mobile web and native app
core: "1.4"
description: "Experience skill: Making an insurance claim after an incident — the best-practice customer journey for a wheelchair user (33), home contents claim in Insurance claims on Mobile web and native app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Making an insurance claim after an incident

A policyholder reports what happened, adds photos, and always knows where the claim stands and what happens next.

**Outcome** — At least 80% of straightforward claims are submitted in one sitting in under 15 minutes, and claimants receive a status update at every stage change.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.4 components and patterns, and let the active design skill render them.

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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first question; the incident type chips are a radio group, and the date can be typed or picked.
  - Announced (A11Y-S1): Announces the step title, the question, each chip as selected or not, and the missing-policy message politely.
  - Errors (A11Y-E1): If no policy is found, the message sits by the policy field and asks for the number or postcode; answers stay.
  - Time limits (A11Y-W1): No time limit; the draft is saved for 30 days.
  - Language (A11Y-L1): Use everyday incident names and write the date in full, such as 14 October.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The claimant opens a new claim or tells the AI assistant what happened in their own words.
  - Agent goal: Record the right incident type and date, and show cover and excess before any effort is spent.
  - Agent actions: Says it is an AI assistant that can fill in the claim from what they say and draft descriptions, and that a person is available any time. Suggests the incident type and date from their words, marked as filled by the AI assistant, and shows the cover and excess from the policy; the claimant confirms or changes each.
  - Agent tone: Kind once, then practical: 'Sorry this has happened. Here's what we need.'
  - Agent type: Vertical claims assistant; single.
  - Multi-agent handoff: AI assistant reads the policy from the policy system; nothing is written until the claimant confirms.
  - Goal failure response: Ambiguous input (two possible causes, or no date): ask one short question. Data unavailable (policy not found): ask for the policy number or postcode and say why. Constraint violation (incident outside the policy period): say so plainly before more detail is collected.
  - Failure handover trigger: Injury mentioned, emergency support needed, or the claimant asks for a person: the claims team immediately by phone or message, with the handover context package.
  - Data needs: Policy, cover and excess for the incident type, the claimant's own description.
  - Agent memory: Short-term: this claim draft. Episodic: the access needs the claimant has already given, reused with consent.
  - Regulatory classification: Insurance; AI interaction disclosed in the first message; personal data under data protection law; access needs are shared only with consent.

### 2. Tell us more

- Short questions, one per screen on mobile
- Item list with estimated value and age
- **error:** Explain missing fields; never clear the description
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the description field; labels are visible and voice control can say them, such as 'Items damaged'.
  - Announced (A11Y-S1): Announces the heading and each label; field errors are read with the field.
  - Errors (A11Y-E1): Errors say which field is missing and why, with a link in a summary; the description is never cleared.
  - Time limits (A11Y-W1): No time limit; the draft is saved for 30 days.
  - Language (A11Y-L1): Ask 'Which items were damaged?' in plain words and avoid 'loss adjuster' or 'peril'.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The incident type is confirmed and the claimant describes the damage.
  - Agent goal: Capture the damaged items and a clear description without asking anything twice.
  - Agent actions: Drafts the damage description and an item list with suggested values and ages from what the claimant said, each marked as filled by the AI assistant; the claimant edits, accepts or removes each item. Never clears the claimant's own text.
  - Agent tone: Patient and plain; one question at a time; no claims jargon.
  - Agent type: Vertical claims assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Low confidence on a value: say it is a rough guess and leave the field for the claimant. Goal drift (draft adds items they did not mention): remove them and follow the claimant's list. Ambiguous input: ask which item they mean.
  - Failure handover trigger: The claimant disagrees with suggested values twice or asks for a person: the claims handler, with the handover context package.
  - Data needs: Item categories, typical replacement values, the claimant's words.
  - Agent memory: Short-term: the item list for this claim.
  - Regulatory classification: Insurance; suggested values are advice only and labelled; the claimant's account stays their own.

### 3. Add photos

- Upload in background while they continue
- Show which items still have no photo
- **error:** Upload paused — we'll keep trying when you're back online
- **loading:** Uploading photos
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the add-photos button; each photo is a list item with a Remove button, and carrying on is possible while uploads finish.
  - Announced (A11Y-S1): Announces progress politely at intervals, such as '3 of 5 photos uploaded'; the pause message is polite, not assertive.
  - Errors (A11Y-E1): A paused upload is stated in text beside the list and resumes on its own; photos already added stay.
  - Time limits (A11Y-W1): No time limit; uploads resume after connection loss.
  - Language (A11Y-L1): Say '3 of 5 photos' in full and give the size limit in megabytes.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The claimant adds photos, or reaches the photo step with items still lacking evidence.
  - Agent goal: Match evidence to each damaged item and keep uploads going in the background.
  - Agent actions: Suggests which item each photo shows and lists items still without a photo, marked as filled by the AI assistant; the claimant confirms each match. If photos were lost in the incident it explains that receipts or descriptions are accepted.
  - Agent tone: Reassuring and brief: progress in plain numbers.
  - Agent type: Vertical claims assistant with an image-reading service behind it; orchestrated.
  - Multi-agent handoff: AI assistant → image-reading service → suggested matches shown to the claimant.
  - Goal failure response: Data unavailable (upload paused offline): say uploads will resume and keep every photo already added. Low confidence on a match: leave it unmatched and ask. Partial completion (some photos uploaded): show which are done and carry on.
  - Failure handover trigger: Uploads fail after two retries, or the claimant cannot provide evidence: the claims handler, with the handover context package including what is already uploaded.
  - Data needs: Photos, item list, upload status.
  - Agent memory: Short-term: photo-to-item matches for this claim.
  - Regulatory classification: Photos are personal data; state who sees them and how long they are kept; image reading only for this claim.

### 4. Check and send

- Summary with claim reference and handler name
- Say exactly what happens next and by when
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; the claim reference and summary follow, with a copy button.
  - Announced (A11Y-S1): Announces 'Claim CL-48213 sent' politely, then the contact name and day.
  - Errors (A11Y-E1): Sending a claim is checked in a review step first, and the person can correct details afterwards by contacting the team.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the contact date in full, Tuesday 28 October, and spell out the claim reference.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: All sections are complete and the claimant moves to review.
  - Agent goal: Make the claim exact and understood before it is sent.
  - Agent actions: Shows the full claim, cover and excess as an exact summary and highlights anything still marked as filled by the AI assistant and not yet accepted; the claimant makes the declaration and sends it themselves, with the AI assistant stepping back. Says a named person will handle and decide the claim, and how to correct details after sending.
  - Agent tone: Clear, calm and precise.
  - Agent type: Vertical claims assistant; claims system behind it.
  - Multi-agent handoff: AI assistant prepares the summary → the claimant confirms → claims system records the claim and assigns a handler.
  - Goal failure response: Constraint violation (unaccepted AI-filled fields): stop and ask the claimant to accept or change them first. Full task failure (claims system down): do not send, keep the draft, say so and offer a person. Partial completion (sent, handler not yet assigned): show the claim reference and when a name will follow.
  - Failure handover trigger: Sending fails twice, or the claimant is unsure about the declaration: the claims team immediately, with the handover context package.
  - Data needs: Complete claim draft, policy, excess, claimant contact details.
  - Agent memory: Episodic: the sent claim joins the claimant's history.
  - Regulatory classification: Insurance claim submission; a person decides, never an automated system alone; the declaration is made by the claimant; audit record of what the AI assistant filled and what the claimant accepted.

### 5. Claim status

- Stage tracker: received, reviewing, assessor visit, decision, paid
- Requests for information shown as tasks with due dates
- **empty:** No updates yet — 'We'll message you as soon as anything changes'
- **error:** If the claim is declined, give reasons and the complaints route
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the status heading; each stage is a list item with text status, and the request can be answered with a button.
  - Announced (A11Y-S1): Announces stage names with 'done', 'current' or 'to come'; new requests are announced politely.
  - Errors (A11Y-E1): The declined message gives reasons in text with the complaints route; uploads for the extra item keep their files.
  - Time limits (A11Y-W1): No time limit to respond; the request shows the date it was sent.
  - Language (A11Y-L1): Explain claim terms in plain words and give the complaints route as plain steps.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The claim changes stage, a request for information arrives, or the claimant asks where things stand.
  - Agent goal: Keep the claimant informed and help them answer requests without chasing.
  - Agent actions: Explains each stage and request in plain words and drafts replies or visit preferences, marked as filled by the AI assistant, that the claimant edits and sends. Offers assessor times that fit the claimant's access needs and they choose; on a decline it gives the handler's reasons, the complaints route, the ombudsman and how to ask a person to review.
  - Agent tone: Steady and specific: what changed and what's next.
  - Agent type: Vertical claims assistant; single.
  - Multi-agent handoff: Claims system → notification service → AI assistant when the claimant replies.
  - Goal failure response: Data unavailable (status not loading): say so and give the handler's contact. Ambiguous input: ask what the claimant wants to do. Constraint violation (asked to change the decision): say only a person can and offer review.
  - Failure handover trigger: A decline is disputed, a complaint is made, the claimant is distressed or asks for a person: the named handler or complaints team immediately, with the handover context package.
  - Data needs: Claim stage, requests, handler name, decision reasons, visit slots.
  - Agent memory: Episodic: claim history and access needs, viewable and deletable by the claimant.
  - Regulatory classification: Significant decision about the claimant: notice before any automated step, reasons after, human review on request; complaints and ombudsman rights stated.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-N1: Every action has a visible label matching its accessible name so voice control works (WCAG 2.5.3).
- A11Y-C2: The stage tracker has a text status for each stage, not just filled circles.
- A11Y-S1: Upload progress is announced politely at intervals, not every percent.
- A11Y-T1: Targets are at least 24×24 CSS px (WCAG 2.5.8) and primary actions 48px.
- A11Y-E3: The claim has a review step before sending and details can be corrected afterwards.
- A11Y-E1: Missing fields are named in text and the description is never cleared.
- A11Y-H1: Help and how to contact the team appear in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Acknowledge the situation once, then be practical: 'Sorry this has happened. Here's what we need.'
- Say 'excess' with the amount and an explanation the first time: '£250 excess — the part you pay'
- Status messages say what changed and what's next: 'Your assessor is booked for Friday 31 October, 10:00–12:00'

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The first message says it is an AI assistant, what it can fill in and draft, and that a person on the claims team is available any time
- Every answer, value or description the AI assistant fills in is marked as filled by the AI assistant until the claimant accepts or changes it
- Nothing is sent until the claimant has seen the exact claim, including cover and excess, and confirmed it; the declaration is made by the claimant
- A person decides every claim; the AI assistant never declines, and fraud signals go to a human investigator
- Before any automated step affects the claim the claimant is told; a decline gives the main reasons, the complaints route and the ombudsman, and a way to ask a person to review it
- Injury, distress or a request for a person goes to the claims team immediately, with the handover context package so nothing is asked twice

## Edge cases

- Claimant is in temporary accommodation — capture a contact address and offer emergency support
- Incident outside the policy period — explain clearly before more detail is collected
- Injury involved — route to a phone call with a person
- Photos lost in the incident — accept descriptions and receipts instead
- Customer disputes the decision — show the complaint and ombudsman route

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Policyholder — name, contact details, contact address during the claim, preferred channel, access needs (with consent) · relates to Policy, Claim · personal data
- Policy — policy number, cover by incident type, excess, policy period · relates to Policyholder, Claim · personal data
- Claim — claim reference, incident type, incident date, description, stage, handler, decision, decision reasons, filled by AI assistant flags · relates to Policy, Damaged item, Evidence, Information request · personal data
- Damaged item — name, estimated value, age, value source (claimant or AI assistant), accepted by claimant · relates to Claim, Evidence · personal data
- Evidence — file, type (photo, receipt, description), linked item, upload status, retention date · relates to Claim, Damaged item · personal data
- Information request — what is needed, date sent, due date, status · relates to Claim
- Assessor visit — date and time window, access arrangements, chosen by claimant · relates to Claim · personal data
- Complaint — reason, date raised, status, ombudsman referral rights · relates to Claim · personal data

### Systems it touches

- Policy administration system — reads policy, cover, excess, policy period · when down: The claimant can still describe the incident; cover and excess show as 'not available yet' and the claim cannot be sent until they load.
- Claims management system — reads claim stage, handler, requests, decision; writes new claim, items, replies to requests · when down: The draft is saved on the device and in the draft store for 30 days; nothing is sent, and the claimant is told and offered a person.
- Document and image store — reads uploaded files; writes photos, receipts · when down: Uploads pause and resume automatically; the claimant can carry on with other sections.
- Image-reading service — reads photos; writes suggested item matches · when down: The claimant matches photos to items by hand; nothing else is affected.
- Scheduling system for assessors — reads available visit slots; writes chosen visit, access arrangements · when down: The handler arranges the visit by message or phone at a time the claimant chooses.
- Notification service — reads stage changes; writes messages to the claimant · when down: Updates are queued and the status page stays current; the claimant is never left without a status.

### Roles

- Claimant — start, save and send a claim, accept or change anything the AI assistant filled, make the declaration, choose visit times, complain and ask for human review
- Claims handler — review and decide claims, request information, arrange assessor visits, give decision reasons
- Fraud investigator — review claims flagged by fraud signals, ask for more information
- Complaints team — handle complaints and reviews, explain the ombudsman route
- AI assistant — explain cover, excess and status, suggest incident details, item values and photo matches, marked until accepted, draft replies for the claimant to send, hand over to a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- AI assistant response time: under 3 seconds (range 1–5 seconds)
- Handover to a person when asked: immediately, picked up within 5 minutes in opening hours (range 2–15 minutes)
- Status message after a stage change: within 1 hour (range 15 minutes–4 hours)
- Claim draft kept: 30 days (range 14–60 days)
- Complaint response: the regulatory deadline for the jurisdiction (range set by the regulator)
- Claim record and evidence retention: the legal minimum for the jurisdiction (range set by law and the insurer's published schedule)

### Required inputs and configuration

- Incident types and the cover and excess rules for each
- Policy lookup by policy number or postcode
- Claim stages and the service standard for each
- Evidence types accepted per incident type
- Complaints route and ombudsman details
- Retention schedule for photos and documents
- Opening hours and channels for reaching a person
- Fraud-signal routing to investigators

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
