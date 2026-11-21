---
name: benefit-application-experience
type: experience
journey: customer
persona: Applicant (29), single parent
domain: Public services · benefits
technology: Responsive web, mobile first
core: "1.4"
description: "Experience skill: Applying for a government benefit online — the best-practice customer journey for a applicant (29), single parent in Public services · benefits on Responsive web, mobile first. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying for a government benefit online

A resident checks they might be eligible, applies in short sections they can save and return to, uploads evidence from a phone, and knows when to expect a decision.

**Outcome** — An applicant completes and submits a benefit claim across one or more sessions with fewer than 10% of claims returned for missing evidence.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.4 components and patterns, and let the active design skill render them.

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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the page heading; Tab goes through the start button, then each eligibility question in order, and every choice works with arrow keys.
  - Announced (A11Y-S1): Title reads “Check if you can apply”; each question is a labelled group, and the result is announced politely, saying “you may be able to get” the benefit.
  - Errors (A11Y-E1): If an answer is missing, the error is written beside the question, linked to it, and earlier answers are kept; no account is needed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep sentences short, say about 30 minutes in full, and say “may be able to get”, never “will get”.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The resident opens the eligibility checker or asks the AI assistant whether it is worth applying.
  - Agent goal: Help the resident understand the questions so the checker's indication is accurate.
  - Agent actions: Says it is an AI assistant that can explain questions and words like 'household' and 'capital', and that it does not decide who gets the benefit. Explains questions when asked; the resident answers, and the checker result always says 'you may be able to get'.
  - Agent tone: Plain, short sentences at reading age 9; non-judgemental.
  - Agent type: Vertical public-service assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input (unsure what counts as income): explain with an example and let them answer. Constraint violation (asked 'will I get it?'): say only an officer decides and the checker is an indication.
  - Failure handover trigger: The resident is in crisis or asks for a person: urgent support routes and the phone or in-person service immediately, with the handover context package.
  - Data needs: Checker questions, help text, urgent support routes.
  - Agent memory: Short-term only; nothing kept before sign-in.
  - Regulatory classification: Public service; minimal risk for explaining questions; AI interaction disclosed; no automated eligibility decision.

### 2. Sign in

- Offer email or phone code; no complex password rules
- Explain the save period before starting
- **error:** That code has expired. We've sent a new one
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the sign-in heading; the email or phone field comes first, then Send code. Pasting the code, password managers and autofill (one-time-code) work, and there is no puzzle or memory test.
  - Announced (A11Y-S1): Title reads “Sign in to save your application”; “We've sent a code” is announced politely and the 28-day save period is read before the field.
  - Errors (A11Y-E1): An expired or wrong code is explained in text beside the field, a new one is sent, and the email or phone number typed is kept.
  - Time limits (A11Y-W1): Codes expire; the person is told the expiry time in the text and can request a new code at any time, with no countdown that blocks them.
  - Language (A11Y-L1): Explain that the application is kept for 28 days and avoid terms like “authenticate”; say “code” and “email address”.

### 3. Your answers

- One question per page for money and household questions
- Help text explains terms in place: what counts as household
- **error:** Enter an amount in pounds, for example 120.50
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the question heading, with one question per page; Tab goes to the choices, then Continue and Back, and Back keeps the answer.
  - Announced (A11Y-S1): Each page has its own title and the question is an h1 or legend; saved answers are announced politely as “Saved”.
  - Errors (A11Y-E1): An amount error such as “Enter an amount in pounds, for example 120.50” sits beside the field, is linked to it, listed in a summary, and the typed value is kept.
  - Time limits (A11Y-W1): Session warning appears at 25 minutes idle, at least 20 seconds before it ends, and one key press extends it; answers are autosaved.
  - Language (A11Y-L1): Explain terms such as “household” in place with help text, keep sentences short, and write amounts with the pound sign in full.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The applicant reaches a question, or asks what a word or question means.
  - Agent goal: Help the applicant answer accurately in short sessions without fear of mistakes.
  - Agent actions: Explains each question and why it is asked in plain words, and reminds them answers save as they go; the applicant gives every answer and the AI assistant never fills in money, household or health answers. If circumstances change it explains how to edit earlier answers.
  - Agent tone: Calm and reassuring; one idea at a time.
  - Agent type: Vertical public-service assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input: ask what the applicant means and give an example. Constraint violation (asked to choose an answer for them): explain the term but leave the answer to them. Data unavailable (help text not loading): say so and offer the phone line.
  - Failure handover trigger: The applicant is unsure after two explanations, applies for someone else, or asks for a person: the advice line or an assisted digital service, with the handover context package.
  - Data needs: Questions, help text, the applicant's saved answers.
  - Agent memory: Short-term: the current section. Episodic: saved answers for up to 28 days, then deleted.
  - Regulatory classification: Public service; special-category data may be involved (health, household); collect only what the decision uses; data protection rights apply.

### 4. Evidence

- List exactly which documents fit each answer
- Show a preview and let the applicant replace a blurry photo
- **error:** This photo is hard to read. Try again in good light
- **loading:** Uploading 1 of 3…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Evidence heading; Tab goes to a native Choose file button for each document, then Replace and Remove, and drag and drop is never required.
  - Announced (A11Y-S1): Upload progress such as “Uploading 1 of 3” is announced politely; a failed upload is announced assertively, and the preview has a text alternative naming the file.
  - Errors (A11Y-E1): A hard-to-read photo is flagged in text beside that file, linked from the summary, with a Replace button; the other uploaded files stay.
  - Time limits (A11Y-W1): Session warning at 25 minutes idle, at least 20 seconds before it ends, with an Extend button; uploads continue and work is never lost.
  - Language (A11Y-L1): List the exact documents that fit, such as “a payslip from the last 2 months”, and avoid terms like “proof of income” without explaining them.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The applicant uploads or photographs a document.
  - Agent goal: Make sure each document is readable and is the right type before the claim is sent.
  - Agent actions: Checks each file for blur and type and suggests which answer it supports, marked as a check by the AI assistant; the applicant decides whether to keep, replace or move it. If a document can't be got it explains the alternatives and that they can still submit.
  - Agent tone: Encouraging and specific: 'This photo is hard to read. Try again in good light.'
  - Agent type: Vertical document-check assistant; single.
  - Multi-agent handoff: AI assistant → document-check service → suggestion shown to the applicant.
  - Goal failure response: Low confidence on the document type: say it isn't sure and let the applicant choose. Data unavailable (check service down): accept the upload unchecked and say an officer will look at it. Partial completion: show which files are uploaded and which are still needed.
  - Failure handover trigger: Uploads fail after two retries or the applicant cannot get a required document: the advice line, with the handover context package.
  - Data needs: Uploaded files, the evidence list for the applicant's answers.
  - Agent memory: Short-term: the files in this session.
  - Regulatory classification: Public service; identity and financial documents are personal data; the check is about completeness only and never feeds the decision.

### 5. Check answers

- Every answer has a Change link back to its question
- Declaration in plain words, with consequences stated
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Check your answers heading; Tab goes through each answer's Change link, then the declaration checkbox and the Submit button, in reading order.
  - Announced (A11Y-S1): Each Change link has a hidden name such as “Change answer: who lives with you”; the declaration is read in full before Submit.
  - Errors (A11Y-E1): If the declaration box is unticked, the error is written beside it and linked from a summary; nothing is lost, and every answer can be corrected through its Change link before submitting.
  - Time limits (A11Y-W1): Session warning at 25 minutes idle, at least 20 seconds before it ends, with an Extend button; no answer is lost.
  - Language (A11Y-L1): State the consequences of a false declaration in plain words and avoid legal phrasing.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The applicant opens Check answers.
  - Agent goal: Help the applicant check everything before they declare.
  - Agent actions: Reads back the answers and points out any missing answer or evidence, explaining the declaration and what happens if circumstances change; the applicant ticks the declaration and submits themselves, with the AI assistant stepping back.
  - Agent tone: Neutral and steady; no fraud language.
  - Agent type: Vertical public-service assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Partial completion (evidence missing): list exactly what is missing and say they can still send. Constraint violation (asked to tick the declaration): say only the applicant can make it.
  - Failure handover trigger: The applicant is worried about the declaration or asks for a person: the advice line immediately, with the handover context package.
  - Data needs: All answers, the evidence list, the declaration wording.
  - Agent memory: Short-term: the review.
  - Regulatory classification: Public service; the declaration is a legal statement made by the applicant; automation only checks completeness.

### 6. Submitted

- Reference number, decision timescale and what may happen next
- How to report a change of circumstances
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the “Application sent” heading; Tab reaches the print or save link, then how to report a change, in that order.
  - Announced (A11Y-S1): The confirmation is announced politely with the reference number, which is also in text that can be copied, and the decision time of 4 weeks.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the reference number and “within 4 weeks” in full, and say what may happen next in short sentences.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The claim is submitted, or the applicant later asks about it.
  - Agent goal: Make sure the applicant knows the claim is in, who decides and what happens next.
  - Agent actions: Gives the reference, the decision timescale and that a trained officer decides; explains how to report a change of circumstances. When a decision arrives it explains the reasons in the letter and how to ask for a mandatory review or appeal, with the deadline.
  - Agent tone: Warm and factual.
  - Agent type: Vertical public-service assistant; single.
  - Multi-agent handoff: Case management system → notification service → AI assistant when the applicant asks.
  - Goal failure response: Data unavailable (status not loading): say so and give the reference and phone line. Constraint violation (asked to change the decision): say only an officer can and explain review.
  - Failure handover trigger: The applicant disagrees with a decision or asks for a person: a decision-maker or the advice line, with the handover context package.
  - Data needs: Claim reference, status, decision letter and reasons.
  - Agent memory: Episodic: the claim and its status, viewable by the applicant.
  - Regulatory classification: Significant decision about the applicant: made by an accountable officer, reasons given, review and appeal rights stated.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-W1: A session warning appears at 25 minutes idle, at least 20 seconds before it ends, with an Extend control, and no work is lost.
- A11Y-E1: An error summary at the top receives focus on submit and links to each field; each field also shows its error in text beside it, and answers are kept.
- A11Y-E2: Answers already given are never asked for again, including in the Check answers step.
- A11Y-A1: Sign-in allows paste, password managers and autofill, offers an email or phone code, and has no cognitive test.
- A11Y-L1: Questions use short sentences and plain terms, with help text in place and no walls of text, for readers with dyslexia.
- A11Y-E3: The Check answers step lets the applicant change any answer through its own Change link before the declaration is submitted.
- A11Y-H1: Help and contact details appear in the same place on every step, with save-and-return shown at each one.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Reading age 9: “Do you have savings over £6,000?” not “Do you hold capital exceeding…”
- Neutral, non-judgemental tone: “If your situation changes, tell us” rather than warnings
- Numbers and dates in a standard format with examples: “For example, 27 3 2026”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is an AI assistant, that it can explain questions and check documents, and that it never decides eligibility or the claim
- The applicant answers every question and makes the declaration themselves; sign-in codes are entered by the applicant and never seen by the AI assistant
- Document checks are suggestions marked as from the AI assistant; the applicant decides whether to keep or replace each file
- The claim is decided by a trained officer; the applicant is told before any automated check is applied, gets the main reasons with the decision, and can ask for a mandatory review
- Urgent support routes and a way to reach a person by phone or in person are visible at every step, and a request for a person is handed over immediately

## Edge cases

- Applicant's circumstances change mid-application — let them edit earlier answers and recalculate the evidence list
- Saved application about to expire — remind 3 days before by their chosen channel
- Applicant can't get a document — explain alternatives and that they can still submit
- Applying on behalf of someone — appointee route with authority evidence
- Applicant in crisis (no money for food) — show urgent support routes on every page

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Applicant — name, contact details, chosen sign-in method, preferred reminder channel · relates to Application · personal data
- Application — reference, status, saved until date, answers by topic, declaration made, submitted date · relates to Applicant, Evidence, Decision, Appointee · personal data
- Household member — relationship, age band, income where needed · relates to Application · personal data
- Evidence — document type, file, linked answer, check result from the AI assistant, kept or replaced by applicant · relates to Application · personal data
- Decision — outcome, reasons, decision-maker, date, review deadline · relates to Application, Review request · personal data
- Review request — reason, date, status · relates to Decision · personal data
- Appointee — name, authority evidence · relates to Application · personal data

### Systems it touches

- Identity and sign-in service — reads sign-in result · when down: The eligibility checker still works; the applicant is told they can't save yet and offered the phone service.
- Benefit case management system — reads application status, decision; writes submitted application, evidence links, change of circumstances · when down: Answers stay saved; submission waits and the applicant is told when to try again.
- Document store — reads uploaded files; writes evidence files · when down: Uploads pause; the applicant can carry on answering and add documents later.
- Document-check service — reads uploaded files; writes readability and type suggestions · when down: Files are accepted unchecked and an officer reviews them.
- Notification service — reads status changes, expiry dates; writes reminders, decision notices · when down: Messages are queued; the reference and status stay available on sign-in.

### Roles

- Applicant — check eligibility, answer questions, upload evidence, make the declaration, ask for a review
- Appointee — apply on behalf of someone with authority evidence
- Decision-maker (trained officer) — decide the claim, give reasons, request more evidence
- Advice line or assisted digital helper — help the applicant by phone or in person, receive handovers
- AI assistant — explain questions and terms, check documents for readability and type, as suggestions, point out missing answers or evidence, explain decisions and review rights, hand over to a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- AI assistant response time: under 3 seconds (range 1–5 seconds)
- Saved application kept: 28 days, reminder 3 days before deletion (range set by the service's published policy)
- Idle session warning: at 25 minutes, with Extend (range 20–30 minutes)
- Decision time: within 4 weeks (range set by the service standard)
- Review or appeal deadline: the legal deadline for the jurisdiction (range set by law)
- Claim record retention: the legal minimum for the jurisdiction (range set by law)

### Required inputs and configuration

- Eligibility checker questions and indication rules
- Questions by topic with help text and why each is asked
- Evidence list per answer and accepted alternatives
- Declaration wording
- Decision timescale and review and appeal routes
- Urgent support routes
- Phone and in-person help details
- Save period and reminder channels

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
