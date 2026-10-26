---
name: bill-payment-experience
type: experience
journey: customer
persona: Nurse (38) on rotating shifts
domain: Bill payments
technology: Mobile app and responsive web
core: "1.0"
description: "Experience skill: Setting up and paying a recurring bill — the best-practice customer journey for a nurse (38) on rotating shifts in Bill payments on Mobile app and responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Setting up and paying a recurring bill

A customer sets up a regular bill payment, sees what will leave their account and when, and gets reminders early enough to act.

**Outcome** — At least 85% of recurring bills set up are paid on time for six months, with fewer than 2% of customers charged a missed-payment fee.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Ines, Nurse (38) on rotating shifts

> “I just need to know the date it goes out and that there's enough in the account.”

Pays rent, council tax and a phone contract; her pay date shifts between months.

**Goals**
- Never miss a bill
- Line payment dates up with payday
- See everything due this month in one place

**Pains**
- Surprise amounts after a price change
- Reminders that arrive after the money has gone
- Cancelling being harder than setting up

**Behaviours**
- Checks the app at 3am between shifts
- Moves payment dates around payday
- Sets reminders on her phone too

**Access needs**
- Uses dark mode for night shifts
- Often one-handed on the move

---

## Domain — Bill payments

- Direct debit or recurring card payments need explicit customer authority, recorded with date and amount rules
- Advance notice of the amount and date before each collection where scheme rules require it
- Customer can cancel a recurring payment at any time, as easily as setting it up
- Changes to amount must be notified before they apply; disputed collections have a clear refund route

Vocabulary to use: `bill`, `direct debit`, `standing order`, `due date`, `reminder`, `biller`

## Technology — Mobile app and responsive web

Inputs: Touch, Push notifications, Keyboard

- Reminders scheduled in the customer's time zone
- Biller list searchable offline from cache
- Payment date rules respect weekends and bank holidays

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Find biller** | Pick who the bill is from | `list + filters` | “Who is the bill from?” |
| 2 | **Set schedule** | Choose amount, frequency and date | `form` | “Pays on the 2nd of each month. Next: Sunday 2 November → moves to Monday 3 November.” |
| 3 | **Reminders** | Choose when and how to be reminded | `form + chips` | “Remind me 3 days before” |
| 4 | **Confirm** | Approve the authority and see the summary | `confirmation` | “Rent of £925.00 set up. First payment Monday 3 November.” |
| 5 | **Bills overview** | See what is due this month and act on it | `table + totals` | “£1,284.50 due before your next payday” |

### 1. Find biller

- Search by name with category filters
- Manual entry for billers not listed
- **empty:** No match — 'Add their details yourself'

### 2. Set schedule

- Offer 'fixed amount' or 'amount varies'
- Show the next three payment dates as they choose
- **error:** Explain why a date isn't available and suggest the next one

### 3. Reminders

- Chips for 1, 3 or 7 days before
- Low-balance alert opt-in, off by default
- **empty:** If notifications are off, offer email or SMS instead

### 4. Confirm

- Summary of payee, amount, frequency, first date
- Cancel and edit links on the same screen

### 5. Bills overview

- Upcoming bills with total due before next payday
- Per-row actions: pay now, skip, edit, cancel
- **empty:** 'No bills set up yet' with an add button
- **error:** 'We couldn't load your bills' with retry; never show a zero total on failure
- **loading:** Loading your bills

---

## Principles

1. The next payment date and amount are always visible
2. Reminders arrive in time to act, not after collection
3. Cancelling is as easy as setting up
4. Price changes are shown before they apply
5. Totals never show a misleading zero when data fails to load

## Do / Don't

**Do**
- Show next three payment dates when scheduling
- Adjust for weekends and bank holidays and say so
- Group upcoming bills by payday

**Don't**
- Bury the cancel option in settings
- Opt customers into low-balance marketing
- Send reminders with no action

## Accessibility

- Meets WCAG 2.2 AA in light and dark themes
- Table has proper row and column headers; totals announced with their label
- Date picker fully keyboard-operable, with a typed-date alternative (2.5.7 alternative to dragging)
- Reminder notifications include amount and date in text, not just an icon

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Lead with date and amount: 'Rent · £925.00 · Monday 3 November'
- Use 'Cancel this bill' not 'Revoke mandate'
- Tell people what we did: 'We moved this to Monday because Sunday is not a banking day'

## AI interactions

- Detects likely recurring bills from past transactions and suggests setting them up; nothing is created until the customer confirms
- Flags a bill amount that has risen more than 10% so the customer can check it

## Edge cases

- Insufficient funds on collection day — warn the day before with a move-date option
- Biller changes amount without notice — flag and link to dispute
- Due date falls on a bank holiday — move and explain
- Customer changes bank — explain how to move the bill

---

## Measures

| Measure | Target | How |
|---|---|---|
| On-time payment | ≥ 85% over 6 months | Recurring bills paid on or before due date |
| Missed-payment fees | < 2% of customers | Fees charged per active bill customer, quarterly |
| Reminder action rate | ≥ 30% | Reminders opened → pay, move or edit |
| Cancel completion time | < 30 s | Median from bill detail to cancelled |

Research: Interviews with shift workers on payday timing; Usability test of cancel and edit flows; Notification timing A/B test measured on missed payments.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
