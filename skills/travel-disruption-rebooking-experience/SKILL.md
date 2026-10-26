---
name: travel-disruption-rebooking-experience
type: experience
journey: customer
persona: Care worker (52), travelling to a family funeral
domain: Passenger transport
technology: Native mobile app and SMS
core: "1.0"
description: "Experience skill: Rebooking after a cancelled train or flight — the best-practice customer journey for a care worker (52), travelling to a family funeral in Passenger transport on Native mobile app and SMS. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Rebooking after a cancelled train or flight

A traveller whose train or flight is cancelled sees their options straight away, rebooks or claims a refund, and learns what compensation they can claim.

**Outcome** — At least 80% of disrupted travellers rebook or request a refund in the app within 15 minutes of the cancellation notice, and every one is told their compensation rights.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Kofi, Care worker (52), travelling to a family funeral

> “I just need to get there today. Tell me what I can do and what I'm owed, without the runaround.”

Her morning Northline Rail train was cancelled; she has a connecting coach she can't miss.

**Goals**
- Get on the next service that makes her connection
- Not pay more
- Claim back costs later

**Pains**
- Queues at the station desk
- Notices that don't say what to do
- Compensation forms that ask for everything again

**Behaviours**
- Checks the app as soon as a message arrives
- Travels with a heavy bag
- Keeps paper tickets as backup

**Access needs**
- Arabic is first language; reads English well but prefers short sentences
- Anxiety under time pressure — needs clear choices

---

## Domain — Passenger transport

- Passenger rights rules (rail and air) set minimum rebooking, refund and care entitlements — show the ones that apply to this journey
- Compensation thresholds depend on delay length and distance; state the threshold and the claim deadline
- Refund to the original payment method unless the traveller chooses otherwise
- Claims reuse booking data; ask only for what is missing (data minimisation)
- Accessible alternatives must be offered when assisted travel was booked

Vocabulary to use: `cancellation`, `rebook`, `refund`, `delay compensation`, `connection`, `assisted travel`

## Technology — Native mobile app and SMS

Inputs: Touch, Push notifications and SMS, Screen reader

- Rebooking options refresh with live seat availability
- Works on slow connections with a text-only mode
- Notices in the traveller's chosen language where available

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Disruption notice** | Learn what happened and what to do next | `inbox` | “Your 08:12 to Westbridge is cancelled. The 08:46 gets you there 34 minutes later — tap to rebook.” |
| 2 | **Your options** | Compare rebooking, refund and other routes | `list + filters` | “Next services to Westbridge” |
| 3 | **Rebook** | Confirm the new service at no extra cost | `confirmation` | “You're on the 08:46. Coach 3, seat 22. No extra charge.” |
| 4 | **What you're owed** | See compensation and care rights | `detail` | “Your arrival is 34 minutes late, so you can claim 25% of your fare (£11.60) until Tuesday 25 November.” |
| 5 | **Claim** | Submit a compensation claim with prefilled data | `form` | “We've filled in your journey. Check it and send.” |

### 1. Disruption notice

- Message states the cancelled service and the best option in one line
- Link opens the options screen directly
- **error:** If the link fails, the SMS includes a phone number and the ticket reference

### 2. Your options

- Options sorted by arrival time; connection status shown for each
- Refund option always visible
- **empty:** No seats today — show tomorrow's first service, refund and care entitlements
- **loading:** Checking seats on the next services

### 3. Rebook

- New ticket issued immediately; old one cancelled
- Assisted travel carried over and reconfirmed
- **error:** Seat just taken — offer the next option without returning to the list

### 4. What you're owed

- Entitlement stated with the threshold: 'Delays over 60 minutes: 50% of your fare'
- Claim deadline shown as a date

### 5. Claim

- Journey, ticket and delay prefilled from the booking
- Ask only for payment destination and extra costs with receipts
- **error:** Receipt upload failed — the claim is saved; add receipts later
- **loading:** Sending your claim

---

## Principles

1. Lead with the best next option, not the apology
2. Refund is always shown alongside rebooking
3. Entitlements stated with numbers and dates
4. Never ask for data the booking already holds
5. Assisted travel is carried over automatically

## Do / Don't

**Do**
- Put the next working option in the notice itself
- Prefill compensation claims from the booking
- Show connection status for each option

**Don't**
- Make travellers queue for rebooking when it can be done in the app
- Hide refund behind rebooking
- Use 'may be eligible' without stating the rule

## Accessibility

- Meets WCAG 2.2 AA; options list announces departure, arrival and connection status
- Notifications readable at 200% text with key info in the first line
- No time limits on choosing an option beyond seat holds, which are announced (2.2.1)
- Text-only mode works with screen readers on slow connections

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Short sentences, one fact each: 'Your train is cancelled. Here are your options.'
- Numbers and dates for rights: 'Claim by Tuesday 25 November'
- Avoid industry terms: 'cancelled' not 'terminated short'

## AI interactions

- Ranks rebooking options by arrival time and connection risk; the traveller chooses and can see all options unranked
- Drafts the compensation claim from booking and delay data; the traveller checks and sends it

## Edge cases

- Connection missed because of the disruption — show rights for the onward leg and contacts
- Traveller already at the station without signal — SMS fallback with options
- Disruption overnight — show care entitlements (meals, hotel) and how to claim
- Ticket bought through a third party — explain where to claim
- Assisted travel can't be rebooked in time — phone route with priority

---

## Measures

| Measure | Target | How |
|---|---|---|
| Self-service resolution | ≥ 80% within 15 min | Notice sent → rebook or refund requested |
| Rights shown | 100% | Disrupted bookings shown the entitlement screen |
| Claim completion | ≥ 70% | Eligible travellers submitting a claim |
| Desk queues during disruption | −40% | Station desk contacts per disrupted booking |

Research: Field research at stations during planned disruption; Usability tests of the notice and options with non-native speakers; Analysis of compensation claim drop-off.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
