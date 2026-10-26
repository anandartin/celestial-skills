---
name: ai-drafting-assistant-experience
type: experience
journey: user
persona: Customer success manager (52)
domain: Workplace software · generative AI
technology: Web app (side panel in an editor)
core: "1.0"
description: "Experience skill: Drafting content with an AI assistant and reviewing it before sending — the best-practice user journey for a customer success manager (52) in Workplace software · generative AI on Web app (side panel in an editor). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Drafting content with an AI assistant and reviewing it before sending

A user asks an AI assistant for a first draft, checks and edits it with sources visible, and decides what is sent.

**Outcome** — Users send AI-assisted drafts that they have reviewed, with zero messages sent without an explicit human action.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Daniel, Customer success manager (52)

> “Give me a good first draft, but I sign my name to it, so I decide what goes out.”

Writes renewal emails and account summaries; deaf, works mostly in writing, and wants to keep his own tone.

**Goals**
- Get a usable first draft fast
- Keep facts accurate and in his voice
- Know what the assistant used to write it

**Pains**
- Drafts that invent figures or promises
- Not being able to see what changed
- Tools that send or post without asking

**Behaviours**
- Edits every draft before sending
- Reuses past messages as a starting point
- Checks numbers against the account record

**Access needs**
- Deaf — no audio-only feedback
- Prefers captions and text notifications

---

## Domain — Workplace software · generative AI

- Nothing is sent, posted or saved to a shared place without an explicit user action
- AI-generated text is labelled until the user edits or accepts it
- The assistant uses only data the user can already access; sources are shown
- Customer personal data is not used to train models without consent and a lawful basis (GDPR)
- Drafts must not make contractual or pricing commitments the user hasn't checked

Vocabulary to use: `prompt`, `draft`, `source`, `tone`, `regenerate`, `accept`

## Technology — Web app (side panel in an editor)

Inputs: Keyboard, Pointer, Voice dictation

- First tokens shown within 2 seconds, full draft within 15 seconds
- Generation can be stopped at any time
- Admin can switch the assistant off per workspace

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Ask** | Describe what to write | `form + chips` | “Draft a renewal reminder for Northline Rail, friendly, under 120 words” |
| 2 | **Generate** | Watch the draft arrive and stop it if wrong | `progress` | “Writing draft… Stop” |
| 3 | **Review** | Check facts and sources | `AI approval` | “2 figures come from the account record · 1 statement has no source” |
| 4 | **Edit** | Make it his own | `form` | “Rewrite this paragraph” |
| 5 | **Send** | Send only after an explicit choice | `confirmation` | “Sent to 2 recipients · View in sent items” |

### 1. Ask

- Chips for type, length and tone
- Shows which sources the assistant may use
- **empty:** Try: “Summarise this account for my manager”

### 2. Generate

- Stream text with a visible Stop button
- Do not move focus while text streams
- **error:** The draft couldn't be finished. Your prompt is saved — try again.
- **loading:** Streaming text with a status line

### 3. Review

- Figures and names link to the source record
- Unsupported claims highlighted for checking

### 4. Edit

- Edit in place; show changes from the original draft
- Regenerate a section without losing edits elsewhere

### 5. Send

- Send button belongs to the user's normal editor, not the assistant
- Final preview shows recipients and attachments

---

## Principles

1. The human decides: the assistant drafts, the user sends
2. Show sources for facts and flag what has none
3. Generation is interruptible and never loses the prompt
4. Label AI-generated text until it is reviewed
5. Respect existing permissions and admin controls

## Do / Don't

**Do**
- Show the prompt and sources next to the draft
- Let users stop, retry or discard at any point
- Keep the user's edits when regenerating

**Don't**
- Send, post or schedule anything automatically
- Present invented figures as facts
- Hide that text was AI-generated from the author

## Accessibility

- Streaming text sits in a region announced only when complete: “Draft ready, 112 words”
- Stop, Regenerate and Accept are buttons reachable by keyboard in a logical order (WCAG 2.4.3)
- Highlights for unsupported claims use text labels and underline, not colour alone (WCAG 1.4.1)
- No audio-only cues; all status changes appear as text

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Label drafts plainly: “AI draft — check before sending”
- Describe limits honestly: “I couldn't find a renewal date in this account”
- Avoid human-like claims: say “Draft”, not “I think you'll love this”

## AI interactions

- Drafts text from the user's prompt and permitted sources; the user reviews, edits and sends
- Flags statements without a source so the user can check or remove them
- No AI on the send step because the decision to communicate belongs to the user

## Edge cases

- Draft includes a price or discount not on the account — block send until the user confirms it
- Source record changed during drafting — show “Source updated” and offer to refresh
- Prompt asks for content against policy — decline briefly and say what the assistant can do
- Assistant switched off by admin — editor works normally with a short notice
- Draft contains another customer's data — never possible; retrieval limited to the open account

---

## Measures

| Measure | Target | How |
|---|---|---|
| Reviewed before send | 100% | Sends with an explicit user action, event logs |
| Edit rate | Tracked, no target | Share of drafts edited before send, to learn quality |
| Unsupported claims sent | < 1% | Sampled audit of sent AI-assisted messages |
| Time to send | −40% | Median vs unassisted drafting, same message types |

Research: Wizard-of-Oz tests of review and edit flows; Accuracy audit of drafts against source records; Interviews with users about trust and tone.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
