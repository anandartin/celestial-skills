---
name: bill-payment-experience
type: experience
journey: customer
persona: Nurse (38) on rotating shifts
domain: Bill payments
technology: Mobile app and responsive web
core: "1.4"
description: "Experience skill: Setting up and paying a recurring bill — the best-practice customer journey for a nurse (38) on rotating shifts in Bill payments on Mobile app and responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Setting up and paying a recurring bill

A customer sets up a regular bill payment, sees what will leave their account and when, and gets reminders early enough to act.

**Outcome** — At least 85% of recurring bills set up are paid on time for six months, with fewer than 2% of customers charged a missed-payment fee.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.4 components and patterns, and let the active design skill render them.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person opens Add a bill, or past payments show a regular payee with no bill set up.
  - Agent goal: Help the person pick the right biller quickly.
  - Agent actions: Says it is an AI assistant that can suggest bills from past payments and fill in details for the person to check. Shows suggested billers with the payments behind each one; nothing is set up until the person picks one, and they can search or add a biller by hand.
  - Agent tone: Brief and plain; easy to read when tired.
  - Agent type: Vertical bill-payments assistant; single.
  - Multi-agent handoff: AI assistant → biller directory search.
  - Goal failure response: Ambiguous input (two billers with similar names): show both with their details and ask which. Data unavailable (payments or directory not loading): say so and offer search and manual entry. Low confidence on a suggested bill: label it a guess and show the payments it is based on.
  - Failure handover trigger: The person asks for a person → customer support immediately, with the handover context package. A regular payee the person doesn't recognise → the fraud team, with the context package.
  - Data needs: Biller directory and the person's recent outgoing payments.
  - Agent memory: Short-term: the chosen biller. Episodic: past payments, used only to suggest.
  - Regulatory classification: Minimal risk; financial data; AI interaction disclosed and suggestions marked as made by the AI assistant.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: A biller is chosen.
  - Agent goal: Get the amount, frequency and date right and lined up with payday.
  - Agent actions: Fills the amount and frequency from past payments and suggests a date a few days after the usual payday; each value is marked as filled by the AI assistant until accepted. Shows the next three payment dates and explains any weekend or bank-holiday move in one sentence.
  - Agent tone: Calm and exact; dates written in full.
  - Agent type: Vertical bill-payments assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Ambiguous input (payday moves month to month): ask which payday to plan around, or let the person pick the date. Constraint violation (the biller only collects on set dates): say why and offer the nearest allowed date. Goal drift (a date before payday when the person asked for after): re-align and show why.
  - Failure handover trigger: The person asks for a person → customer support immediately, with the handover context package.
  - Data needs: Past payments to this biller, the person's payday pattern if shared, biller collection rules, bank-holiday calendar.
  - Agent memory: Short-term: the draft schedule. Procedural: preferred payment day, kept only if the person agrees; they can view, change or delete it.
  - Regulatory classification: Minimal risk; a draft commits nothing.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The schedule is set.
  - Agent goal: Make sure the reminder arrives early enough to act.
  - Agent actions: Suggests a reminder lead time, marked as a suggestion; leaves the low-balance alert off unless the person switches it on. If notifications are off, it says so and offers email or text instead.
  - Agent tone: Helpful and short.
  - Agent type: Vertical bill-payments assistant; single.
  - Multi-agent handoff: None at this step.
  - Goal failure response: Data unavailable (notification settings can't be read): say a push reminder may not arrive and offer email. Constraint violation (the reminder would land after the collection): say so and suggest an earlier one.
  - Failure handover trigger: The person asks for a person → customer support, with the handover context package.
  - Data needs: Notification permissions, contact channels, collection date.
  - Agent memory: Short-term. Procedural: reminder preference, only if the person saves it.
  - Regulatory classification: Minimal risk; reminders carry no marketing.

### 4. Confirm

- Summary of payee, amount, frequency, first date
- Cancel and edit links on the same screen
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the summary heading; Tab reaches the summary, Edit, Cancel and the main confirm button, all within thumb reach on a phone.
  - Announced (A11Y-S1): The summary is read as a list of payee, amount, frequency and first date; 'Rent of £925.00 set up' is announced politely after confirming.
  - Errors (A11Y-E1): This step moves money, so the summary is shown before confirming, Edit and Cancel are on the same screen, and nothing the person entered is lost on editing.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep amounts in full as £925.00 and dates as Monday 3 November; explain 'authority' as 'permission to take the payment'.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person reaches the summary.
  - Agent goal: Make the payment permission unmistakable before it is given.
  - Agent actions: Shows the exact payee, amount or amount rule, frequency and first date, and marks every value the AI assistant filled. The person gives the payment permission and does any security check or one-time code themselves; the AI assistant steps back and never sees or enters them. Edit and Cancel sit on the same screen, and the bill can be cancelled at any time afterwards.
  - Agent tone: Plain and unhurried.
  - Agent type: Vertical bill-payments assistant; payments service behind it.
  - Multi-agent handoff: AI assistant prepares → payments service records the permission after the person confirms.
  - Goal failure response: Constraint violation (this account can't hold the permission): say why and offer another way to pay. Partial completion (permission recorded, reminder not saved): show what is done and retry the reminder. Full task failure (payments service down): say nothing was set up, keep the draft, don't retry silently, hand over.
  - Failure handover trigger: Set-up fails or the person asks → payments support immediately, with the handover context package, because money is involved.
  - Data needs: Draft schedule, payer account, permission rules.
  - Agent memory: Short-term: the draft from earlier steps.
  - Regulatory classification: Payments: explicit payer permission recorded with date and amount rules; authentication by the person; audit log of what the AI assistant prepared and what the person approved.

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
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person opens the overview, a bill rises more than 10%, or the balance looks short before a collection.
  - Agent goal: Show what is due and flag problems early enough to act.
  - Agent actions: Shows the total due before payday from the payments service, never its own estimate. Flags a rise above 10% with old and new amounts and a dispute link, and warns of a likely shortfall the day before with a move-date option. Prepares pay now, skip, move or cancel only when asked; the person confirms each, and cancelling is never discouraged.
  - Agent tone: Matter-of-fact; warnings serious but not alarming.
  - Agent type: Vertical bill-payments assistant; single.
  - Multi-agent handoff: AI assistant → payments service for balances and collections.
  - Goal failure response: Data unavailable (bills won't load): say so with Retry and never show a zero total. Low confidence on a shortfall: say it is an estimate and why. Full task failure (a collection fails or a change won't apply): say what happened and the main reason, then hand over.
  - Failure handover trigger: A failed, held or disputed collection → payments support immediately, with the handover context package; the person asks for a person → immediately, no retry.
  - Data needs: Scheduled bills, collection history, balance, biller amount notices.
  - Agent memory: Episodic: bill and collection history. Procedural: saved reminder preferences.
  - Regulatory classification: Payments; flags are decision support only; a held or skipped collection states its reason and a route to a person.

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

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is AI before it suggests a bill, and every value it fills stays marked as filled by the AI assistant until the person accepts it
- No bill, payment permission, date change, skip or cancellation is made without the person seeing the exact details and confirming; the person gives the permission and does any security check themselves
- A bill that rises more than 10% and a likely shortfall are flagged before the collection date, never after
- Cancelling a bill is as easy as setting it up, and the AI assistant never argues against it
- A failed, held or disputed collection goes to a person straight away with the handover context package, with the main reason given; asking for a person works at every step

## Edge cases

- Insufficient funds on collection day — warn the day before with a move-date option
- Biller changes amount without notice — flag and link to dispute
- Due date falls on a bank holiday — move and explain
- Customer changes bank — explain how to move the bill

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Customer — name, contact details, payday pattern (optional), notification preferences · relates to Bill, Payment permission · personal data
- Biller — name, category, customer reference format, collection rules · relates to Bill
- Bill — biller, customer reference, amount type (fixed or varies), amount, frequency, next payment date, status · relates to Customer, Biller, Payment permission, Reminder, Collection · personal data
- Payment permission — payer account, date given, amount rules, status, cancelled date · relates to Bill, Customer · personal data
- Reminder — bill, lead time, channel, low-balance alert on or off · relates to Bill · personal data
- Collection — bill, amount, date, outcome, dispute status · relates to Bill · personal data
- AI assistant action — step, what was suggested or filled, accepted, changed or rejected by the person, time · relates to Bill, Customer · personal data

### Systems it touches

- Payments service — reads balance, collection history, permission status; writes payment permissions, collections, skips and date moves · when down: Nothing new is set up or changed; drafts are kept and the person is told plainly and offered a retry or support.
- Biller directory — reads biller names, categories, reference formats, collection rules · when down: Manual entry of the biller's details stays available.
- Notification service — reads permissions, channels; writes reminders, low-balance alerts, amount-change notices · when down: Reminders fall back to email and an in-app banner; failed sends are retried before the collection date.
- Bank-holiday calendar — reads non-working days · when down: Dates are shown with a note that they may move; the payments service has the final date.
- AI assistant service — reads recent payments, draft bill; writes suggestions marked as made by the AI assistant · when down: The journey works fully by hand; the assistant panel says it is unavailable.

### Roles

- Customer — set up, change, skip and cancel bills, give and withdraw payment permission, choose reminders, dispute a collection, ask for a person
- Payments support — see bills and collections, investigate failed or disputed collections, raise refunds under scheme rules
- Fraud team — review unrecognised payees, hold or release a collection with reasons
- AI assistant — suggest billers, amounts and dates, fill fields marked as filled by the AI assistant, flag amount rises and shortfalls, prepare changes for the person to confirm, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Bills overview load time: 2 seconds (range 1–3 seconds)
- Reminder sent before collection: 3 days (range 1–7 days, chosen by the person)
- Service availability: 99.9% (range 99.5–99.95%)
- Set-up completion time: under 3 minutes (range 2–5 minutes)
- Payment permission and collection records: the legal minimum for the jurisdiction (range set by scheme rules and law)

### Required inputs and configuration

- Biller directory source and categories
- Payment scheme rules for permissions, advance notice and disputes
- Bank-holiday calendar for the market
- Notification channels available (push, email, text)
- Amount-rise threshold for flags (default 10%)
- Support and fraud contact routes and hours

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
