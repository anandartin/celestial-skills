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

### 2. Triage

- Agent suggests labels; human confirms
- Suggestions marked as suggestions

### 3. Approve

- Show what will happen, to whom and how much
- Approve, edit or skip — one decision per item
- **error:** If the agent is unsure, say so and ask a question instead of guessing

### 4. Run

- Steps listed with live status
- Cancel available until money moves
- **loading:** Live status per step; announce completion

### 5. Report

- Plain-language trace per action
- One-click export for finance

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

## Accessibility

- Approval cards are articles with headings; shortcuts listed and remappable
- Live progress uses a polite live region; errors use assertive
- Reasoning text is real text, not an image or tooltip only

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
