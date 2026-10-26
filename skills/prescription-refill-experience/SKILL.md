---
name: prescription-refill-experience
type: experience
journey: customer
persona: Patient (72), rural, lives alone
domain: Healthcare · pharmacy
technology: Responsive web and native app
core: "1.0"
description: "Experience skill: Requesting a repeat prescription with pickup or delivery — the best-practice customer journey for a patient (72), rural, lives alone in Healthcare · pharmacy on Responsive web and native app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Requesting a repeat prescription with pickup or delivery

A patient picks the repeat medicines they need, sees what needs a review, and chooses pickup or delivery with a clear ready date.

**Outcome** — A patient requests a repeat prescription in under two minutes and knows when and where it will be ready, with fewer than 5% of requests needing a follow-up call.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Walter, Patient (72), rural, lives alone

> “I take six tablets a day. I just need the right ones to turn up before I run out.”

Has Parkinson's and high blood pressure; the nearest pharmacy is 14 miles away and the bus runs twice a day.

**Goals**
- Order only the medicines that are running low
- Get them delivered when he can't travel
- Know they will arrive before he runs out

**Pains**
- Tremor makes small checkboxes hard to tap
- Medicine names that look almost identical
- No word on whether the request was approved

**Behaviours**
- Orders on a tablet propped on a stand
- Keeps the empty boxes to check names
- Asks his daughter to double-check by phone

**Access needs**
- Tremor — targets at least 48px, no drag gestures
- Slower reading — no timeouts
- Prefers larger text (150%)

---

## Domain — Healthcare · pharmacy

- Only medicines on the patient's authorised repeat list can be requested; anything else goes to the prescriber
- Items past their review date need prescriber review before issue; say so before the patient submits
- Controlled medicines need identity checks at pickup and a signature on delivery
- Health data is special-category (GDPR) / PHI (HIPAA): delivery labels show no medicine names
- Ordering for someone else requires their recorded consent or a registered proxy role

Vocabulary to use: `repeat prescription`, `prescriber`, `medication review`, `pharmacy`, `proxy`, `ready for collection`

## Technology — Responsive web and native app

Inputs: Touch, Screen reader, Voice dictation

- Integrates with prescriber system for approval status
- Pharmacy stock check before a ready date is promised
- Notifications by SMS and app; SMS carries no medicine names

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Choose medicines** | Pick the repeats that are running low | `list + filters` | “Which medicines do you need?” |
| 2 | **Check** | See what can be issued now and what needs review | `detail` | “Amlodipine 5mg needs a quick review by your prescriber. This can add 2 working days” |
| 3 | **Pickup or delivery** | Choose where to get the medicines | `form + chips` | “Delivery to your home · ready by Thursday” |
| 4 | **Confirm** | Know the request is sent and what happens next | `confirmation` | “Request sent. We'll text you when it's ready” |
| 5 | **Ready** | Collect or receive the medicines | `feedback` | “Your medicines are ready at Hillcrest Pharmacy until 18:00” |

### 1. Choose medicines

- Each item shows name, strength, dose and when last ordered
- Whole row is the tap target, not a small checkbox
- **empty:** You have no repeat medicines yet. Ask your prescriber to add them

### 2. Check

- Review-due items flagged in words, not only colour
- Explain what a review means and how long it adds

### 3. Pickup or delivery

- Show ready date for each option before choosing
- Controlled items explain the ID or signature needed
- **error:** We can't deliver to this postcode. Choose a pharmacy instead

### 4. Confirm

- Restate items, option and expected date in large text
- Show how to change or cancel before it is dispensed

### 5. Ready

- Notification gives place, hours and what to bring
- Delayed items explained with a new date
- **error:** One item is out of stock. We'll have it by Monday

---

## Principles

1. Only show what the patient can actually order
2. Flag reviews before submission, not after
3. Every status change reaches the patient
4. Private by default: no medicine names outside the app
5. Large, forgiving targets for every choice

## Do / Don't

**Do**
- Show when each medicine was last ordered
- Give a ready date before the patient chooses
- Let a registered proxy order with consent

**Don't**
- Let patients type free-text medicine names into an order
- Put medicine names in SMS or on parcels
- Promise a date before checking stock and approval

## Accessibility

- Meets WCAG 2.2 AA; target size at least 48×48px, beyond the 24px minimum in 2.5.8
- Selected items announced with count: “2 of 6 medicines selected”
- Status uses text and icon, never colour alone (1.4.1)
- Text reflows at 200% with no horizontal scrolling (1.4.10)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Use the name and strength exactly as printed on the box: “Amlodipine 5mg tablets”
- Dates in words: “Thursday 16 October”, not “16/10”
- Say who acts next: “Your prescriber will review this”

## AI interactions

- No AI in choosing or approving medicines because errors carry clinical risk; ordering is a deterministic list from the prescriber's record

## Edge cases

- Patient orders too early — explain when it can be ordered and why
- Medicine discontinued since last order — direct to prescriber, don't silently drop it
- Delivery missed for a controlled item — return to pharmacy and notify with collection steps
- Proxy's consent has lapsed — block ordering and explain how to renew
- Patient says they have run out — show urgent supply guidance

---

## Measures

| Measure | Target | How |
|---|---|---|
| Request completion | ≥ 90% | Started → sent |
| Time to request | < 2 min | Median, users 65+ |
| Follow-up calls | < 5% | Requests followed by a call to the pharmacy |
| On-time readiness | ≥ 95% | Ready by the promised date |

Research: Usability sessions with older adults with tremor on their own tablets; Pharmacist and prescriber walkthrough of review and controlled-drug rules; Diary study over two refill cycles.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
