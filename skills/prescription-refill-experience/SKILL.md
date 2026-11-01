---
name: prescription-refill-experience
type: experience
journey: customer
persona: Patient (72), rural, lives alone
domain: Healthcare · pharmacy
technology: Responsive web and native app
core: "1.0"
description: "Experience skill: Requesting a repeat prescription with pickup or delivery — the best-practice customer journey for a patient (72), rural, lives alone in Healthcare · pharmacy on Responsive web and native app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Requesting a repeat prescription with pickup or delivery

A patient picks the repeat medicines they need, sees what needs a review, and chooses pickup or delivery with a clear ready date.

**Outcome** — A patient requests a repeat prescription in under two minutes and knows when and where it will be ready, with fewer than 5% of requests needing a follow-up call.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Walter, Patient (72), rural, lives alone

> “I take six tablets a day. I just need the right ones to turn up before I run out.”

Has Parkinson's and high blood pressure; the nearest pharmacy is 14 miles away and the bus runs twice a day.

**Goals**
- Order only the medicines that are running low
- Get them delivered when he can't travel
- Know they will arrive before he runs out

**Pains**
- Tremor makes small checkboxes hard to tap
- Medicine names that look almost identical
- No word on whether the request was approved

**Behaviours**
- Orders on a tablet propped on a stand
- Keeps the empty boxes to check names
- Asks his daughter to double-check by phone

**Access needs**
- Tremor — targets at least 48px, no drag gestures
- Slower reading — no timeouts
- Prefers larger text (150%)

---

## Domain — Healthcare · pharmacy

- Only medicines on the patient's authorised repeat list can be requested; anything else goes to the prescriber
- Items past their review date need prescriber review before issue; say so before the patient submits
- Controlled medicines need identity checks at pickup and a signature on delivery
- Health data is special-category (GDPR) / PHI (HIPAA): delivery labels show no medicine names
- Ordering for someone else requires their recorded consent or a registered proxy role

Vocabulary to use: `repeat prescription`, `prescriber`, `medication review`, `pharmacy`, `proxy`, `ready for collection`

## Technology — Responsive web and native app

Inputs: Touch, Screen reader, Voice dictation

- Integrates with prescriber system for approval status
- Pharmacy stock check before a ready date is promised
- Notifications by SMS and app; SMS carries no medicine names

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Choose medicines** | Pick the repeats that are running low | `list + filters` | “Which medicines do you need?” |
| 2 | **Check** | See what can be issued now and what needs review | `detail` | “Amlodipine 5mg needs a quick review by your prescriber. This can add 2 working days” |
| 3 | **Pickup or delivery** | Choose where to get the medicines | `form + chips` | “Delivery to your home · ready by Thursday” |
| 4 | **Confirm** | Know the request is sent and what happens next | `confirmation` | “Request sent. We'll text you when it's ready” |
| 5 | **Ready** | Collect or receive the medicines | `feedback` | “Your medicines are ready at Hillcrest Pharmacy until 18:00” |

### 1. Choose medicines

- Each item shows name, strength, dose and when last ordered
- Whole row is the tap target, not a small checkbox
- **empty:** You have no repeat medicines yet. Ask your prescriber to add them
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; each medicine is one large row, selected with Enter or Space, and no drag gesture is needed.
  - Announced (A11Y-S1): Each row reads "name, strength, dose, last ordered" and its state, and each choice announces "2 of 6 medicines selected" politely.
  - Errors (A11Y-E1): If nothing is selected, the message is text beside the list, and selections are kept. The empty state tells the person to ask their prescriber.
  - Time limits (A11Y-W1): No time limit; the page never times out.
  - Language (A11Y-L1): Show strength and dose in full words and avoid abbreviations such as "mg" alone without "milligrams" in the reading text.

### 2. Check

- Review-due items flagged in words, not only colour
- Explain what a review means and how long it adds
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first flagged item; review-due items are marked in words, and a link explains what a review means.
  - Announced (A11Y-S1): Title "Check" is read; each item reads "needs a review by your prescriber, this can add 2 working days" in full.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain "review" and how long it adds in one plain sentence, and avoid clinical terms.

### 3. Pickup or delivery

- Show ready date for each option before choosing
- Controlled items explain the ID or signature needed
- **error:** We can't deliver to this postcode. Choose a pharmacy instead
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first option; options are large radio rows with ready dates, and a postcode field accepts autofill, with no drag gestures.
  - Announced (A11Y-S1): Each option reads "Delivery to your home, ready by Thursday"; the chosen option is announced politely.
  - Errors (A11Y-E1): A postcode error is written in text beside the field and linked to it, with the postcode kept and a pharmacy offered; ID needs for controlled items are shown before choosing.
  - Time limits (A11Y-W1): No time limit; the person can take as long as they need.
  - Language (A11Y-L1): Give the ready date with the weekday in full, and say what ID or signature a controlled item needs.

### 4. Confirm

- Restate items, option and expected date in large text
- Show how to change or cancel before it is dispensed
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "Request sent" heading; the restated items, option and expected date follow, then Change or Cancel as separate large buttons.
  - Announced (A11Y-S1): "Request sent, we'll text you when it's ready" is read as the heading, with the items and date announced politely.
  - Errors (A11Y-E1): Change or Cancel shows a confirm step and can be undone until the medicines are dispensed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say "text" rather than "SMS", and note that texts never include medicine names.

### 5. Ready

- Notification gives place, hours and what to bring
- Delayed items explained with a new date
- **error:** One item is out of stock. We'll have it by Monday
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; place, hours and what to bring are a short list, and directions open as text.
  - Announced (A11Y-S1): "Your medicines are ready at the pharmacy until 6 pm" is read as the heading; an out-of-stock item is announced politely with its date.
  - Errors (A11Y-E1): A stock problem is explained in text beside the item with its new date, and the rest of the order is kept.
  - Time limits (A11Y-W1): Collection is until a stated time; a reminder is sent well before it ends, and the pharmacy can hold it later on request.
  - Language (A11Y-L1): State the closing time in full, such as "6 pm", and explain delay dates in plain words.

---

## Principles

1. Only show what the patient can actually order
2. Flag reviews before submission, not after
3. Every status change reaches the patient
4. Private by default: no medicine names outside the app
5. Large, forgiving targets for every choice

## Do / Don't

**Do**
- Show when each medicine was last ordered
- Give a ready date before the patient chooses
- Let a registered proxy order with consent

**Don't**
- Let patients type free-text medicine names into an order
- Put medicine names in SMS or on parcels
- Promise a date before checking stock and approval

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-T1: Targets are at least 48 by 48px, beyond the 24px minimum, and the whole row is the tap target
- A11Y-S1: Selected items are announced with a count, such as "2 of 6 medicines selected"
- A11Y-C2: Status uses text and an icon, never colour alone
- A11Y-R1: Text reflows at 200% with no horizontal scrolling
- A11Y-K1: No drag gestures are used; every action works by tap, keyboard or switch access
- A11Y-E3: Confirm restates items, option and date, and Change or Cancel is available until the medicines are dispensed
- A11Y-W1: The page never times out, and pickup deadlines are stated in full

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Use the name and strength exactly as printed on the box: “Amlodipine 5mg tablets”
- Dates in words: “Thursday 16 October”, not “16/10”
- Say who acts next: “Your prescriber will review this”

## AI interactions

- No AI in choosing or approving medicines because errors carry clinical risk; ordering is a deterministic list from the prescriber's record

## Edge cases

- Patient orders too early — explain when it can be ordered and why
- Medicine discontinued since last order — direct to prescriber, don't silently drop it
- Delivery missed for a controlled item — return to pharmacy and notify with collection steps
- Proxy's consent has lapsed — block ordering and explain how to renew
- Patient says they have run out — show urgent supply guidance

---

## Measures

| Measure | Target | How |
|---|---|---|
| Request completion | ≥ 90% | Started → sent |
| Time to request | < 2 min | Median, users 65+ |
| Follow-up calls | < 5% | Requests followed by a call to the pharmacy |
| On-time readiness | ≥ 95% | Ready by the promised date |

Research: Usability sessions with older adults with tremor on their own tablets; Pharmacist and prescriber walkthrough of review and controlled-drug rules; Diary study over two refill cycles.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
