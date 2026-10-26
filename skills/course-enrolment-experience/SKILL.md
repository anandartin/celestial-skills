---
name: course-enrolment-experience
type: experience
journey: customer
persona: Learner (38), nurse upskilling
domain: Education · online learning
technology: Responsive web and tablet app
core: "1.0"
description: "Experience skill: Choosing and enrolling in an online course — the best-practice customer journey for a learner (38), nurse upskilling in Education · online learning on Responsive web and tablet app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Choosing and enrolling in an online course

A learner compares courses, sees the total cost and time commitment, pays, and starts the first lesson on the same day.

**Outcome** — A learner who starts enrolment pays and opens the first lesson in one session, with at least 70% completing the first lesson within 48 hours.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Marisol, Learner (38), nurse upskilling

> “I have about four hours a week. Tell me honestly whether this course fits that.”

Works nights on a hospital ward and studies on a tablet at home in the afternoons.

**Goals**
- Pick a course that fits four hours a week
- Know the full price and refund terms
- Start learning straight away

**Pains**
- Course pages that hide the real weekly workload
- Surprise fees for certificates
- Videos without captions on a noisy bus

**Behaviours**
- Studies on a tablet, sometimes on mobile data
- Reads reviews from other learners
- Watches lessons with captions on

**Access needs**
- Watches with captions in noisy places
- Low bandwidth at times — needs downloadable lessons

---

## Domain — Education · online learning

- Show the total price including tax, certificate and materials before payment
- Distance-selling cancellation: state the cooling-off period (e.g. 14 days) and if it ends when the learner starts content, ask for explicit agreement
- Card payments follow PCI DSS and strong customer authentication where required
- Learners under 18 need guardian consent; collect age only where this applies
- Course content meets WCAG 2.2 AA: captions and transcripts for every video

Vocabulary to use: `course`, `module`, `lesson`, `enrolment`, `certificate`, `cooling-off period`

## Technology — Responsive web and tablet app

Inputs: Touch, Keyboard, Screen reader

- Lessons playable at low bitrates and downloadable for offline
- Payment through a hosted, tokenised card form
- Progress synced across devices

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Browse** | Find courses that match a goal and time budget | `list + filters` | “4 hrs a week · 6 weeks · £180” |
| 2 | **Course** | Decide if this course is right | `detail` | “Watch the first lesson free” |
| 3 | **Account** | Sign in or create an account quickly | `auth card` | “Continue to enrol in Clinical Data Basics” |
| 4 | **Pay** | Pay the total and understand the refund terms | `form` | “Pay £180” |
| 5 | **Enrolled** | Know you are in and what comes next | `confirmation` | “You're enrolled. Start lesson 1 — it takes 12 minutes” |
| 6 | **First lesson** | Complete the first lesson and see progress | `progress` | “Lesson 1 of 24 complete” |

### 1. Browse

- Filter by hours per week, level and price
- Each card shows total hours and total price
- **empty:** No courses match all filters. Try removing “Under £100”

### 2. Course

- Syllabus, weekly workload and outcomes in plain words
- Sample lesson playable before paying

### 3. Account

- Email code or passkey; no forced social sign-in
- Keep the chosen course visible
- **error:** We couldn't send a code to that email. Check it and try again

### 4. Pay

- Total and refund terms beside the pay button
- Separate agreement if starting immediately ends the cooling-off period
- **error:** Your bank declined the payment. No money was taken
- **loading:** Confirming with your bank…

### 5. Enrolled

- Receipt and refund terms emailed
- One clear action: start lesson 1

### 6. First lesson

- Captions and transcript available from the first second
- Progress saved automatically, resume where left off
- **loading:** Loading lesson…

---

## Principles

1. Honest workload and total price before any commitment
2. Try before you buy
3. Payment terms are visible, not linked
4. Get to learning in one tap after paying
5. Every lesson is accessible from day one

## Do / Don't

**Do**
- Show weekly hours on every course card
- Offer a free sample lesson
- Email a receipt with refund terms

**Don't**
- Add certificate fees after payment
- Pre-tick marketing consent at sign-up
- Autoplay video with sound

## Accessibility

- Meets WCAG 2.2 AA; captions and transcripts for all video (1.2.2, 1.2.3)
- Video player controls keyboard operable with visible focus (2.1.1, 2.4.7)
- Payment errors announced and focus moved to the message
- Touch targets at least 44×44px on tablet

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- State time as the learner experiences it: “About 4 hours a week”
- Money in full: “£180 total, including certificate”
- Encouraging but not hyped: “You've completed your first lesson” not “Amazing!!”

## AI interactions

- Optional: recommend courses from a stated goal and weekly time, showing why each was suggested and letting the learner remove the goal
- Optional: lesson recap generated from the transcript, labelled as AI-written

## Edge cases

- Payment succeeds but enrolment fails — enrol automatically or refund within 24 hours, and tell the learner
- Learner asks for refund after starting — apply the stated policy and explain clearly
- Course is full — offer waitlist with expected date
- Learner is under 18 — guardian consent step before payment
- Learner loses connection mid-lesson — resume from the last saved point

---

## Measures

| Measure | Target | How |
|---|---|---|
| Enrolment conversion | ≥ 40% | Course detail → paid |
| First lesson started | ≥ 85% | Paid → lesson 1 opened, same day |
| First lesson completed | ≥ 70% | Completed within 48 hrs of payment |
| Refund requests citing surprise | < 2% | Refund reasons tagged “didn't expect cost / workload” |

Research: Unmoderated tests of course comparison with shift workers; Payment flow test across bank authentication methods; Accessibility audit of player and lessons.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
