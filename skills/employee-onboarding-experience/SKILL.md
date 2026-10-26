---
name: employee-onboarding-experience
type: experience
journey: workflow
persona: New starter (24); HR partner Joanne; manager Ade; IT technician Sven
domain: HR · onboarding
technology: Web app for staff; mobile-friendly portal for the starter
core: "1.0"
description: "Experience skill: Getting a new starter ready for day one across HR, manager and IT — the best-practice workflow for a new starter (24); hr partner joanne; manager ade; it technician sven in HR · onboarding on Web app for staff; mobile-friendly portal for the starter. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Getting a new starter ready for day one across HR, manager and IT

HR, the hiring manager and IT each complete their part of getting a new starter ready, and the starter knows what to expect before day one.

**Outcome** — Every new starter has signed paperwork, a working laptop and accounts, and a day-one plan before they arrive.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Mei, New starter (24); HR partner Joanne; manager Ade; IT technician Sven

> “I want to turn up on Monday knowing where to go and with a laptop that works.”

Starting her first full-time role remotely-first, with one office day a week; uses a wheelchair and needs a step-free route.

**Goals**
- Know what to do before and on day one
- Have equipment and access ready
- Ask for adjustments without awkwardness

**Pains**
- Paperwork repeated across systems
- Arriving to no laptop or access
- Not knowing who to contact

**Behaviours**
- Completes tasks from her phone
- Reads everything ahead of time
- Asks questions in writing

**Access needs**
- Wheelchair user — needs step-free access and desk adjustments
- Prefers written instructions

---

## Domain — HR · onboarding

- Right-to-work and identity checks completed before start, following local law
- Collect only data needed for employment; sensitive data (health, diversity) is optional and stored separately
- Reasonable adjustments are requested confidentially and shared only with people who need them
- Accounts created with least privilege and tied to the start date
- Each task has an owner and a due date relative to the start date

Vocabulary to use: `new starter`, `start date`, `right to work`, `reasonable adjustment`, `equipment`, `access request`

## Technology — Web app for staff; mobile-friendly portal for the starter

Inputs: Touch, Keyboard, Document upload, E-signature

- Integrates with HR records, identity and device management
- Tasks generated from role and location templates
- Starter portal works before company accounts exist

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Welcome** | Starter sees what's ahead and who to contact | `onboarding` | “Welcome, Mei. Here's what happens before Monday 3 November.” |
| 2 | **Paperwork** | Starter completes forms and checks | `form` | “Tell us about any adjustments you need (optional, shared only with Ade and Facilities)” |
| 3 | **Equipment** | IT prepares laptop and accounts | `list + filters` | “Laptop for Mei Tan · due Thu 30 Oct” |
| 4 | **Manager prep** | Manager plans the first week | `form + chips` | “Add a buddy for Mei's first week” |
| 5 | **Readiness** | Everyone sees what's done and what's at risk | `dashboard · empty state` | “Mei Tan · 9 of 11 tasks done · Laptop at risk” |
| 6 | **Day one** | Starter arrives ready | `confirmation` | “Monday 9:30 · Meet Ade at the step-free entrance on Mill Street” |

### 1. Welcome

- Timeline of tasks before and on day one
- Named contacts with photos and roles

### 2. Paperwork

- Ask once; pre-fill from the offer
- Optional sections clearly marked optional
- **error:** This document has expired. Upload a current one.

### 3. Equipment

- Tasks filtered by due date and status
- Account creation tied to start date
- **empty:** No equipment tasks this week

### 4. Manager prep

- Template plan with buddy, meetings and first tasks
- Adjustments visible only as needed actions

### 5. Readiness

- Overdue tasks flagged to owners and HR
- Readiness shown per starter
- **empty:** No new starters in the next 30 days

### 6. Day one

- Day-one card with time, place, step-free route and first contact
- Login help that works without a company account

---

## Principles

1. One owner and one due date for every task
2. Starter is never asked for the same information twice
3. Adjustments are confidential and actionable
4. Readiness is visible before day one, with risks flagged early
5. Access is least-privilege and tied to the start date

## Do / Don't

**Do**
- Send the starter a clear day-one card
- Flag at-risk tasks five working days ahead
- Let starters ask questions in writing

**Don't**
- Share adjustment details beyond those who need them
- Create accounts weeks before the start date
- Make diversity questions mandatory

## Accessibility

- Starter portal meets WCAG 2.2 AA, including accessible authentication without cognitive tests (WCAG 3.3.8)
- E-signature has a keyboard and screen reader path
- Document upload accepts phone photos and explains format limits in text
- Dashboard status uses text labels and patterns, not colour alone

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Write to the starter warmly and plainly: “Here's what happens before Monday”
- Mark optional questions in the label, not only with an asterisk
- Tasks for staff start with a verb and a date: “Order laptop by Thu 30 Oct”

## AI interactions

- Optional: draft the first-week plan from the role template for the manager to edit
- No AI in right-to-work or adjustment decisions because these are legal and personal judgements

## Edge cases

- Start date moves — all task dates and account activation shift automatically
- Right-to-work check incomplete by start — escalate to HR; start may be delayed per law
- Offer withdrawn — revoke access and cancel equipment tasks
- Equipment delivery delayed — loan device prepared and starter told
- Starter needs adjustments not yet in place — manager and facilities alerted with deadline

---

## Measures

| Measure | Target | How |
|---|---|---|
| Day-one readiness | ≥ 95% | Starters with laptop, accounts and plan on day one |
| Overdue tasks at start | < 2% | Tasks incomplete on start date |
| Starter confidence | ≥ 4.5 / 5 | Survey at end of week one |
| Duplicate data requests | 0 | Fields asked more than once, form audit |

Research: Interviews with recent starters about their first week; Service blueprint workshop with HR, managers, IT and facilities; Accessibility testing of the starter portal with disabled users.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
