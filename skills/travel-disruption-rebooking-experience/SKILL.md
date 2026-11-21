---
name: travel-disruption-rebooking-experience
type: experience
journey: customer
persona: Care worker (52), travelling to a family funeral
domain: Passenger transport
technology: Native mobile app and SMS
core: "1.4"
description: "Experience skill: Rebooking after a cancelled train or flight — the best-practice customer journey for a care worker (52), travelling to a family funeral in Passenger transport on Native mobile app and SMS. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Rebooking after a cancelled train or flight

A traveller whose train or flight is cancelled sees their options straight away, rebooks or claims a refund, and learns what compensation they can claim.

**Outcome** — At least 80% of disrupted travellers rebook or request a refund in the app within 15 minutes of the cancellation notice, and every one is told their compensation rights.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.4 components and patterns, and let the active design skill render them.

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
- **Accessibility:**
  - Keyboard (A11Y-K1): On native mobile, VoiceOver or TalkBack reads the notification text first, then the Rebook link; the link opens the options screen directly, and switch access reaches it.
  - Announced (A11Y-S1): The notice reads "Your 8:12 to Westbridge is cancelled, the 8:46 arrives 34 minutes later"; the SMS keeps key information in its first line.
  - Errors (A11Y-E1): If the link fails, the SMS gives a phone number and ticket reference in plain text.
  - Time limits (A11Y-W1): Seat availability changes quickly; the notice says how long seats are likely to last, and the person is warned at least 20 seconds before any hold ends.
  - Language (A11Y-L1): Use short sentences, and write times in full, such as "8:46 am"; offer the notice in the chosen language where available.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: The cancellation notice arrives by push or SMS, or the traveller opens it.
  - Agent goal: Tell the traveller what happened and the quickest way forward.
  - Agent actions: The notice names the cancelled service and the earliest-arriving alternative from the timetable. In the app, the AI assistant says once that it is an AI assistant that can rank options, explain rights and draft a claim, and that the traveller decides; it answers in the traveller's chosen language where available.
  - Agent tone: Short sentences, one fact each; calm under time pressure.
  - Agent type: Vertical travel AI assistant; single.
  - Multi-agent handoff: Disruption feed, then the notification service, then the AI assistant when the traveller opens or replies.
  - Goal failure response: Data unavailable (live seats not loading): say so and give the phone number and ticket reference. Ambiguous input ('what now?'): give the two main choices, rebook or refund.
  - Failure handover trigger: The traveller asks for a person, or has booked assisted travel that may not carry over: the travel support team immediately, assisted travel with priority, with the handover context package.
  - Data needs: Booking, disruption details, timetable, language preference.
  - Agent memory: Short-term: this disruption.
  - Regulatory classification: Passenger rights rules for rail and air; minimal risk under the EU AI Act; AI interaction disclosed.

### 2. Your options

- Options sorted by arrival time; connection status shown for each
- Refund option always visible
- **empty:** No seats today — show tomorrow's first service, refund and care entitlements
- **loading:** Checking seats on the next services
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading, then the first option; options are one large target each in arrival order, with Refund always visible and a text-only mode.
  - Announced (A11Y-S1): Each option reads departure, arrival and connection status, and loading seats is announced politely.
  - Errors (A11Y-E1): If no seats remain, the empty text shows tomorrow's first service, refund and care entitlements; the options viewed are kept.
  - Time limits (A11Y-W1): Seat availability refreshes live; a held seat has a stated time and a warning at least 20 seconds before it ends, with an Extend button.
  - Language (A11Y-L1): Show departures and arrivals with am or pm, keep the refund option in plain wording, and give each choice a short sentence.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The traveller opens their options.
  - Agent goal: Help the traveller pick the service that gets them there and makes the connection.
  - Agent actions: Ranks services by arrival time and connection risk, each labelled as ranked by the AI assistant with its reason, such as 'makes your 10:30 coach with 25 minutes to spare'. 'Show all, unranked' is one tap and the refund option is always on screen; the traveller chooses.
  - Agent tone: Clear choices, no pressure.
  - Agent type: Vertical travel AI assistant; reads live seat availability.
  - Multi-agent handoff: Seat inventory, then the AI assistant ranks, then the traveller chooses.
  - Goal failure response: Low confidence (connection time unknown): say so and ask for it. Goal drift (fastest route needs a change the traveller can't make with assisted travel or a heavy bag): re-rank to what they asked. Data unavailable (no seats today): show tomorrow's first service, the refund and care entitlements.
  - Failure handover trigger: No option makes the connection, assisted travel can't be carried over, or the traveller asks for a person: the travel support team immediately, with the handover context package.
  - Data needs: Live seat availability, timetables, connection times, assisted travel booking.
  - Agent memory: Short-term: the options and the traveller's stated connection.
  - Regulatory classification: Passenger rights: refund stays available beside rebooking; ranking is decision support only.

### 3. Rebook

- New ticket issued immediately; old one cancelled
- Assisted travel carried over and reconfirmed
- **error:** Seat just taken — offer the next option without returning to the list
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the confirmation heading; ticket, coach, seat and assisted travel follow, with a Done button after.
  - Announced (A11Y-S1): "You're on the 8:46, coach 3, seat 22, no extra charge" is read as the heading, and the new ticket is announced politely.
  - Errors (A11Y-E1): If the seat was just taken, the message in text offers the next option on the same screen; the earlier choice is kept, and the old ticket stays until the new one is issued.
  - Time limits (A11Y-W1): The seat is held for a stated time while confirming, with a warning at least 20 seconds before it ends.
  - Language (A11Y-L1): Say "no extra charge" in full and keep seat details as short labelled lines.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The traveller picks a service.
  - Agent goal: Rebook exactly the service the traveller chose at no extra cost.
  - Agent actions: Shows the exact new service, coach and seat, 'no extra charge' and assisted travel carried over, and the traveller confirms. The new ticket is issued before the old one is cancelled, and the confirmation says how to change again or switch to a refund.
  - Agent tone: Clear and steady.
  - Agent type: Vertical travel AI assistant; ticketing system.
  - Multi-agent handoff: AI assistant prepares the summary, the traveller confirms, and the ticketing system issues the new ticket and cancels the old one.
  - Goal failure response: Data unavailable (seat just taken): offer the next option on the same screen. Partial completion (ticket issued but assisted travel not reconfirmed): show what is done and hand assisted travel to a person. Full task failure (ticketing down): keep the old ticket, say so and give the phone route.
  - Failure handover trigger: Ticketing fails twice, any charge appears, or assisted travel can't be confirmed: travel support immediately, with the handover context package.
  - Data needs: Held seat, fare rules, old ticket, assisted travel booking.
  - Agent memory: Episodic: the rebooking joins the trip history.
  - Regulatory classification: Passenger rights and consumer protection: no extra charge where the rules say so; every change logged with who confirmed it.

### 4. What you're owed

- Entitlement stated with the threshold: 'Delays over 60 minutes: 50% of your fare'
- Claim deadline shown as a date
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the entitlement heading; the threshold rule and deadline follow as a list, with Claim as the last button.
  - Announced (A11Y-S1): The entitlement is read in full, such as "25 percent of your fare, 11.60 pounds, until Tuesday 25 November".
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the threshold and the claim deadline in full, and explain "compensation" and "care" in a plain sentence.
- **Agent and system (HAI):**
  - Agent mode: Assistive
  - Trigger / cue: Rebooking or refund is done, or the traveller asks what they're owed.
  - Agent goal: Tell the traveller their compensation and care rights with numbers and dates.
  - Agent actions: Gives the entitlement the rules engine worked out, with the threshold, amount and claim deadline, and explains 'compensation' and 'care' in one plain sentence each. It never says 'may be eligible' without the rule and never decides a claim.
  - Agent tone: Plain and exact: 'Claim by Tuesday 25 November.'
  - Agent type: Vertical travel AI assistant; reads the rules engine.
  - Multi-agent handoff: Rules engine, then the AI assistant.
  - Goal failure response: Data unavailable (final delay not known): say the amount is confirmed when the journey ends and give the threshold. Constraint violation (ticket bought through a third party): explain where to claim. Low confidence about which rules apply: say so and hand over.
  - Failure handover trigger: The traveller disputes the entitlement, missed an onward connection, or asks for a person: the claims team, with the handover context package.
  - Data needs: Delay length, distance, fare paid, passenger rights rules, care entitlements.
  - Agent memory: Short-term.
  - Regulatory classification: Passenger rights rules set the entitlement; the rules engine calculates, the operator decides, the AI assistant explains.

### 5. Claim

- Journey, ticket and delay prefilled from the booking
- Ask only for payment destination and extra costs with receipts
- **error:** Receipt upload failed — the claim is saved; add receipts later
- **loading:** Sending your claim
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first prefilled field; prefilled values are editable, receipts upload through a native button, and Send comes after a review of the claim.
  - Announced (A11Y-S1): Title "Your claim" is read; "Sending your claim" is announced politely, and an upload failure is announced assertively.
  - Errors (A11Y-E1): A receipt failure is written in text beside the upload and linked to it, with "your claim is saved"; typed details are kept, and Send shows a review before submitting.
  - Time limits (A11Y-W1): No time limit; the claim is saved so receipts can be added later, up to the stated deadline.
  - Language (A11Y-L1): Say what is already filled in, ask only for the missing items, and keep amounts in pounds in full.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The traveller chooses to claim.
  - Agent goal: Send a correct claim without asking for anything the booking already holds.
  - Agent actions: Drafts the claim from booking and delay data, each field marked as filled by the AI assistant until the traveller checks it. The traveller enters the payment destination and adds receipts, which the AI assistant never sees; Send shows a review, and the confirmation gives a reference and how to change or withdraw.
  - Agent tone: Brief and checkable: 'We've filled in your journey. Check it and send.'
  - Agent type: Vertical travel AI assistant; claims system.
  - Multi-agent handoff: AI assistant drafts, the traveller sends, the claims system records it.
  - Goal failure response: Partial completion (receipt upload failed): the claim is saved; add receipts later before the deadline. Low confidence on a filled field: leave it blank and ask. Constraint violation (past the deadline): say so and route to a person.
  - Failure handover trigger: A compensation payment fails, the claim is refused, or the traveller asks for a person: the claims team immediately, with the handover context package, because money is involved.
  - Data needs: Booking, ticket, delay record, receipts; payment destination held only by the payment service.
  - Agent memory: Episodic: claim status, viewable, and deleted after the retention period.
  - Regulatory classification: Passenger rights and consumer protection; data minimisation; money involved, so any payment problem goes to a person.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-S1: The options list announces departure, arrival and connection status for each option
- A11Y-R1: Notifications stay readable at 200% text, with key information in the first line
- A11Y-W1: Seat holds are the only time limits, are announced, and are warned at least 20 seconds before ending, with an extension
- A11Y-K1: Text-only mode works with screen readers on slow connections, and every action works by switch access
- A11Y-L1: Notices use short sentences in the chosen language where available, with times and dates in full
- A11Y-E3: Rebooking and the claim show a review before submit, and a failed upload keeps the claim saved
- A11Y-H1: The phone number and ticket reference help route is in the same place on every step

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Short sentences, one fact each: 'Your train is cancelled. Here are your options.'
- Numbers and dates for rights: 'Claim by Tuesday 25 November'
- Avoid industry terms: 'cancelled' not 'terminated short'

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant says it is an AI assistant that can rank options, explain rights and draft a claim, and that the traveller decides everything
- Ranked options show the reason for each rank, all options can be seen unranked in one tap, and the refund option is always visible
- Nothing is rebooked or refunded until the traveller sees the exact service, seat, 'no extra charge' and assisted travel and confirms; the old ticket stays valid until the new one is issued, and the confirmation says how to change or switch to a refund
- The AI assistant never rebooks by itself; it could only do so under a standing rule the traveller set up with visible limits, an expiry and one-step revoke
- Entitlements show the rule, threshold, amount and claim deadline from the rules engine; the drafted claim is marked as filled by the AI assistant until the traveller checks and sends it, and the traveller enters payment details themselves
- Payment or refund failures, assisted travel that can't be rebooked, and requests for a person go to a person immediately with the handover context package

## Edge cases

- Connection missed because of the disruption — show rights for the onward leg and contacts
- Traveller already at the station without signal — SMS fallback with options
- Disruption overnight — show care entitlements (meals, hotel) and how to claim
- Ticket bought through a third party — explain where to claim
- Assisted travel can't be rebooked in time — phone route with priority

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Traveller — name, contact details, language preference, assisted travel need · relates to Booking, Claim · personal data
- Booking — ticket reference, service, fare paid, seat, status · relates to Traveller, Disruption, Rebooking · personal data
- Disruption — service, type, delay length, cause, time · relates to Booking
- Rebooking — new service, seat, charge, ranked by AI assistant, confirmed by, time · relates to Booking · personal data
- Refund — amount, method, status · relates to Booking · personal data
- Entitlement — rule, threshold, amount, claim deadline, care items · relates to Booking
- Claim — reference, fields filled by AI assistant, fields changed by traveller, receipts, status · relates to Traveller, Booking, Entitlement · personal data

### Systems it touches

- Disruption feed — reads cancellations, delays · when down: Notices fall back to the station feed and SMS with the phone number.
- Ticketing and reservations — reads tickets, seat availability; writes new tickets, cancellations, refunds · when down: Keep the old ticket valid and give the phone route.
- Passenger rights rules engine — reads delay, distance, fare; writes entitlements · when down: Show the published thresholds and say the amount follows.
- Claims system — reads claim status; writes claims · when down: Save the draft claim and send it when the service is back.
- Payment service — reads payment status; writes refunds, compensation payments · when down: Hold payments and tell the traveller; a person follows up.
- Assisted travel system — reads assistance bookings; writes carried-over assistance · when down: Route to the assisted travel phone line with priority.
- Notification service (push and SMS); writes notices · when down: Use SMS with key details in the first line.

### Roles

- Traveller — rebook, choose a refund, claim compensation, change or withdraw a claim, ask for a person
- Travel support team — rebook by phone or at the station, arrange assisted travel, receive handovers
- Claims handler — decide claims, pay compensation, handle disputes
- Assisted travel team — reconfirm and rearrange assistance
- AI assistant — explain the disruption, rank options with reasons, prepare the rebooking summary for confirmation, explain entitlements, draft the claim, marked until checked, hand over to a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Rebook or refund in the app: 80% within 15 minutes of the notice (range 70–90%)
- Travellers shown their rights: 100% of disrupted bookings (range 100%)
- Claim completion: 70% of eligible travellers (range 60–85%)
- Station desk contacts during disruption: 40% fewer per disrupted booking (range 25–50% fewer)
- Warning before a seat hold ends: 20 seconds, with Extend (range 20 seconds or more)
- Claim and booking records kept: The legal minimum for the jurisdiction (range Set by passenger rights and tax law)

### Required inputs and configuration

- Passenger rights rules for each mode and jurisdiction
- Compensation thresholds and claim deadlines
- Care entitlements during overnight disruption
- Live timetable and seat availability feed
- Refund policy
- Assisted travel phone route
- Supported notice languages
- Claim routes for tickets bought through third parties

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
