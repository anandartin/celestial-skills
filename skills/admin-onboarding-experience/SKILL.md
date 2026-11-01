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

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

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
