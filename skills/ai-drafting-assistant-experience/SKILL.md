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

**Agent and system (HAI).** Agent steps follow the HAI skill (`hai-experience`), Human-Centred Agentic Intelligence: each one below records its agent mode, trigger, goal, actions, failure response and handover; no step runs above Advisory.

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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands in the prompt box; Tab moves through the type, length and tone chips, then Generate, and the chips toggle with Space.
  - Announced (A11Y-S1): Page title is Ask; the chip groups have labels, and the source list is read as a list of what the assistant may use.
  - Errors (A11Y-E1): Missing prompt text is named beside the box and linked to it; whatever was typed stays in place.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'sources' and 'tone' in plain terms and keep the example prompt short and free of jargon.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The person opens the panel and describes the message.
  - Agent goal: Understand what they want written.
  - Agent actions: Says it is an AI assistant and which sources it may use (the account record, approved templates); offers prompt chips; asks a clarifying question when the request is vague.
  - Agent tone: Helpful and brief.
  - Agent type: Vertical writing assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input ("write to them"): ask who it is for and what it should do. Constraint violation (asks for a source it may not use): say it can't and why.
  - Failure handover trigger: The person asks for help → the product support link; they can always write without the assistant.
  - Data needs: Account record (permitted fields only), approved templates.
  - Agent memory: Short-term: the request. Procedural: preferred tone and length.
  - Regulatory classification: Minimal risk; the AI interaction is disclosed.

### 2. Generate

- Stream text with a visible Stop button
- Do not move focus while text streams
- **error:** The draft couldn't be finished. Your prompt is saved — try again.
- **loading:** Streaming text with a status line
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the Stop button and never moves while text streams; Stop works with Enter or Space and is first in tab order.
  - Announced (A11Y-S1): Streaming text is not read word by word; a polite status says 'Writing draft', then 'Draft ready, 112 words'; the failure is announced assertively.
  - Errors (A11Y-E1): The failure message sits next to the draft area, says the prompt is saved, and offers Try again with the prompt kept.
  - Time limits (A11Y-W1): No time limit; generation can be stopped at any time.
  - Language (A11Y-L1): Write status as 'Writing draft' and 'Draft ready', not 'inference' or 'tokens'.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person presses Draft.
  - Agent goal: Produce a draft that fits the request.
  - Agent actions: Streams the draft into a clearly labelled AI draft area; Stop is always available and keeps what has arrived.
  - Agent tone: Matches the requested tone.
  - Agent type: Vertical writing assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Data unavailable (account record not loading): draft without figures and say so. Partial completion (stopped or timed out): keep the partial draft, labelled incomplete.
  - Failure handover trigger: Generation fails twice → show the error plainly and offer the template library; no automatic retry loop.
  - Data needs: The request, permitted account fields, templates.
  - Agent memory: Short-term.
  - Regulatory classification: Minimal risk; generated text is labelled.

### 3. Review

- Figures and names link to the source record
- Unsupported claims highlighted for checking
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the review heading; Tab goes through each linked figure and flagged claim in reading order, with Enter opening the source record.
  - Announced (A11Y-S1): The heading reads '2 figures from the account record, 1 statement without a source'; each flag has a text label 'No source' as well as an underline.
  - Errors (A11Y-E1): Nothing is entered here; a flagged claim is explained in text beside it, and the person can dismiss or edit it without losing the draft.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'no source' rather than 'unsupported' or 'hallucination', and show figures in full with units.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The draft finishes.
  - Agent goal: Make every fact checkable before sending.
  - Agent actions: Marks which statements come from the account record and which have no source; the person checks, edits or removes them.
  - Agent tone: Neutral; points out problems without alarm.
  - Agent type: Vertical writing assistant with a fact-check verifier.
  - Multi-agent handoff: Writer → verifier matches statements to sources → results shown.
  - Goal failure response: Low confidence on a figure: flag it as unverified rather than hiding it. Goal drift (ignores "under 120 words"): show the gap and offer a rewrite.
  - Failure handover trigger: Wrong figures that keep coming back → the person can report the draft; it goes to the content owner with the prompt and sources.
  - Data needs: Account record, the draft, source links.
  - Agent memory: Short-term.
  - Regulatory classification: Minimal risk; sources shown.

### 4. Edit

- Edit in place; show changes from the original draft
- Regenerate a section without losing edits elsewhere
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus goes to the paragraph being edited; Tab reaches Rewrite, Regenerate section and Show changes, with a keyboard shortcut for undo.
  - Announced (A11Y-S1): Changes are announced politely as 'Section regenerated, other edits kept'; tracked changes use text labels 'inserted' and 'removed'.
  - Errors (A11Y-E1): A failed rewrite is named beside that paragraph, the person's edits are kept, and undo restores the previous wording.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name the buttons by their action, such as 'Rewrite this paragraph', and avoid terms like 'regenerate' without a short explanation.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person selects text and asks for a change.
  - Agent goal: Help them make the message their own.
  - Agent actions: Suggests a rewrite beside the original; the person accepts or rejects it; their own edits are never overwritten.
  - Agent tone: Respectful of the person's voice.
  - Agent type: Vertical writing assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Rejected twice: stop suggesting for that paragraph. Ambiguous instruction: ask what to change.
  - Failure handover trigger: No handover needed — the person stays in control and can close the assistant at any time.
  - Data needs: The draft and the selected text.
  - Agent memory: Short-term; procedural: accepted and rejected styles.
  - Regulatory classification: Minimal risk.

### 5. Send

- Send button belongs to the user's normal editor, not the assistant
- Final preview shows recipients and attachments
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the preview heading; Tab reaches recipients, attachments, then Send in the editor's own toolbar, with Back before it.
  - Announced (A11Y-S1): The preview heading is announced first; after sending, 'Sent to 2 recipients' is a polite status and focus goes to that heading.
  - Errors (A11Y-E1): Send needs an explicit press after a final preview of recipients and attachments; a failed send is named in text and the draft is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): List recipients by name and address in full, and keep 'Sent items' as the link wording.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-S1: Streaming text sits in a region that is announced only when complete (“Draft ready, 112 words”); an automated screen reader test hears no per-word output.
- A11Y-K1: Stop, Regenerate and Accept are native buttons reachable by keyboard in a logical order, and focus does not move while text streams.
- A11Y-C2: Highlights for unsupported claims carry a text label and underline, and remain identifiable in greyscale.
- A11Y-S1: Every status change, including start, stop and failure, appears as visible text; no cue depends on sound.
- A11Y-E1: A failed draft shows a text message beside the draft area, and the typed prompt is still present after retry.
- A11Y-E3: Sending requires an explicit action after a final preview of recipients and attachments, and the admin switch-off state is stated in text.
- A11Y-W1: No step in the journey has a time limit, and generation can be stopped at any point.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Label drafts plainly: “AI draft — check before sending”
- Describe limits honestly: “I couldn't find a renewal date in this account”
- Avoid human-like claims: say “Draft”, not “I think you'll love this”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The assistant says it is AI and which sources it may use before drafting
- Every draft and suggestion is labelled as AI-made until the person accepts it
- Statements without a source are flagged before sending
- Stop is available while drafting and keeps what has arrived
- Nothing is sent without an explicit human action; the assistant takes no part in sending

## Edge cases

- Draft includes a price or discount not on the account — block send until the user confirms it
- Source record changed during drafting — show “Source updated” and offer to refresh
- Prompt asks for content against policy — decline briefly and say what the assistant can do
- Assistant switched off by admin — editor works normally with a short notice
- Draft could contain another customer's data — prevented and tested, not assumed: retrieval enforces account and tenant permissions; caches and generated output are isolation-tested; a suspected disclosure blocks the draft, alerts security and escalates to a person

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
