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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the email field; paste and autofill work, and Enter submits; there is no puzzle or memory test.
  - Announced (A11Y-S1): Announces the page title and heading, then the label 'Email'; errors are assertive.
  - Errors (A11Y-E1): The email format message sits beside the field, linked to it; the typed address stays and nothing must be remembered.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'reset link' and keep the sentence short.

### 2. Check email

- Same message for every email entered
- Show sender name, expiry and a resend after 60 seconds
- **loading:** Sending…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the heading; the Resend link and Open email app link follow.
  - Announced (A11Y-S1): Announces politely 'Sending…' then the message that a link is on its way and works for 30 minutes.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): The link works for 30 minutes; the expiry is written on the page and a new one can be requested in one tap.
  - Language (A11Y-L1): Say 'if there's an account' plainly and write '30 minutes' in full.

### 3. New password

- Rules visible up front, ticked live
- Paste, show-password and manager suggestions allowed
- **empty:** Link expired — offer to send a new one in one tap
- **error:** This password has appeared in a data breach. Please choose another.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading then the password field; paste, autofill and password managers work, and a passkey is offered; no memory or puzzle test.
  - Announced (A11Y-S1): Announces the requirements list, each met state politely, and the show-password toggle state.
  - Errors (A11Y-E1): The breach message is text beside the field linked by aria-describedby; the typed password stays and a one-tap new link is offered if expired.
  - Time limits (A11Y-W1): The link has expired after 30 minutes; the person is told the time in text and gets a new link in one tap.
  - Language (A11Y-L1): Say 'appeared in a data breach' plainly and explain the 12-character minimum.

### 4. Signed in

- Sign them in directly; no second sign-in
- Say that other devices were signed out
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; the Continue button is next.
  - Announced (A11Y-S1): Announces 'Password changed' politely, then that other devices are signed out.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'signed out of other devices' in plain words.

### 5. Notice

- Notice lists time, device and approximate location
- One clear action if it wasn't them
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the Secure your account button is first.
  - Announced (A11Y-S1): Announces the heading and 'Wasn't you?' as text, then the button.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the time as '12:41 today' and avoid 'unauthorised access'.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-A1: Paste, autofill and password managers work, with no memory or puzzle test (WCAG 3.3.8).
- A11Y-P1: Password requirements are a list linked by aria-describedby, with met state announced.
- A11Y-N1: Focus moves to the heading of each new screen and errors are summarised at the top and linked.
- A11Y-T1: Targets are at least 44×44px and at least 8px from screen edges.
- A11Y-W1: The 30-minute link expiry is stated in text and a new link is one tap away.
- A11Y-E1: Errors sit next to the field in text and the typed address is kept.
- A11Y-L1: Messages avoid jargon and keep sentences short for readers with dyslexia.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
