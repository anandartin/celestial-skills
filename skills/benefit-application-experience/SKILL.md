---
name: benefit-application-experience
type: experience
journey: customer
persona: Applicant (29), single parent
domain: Public services · benefits
technology: Responsive web, mobile first
core: "1.0"
description: "Experience skill: Applying for a government benefit online — the best-practice customer journey for a applicant (29), single parent in Public services · benefits on Responsive web, mobile first. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying for a government benefit online

A resident checks they might be eligible, applies in short sections they can save and return to, uploads evidence from a phone, and knows when to expect a decision.

**Outcome** — An applicant completes and submits a benefit claim across one or more sessions with fewer than 10% of claims returned for missing evidence.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Priya, Applicant (29), single parent

> “I can do this in ten-minute bursts. Just don't make me start again every time.”

Recently reduced her hours to care for her son; applies from her phone after he is asleep.

**Goals**
- Find out quickly if it's worth applying
- Apply in short sessions without losing work
- Know what evidence is accepted

**Pains**
- Long forms that time out
- Unclear words like 'household' and 'capital'
- Fear of being penalised for an honest mistake

**Behaviours**
- Uses a mid-range phone with limited data
- Photographs documents on the kitchen table
- Reads help text before answering money questions

**Access needs**
- Dyslexia — short sentences, readable fonts, no walls of text
- ADHD — clear progress and save at every step

---

## Domain — Public services · benefits

- Eligibility checker gives an indication only; the decision is made by a trained officer, never by an automated system alone
- Collect only the information needed to decide the claim; state why each sensitive question is asked
- Applicant signs a declaration that answers are true, with plain explanation of what happens if they change
- Every decision letter states the reasons and how to ask for a review or appeal, with the deadline
- Saved applications are kept for a stated period (e.g. 28 days) and then deleted, with a reminder before

Vocabulary to use: `claim`, `eligibility`, `evidence`, `household`, `declaration`, `mandatory review`

## Technology — Responsive web, mobile first

Inputs: Touch, Camera for document photos, Screen reader, Keyboard

- Autosave after every answered question
- Uploads accept JPG, PNG, PDF up to 10 MB, compressed on device
- Session warning at 25 minutes idle with option to extend; work is never lost

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Check eligibility** | Find out in two minutes if applying makes sense | `onboarding` | “You may be able to get this benefit. Applying takes about 30 minutes, and you can save as you go” |
| 2 | **Sign in** | Create a way to come back to the application | `auth card` | “We'll keep your application for 28 days” |
| 3 | **Your answers** | Answer questions one topic at a time | `form` | “Does anyone else live with you?” |
| 4 | **Evidence** | Upload the documents that prove your answers | `form + chips` | “Add a photo of a payslip from the last 2 months” |
| 5 | **Check answers** | Review everything before declaring | `detail` | “I confirm that the information I have given is true” |
| 6 | **Submitted** | Know the claim is in and when to expect a decision | `confirmation` | “Application sent. Your reference is HB-482-917. We'll decide within 4 weeks” |

### 1. Check eligibility

- Max 6 questions, no account needed
- Result says “you may be able to get” never “you will get”

### 2. Sign in

- Offer email or phone code; no complex password rules
- Explain the save period before starting
- **error:** That code has expired. We've sent a new one

### 3. Your answers

- One question per page for money and household questions
- Help text explains terms in place: what counts as household
- **error:** Enter an amount in pounds, for example 120.50

### 4. Evidence

- List exactly which documents fit each answer
- Show a preview and let the applicant replace a blurry photo
- **error:** This photo is hard to read. Try again in good light
- **loading:** Uploading 1 of 3…

### 5. Check answers

- Every answer has a Change link back to its question
- Declaration in plain words, with consequences stated

### 6. Submitted

- Reference number, decision timescale and what may happen next
- How to report a change of circumstances

---

## Principles

1. Save every answer the moment it is given
2. One idea per page for difficult questions
3. Explain why sensitive information is needed
4. Humans decide; automation only checks completeness
5. Always show how to get help by phone or in person

## Do / Don't

**Do**
- Tell applicants how long it takes before they start
- Accept phone photos of documents
- Give a reference number on every screen after submission

**Don't**
- Ask for information the decision doesn't use
- Use “fraud” language in neutral help text
- End the session without warning and a way to extend

## Accessibility

- Meets WCAG 2.2 AA; timeout warning gives at least 20 seconds to extend (2.2.1)
- Error summary at the top links to each field and receives focus on submit (3.3.1)
- Previously entered answers are not asked again (3.3.7 redundant entry)
- Sign-in allows paste and password managers; no cognitive tests (3.3.8)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Reading age 9: “Do you have savings over £6,000?” not “Do you hold capital exceeding…”
- Neutral, non-judgemental tone: “If your situation changes, tell us” rather than warnings
- Numbers and dates in a standard format with examples: “For example, 27 3 2026”

## AI interactions

- Optional: check uploaded documents for blur and correct type before submission, with the applicant deciding whether to keep them
- No AI in eligibility decisions because benefit decisions must be made and explained by an accountable officer

## Edge cases

- Applicant's circumstances change mid-application — let them edit earlier answers and recalculate the evidence list
- Saved application about to expire — remind 3 days before by their chosen channel
- Applicant can't get a document — explain alternatives and that they can still submit
- Applying on behalf of someone — appointee route with authority evidence
- Applicant in crisis (no money for food) — show urgent support routes on every page

---

## Measures

| Measure | Target | How |
|---|---|---|
| Completion rate | ≥ 75% | Started → submitted within 28 days |
| Returned for missing evidence | < 10% | Claims sent back for more documents |
| Help contact rate | < 15% | Applicants who phone or visit for help during the claim |
| Satisfaction | ≥ 80% | Post-submission question, rated satisfied or very satisfied |

Research: Usability tests with applicants who have low digital confidence, on their own phones; Assisted digital sessions in community centres; Accessibility audit including dyslexia and cognitive load review.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
