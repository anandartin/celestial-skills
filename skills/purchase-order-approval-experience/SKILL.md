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

### 2. Check budget

- Show available, reserved and this request
- Warn early if over budget, with options
- **error:** Budget figures unavailable — you can submit; the budget holder will check

### 3. See chain

- List approvers in order with expected time
- Explain why each approver is needed

### 4. Approve

- Request, quotes, budget and prior decisions on one screen
- Approve, reject with reason, or ask a question
- **empty:** Nothing waiting for your approval

### 5. Issue PO

- PO number, supplier and delivery shown
- Requester notified with tracking

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

## Accessibility

- Progress steps marked up as an ordered list with current step indicated by text (WCAG 1.3.1)
- Error summary at top of form links to each field (WCAG 3.3.1)
- Session timeout warns at least 2 minutes before and lets the user extend (WCAG 2.2.1)
- Tables of quotes keyboard navigable with headers

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
