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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the page heading; Tab goes through the start button, then each eligibility question in order, and every choice works with arrow keys.
  - Announced (A11Y-S1): Title reads “Check if you can apply”; each question is a labelled group, and the result is announced politely, saying “you may be able to get” the benefit.
  - Errors (A11Y-E1): If an answer is missing, the error is written beside the question, linked to it, and earlier answers are kept; no account is needed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep sentences short, say about 30 minutes in full, and say “may be able to get”, never “will get”.

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

### 5. Check answers

- Every answer has a Change link back to its question
- Declaration in plain words, with consequences stated
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Check your answers heading; Tab goes through each answer's Change link, then the declaration checkbox and the Submit button, in reading order.
  - Announced (A11Y-S1): Each Change link has a hidden name such as “Change answer: who lives with you”; the declaration is read in full before Submit.
  - Errors (A11Y-E1): If the declaration box is unticked, the error is written beside it and linked from a summary; nothing is lost, and every answer can be corrected through its Change link before submitting.
  - Time limits (A11Y-W1): Session warning at 25 minutes idle, at least 20 seconds before it ends, with an Extend button; no answer is lost.
  - Language (A11Y-L1): State the consequences of a false declaration in plain words and avoid legal phrasing.

### 6. Submitted

- Reference number, decision timescale and what may happen next
- How to report a change of circumstances
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the “Application sent” heading; Tab reaches the print or save link, then how to report a change, in that order.
  - Announced (A11Y-S1): The confirmation is announced politely with the reference number, which is also in text that can be copied, and the decision time of 4 weeks.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the reference number and “within 4 weeks” in full, and say what may happen next in short sentences.

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
