---
name: donation-experience
type: experience
journey: customer
persona: Supporter (45), uses voice control
domain: Charity · fundraising
technology: Responsive web
core: "1.0"
description: "Experience skill: Giving to a charity once or monthly — the best-practice customer journey for a supporter (45), uses voice control in Charity · fundraising on Responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Giving to a charity once or monthly

A supporter chooses an amount, gives once or monthly, makes a tax declaration if eligible, and receives a receipt and an easy way to manage their gift.

**Outcome** — A supporter completes a donation in under 90 seconds, with eligible tax declarations captured correctly and monthly gifts cancellable in two steps.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Fatima, Supporter (45), uses voice control

> “I want to give monthly, but I need to know I can stop it myself without phoning anyone.”

Teacher with repetitive strain injury who controls her laptop mostly by voice; supports a local food bank charity.

**Goals**
- Set up a monthly gift in a few minutes
- Add the tax declaration so the charity gets more
- Change or stop the gift herself

**Pains**
- Fields without visible labels her voice software can target
- Unclear tax declaration wording
- Cancelling that requires a phone call

**Behaviours**
- Speaks commands like “click Monthly”
- Reads the declaration carefully
- Keeps receipts for her tax return

**Access needs**
- Voice control — every control has a visible label matching its accessible name
- RSI — minimal typing, no drag

---

## Domain — Charity · fundraising

- Tax-relief declarations (gift aid style) only for eligible taxpayers; show the full declaration wording and get an explicit, unticked confirmation
- Marketing consent is separate, optional and unticked (GDPR, PECR)
- Card payments follow PCI DSS; recurring gifts state amount, date and frequency before confirmation
- Supporters can cancel a recurring gift online at any time, effective before the next payment
- Send a receipt for every gift, including the declaration record where made

Vocabulary to use: `donation`, `monthly gift`, `tax declaration`, `receipt`, `supporter`, `direct debit`

## Technology — Responsive web

Inputs: Voice control, Keyboard, Touch, Screen reader

- Hosted payment fields with wallet and bank-debit options
- Recurring gifts managed via account or a secure link in each receipt
- Address lookup for declaration eligibility

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Amount** | Choose how much and how often | `form + chips` | “£10 a month provides 30 meals” |
| 2 | **Your details** | Give name, email and address for the receipt | `form` | “Where should we send your receipt?” |
| 3 | **Declaration** | Make the tax declaration if eligible | `form` | “I am a taxpayer and want the charity to claim tax back on my gifts” |
| 4 | **Payment** | Pay securely with a preferred method | `form` | “Give £10 monthly, first payment today” |
| 5 | **Thank you** | Know the gift worked and what it does | `confirmation` | “Thank you, Fatima. Your first £10 has been received” |
| 6 | **Manage** | Change or stop a monthly gift | `detail` | “Cancel monthly gift — no more payments after today” |

### 1. Amount

- Suggested amounts with what each funds, plus a custom amount
- Once and monthly as equal choices; neither pre-selected
- **error:** Enter an amount of £2 or more
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Amount heading; the amount chips are radio buttons in a labelled group, arrow keys move between them, and Tab reaches the custom amount and Continue.
  - Announced (A11Y-S1): Title reads “Give to the charity”; each chip reads its amount and what it funds, and once or monthly are equal choices with neither pre-selected.
  - Errors (A11Y-E1): The amount error “Enter an amount of £2 or more” appears beside the field, linked to it and listed in a summary; the amount typed is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write amounts with the pound sign in full, for example “£10 a month”, and keep the impact line as one short sentence.

### 2. Your details

- Ask address only if a declaration is made or post is chosen
- Visible labels on every field
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Your details heading; Tab goes name, email, then address if needed, and autofill with correct autocomplete tokens works.
  - Announced (A11Y-S1): Every field has a visible label that matches its accessible name for voice control; the address lookup results are announced politely.
  - Errors (A11Y-E1): Errors appear in text beside each field, linked to it and listed in a summary; everything already typed is kept, and nothing from step 1 is asked again.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain why the address is needed in one sentence, and avoid abbreviations such as “addr.” in labels.

### 3. Declaration

- Full declaration text shown, not behind a link
- Eligibility explained in one sentence
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Declaration heading; the declaration checkbox is a native control with the full declaration text next to it, and Tab goes on to Continue.
  - Announced (A11Y-S1): The full declaration is read as text, not behind a link; checking the box is announced as checked.
  - Errors (A11Y-E1): If eligibility is unclear, the error is written beside the checkbox and linked to it; the box can be unticked to correct it, and the choice is shown again at the review before payment.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say in one plain sentence who is eligible, and write “tax” terms in full rather than with initials.

### 4. Payment

- Amount and frequency restated beside the pay button
- Explain when the first and next payments happen
- **error:** Payment didn't go through. No money was taken
- **loading:** Processing your gift…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Payment heading; Tab goes to the hosted payment fields (the frame has a title) and then the pay button, which names the amount and frequency. Paste and autofill work.
  - Announced (A11Y-S1): Title reads “Pay”; “Processing your gift” is announced politely and a decline is announced assertively, with “No money was taken”.
  - Errors (A11Y-E1): The failure message is in text beside the payment fields, and the amount, frequency and details are kept; the pay button restates the amount so the gift is checked before it is confirmed.
  - Time limits (A11Y-W1): No time limit; the page is not timed out while the person completes payment.
  - Language (A11Y-L1): State the amount, the frequency and the date of the first and next payments in full, such as “£10 on 1 December”.

### 5. Thank you

- Thank in specifics, not superlatives
- Receipt sent; link to manage the gift
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the Thank you heading; Tab reaches the receipt link and then Manage your gift.
  - Announced (A11Y-S1): The thank you is announced politely with the amount received and that a receipt was sent to the email address.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Thank in specifics, with the amount in full, and avoid superlatives and exclamation marks.

### 6. Manage

- Change amount, date or cancel in two steps
- Cancellation effective date stated clearly
- **empty:** You have no regular gifts
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Manage heading; Tab reaches Change amount, Change date, then Cancel monthly gift, which opens a confirm step.
  - Announced (A11Y-S1): Cancel opens a dialog that is announced with its title; the cancellation date is read before the confirm button.
  - Errors (A11Y-E1): Cancelling needs an explicit confirm step that restates “no more payments after today”; changes can be reversed by setting up the gift again, and field errors sit beside the field with values kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the cancellation date in full and say what stops, using the words “no more payments”.

---

## Principles

1. Neither once nor monthly is pre-selected
2. Declarations are explicit and complete
3. Cancel online as easily as you started
4. Ask for data only when it's used
5. Specific thanks and receipts every time

## Do / Don't

**Do**
- Show what an amount funds
- Show the full declaration wording
- Put a manage link in every receipt

**Don't**
- Pre-select monthly or pre-tick consent
- Hide cancellation behind a phone line
- Use guilt-based copy

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-N1: Every control has a visible label that matches its accessible name, so voice control commands work.
- A11Y-K1: Amount chips are radio buttons in a labelled group and the whole journey works by keyboard with no drag.
- A11Y-T1: Targets are at least 24×24px, and 44px where possible, on chips and buttons.
- A11Y-S1: Payment status such as “Processing your gift” is announced through a polite live region, and a failure is announced assertively.
- A11Y-E3: Payment shows the amount and frequency beside the pay button, and cancelling a monthly gift needs a confirm step.
- A11Y-E1: Errors are in text next to the field, linked to it, and the typed amount and details are kept.
- A11Y-L1: Amounts and dates are written in full, and the declaration text is plain language shown in the page.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Concrete impact: “£10 provides 30 meals” not “Your gift changes everything”
- Plain declaration: “You must pay at least as much tax as the charity will claim”
- Warm and brief thanks with the supporter's name and amount

## AI interactions

- No AI in the giving flow because amounts, declarations and consents must be the supporter's own explicit choices

## Edge cases

- Supporter is not a taxpayer — declaration hidden after one question, gift continues
- Card expires on a monthly gift — notify before the next payment with an update link
- Duplicate payment by double-tap — idempotency prevents a second charge
- Supporter asks for a refund of a mistaken gift — route to a person with a stated response time
- Supporter is under 18 — explain they can give but cannot make a tax declaration

---

## Measures

| Measure | Target | How |
|---|---|---|
| Donation completion | ≥ 70% | Amount chosen → paid |
| Time to give | < 90 s | Median, start → confirmation |
| Declaration accuracy | ≥ 98% | Declarations passing eligibility audit |
| Self-serve cancellations | ≥ 90% | Cancellations done online / all cancellations |

Research: Usability sessions with voice control and screen reader users; A/B test of impact copy vs plain amounts, checked for dark patterns; Review of declaration wording with the charity's finance team.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
