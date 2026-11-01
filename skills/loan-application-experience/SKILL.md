---
name: loan-application-experience
type: experience
journey: customer
persona: Delivery driver (41), self-employed
domain: Consumer credit
technology: Responsive web, desktop and mobile
core: "1.0"
description: "Experience skill: Applying for a personal loan with an eligibility check first — the best-practice customer journey for a delivery driver (41), self-employed in Consumer credit on Responsive web, desktop and mobile. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying for a personal loan with an eligibility check first

A customer checks their chances of approval without affecting their credit score, then applies with a clear total cost and time to think.

**Outcome** — At least 80% of full applications are approved because the soft check filtered out unsuitable ones, and every applicant sees the total amount repayable before agreeing.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

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

## AI interactions

- AI reads uploaded bank statements to categorise income and outgoings; the customer reviews and corrects the summary before it is used
- Final credit decisions are explainable, and the customer can ask for a human review

## Edge cases

- Applicant shows signs of financial difficulty — offer support and do not upsell
- Joint application where one person consents and the other has not yet — hold until both do
- Rate on full application differs from the eligibility result — explain and allow walking away
- Customer withdraws within 14 days — show the amount to repay and the date
- Identity mismatch between application and bank statements — refer to a person

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
