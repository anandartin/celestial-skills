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

### 2. Check eligibility

- State 'This won't affect your credit score' above the button
- Income field allows 'varies' with an average
- **loading:** Checking your eligibility

### 3. Your result

- Show personal APR and likelihood band in words
- If unlikely, give reasons and alternatives, not just 'declined'
- **empty:** Not eligible: explain the main reason and free debt-advice routes

### 4. Full application

- Choose open banking or upload statements
- Separate, unticked consent for the hard search
- **error:** Upload failed — say file type and size limits and keep other answers

### 5. Agree and sign

- Total repayable, fees and 14-day withdrawal right on one screen
- Download the agreement before and after signing
- **loading:** Preparing your agreement

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

## Accessibility

- Meets WCAG 2.2 AA; likelihood bands use text labels, not red/green alone (1.4.1)
- Calculator sliders have number inputs as an alternative (2.5.7)
- Figures read in full by screen readers: 'six thousand pounds'
- Error summary links to each field; focus moves to it on submit

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
