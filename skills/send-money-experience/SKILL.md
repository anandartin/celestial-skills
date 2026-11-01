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
- A11Y-R1: At 175% text size the form and summary reflow without clipping.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

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
