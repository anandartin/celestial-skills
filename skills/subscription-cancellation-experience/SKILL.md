---
name: subscription-cancellation-experience
type: experience
journey: customer
persona: Subscriber (58), cutting household costs
domain: Subscriptions
technology: Web and mobile app
core: "1.0"
description: "Experience skill: Cancelling a subscription in as few steps as signing up — the best-practice customer journey for a subscriber (58), cutting household costs in Subscriptions on Web and mobile app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Cancelling a subscription in as few steps as signing up

A subscriber finds cancel where they expect it, sees what happens to their access and money, and is done in no more steps than it took to join.

**Outcome** — Cancellation takes no more steps than sign-up, completes in under 90 seconds, and generates no support contacts to finish it.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Joseph, Subscriber (58), cutting household costs

> “I’ve made up my mind. Don’t make me argue with a chat window.”

Recently reduced his working hours; reviewing every recurring payment on his bank app.

**Goals**
- Stop the next payment
- Know when access ends
- Get written confirmation

**Pains**
- Cancel links hidden behind several menus
- Repeated offers and guilt messages
- Being told to phone during office hours

**Behaviours**
- Searches settings for “cancel”
- Takes screenshots as proof
- Checks his bank the following month

**Access needs**
- Arthritis — prefers fewer taps and larger buttons
- Reading glasses — uses 130% text size

---

## Domain — Subscriptions

- Cancellation is available online in the same medium used to subscribe and is no harder than signing up (automatic-renewal and click-to-cancel rules in several jurisdictions)
- Retention offers, if any, are shown at most once and can be declined in one action
- Written confirmation of cancellation, with the end date, is sent immediately
- Any refund for unused time follows the stated terms and statutory cooling-off rights
- Personal data is retained only as needed after cancellation; the deletion option is explained (GDPR)

Vocabulary to use: `cancel`, `access ends`, `renewal`, `pause`, `refund`, `confirmation email`

## Technology — Web and mobile app

Inputs: Touch, Keyboard, Screen reader

- Cancel reachable from account settings within two navigation levels
- Cancellation recorded server-side with timestamp before the confirmation screen shows
- If billed through an app store, deep link to its cancel screen

---

## Journey (4 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Find cancel** | Reach cancel from account settings quickly | `detail` | “Cancel subscription” |
| 2 | **What happens** | Understand access end date and money | `detail` | “You’ll keep access until 14 November. You won’t be charged again.” |
| 3 | **Confirm** | Confirm cancellation with one action | `form` | “Cancel my subscription” |
| 4 | **Done** | Get proof and know how to return | `confirmation` | “Cancelled. Confirmation sent to j.ellis@example.com. Reference CX-30917.” |

### 1. Find cancel

- Labelled “Cancel subscription” in settings, not “Manage”
- Searchable in help and settings
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Cancel subscription link; it is reachable in few Tab presses, is not hover-only, and is also found in help search.
  - Announced (A11Y-S1): Page title is Cancel subscription; the link text is exactly that, not 'Manage'.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use the words 'Cancel subscription' and avoid softer terms such as 'manage' or 'pause'.

### 2. What happens

- End date, refund and data all on one screen
- One optional offer, declinable in one tap
- **loading:** Show the end date first; refund detail after
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the heading; Tab reaches the offer, with Decline as an equal button, then Continue.
  - Announced (A11Y-S1): 'You'll keep access until 14 November, you won't be charged again' is read in full; refund detail is announced politely when it loads.
  - Errors (A11Y-E1): No input beyond choosing to decline or accept the offer; the choice is kept if the person goes back.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the end date in full, such as 14 November, and say plainly what happens to data.

### 3. Confirm

- Reason is optional and below the button
- Button says exactly what it does
- **error:** We couldn’t cancel just now. Nothing will be charged while we fix this — try again or we’ll email you.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Cancel my subscription button; the optional reason sits below it, and the button is at least 48px high.
  - Announced (A11Y-S1): The button text is read as 'Cancel my subscription'; the result is announced politely, and a failure is assertive.
  - Errors (A11Y-E1): This step ends a service, so the details are on the previous screen and the person can restart afterwards; a failure says nothing will be charged, and the reason typed stays.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep the button text identical to the action, and say whether any payment will be taken.

### 4. Done

- Reference number and end date on screen and by email
- Restart option shown, without pressure
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; Tab reaches the reference and a Restart link that carries no pressure.
  - Announced (A11Y-S1): 'Cancelled' is announced politely, then the email address and reference CX-30917 are read character by character.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Spell out the reference and the end date in full, and keep the restart wording neutral.

---

## Principles

1. Cancelling takes no more steps than subscribing
2. Say when access ends and whether money comes back
3. At most one offer, easy to decline
4. Proof of cancellation every time
5. Respect the decision: no guilt, no friction

## Do / Don't

**Do**
- Name the button “Cancel subscription”
- Send confirmation with a reference number
- Offer pause as an equal option, not a trap

**Don't**
- Require a phone call or chat to cancel
- Use confirmshaming such as “No, I don’t want to save money”
- Show multiple retention screens in a row

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: The cancel path works fully by keyboard and screen reader, with no hover-only links.
- A11Y-T1: Buttons are at least 48 px high with clear text labels.
- A11Y-S1: The confirmation is announced and focus moves to its heading.
- A11Y-C1: Decline and confirm buttons are equal in size and contrast, and meet 4.5:1 at 130% text size.
- A11Y-E3: Cancelling states the end date, refund and data effect first, and a Restart option remains after it is done.
- A11Y-E1: A failed cancellation is named in text, says nothing will be charged, and keeps what the person entered.
- A11Y-R1: The path stays usable at 200% zoom and 320px width without loss of function.
- A11Y-H1: A help link appears in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plain outcome first: “Cancelled. You won’t be charged again.”
- Offers stated neutrally: “Prefer to pause for up to 3 months?” with “No thanks” beside it
- No guilt or loss-framing language in any cancel step

## AI interactions

- No AI in this journey because cancellation must be predictable and auditable; a support assistant may link straight to the cancel screen but never argue against cancelling

## Edge cases

- Subscription billed through an app store — explain and deep-link to its cancel screen
- Cancellation inside the cooling-off period — refund in full and say so
- Shared family plan — explain what happens to other members’ access
- Payment already in progress on renewal day — cancel future renewals and explain any refund for today
- Customer wants account and data deleted too — offer it as a separate, clear option

---

## Measures

| Measure | Target | How |
|---|---|---|
| Steps to cancel | ≤ sign-up steps | Count of screens from settings to confirmation |
| Time to cancel | < 90 s | Median, settings → confirmation |
| Cancel support contacts | 0 required | Contacts needed to complete a cancellation |
| Charges after cancel | 0 | Charges issued after a confirmed cancellation |

Research: Step-count audit comparing sign-up and cancel paths; Unmoderated tests timing cancellation on mobile and desktop; Dark-pattern review against consumer protection guidance.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
