---
name: notification-preferences-experience
type: experience
journey: customer
persona: Delivery driver (40), shift worker on a basic phone plan
domain: Communications and consent
technology: Mobile app with matching web settings
core: "1.2"
description: "Experience skill: Choosing which alerts arrive where, with quiet hours — the best-practice customer journey for a delivery driver (40), shift worker on a basic phone plan in Communications and consent on Mobile app with matching web settings. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Choosing which alerts arrive where, with quiet hours

A customer decides which alerts they get by email, push or text, sets quiet hours for their time zone, and knows that essential security and legal messages will still reach them.

**Outcome** — At least 70% of people who open notification settings leave with a saved change, and opt-outs from all notifications fall by 30% versus a single on/off switch.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.2 components and patterns, and let the active design skill render them.

---

## Persona — Ibrahim, Delivery driver (40), shift worker on a basic phone plan

> “I sleep in the day. I don't want offers waking me up, but I do want to know if someone pays me.”

Uses a marketplace app to sell items; works nights, sleeps mornings, pays for texts and has patchy data on the road.

**Goals**
- Stop marketing messages
- Get payment alerts at once
- Keep the phone quiet while he sleeps

**Pains**
- One switch that turns off everything, including important alerts
- Quiet hours that assume a day job
- Texts that cost him money

**Behaviours**
- Checks the app on breaks
- Uses push more than email
- Turns the phone to silent when it gets annoying

**Access needs**
- Reads English as a second language
- Low data — needs a page that loads on a weak signal

---

## Domain — Communications and consent

- Marketing messages need opt-in consent, and every one has a one-step unsubscribe (GDPR, ePrivacy and equivalent rules)
- Security and legal notices (sign-in alerts, policy changes, receipts) are not switchable but are kept to the minimum and labelled
- Text-message charges are disclosed before text alerts are enabled
- Quiet hours use the person's chosen time zone; urgent security alerts may override and say so
- Record each consent change with time and channel for audit

Vocabulary to use: `alert`, `channel`, `push`, `email`, `text message`, `quiet hours`, `essential message`

## Technology — Mobile app with matching web settings

Inputs: Touch, Screen reader, System notification permission

- Respect the operating system's notification permission; explain if it is off
- Settings sync across devices within one minute
- Page under 200 KB for weak connections

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Overview** | See what alerts exist and how they arrive | `list + filters` | “Payments · Push and email” |
| 2 | **Choose channels** | Pick push, email or text per topic | `form + chips` | “Security alerts always go to your email so you can act quickly” |
| 3 | **Quiet hours** | Set when the phone stays quiet | `form` | “Quiet from 08:00 to 16:00 (London time)” |
| 4 | **Save** | Know the changes took effect | `confirmation` | “Saved. Offers are off. Undo” |
| 5 | **Digest** | Get non-urgent alerts in a summary | `inbox` | “Your daily summary: 3 new messages, 1 price drop” |

### 1. Overview

- Group by topic: Orders, Payments, Messages, Offers, Security
- Show current channels per group in words
- **error:** Couldn't load settings. Your current choices still apply. Try again.
- **loading:** Loading your settings…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; groups are reached in order, and each group row is a link that opens its channels.
  - Announced (A11Y-S1): Page title is Overview; each group is read with its current channels, such as 'Payments, push and email', and loading is a polite status.
  - Errors (A11Y-E1): A load failure is named in text with Try again, and the message says current choices still apply.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use short, plain topic names and write 'push' with 'phone alerts' once; keep sentences simple for second-language readers.

### 2. Choose channels

- Channels as labelled toggles per topic
- Essential messages shown as locked with a reason
- **error:** Push is off for this app on your phone. Turn it on in phone settings.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first topic; each toggle is a switch named by topic and channel, such as 'Payments by push', and locked items can be focused.
  - Announced (A11Y-S1): A switch change is announced politely, 'Payments by push, on'; a locked item explains its reason when focused.
  - Errors (A11Y-E1): The phone-settings problem is named beside the push switch with steps to fix it, and other choices stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain 'locked' as 'always on for your safety' and avoid terms like 'transactional'.

### 3. Quiet hours

- Any start and end time, crossing midnight allowed
- Time zone shown and changeable
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the start time; times can be typed as well as chosen with a wheel, and the time zone is a labelled control.
  - Announced (A11Y-S1): 'Quiet from 08:00 to 16:00, London time' is read in full, including a note when the range crosses midnight.
  - Errors (A11Y-E1): An invalid time is named beside the field and linked to it, and the typed times stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write times in 24-hour form with the time zone name, and say 'London time' rather than an abbreviation.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person opens Quiet hours and there is enough history of alerts left unread to suggest a window, or they ask for a suggestion.
  - Agent goal: Suggest a quiet-hours window that fits the person's real schedule and time zone.
  - Agent actions: Says it is an AI assistant that can suggest quiet hours from when alerts usually go unread, and that it cannot change settings or consent. Shows one labelled suggestion, such as 'Quiet from 08:00 to 16:00, London time', with the reason; the person accepts, edits or dismisses it, and nothing is saved without their tap.
  - Agent tone: Brief and plain, easy for second-language readers; no pressure.
  - Agent type: Vertical settings assistant; single.
  - Multi-agent handoff: The AI assistant prepares the suggestion; the settings service saves only what the person confirms.
  - Goal failure response: Data unavailable (too little history, or a recent change of time zone): say so and leave the times for the person to set. Goal drift (the window would also delay payment alerts the person wants): name which alerts still come through and let them choose. Ambiguous input (travelling across time zones): ask whether quiet hours should follow the phone or stay fixed.
  - Failure handover trigger: The person asks for a person: support by chat or email immediately, with the handover context package (their goal, the times suggested and edited, time zone, current settings). After two rejected suggestions it stops suggesting and leaves manual times.
  - Data needs: When alerts were opened or left unread over recent weeks, the chosen time zone, current quiet hours.
  - Agent memory: Short-term for the suggestion; the read-time history it uses can be viewed and deleted by the person.
  - Regulatory classification: Minimal AI risk; data protection applies to the behaviour data used, with the purpose stated and a way to turn it off; AI interaction disclosed; consent records under e-privacy rules are untouched.

### 4. Save

- Save automatically per change, with a visible confirmation
- Offer undo for five seconds
- **error:** Not saved — you're offline. We'll save when you're back online.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the control just changed; the Undo button comes next in tab order and is reachable by keyboard.
  - Announced (A11Y-S1): 'Saved, Offers are off' is a polite status; the failure is assertive and says it will save when back online.
  - Errors (A11Y-E1): Undo is offered for at least five seconds and can be extended, so a change is easily reversed; a failed save keeps the choice and retries.
  - Time limits (A11Y-W1): Undo shows for five seconds; a status message warns that it will disappear, and the choice can be reversed later in settings.
  - Language (A11Y-L1): Use 'Saved' and 'Undo' as short words and explain offline saving in one sentence.

### 5. Digest

- Bundle low-priority alerts into one daily message
- Each digest links straight to settings
- **empty:** Nothing new today
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the message heading; the settings link is the first link, and the digest is plain text that reads in order.
  - Announced (A11Y-S1): 'Your daily summary, 3 new messages, 1 price drop' is read as a list; the empty message is read as text.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the digest in short lines and keep prices and dates in full.

---

## Principles

1. Fine-grained control beats a single off switch
2. Essential messages are few, labelled and explained
3. Quiet hours fit any schedule and time zone
4. Costs are disclosed before they are incurred
5. Changes save instantly and can be undone

## Do / Don't

**Do**
- Offer a one-tap “Only important alerts” preset
- Show an example of each alert type
- Link to settings from the footer of every message

**Don't**
- Hide unsubscribe behind sign-in
- Re-enable marketing after an app update
- Send texts without telling people they may be charged

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: Meets WCAG 2.2 AA; each toggle is a switch named by topic and channel, such as “Payments by push”.
- A11Y-S1: Switch changes are announced, and locked items explain why when focused.
- A11Y-K1: Time pickers accept typed input as well as scroll wheels.
- A11Y-T1: Targets are at least 48 × 48 px on mobile with 8 px spacing.
- A11Y-L1: Copy uses short sentences and plain topic names suited to second-language readers.
- A11Y-E3: Each change can be undone for at least five seconds, and the person can also reverse it later in settings.
- A11Y-W1: The five-second undo is announced, can be extended, and the change stays reversible afterwards.
- A11Y-H1: A help link appears in the same place on every step, and the page loads usable text first on a weak signal.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Topic names in everyday words: “Payments” not “Transactional events”
- Locked items give a reason: “We always send this so you can stop unauthorised sign-ins”
- Confirmation is short and specific: “Saved. Offers are off.”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- Only the Quiet hours step uses an AI assistant; it says it is an AI assistant that can suggest a quiet-hours window and that it cannot change any setting or consent.
- The suggested window is labelled as AI-made with its reason, and nothing changes until the person taps to accept it or edits it.
- Marketing consent, channel choices, text-message charges and unsubscribes are the person's own choices; the AI assistant never sets, suggests or changes them.
- Essential security and legal messages stay on and labelled, and the suggestion says that urgent security alerts may still arrive during quiet hours.
- The person can turn suggestions off, see and delete the read-time history they use, and ask for a person at any time.

## Edge cases

- System permission revoked — show what won't arrive and how to turn it back on, without nagging
- Person travels across time zones — ask whether quiet hours should follow the phone or stay fixed
- Urgent security alert during quiet hours — deliver it and explain the override in the message
- Unsubscribe link clicked from an old email — honour it immediately without sign-in

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Person — preferred language, time zone, email, phone number for texts, push devices · relates to Channel preference, Quiet hours, Marketing consent · personal data
- Notification topic — name, essential or optional, reason if essential, example alert · relates to Channel preference
- Channel preference — topic, push, email, text message, updated date · relates to Person, Notification topic · personal data
- Marketing consent — given, channel, date and time, source, withdrawn date · relates to Person, Consent audit record · personal data
- Quiet hours — start, end, time zone, follows phone or fixed, set by person or accepted suggestion · relates to Person · personal data
- Alert read history — sent time, opened time, left unread · relates to Person, Quiet hours · personal data
- Digest — date, items, channel · relates to Person · personal data
- Consent audit record — change, channel, when, how made · relates to Marketing consent, Channel preference · personal data

### Systems it touches

- Preferences service — reads preferences, quiet hours; writes preferences, quiet hours · when down: Current choices still apply; changes are kept on the device and saved when the service is back, and the person is told.
- Consent record store — reads consent history; writes consent changes with time and channel · when down: Opt-outs and unsubscribes take effect at once and are recorded when the store is back; new marketing opt-ins wait until they can be recorded.
- Messaging service (email, push, text) — reads channel preferences, quiet hours, essential list; writes sent alerts, digests · when down: Optional alerts are queued; essential security alerts go by another working channel.
- Phone notification permission — reads permission state · when down: Treat push as off, say which alerts won't arrive and how to turn it back on.
- Quiet-hours suggestion service — reads alert read history, time zone; writes suggestion only · when down: No suggestion is shown; the person sets times themselves.

### Roles

- Customer — choose channels per topic, give or withdraw marketing consent, set quiet hours and time zone, accept, edit or dismiss a suggestion, undo a change, unsubscribe from any message without signing in
- Privacy team — set the essential message list and reasons, audit consent records, receive handovers about consent
- Support team member — explain settings, receive handovers from the AI assistant
- AI assistant — suggest a quiet-hours window, explain why it was suggested, hand over to a person, works at most in Advisory mode; never changes settings or consent

### Default targets (the product confirms or replaces them)

- Sessions in settings with a saved change: 70% or more (range 60–80%)
- Settings synced across devices: Within 1 minute (range 10 seconds – 1 minute)
- Undo shown after a change: 5 seconds, extendable (range 5–10 seconds)
- Settings page size: Under 200 KB (range 100–200 KB)
- Unsubscribe honoured: Immediately, without sign-in (range Immediately)
- AI assistant reply time: Under 3 seconds (range 1–5 seconds)
- Consent records kept: The legal minimum for the jurisdiction (range Set by data protection and e-privacy law)

### Required inputs and configuration

- Topics, with essential ones and the reason each is essential
- Channels offered and text-message charge wording
- Marketing consent wording
- Default quiet hours and time zone rule when travelling
- Digest timing and contents
- Whether quiet-hours suggestions are offered, and the data they use
- Support contact

---

## Measures

| Measure | Target | How |
|---|---|---|
| Saved change rate | ≥ 70% | Sessions in settings with one or more saved change |
| Full opt-outs | −30% | Accounts turning off all optional alerts vs baseline |
| Marketing complaints | < 0.1% | Spam reports ÷ marketing sends |
| Quiet-hours adoption | ≥ 25% | Active accounts with quiet hours set |

Research: Diary study with shift workers over two weeks; Usability test of settings on low-end phones with a throttled connection; Consent record audit against legal requirements.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
