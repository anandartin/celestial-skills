---
name: leave-request-experience
type: experience
journey: workflow
persona: Warehouse supervisor (58); manager Clare; HR administrator Tess
domain: HR · time off
technology: Mobile app and shared kiosk; web for managers and HR
core: "1.0"
description: "Experience skill: Requesting time off with balances, team cover and approval — the best-practice workflow for a warehouse supervisor (58); manager clare; hr administrator tess in HR · time off on Mobile app and shared kiosk; web for managers and HR. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Requesting time off with balances, team cover and approval

An employee checks their balance and team cover, requests time off, and their manager approves it with the information they need.

**Outcome** — Employees submit leave requests in under a minute and get a decision within two working days, with balances always correct.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Hamid, Warehouse supervisor (58); manager Clare; HR administrator Tess

> “Show me how many days I've got and whether anyone else is off, then just let me ask.”

Works shifts; plans leave around family abroad; reads English as a second language and uses a shared kiosk and his own phone.

**Goals**
- See his balance accurately
- Know if cover is available before asking
- Get a quick yes or no

**Pains**
- Balances that don't match payslips
- Requests lost or forgotten
- Jargon about accrual and carry-over

**Behaviours**
- Plans leave months ahead
- Checks on his phone during breaks
- Asks colleagues before requesting

**Access needs**
- English as a second language — plain words, translations
- Presbyopia — larger text on phone

---

## Domain — HR · time off

- Balances follow contract and statutory minimums; part-time entitlement is pro rata
- Reasons for sickness or family leave are optional and visible only to those who need them
- Managers see team cover, not other employees' leave reasons
- Statutory leave types (e.g. parental) follow their own notice rules and cannot be refused on cover grounds
- Decisions and changes are recorded and notified to the employee

Vocabulary to use: `balance`, `allowance`, `carry-over`, `team cover`, `half day`, `public holiday`

## Technology — Mobile app and shared kiosk; web for managers and HR

Inputs: Touch, Keyboard, Screen reader

- Integrates with rota and payroll
- Shift patterns, not just 9-to-5 days
- Kiosk sessions end after 2 minutes idle and show no personal data afterwards

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Balance** | See days available now and after planned leave | `dashboard · empty state` | “You have 14 days left this year · 3 expire on 31 March” |
| 2 | **Pick dates** | Choose dates and see team cover | `detail` | “2 of 8 on your shift are off that week” |
| 3 | **Request** | Send the request | `form` | “This uses 5 days · 9 left after” |
| 4 | **Decide** | Manager approves or declines | `inbox` | “Approve 5 days for Hamid, 10–14 Nov?” |
| 5 | **Confirmed** | Employee knows the outcome | `confirmation` | “Approved: Mon 10 – Fri 14 November · 9 days left” |

### 1. Balance

- Balance in days or hours as per contract
- Explain carry-over and expiry in plain words
- **empty:** No leave booked yet this year

### 2. Pick dates

- Calendar shows shifts and public holidays
- Team cover shown as counts, not names or reasons

### 3. Request

- Leave type, dates, half days; reason optional
- Show days used before submitting
- **error:** You have 4 days left. Shorten the dates or choose unpaid leave.

### 4. Decide

- Request with balance, cover and rota impact on one screen
- Decline needs a reason and a suggested alternative
- **empty:** No requests waiting

### 5. Confirmed

- Decision, dates and new balance in large text
- Add to calendar; cancel or change link

---

## Principles

1. Balances are accurate and explained
2. Cover information helps decisions without exposing private details
3. Requesting takes under a minute on a phone
4. Every decision is fast, recorded and explained
5. Statutory rights are applied by the system, not left to judgement

## Do / Don't

**Do**
- Show balance after the request before submitting
- Offer translations of the interface
- Let managers suggest alternative dates

**Don't**
- Show colleagues' leave reasons
- Use “accrual” without explaining it
- Leave requests pending without reminders

## Accessibility

- Date picker has a typed alternative and announces selected range (WCAG 2.1.1)
- Text scales to 200% on mobile without loss (WCAG 1.4.4)
- Kiosk timeout warns with an option to continue (WCAG 2.2.1)
- Language of page set correctly when translated (WCAG 3.1.1)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Use plain words: “days left”, not “remaining accrued entitlement”
- Decline copy is respectful and specific: “Declined — 3 people already off that week. 17–21 Nov looks clear.”
- Dates always include the weekday: “Mon 10 November”

## AI interactions

- No AI in approvals because leave decisions affect rights and must be made and explained by a manager; optional suggestion of clear weeks based on team cover only

## Edge cases

- Statutory leave requested at short notice — apply legal rules; cover is not a reason to refuse
- Balance disputed — show calculation and route to HR
- Request spans a public holiday — exclude it from days used and say so
- Manager away — request routes to deputy after 2 working days
- Shared kiosk left logged in — auto sign-out and clear screen

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to request | < 1 min | Median, mobile |
| Decision time | ≤ 2 working days | Submitted to decided, median |
| Balance queries to HR | −50% | Tickets about balances vs previous system |
| Request completion on kiosk | ≥ 90% | Started vs submitted |

Research: Usability tests with shift workers on kiosk and phone, including second-language speakers; Payroll reconciliation test of balance calculations; Manager interviews on cover information needs.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
