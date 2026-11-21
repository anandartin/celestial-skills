---
name: loan-application-experience
type: experience
journey: customer
persona: Delivery driver (41), self-employed
domain: Consumer credit
technology: Responsive web, desktop and mobile
core: "1.2"
description: "Experience skill: Applying for a personal loan with an eligibility check first — the best-practice customer journey for a delivery driver (41), self-employed in Consumer credit on Responsive web, desktop and mobile. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying for a personal loan with an eligibility check first

A customer checks their chances of approval without affecting their credit score, then applies with a clear total cost and time to think.

**Outcome** — At least 80% of full applications are approved because the soft check filtered out unsuitable ones, and every applicant sees the total amount repayable before agreeing.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.2 components and patterns, and let the active design skill render them.

---

## Persona — Diego, Delivery driver (41), self-employed

> “Don't mark my credit file just so I can see if I'd get it.”

Wants £6,000 to replace his van's engine; income varies month to month.

**Goals**
- Find out if he's likely to be accepted before a hard search
- Know the monthly payment and total cost
- Get the money within days

**Pains**
- Rejections that dent his credit score
- Forms that assume a salary
- Small print about fees

**Behaviours**
- Compares offers across several lenders
- Fills forms at home in the evening
- Keeps bank statements as PDFs

**Access needs**
- Spanish is first language — prefers plain English
- Colour vision deficiency (red-green)

---

## Domain — Consumer credit

- Eligibility checks use a soft search that does not affect the credit score; say so before it runs
- A full application uses a hard search — disclose it and get consent before submitting
- Show representative APR, monthly payment, total repayable and fees before agreement (consumer credit disclosure)
- Creditworthiness and affordability assessed on income and outgoings, not only credit score
- Customer has a 14-day right to withdraw after signing; explain how

Vocabulary to use: `eligibility check`, `APR`, `total repayable`, `term`, `soft search`, `hard search`

## Technology — Responsive web, desktop and mobile

Inputs: Keyboard, Touch, File upload (bank statements)

- Open banking connection optional, never required
- Quote held for at least 30 days
- E-signature with a downloadable copy

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Loan calculator** | Choose amount and term and see the cost | `detail` | “£6,000 over 4 years: £151.20 a month, £7,257.60 in total.” |
| 2 | **Check eligibility** | Give basic details for a soft check | `form` | “Check my chances — this won't affect your credit score” |
| 3 | **Your result** | See a personal rate or why not | `feedback` | “You're likely to be accepted at 9.4% APR.” |
| 4 | **Full application** | Add income proof and consent to a hard search | `form` | “I agree to a full credit search, which will show on my credit file.” |
| 5 | **Agree and sign** | Read key terms and sign | `confirmation` | “Signed. £6,000 will reach your account by Wednesday 29 October. You can withdraw until Saturday 8 November.” |

### 1. Loan calculator

- Monthly payment and total repayable update together
- Representative APR next to the figures it applies to
- **error:** Amount out of range — show the minimum and maximum
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the amount field; the sliders have number inputs beside them, and arrow keys move each by one step.
  - Announced (A11Y-S1): Announces the amount and term in words, such as 'six thousand pounds over four years', then monthly and total cost politely.
  - Errors (A11Y-E1): An out-of-range amount shows the minimum and maximum in text beside the field and keeps the entry.
  - Time limits (A11Y-W1): No time limit; the quote is held for 30 days.
  - Language (A11Y-L1): Write amounts in full as 'six thousand pounds' and explain 'total amount payable' in plain words.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The applicant opens the calculator or asks the AI assistant about borrowing.
  - Agent goal: Help the applicant see the true cost of different amounts and terms.
  - Agent actions: Says it is an AI assistant that can explain costs and help with the application, and that it does not make credit decisions. Answers questions such as "what if I pay over 3 years?" with monthly payment, total repayable and representative APR together. Never suggests borrowing more.
  - Agent tone: Plain and numbers-first; no jargon.
  - Agent type: Vertical lending assistant; single.
  - Multi-agent handoff: AI assistant reads the pricing service.
  - Goal failure response: Constraint violation (amount out of range): give the minimum and maximum. Ambiguous input ("a bit more"): ask for the amount.
  - Failure handover trigger: The applicant mentions money worries or asks for a person: the lending support team with the handover context package.
  - Data needs: Loan products, representative APR, term limits.
  - Agent memory: Short-term: the amount and term.
  - Regulatory classification: Consumer credit advertising and cost disclosure; minimal AI risk at this step.

### 2. Check eligibility

- State 'This won't affect your credit score' above the button
- Income field allows 'varies' with an average
- **loading:** Checking your eligibility
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first field; labels are visible and the soft check statement is read before the button.
  - Announced (A11Y-S1): Announces the heading and the credit-score reassurance; 'Checking your eligibility' is polite.
  - Errors (A11Y-E1): Errors are text beside each field and in a summary with links; focus moves to the summary and answers stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'a soft check, which does not affect your credit score' in plain words.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The applicant starts the eligibility form.
  - Agent goal: Help the applicant give accurate details for the soft check.
  - Agent actions: Helps state variable income as an average, filled from what the applicant says and marked as filled by the AI for them to confirm. Says before the check that it is a soft search that won't affect their credit score and that an automated system will give an indication. The applicant presses Check.
  - Agent tone: Reassuring and plain.
  - Agent type: Vertical lending assistant; single.
  - Multi-agent handoff: AI assistant prepares the form, then the eligibility engine and soft credit search run after the applicant presses Check.
  - Goal failure response: Ambiguous input (income varies a lot): ask for the last 12 months' average. Data unavailable (credit reference service down): say the check can't run now and save the answers.
  - Failure handover trigger: The applicant asks for a person: the lending support team with the handover context package.
  - Data needs: Basic details, stated income and outgoings.
  - Agent memory: Short-term: the form, saved.
  - Regulatory classification: Creditworthiness assessment is high-risk under the EU AI Act; the applicant is told before an automated check runs; data protection.

### 3. Your result

- Show personal APR and likelihood band in words
- If unlikely, give reasons and alternatives, not just 'declined'
- **empty:** Not eligible: explain the main reason and free debt-advice routes
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the result heading; the likelihood is text, then the rate, then Continue.
  - Announced (A11Y-S1): Announces 'You're likely to be accepted at 9.4% APR' politely; the bands use text labels.
  - Errors (A11Y-E1): If not eligible, the reason sits in text with free debt-advice routes.
  - Time limits (A11Y-W1): The quote is held for 30 days; the date is written in full.
  - Language (A11Y-L1): Spell out 'annual percentage rate' on first use and avoid colour-only likely or unlikely.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The eligibility result is returned.
  - Agent goal: Help the applicant understand the result and their options.
  - Agent actions: Explains the likelihood band and personal APR in words. If unlikely, gives the main reasons from the decision engine, never invented ones, and free debt-advice routes. Says a person can review the result.
  - Agent tone: Respectful and specific; no pressure.
  - Agent type: Vertical lending assistant; single.
  - Multi-agent handoff: AI assistant reads the result and reason codes from the eligibility engine.
  - Goal failure response: Low confidence explaining a reason: quote the reason as given and offer a person. Goal drift (applicant wants to borrow less, assistant keeps the original amount): re-run the calculator with the new amount when asked.
  - Failure handover trigger: The applicant disputes the result, shows signs of financial difficulty or asks for a review: a credit specialist immediately with the handover context package.
  - Data needs: Result, likelihood band, APR, main reasons.
  - Agent memory: Episodic: the result and quote, held for 30 days.
  - Regulatory classification: High-risk creditworthiness assessment: main reasons given; human review available; automated-decision safeguards.

### 4. Full application

- Choose open banking or upload statements
- Separate, unticked consent for the hard search
- **error:** Upload failed — say file type and size limits and keep other answers
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first field; the consent checkbox is labelled and the upload control has a file button.
  - Announced (A11Y-S1): Announces the heading and consent text in full; upload progress is polite.
  - Errors (A11Y-E1): An upload failure says the file type and size limits next to the control, linked to it, and other answers stay; consent is not pre-ticked.
  - Time limits (A11Y-W1): No time limit; answers are saved.
  - Language (A11Y-L1): Say what 'a full credit search' means and that it shows on the credit file.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The applicant continues to the full application.
  - Agent goal: Get an accurate picture of income and outgoings without retyping statements.
  - Agent actions: If the applicant uploads statements or connects their bank themselves, the AI assistant sorts income and outgoings into a summary marked as prepared by the AI; the applicant reviews and corrects every line before it is used. Says the full search will show on the credit file and that an automated assessment, checked by people, will follow. The applicant ticks the unticked consent themselves and submits.
  - Agent tone: Careful and plain.
  - Agent type: Vertical lending assistant; orchestrated with the statement-reading service.
  - Multi-agent handoff: Statement reader categorises; AI assistant presents the summary; after the applicant confirms and submits, the decision engine and hard search run.
  - Goal failure response: Data unavailable (upload fails): say the file type and size limits and keep the answers. Low confidence on a transaction: leave it uncategorised and ask. Constraint violation (identity mismatch with statements): stop and refer to a person.
  - Failure handover trigger: Identity mismatch, joint applicant not yet consenting, or the applicant asks: a credit specialist immediately with the handover context package, because credit and identity are involved.
  - Data needs: Bank statements or open banking data, income and outgoings summary, consent record.
  - Agent memory: Short-term: the application. No statement data is kept beyond the stated retention.
  - Regulatory classification: High-risk creditworthiness assessment under the EU AI Act; open banking consent by the applicant; data protection (minimisation).

### 5. Agree and sign

- Total repayable, fees and 14-day withdrawal right on one screen
- Download the agreement before and after signing
- **loading:** Preparing your agreement
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the key-terms heading; the agreement is read in order, then the sign button and a download copy link.
  - Announced (A11Y-S1): Announces 'Preparing your agreement' politely, then the heading and key terms as a list.
  - Errors (A11Y-E1): Signing is a distinct action after reviewing the terms; a downloadable copy is given and withdrawal is possible until Saturday 8 November.
  - Time limits (A11Y-W1): Withdrawal is possible until Saturday 8 November, stated in full on the page and in the email.
  - Language (A11Y-L1): Give the amount and dates in full: £6,000 by Wednesday 29 October.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The offer and agreement are ready, or the applicant is declined.
  - Agent goal: Help the applicant understand exactly what they are signing, or why not.
  - Agent actions: Answers questions about the agreement and points to the clause; the official key terms are always shown in full. Explains the 14-day withdrawal right and how to use it. Never urges signing now. The applicant signs themselves. If declined or the rate changed, gives the main reasons and how to ask a person to review.
  - Agent tone: Calm and unhurried.
  - Agent type: Vertical lending assistant; single.
  - Multi-agent handoff: AI assistant reads the agreement from the lending system; the e-signature service runs when the applicant signs.
  - Goal failure response: Data unavailable (agreement fails to load): block signing and retry. Constraint violation (rate differs from the eligibility result): explain and let the applicant walk away. Partial completion (signed but payout not scheduled): show it is signed and when the money will arrive.
  - Failure handover trigger: A decline, a changed rate the applicant disputes, payout failure, or the applicant asks: a credit specialist immediately with the handover context package.
  - Data needs: Final offer, agreement, total repayable, withdrawal date, decision reasons.
  - Agent memory: Episodic: the agreement and dates, for later questions.
  - Regulatory classification: Credit agreement with legal effect: pre-contract information, right to withdraw, high-risk creditworthiness decision with human review and main reasons.

---

## Principles

1. Soft check before hard search, always stated
2. Total cost shown wherever the monthly payment is
3. Affordability over approval: the system can suggest borrowing less
4. Time to think: nothing pushes same-session signing
5. Rejections explain why and where to get free help

## Do / Don't

**Do**
- Show total repayable next to the monthly figure
- Let self-employed people state variable income
- Offer free debt-advice routes on every decline

**Don't**
- Pre-tick the credit search consent
- Use countdowns or 'offer ends today'
- Show only the monthly payment

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C2: Likelihood bands use text labels, not red or green alone (WCAG 1.4.1).
- A11Y-K1: Calculator sliders have number inputs as an alternative (WCAG 2.5.7).
- A11Y-L1: Figures are read in full by screen readers, for example 'six thousand pounds'.
- A11Y-E1: The error summary links to each field and focus moves to it on submit.
- A11Y-E3: The agreement is reviewed before signing, a copy can be downloaded, and withdrawal is possible until 8 November.
- A11Y-W1: The 30-day quote hold and the 8 November withdrawal date are written in full.
- A11Y-R1: At 200% zoom and 320px width the calculator and forms reflow without horizontal scrolling.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Numbers first, then words: '£151.20 a month for 4 years'
- Say 'won't affect your credit score' instead of 'soft footprint'
- Declines are respectful and specific: 'Your outgoings are high compared with your income'

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is AI before helping, and every figure or category it filled (such as income from bank statements) is marked as filled by the AI until the applicant confirms it
- The applicant is told before each automated check or credit decision, whether a search is soft or hard, and gives the hard-search consent themselves
- The AI assistant never decides credit; a declined or changed offer gives the main reasons, free debt-advice routes and a way to ask a person to review it
- Total repayable is shown wherever a monthly payment is, and the AI assistant never pushes more borrowing, urgency or same-session signing
- Signing, open banking connection, sign-in and codes are done by the applicant; the AI assistant never sees credentials or codes
- Signs of financial difficulty lead to support from a person, never an upsell

## Edge cases

- Applicant shows signs of financial difficulty — offer support and do not upsell
- Joint application where one person consents and the other has not yet — hold until both do
- Rate on full application differs from the eligibility result — explain and allow walking away
- Customer withdraws within 14 days — show the amount to repay and the date
- Identity mismatch between application and bank statements — refer to a person

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Applicant — name, date of birth, address, employment type, contact details · relates to Application · personal data
- Quote — amount, term, APR, monthly payment, total repayable, held until · relates to Application · personal data
- Eligibility check — soft search date, likelihood band, main reasons · relates to Application · personal data
- Income and outgoings — monthly income (average if variable), outgoings by category, prepared by AI assistant, corrected by applicant · relates to Application · personal data
- Application — status, hard search consent, documents, joint applicant · relates to Applicant, Credit decision, Agreement · personal data
- Credit decision — outcome, main reasons, automated or by a person, review requested, reviewer · relates to Application · personal data
- Agreement — terms, signed date, withdrawal deadline, payout date · relates to Application · personal data

### Systems it touches

- Credit reference service — reads credit file (soft and hard search); writes search footprint · when down: Save the application and say when the check can run; never switch search type.
- Credit decision and affordability engine — reads application, credit file, income and outgoings; writes decisions, reason codes · when down: Save the application and refer it to a credit specialist with a reply date.
- Open banking connection — reads transactions, with the applicant's consent · when down: Offer statement upload instead.
- Statement reading service — reads uploaded statements; writes categorised summary for review · when down: Let the applicant enter income and outgoings by hand.
- Lending system — reads products, pricing; writes agreements, loan accounts · when down: Hold the quote and tell the applicant when to come back.
- E-signature service — reads agreement; writes signed agreement · when down: Block signing; the quote stays held.
- Payments system; writes loan payout · when down: Tell the applicant the new payout date and alert the lending team.

### Roles

- Applicant — check eligibility, confirm or correct AI-prepared figures, consent to the hard search, connect their bank or upload statements, sign or walk away, withdraw within 14 days, ask for a human review
- Credit specialist — review automated decisions and referrals, decide with recorded reasons, support applicants in financial difficulty
- Lending support adviser — answer questions, receive handovers, arrange support
- Credit risk and compliance owner — set decision rules and affordability policy, monitor AI accuracy and fairness, keep the conformity records for high-risk AI
- AI assistant — explain costs and terms, fill form fields from what the applicant says, marked as AI-filled, prepare an income and outgoings summary for review, explain results and reasons, works at most in Advisory mode; never decides credit

### Default targets (the product confirms or replaces them)

- AI assistant reply time: Under 3 seconds (range 1–5 seconds)
- Eligibility result: Under 1 minute (range Up to 5 minutes)
- Human review of a decision: 2 working days (range 1–5 working days)
- Quote held: 30 days (range At least 30 days)
- Service availability: 99.9% (range 99.5–99.95%)
- Credit decision and agreement records kept: The legal minimum for the jurisdiction (range Set by consumer credit and AI law)

### Required inputs and configuration

- Loan products, amount and term limits
- Pricing and representative APR
- Eligibility and affordability rules
- Soft and hard search wording
- Decline reason wording
- Free debt-advice routes
- Withdrawal process
- Financial difficulty support process
- Human review process and time

---

## Measures

| Measure | Target | How |
|---|---|---|
| Approval rate after soft check | ≥ 80% | Full applications approved / submitted |
| Total-cost comprehension | ≥ 90% | Applicants correctly stating total repayable in survey |
| Application time | < 12 min median | Eligibility start → signed |
| Arrears at 6 months | < 3% | Loans with a missed payment after 6 months |

Research: Usability sessions with self-employed and variable-income applicants; Comprehension testing of APR and total cost wording; Review of decline reasons with debt advisers.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
