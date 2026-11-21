---
name: job-application-experience
type: experience
journey: customer
persona: Candidate (52), career changer, blind
domain: Employment · recruitment
technology: Responsive web
core: "1.1"
description: "Experience skill: Applying for a job with screening questions — the best-practice customer journey for a candidate (52), career changer, blind in Employment · recruitment on Responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Applying for a job with screening questions

A candidate applies with their CV, answers job-related screening questions, asks for adjustments, and gets honest status updates until a decision.

**Outcome** — A candidate submits an application in under 15 minutes and receives a status update at every stage, with no application left without an outcome after 30 days.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.1 components and patterns, and let the active design skill render them.

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
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The candidate opens the role or asks the AI assistant about it.
  - Agent goal: Help the candidate understand the job, pay and process before applying.
  - Agent actions: Says it is an AI assistant that can read their CV into the form and explain the process, and that people make every hiring decision. Explains essential and nice-to-have requirements, pay, stages and timeline; says whether any automated screening is used and how to ask for human review.
  - Agent tone: Direct and respectful; no insider terms.
  - Agent type: Vertical recruitment assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input: ask what the candidate wants to know. Constraint violation (asked whether they'll get the job): say a person decides and point to the requirements.
  - Failure handover trigger: The candidate asks for a person or about adjustments before applying: the recruitment team, with the handover context package.
  - Data needs: Job description, pay range, stages, timeline.
  - Agent memory: Short-term.
  - Regulatory classification: Employment; AI interaction disclosed; minimal risk for explaining the role.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The candidate uploads a CV.
  - Agent goal: Fill the application from the CV accurately so nothing is retyped.
  - Agent actions: Reads the CV into work history and skills, every field marked as filled by the AI assistant until the candidate accepts or edits it; the candidate reviews each field. It never extracts or keeps age, graduation year or other protected characteristics.
  - Agent tone: Brief and checkable: 'Check this is right.'
  - Agent type: Vertical recruitment assistant; CV-parsing service behind it.
  - Multi-agent handoff: AI assistant → CV-parsing service → filled fields shown to the candidate.
  - Goal failure response: Data unavailable (file can't be read): say which types work and keep any fields already corrected. Low confidence on a date or title: leave it blank and ask. Goal drift (merged two jobs): show both and let the candidate split them.
  - Failure handover trigger: Parsing fails twice: let the candidate type the fields and offer the recruitment team, with the handover context package.
  - Data needs: CV file, parsed fields.
  - Agent memory: Short-term: the parsed CV for this application; reused later only if the candidate chooses.
  - Regulatory classification: Employment; personal data; data minimisation; protected characteristics not extracted.

### 3. Questions

- Each question says which requirement it checks
- Free-text answers show a word guide, not a hard cut-off
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first question; each question names the requirement it checks, and chips toggle with Space.
  - Announced (A11Y-S1): Each question has a visible label; the word guide is read as 'about 150 words suggested', not as a limit.
  - Errors (A11Y-E1): A missing required answer is named beside the question and listed in a summary with links; typed answers are kept and never cut off.
  - Time limits (A11Y-W1): No time limit; any timed assessment can be extended.
  - Language (A11Y-L1): Ask one clear question at a time and avoid jargon such as 'competency' without an example.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The candidate reaches a screening question.
  - Agent goal: Help the candidate understand what each question checks so they can answer well.
  - Agent actions: Explains which requirement each question checks and can point to relevant parts of their CV; the candidate writes every answer, and the AI assistant does not write or change answers.
  - Agent tone: Encouraging and plain.
  - Agent type: Vertical recruitment assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input: explain the question with an everyday example. Constraint violation (asked to write the answer): explain it can help them plan but the answer must be theirs. Data unavailable: say the help isn't loading and keep their answers.
  - Failure handover trigger: A question seems unrelated to the job or discriminatory, or the candidate asks for a person: the recruitment team, with the handover context package.
  - Data needs: Screening questions and the requirement each checks.
  - Agent memory: Short-term.
  - Regulatory classification: Employment; screening questions must relate to the job; no protected characteristics.

### 4. Adjustments

- Optional and framed as normal
- Examples given: extra time, captioned video, written questions in advance
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the adjustments field; examples are a checkbox list with extra time, captioned video and written questions, and the section is labelled optional.
  - Announced (A11Y-S1): The heading is read first and the section is marked optional; saving is announced politely.
  - Errors (A11Y-E1): No error is possible for skipped input; entered requests are kept and can be edited before submitting.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Frame adjustments as normal, give examples in everyday words, and say who will read the answer.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The candidate reaches the adjustments step or mentions a need.
  - Agent goal: Make asking for adjustments easy and normal.
  - Agent actions: Explains that adjustments never affect the decision and gives examples such as extra time or written questions; the candidate writes any request, which goes to a person in the recruitment team. The AI assistant never infers a disability and keeps the request apart from screening.
  - Agent tone: Warm and matter-of-fact.
  - Agent type: Vertical recruitment assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input: ask what would help. Constraint violation (a third-party test can't be adjusted): say a person will arrange an alternative format.
  - Failure handover trigger: Any adjustment request, or the candidate asks for a person: the recruitment team, with the handover context package, without sharing it with the hiring panel's screening.
  - Data needs: Adjustment request.
  - Agent memory: Short-term; the request is stored by the recruitment team, not in the AI assistant's memory.
  - Regulatory classification: Health information is special-category data; kept separate from screening; equality law applies.

### 5. Submit

- Summary with edit links before sending
- Confirms what happens next and by when
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the summary heading; Tab reaches each Edit link before the Send button, and Edit returns to the exact answer.
  - Announced (A11Y-S1): 'Application sent, we'll update you by Friday 7 November' is announced politely; focus moves to that heading.
  - Errors (A11Y-E1): The summary is shown for checking before sending, with Edit links; a failed send names the problem and keeps every answer.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the update date in full, such as Friday 7 November, and say what happens next in one sentence.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The candidate moves to submit.
  - Agent goal: Send exactly the application the candidate intends.
  - Agent actions: Shows the full application with edit links and highlights anything still marked as filled by the AI assistant; the candidate sends it themselves. Says what happens next and by when, whether any automated step is used, that a person decides, and how to withdraw.
  - Agent tone: Clear and calm.
  - Agent type: Vertical recruitment assistant; applicant tracking system.
  - Multi-agent handoff: AI assistant prepares the summary → the candidate sends → applicant tracking system records it.
  - Goal failure response: Constraint violation (unaccepted fields): ask the candidate to accept or change them. Full task failure (system down): don't send, keep every answer, say so. Constraint violation (duplicate application): show the existing one.
  - Failure handover trigger: Sending fails twice or the role closes mid-application: the recruitment team, with the handover context package.
  - Data needs: Complete application.
  - Agent memory: Episodic: the application joins the candidate's history.
  - Regulatory classification: Employment; EU AI Act high-risk if AI screens or ranks; notice before any automated step; audit record of what the AI assistant filled.

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
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The application changes stage, or the candidate asks about it.
  - Agent goal: Keep the candidate informed until there is an outcome.
  - Agent actions: Explains each stage with a date and what comes next; on a rejection, which a person has confirmed, it gives the main reasons or feedback provided and how to ask a person to review any automated part.
  - Agent tone: Kind and direct.
  - Agent type: Vertical recruitment assistant; single.
  - Multi-agent handoff: Applicant tracking system → notification service → AI assistant when the candidate asks.
  - Goal failure response: Data unavailable (status not loading): say so and give the expected update date. Constraint violation (asked why they were rejected beyond the given reasons): route to a person with a response deadline.
  - Failure handover trigger: The candidate asks why they were rejected, disputes an outcome, or asks for a person: the recruitment team with a response deadline, with the handover context package.
  - Data needs: Stage, dates, outcome, reasons or feedback.
  - Agent memory: Episodic: the application history, viewable and deletable by the candidate under the retention policy.
  - Regulatory classification: Employment decision is significant: human decision, reasons, human review of any automated decision (data protection automated-decision rights).

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

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is an AI assistant, that it can read the CV into the form and explain the process, and that a person makes every hiring decision
- CV fields the AI assistant fills are marked until the candidate accepts or changes them; nothing is submitted unseen
- AI in screening or ranking candidates is high-risk under the EU AI Act: candidates are told before any automated step, a person confirms every rejection, and the candidate can ask for human review
- Adjustment requests go to a person, never affect the decision, and the AI assistant never infers disability or other protected characteristics
- Every stage change reaches the candidate with a date, and a request for feedback or a person is handed over immediately

## Edge cases

- Candidate withdraws — one action, confirmed, data handled per retention policy
- Duplicate application to the same role — show the existing one instead
- Role closes while candidate is mid-application — save their answers and explain
- Candidate asks why they were rejected — route to a person with a response deadline
- Screen reader user can't complete a third-party test — provide an alternative format

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Candidate — name, contact details, CV, work history, skills · relates to Application · personal data
- Role — title, pay range, location, essential requirements, nice-to-have requirements, stages, closing date · relates to Application, Screening question
- Application — reference, stage, submitted date, next update date, outcome, reasons, filled by AI assistant flags · relates to Candidate, Role, Screening answer, Adjustment request · personal data
- Screening question — question, requirement it checks · relates to Role
- Screening answer — answer text · relates to Application, Screening question · personal data
- Adjustment request — what would help, stage, status · relates to Application · personal data
- Equality monitoring response — optional answers · personal data

### Systems it touches

- Applicant tracking system — reads role, stage, outcome; writes application, withdrawal · when down: Answers are kept; sending waits and the candidate is told.
- CV-parsing service — reads CV file; writes suggested fields · when down: The candidate types the fields; nothing is lost.
- Assessment platform — reads assessment status; writes adjusted settings · when down: The recruitment team arranges an alternative format or date.
- Equality monitoring store; writes optional monitoring answers · when down: Monitoring is skipped; the application is unaffected.
- Notification service — reads stage changes; writes status emails · when down: Messages are queued and status stays current on sign-in.

### Roles

- Candidate — apply, accept or edit CV fields, answer questions, request adjustments, withdraw, ask for human review and feedback
- Recruiter — manage applications, arrange adjustments, send updates, receive handovers
- Hiring manager or panel — shortlist, interview, decide and confirm every rejection
- AI assistant — explain the role and process, fill fields from the CV, marked until accepted, explain screening questions, explain status and outcomes, hand over to a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- AI assistant response time: under 3 seconds (range 1–5 seconds)
- Status email after a stage change: within 1 hour (range 15 minutes–24 hours)
- Outcome for every application: within 30 days (range 14–45 days)
- Reply to 'why was I rejected?': within 10 working days (range the legal deadline for the jurisdiction or sooner)
- Candidate data retention: the stated period, within the legal maximum for the jurisdiction (range set by law and the published policy)

### Required inputs and configuration

- Role details, pay and stages
- Screening questions mapped to requirements, reviewed for bias
- Whether any automated screening or ranking is used, and the human review route
- Adjustment examples and the team that handles them
- Retention policy for candidate data
- Rejection and feedback wording

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
