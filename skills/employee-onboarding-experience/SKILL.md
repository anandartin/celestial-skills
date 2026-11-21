---
name: employee-onboarding-experience
type: experience
journey: workflow
persona: New starter (24); HR partner Joanne; manager Ade; IT technician Sven
domain: HR · onboarding
technology: Web app for staff; mobile-friendly portal for the starter
core: "1.4"
description: "Experience skill: Getting a new starter ready for day one across HR, manager and IT — the best-practice workflow for a new starter (24); hr partner joanne; manager ade; it technician sven in HR · onboarding on Web app for staff; mobile-friendly portal for the starter. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Getting a new starter ready for day one across HR, manager and IT

HR, the hiring manager and IT each complete their part of getting a new starter ready, and the starter knows what to expect before day one.

**Outcome** — Every new starter has signed paperwork, a working laptop and accounts, and a day-one plan before they arrive.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.4 components and patterns, and let the active design skill render them.

---

## Persona — Mei, New starter (24); HR partner Joanne; manager Ade; IT technician Sven

> “I want to turn up on Monday knowing where to go and with a laptop that works.”

Starting her first full-time role remotely-first, with one office day a week; uses a wheelchair and needs a step-free route.

**Goals**
- Know what to do before and on day one
- Have equipment and access ready
- Ask for adjustments without awkwardness

**Pains**
- Paperwork repeated across systems
- Arriving to no laptop or access
- Not knowing who to contact

**Behaviours**
- Completes tasks from her phone
- Reads everything ahead of time
- Asks questions in writing

**Access needs**
- Wheelchair user — needs step-free access and desk adjustments
- Prefers written instructions

---

## Domain — HR · onboarding

- Right-to-work and identity checks completed before start, following local law
- Collect only data needed for employment; sensitive data (health, diversity) is optional and stored separately
- Reasonable adjustments are requested confidentially and shared only with people who need them
- Accounts created with least privilege and tied to the start date
- Each task has an owner and a due date relative to the start date

Vocabulary to use: `new starter`, `start date`, `right to work`, `reasonable adjustment`, `equipment`, `access request`

## Technology — Web app for staff; mobile-friendly portal for the starter

Inputs: Touch, Keyboard, Document upload, E-signature

- Integrates with HR records, identity and device management
- Tasks generated from role and location templates
- Starter portal works before company accounts exist

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Welcome** | Starter sees what's ahead and who to contact | `onboarding` | “Welcome, Mei. Here's what happens before Monday 3 November.” |
| 2 | **Paperwork** | Starter completes forms and checks | `form` | “Tell us about any adjustments you need (optional, shared only with Ade and Facilities)” |
| 3 | **Equipment** | IT prepares laptop and accounts | `list + filters` | “Laptop for Mei Tan · due Thu 30 Oct” |
| 4 | **Manager prep** | Manager plans the first week | `form + chips` | “Add a buddy for Mei's first week” |
| 5 | **Readiness** | Everyone sees what's done and what's at risk | `dashboard · empty state` | “Mei Tan · 9 of 11 tasks done · Laptop at risk” |
| 6 | **Day one** | Starter arrives ready | `confirmation` | “Monday 9:30 · Meet Ade at the step-free entrance on Mill Street” |

### 1. Welcome

- Timeline of tasks before and on day one
- Named contacts with photos and roles
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the welcome heading; Tab reaches the timeline tasks in date order and each named contact, with phone and email as real links.
  - Announced (A11Y-S1): Page title is Welcome; the timeline is read as an ordered list with dates, and each contact is read with name and role.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write dates in full, such as Monday 3 November, and describe each task in a short sentence.

### 2. Paperwork

- Ask once; pre-fill from the offer
- Optional sections clearly marked optional
- **error:** This document has expired. Upload a current one.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first form field; Tab follows the visual order, optional sections are labelled 'optional', and e-signature works with keyboard and screen reader.
  - Announced (A11Y-S1): Page title is Paperwork; progress is announced politely as sections are saved, and the optional adjustments note says who will see it.
  - Errors (A11Y-E1): The expired document message is next to the upload, linked from a summary, with a phone-photo option; everything entered is kept, nothing is asked twice, and a review step comes before signing.
  - Time limits (A11Y-W1): No time limit; progress is saved between visits.
  - Language (A11Y-L1): Explain 'adjustments' with examples such as a height-adjustable desk, and say plainly who can see the answer.

### 3. Equipment

- Tasks filtered by due date and status
- Account creation tied to start date
- **empty:** No equipment tasks this week
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the filter group; Tab reaches each task row, and due date and status are read as text in every row.
  - Announced (A11Y-S1): 'Laptop for Mei Tan, due Thursday 30 October' is read in full; changing a filter announces the new task count politely.
  - Errors (A11Y-E1): No input on this step beyond filters; a filter that returns nothing shows the empty message in text.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Spell out 'IT' as 'IT team' once and write due dates in full.

### 4. Manager prep

- Template plan with buddy, meetings and first tasks
- Adjustments visible only as needed actions
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the buddy field; the buddy is chosen from a searchable list, and chips are toggled with Space.
  - Announced (A11Y-S1): The step title is read first; adding a buddy is announced politely as 'Buddy added for Mei's first week'.
  - Errors (A11Y-E1): A missing buddy or meeting is named beside the field; choices made stay, and a buddy can be changed afterwards.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Call the helper a 'buddy' with one line explaining it, and avoid internal HR terms.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The manager opens first-week planning and chooses to draft it from the role template.
  - Agent goal: Give the manager a ready first-week plan to edit, not a blank page.
  - Agent actions: Says it is an AI agent that drafts the plan from the role template and that the manager decides. Drafts meetings and first tasks, each starting with a verb and a date and marked as drafted by the AI agent until the manager accepts, edits or removes it; the buddy is left for the manager to choose, and nothing is sent until the manager confirms.
  - Agent tone: Practical and brief.
  - Agent type: Vertical HR workflow AI agent; single.
  - Multi-agent handoff: AI agent drafts, the manager confirms, then the onboarding system sends invites and the starter sees the plan.
  - Goal failure response: Data unavailable (no template for this role): say so and offer a blank plan. Ambiguous input (office days unknown): ask the manager. Constraint violation (asked to use adjustment details or pick a buddy by personal traits): decline and say the manager handles these. Goal drift (meetings set on remote days): flag and ask.
  - Failure handover trigger: The manager asks for a person, or the start date is at risk: a person in HR (the HR partner) immediately, with the handover context package.
  - Data needs: Role template, start date, office days, team calendar availability; no right-to-work, health or adjustment data.
  - Agent memory: Short-term: this draft. Procedural: the role template.
  - Regulatory classification: Employment context; drafting a plan is minimal risk, but AI that evaluates employees or decides about them would be high-risk under the EU AI Act, so it does neither; personal data kept to the minimum.

### 5. Readiness

- Overdue tasks flagged to owners and HR
- Readiness shown per starter
- **empty:** No new starters in the next 30 days
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the dashboard heading; each starter row is a link, and the at-risk items are reached directly through a list of tasks.
  - Announced (A11Y-S1): 'Mei Tan, 9 of 11 tasks done, Laptop at risk' is read in full; 'at risk' is a text label, not just colour.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write counts as '9 of 11 tasks' and name each at-risk task, avoiding the word 'RAG'.

### 6. Day one

- Day-one card with time, place, step-free route and first contact
- Login help that works without a company account
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the day-one card heading; the route link and contact number are real links reachable by keyboard, and help works without a company account.
  - Announced (A11Y-S1): The card is read as time, place, step-free route and first contact, 'Monday 9:30, meet Ade at the step-free entrance on Mill Street'.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep time and place in written form, such as 9:30 on Monday 3 November, and give directions as short steps.

---

## Principles

1. One owner and one due date for every task
2. Starter is never asked for the same information twice
3. Adjustments are confidential and actionable
4. Readiness is visible before day one, with risks flagged early
5. Access is least-privilege and tied to the start date

## Do / Don't

**Do**
- Send the starter a clear day-one card
- Flag at-risk tasks five working days ahead
- Let starters ask questions in writing

**Don't**
- Share adjustment details beyond those who need them
- Create accounts weeks before the start date
- Make diversity questions mandatory

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-A1: The starter portal signs in without a memory or puzzle test; pasting, password managers and a magic link work.
- A11Y-K1: The e-signature can be completed with a keyboard and a screen reader, without drawing.
- A11Y-E2: Details from the offer are pre-filled and never asked for twice across the forms.
- A11Y-E1: An expired document is named beside the upload with a text explanation, and the phone-photo upload explains format limits in text.
- A11Y-C2: Dashboard status uses text labels and patterns as well as colour.
- A11Y-H1: A named contact and help link appear in the same place on every step, and work before a company account exists.
- A11Y-L1: Instructions are written in short plain sentences, with dates and times in full.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Write to the starter warmly and plainly: “Here's what happens before Monday”
- Mark optional questions in the label, not only with an asterisk
- Tasks for staff start with a verb and a date: “Order laptop by Thu 30 Oct”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI agent is used only to draft the first-week plan from the role template, and the draft says it was made by an AI agent
- Every item in the draft is marked as drafted by the AI agent until the manager accepts, edits or removes it; nothing reaches the starter or any calendar until the manager confirms, and the plan can be changed afterwards
- There is no AI in right-to-work and identity checks, paperwork, signatures, reasonable adjustments, equipment or account access; people make these decisions, and the AI agent never sees documents or adjustment details
- The manager, not the AI agent, chooses the buddy and any adjustment-related actions in the plan
- Onboarding data is never used by the AI agent to judge or evaluate the starter, which would be high-risk under the EU AI Act; anyone can ask HR for a person at any point

## Edge cases

- Start date moves — all task dates and account activation shift automatically
- Right-to-work check incomplete by start — escalate to HR; start may be delayed per law
- Offer withdrawn — revoke access and cancel equipment tasks
- Equipment delivery delayed — loan device prepared and starter told
- Starter needs adjustments not yet in place — manager and facilities alerted with deadline

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- New starter — name, role, start date, location, office days, contact details · relates to Offer, Onboarding task, First-week plan · personal data
- Offer — role, salary, start date, manager · relates to New starter · personal data
- Right-to-work check — document type, checked by, date, result · relates to New starter · personal data
- Adjustment request — what would help, who can see it, status · relates to New starter · personal data
- Onboarding task — task, owner, due date relative to start, status · relates to New starter
- Equipment — item, status, delivery date, loan device · relates to New starter
- Access request — system, access level, activation date, approved by · relates to New starter · personal data
- First-week plan — buddy, meetings, first tasks, drafted by AI agent, accepted by · relates to New starter · personal data

### Systems it touches

- HR records — reads offer, role, start date; writes starter record · when down: The starter portal keeps answers and syncs later.
- Right-to-work and identity check service — reads check result; writes check record · when down: HR checks by hand within the legal deadline.
- E-signature service — reads signature status; writes signed documents · when down: Signing waits; HR is told and the starter sees the delay.
- Device management — reads device status; writes device enrolment · when down: IT prepares a loan device and the starter is told.
- Identity and access management — reads access profiles; writes accounts active from the start date · when down: Accounts are created by hand on the start date.
- Onboarding task system — reads templates, tasks; writes tasks, plan, flags · when down: Owners use the last exported task list.
- Calendar — reads availability; writes first-week meetings · when down: The manager sends invites by hand.

### Roles

- New starter — complete paperwork and sign, upload documents, request adjustments confidentially, ask questions in writing
- HR partner — run right-to-work checks, see all tasks and readiness, handle adjustments, receive handovers
- Hiring manager — plan the first week, accept or edit the AI agent's draft, choose the buddy, see adjustments as needed actions only
- IT technician — prepare equipment, create least-privilege accounts tied to the start date
- Facilities — prepare step-free access and desk adjustments
- AI agent — draft the first-week plan from the role template, marked until the manager accepts it, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Day-one readiness: 95% of starters with laptop, accounts and plan (range 90–100%)
- Tasks overdue on the start date: Under 2% (range 0–5%)
- Starter confidence at end of week one: 4.5 out of 5 (range 4–5)
- Information asked twice: 0 fields (range 0)
- At-risk tasks flagged: 5 working days before start (range 3–10 working days)
- Right-to-work and onboarding records kept: The legal minimum for the jurisdiction (range Set by employment and immigration law)

### Required inputs and configuration

- Role and location task templates
- Right-to-work rules for the jurisdiction
- Least-privilege access profiles per role
- Equipment catalogue and loan device process
- Office location, step-free route and day-one contacts
- Who may see adjustment requests
- Whether the AI agent's plan drafting is switched on

---

## Measures

| Measure | Target | How |
|---|---|---|
| Day-one readiness | ≥ 95% | Starters with laptop, accounts and plan on day one |
| Overdue tasks at start | < 2% | Tasks incomplete on start date |
| Starter confidence | ≥ 4.5 / 5 | Survey at end of week one |
| Duplicate data requests | 0 | Fields asked more than once, form audit |

Research: Interviews with recent starters about their first week; Service blueprint workshop with HR, managers, IT and facilities; Accessibility testing of the starter portal with disabled users.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
