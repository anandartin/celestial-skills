---
name: send-money-experience
type: experience
journey: customer
persona: Retired teacher (72), pays a tradesperson
domain: Payments
technology: Native mobile app with tablet layout
core: "1.0"
description: "Experience skill: Paying someone new from a banking app — the best-practice customer journey for a retired teacher (72), pays a tradesperson in Payments on Native mobile app with tablet layout. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Paying someone new from a banking app

A customer adds a new payee, sees whether the name matches the account, and gets a clear fraud warning before money leaves.

**Outcome** — Fewer than 1 in 1,000 new-payee payments are reported as scams, while 90% of genuine first payments complete in under two minutes.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Margaret, Retired teacher (72), pays a tradesperson

> “If something's off, tell me plainly before I press send, not after.”

Paying a roofer's deposit by bank transfer for the first time; she normally writes cheques.

**Goals**
- Pay the right person the right amount
- Know it has arrived
- Avoid being tricked

**Pains**
- Codes that expire while she's reading
- Warnings full of jargon
- Not knowing whether a payment can be stopped

**Behaviours**
- Checks the account number twice against an invoice
- Calls her son before large payments
- Uses the tablet with text enlarged

**Access needs**
- Large text (175%)
- Mild hearing loss — prefers on-screen codes over phone calls

---

## Domain — Payments

- Strong customer authentication (PSD2 SCA) for new payees and payments, with dynamic linking to amount and payee
- Confirmation of payee result (match, close match, no match, unavailable) shown before the payment is confirmed
- Fraud warnings tailored to the payment purpose the customer selects, shown before confirmation
- State clearly that instant payments usually cannot be recalled once sent
- Reimbursement rights for authorised push payment scams explained in the help route

Vocabulary to use: `payee`, `sort code`, `account number`, `reference`, `name check`, `instant payment`

## Technology — Native mobile app with tablet layout

Inputs: Touch, Biometrics or passcode, Screen reader

- One-time code valid at least 5 minutes, with resend
- Name check service may be unavailable — must degrade with a warning
- Daily new-payee limits applied server-side

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **New payee** | Enter the person's name and account details | `form` | “Name on their account” |
| 2 | **Name check** | See whether details match the account | `feedback` | “The name doesn't match this account. Check with the person using a number you already have.” |
| 3 | **Why you're paying** | Pick a payment purpose to get a relevant warning | `form + chips` | “Has anyone told you to move money to keep it safe? We will never ask you to do that.” |
| 4 | **Amount and confirm** | Set amount and reference, then approve | `detail` | “Send £350.00 to D Okafor Roofing” |
| 5 | **Sent** | Know the money has gone and where to find it | `confirmation` | “£350.00 sent to D Okafor Roofing at 14:12. Most payments arrive within 2 hours.” |

### 1. New payee

- Name field labelled 'Name on their account'
- Sort code and account number formatted as typed
- **error:** Sort code must be 6 numbers — check the invoice and try again
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the name field; each field has a visible label, and the keyboard type suits the number fields; switch and screen reader focus follow the visual order.
  - Announced (A11Y-S1): Announces the screen title, then each label; the sort code error is announced assertively and read with the field.
  - Errors (A11Y-E1): The sort code message sits under the field, linked to it, says 'Sort code must be 6 numbers' and keeps what was typed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'sort code' and '6 numbers' in full, and avoid abbreviations like 'ID'.

### 2. Name check

- Match shown in words, not just a tick
- Close match offers the suggested name; no match advises stopping
- **error:** Name check unavailable — explain the risk and let them continue or wait
- **loading:** Checking the name with their bank
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the result heading; Continue and Go back are separate, with a gap.
  - Announced (A11Y-S1): Announces the result politely through a live region, such as 'The name doesn't match this account'; the outage message is assertive.
  - Errors (A11Y-E1): If the name check is unavailable, the risk is explained next to the result and the person can wait or continue; typed details stay.
  - Time limits (A11Y-W1): No time limit; the check can be retried.
  - Language (A11Y-L1): Explain 'name check' in one line and tell the person to use a number they already have.

### 3. Why you're paying

- Purpose chips: paying a bill, buying something, friend or family, investment, someone asked me to move money
- Warning text changes with the purpose
- **empty:** If no purpose is chosen, show the general warning
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; purpose chips are a radio group and the warning is read before Continue.
  - Announced (A11Y-S1): Announces the heading and the warning in text, then each chip as selected or not.
  - Errors (A11Y-E1): If no purpose is chosen, the general warning appears in text; the choice stays.
  - Time limits (A11Y-W1): No time limit; the warning step gives at least 20 minutes or an option to extend.
  - Language (A11Y-L1): Say 'move money to keep it safe' in plain words and avoid 'authorised push payment'.

### 4. Amount and confirm

- Payee name, amount and reference in large text above the approve button
- Approve with biometrics or passcode linked to this payment
- **error:** Over the daily limit — show the limit and when it resets
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the amount field; the summary lists payee, amount and reference before Approve, which is separated from Cancel; any one-time code field allows paste and autofill.
  - Announced (A11Y-S1): Announces 'Send £350.00 to D Okafor Roofing' as the summary; limit errors are assertive; the code is on screen, not by phone.
  - Errors (A11Y-E1): The limit message sits by the amount with the limit and reset time; the amount stays. This step is a review before sending, and Cancel is separate.
  - Time limits (A11Y-W1): The code is valid at least 5 minutes, warned at least 20 seconds before it ends, with a Resend button.
  - Language (A11Y-L1): Write the amount as '£350.00' and the limit in full.

### 5. Sent

- Show time sent and expected arrival
- Explain what to do if this was a scam
- **loading:** Sending…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; View payment is the first link.
  - Announced (A11Y-S1): Announces 'Sending' politely, then '£350.00 sent to D Okafor Roofing at 14:12'.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the amount in pounds and pence and say 'arrive within 2 hours'.

---

## Principles

1. Warnings come before the irreversible step, never after
2. The name check result is shown in words a first-time payer understands
3. Friction scales with risk: more questions for higher-risk purposes
4. No countdown pressure while the customer reads a warning
5. The approve action always restates payee and amount

## Do / Don't

**Do**
- Show the name check result with a clear next action
- Ask for the payment purpose and tailor the warning
- Give a 'stop and call us' route on every warning

**Don't**
- Pre-tick 'I understand the risk'
- Let a 'no match' payment go through with a single tap
- Use red alone to signal danger

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C2: Warnings use an icon and heading as well as colour (WCAG 1.4.1).
- A11Y-S1: The name check result is announced by screen readers via a polite live region.
- A11Y-W1: There is no timeout under 20 minutes on the warning step, or an option to extend (WCAG 2.2.1).
- A11Y-T1: The Approve button is at least 48px and separated from Cancel by at least 16px.
- A11Y-E3: The amount, payee and reference are shown for review before Approve, and Cancel is always available.
- A11Y-A1: One-time code fields allow paste and autofill, with the code shown on screen and no puzzle.
- A11Y-R1: At 200% text size (WCAG 1.4.4), and at the persona's own 175% setting, the form and summary reflow without clipping or lost content.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Scam warnings in second person and concrete: 'A real bank will never ask you to move money'
- Name results in plain words: 'Matches', 'Nearly matches', 'Doesn't match'
- Amounts always with currency and pence: '£350.00'

## AI interactions

- Risk scoring flags unusual payments for a pause and a call; a person reviews held payments and the customer is told how long the hold lasts
- No AI-written warning copy at run time because scam messaging must be reviewed and consistent

## Edge cases

- Customer on the phone to a 'bank' while paying — warning asks this directly and offers to end the session
- Close match on a business name — show the suggested name and explain trading names
- Duplicate payment within minutes — ask 'Did you mean to pay this again?'
- Name check service down — warn and allow a delay option
- Payee account is joint — explain why the name may differ

---

## Measures

| Measure | Target | How |
|---|---|---|
| Scam reports on new-payee payments | < 0.1% | Reported scams / new-payee payments, monthly |
| Time to first payment | < 2 min median | New payee started → payment sent |
| Stops after 'no match' | ≥ 60% | Share of no-match results that are abandoned or edited |
| Warning comprehension | ≥ 85% | Correct answers in post-task comprehension check |

Research: Usability sessions with 65+ customers using their own devices; Scenario tests with scripted scam pressure to see if warnings interrupt; Analytics review of name check outcomes and drop-off.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
