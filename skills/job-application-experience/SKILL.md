---
name: job-application-experience
type: experience
journey: customer
persona: Candidate (52), career changer, blind
domain: Employment · recruitment
technology: Responsive web
core: "1.0"
description: "Experience skill: Applying for a job with screening questions — the best-practice customer journey for a candidate (52), career changer, blind in Employment · recruitment on Responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying for a job with screening questions

A candidate applies with their CV, answers job-related screening questions, asks for adjustments, and gets honest status updates until a decision.

**Outcome** — A candidate submits an application in under 15 minutes and receives a status update at every stage, with no application left without an outcome after 30 days.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Yusuf, Candidate (52), career changer, blind

> “Tell me what you need, let my screen reader read the form, and tell me if it's a no.”

Spent 20 years in logistics; retrained in data analysis and is applying for junior analyst roles.

**Goals**
- Apply without re-typing his whole CV
- Request adjustments for interviews
- Hear back, even if it's a rejection

**Pains**
- Upload widgets that don't work with a screen reader
- Timed screening tests with no adjustment option
- Applications that disappear with no reply

**Behaviours**
- Uses a screen reader on a laptop
- Keeps a master CV and tailors a cover letter
- Tracks applications in a spreadsheet

**Access needs**
- Screen reader — every field labelled and errors announced
- Needs extra time on any timed assessment

---

## Domain — Employment · recruitment

- Screening questions must relate to the job's stated requirements; never ask about age, disability, religion, family status or other protected characteristics
- Equality monitoring is optional, kept separate from the application, and never seen by the hiring panel
- Candidates can request reasonable adjustments at any stage, and asking never affects the decision
- Where automated screening is used, tell candidates and offer human review (GDPR Article 22)
- State how long candidate data is kept and delete it at the end of that period

Vocabulary to use: `application`, `CV`, `screening question`, `reasonable adjustment`, `shortlist`, `offer`

## Technology — Responsive web

Inputs: Keyboard, Screen reader, File upload, Touch

- CV parsing for PDF and DOCX up to 5 MB, always editable after
- No time limits on screening questions; timed tests have an adjustment route
- Status changes trigger email within 1 hour

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Role** | Understand the job, pay and process before applying | `detail` | “4 stages · about 3 weeks · £28,000–£32,000” |
| 2 | **Your CV** | Add a CV and check what was read from it | `form` | “We've filled in your work history from your CV. Check it's right” |
| 3 | **Questions** | Answer screening questions tied to the role | `form + chips` | “Have you used SQL to answer a business question? Tell us about one example” |
| 4 | **Adjustments** | Ask for support for the next stages | `form` | “Is there anything that would help you at interview?” |
| 5 | **Submit** | Check and send the application | `confirmation` | “Application sent. We'll update you by Friday 7 November” |
| 6 | **Status** | Follow progress until a decision | `inbox` | “Your application has moved to interview” |

### 1. Role

- Salary range, location and stages listed up front
- Requirements split into essential and nice to have
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the role heading; headings split essential and nice-to-have requirements, and the Apply button is the first action after the summary.
  - Announced (A11Y-S1): The page title is the role; '4 stages, about 3 weeks, £28,000 to £32,000' is read as a list with the pay range in full.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the pay as £28,000 to £32,000 a year and explain each stage in a short sentence.

### 2. Your CV

- Upload is a real file input with a label and keyboard access
- Parsed fields shown for review; nothing submitted unseen
- **error:** We couldn't read this file. Try a PDF or Word document
- **loading:** Reading your CV…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the upload control, a native labelled file input; Tab then reaches each parsed field for review, and Enter on the button opens the file picker.
  - Announced (A11Y-S1): 'Reading your CV' is a polite status, then 'Work history filled in, please check it'; the failure message is assertive.
  - Errors (A11Y-E1): The unreadable file is named beside the upload with allowed types; nothing is submitted unseen, and fields already corrected stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'CV' with 'work history' in full and name accepted formats as PDF or Word document.

### 3. Questions

- Each question says which requirement it checks
- Free-text answers show a word guide, not a hard cut-off
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first question; each question names the requirement it checks, and chips toggle with Space.
  - Announced (A11Y-S1): Each question has a visible label; the word guide is read as 'about 150 words suggested', not as a limit.
  - Errors (A11Y-E1): A missing required answer is named beside the question and listed in a summary with links; typed answers are kept and never cut off.
  - Time limits (A11Y-W1): No time limit; any timed assessment can be extended.
  - Language (A11Y-L1): Ask one clear question at a time and avoid jargon such as 'competency' without an example.

### 4. Adjustments

- Optional and framed as normal
- Examples given: extra time, captioned video, written questions in advance
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the adjustments field; examples are a checkbox list with extra time, captioned video and written questions, and the section is labelled optional.
  - Announced (A11Y-S1): The heading is read first and the section is marked optional; saving is announced politely.
  - Errors (A11Y-E1): No error is possible for skipped input; entered requests are kept and can be edited before submitting.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Frame adjustments as normal, give examples in everyday words, and say who will read the answer.

### 5. Submit

- Summary with edit links before sending
- Confirms what happens next and by when
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the summary heading; Tab reaches each Edit link before the Send button, and Edit returns to the exact answer.
  - Announced (A11Y-S1): 'Application sent, we'll update you by Friday 7 November' is announced politely; focus moves to that heading.
  - Errors (A11Y-E1): The summary is shown for checking before sending, with Edit links; a failed send names the problem and keeps every answer.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the update date in full, such as Friday 7 November, and say what happens next in one sentence.

### 6. Status

- Every stage change sent as a message with a date
- Rejections are clear and kind, with feedback where possible
- **empty:** No updates yet. We expect to review applications by 7 November
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the latest message; messages are a list in date order, and each opens by Enter, with email copies as plain text.
  - Announced (A11Y-S1): The count of new messages is announced politely, and 'Your application has moved to interview' is read with its date.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write each stage change in plain words with a date, and keep rejections clear and kind.

---

## Principles

1. Ask only what predicts success in the role
2. Show the whole process and pay before the first field
3. Never lose an answer or a parsed CV
4. Every application gets an outcome
5. Adjustments are easy to request and never penalised

## Do / Don't

**Do**
- Let candidates review and edit parsed CV data
- Give a date for the next update
- Keep equality monitoring separate and optional

**Don't**
- Ask for date of birth or graduation year to screen
- Make candidates re-type what the CV already says
- Leave applications in an unexplained “in review” state

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Meets WCAG 2.2 AA; the CV upload is a native, labelled file input operable by keyboard.
- A11Y-E1: Errors are announced and linked from a summary that receives focus; typed answers are kept.
- A11Y-W1: No form question has a time limit, and any timed assessment can be extended.
- A11Y-S1: Status updates are readable as plain text emails and in the inbox, not image-only.
- A11Y-N1: Every field has a visible label, and each screening question states the requirement it checks.
- A11Y-E3: The submit step shows a summary with edit links before sending, and the parsed CV data is reviewed before use.
- A11Y-E2: Details read from the CV are never asked for again on later steps.
- A11Y-H1: Help and an adjustments contact appear in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Say what you need and why: “We ask this because the role involves daily reporting”
- Rejection copy is direct and respectful: “We won't be taking your application further this time”
- Avoid insider terms: “first interview” not “phone screen with TA”

## AI interactions

- Optional: parse the CV into fields for the candidate to check and edit
- Any ranking help for recruiters is advisory, explained to candidates, and every rejection is confirmed by a person

## Edge cases

- Candidate withdraws — one action, confirmed, data handled per retention policy
- Duplicate application to the same role — show the existing one instead
- Role closes while candidate is mid-application — save their answers and explain
- Candidate asks why they were rejected — route to a person with a response deadline
- Screen reader user can't complete a third-party test — provide an alternative format

---

## Measures

| Measure | Target | How |
|---|---|---|
| Application completion | ≥ 70% | Started → submitted |
| Time to apply | < 15 min | Median, including CV review |
| Applications with an outcome | 100% in 30 days | Applications with a final status / all received |
| Adjustment requests met | ≥ 95% | Requests fulfilled before the stage they apply to |

Research: Usability tests with screen reader and keyboard-only candidates; Bias review of screening questions with HR and legal; Candidate survey after outcome, including unsuccessful candidates.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
