---
name: leave-request-experience
type: experience
journey: workflow
persona: Warehouse supervisor (58); manager Clare; HR administrator Tess
domain: HR · time off
technology: Mobile app and shared kiosk; web for managers and HR
core: "1.0"
description: "Experience skill: Requesting time off with balances, team cover and approval — the best-practice workflow for a warehouse supervisor (58); manager clare; hr administrator tess in HR · time off on Mobile app and shared kiosk; web for managers and HR. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Requesting time off with balances, team cover and approval

An employee checks their balance and team cover, requests time off, and their manager approves it with the information they need.

**Outcome** — Employees submit leave requests in under a minute and get a decision within two working days, with balances always correct.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Hamid, Warehouse supervisor (58); manager Clare; HR administrator Tess

> “Show me how many days I've got and whether anyone else is off, then just let me ask.”

Works shifts; plans leave around family abroad; reads English as a second language and uses a shared kiosk and his own phone.

**Goals**
- See his balance accurately
- Know if cover is available before asking
- Get a quick yes or no

**Pains**
- Balances that don't match payslips
- Requests lost or forgotten
- Jargon about accrual and carry-over

**Behaviours**
- Plans leave months ahead
- Checks on his phone during breaks
- Asks colleagues before requesting

**Access needs**
- English as a second language — plain words, translations
- Presbyopia — larger text on phone

---

## Domain — HR · time off

- Balances follow contract and statutory minimums; part-time entitlement is pro rata
- Reasons for sickness or family leave are optional and visible only to those who need them
- Managers see team cover, not other employees' leave reasons
- Statutory leave types (e.g. parental) follow their own notice rules and cannot be refused on cover grounds
- Decisions and changes are recorded and notified to the employee

Vocabulary to use: `balance`, `allowance`, `carry-over`, `team cover`, `half day`, `public holiday`

## Technology — Mobile app and shared kiosk; web for managers and HR

Inputs: Touch, Keyboard, Screen reader

- Integrates with rota and payroll
- Shift patterns, not just 9-to-5 days
- Kiosk sessions end after 2 minutes idle and show no personal data afterwards

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Balance** | See days available now and after planned leave | `dashboard · empty state` | “You have 14 days left this year · 3 expire on 31 March” |
| 2 | **Pick dates** | Choose dates and see team cover | `detail` | “2 of 8 on your shift are off that week” |
| 3 | **Request** | Send the request | `form` | “This uses 5 days · 9 left after” |
| 4 | **Decide** | Manager approves or declines | `inbox` | “Approve 5 days for Hamid, 10–14 Nov?” |
| 5 | **Confirmed** | Employee knows the outcome | `confirmation` | “Approved: Mon 10 – Fri 14 November · 9 days left” |

### 1. Balance

- Balance in days or hours as per contract
- Explain carry-over and expiry in plain words
- **empty:** No leave booked yet this year
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the balance heading; the balance is read first and carry-over and expiry details are a short list after it, with a button to see leave by hours.
  - Announced (A11Y-S1): Title "Your leave" is read; "14 days left, 3 expire on 31 March" is read as full text, and the shared kiosk reads the same.
  - Errors (A11Y-E1): When no leave is booked, the empty state is a text message with a Book leave button.
  - Time limits (A11Y-W1): On a shared kiosk, a warning appears at least 20 seconds before the 2-minute idle end, with a Continue button.
  - Language (A11Y-L1): Say days or hours as the contract states, give dates in full, and explain "carry-over" in a plain sentence.

### 2. Pick dates

- Calendar shows shifts and public holidays
- Team cover shown as counts, not names or reasons
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the date field; a calendar picker has a typed date alternative, and arrow keys move across days with the selected range announced.
  - Announced (A11Y-S1): The selected range is announced as "Monday 10 to Friday 14 November, 5 days", and the cover count is read, such as "2 of 8 are off".
  - Errors (A11Y-E1): A date error is written in text beside the field, such as "End date is before start date", and linked to it; typed dates are kept.
  - Time limits (A11Y-W1): On a shared kiosk, a warning appears at least 20 seconds before the idle end, with a Continue button.
  - Language (A11Y-L1): Write dates in full with the weekday, and show cover as a count, such as "2 of 8", not initials.

### 3. Request

- Leave type, dates, half days; reason optional
- Show days used before submitting
- **error:** You have 4 days left. Shorten the dates or choose unpaid leave.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the leave type; fields follow reading order, half days are a clear choice, and Send follows a review of days used and balance.
  - Announced (A11Y-S1): Title "Request leave" is read; "This uses 5 days, 9 left after" is read politely before Send, and an error summary is announced assertively.
  - Errors (A11Y-E1): The balance error, such as "You have 4 days left", is named in text beside the dates and linked to them; entered dates are kept, and Send shows a review step first.
  - Time limits (A11Y-W1): On a shared kiosk, a warning appears at least 20 seconds before the idle end, with a Continue button; entries are kept after continuing.
  - Language (A11Y-L1): Use plain words for leave types, spell out days used and days left, and avoid shift-code abbreviations.

### 4. Decide

- Request with balance, cover and rota impact on one screen
- Decline needs a reason and a suggested alternative
- **empty:** No requests waiting
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the request heading; request, balance, cover and rota impact follow in reading order, then Approve and Decline, with a reason field after Decline.
  - Announced (A11Y-S1): "Approve 5 days for Hamid, 10 to 14 November" is read as the heading, and the decision made is announced politely.
  - Errors (A11Y-E1): A missing decline reason is named in text beside the field and linked to it; the reason typed is kept, and each decision shows a confirm step with undo.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): State the dates in full and explain rota impact in a short sentence.

### 5. Confirmed

- Decision, dates and new balance in large text
- Add to calendar; cancel or change link
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "Approved" heading; Add to calendar and Change or cancel are separate buttons.
  - Announced (A11Y-S1): "Approved, Monday 10 to Friday 14 November, 9 days left" is read as the heading, and added to calendar is announced politely.
  - Errors (A11Y-E1): Cancel shows a confirm step and can be undone; a failed calendar add is named in text with a retry, and the leave is kept.
  - Time limits (A11Y-W1): On a shared kiosk, a warning appears at least 20 seconds before the idle end; no personal data remains afterwards.
  - Language (A11Y-L1): Show the decision, full dates and new balance in large text, and use the page language that matches the translation.

---

## Principles

1. Balances are accurate and explained
2. Cover information helps decisions without exposing private details
3. Requesting takes under a minute on a phone
4. Every decision is fast, recorded and explained
5. Statutory rights are applied by the system, not left to judgement

## Do / Don't

**Do**
- Show balance after the request before submitting
- Offer translations of the interface
- Let managers suggest alternative dates

**Don't**
- Show colleagues' leave reasons
- Use “accrual” without explaining it
- Leave requests pending without reminders

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: The date picker has a typed alternative and announces the selected range, and works by keyboard
- A11Y-R1: Text scales to 200% on mobile without loss of content or horizontal scrolling
- A11Y-W1: The kiosk warns at least 20 seconds before the 2-minute idle end and offers a Continue button, and typed entries are kept
- A11Y-L1: The page language is set correctly when translated, and plain words are used for leave terms
- A11Y-E3: Submitting shows days used and days left before Send, and cancel or change is available after approval with a confirm step
- A11Y-E1: Balance and date errors are named in text beside the field, linked, and the dates kept

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Use plain words: “days left”, not “remaining accrued entitlement”
- Decline copy is respectful and specific: “Declined — 3 people already off that week. 17–21 Nov looks clear.”
- Dates always include the weekday: “Mon 10 November”

## AI interactions

- No AI in approvals because leave decisions affect rights and must be made and explained by a manager; optional suggestion of clear weeks based on team cover only

## Edge cases

- Statutory leave requested at short notice — apply legal rules; cover is not a reason to refuse
- Balance disputed — show calculation and route to HR
- Request spans a public holiday — exclude it from days used and say so
- Manager away — request routes to deputy after 2 working days
- Shared kiosk left logged in — auto sign-out and clear screen

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to request | < 1 min | Median, mobile |
| Decision time | ≤ 2 working days | Submitted to decided, median |
| Balance queries to HR | −50% | Tickets about balances vs previous system |
| Request completion on kiosk | ≥ 90% | Started vs submitted |

Research: Usability tests with shift workers on kiosk and phone, including second-language speakers; Payroll reconciliation test of balance calculations; Manager interviews on cover information needs.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
