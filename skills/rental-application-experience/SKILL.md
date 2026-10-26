---
name: rental-application-experience
type: experience
journey: customer
persona: Prospective tenant (26), relocating for work
domain: Housing · lettings
technology: Responsive web
core: "1.0"
description: "Experience skill: Applying to rent a home with fair, published criteria — the best-practice customer journey for a prospective tenant (26), relocating for work in Housing · lettings on Responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying to rent a home with fair, published criteria

A prospective tenant sees the criteria before applying, adds references and consents to checks, and receives a decision with reasons.

**Outcome** — An applicant sees every criterion before paying or sharing data and receives a decision with stated reasons within 5 working days.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Lin, Prospective tenant (26), relocating for work

> “I don't mind being checked. I mind not knowing what you're checking or why I was turned down.”

Moving cities for a new hospital job; has no local rental history and a new employment contract.

**Goals**
- Know before applying whether she meets the criteria
- Show income through her new contract
- Get a fast, fair answer

**Pains**
- Hidden fees and vague criteria
- Being asked for a previous landlord she doesn't have
- Silence after sharing sensitive documents

**Behaviours**
- Applies to several homes in one week
- Applies on her phone between shifts
- Saves documents in one folder to reuse

**Access needs**
- Colour vision deficiency — status must not rely on colour

---

## Domain — Housing · lettings

- Publish all screening criteria (income ratio, checks, pets, occupancy) before the applicant provides data or pays anything
- Apply the same criteria to every applicant; never screen on protected characteristics under fair housing and equality law
- Show all fees and deposits up front and follow local limits on application fees and holding deposits
- Get explicit consent before credit, identity or reference checks, naming who runs each check
- If declined because of a check, give the reason and how to see or dispute the report (adverse action notice)

Vocabulary to use: `application`, `reference`, `guarantor`, `holding deposit`, `income ratio`, `adverse action notice`

## Technology — Responsive web

Inputs: Touch, Camera for document photos, Keyboard

- Reference requests sent by email with a secure single-use link
- Documents encrypted at rest and deleted 6 months after an unsuccessful decision
- Integrates with a credit-check provider only after recorded consent

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Criteria** | See what is checked and what it costs before applying | `detail` | “To rent here, household income should be about 2.5× the rent: £3,000 a month” |
| 2 | **Your details** | Give household, income and move date | `form` | “When would you like to move in?” |
| 3 | **References** | Add people who can vouch for you | `form + chips` | “Who can we ask for a reference?” |
| 4 | **Checks consent** | Agree to the checks with full knowledge | `form` | “I agree to a credit check by Fairline Checks Ltd” |
| 5 | **Submit** | Send the application and know the timeline | `confirmation` | “Application sent. You'll have a decision by Wednesday 29 October” |
| 6 | **Decision** | Hear the outcome and the reasons | `inbox` | “We can't offer this home because the income criterion wasn't met. Here's how to ask about it” |

### 1. Criteria

- All criteria and fees on one screen
- Alternatives stated: guarantor, larger deposit where lawful

### 2. Your details

- Ask only what the criteria use
- Accept an offer letter or contract as income evidence
- **error:** Enter a date after today

### 3. References

- Offer reference types: previous landlord, employer, character
- Show each reference's status as it changes
- **empty:** No previous landlord? Add an employer or a guarantor instead

### 4. Checks consent

- Each check named with provider and what it shows
- Consent is a separate, unticked choice

### 5. Submit

- Restate fee paid, references pending and decision date
- Explain how to withdraw

### 6. Decision

- Declines state the criterion not met and how to dispute
- Approvals give next steps and deadlines

---

## Principles

1. Criteria visible before data or money
2. Same rules for every applicant, applied the same way
3. Consent before every check
4. Every decision comes with a reason
5. Keep and delete data on a published schedule

## Do / Don't

**Do**
- Show the income ratio as an actual amount
- Offer alternatives to a landlord reference
- Tell the applicant when each reference responds

**Don't**
- Ask about family plans, religion or nationality beyond legal right-to-rent checks
- Charge a fee before showing criteria
- Decline without a reason

## Accessibility

- Meets WCAG 2.2 AA; reference status shown with text labels and icons, not colour alone (1.4.1)
- Consent checkboxes are separate, labelled and unticked (3.3.2)
- Document upload works with keyboard and screen reader
- Focus moves to the first error with a linked error summary

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Name every party: “Fairline Checks Ltd will see your credit file”
- Give money as amounts: “Holding deposit: £230, returned if…”
- Decisions are factual and respectful: “The income criterion wasn't met” not “You failed”

## AI interactions

- No AI in screening or decisions because tenancy decisions must be explainable and free from proxy discrimination; a person applies the published criteria

## Edge cases

- Reference never replies — remind once, then let the applicant swap the referee
- Two applicants meet criteria — published tie-break rule (e.g. first complete application) applied and stated
- Applicant uses a housing voucher or benefit — treat as income where the law requires
- Applicant disputes a credit report — pause decision and explain how to correct it
- Home let to someone else mid-application — stop, refund any lawful fee, delete data on request

---

## Measures

| Measure | Target | How |
|---|---|---|
| Criteria viewed before applying | 100% | Applications where criteria screen was shown first |
| Decision time | ≤ 5 working days | Median, submit → decision |
| Declines with reasons | 100% | Decline notices that name the criterion |
| Applicant trust | ≥ 80% | Post-decision question “The process was fair”, including declined applicants |

Research: Interviews with renters who have thin or no rental history; Fair housing legal review of criteria and decline copy; Usability test of reference and consent steps on phones.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
