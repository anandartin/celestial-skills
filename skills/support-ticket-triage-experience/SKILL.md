---
name: support-ticket-triage-experience
type: experience
journey: workflow
persona: Support agent (31); team lead Hana; specialist team on call
domain: Customer support · operations
technology: Web app (agent workspace)
core: "1.0"
description: "Experience skill: Triaging support tickets with AI suggestions and agent review — the best-practice workflow for a support agent (31); team lead hana; specialist team on call in Customer support · operations on Web app (agent workspace). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Triaging support tickets with AI suggestions and agent review

Incoming tickets are categorised and prioritised with AI suggestions, agents confirm or correct them, and urgent cases reach the right team fast.

**Outcome** — Urgent tickets reach the right team within 15 minutes, and AI suggestions are reviewed by an agent before any customer-facing action.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Chidi, Support agent (31); team lead Hana; specialist team on call

> “Help me sort the queue faster, but don't let a machine tell a customer something wrong.”

Works a shared inbox of 300 tickets a day across email and chat; uses a screen reader part-time to reduce eye strain.

**Goals**
- Clear urgent tickets first
- Route tickets to the right team first time
- Reply with accurate, approved answers

**Pains**
- Mislabelled tickets bouncing between teams
- Urgent issues buried in the queue
- Suggested replies that sound wrong

**Behaviours**
- Scans subjects and first lines
- Merges duplicates
- Uses saved replies for common issues

**Access needs**
- Uses a screen reader part-time
- Keyboard-only during long shifts

---

## Domain — Customer support · operations

- Customer-facing replies are sent by an agent; AI may draft but not send
- Security, safety and legal issues always route to a human specialist
- Personal data in tickets is masked in AI prompts where not needed and retained per policy (GDPR)
- Service-level targets are measured from ticket arrival, not from triage
- AI suggestions and agent corrections are logged for quality review

Vocabulary to use: `ticket`, `queue`, `priority`, `category`, `routing`, `service level`

## Technology — Web app (agent workspace)

Inputs: Keyboard, Screen reader, Pointer

- AI suggestion available within 3 seconds of arrival
- Integrates with email, chat and the knowledge base
- Works if the AI service is down

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Arrive** | New tickets land with suggestions | `inbox` | “Suggested: Billing · High (82%)” |
| 2 | **Review** | Agent confirms or corrects | `AI approval` | “Confirm Billing · High?” |
| 3 | **Route** | Send to the right team or keep | `form + chips` | “Route to Payments team · 12 in queue” |
| 4 | **Respond** | Reply using a reviewed draft | `form` | “Draft reply based on “Refund timing” article — check before sending” |
| 5 | **Monitor** | Lead watches queue health and accuracy | `table + export` | “Urgent within 15 min: 96% · AI overrides: 14%” |

### 1. Arrive

- Suggested category and priority shown with confidence
- Urgent signals such as outage or safety words raise priority
- **empty:** Queue clear — nothing waiting

### 2. Review

- Accept, change or reject in one keystroke
- Show the words that drove the suggestion
- **error:** Suggestions unavailable — triage manually; tickets are still in order of arrival

### 3. Route

- Team chips with current queue length
- Routing reason recorded

### 4. Respond

- Draft links to knowledge base sources
- Agent edits and sends; nothing auto-sends

### 5. Monitor

- Service levels by priority and team
- Suggestion accuracy and override rate

---

## Principles

1. Agents decide; AI suggests with visible reasoning and confidence
2. Urgent and safety issues are never left to automation alone
3. Triage works the same when AI is unavailable
4. Every correction improves measurement, not blame
5. Queue order and service levels are transparent

## Do / Don't

**Do**
- Show why a ticket was flagged urgent
- Let agents correct suggestions in one step
- Track override rate by category

**Don't**
- Auto-send AI replies to customers
- Hide low-confidence suggestions' confidence
- Route security reports to general queues

## Accessibility

- Queue is a table or list with row headers; new tickets announced by count, not one by one
- All triage actions have keyboard shortcuts that can be remapped (WCAG 2.1.4)
- Confidence shown as text percentage, not just a colour bar (WCAG 1.4.1)
- Focus stays on the current ticket when the queue updates (WCAG 3.2.2)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Label AI output: “Suggested”, never presented as decided
- Customer replies use plain language and the customer's name; no internal codes
- Routing notes say why: “Routed to Payments — refund over 30 days”

## AI interactions

- Suggests category, priority and team with confidence; the agent confirms
- Drafts replies from knowledge base articles; the agent edits and sends
- Flags possible duplicates and spikes for the team lead to act on

## Edge cases

- Customer reports a safety or security issue — bypass the queue to a specialist immediately
- Ticket in a language the agent doesn't read — offer machine translation labelled as such, and route to a speaker if available
- Spike from an outage — group related tickets and post a status update with lead approval
- AI confidently wrong on a category — agent correction logged and reviewed weekly
- Abusive message — agent protection tools and escalation to lead

---

## Measures

| Measure | Target | How |
|---|---|---|
| Urgent routing time | ≤ 15 min | Arrival to correct team, 95th percentile |
| First-time correct routing | ≥ 90% | Tickets not re-routed |
| AI override rate | Tracked; review if > 25% | Suggestions changed by agents, per category |
| Customer satisfaction | ≥ 4.3 / 5 | Post-resolution survey |

Research: Shadowing agents during peak shifts; Offline evaluation of suggestion accuracy on labelled tickets; Usability tests with screen reader users in the agent workspace.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
