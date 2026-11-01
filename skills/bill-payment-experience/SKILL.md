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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands in the search box; Tab moves through category filters and results, and 'Add their details yourself' is a real button reachable without scrolling far.
  - Announced (A11Y-S1): Page title is Find biller; the result count is announced politely after each search, and the empty message is read as text.
  - Errors (A11Y-E1): No match is explained next to the search box with a link to manual entry; the typed search text stays.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use 'biller' with a short explanation once, and avoid abbreviations in category names.

### 2. Set schedule

- Offer 'fixed amount' or 'amount varies'
- Show the next three payment dates as they choose
- **error:** Explain why a date isn't available and suggest the next one
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the amount type choice; the date is typeable as well as pickable, and the picker works with arrow keys and Escape.
  - Announced (A11Y-S1): The three next payment dates are announced politely as they change, with the weekday and full date, including the move from Sunday 2 November to Monday 3 November.
  - Errors (A11Y-E1): An unavailable date is named beside the date field with the reason and the next date offered as a button; entered values stay.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write dates in full, such as Monday 3 November, and explain 'moves to Monday' as a bank-holiday or weekend rule in one sentence.

### 3. Reminders

- Chips for 1, 3 or 7 days before
- Low-balance alert opt-in, off by default
- **empty:** If notifications are off, offer email or SMS instead
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the reminder choices; the 1, 3 and 7 day chips are a labelled radio group, and the low-balance switch is off by default.
  - Announced (A11Y-S1): The group is named 'Remind me before payment'; a changed choice is announced politely as 'Remind me 3 days before'.
  - Errors (A11Y-E1): If notifications are off, the message beside the chips names it and offers email or SMS; any choice made stays.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'reminder' and 'low-balance alert' plainly, and give the amount threshold in pounds, not as a symbol alone.

### 4. Confirm

- Summary of payee, amount, frequency, first date
- Cancel and edit links on the same screen
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the summary heading; Tab reaches the summary, Edit, Cancel and the main confirm button, all within thumb reach on a phone.
  - Announced (A11Y-S1): The summary is read as a list of payee, amount, frequency and first date; 'Rent of £925.00 set up' is announced politely after confirming.
  - Errors (A11Y-E1): This step moves money, so the summary is shown before confirming, Edit and Cancel are on the same screen, and nothing the person entered is lost on editing.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep amounts in full as £925.00 and dates as Monday 3 November; explain 'authority' as 'permission to take the payment'.

### 5. Bills overview

- Upcoming bills with total due before next payday
- Per-row actions: pay now, skip, edit, cancel
- **empty:** 'No bills set up yet' with an add button
- **error:** 'We couldn't load your bills' with retry; never show a zero total on failure
- **loading:** Loading your bills
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the page heading; the table is read by row and column headers, and row actions are buttons in the same order in every row.
  - Announced (A11Y-S1): The heading and total are announced with their label, '£1,284.50 due before your next payday'; loading and retry are announced politely.
  - Errors (A11Y-E1): A load failure is named in text with a Retry button and never shows a zero total; skip or cancel asks for a check or offers undo.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the total with its label and currency in full and use 'payday' with the date it refers to.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-C1: The journey meets contrast of 4.5:1 for text and 3:1 for controls in both light and dark themes.
- A11Y-P1: The bills table uses real header cells for rows and columns, and the total is read with its label.
- A11Y-K1: The date picker works fully by keyboard, with a typed-date alternative so no date needs dragging or tapping a small grid.
- A11Y-S1: Reminder notifications state the amount and date in text, not only with an icon, and status changes are announced.
- A11Y-E3: Setting up the payment shows a summary with Edit and Cancel before it is confirmed, and skip or cancel can be undone.
- A11Y-T1: Primary actions and row actions are at least 44px and sit within one-handed thumb reach on a phone.
- A11Y-E1: A failed bills load names the problem, offers Retry, and never shows a zero total.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
