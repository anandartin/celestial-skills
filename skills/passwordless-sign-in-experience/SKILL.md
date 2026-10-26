---
name: passwordless-sign-in-experience
type: experience
journey: customer
persona: Retired teacher (72), signs in on a tablet and a laptop
domain: Authentication
technology: Web app on desktop, tablet and phone
core: "1.0"
description: "Experience skill: Signing in with a passkey or one-time link, with a fallback — the best-practice customer journey for a retired teacher (72), signs in on a tablet and a laptop in Authentication on Web app on desktop, tablet and phone. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Signing in with a passkey or one-time link, with a fallback

A returning customer signs in with a passkey on their device or a one-time email link, and always has a clear fallback when the first method is not available.

**Outcome** — At least 90% of sign-in attempts succeed on the first method chosen, and nobody is left without a working way back in.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Kenji, Retired teacher (72), signs in on a tablet and a laptop

> “I don't want to remember another password, but I also need to know how to get in if the tablet isn't with me.”

Uses a tablet at home and a library computer when travelling; was shown passkeys by his granddaughter but isn't sure what they are.

**Goals**
- Sign in without typing a password
- Use a borrowed computer safely
- Understand what a passkey is in plain words

**Pains**
- System prompts that appear with no explanation
- Links that expire before he finds the email
- Being locked out when away from his own devices

**Behaviours**
- Reads instructions fully before tapping
- Uses large text on the tablet
- Writes down steps he wants to repeat

**Access needs**
- Large text (175%)
- Mild hearing loss — relies on visual confirmation

---

## Domain — Authentication

- Passkeys follow the WebAuthn standard; the private key never leaves the person's device
- One-time links are single-use, expire in 15 minutes and are bound to the requesting browser where possible
- Every account keeps at least one working recovery method before a method can be removed
- Messages never confirm whether an email has an account; the screen reads the same either way
- Sign-ins from a new device trigger a notice to the account owner

Vocabulary to use: `passkey`, `one-time link`, `device`, `fallback`, `trusted device`, `sign-in notice`

## Technology — Web app on desktop, tablet and phone

Inputs: Device unlock (fingerprint, face, PIN), Email link, Keyboard and screen reader

- Detect passkey support before offering it
- Works on shared computers without saving credentials
- Email link opens correctly in in-app browsers

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Identify** | Enter an email or pick a passkey suggestion | `auth card` | “Enter your email to sign in” |
| 2 | **Choose method** | Pick the way to sign in that works here | `form + chips` | “Use the passkey on this device” |
| 3 | **Confirm** | Complete the device prompt or open the link | `progress` | “Your device will ask for your fingerprint, face or PIN” |
| 4 | **Signed in** | Arrive where they meant to go | `confirmation` | “You're signed in” |
| 5 | **Add passkey** | Optionally save a passkey for next time | `onboarding` | “Sign in faster next time with a passkey on this tablet” |

### 1. Identify

- Field supports passkey autofill (conditional UI)
- Same screen for known and unknown emails
- **error:** Explain the format issue without clearing the field

### 2. Choose method

- Recommend a passkey when the device supports one
- Always show “Email me a link instead”
- **empty:** No passkey on this device — offer the email link first

### 3. Confirm

- Explain the system prompt before it appears
- Keep the waiting screen open with a resend option
- **error:** That didn't work. Try again or use an email link.
- **loading:** Waiting for your device…

### 4. Signed in

- Return to the deep link they started from
- On a shared computer, offer “Don't stay signed in”

### 5. Add passkey

- Offer once after a link sign-in, never block
- Explain where the passkey is stored
- **error:** We couldn't save the passkey. You can try again from Settings.

---

## Principles

1. Explain any system prompt in plain words before it appears
2. Always offer a second way in on the same screen
3. Never reveal whether an account exists
4. Treat shared and borrowed devices as a first-class case
5. Recovery methods can never drop to zero

## Do / Don't

**Do**
- Offer a passkey after a successful link sign-in
- Show the device and time on every sign-in notice
- Let people name and remove their passkeys in settings

**Don't**
- Use the word “WebAuthn” or “credential” in the interface
- Auto-save a passkey on a device the person said is shared
- Expire a link silently — always say what to do next

## Accessibility

- Meets WCAG 2.2 AA, including 3.3.8 Accessible Authentication: no memory or transcription test is required
- Status changes (“Waiting for your device”) are announced via a polite live region
- Method choices are radio buttons in a fieldset with a visible legend
- Text and layout hold at 200% zoom and 320px width with no horizontal scroll

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Describe the action, not the technology: “Use your fingerprint, face or PIN”
- Link emails state the expiry: “This link works once, for 15 minutes”
- Fallback copy is equal in tone, not a lesser option: “Email me a link instead”

## AI interactions

- Optional: risk scoring flags an unusual sign-in for a step-up check; a person reviews any account lock, and the customer is told why and how to resolve it

## Edge cases

- Link opened in a different browser — sign in there and show a notice in the original tab
- Passkey lost with a device — fall back to email link and prompt to remove the old passkey
- Email account itself compromised — offer recovery via a second factor or support with identity checks
- Shared family tablet — do not offer passkey creation when “shared device” was chosen

---

## Measures

| Measure | Target | How |
|---|---|---|
| First-method success | ≥ 90% | Sign-ins that succeed without switching method |
| Passkey adoption | ≥ 40% in 6 months | Active accounts with one or more passkeys |
| Time to sign in | < 20 s | Median, passkey route |
| Lockout contacts | −50% | Support tickets tagged sign-in vs password baseline |

Research: Usability sessions with 65+ participants using their own devices; Shared-computer scenario testing in a library-style setup; Security review of link binding, expiry and enumeration resistance.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
