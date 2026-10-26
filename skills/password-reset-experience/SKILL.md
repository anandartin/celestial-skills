---
name: password-reset-experience
type: experience
journey: customer
persona: Warehouse supervisor (54), resets on a work break
domain: Account recovery
technology: Responsive web, often reached from the sign-in screen
core: "1.0"
description: "Experience skill: Resetting a forgotten password safely — the best-practice customer journey for a warehouse supervisor (54), resets on a work break in Account recovery on Responsive web, often reached from the sign-in screen. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Resetting a forgotten password safely

A customer who has forgotten their password proves control of their email, sets a new password and is signed back in, without the flow helping an attacker.

**Outcome** — At least 85% of reset requests end in a successful sign-in within ten minutes, with no account-existence leaks and every reset notified.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Camille, Warehouse supervisor (54), resets on a work break

> “I only use this account twice a year, so I never remember the password. Just let me get back in.”

Pays a utility bill online a few times a year; uses an old phone with a cracked screen and a small data allowance.

**Goals**
- Get back in during a 15-minute break
- Set a password he can actually keep
- Be sure nobody else changed it

**Pains**
- Security questions he can't answer
- Reset emails that take ages
- Being made to sign in again right after resetting

**Behaviours**
- Writes passwords in a notebook
- Uses the phone's text zoom
- Calls the helpline if the email doesn't arrive

**Access needs**
- Dyslexia — mistypes long strings
- Cracked screen — needs large targets away from edges

---

## Domain — Account recovery

- The request screen shows the same message whether or not the email has an account
- Reset tokens are single-use, expire within 30 minutes and are invalidated when a new one is issued
- After a reset, end all other sessions and email a notice with a “this wasn't me” route
- Check new passwords against known-breached lists and reject them with a reason
- No knowledge-based security questions; use email, a second factor or assisted recovery

Vocabulary to use: `reset link`, `new password`, `sessions`, `breached password`, `recovery`, `sign-in notice`

## Technology — Responsive web, often reached from the sign-in screen

Inputs: Touch keyboard, Password manager, Email on the same phone

- Reset email under 100 KB, plain-text alternative included
- Rate-limit requests per email and per network
- Link must work when opened in an email app's built-in browser

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Request** | Ask for a reset link | `auth card` | “Enter your email and we'll send a reset link” |
| 2 | **Check email** | Find and open the link | `progress` | “If there's an account for that email, a link is on its way. It works for 30 minutes.” |
| 3 | **New password** | Choose a password that passes first time | `form` | “Choose a new password — at least 12 characters” |
| 4 | **Signed in** | Return to the account, signed in | `confirmation` | “Password changed. You're signed in, and other devices have been signed out.” |
| 5 | **Notice** | Spot a reset they did not make | `inbox` | “Your password was changed today at 12:41. Wasn't you? Secure your account.” |

### 1. Request

- Pre-fill the email from the sign-in screen
- One field, one button
- **error:** Explain the format issue next to the field

### 2. Check email

- Same message for every email entered
- Show sender name, expiry and a resend after 60 seconds
- **loading:** Sending…

### 3. New password

- Rules visible up front, ticked live
- Paste, show-password and manager suggestions allowed
- **empty:** Link expired — offer to send a new one in one tap
- **error:** This password has appeared in a data breach. Please choose another.

### 4. Signed in

- Sign them in directly; no second sign-in
- Say that other devices were signed out

### 5. Notice

- Notice lists time, device and approximate location
- One clear action if it wasn't them

---

## Principles

1. Never leak whether an account exists
2. Recovery is fast for the owner and slow for an attacker
3. The person is signed in at the end, not sent back to start
4. Every reset produces a notice with a way to undo
5. Rules are shown before they can be broken

## Do / Don't

**Do**
- Invalidate older links when a new one is sent
- Offer assisted recovery when the email is no longer accessible
- Keep the email field filled across screens

**Don't**
- Use security questions or hints
- Email the new password or show it in the notice
- Say “No account found for this email”

## Accessibility

- Meets WCAG 2.2 AA, including 3.3.8 Accessible Authentication (paste and autofill allowed)
- Password requirements are a list linked by aria-describedby, with met state announced
- Focus moves to the heading of each new screen; errors are summarised at the top and linked
- Targets at least 44 × 44 px and at least 8 px from screen edges

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Plain verbs: “Send reset link”, not “Submit”
- State time limits in the copy: “This link works for 30 minutes”
- Reassure without blame: “It happens. Let's get you back in.”

## AI interactions

- No AI in the reset itself because recovery must be deterministic; anomaly detection may hold a reset for manual review, and the customer is told how long that takes

## Edge cases

- Attacker requests many resets for one email — rate-limit and send at most one email per window
- Person no longer has the email address — route to assisted recovery with identity checks and a waiting period
- Link forwarded or opened twice — second open shows “already used” with a new-link button
- Account has two-step verification — ask for the second factor before the new password is set

---

## Measures

| Measure | Target | How |
|---|---|---|
| Reset success | ≥ 85% | Request → signed in within 10 min |
| Email delivery time | < 60 s at p95 | Send to inbox, monitored by seed accounts |
| Repeat resets | < 10% | Accounts resetting again within 30 days |
| Unauthorised reset reports | 100% actioned < 1 h | “Wasn't me” clicks to account secured |

Research: Task-based usability tests with infrequent users on older phones; Penetration test focused on enumeration, token reuse and rate limits; Review of support tickets tagged recovery to find dead ends.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
