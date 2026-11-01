---
name: purchase-order-approval-experience
type: experience
journey: workflow
persona: Lab manager (47); budget holder Grace; procurement officer Yusuf
domain: Finance · procurement
technology: Web app with email and mobile approval
core: "1.0"
description: "Experience skill: Requesting a purchase with budget checks and approvals — the best-practice workflow for a lab manager (47); budget holder grace; procurement officer yusuf in Finance · procurement on Web app with email and mobile approval. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Requesting a purchase with budget checks and approvals

A requester asks to buy something, the system checks budget, and the right approvers sign off in order before a purchase order is issued.

**Outcome** — Requests within budget are approved and turned into purchase orders within three working days, with no orders issued above approval limits.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Hana, Lab manager (47); budget holder Grace; procurement officer Yusuf

> “I need to know if the money's there before I spend a week chasing signatures.”

Orders equipment and consumables for a research lab; approvals depend on amount and cost centre.

**Goals**
- See budget availability before requesting
- Know who needs to approve and in what order
- Get the order placed before a deadline

**Pains**
- Requests sitting with one approver for days
- Finding out about budget problems at the end
- Re-entering supplier details every time

**Behaviours**
- Reuses previous requests as templates
- Attaches quotes as PDFs
- Chases approvers by email when stuck

**Access needs**
- ADHD — benefits from clear next steps and saved progress
- Uses a large external monitor

---

## Domain — Finance · procurement

- Approval chain is set by amount, category and cost centre; it cannot be skipped
- Budget is reserved when a request is approved and released if cancelled
- Approvers cannot approve requests they raised or where they declare a conflict
- Purchases above the tender threshold need multiple quotes
- Full audit trail kept for every change and decision

Vocabulary to use: `requisition`, `purchase order`, `cost centre`, `budget holder`, `approval chain`, `quote`

## Technology — Web app with email and mobile approval

Inputs: Keyboard, Pointer, File upload, Touch

- Live budget figures from the finance system
- Approval chains configured by admins
- Purchase orders sent to suppliers from the system

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Request** | Describe what to buy and attach quotes | `form` | “What do you need to buy?” |
| 2 | **Check budget** | See whether the cost centre can cover it | `detail` | “£8,400 of £12,000 available after this request” |
| 3 | **See chain** | Know who will approve | `progress` | “Approvals: Grace (budget holder) → Yusuf (procurement)” |
| 4 | **Approve** | Each approver reviews and decides | `inbox` | “Approve £3,600 for centrifuge rotor?” |
| 5 | **Issue PO** | Procurement creates and sends the order | `confirmation` | “Purchase order PO-20481 sent to Eastgate Scientific” |

### 1. Request

- Start from a previous request or catalogue item
- Autosave every change
- **error:** Add at least two quotes for purchases over £10,000
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first field; Tab follows the form, with 'start from a previous request' as the first action, and quote upload is a native file input.
  - Announced (A11Y-S1): Page title is Request; autosave is announced politely as 'Saved', and each field has a visible label.
  - Errors (A11Y-E1): The quote error is named beside the quote upload, listed in a summary at the top with links, and every entry stays.
  - Time limits (A11Y-W1): The session warns at least 2 minutes before it ends and can be extended; progress is autosaved.
  - Language (A11Y-L1): Use 'quote' with a one-line explanation and write amounts such as £10,000 in full.

### 2. Check budget

- Show available, reserved and this request
- Warn early if over budget, with options
- **error:** Budget figures unavailable — you can submit; the budget holder will check
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the budget heading; the available, reserved and this-request figures are read as a labelled list.
  - Announced (A11Y-S1): '£8,400 of £12,000 available after this request' is read in full; an over-budget warning is announced politely with options.
  - Errors (A11Y-E1): Missing budget figures are named in text, with a note that submitting is allowed; the request stays as entered.
  - Time limits (A11Y-W1): The session warns at least 2 minutes before it ends and can be extended.
  - Language (A11Y-L1): Write each figure with its label, and explain 'reserved' as 'already set aside'.

### 3. See chain

- List approvers in order with expected time
- Explain why each approver is needed
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the chain heading; approvers are an ordered list, and the current step is marked in text.
  - Announced (A11Y-S1): The list is read in order, 'Approvals: Grace, budget holder, then Yusuf, procurement', with expected times.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give each approver's role and why they are needed in one sentence.

### 4. Approve

- Request, quotes, budget and prior decisions on one screen
- Approve, reject with reason, or ask a question
- **empty:** Nothing waiting for your approval
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the request summary; Tab reaches quotes, budget and prior decisions, then Approve, Reject and Ask a question as separate buttons.
  - Announced (A11Y-S1): 'Approve £3,600 for centrifuge rotor?' is read in full; the decision is announced politely and the empty state is read as text.
  - Errors (A11Y-E1): Approval commits money, so the full request is shown first and Reject asks for a reason, kept if the person goes back; a decision can be changed before the order is issued.
  - Time limits (A11Y-W1): The session warns at least 2 minutes before it ends and can be extended.
  - Language (A11Y-L1): Say 'approve' and 'reject' plainly and keep amounts in full.

### 5. Issue PO

- PO number, supplier and delivery shown
- Requester notified with tracking
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; Tab reaches the PO number, supplier and tracking link in order.
  - Announced (A11Y-S1): 'Purchase order PO-20481 sent to Eastgate Scientific' is announced politely, and the number is read character by character.
  - Errors (A11Y-E1): Issuing the order is a commitment, so a review of supplier, amount and delivery comes first, and it can be cancelled until the supplier accepts.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain 'PO' as 'purchase order' at first use, and write the delivery date in full.

---

## Principles

1. Show budget and approvers before the request is submitted
2. Approval rules are applied by the system, not remembered by people
3. Every request shows where it is and who it's waiting on
4. Rejections and questions always come with a reason
5. Separation of duties is enforced

## Do / Don't

**Do**
- Reserve budget at approval
- Show expected approval time per step
- Let approvers ask a question without rejecting

**Don't**
- Let requesters split orders to avoid thresholds
- Hide the approval chain until after submission
- Lose a draft when the session ends

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Progress steps are an ordered list with the current step indicated by text.
- A11Y-E1: An error summary at the top of the form links to each field, and entries are kept.
- A11Y-W1: The session timeout warns at least 2 minutes before and lets the person extend it.
- A11Y-K1: Tables of quotes are navigable by keyboard and have row and column headers.
- A11Y-E3: Approving or issuing an order shows the full request first, and a decision can be changed before the order is issued.
- A11Y-E2: Details from a previous request or catalogue item are reused and never asked for twice.
- A11Y-L1: Amounts are written in full with currency, and 'PO' is expanded as 'purchase order'.
- A11Y-H1: Help and the finance contact appear in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Budget copy is concrete: “£8,400 of £12,000 available after this request”
- Approvers named by person and role: “Grace (budget holder)”
- Rejection reasons are written for the requester, not the system

## AI interactions

- Optional: suggest category and supplier from the description, which the requester confirms; flag possible split orders to procurement; approvals are always human

## Edge cases

- Order split to stay under a threshold — flag related requests to procurement
- Approver on leave — delegate named in advance; requester informed
- Budget changes between approval steps — re-check and notify current approver
- Supplier not on approved list — route to supplier onboarding first
- Price changes after approval beyond tolerance — re-approval required

---

## Measures

| Measure | Target | How |
|---|---|---|
| Request to PO | ≤ 3 working days | Median for in-budget requests |
| Orders above limit | 0 | Monthly audit of POs vs approval rules |
| Requests returned | < 10% | Rejected or sent back for missing information |
| Approver wait | < 1 working day | Median per approval step |

Research: Process mapping workshops with requesters and approvers; Usability tests of the request form with first-time requesters; Audit of past POs to find threshold-splitting patterns.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
