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

**Agent and system (HAI).** Agent steps follow the HAI skill (`hai-experience`), Human-Centred Agentic Intelligence: each one below records its agent mode, trigger, goal, actions, failure response and handover; no step runs above Advisory.

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
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The customer opens the chat.
  - Agent goal: Make clear who they are talking to and what it can do.
  - Agent actions: The first message says it is an AI assistant, what it can check and fix, and that a person is available any time; then asks how it can help.
  - Agent tone: Calm and literal; short sentences, no idioms.
  - Agent type: Vertical support assistant; orchestrated.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input: ask one clear question at a time.
  - Failure handover trigger: The customer asks for a person → handover immediately, no retry.
  - Data needs: Help articles, service status.
  - Agent memory: Short-term; episodic only after verification.
  - Regulatory classification: Minimal risk; AI interaction disclosed in the first message (transparency).

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
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The question needs account details.
  - Agent goal: Get the customer verified without the assistant handling secrets.
  - Agent actions: Explains why verification is needed and hands over to the secure verification form; the assistant never asks for or sees passwords or codes — it only learns verified or not.
  - Agent tone: Reassuring and specific.
  - Agent type: Vertical support assistant; verification service outside the AI.
  - Multi-agent handoff: Assistant → verification service → result back to the assistant.
  - Goal failure response: Verification fails twice: offer another method or a person.
  - Failure handover trigger: A third failure, or the customer is stuck → a person, with the context package and no account details.
  - Data needs: Verified / not verified result only.
  - Agent memory: Short-term.
  - Regulatory classification: Personal data: strong authentication done by the customer; data protection rules apply.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The customer is verified and asks about a charge.
  - Agent goal: Explain what happened in plain words and suggest a fix.
  - Agent actions: Explains the charge in plain words, says how sure it is, and suggests options with reasons.
  - Agent tone: Plain and literal; one idea per sentence.
  - Agent type: Vertical support assistant; billing specialist behind it.
  - Multi-agent handoff: Assistant → billing specialist reads the account → assistant explains.
  - Goal failure response: Data unavailable (billing system): say it can't see the bill right now, when to try again, and offer a person. Low confidence: say it isn't sure and offer a person.
  - Failure handover trigger: Confidence still low after one retry, or the customer is making a complaint → a person with the context package.
  - Data needs: Bills, payments, service events.
  - Agent memory: Short-term: the conversation. Episodic: past contacts.
  - Regulatory classification: Personal financial data; minimal AI risk.

### 4. Confirm action

- Show the action, amount and timing; customer taps Confirm
- Over-threshold or disputed actions go to a person
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Confirm button after the action text; Confirm and Cancel are separate buttons, and Enter does nothing until Confirm is chosen.
  - Announced (A11Y-S1): "Refund 34 pounds to your card ending 8810, 3 to 5 working days" is read as the heading, and the result is announced politely.
  - Errors (A11Y-E1): The action, amount and timing are shown for review before Confirm, and Cancel leaves everything unchanged; over-threshold actions explain they go to a person.
  - Time limits (A11Y-W1): No time limit. Confirm waits until the person chooses.
  - Language (A11Y-L1): State the amount, the card ending and the timing in full words, and say plainly who acts next.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The customer agrees to a fix the assistant offered.
  - Agent goal: Get explicit approval for the exact change.
  - Agent actions: Shows the exact change (amount, card, timing) and waits for the customer to confirm; refunds over £50 and all complaints go to a person to decide.
  - Agent tone: Precise; no pressure.
  - Agent type: Vertical support assistant; refunds specialist.
  - Multi-agent handoff: Assistant → refunds specialist submits after confirmation → confirmation back.
  - Goal failure response: Before acting (refund system down): don't submit, say so, offer a person. Constraint violation (over £50): explain a person must approve and hand over.
  - Failure handover trigger: Severity: money over £50 or complaints → a person immediately with the context package.
  - Data needs: The proposed change, refund limits, card on file (masked).
  - Agent memory: Short-term.
  - Regulatory classification: Financial transaction confirmed by the customer; audit log of who proposed and who confirmed.

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
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The customer asks for a person, or a handover trigger fires.
  - Agent goal: Reach a person without repeating anything.
  - Agent actions: Announces the transfer and the wait time, shows the summary it is passing on and lets the customer correct it; the customer can keep reading answers while waiting.
  - Agent tone: Warm and clear about what happens next.
  - Agent type: Human liaison agent.
  - Multi-agent handoff: Assistant → human liaison agent builds the context package → support agent.
  - Goal failure response: No person available within the SLA: say so and offer a callback.
  - Failure handover trigger: This is the handover: the person receives the goal in the customer's words, what was tried, what is done, emotional signals and compliance flags.
  - Data needs: Conversation, account summary, queue status.
  - Agent memory: Short-term plus episodic snapshot in the context package.
  - Regulatory classification: Personal data shared with staff on a need-to-know basis.

### 6. Resolved

- Case reference and actions taken in writing
- Offer the transcript by email
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "Done" heading; the reference, actions taken and Email me the transcript are in order.
  - Announced (A11Y-S1): "Done, 34 pounds refund requested, reference CS-20931" is read as the heading; the sent transcript is announced politely.
  - Errors (A11Y-E1): A failed transcript email is explained in text beside the button with a retry; the email address is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Spell out the reference and say what was done in a short sentence.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The issue is resolved.
  - Agent goal: Leave the customer with a record of what was done.
  - Agent actions: Confirms what was done and by whom (assistant or person), the reference, and how to undo or dispute it.
  - Agent tone: Concise and complete.
  - Agent type: Vertical support assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Partial completion: say exactly what is done and what is still pending.
  - Failure handover trigger: The customer disputes the outcome → a person.
  - Data needs: Case record, reference, actions log.
  - Agent memory: Episodic: the case is saved to the customer's history.
  - Regulatory classification: Record of an automated action kept for the retention period.

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

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Direct and literal: “The second charge was a mistake” not “Oops, looks like something went wrong!”
- Say limits honestly: “I can't change your contract. A person can”
- Short messages, one idea each, with numbers in full

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The first message says it is an AI assistant and that a person is available any time
- The assistant never asks for or sees passwords or codes
- Every account change is shown exactly and confirmed by the customer; refunds over £50 and complaints are decided by a person
- Handover passes the full context package so nothing is repeated, and the customer sees and can correct the summary
- The record at the end says what the assistant did, what a person did, and how to undo or dispute it

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
