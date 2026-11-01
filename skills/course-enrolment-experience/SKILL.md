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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus starts on the page heading; filter controls are native checkboxes and selects, results follow in a list, and Tab reaches each course card as one link.
  - Announced (A11Y-S1): Title "Browse courses" is read; the result count, such as "12 courses match", is announced politely after each filter change.
  - Errors (A11Y-E1): If no course matches, the text names the filter causing it and offers a button to remove it; selected filters are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show hours, weeks and total price in full, such as "4 hours a week for 6 weeks, 180 pounds", and explain level names.

### 2. Course

- Syllabus, weekly workload and outcomes in plain words
- Sample lesson playable before paying
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the course heading; the sample lesson player is a native video with keyboard controls, captions and a transcript link before the Enrol button.
  - Announced (A11Y-S1): Title is the course name; the sample lesson's play, pause and caption state are announced, and the transcript is real text.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Describe the syllabus and weekly workload in plain words, and avoid course jargon in the outcomes.

### 3. Account

- Email code or passkey; no forced social sign-in
- Keep the chosen course visible
- **error:** We couldn't send a code to that email. Check it and try again
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the email field with the chosen course shown above it; pasting, password managers and autofill work, the code field uses autocomplete="one-time-code", and a passkey or emailed code is offered with no puzzle or memory test.
  - Announced (A11Y-S1): Title "Continue to enrol" is read; "Code sent" is announced politely and a failure to send is announced assertively.
  - Errors (A11Y-E1): The send error is written in text beside the email field and linked to it, with the email address kept so only a fix is needed.
  - Time limits (A11Y-W1): The emailed code stays valid for the time stated; a warning appears at least 20 seconds before it expires, with a button to send a new one.
  - Language (A11Y-L1): Say "one-time code" once with its meaning, and tell the person what to do if the email does not arrive.

### 4. Pay

- Total and refund terms beside the pay button
- Separate agreement if starting immediately ends the cooling-off period
- **error:** Your bank declined the payment. No money was taken
- **loading:** Confirming with your bank…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the total and refund terms before the card form; the hosted card fields are labelled and can be autofilled, and Pay sits after a separate agreement checkbox when needed.
  - Announced (A11Y-S1): The total and refund terms are read before Pay; "Confirming with your bank" is announced politely, and a declined payment is announced assertively with focus moved to the message.
  - Errors (A11Y-E1): A decline is explained in text next to the card fields with "No money was taken", fields are kept, and a review of the total comes before Pay.
  - Time limits (A11Y-W1): The bank confirmation may take time; the person is told and can wait or cancel, with no hidden timer.
  - Language (A11Y-L1): State "Pay 180 pounds" in full, explain the cooling-off period in a short sentence, and avoid the term "tokenised".

### 5. Enrolled

- Receipt and refund terms emailed
- One clear action: start lesson 1
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the "You're enrolled" heading; one primary Start lesson 1 button follows, then links to the receipt and refund terms.
  - Announced (A11Y-S1): "You're enrolled" is read as a heading, followed by "Start lesson 1, it takes 12 minutes"; the emailed receipt is stated politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Keep one clear action and say the lesson length in minutes in full words.

### 6. First lesson

- Captions and transcript available from the first second
- Progress saved automatically, resume where left off
- **loading:** Loading lesson…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the lesson heading, then the player; Space plays or pauses, captions toggle with a button, and a transcript is reachable in tab order; downloads for offline are a normal button.
  - Announced (A11Y-S1): "Lesson 1 of 24" is read; "Loading lesson" and "Lesson complete" are announced politely, and saved progress is announced without moving focus.
  - Errors (A11Y-E1): If the lesson fails to load, a text message with a retry button appears beside the player and progress already saved is kept.
  - Time limits (A11Y-W1): No time limit; progress saves automatically and resumes where the person left off.
  - Language (A11Y-L1): Keep progress wording simple, such as "Lesson 1 of 24 complete", and write the transcript in plain sentences.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: The video player controls are keyboard operable with visible focus, and captions can be toggled by keyboard
- A11Y-N1: Captions and a transcript are available for all video from the first second, and the sample lesson has both
- A11Y-E1: Payment errors are announced assertively, focus moves to the message, and card and email details are kept
- A11Y-E3: Pay shows the total and refund terms beside the button, with a separate agreement when the cooling-off period ends, and a clear no-money-taken message on decline
- A11Y-A1: Sign-in supports pasting, password managers and autofill, offers a passkey or emailed code, and has no puzzle or memory test
- A11Y-T1: Touch targets are at least 44 by 44px on tablet
- A11Y-S1: Lesson loading and progress saving are announced politely without moving focus

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
