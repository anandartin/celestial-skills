---
name: sign-up-and-verify-experience
type: experience
journey: customer
persona: Student (22), signing up on a phone
domain: Consumer accounts and consent
technology: Responsive web app (mobile first)
core: "1.0"
description: "Experience skill: Creating an account and verifying email on a consumer web app — the best-practice customer journey for a student (22), signing up on a phone in Consumer accounts and consent on Responsive web app (mobile first). Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Creating an account and verifying email on a consumer web app

A new customer creates an account with only an email and password, confirms the address with a code or link, and lands inside the product without losing what they started.

**Outcome** — At least 75% of people who start sign-up reach a verified account within five minutes, with fewer than 2% contacting support about the verification email.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Malik, Student (22), signing up on a phone

> “If I have to dig through my inbox for ten minutes, I'll just give up and use something else.”

Signs up between lectures on a shared campus network; her email app is set to sort messages into tabs and often hides automated mail.

**Goals**
- Get in quickly with as few fields as possible
- Know straight away whether the email arrived
- Keep the item she was saving before she signed up

**Pains**
- Password rules revealed only after she submits
- Verification emails that land in junk or never arrive
- Being sent back to an empty home page after verifying

**Behaviours**
- Uses the password manager suggestion when offered
- Switches between apps to copy codes
- Abandons forms that ask for a phone number without saying why

**Access needs**
- Dyslexia — prefers short lines and codes she can paste
- Often uses the phone one-handed

---

## Domain — Consumer accounts and consent

- Collect only what the account needs at sign-up (GDPR data minimisation); ask for anything else later, with a reason
- Marketing consent is a separate, unticked choice and never a condition of the account
- Link to the privacy notice and terms before the account is created, in plain words
- Do not reveal whether an email is already registered on the sign-up form; send a message to that inbox instead
- Verification codes expire (e.g. 15 minutes) and are single-use; resend is rate-limited

Vocabulary to use: `account`, `verification code`, `magic link`, `privacy notice`, `consent`, `resend`

## Technology — Responsive web app (mobile first)

Inputs: Touch keyboard, Password manager autofill, One-time code autofill from email

- Fields use autocomplete="email" and autocomplete="new-password"
- Works with third-party cookies blocked
- Verification email sent within 30 seconds, from a consistent sender name

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Start** | Understand what the account gives and start with one field | `auth card` | “Create your account to save your lists across devices” |
| 2 | **Password** | Set a password that passes on the first try | `form` | “Use at least 12 characters. A short phrase works well.” |
| 3 | **Consent** | Agree to terms and choose marketing separately | `form + chips` | “Send me tips and offers (you can stop these at any time)” |
| 4 | **Verify** | Confirm the email with a code or link | `progress` | “We sent a 6-digit code to leila@example.com” |
| 5 | **Welcome** | Land where they were, now signed in | `confirmation` | “You're in. Your saved list is waiting.” |

### 1. Start

- Show the benefit in one line above the form
- Email first; no name or phone at this point
- **error:** Explain the email format issue next to the field without clearing it

### 2. Password

- Show the rules before typing and tick them as they are met
- Allow paste and a show-password toggle
- **error:** Name the one rule that is not yet met

### 3. Consent

- Marketing opt-in unticked by default
- Terms and privacy notice open in a panel, not a new site

### 4. Verify

- Show the address the code went to, with a change option
- Resend unlocks after 30 seconds with a visible timer
- **error:** That code has expired. We've sent a new one.
- **loading:** Checking the code…

### 5. Welcome

- Return to the page and item they started from
- Offer one next step, not a tour

---

## Principles

1. Ask for the least information that creates a working account
2. Every rule is visible before the person can break it
3. Verification survives switching apps and devices
4. The person never loses what they were doing before sign-up
5. Consent choices are separate, unticked and reversible

## Do / Don't

**Do**
- Accept both a code and a link in the same email
- Let people correct a mistyped email from the verify screen
- Keep the session alive while they fetch the code

**Don't**
- Ask for date of birth, phone or address without a need
- Force a password confirmation field when a show toggle exists
- Pre-tick marketing consent or bundle it with the terms

## Accessibility

- Meets WCAG 2.2 AA, including 3.3.8 Accessible Authentication: paste and autofill allowed, no cognitive tests
- Code input is one field with inputmode="numeric" and autocomplete="one-time-code", not six separate boxes
- Password rules are linked with aria-describedby and their met state announced politely
- Targets at least 44 × 44 px; focus moves to the first error on submit

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Say what happens next: “Check your inbox for a 6-digit code”
- Name the sender so people can search: “The email comes from Northfield Lists”
- Errors say how to fix, not what went wrong: “Add the part after @”

## AI interactions

- No AI in this journey because sign-up must be predictable and auditable; spam and bot detection runs server-side without blocking real people

## Edge cases

- Email already registered — show the same verify screen and send a “you already have an account” message to that inbox
- Email never arrives — after two resends offer a different address and show a help link
- Code opened on a different device — verify the account and ask the original device to continue
- Disposable or mistyped domain (e.g. a common typo) — suggest the likely correction, never block silently

---

## Measures

| Measure | Target | How |
|---|---|---|
| Sign-up completion | ≥ 75% | Start → verified account, per device type |
| Time to verified | < 5 min | Median from first field to verified |
| Resend rate | < 15% | Accounts needing one or more resends |
| Verification support contacts | < 2% | Tickets tagged verification ÷ sign-ups |

Research: Moderated mobile usability sessions with participants who use dyslexia support tools; Email deliverability test across common inbox providers and filtering settings; Funnel analysis of drop-off per field and per resend.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
