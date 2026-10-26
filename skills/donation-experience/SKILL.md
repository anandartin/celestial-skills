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

### 2. Your details

- Ask address only if a declaration is made or post is chosen
- Visible labels on every field

### 3. Declaration

- Full declaration text shown, not behind a link
- Eligibility explained in one sentence

### 4. Payment

- Amount and frequency restated beside the pay button
- Explain when the first and next payments happen
- **error:** Payment didn't go through. No money was taken
- **loading:** Processing your gift…

### 5. Thank you

- Thank in specifics, not superlatives
- Receipt sent; link to manage the gift

### 6. Manage

- Change amount, date or cancel in two steps
- Cancellation effective date stated clearly
- **empty:** You have no regular gifts

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

## Accessibility

- Meets WCAG 2.2 AA; visible labels match accessible names for voice control (2.5.3)
- Amount chips are radio buttons in a labelled group, keyboard operable
- Targets at least 24×24px minimum, 44px preferred (2.5.8)
- Payment status announced via a live region

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
