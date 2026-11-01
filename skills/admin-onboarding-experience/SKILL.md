---
name: admin-onboarding-experience
type: experience
journey: user
persona: Operations admin
domain: B2B SaaS
technology: Web app (desktop first)
core: "1.0"
description: "Experience skill: First-run onboarding for an operations admin — the best-practice user journey for a operations admin in B2B SaaS on Web app (desktop first). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# First-run onboarding for an operations admin

Take a busy admin from sign-up to their first real result in one sitting — no tour, no empty dashboard, no dead ends.

**Outcome** — An admin reaches a first meaningful result with their own data in one sitting and knows the single next step.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Priya, Operations admin

> “I have twenty minutes between meetings. Show me it works with my data or I am back to the spreadsheet.”

Evaluating a new tool for a 40-person team; owns the decision, not the budget.

**Goals**
- See value with real data in under 15 minutes
- Invite the team only once it works
- Know what to do next at every step

**Pains**
- Product tours that explain buttons instead of outcomes
- Empty dashboards with nothing to do
- Being asked for card details before trying anything

**Behaviours**
- Skims, then acts
- Works in two-to-three short sessions
- Trusts templates over blank pages

**Access needs**
- Keyboard-first on desktop
- Screen magnification at 125%

---

## Domain — B2B SaaS

- GDPR: lawful basis and consent for marketing email kept separate from sign-up
- SSO / SCIM expected by IT before team rollout

Vocabulary to use: `workspace`, `seat`, `admin`, `invite`, `integration`

## Technology — Web app (desktop first)

Inputs: Mouse, Keyboard, Paste / import

- Session may be interrupted — save progress on every step
- Works at 1280px and 1024px; responsive to 390px for invites

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Discover** | Understand the value in one line and start free | `marketing hero` | “Start free — no card needed” |
| 2 | **Sign up** | Create an account with the fewest fields | `auth card` | “Create your account” |
| 3 | **Set up** | Choose a starting point and connect one data source | `onboarding` | “Get set up · 2 of 4” |
| 4 | **First task** | Do the core job with their own data | `dashboard · empty state` | “No projects yet — Create your first project” |
| 5 | **First success** | Celebrate the outcome and point to the next step | `feedback` | “Project created · Invite your team” |

### 1. Discover

- One headline, one primary action
- No card required, stated next to the button
- **error:** If sign-up is unavailable, offer an email to retry later
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays at the top of the page; Tab reaches the main heading, the Start free button, then the sign-in link, in visual order.
  - Announced (A11Y-S1): Page title names the product and the offer; the hero headline is an h1 and the “no card needed” line is read straight after the button.
  - Errors (A11Y-E1): If sign-up is unavailable, the message sits next to the button as text, with an email link to try again later, and nothing typed is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say what the product does in one plain sentence and avoid jargon such as “workflows” or “orchestration” in the headline.

### 2. Sign up

- Email + password or SSO; nothing else
- Password rules shown before typing, not after failing
- **error:** Inline, beside the field, with the fix
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Create your account heading; Tab goes email, password, show-password toggle, then submit, and paste, password managers and autofill (new-password) all work with no puzzle or memory test.
  - Announced (A11Y-S1): Title reads “Create your account”; password rules are read before typing, and met rules are announced politely while an error is announced assertively.
  - Errors (A11Y-E1): Each error appears as text beside its field with the fix, linked by aria-describedby, and a summary links to each field; email and password stay filled.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): List password rules as short sentences with the number of characters written in full, and spell out SSO as single sign-on.

### 3. Set up

- Offer template, import or sample — never a blank page
- Checklist with visible progress; every step skippable
- **loading:** Show the import as it happens, row counts included
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the “Get set up” heading; Tab follows the checklist, then template, import and sample options, and each step has a visible Skip button.
  - Announced (A11Y-S1): Heading announces “Get set up, 2 of 4”; the checklist is a list with the current item marked, and import row counts are announced politely.
  - Errors (A11Y-E1): If an import row fails, the problem is named in text beside that row and linked from a summary; the uploaded file and choices are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain terms such as “data source” and “template” in place, and write row counts in full, for example “1,200 rows imported”.

### 4. First task

- Empty states teach by doing: one primary action, one secondary
- Pre-fill from the import so the first task is one click
- **empty:** Explain what appears here and offer the one action that fills it
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the dashboard heading; Tab reaches Create your first project first, then the secondary action, with no hover needed.
  - Announced (A11Y-S1): Page title is the dashboard; the empty-state heading explains what will appear here, and project creation is announced politely when it completes.
  - Errors (A11Y-E1): Project name errors are shown in text beside the field and linked to it; the name typed is kept and the pre-filled import data is not asked for again.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say what a “project” is in one short sentence and keep the empty-state text at a simple reading level.

### 5. First success

- Confirm what happened in plain words
- Suggest exactly one next step (invite the team)
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the “Project created” heading; Tab reaches Invite your team, then a Skip for now option, in that order.
  - Announced (A11Y-S1): The confirmation is a polite status announcement naming the project that was created, followed by the heading and the single next step.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Confirm in plain words what happened and name the project; avoid celebratory slang or idioms.

---

## Principles

1. Time to first value beats feature coverage
2. Real data over sample data whenever it is one click away
3. Every screen has one primary action
4. Progress is saved automatically; leaving is always safe
5. Explain outcomes, not buttons

## Do / Don't

**Do**
- Let people skip any step and come back from the checklist
- Ask for team invites after the first success, not before
- Use the product’s own components for guidance (empty states, checklists), not overlays

**Don't**
- Block the product behind a multi-screen tour
- Ask for billing before value is shown
- Show an empty dashboard with no next step

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: The checklist is a list with aria-current on the active item, and a screen reader announces its position, for example “2 of 4”.
- A11Y-K1: After each step completes, focus moves to the new step heading, and every step is reachable by keyboard in visual order with no drag.
- A11Y-S1: Import progress and row counts are announced through a polite live region without moving focus.
- A11Y-R1: At 125% magnification and 200% zoom the checklist and forms stay usable with no horizontal scroll down to 320px.
- A11Y-A1: Sign-up accepts paste, password managers and autofill, with no memory or puzzle test, and password rules are shown before typing.
- A11Y-E1: Field errors appear in text beside the field with the fix, linked to it, and the entered values are kept.
- A11Y-H1: Help and the way to contact support sit in the same place on every onboarding step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Sentence case, verbs first: “Connect your data”
- Numbers over adjectives: “Imported 1,240 rows”
- Never blame: “We couldn’t read that file — try CSV or XLSX”

## AI interactions

- Offer “Set it up for me” that drafts the workspace from a short description, shown for review before it is created

## Edge cases

- Import fails halfway — keep what worked, list what didn’t
- Admin invited by someone else — skip workspace creation
- SSO enforced — hide password fields entirely

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to first value | < 15 min | Sign-up → first project with real data |
| Activation rate | ≥ 45% | Accounts completing step 4 within 7 days |
| Checklist completion | ≥ 60% | All four checklist items done |
| Invite after success | ≥ 30% | Invites sent within 24h of first success |

Research: 5-second test on the hero; Unmoderated first-run test with 8 admins using their own CSV; Funnel analysis per step, weekly.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
