---
name: bank-account-opening-experience
type: experience
journey: customer
persona: New customer (24), first full-time job
domain: Retail banking
technology: Mobile web and native app (iOS / Android)
core: "1.0"
description: "Experience skill: Opening a current account online for a new customer — the best-practice customer journey for a new customer (24), first full-time job in Retail banking on Mobile web and native app (iOS / Android). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Opening a current account online for a new customer

A new customer opens a current account on their phone, proves who they are once, and knows exactly what happens if a check needs more time.

**Outcome** — At least 75% of applicants who start get a working account number the same day, with every identity check explained before it happens.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

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

### 2. Your details

- Address lookup with manual entry always available
- Explain why three years of address history is needed
- **error:** Name the field and the fix; keep everything already typed

### 3. Prove it's you

- Show a live frame guide and say what's wrong: glare, blur, cropped
- Allow upload from files as an alternative to live capture
- **error:** If capture fails three times, offer upload or an assisted video check
- **loading:** Checking your ID — this usually takes under a minute

### 4. Check and agree

- Key terms summary above the full document
- Overdraft is off by default and offered separately
- **error:** If the terms fail to load, block acceptance and offer a retry

### 5. Decision

- Show account number and sort code on screen when approved
- If referred, say what is being checked and by when
- **error:** Referred: 'We need to check one more thing. We'll reply by Monday 27 October.'
- **loading:** Running final checks — you can close this and we'll message you

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

## Accessibility

- Meets WCAG 2.2 AA; camera screens have text instructions announced via a live region
- Capture button and alternative upload link both ≥ 48px
- Focus moves to the first error with an error summary at the top (3.3.1)
- Accessible authentication (3.3.8): no memory puzzles; passcode fields allow paste and password managers

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plain words: 'proof of address' not 'POA'; 'check' not 'verification event'
- Error copy names the fix: 'Your passport photo is blurred — try again in brighter light'
- Dates in full: 'Thursday 30 October', never '30/10'

## AI interactions

- AI-assisted document reading pre-fills name and date of birth; the customer confirms each field and can edit it
- No AI decides to decline: any automated refer or fail outcome is reviewable by a person on request

## Edge cases

- Name on ID differs from typed name (recent marriage, transliteration) — offer a 'my name has changed' route
- No fixed address or recently arrived in the country — show accepted alternatives and the branch route
- Identity fraud match — refer quietly without exposing the reason, and give a contact route
- Applicant under 18 — route to the youth account journey before collecting data
- App closed mid-capture — resume at the same step

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
