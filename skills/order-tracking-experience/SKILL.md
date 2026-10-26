---
name: order-tracking-experience
type: experience
journey: customer
persona: Customer (72), waiting for a medical supplies parcel
domain: Retail logistics
technology: Responsive web tracking page plus SMS and email
core: "1.0"
description: "Experience skill: Following an order from dispatch to delivery, including delays — the best-practice customer journey for a customer (72), waiting for a medical supplies parcel in Retail logistics on Responsive web tracking page plus SMS and email. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Following an order from dispatch to delivery, including delays

A customer always knows where their parcel is, when it will arrive and what to do if it is late, without having to contact support.

**Outcome** — At least 90% of customers can state their delivery date from one screen, and “where is my order” contacts fall by 40%.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Ken, Customer (72), waiting for a medical supplies parcel

> “I need to know which day to stay in. If it’s late, tell me before I find out.”

Lives alone; has hearing loss and cannot rely on a phone call or doorbell from the courier.

**Goals**
- Know which day and roughly what time to be home
- Be told early if it will be late
- Leave delivery instructions

**Pains**
- Courier jargon such as “exception at hub”
- Updates that only come by phone call
- Estimated windows that change without explanation

**Behaviours**
- Checks the tracking link several times a day
- Prefers text messages to app notifications
- Asks a neighbour to take parcels

**Access needs**
- Hearing loss — needs text updates, not calls
- Large text (150%)

---

## Domain — Retail logistics

- The retailer remains responsible for goods until they are delivered to the customer (consumer law in many regions)
- Delivery timeframes promised at checkout are honoured or the customer is told of the right to cancel if they are missed
- Tracking links do not expose the full address or name to anyone with the link; show a partial address
- Delivery photos are kept only as long as needed to resolve disputes

Vocabulary to use: `dispatched`, `out for delivery`, `delivery window`, `safe place`, `neighbour delivery`, `proof of delivery`

## Technology — Responsive web tracking page plus SMS and email

Inputs: Touch, Keyboard, SMS reply

- Carrier status events mapped to plain-language stages
- Tracking page works from a link without sign-in
- Notifications respect quiet hours and chosen channel

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Dispatched** | Know the order has left and when it should arrive | `feedback` | “Your order is on its way · Arriving Wednesday 29 October” |
| 2 | **Track** | See the current stage and estimate at a glance | `progress` | “Stage 3 of 4 · Out for delivery · 13:00–15:00” |
| 3 | **Instructions** | Choose a safe place or neighbour | `form` | “Where should we leave it if you’re out?” |
| 4 | **Delay** | Learn about a delay early and what the options are | `feedback` | “Your parcel is delayed. New date: Friday 31 October.” |
| 5 | **Delivered** | Confirm where it was left and report a problem | `confirmation` | “Delivered 14:22 · Left with neighbour at number 12” |

### 1. Dispatched

- Lead with the day, not the carrier status
- Link to tracking with no sign-in

### 2. Track

- Four plain stages: Ordered, Dispatched, Out for delivery, Delivered
- Window narrows as the day goes on, with the time it was updated
- **error:** We can’t reach the courier right now. Last update 09:12: Out for delivery.
- **loading:** Show the last known stage with its time while refreshing

### 3. Instructions

- Options listed with what each means for liability
- Changes allowed until the parcel is out for delivery
- **error:** It’s too late to change this delivery. You can still pick it up from the depot.

### 4. Delay

- Say why in plain words, the new date and the options
- Offer cancel and refund if the promised date is missed
- **empty:** No new date yet — we’ll text you by 6pm tomorrow

### 5. Delivered

- Show where it was left and the photo if taken
- “I haven’t received it” route on the same screen

---

## Principles

1. Lead with the date and place, not the carrier’s status code
2. Tell people about delays before the original date passes
3. Every update offers the next action
4. Let customers choose their notification channel
5. Never expose personal data through a shared tracking link

## Do / Don't

**Do**
- Translate carrier events into four plain stages
- Show the time of the last update
- Offer text-only updates for people who cannot take calls

**Don't**
- Show raw carrier codes such as “exception at hub”
- Mark as delivered without saying where
- Hide the cancel or refund option when a promise is missed

## Accessibility

- Progress stages are an ordered list with the current stage marked in text, not colour only (WCAG 2.2 1.4.1)
- Status changes on the page are announced in a polite live region without moving focus (WCAG 2.2 4.1.3)
- Times read as full times and dates, e.g. “Wednesday 29 October, between 1 and 3 pm”
- Delivery photos have alt text describing where the parcel was left (WCAG 2.2 1.1.1)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Dates in words: “Wednesday 29 October”, never “29/10” alone
- Delay copy gives reason, new date and options: “Delayed by weather. New date Friday. Cancel for a full refund if you prefer.”
- No blame language towards the customer for missed deliveries

## AI interactions

- Optional: predict a narrower delivery window from courier route data, labelled as an estimate with when it was last updated
- A support assistant can answer “where is my order” from tracking data, with a handover to a person for lost or damaged parcels

## Edge cases

- Parcel marked delivered but not received — start a claim in two taps; no proof burden on the customer before investigation
- Split shipment — show each parcel with its own stage and date
- Carrier stops sending updates for 48 hours — flag it and contact the customer proactively
- Medication or perishable item delayed — highlight and offer reshipment or refund immediately
- Customer moves address mid-delivery — explain what can and cannot be changed

---

## Measures

| Measure | Target | How |
|---|---|---|
| Delivery date understood | ≥ 90% | Test participants state the date from one screen |
| “Where is my order” contacts | −40% | Support contacts tagged WISMO vs baseline |
| Proactive delay notice | ≥ 95% | Delays notified before the original date passes |
| Missing-parcel claims resolved | < 3 days | Median time from claim to refund or reship |

Research: Diary study of customers waiting for deliveries across a week; Usability tests with older and Deaf or hard-of-hearing participants; Analysis of carrier event codes vs customer contact reasons.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
