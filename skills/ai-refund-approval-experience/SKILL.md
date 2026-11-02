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

**Agent and system (HAI).** Agent steps follow the HAI skill (`hai-experience`), Human-Centred Agentic Intelligence: each one below records its agent mode, trigger, goal, actions, failure response and handover; no step runs above Autonomous.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: New refund requests arrive, or the agent finishes a draft or a run.
  - Agent goal: Put the riskiest decisions in front of the lead first.
  - Agent actions: Ranks requests by risk and shows the reason for each rank; every item the agent drafted or ran is labelled as made by the agent.
  - Agent tone: Neutral and factual.
  - Agent type: Vertical refunds agent; orchestrated.
  - Multi-agent handoff: Intake agent → risk-scoring specialist → orchestrator builds the inbox.
  - Goal failure response: Data unavailable (order system down): show requests unranked with a banner saying ranking is paused and why — never hide a request. Low confidence on a risk score: mark it unsure and rank it higher.
  - Failure handover trigger: Order data still missing after 2 retries → operations on-call is alerted with the affected requests; the lead can always work the inbox by hand.
  - Data needs: Refund requests, order and payment history, customer tier, refund policy.
  - Agent memory: Short-term: the current queue. Episodic: the lead's past decisions, to calibrate ranking.
  - Regulatory classification: Minimal risk for ranking; agent-made items are identified (transparency).

### 2. Triage

- Agent suggests labels; human confirms
- Suggestions marked as suggestions
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the first suggestion; chips are buttons toggled with Space, and each suggestion has a keyboard accept and a keyboard edit action.
  - Announced (A11Y-S1): Heading "Triage" is read; each chip reads as "Suggested: Billing, not yet confirmed", then "Confirmed" politely once the person accepts.
  - Errors (A11Y-E1): A missing label or priority is named in text beside the field and linked to it; suggestions and edits are kept if the form is re-shown.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Mark suggestions as suggestions in words, and spell out labels such as Billing rather than using codes.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The lead opens a request.
  - Agent goal: Get each request labelled, assigned and prioritised correctly with little effort.
  - Agent actions: Suggests label, owner and priority with its confidence and reason; the lead accepts or changes each suggestion; changes are logged.
  - Agent tone: Brief, confident only when it is sure.
  - Agent type: Vertical triage specialist; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input (two issues in one request): ask the lead which applies. Confidence below 70%: show the top two options with reasons. Rejected twice: leave the fields blank for manual triage.
  - Failure handover trigger: Lead rejects suggestions twice on the same request → the request drops to Assistive; repeated low confidence on one category is flagged to the team lead.
  - Data needs: Category list, team rota, past labels.
  - Agent memory: Short-term: the request. Procedural: how this lead labels.
  - Regulatory classification: Minimal risk.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: A request is above the auto-approve threshold or outside the lead's standing rules.
  - Agent goal: Help the lead make one well-informed decision.
  - Agent actions: Drafts the decision with amount, customer, the sources it used (order, payment, policy), its reasons and confidence; the lead approves, edits or declines — nothing is refunded or refused without them. A refusal tells the customer the main reasons and how to ask a person to review it.
  - Agent tone: Plain and neutral; never persuasive.
  - Agent type: Vertical refunds agent; orchestrated with a policy-check verifier.
  - Multi-agent handoff: Refunds agent drafts → policy verifier checks → draft shown to the lead.
  - Goal failure response: Low confidence: say so and list what would change the answer. Constraint violation (breaches policy): explain the rule and offer escalation. Goal drift (draft misses a stated customer need): the lead re-asks with the missing context.
  - Failure handover trigger: Severity: refunds above the lead's limit, legal threats and complaints go to a senior approver immediately with the handover context package; a customer who disputes a refusal reaches a person, with no retry.
  - Data needs: Order, payment, refund policy, customer history.
  - Agent memory: Short-term: the case. Episodic: earlier contacts from this customer.
  - Regulatory classification: A decision with financial effect on a person: a human decides; automated-decision safeguards apply (notice, reasons, human review); audit log required.

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
- **Agent and system (HAI):**
  - Agent mode: Autonomous
  - Trigger / cue: The lead approved a refund, or a request falls inside the standing rules the lead set (amount cap, categories, expiry).
  - Agent goal: Carry out approved and in-scope refunds reliably.
  - Agent actions: Runs the refund steps and shows progress; the lead can cancel before the payment step and reverse it after; the customer is told when it is done; anything outside the standing rules goes back to Approve.
  - Agent tone: Status-like and precise.
  - Agent type: Orchestrated: orchestrator, payments specialist, verifier, notification agent.
  - Multi-agent handoff: Orchestrator → payments specialist → verifier checks the amount against the approval → notification agent.
  - Goal failure response: Before acting (payment provider unreachable): abort, tell the lead, keep the request. Mid-action (refund issued, ticket not closed): stop, show what is done, offer undo. After (wrong amount): tell the lead at once and offer reversal. Any failure drops this request to Advisory.
  - Failure handover trigger: Payment failure after 2 retries, or 2 agents in the pipeline failing → finance operations immediately with the partial state; money is involved, so no further retries.
  - Data needs: Approved decision, standing rules, payment provider status.
  - Agent memory: Short-term: the run state.
  - Regulatory classification: Financial transaction: a per-agent audit trail, idempotent payment calls and fresh data at run time.

### 5. Report

- Plain-language trace per action
- One-click export for finance
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the report heading; the table has headers and row navigation, and Export CSV is a normal button after the table.
  - Announced (A11Y-S1): Title "Report" is read; the table has a caption and column headers, and "Export ready" is announced politely with the file name.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write each trace line as a plain sentence with full dates and amounts, and expand any abbreviation such as CSV once.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The lead or an auditor opens the report.
  - Agent goal: Make every agent and human action traceable.
  - Agent actions: Lists every action with who prepared it (agent or person), who approved it, when, the model and prompt version and the outcome; exports CSV.
  - Agent tone: Factual.
  - Agent type: Generalist reporting agent; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Data unavailable: say which period is incomplete and why; never present a partial export as complete.
  - Failure handover trigger: A gap in the audit trail → the compliance owner is alerted.
  - Data needs: Audit log, decisions, payment confirmations.
  - Agent memory: None beyond the session.
  - Regulatory classification: Record-keeping for automated decisions; logs kept for the retention period.

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

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Say what will happen: “Refund $54.00 to Theo’s original card”
- Confidence in words: “Likely duplicate charge (2 matching payments)”
- Never anthropomorphise: “The agent found…”, not “I think…”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- Every draft, label and action the agent makes is marked as made by the agent
- No refund is refused, and none above the standing rules is paid, without a person's decision
- A refused customer is told the main reasons and can ask a person to review the decision
- Autonomous refunds stay inside the lead's standing rules and can be cancelled before payment and reversed after
- Every handover carries the handover context package; money failures go to a person immediately

## Edge cases

- Agent and human disagree — record both and the final decision
- Payment provider down — pause queue, notify, retry
- Partial refund — show remaining balance before approval
- Refund execution failed — show 'Refund not completed' with the reason; the approval stays recorded; retry automatically up to three times, then hand to a person
- Outcome unknown (timeout or no reply) — show 'Checking with the payment provider'; never retry blindly; reconcile by refund ID before any retry
- Retry pending — visible state with the next attempt time and a way to cancel
- Human intervention required — assign to the payments queue with the full trail; the customer is told who will reply and by when

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
