---
name: ai-refund-approval-experience
type: experience
journey: workflow
persona: Support lead
domain: Customer support
technology: AI agent + web console
core: "1.0"
description: "Experience skill: Refund approval with an AI agent — the best-practice workflow for a support lead in Customer support on AI agent + web console. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Refund approval with an AI agent

Let an agent draft and run refunds while a human stays in charge of anything irreversible — with a trace anyone can read.

**Outcome** — Refunds under threshold run automatically; those above are approved by a human in one decision with full context, and every action is traceable.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Amara, Support lead

> “I’m happy for the agent to do the work. I’m not happy finding out what it did from an angry customer.”

Runs a team of 12; approves refunds over a threshold; audited quarterly.

**Goals**
- Clear the refund queue without losing control
- See why the agent proposed each action
- Undo or adjust before money moves

**Pains**
- Black-box automation
- Approvals without context
- Bulk actions that cannot be reversed

**Behaviours**
- Batches approvals twice a day
- Spot-checks the agent’s reasoning
- Exports reports for finance

**Access needs**
- Uses a screen reader for long reviews
- Prefers keyboard shortcuts for approve / skip

---

## Domain — Customer support

- Financial actions above threshold require human approval
- Every automated action logged with actor, input and outcome
- Customer data minimised in logs (no full card numbers)

Vocabulary to use: `ticket`, `refund`, `threshold`, `approval`, `trace`

## Technology — AI agent + web console

Inputs: Keyboard shortcuts, Mouse, Natural-language instructions

- Agent output is non-deterministic — always show inputs and reasoning
- Long-running steps must show live progress and be cancellable

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Inbox** | See what needs attention, highest risk first | `inbox` | “3 need approval” |
| 2 | **Triage** | Label, assign and set priority | `form + chips` | “Suggested: Billing · High” |
| 3 | **Approve** | Decide with the agent’s draft and its reasons | `AI approval` | “Approve $54.00 refund” |
| 4 | **Run** | Watch it happen and cancel if needed | `progress` | “Running · step 2 of 3” |
| 5 | **Report** | Keep an auditable record | `table + export` | “Export CSV” |

### 1. Inbox

- Sort by risk, not arrival
- Badge items that need a human
- **empty:** Nothing to approve — show what the agent handled today
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the inbox heading, then the list; arrow keys move between items, Enter opens one, and the sort order is a real button.
  - Announced (A11Y-S1): Title "Inbox" is a heading; "3 need approval" is read in the list summary, and each item reads its risk level and badge as text.
  - Errors (A11Y-E1): Filter or sort problems are named in text beside the control; chosen sort and filters are kept. The empty state explains what the agent handled today.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write risk levels as words such as high, medium and low, and explain "needs a human" in plain terms.

### 2. Triage

- Agent suggests labels; human confirms
- Suggestions marked as suggestions
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the first suggestion; chips are buttons toggled with Space, and each suggestion has a keyboard accept and a keyboard edit action.
  - Announced (A11Y-S1): Heading "Triage" is read; each chip reads as "Suggested: Billing, not yet confirmed", then "Confirmed" politely once the person accepts.
  - Errors (A11Y-E1): A missing label or priority is named in text beside the field and linked to it; suggestions and edits are kept if the form is re-shown.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Mark suggestions as suggestions in words, and spell out labels such as Billing rather than using codes.

### 3. Approve

- Show what will happen, to whom and how much
- Approve, edit or skip — one decision per item
- **error:** If the agent is unsure, say so and ask a question instead of guessing
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the approval heading; Tab goes to reasons, Approve, Edit and Skip, with listed shortcuts that can be remapped or turned off. Approve opens a review step first.
  - Announced (A11Y-S1): The card is an article with a heading; amount, person and reasoning are real text, and an unsure agent's question is announced assertively as an error.
  - Errors (A11Y-E1): If the agent is unsure it says so in text and asks a question; edits are kept, and Approve shows a review of amount and recipient before money can move.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): State the amount in full, such as 54 pounds, say who receives it, and explain agent reasoning in short plain sentences.

### 4. Run

- Steps listed with live status
- Cancel available until money moves
- **loading:** Live status per step; announce completion
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the progress heading; the Cancel button is the first control in tab order and stays reachable until money moves.
  - Announced (A11Y-S1): Each step's status is announced politely, such as "Step 2 of 3, running", completion is announced politely, and any failure is announced assertively.
  - Errors (A11Y-E1): If a step fails, the message names which step and why beside the status list; Cancel before payment returns to the approval with decisions kept.
  - Time limits (A11Y-W1): Live progress has no time limit; if it runs long the person is told and can cancel or leave and be notified.
  - Language (A11Y-L1): Say what each step does in plain words and say clearly when cancelling is no longer possible.

### 5. Report

- Plain-language trace per action
- One-click export for finance
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the report heading; the table has headers and row navigation, and Export CSV is a normal button after the table.
  - Announced (A11Y-S1): Title "Report" is read; the table has a caption and column headers, and "Export ready" is announced politely with the file name.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write each trace line as a plain sentence with full dates and amounts, and expand any abbreviation such as CSV once.

---

## Principles

1. Humans approve anything irreversible
2. Show the agent’s inputs, reasoning and confidence
3. One decision per item, reversible until committed
4. Every action leaves a readable trace
5. Autonomy grows with evidence (thresholds), not by default

## Do / Don't

**Do**
- Label AI suggestions as suggestions until a human accepts them
- Offer “Why?” on every proposed action
- Provide keyboard shortcuts for approve / edit / skip

**Don't**
- Bulk-approve without per-item context
- Hide failures inside a success summary
- Let the agent take irreversible actions above threshold

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: Approval cards are articles with headings; every approve, edit and skip action works by keyboard, and shortcuts are listed, remappable and can be turned off
- A11Y-S1: Live progress uses a polite live region and errors an assertive one; each step status and completion is announced without moving focus
- A11Y-N1: Reasoning text is real text, never an image or tooltip only, and the card has a heading naming the item
- A11Y-E3: Approve shows a review of amount, recipient and effect before money moves, and Cancel stays available until it does
- A11Y-E1: Agent uncertainty is shown as text with a question, and edits made by the person are kept
- A11Y-C2: Risk and status are shown with words as well as colour or badges

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Say what will happen: “Refund $54.00 to Theo’s original card”
- Confidence in words: “Likely duplicate charge (2 matching payments)”
- Never anthropomorphise: “The agent found…”, not “I think…”

## AI interactions

- Show sources the agent used (order, payment, policy)
- Ask a clarifying question when confidence is low
- Let the human edit the draft before approving
- Log model, prompt version and outcome for each action

## Edge cases

- Agent and human disagree — record both and the final decision
- Payment provider down — pause queue, notify, retry
- Partial refund — show remaining balance before approval

---

## Measures

| Measure | Target | How |
|---|---|---|
| Auto-resolved under threshold | ≥ 70% | Refunds completed with no human step |
| Approval time | < 30 s | Median time per approval decision |
| Reversal rate | < 1% | Approved refunds later reversed |
| Trace completeness | 100% | Actions with input, reasoning and outcome logged |

Research: Shadow-mode comparison: agent draft vs human decision; Think-aloud review sessions with leads; Quarterly audit sample.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
