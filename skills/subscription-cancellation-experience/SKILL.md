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

### 2. What happens

- End date, refund and data all on one screen
- One optional offer, declinable in one tap
- **loading:** Show the end date first; refund detail after

### 3. Confirm

- Reason is optional and below the button
- Button says exactly what it does
- **error:** We couldn’t cancel just now. Nothing will be charged while we fix this — try again or we’ll email you.

### 4. Done

- Reference number and end date on screen and by email
- Restart option shown, without pressure

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

## Accessibility

- Cancel path works fully with keyboard and screen reader; no hover-only links (WCAG 2.2 2.1.1)
- Buttons at least 48 px high with clear text labels (WCAG 2.2 2.5.8 exceeded)
- Confirmation announced and focus moved to its heading (WCAG 2.2 4.1.3)
- Decline and confirm buttons visually equal in size and contrast

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
