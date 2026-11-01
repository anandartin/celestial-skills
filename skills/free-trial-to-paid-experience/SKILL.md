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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the terms line, consent checkbox and Start trial button follow in order, one decision per screen.
  - Announced (A11Y-S1): Announces the heading and terms as text: '14 days free, then £12 a month'; the card message is announced assertively.
  - Errors (A11Y-E1): If the bank needs to confirm the card, the message sits next to the card field in text and says no charge today; the card details stay.
  - Time limits (A11Y-W1): No time limit on this step; the cancel-by date, 8 November, is written in full.
  - Language (A11Y-L1): State the price and the cancel date in full, and avoid 'auto-renews' in favour of 'then we charge £12 a month'.

### 2. Trial status

- Days left visible on every page in a small banner
- Link to manage trial in one click
- **empty:** You haven’t tried exporting yet — here’s how in 2 steps
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the banner heading; the days-left text and the first-charge line are in reading order.
  - Announced (A11Y-S1): Announces '9 days left in your trial, first charge £12 on 8 November' as text, not an icon-only countdown.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): The trial end is a date, not a live countdown; the date is written in full and reminders are sent before it.
  - Language (A11Y-L1): Give days left and the charge date in full; the empty state gives two plain steps.

### 3. Reminder

- Reminder has “Keep my plan”, “Change plan” and “Cancel trial” actions
- Sent by email and in-app, not marketing channels
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the reminder heading; Cancel trial and Keep my trial buttons are plain and equal in prominence.
  - Announced (A11Y-S1): Announces the reminder as polite text: 'Your trial ends in 3 days. We'll charge £12 on 8 November unless you cancel.'
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): The reminder arrives at least 3 days before the charge; a calendar file is offered, and the person can change reminder timing.
  - Language (A11Y-L1): Say 'we'll charge £12 on 8 November' in full, never 'ends soon'.

### 4. Choose plan

- Show the total charged, not only the per-month figure
- Current trial features mapped to each plan
- **error:** Payment failed. Your trial continues until 8 November — update your card any time.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading then the plan table; row and column headers are read, and the Choose buttons are labelled per plan.
  - Announced (A11Y-S1): Announces the table caption, each plan's full price, and politely 'Plan selected'; a payment failure is assertive.
  - Errors (A11Y-E1): Payment failure is text above the form, says the trial continues until 8 November, and keeps the plan and card details; a review step shows the price before paying.
  - Time limits (A11Y-W1): No time limit to choose; the trial runs to 8 November.
  - Language (A11Y-L1): Show 'Yearly £120, which is £10 a month billed once' in full and avoid 'save 17%' alone.

### 5. Paid

- Receipt sent with cancel link
- No change to work, files or settings on conversion
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; the Manage or cancel link is next.
  - Announced (A11Y-S1): Announces 'You're on Monthly, next charge £12 on 8 December' politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the next charge date in full and say where to cancel.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-N1: The trial banner is a landmark with text, not an icon-only countdown (WCAG 1.1.1).
- A11Y-P1: Plan comparison is a real table with row and column headers (WCAG 1.3.1).
- A11Y-W1: Reminders are sent at least 3 days ahead and also offered as a calendar file so people can set their own alerts.
- A11Y-T1: The consent checkbox has a visible label and is at least 24×24px with a 44px hit area (WCAG 2.5.8).
- A11Y-E3: The price and charge date are shown for review before payment, with cancel available in Settings.
- A11Y-E1: A payment failure is explained in text beside the field and card details are kept.
- A11Y-L1: Dates and prices are written in full, one decision per screen.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
