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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the message input; the "Talk to a person" button stays in the same place and is second in tab order, and Enter sends a message.
  - Announced (A11Y-S1): The AI disclosure is read as the first message with sender and time; new messages are announced politely without moving focus.
  - Errors (A11Y-E1): If a message fails to send, the text beside the input says so and the typed message is kept.
  - Time limits (A11Y-W1): The chat stays for 24 hours; there is no timeout, and any inactivity warning comes at least 20 seconds before with a Continue button.
  - Language (A11Y-L1): Say "AI assistant" at the start in plain words, and use short literal sentences with no jokes or idioms.

### 2. Verify

- Use a one-time code to the registered contact
- Explain what will be accessed and why
- **error:** That code didn't match. You have 2 more tries
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the code field; pasting, password managers and autofill work, the field uses autocomplete="one-time-code", and a magic link is offered, with no puzzle or memory test.
  - Announced (A11Y-S1): "I'll send a code to the phone ending 42" is read; "Code sent" is announced politely and a wrong code is announced assertively.
  - Errors (A11Y-E1): A wrong code is written in text beside the field and linked to it, with "2 more tries"; the typed digits are kept, and a resend button is next to it.
  - Time limits (A11Y-W1): The code lasts for the time stated; a warning appears at least 20 seconds before it expires, with a Send a new code button.
  - Language (A11Y-L1): Say what will be accessed and why in one plain sentence, and write "one-time code" with its meaning.

### 3. Answer

- Answer with the specific facts from the account
- Say what the assistant doesn't know rather than guess
- **loading:** Checking your bill…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays in the input; the answer is a message in the chat log, with facts in a short list, and links are in tab order.
  - Announced (A11Y-S1): The answer is read with sender and time; "Checking your bill" is announced politely, then the result.
  - Errors (A11Y-E1): If the assistant does not know, it says so in text and offers Talk to a person; nothing typed is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give amounts and dates in full, such as "34 pounds twice on 3 October", and say plainly what the assistant does not know.

### 4. Confirm action

- Show the action, amount and timing; customer taps Confirm
- Over-threshold or disputed actions go to a person
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Confirm button after the action text; Confirm and Cancel are separate buttons, and Enter does nothing until Confirm is chosen.
  - Announced (A11Y-S1): "Refund 34 pounds to your card ending 8810, 3 to 5 working days" is read as the heading, and the result is announced politely.
  - Errors (A11Y-E1): The action, amount and timing are shown for review before Confirm, and Cancel leaves everything unchanged; over-threshold actions explain they go to a person.
  - Time limits (A11Y-W1): No time limit. Confirm waits until the person chooses.
  - Language (A11Y-L1): State the amount, the card ending and the timing in full words, and say plainly who acts next.

### 5. Handoff

- Agent receives transcript and summary; customer is told this
- Show queue position and expected wait
- **loading:** Finding someone to help…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays in the chat; Cancel handoff is a normal button, and the queue position is text.
  - Announced (A11Y-S1): "Connecting you to a person, about 4 minutes" is announced politely, and position changes at most once a minute.
  - Errors (A11Y-E1): If handoff fails, a text message says so beside the status with a retry button; the conversation is kept and passed on.
  - Time limits (A11Y-W1): The wait is stated as an estimate; the person is told if it changes, and can leave and be notified.
  - Language (A11Y-L1): Say the person will see the conversation, and give the wait in minutes.

### 6. Resolved

- Case reference and actions taken in writing
- Offer the transcript by email
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "Done" heading; the reference, actions taken and Email me the transcript are in order.
  - Announced (A11Y-S1): "Done, 34 pounds refund requested, reference CS-20931" is read as the heading; the sent transcript is announced politely.
  - Errors (A11Y-E1): A failed transcript email is explained in text beside the button with a retry; the email address is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Spell out the reference and say what was done in a short sentence.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-S1: New messages are announced in a polite live region without stealing focus
- A11Y-N1: The chat log is a labelled list with each message's sender and time
- A11Y-K1: Input and buttons are reachable by keyboard, and focus returns to the input after sending
- A11Y-W1: The chat never auto-closes; an inactivity warning appears at least 20 seconds before with a Continue option
- A11Y-A1: Verification supports pasting, autofill and one-time-code autocomplete, with no puzzle or memory test
- A11Y-E3: Actions show the exact amount and timing, require Confirm, and can be cancelled before they happen
- A11Y-L1: Messages use short, literal sentences, with no idioms and a predictable layout

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

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
