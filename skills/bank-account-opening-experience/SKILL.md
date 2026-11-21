---
name: bank-account-opening-experience
type: experience
journey: customer
persona: New customer (24), first full-time job
domain: Retail banking
technology: Mobile web and native app (iOS / Android)
core: "1.3"
description: "Experience skill: Opening a current account online for a new customer — the best-practice customer journey for a new customer (24), first full-time job in Retail banking on Mobile web and native app (iOS / Android). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Opening a current account online for a new customer

A new customer opens a current account on their phone, proves who they are once, and knows exactly what happens if a check needs more time.

**Outcome** — At least 75% of applicants who start get a working account number the same day, with every identity check explained before it happens.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.3 components and patterns, and let the active design skill render them.

---

## Persona — Kwame, New customer (24), first full-time job

> “Tell me what you need before I start, so I'm not hunting for documents halfway through.”

Moved cities for work six weeks ago; his proof of address is still a tenancy agreement, not a utility bill.

**Goals**
- Get an account number before his first payday
- Use the documents he actually has
- Know if anything will stop the application

**Pains**
- Being asked for a document he doesn't have after ten minutes of typing
- Selfie checks that fail without saying why
- Vague 'we'll be in touch' endings

**Behaviours**
- Applies on his phone during a lunch break
- Photographs documents on a desk with poor light
- Leaves and comes back to finish later

**Access needs**
- Dyslexia — prefers short sentences and clear headings
- Uses text-to-speech for long terms

---

## Domain — Retail banking

- Customer due diligence (KYC / AML regulations): verify identity and address before the account can transact
- Collect only the data the checks need (GDPR data minimisation); say why each item is asked for
- Pre-contract information and key terms shown before acceptance, downloadable and in plain language
- Credit reference searches for a current account must be disclosed as soft or hard before they run
- Offer a non-digital route (branch or post) for anyone who cannot complete document or face checks

Vocabulary to use: `current account`, `sort code / account number`, `identity check`, `proof of address`, `overdraft`, `debit card`

## Technology — Mobile web and native app (iOS / Android)

Inputs: Touch, Camera (document and face capture), Screen reader

- Document capture works in low light with manual capture fallback
- Application saved server-side for 30 days
- Liveness check offers an assisted alternative

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Before you start** | Know what is needed and how long it takes | `onboarding` | “You'll need photo ID and something with your address on it — here's what counts.” |
| 2 | **Your details** | Give name, date of birth, address history and contact | `form` | “We ask for addresses from the last 3 years to confirm it's really you.” |
| 3 | **Prove it's you** | Capture ID and a face check | `progress` | “Move the card a little closer — the corners need to be in the frame.” |
| 4 | **Check and agree** | Review details and accept terms | `detail` | “Here's what you're agreeing to, in one page.” |
| 5 | **Decision** | Know the outcome and next steps | `confirmation` | “Your account is open. Your card will arrive by Thursday 30 October.” |

### 1. Before you start

- List documents accepted, including alternatives to utility bills
- State time needed: about 10 minutes
- **empty:** If they have no photo ID, show the branch and post route straight away
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the list of accepted documents is a real list, and the branch and post route link is reachable before the start button.
  - Announced (A11Y-S1): Announces the step title and heading, then the document list; the no-photo-ID route is announced as normal content, not an error.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use short sentences and say 'photo ID' with examples; give the time needed as 'about 10 minutes'.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The applicant opens the application or asks the AI assistant what they need.
  - Agent goal: Make sure the applicant knows what is needed before typing anything.
  - Agent actions: Says it is an AI assistant that can explain the process, help fill the form and answer questions, and that it does not make the decision. Checks which of the applicant's own documents count, such as a tenancy agreement, and shows the branch and post route if they have no photo ID. Says up front which automated checks will run and why.
  - Agent tone: Short sentences; warm and practical.
  - Agent type: Vertical banking onboarding assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input ("I've got a letter from the council"): ask what kind of letter and say whether it counts. Constraint violation (applicant under 18): stop before collecting data and point to the youth account route.
  - Failure handover trigger: The applicant asks for a person: onboarding support immediately with the handover context package.
  - Data needs: Accepted document list, eligibility rules, check descriptions.
  - Agent memory: Short-term only; nothing is kept before the applicant starts.
  - Regulatory classification: Minimal risk under the EU AI Act; AI interaction disclosed; no personal data collected at this step.

### 2. Your details

- Address lookup with manual entry always available
- Explain why three years of address history is needed
- **error:** Name the field and the fix; keep everything already typed
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first field; fields follow the visual order, and each address row can be added or removed with the keyboard or switch access.
  - Announced (A11Y-S1): Announces the step heading and each visible label; the 3-year address reason is read as help text linked to the address group.
  - Errors (A11Y-E1): Errors name the field and the fix in text beside it, are listed in a summary at the top with links, and everything typed is kept.
  - Time limits (A11Y-W1): Application is saved for 30 days and there is no time limit on typing.
  - Language (A11Y-L1): Explain 'address history' in plain words and write dates in full, not as numbers alone.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The applicant reaches the details form and asks for help, for example with address history.
  - Agent goal: Help the applicant give complete, correct details once.
  - Agent actions: Explains why each item is asked for. Can fill address rows from what the applicant types and the address lookup, marked as filled by the AI; the applicant confirms or edits each one. Never guesses a date of birth or name. Saves progress so the applicant can leave and come back.
  - Agent tone: Patient and plain; one question at a time.
  - Agent type: Vertical banking onboarding assistant; single.
  - Multi-agent handoff: AI assistant uses the address lookup service.
  - Goal failure response: Ambiguous input (gaps in address history): ask about the missing months. Data unavailable (address lookup down): offer manual entry and say why. Constraint violation (asks for data the checks don't need): don't ask; data minimisation.
  - Failure handover trigger: The applicant is stuck or asks for a person: onboarding support with the handover context package and the saved application.
  - Data needs: Name, date of birth, address history, contact details.
  - Agent memory: Short-term: the form. Episodic: the saved application for 30 days.
  - Regulatory classification: Data protection (minimisation, purpose stated); identity data for anti-money-laundering checks.

### 3. Prove it's you

- Show a live frame guide and say what's wrong: glare, blur, cropped
- Allow upload from files as an alternative to live capture
- **error:** If capture fails three times, offer upload or an assisted video check
- **loading:** Checking your ID — this usually takes under a minute
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the capture instruction text; the capture button and the upload alternative are both reachable by Tab or switch access in that order.
  - Announced (A11Y-S1): Instructions such as 'Move the card a little closer' are read politely in a live region; progress is announced politely; the failure message is assertive.
  - Errors (A11Y-E1): After three failed captures the upload and assisted video check are offered beside the message; earlier details stay saved and are never asked for again.
  - Time limits (A11Y-W1): No time limit on capture; the check usually takes under a minute, with a text status and the option to leave and return.
  - Language (A11Y-L1): Keep camera instructions to one short sentence each and avoid terms like 'liveness'; say 'a quick face check'.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The applicant reaches the ID and face check.
  - Agent goal: Get the applicant through capture without the AI handling their documents.
  - Agent actions: Steps back: the applicant captures their ID and face themselves, and the AI assistant never sees the images. If asked, it explains what the check is for and how to get a clear photo, and offers upload or an assisted video check after failed attempts.
  - Agent tone: Calm and encouraging; never blames the applicant.
  - Agent type: Vertical banking onboarding assistant; single. The identity service behind it is separate.
  - Multi-agent handoff: None for the AI assistant; the identity service runs the check.
  - Goal failure response: Full task failure (capture fails three times): offer upload or the assisted video check. Data unavailable (identity service slow): say it usually takes under a minute and the applicant can leave and be messaged.
  - Failure handover trigger: Name on ID differs from the form, a capture route fails, or the applicant asks: onboarding support immediately with the handover context package, because identity is involved.
  - Data needs: Check status only; no images reach the AI assistant.
  - Agent memory: None beyond the session.
  - Regulatory classification: Identity checks under anti-money-laundering rules; biometric data is special-category data handled only by the identity service with explicit consent.

### 4. Check and agree

- Key terms summary above the full document
- Overdraft is off by default and offered separately
- **error:** If the terms fail to load, block acceptance and offer a retry
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the one-page terms are a headed list, read in order, with the agree checkbox and Accept button last.
  - Announced (A11Y-S1): Announces the heading, each section heading, and politely 'Terms loaded'; a failed load is announced assertively and acceptance stays disabled.
  - Errors (A11Y-E1): If the terms fail to load, a retry button sits beside the message and the accept control stays off; a review of details precedes agreeing and everything entered is kept.
  - Time limits (A11Y-W1): No time limit while reviewing; the application stays saved for 30 days.
  - Language (A11Y-L1): Summarise each term in plain language first; keep text-to-speech friendly by expanding abbreviations such as 'APR'.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The applicant reaches the review and terms.
  - Agent goal: Help the applicant check their details and understand what they are agreeing to.
  - Agent actions: Shows details for checking, with any name or date of birth read from the ID marked as read by the AI for the applicant to confirm. Answers questions about the terms in plain words and points to the exact clause; the official key terms are always shown in full. Keeps the overdraft off unless the applicant chooses it. The applicant ticks agreement and presses Accept themselves.
  - Agent tone: Clear and neutral; never persuasive.
  - Agent type: Vertical banking onboarding assistant; single.
  - Multi-agent handoff: AI assistant reads the terms service and the confirmed details.
  - Goal failure response: Data unavailable (terms fail to load): block acceptance and offer a retry. Low confidence answering a terms question: say so and quote the clause. Goal drift (asked about fees, answers about features): re-answer the question asked.
  - Failure handover trigger: The applicant disputes a term or asks for a person: onboarding support with the handover context package.
  - Data needs: Confirmed details, key terms, full terms, overdraft offer.
  - Agent memory: Short-term: the application.
  - Regulatory classification: Consumer banking pre-contract information; consent given by the applicant; credit search type stated before it runs.

### 5. Decision

- Show account number and sort code on screen when approved
- If referred, say what is being checked and by when
- **error:** Referred: 'We need to check one more thing. We'll reply by Monday 27 October.'
- **loading:** Running final checks — you can close this and we'll message you
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the outcome heading; the next-step link follows, and the referred message is read as normal text.
  - Announced (A11Y-S1): Announces the heading and outcome politely; 'Running final checks' is a polite status and the referral message is plain text, not an alert.
  - Errors (A11Y-E1): A referred outcome explains what is needed in text, with a reply date; nothing needs to be re-entered.
  - Time limits (A11Y-W1): Final checks need no waiting on the page; the person can close it and will be messaged.
  - Language (A11Y-L1): Write the card date in full, such as Thursday 30 October, and the reply date, Monday 27 October.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: A decision or referral is returned.
  - Agent goal: Make the outcome and next steps unmistakable.
  - Agent actions: Explains the outcome: account number and card date when open; when referred, what is being checked and by when. Gives the main reason when the law allows, a contact route and how to ask a person to review an automated outcome. Never reveals a fraud or sanctions match.
  - Agent tone: Reassuring and exact; calm if referred.
  - Agent type: Vertical banking onboarding assistant; single.
  - Multi-agent handoff: AI assistant reads the decision from core banking.
  - Goal failure response: Data unavailable (decision still running): say the applicant can close the app and will be messaged. Constraint violation (asked why a fraud referral happened): give a neutral next step only.
  - Failure handover trigger: A referral, a refusal, a request for review, or the applicant asks: onboarding operations or financial crime staff immediately with the handover context package.
  - Data needs: Decision, referral reason category, account number, card dispatch date.
  - Agent memory: Episodic: the outcome, for later questions.
  - Regulatory classification: Account opening decision with legal effect: automated-decision safeguards (notice, main reasons, human review); anti-money-laundering tipping-off rules.

---

## Principles

1. Say what is needed before the first form field
2. Every check explained before it runs, with the reason
3. Progress saved automatically; leaving never loses work
4. A failed check always has a next route, digital or in person
5. Show the outcome in words and numbers, not just a status colour

## Do / Don't

**Do**
- Accept a broad list of address proofs, including tenancy agreements and council letters
- Let people photograph or upload documents
- Show the account number on the decision screen

**Don't**
- Default-select an overdraft or marketing consent
- Run a credit search without saying which kind
- End a referral with no date or contact route

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-S1: Camera screens give text instructions that are announced politely through a live region.
- A11Y-T1: The capture button and the alternative upload link are each at least 48px.
- A11Y-E1: On submit, focus moves to an error summary at the top that links to each field, and typed answers are kept.
- A11Y-A1: Passcode and sign-in fields allow paste and password managers, with no memory puzzle (WCAG 3.3.8).
- A11Y-K1: Every capture step has a non-camera route (upload or assisted video check) reachable by keyboard and switch access.
- A11Y-L1: Headings and sentences are short and plain; terms are summarised before the full text.
- A11Y-E3: The terms step allows review and is separate from the final accept action.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plain words: 'proof of address' not 'POA'; 'check' not 'verification event'
- Error copy names the fix: 'Your passport photo is blurred — try again in brighter light'
- Dates in full: 'Thursday 30 October', never '30/10'

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is AI and what it can do before the application starts, and every detail it filled is marked as filled by the AI until the applicant confirms it
- Identity documents, the face check, consent to terms and any sign-in or code are done by the applicant alone; the AI assistant never sees images, codes or passwords
- The applicant is told before any automated check or decision runs, including whether a credit search is soft or hard
- The AI assistant never declines or refers an application; a refused or referred applicant gets the main reason (unless the law forbids it), a reply date and a way to ask a person to review it
- A failed check always offers another route (upload, assisted video check, branch or post), and asking for a person works on every step with the handover context package

## Edge cases

- Name on ID differs from typed name (recent marriage, transliteration) — offer a 'my name has changed' route
- No fixed address or recently arrived in the country — show accepted alternatives and the branch route
- Identity fraud match — refer quietly without exposing the reason, and give a contact route
- Applicant under 18 — route to the youth account journey before collecting data
- App closed mid-capture — resume at the same step

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Applicant — name, date of birth, address history (3 years), email, phone, nationality where needed · relates to Application · personal data
- Application — status, saved until, fields filled by AI assistant, fields confirmed by applicant, overdraft chosen · relates to Applicant, Identity check, Consent, Decision · personal data
- Identity check — document type, result, method (live, upload, assisted), date · relates to Application · personal data
- Credit search — type (soft or hard), told before running, date, result · relates to Application · personal data
- Consent — what was agreed, terms version, date, marketing choice · relates to Application · personal data
- Decision — outcome, reason category, automated or by a person, review requested, reply by date · relates to Application, Account · personal data
- Account — sort code, account number, card dispatch date · relates to Applicant · personal data

### Systems it touches

- Identity verification service; writes identity check results · when down: Offer the assisted video check, branch or post route; save the application for 30 days.
- Credit reference service — reads credit file (soft search); writes search footprint · when down: Save the application and tell the applicant when the check will run; never run a different search type.
- Fraud and sanctions screening — reads applicant details; writes screening result · when down: Refer the application with a neutral message and a reply date; the account is not opened until screening completes.
- Core banking system — reads product rules; writes accounts, decisions · when down: Tell the applicant the account will be opened later and message them.
- Address lookup service — reads addresses · when down: Manual address entry.
- Document and terms service — reads key terms, full terms · when down: Block acceptance and offer a retry.
- Messaging service; writes outcome and referral messages · when down: Show the outcome in the app and retry messages.

### Roles

- Applicant — apply, save and return within 30 days, confirm or correct AI-filled details, capture their own ID and face, accept terms, ask for a person or a review
- Onboarding operations reviewer — review referrals and automated outcomes, run the assisted video check, open or decline accounts with a recorded reason
- Financial crime analyst — review fraud and sanctions matches, decide referrals without revealing the reason
- Branch adviser — complete the application in person or by post
- Compliance owner — set checks, accepted documents and retention, review AI assistant logs
- AI assistant — explain the process and checks, fill form fields from what the applicant says, marked as AI-filled, answer questions about terms, explain outcomes and routes, works at most in Advisory mode; never decides

### Default targets (the product confirms or replaces them)

- AI assistant reply time: Under 3 seconds (range 1–5 seconds)
- Automated identity check: Under 1 minute (range Up to 5 minutes)
- Referral reply: 2 working days (range 1–5 working days, always with a stated date)
- Application saved: 30 days (range 14–90 days)
- Service availability: 99.9% (range 99.5–99.95%)
- Customer due diligence records kept: The legal minimum for the jurisdiction (range Set by anti-money-laundering law)

### Required inputs and configuration

- Accepted identity and address documents
- Eligibility rules (age, residency)
- Credit search type and wording
- Key terms and full terms
- Overdraft offer rules
- Referral reply times
- Branch and post route details
- Support contact routes
- Data retention schedule

---

## Measures

| Measure | Target | How |
|---|---|---|
| Same-day account opening | ≥ 75% | Applications started → account number issued within 24 hours |
| Document capture success | ≥ 90% first or second attempt | Capture attempts per completed ID step |
| Abandonment at 'Before you start' | < 10% | Exit rate on the first screen |
| Referral reply on time | ≥ 95% | Referrals answered by the promised date |

Research: Usability tests with people holding non-standard address proof; Accessibility audit of camera flows with screen reader and switch users; Diary study of referred applicants over the waiting period.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
