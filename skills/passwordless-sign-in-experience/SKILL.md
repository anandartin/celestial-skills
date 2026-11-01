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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the email field, which supports passkey autofill; Tab then reaches Continue. Pasting, password managers and autofill work, and there is no puzzle or memory test.
  - Announced (A11Y-S1): Title reads “Sign in”; the label “Enter your email to sign in” is read with the field, and a passkey suggestion is announced politely.
  - Errors (A11Y-E1): The format error is in text beside the field, linked to it, and the email typed is never cleared.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say “passkey” with a short explanation such as “sign in with your fingerprint, face or PIN”, and avoid “credential”.

### 2. Choose method

- Recommend a passkey when the device supports one
- Always show “Email me a link instead”
- **empty:** No passkey on this device — offer the email link first
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Choose a method legend; the methods are radio buttons in a fieldset and arrow keys move between them, with Email me a link instead always shown.
  - Announced (A11Y-S1): The legend is read with each option; the recommended method is named in text, not only by position or colour.
  - Errors (A11Y-E1): If no passkey is found, the message is text beside the options, with the email link offered first; the email is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain each method in one short phrase and keep the email link visible beside the passkey option.

### 3. Confirm

- Explain the system prompt before it appears
- Keep the waiting screen open with a resend option
- **error:** That didn't work. Try again or use an email link.
- **loading:** Waiting for your device…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the waiting heading; Tab reaches Resend and Use an email link. Pasting a code or opening the link works, and there is no puzzle, code to retype by memory or other cognitive test.
  - Announced (A11Y-S1): “Waiting for your device” is announced politely, and a visual message confirms status for people with hearing loss; failures are announced assertively.
  - Errors (A11Y-E1): “That didn't work” is text beside the Try again button, and the email is kept; the person can switch method without starting again.
  - Time limits (A11Y-W1): The email link expires; the expiry time is stated in text, and a new link can be sent at any time, with no countdown needed.
  - Language (A11Y-L1): Explain the device prompt before it appears, using “fingerprint, face or PIN”, and avoid “authenticator” and “biometric”.

### 4. Signed in

- Return to the deep link they started from
- On a shared computer, offer “Don't stay signed in”
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the You're signed in heading; Tab reaches Continue, then the Don't stay signed in option on shared computers.
  - Announced (A11Y-S1): “You're signed in” is announced politely, with a visible message as well as any sound, for people with hearing loss.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say where the person is going next in one sentence and explain “Don't stay signed in” as for shared computers.

### 5. Add passkey

- Offer once after a link sign-in, never block
- Explain where the passkey is stored
- **error:** We couldn't save the passkey. You can try again from Settings.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Add a passkey heading; Tab reaches Add passkey, then Not now, and the offer never blocks.
  - Announced (A11Y-S1): The offer is read with where the passkey is stored; the result is announced politely.
  - Errors (A11Y-E1): The save failure is text beside the button, with a note that it can be retried from Settings; nothing the person did is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say where the passkey is stored in plain words and that it is optional.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-A1: No step requires a memory or transcription test; pasting, password managers and autofill work, and a passkey or email link is always offered.
- A11Y-S1: Status changes such as “Waiting for your device” are announced through a polite live region, and failures assertively.
- A11Y-P1: Method choices are radio buttons in a fieldset with a visible legend.
- A11Y-R1: Text and layout hold at 175% text, 200% zoom and 320px width with no horizontal scroll.
- A11Y-C2: Waiting, success and failure are shown by text and an icon, not colour or sound alone, for people with hearing loss.
- A11Y-E1: Errors are named in text beside the field and the email typed is never cleared.
- A11Y-W1: Link and code expiry are stated in text, and a new link or code can be requested at any time.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

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
