---
name: free-trial-to-paid-experience
type: experience
journey: customer
persona: Freelance illustrator (26), trialling a design tool
domain: Subscriptions
technology: Web app with email and push notifications
core: "1.0"
description: "Experience skill: Converting from a free trial to a paid plan without surprises — the best-practice customer journey for a freelance illustrator (26), trialling a design tool in Subscriptions on Web app with email and push notifications. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Converting from a free trial to a paid plan without surprises

A trial user always knows when the trial ends, what they will pay and how to stop, so choosing to pay is a decision rather than an accident.

**Outcome** — Trial-to-paid conversion reaches 25% while chargebacks and “I didn’t mean to pay” refunds stay under 1% of conversions.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Ngozi, Freelance illustrator (26), trialling a design tool

> “I forget trials exist until the charge hits. Remind me like a friend would.”

Has ADHD; juggles several client projects and loses track of dates and email.

**Goals**
- Try every feature before deciding
- Get a reminder before being charged
- Pick the cheapest plan that fits

**Pains**
- Surprise charges after a trial he forgot
- Reminders buried in marketing email
- Work locked away the moment a trial ends

**Behaviours**
- Signs up quickly and explores later
- Acts on push notifications, ignores long emails
- Compares monthly and yearly price per month

**Access needs**
- ADHD — needs short, timely reminders and clear dates
- Prefers one decision per screen

---

## Domain — Subscriptions

- Before a trial starts, state the trial length, the price after it, the billing frequency and how to cancel (consumer protection and automatic-renewal laws in many regions)
- Send a reminder before the first charge; several jurisdictions require one a set number of days before a trial converts
- Express consent to recurring charges is captured and recorded separately from accepting the terms
- Cancelling during the trial is possible online in the same channel used to sign up
- Card details for a trial are tokenised with the payment provider (PCI DSS); SCA is completed at sign-up where required

Vocabulary to use: `free trial`, `trial end date`, `first charge`, `plan`, `billing cycle`, `auto-renew`

## Technology — Web app with email and push notifications

Inputs: Mouse and keyboard, Touch, Notification actions

- Trial end and charge date computed in the user’s time zone
- Reminder schedule configurable per market to meet local law
- Billing provider webhooks drive plan state; UI never shows paid before payment succeeds

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Start trial** | Understand the terms before the trial begins | `marketing hero` | “14 days free, then £12/month. Cancel anytime before 8 November and you won’t be charged.” |
| 2 | **Trial status** | See days left and what is included | `dashboard · empty state` | “9 days left in your trial · First charge £12 on 8 November” |
| 3 | **Reminder** | Get a clear warning before the first charge | `feedback` | “Your trial ends in 3 days. We’ll charge £12 on 8 November unless you cancel.” |
| 4 | **Choose plan** | Pick a plan and billing cycle with full prices | `table + totals` | “Yearly £120 (£10/month, billed once) · Monthly £12” |
| 5 | **Paid** | Know the plan is active and when the next charge is | `confirmation` | “You’re on Monthly. Next charge £12 on 8 December. Manage or cancel in Settings.” |

### 1. Start trial

- Price after trial and end date in the same sentence
- Consent to recurring charge is its own checkbox
- **error:** Your bank needs to confirm this card. You won’t be charged today.

### 2. Trial status

- Days left visible on every page in a small banner
- Link to manage trial in one click
- **empty:** You haven’t tried exporting yet — here’s how in 2 steps

### 3. Reminder

- Reminder has “Keep my plan”, “Change plan” and “Cancel trial” actions
- Sent by email and in-app, not marketing channels

### 4. Choose plan

- Show the total charged, not only the per-month figure
- Current trial features mapped to each plan
- **error:** Payment failed. Your trial continues until 8 November — update your card any time.

### 5. Paid

- Receipt sent with cancel link
- No change to work, files or settings on conversion

---

## Principles

1. The end date and the price are never more than one glance away
2. Remind before charging, in the channel the user chose
3. Paying is an active choice, recorded as consent
4. Cancelling a trial is as easy as starting it
5. Never hold someone’s work hostage at trial end

## Do / Don't

**Do**
- Show days left and first charge date in the product
- Send a reminder at least 3 days before conversion
- Let users export or keep read-only access to their work if they don’t pay

**Don't**
- Hide the after-trial price in small print
- Bundle recurring-charge consent into the terms checkbox
- Delete trial work on the day the trial ends

## Accessibility

- Trial banner is a landmark with text, not an icon-only countdown (WCAG 2.2 1.1.1)
- Plan comparison is a real table with row and column headers (WCAG 2.2 1.3.1)
- Time-based reminders also available as a calendar file so users can set their own alerts
- Consent checkbox has a visible label and is at least 24 × 24 px with a 44 px hit area (WCAG 2.2 2.5.8)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Dates and amounts always together: “£12 on 8 November”
- Reminders in one short line before any detail: “Your trial ends in 3 days.”
- No guilt copy on cancel: “Trial cancelled. You can keep using it until 8 November.”

## AI interactions

- Optional: recommend a plan based on features used during the trial, showing which features drove the suggestion; the user picks
- No AI in deciding when to charge or which reminders to send because those are legal obligations

## Edge cases

- Card expires during trial — warn before the end date; never convert silently on a backup card
- User cancels then changes mind — reactivate without restarting a new trial or losing data
- User signed up on one platform’s app store — explain where to cancel and link to it
- Time zone change near the end date — charge date shown in the current local time
- Minor or shared account detected — require the account holder to confirm the paid plan

---

## Measures

| Measure | Target | How |
|---|---|---|
| Trial-to-paid conversion | ≥ 25% | Trials started → first successful charge |
| Unwanted charge refunds | < 1% | Refunds with reason “forgot to cancel” plus chargebacks |
| Reminder delivery | 100% | Trials with a reminder sent ≥ 3 days before conversion |
| Terms understood | ≥ 90% | Test users state the end date and price after the start screen |

Research: Comprehension tests of the trial start screen; Interviews with users who requested refunds after conversion; Legal review of renewal notices per market.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
