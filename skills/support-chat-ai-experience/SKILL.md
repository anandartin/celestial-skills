---
name: support-chat-ai-experience
type: experience
journey: customer
persona: Customer (23), student, autistic
domain: Customer support · conversational AI
technology: Web and in-app chat widget
core: "1.0"
description: "Experience skill: Getting help from an AI support assistant with handoff to a person — the best-practice customer journey for a customer (23), student, autistic in Customer support · conversational AI on Web and in-app chat widget. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Getting help from an AI support assistant with handoff to a person

A customer asks for help in their own words, gets a clear answer or action from an AI assistant they know is AI, and reaches a person with full context when needed.

**Outcome** — At least 60% of chats resolve without a person, and every handoff reaches an agent with the full transcript and no repeated questions.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Noor, Customer (23), student, autistic

> “Text is easier than calls. Just be straight with me and don't pretend to be a person.”

Has a broadband contract with a home internet provider; contacts support about a double charge.

**Goals**
- Get a clear answer in writing
- Fix a billing error without calling
- Reach a person if the bot can't help

**Pains**
- Vague, overly cheerful replies
- Repeating everything after being transferred
- Not knowing whether she's talking to a person

**Behaviours**
- Writes precise, detailed messages
- Copies transcripts for her records
- Avoids phone calls

**Access needs**
- Prefers literal, direct language
- Needs predictable flow and no sudden changes

---

## Domain — Customer support · conversational AI

- Disclose at the start and in the header that the assistant is AI, and give a way to reach a person at any time
- Account actions (refunds, plan changes) need verified identity and explicit customer confirmation of the exact change
- Refunds above a set threshold and any complaint are decided by a person
- Tell customers how the transcript is stored and used; don't use it for training without consent where required
- The assistant must not give legal, medical or financial advice; it routes those to the right service

Vocabulary to use: `assistant`, `agent`, `handoff`, `transcript`, `case reference`, `verification`

## Technology — Web and in-app chat widget

Inputs: Keyboard, Touch, Screen reader, Voice dictation

- Assistant can read account data only after verification
- Handoff passes transcript and summary to the agent console
- Chat persists across page reloads for 24 hours

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Start** | Know who you're talking to and ask | `inbox` | “I'm an AI assistant. I can check bills and fix common problems. You can ask for a person any time” |
| 2 | **Verify** | Confirm identity before account details are shared | `auth card` | “To look at your bill, I'll send a code to the phone ending 42” |
| 3 | **Answer** | Understand what happened in plain words | `detail` | “You were charged £34 twice on 3 October. The second charge was a mistake” |
| 4 | **Confirm action** | Approve the exact change before it happens | `AI approval` | “Refund £34 to your card ending 8810? It takes 3–5 working days” |
| 5 | **Handoff** | Reach a person without repeating yourself | `progress` | “Connecting you to a person. They'll see this conversation. About 4 minutes” |
| 6 | **Resolved** | Leave with a record of what was done | `confirmation` | “Done: £34 refund requested. Reference CS-20931” |

### 1. Start

- AI disclosure in the first message and the header
- “Talk to a person” always visible

### 2. Verify

- Use a one-time code to the registered contact
- Explain what will be accessed and why
- **error:** That code didn't match. You have 2 more tries

### 3. Answer

- Answer with the specific facts from the account
- Say what the assistant doesn't know rather than guess
- **loading:** Checking your bill…

### 4. Confirm action

- Show the action, amount and timing; customer taps Confirm
- Over-threshold or disputed actions go to a person

### 5. Handoff

- Agent receives transcript and summary; customer is told this
- Show queue position and expected wait
- **loading:** Finding someone to help…

### 6. Resolved

- Case reference and actions taken in writing
- Offer the transcript by email

---

## Principles

1. Always say it's AI
2. A person is one tap away at every point
3. No account change without explicit confirmation
4. Facts from the account, not guesses
5. Handoffs carry the full context

## Do / Don't

**Do**
- Show exactly what an action will do before it runs
- Pass the transcript to the agent
- Give a case reference at the end

**Don't**
- Give the assistant a human name or photo
- Loop customers who ask for a person
- Make refunds or changes from inferred intent

## Accessibility

- Meets WCAG 2.2 AA; new messages announced via a polite live region without stealing focus (4.1.3)
- Chat log is a labelled list with each message's sender and time
- Input and buttons reachable by keyboard; focus returns to the input after sending
- No auto-closing chat; inactivity warning with option to continue (2.2.1)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Direct and literal: “The second charge was a mistake” not “Oops, looks like something went wrong!”
- Say limits honestly: “I can't change your contract. A person can”
- Short messages, one idea each, with numbers in full

## AI interactions

- The assistant answers questions and drafts account actions; the customer confirms every action and a person decides refunds over £50 and all complaints
- Handoff summary is generated for the agent and shown to the customer, who can correct it

## Edge cases

- Customer expresses distress or risk of harm — stop automation and connect to a trained person with safety resources
- Assistant is uncertain — say so and offer a person rather than guess
- Verification fails repeatedly — lock account actions and route to a person
- No agents available — offer a call-back or email with a time commitment
- Customer asks for legal or financial advice — explain the limit and signpost appropriate help

---

## Measures

| Measure | Target | How |
|---|---|---|
| Resolved without a person | ≥ 60% | Chats closed with confirmed resolution, no handoff |
| Repeated questions after handoff | 0 | Agent QA review of handoff transcripts |
| Wrong actions | < 0.1% | Actions reversed due to assistant error |
| Customer satisfaction | ≥ 80% | End-of-chat rating, AI and handoff chats separately |

Research: Transcript review of failed and handed-off chats each week; Usability sessions with neurodivergent and screen reader users; Red-team testing of verification and action confirmation.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
