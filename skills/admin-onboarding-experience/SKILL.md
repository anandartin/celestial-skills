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

### 2. Sign up

- Email + password or SSO; nothing else
- Password rules shown before typing, not after failing
- **error:** Inline, beside the field, with the fix

### 3. Set up

- Offer template, import or sample — never a blank page
- Checklist with visible progress; every step skippable
- **loading:** Show the import as it happens, row counts included

### 4. First task

- Empty states teach by doing: one primary action, one secondary
- Pre-fill from the import so the first task is one click
- **empty:** Explain what appears here and offer the one action that fills it

### 5. First success

- Confirm what happened in plain words
- Suggest exactly one next step (invite the team)

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

## Accessibility

- Checklist is a list with aria-current on the active step
- Focus moves to the new step heading after each completion
- Import progress announced via a polite live region
- All steps reachable by keyboard in visual order

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
