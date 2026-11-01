---
name: expense-approval-experience
type: experience
journey: workflow
persona: Field engineer (33); manager Omar; finance officer Lin
domain: Finance · expenses
technology: Mobile app for claimants and approvers; web for finance
core: "1.0"
description: "Experience skill: Submitting an expense with a receipt for approval and payout — the best-practice workflow for a field engineer (33); manager omar; finance officer lin in Finance · expenses on Mobile app for claimants and approvers; web for finance. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Submitting an expense with a receipt for approval and payout

An employee submits an expense with a receipt, their manager approves it, and finance pays it, with every step visible to everyone involved.

**Outcome** — Valid expenses are paid within five working days of submission, with fewer than 5% sent back for missing information.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Keisha, Field engineer (33); manager Omar; finance officer Lin

> “I paid for it out of my own pocket. I just want to know when I'll get it back.”

Travels between sites, photographs receipts on her phone; Omar approves on the move; Lin reconciles weekly.

**Goals**
- Submit a receipt in under a minute
- See where her claim is and when it will be paid
- Avoid being sent back for small mistakes

**Pains**
- Faded paper receipts that won't scan
- Claims stuck with an absent manager
- Rejections without a clear reason

**Behaviours**
- Submits claims at the end of each trip
- Checks status from her phone
- Keeps paper receipts until paid

**Access needs**
- Colour blindness — red/green
- Often uses the app one-handed outdoors

---

## Domain — Finance · expenses

- Receipts are required above the policy threshold and retained for the legally required period
- Approver cannot approve their own expense; approval limits apply by role
- Payment details are stored and shown masked; changes need re-verification
- Tax amounts are captured separately where reclaimable
- Every decision is logged with who, when and why

Vocabulary to use: `claim`, `receipt`, `category`, `policy limit`, `approver`, `reimbursement`

## Technology — Mobile app for claimants and approvers; web for finance

Inputs: Camera, Touch, Keyboard, Email forwarding of receipts

- Receipt capture works offline and syncs later
- Integrates with payroll or accounts payable
- Multi-currency with dated exchange rates

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Capture** | Photograph the receipt and pull out the details | `AI approval` | “We read £42.80 on 14 Oct — is that right?” |
| 2 | **Submit** | Add purpose and category and send | `form` | “Over the £30 meal limit — add a reason to continue” |
| 3 | **Approve** | Manager reviews and decides | `inbox` | “Approve £42.80 for Keisha Brown?” |
| 4 | **Pay** | Finance checks and schedules payment | `table + totals` | “18 claims · £2,140.55 · 2 flagged” |
| 5 | **Track** | Everyone sees status and payment date | `progress` | “Approved by Omar · Paid on Friday 24 October” |

### 1. Capture

- Read amount, date, merchant and tax; claimant confirms each
- Low-confidence fields marked for checking
- **error:** We couldn't read this receipt. Enter the details or retake the photo.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the camera button; Tab reaches the upload and manual-entry options, and each is one-handed reachable.
  - Announced (A11Y-S1): Announces the step title, then the read amount and date as '£42.80 on 14 October' with a Yes or Edit choice; the read failure is assertive.
  - Errors (A11Y-E1): If the receipt cannot be read, the message sits next to the form and offers manual entry or retake; any typed details stay.
  - Time limits (A11Y-W1): No time limit; capture works offline and syncs later.
  - Language (A11Y-L1): Write amounts and dates in full, such as £42.80 on 14 October, and say 'read' not 'scanned by AI'.

### 2. Submit

- Policy limits shown before submission, not after
- Required fields marked in text
- **error:** Add a business purpose
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first field; the reason field is labelled and the Submit button is last, reachable by switch access.
  - Announced (A11Y-S1): Announces the heading, the meal limit note as help text, and politely 'Claim submitted'.
  - Errors (A11Y-E1): Errors such as 'Add a business purpose' sit next to the field with a link in a summary; the typed values stay.
  - Time limits (A11Y-W1): No time limit; the draft is kept.
  - Language (A11Y-L1): Say 'meal limit of £30' in full and explain why a reason is needed.

### 3. Approve

- Receipt image, policy checks and history on one screen
- Reject needs a reason; send back is separate from reject
- **empty:** No claims waiting for you
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first claim; the Approve and Reject buttons are separate, with a gap, and the item opens by Enter.
  - Announced (A11Y-S1): Announces 'Approve £42.80 for Keisha Brown?' with the buttons; the outcome is announced politely.
  - Errors (A11Y-E1): Approving moves money, so a short confirm step or undo follows each decision, and a rejection asks for a reason that is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name the claimant and write the amount in full; say 'Reject' rather than 'Decline with prejudice'.

### 4. Pay

- Batch view with totals by currency and cost centre
- Flags duplicates and policy exceptions
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the totals heading; the table has captions and header cells, and the flagged rows can be reached by Tab.
  - Announced (A11Y-S1): Announces '18 claims, £2,140.55, 2 flagged' politely; flags are read as text.
  - Errors (A11Y-E1): Flagged claims are marked with an icon and the word 'Flagged'; scheduling payment needs a review step before it is confirmed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the total in pounds and pence and say 'flagged for review' in plain words.

### 5. Track

- Stages: submitted, approved, scheduled, paid
- Expected payment date shown once scheduled
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the status heading; steps in the tracker are a list with text status for each.
  - Announced (A11Y-S1): Announces 'Approved by Omar, paid on Friday 24 October' politely when status changes.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the payment date in full with the weekday.

---

## Principles

1. Status is visible to everyone at every stage
2. Policy rules are shown before submission, not discovered at rejection
3. Machine-read fields are always confirmed by a person
4. Separation of duties: no one approves their own claim
5. Every send-back says exactly what to fix

## Do / Don't

**Do**
- Show expected payment dates
- Let approvers delegate during leave
- Keep the receipt image with the claim for audit

**Don't**
- Auto-approve claims based on AI reading alone
- Reject without a reason
- Show full bank details on screen

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C2: Status uses text and icon, never colour alone (WCAG 1.4.1).
- A11Y-K1: Camera capture has a manual-entry alternative and an upload option.
- A11Y-T1: Approve and Reject buttons are at least 44×44px and separated to avoid mis-taps (WCAG 2.5.8).
- A11Y-P1: Totals tables have header cells and captions for screen readers (WCAG 1.3.1).
- A11Y-E3: Approving and scheduling payment each have a confirm step or undo before money moves.
- A11Y-E1: Errors are named in text next to the field and typed values are kept.
- A11Y-T1: Primary actions are reachable one-handed in the lower half of the screen.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Send-back copy names the fix: “Add the receipt for the taxi on 12 October”
- Use money formats with currency: “£42.80”, never bare numbers
- Status words match across roles: submitted, approved, sent back, paid

## AI interactions

- Reads receipt fields with confidence scores; the claimant confirms every value
- Flags possible duplicates and policy exceptions for the approver; the approver decides

## Edge cases

- Duplicate receipt submitted twice — flag to claimant before sending
- Manager absent — route to delegate after 3 working days with notice to claimant
- Foreign currency — use the rate on the receipt date and show it
- Lost receipt — allow a signed declaration within policy limits
- Bank details changed shortly before payout — hold payment and verify with the employee

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to payment | ≤ 5 working days | Submission to paid, median |
| Send-back rate | < 5% | Claims returned for missing information |
| Capture accuracy | ≥ 95% | Fields unchanged after claimant review |
| Approver turnaround | < 2 working days | Received to decision, median |

Research: Field studies with claimants capturing receipts outdoors; Approver interviews on decision information needs; Audit sample of paid claims against policy.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
