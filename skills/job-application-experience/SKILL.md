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

### 2. Your CV

- Upload is a real file input with a label and keyboard access
- Parsed fields shown for review; nothing submitted unseen
- **error:** We couldn't read this file. Try a PDF or Word document
- **loading:** Reading your CV…

### 3. Questions

- Each question says which requirement it checks
- Free-text answers show a word guide, not a hard cut-off

### 4. Adjustments

- Optional and framed as normal
- Examples given: extra time, captioned video, written questions in advance

### 5. Submit

- Summary with edit links before sending
- Confirms what happens next and by when

### 6. Status

- Every stage change sent as a message with a date
- Rejections are clear and kind, with feedback where possible
- **empty:** No updates yet. We expect to review applications by 7 November

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

## Accessibility

- Meets WCAG 2.2 AA; file upload is a native, labelled control operable by keyboard
- Errors announced and linked from a summary that receives focus (3.3.1, 4.1.3)
- No time limits on form questions; any timed assessment can be extended (2.2.1)
- Status updates readable as plain text emails, not image-only

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
