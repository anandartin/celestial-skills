---
name: plan-upgrade-experience
type: experience
journey: customer
persona: Owner of a two-person bakery (47), on a booking software plan
domain: Subscriptions and billing
technology: Web app, tablet and desktop
core: "1.0"
description: "Experience skill: Upgrading or downgrading a subscription plan with prorated pricing — the best-practice customer journey for a owner of a two-person bakery (47), on a booking software plan in Subscriptions and billing on Web app, tablet and desktop. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Upgrading or downgrading a subscription plan with prorated pricing

A subscriber changes plan and sees exactly what they will pay today, what changes next bill and what they gain or lose, before confirming.

**Outcome** — At least 95% of plan changes complete without a billing support contact, and fewer than 2% are reversed within 7 days.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Bao, Owner of a two-person bakery (47), on a booking software plan

> “I’ll pay for more if I need it — I just want to see the sum before you take it.”

Manages the business account on a tablet between shifts; English is her second language.

**Goals**
- Add more staff seats for the busy season
- Drop back down in January without losing bookings
- Know today’s charge and next month’s

**Pains**
- Proration figures with no explanation
- Losing data or settings on downgrade
- Being charged twice in one month

**Behaviours**
- Reads prices carefully and checks bank statements
- Uses a translation tool for long text
- Changes plans seasonally

**Access needs**
- Second-language reader — needs short sentences and plain numbers
- Uses a tablet with greasy hands — larger targets

---

## Domain — Subscriptions and billing

- The amount charged now, the credit applied and the next recurring amount are shown before the change is confirmed
- Downgrades state which features and data will be limited and when, before confirmation
- Invoices for business customers include the tax details required for VAT or sales tax
- Payment for an upgrade uses the stored payment token; SCA is triggered where the bank requires it (PSD2)

Vocabulary to use: `upgrade`, `downgrade`, `proration`, `credit`, `billing cycle`, `seat`

## Technology — Web app, tablet and desktop

Inputs: Touch, Mouse and keyboard, Browser translation

- Proration preview computed by the billing provider, not estimated in the client
- Plan state changes only after payment success webhook
- Downgrades scheduled for the end of the cycle by default

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Current plan** | See the current plan, usage and limits | `dashboard · empty state` | “Starter · 2 of 2 staff seats used · Renews 1 November” |
| 2 | **Compare** | Compare plans by what matters to this account | `table + totals` | “Team · 5 staff seats · £29/month” |
| 3 | **Preview cost** | Understand today’s charge and future bills | `table + totals` | “Pay today £11.40 · From 1 November £29/month” |
| 4 | **Downgrade check** | Know what will be limited before downgrading | `form` | “On Starter you’ll have 2 seats. Choose which 3 staff lose access on 1 November.” |
| 5 | **Confirm** | Confirm and get a receipt | `confirmation` | “You’re on Team. We charged £11.40 to card ending 2280. Receipt sent.” |

### 1. Current plan

- Usage against limits shown in numbers
- “Change plan” button next to the limit reached
- **loading:** Show plan name and renewal date first; usage fills in after
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the plan heading; Change plan is a large button next to the limit, reachable in one Tab from the usage numbers.
  - Announced (A11Y-S1): The plan name and renewal date are read first; usage is announced politely when it loads, such as '2 of 2 staff seats used'.
  - Errors (A11Y-E1): No input on this step; a failed usage load is named in text with Try again.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write 'staff seats' and 'renews on 1 November' in short sentences, and spell out the currency.

### 2. Compare

- Highlight the differences, not every feature
- Mark the current plan clearly
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the comparison table heading; the table has row and column headers, and each Choose plan button is named with its plan.
  - Announced (A11Y-S1): The table is read by plan and feature, with the current plan marked 'Your plan' in text; selection is announced politely.
  - Errors (A11Y-E1): No input beyond choosing; if no plan is chosen, a message beside the button says so, and nothing changes.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show only the differences, and write prices as '£29 a month' in full.

### 3. Preview cost

- Show credit for unused days on the old plan as its own line
- Explain proration in one sentence
- **error:** We couldn’t calculate the price. Nothing has changed. Try again.
- **loading:** Calculating your price…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the cost heading; the table of charges is read in order with headers, and Continue follows the totals.
  - Announced (A11Y-S1): 'Pay today £11.40, from 1 November £29 a month' is read in full; calculation is a polite status and the failure is assertive.
  - Errors (A11Y-E1): A failed price calculation says nothing has changed and offers Try again; the plan choice is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain the credit for unused days in one sentence, and write amounts and dates in full.

### 4. Downgrade check

- Name what is affected and when
- Data is kept and returns on upgrade
- **error:** Choose 3 staff before continuing
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the seat list; each staff member is a checkbox, and the count chosen is read as '2 of 3 chosen'.
  - Announced (A11Y-S1): The step heading and 'On Starter you'll have 2 seats' are read first; the selected count is announced politely.
  - Errors (A11Y-E1): 'Choose 3 staff before continuing' is named beside the list, linked from a summary, and the choices made stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say who loses access and on what date, and write that data is kept and returns on upgrade.

### 5. Confirm

- Confirmation repeats amount, card and next bill
- Undo available for 24 hours with full credit
- **error:** Your card was declined. You’re still on Starter. Update your card to try again.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; Tab reaches the receipt link and an Undo button, with large targets for tablet use.
  - Announced (A11Y-S1): 'You're on Team, charged £11.40 to card ending 2280' is announced politely; a declined card is announced assertively.
  - Errors (A11Y-E1): A review of amount, card and next bill comes before paying; a declined card message keeps the old plan, and undo is available for 24 hours with full credit.
  - Time limits (A11Y-W1): No time limit; the undo window of 24 hours is stated in text on the page.
  - Language (A11Y-L1): Write the amount, card ending and next bill date in full, and say 'undo for 24 hours' plainly.

---

## Principles

1. Show the exact charge today and the next bill before confirming
2. Explain proration in plain words with the numbers
3. Downgrades never delete data without warning and a choice
4. Plan only changes after payment succeeds
5. Easy to reverse a mistaken change

## Do / Don't

**Do**
- Itemise credit and charge as separate lines
- Schedule downgrades for the end of the billing period by default
- Offer a short undo window

**Don't**
- Show only a per-month price when a larger amount is charged today
- Remove features immediately on downgrade without saying so
- Make downgrading harder to find than upgrading

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: The price preview is a table with headers and totals read in order by screen readers.
- A11Y-L1: Amounts and dates use the person's locale format, and currency is written as well as symbolised.
- A11Y-T1: Tap targets are at least 48 × 48 px on tablet layouts.
- A11Y-S1: Confirmation and error messages are announced, and focus moves to their heading.
- A11Y-E3: The upgrade shows amount, card and next bill before confirming, and can be undone for 24 hours with full credit.
- A11Y-E1: Downgrade and card errors are named beside the field, and the choices made are kept.
- A11Y-R1: The comparison table reflows at 200% zoom and 320px without losing a column's meaning.
- A11Y-H1: A help link appears in the same place on every step.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Proration in one sentence: “You get £17.60 credit for unused days on Starter, so today you pay £11.40.”
- Short sentences under 20 words for translation
- Downgrade copy names consequences: “3 staff lose access on 1 November. Their bookings stay.”

## AI interactions

- Optional: suggest a plan from the last 3 months of usage, showing the usage numbers behind the suggestion; the subscriber chooses

## Edge cases

- Upgrade and downgrade in the same cycle — net the credits and show one clear figure
- Annual plan changed to monthly — explain the refund or credit rule before confirming
- Usage already above the lower plan’s limit — block the downgrade with what to reduce first
- Tax rate or currency differs by business location — preview includes tax with the rate stated
- Payment requires bank authentication — plan unchanged until it completes; return to the preview if abandoned

---

## Measures

| Measure | Target | How |
|---|---|---|
| Self-service plan changes | ≥ 95% | Changes completed without a billing contact |
| Reversed changes | < 2% | Plan changes undone within 7 days |
| Proration understood | ≥ 85% | Test users correctly explain today’s charge |
| Billing disputes | −50% | Disputes about plan-change charges vs baseline |

Research: Comprehension tests of the price preview with second-language readers; Billing support ticket analysis by reason; Usability tests of seasonal downgrade with small business owners.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
