---
name: two-factor-setup-experience
type: experience
journey: customer
persona: Freelance translator (38), blind, uses a screen reader
domain: Account security
technology: Web app settings, desktop and mobile
core: "1.0"
description: "Experience skill: Turning on two-step verification and saving recovery codes — the best-practice customer journey for a freelance translator (38), blind, uses a screen reader in Account security on Web app settings, desktop and mobile. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Turning on two-step verification and saving recovery codes

A customer adds a second step to sign-in using an authenticator app, a security key or text message, saves recovery codes and confirms everything works before leaving.

**Outcome** — At least 80% of people who start set-up finish with a tested second factor and saved recovery codes, and lockouts after set-up stay under 1%.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Anouk, Freelance translator (38), blind, uses a screen reader

> “Security matters to me, but half these screens assume I can scan a QR code.”

Handles client payments through her account; uses a laptop with a screen reader and a phone with voice output.

**Goals**
- Protect the account that receives her income
- Set it up without sighted help
- Know exactly what to do if she loses her phone

**Pains**
- QR codes with no text alternative
- Codes that expire while the screen reader is still reading
- Recovery codes shown as an image

**Behaviours**
- Navigates by headings and form fields
- Copies text into a password manager
- Tests things twice before trusting them

**Access needs**
- Blind — screen reader on desktop and phone
- Needs no fixed time limits

---

## Domain — Account security

- Require the current password or a recent sign-in before changing security settings
- Do not turn on two-step verification until the person has entered a working code
- Show recovery codes once, as text, and store only hashed copies
- Text-message codes are offered as a fallback, with a note that app or key methods are stronger
- Email a notice whenever a second factor is added, removed or recovery codes are regenerated

Vocabulary to use: `two-step verification`, `authenticator app`, `security key`, `recovery codes`, `setup key`, `trusted device`

## Technology — Web app settings, desktop and mobile

Inputs: Keyboard and screen reader, Authenticator app, Hardware security key, Text message

- Setup key offered as copyable text beside every QR code
- Time-based codes accept one step of clock drift
- Recovery codes downloadable as a .txt file

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Choose method** | Pick the second step that suits them | `form + chips` | “How would you like to confirm it's you?” |
| 2 | **Connect** | Link the app or key to the account | `form` | “Can't scan? Copy this setup key into your app instead” |
| 3 | **Test** | Prove it works with one code | `form` | “Enter the 6-digit code from your app” |
| 4 | **Save codes** | Store recovery codes somewhere safe | `detail` | “Save these 10 recovery codes. Each one works once.” |
| 5 | **Done** | Know it is on and what happens next | `confirmation` | “Two-step verification is on” |

### 1. Choose method

- Explain each method in one line
- Recommend app or key; text message labelled as fallback
- **error:** Please sign in again to change security settings
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the method options are a radio group and Continue follows; a fresh sign-in allows paste and password managers, with a passkey offered, and no memory or puzzle test.
  - Announced (A11Y-S1): Announces the page title and heading, then each method; the sign-in-again message is announced assertively.
  - Errors (A11Y-E1): The sign-in message sits beside the heading with a Sign in link; the chosen method is kept and returns after sign-in.
  - Time limits (A11Y-W1): No time limit; the setup stays open until finished.
  - Language (A11Y-L1): Say 'second step' and 'security key' in plain words and avoid 'TOTP'.

### 2. Connect

- Setup key shown as text with a copy button
- No countdown on this screen
- **loading:** Waiting for your security key…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the setup key; the key has a Copy button and is read in groups of four, with a QR code alternative.
  - Announced (A11Y-S1): Announces the QR alt text pointing to the setup key, the key in groups, and politely 'Waiting for your security key'.
  - Errors (A11Y-E1): Setup problems are stated in text beside the key; the key stays visible and copyable.
  - Time limits (A11Y-W1): No time limit while waiting for the key.
  - Language (A11Y-L1): Explain 'setup key' in one sentence and spell out groups of four characters.

### 3. Test

- Accept the current and previous code
- Do not enable until this succeeds
- **error:** That code didn't match. Check your app's clock and try the newest code.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the code field; paste and autofill with autocomplete='one-time-code' work, and Enter submits; no puzzle or memory test.
  - Announced (A11Y-S1): Announces the label 'Code from your app'; the mismatch error is assertive and read with the field.
  - Errors (A11Y-E1): The mismatch message sits beside the field, linked to it, suggests checking the clock, and keeps what was typed.
  - Time limits (A11Y-W1): No time limit; codes accept one step of clock drift, and the newest one can be entered at any time.
  - Language (A11Y-L1): Say '6-digit code' and keep instructions to one short sentence.

### 4. Save codes

- Codes as selectable text, grouped for reading
- Copy, download and print options
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; recovery codes are a list with one code per item and Copy and Download buttons.
  - Announced (A11Y-S1): Announces the heading, each code as a list item, and 'Copied' politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'recovery codes' and 'each works once' and read codes in groups.

### 5. Done

- Summarise methods and how to change them
- Say a notice email was sent
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; the Done button is next.
  - Announced (A11Y-S1): Announces 'Two-step verification is on' politely, then what happens next.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say 'what happens next' in short steps.

---

## Principles

1. Never switch it on until a working code has been entered
2. Every visual element (QR code) has a text equivalent
3. No time pressure during set-up
4. Recovery is planned before the person leaves
5. Security changes are always notified

## Do / Don't

**Do**
- Encourage adding a second method as backup
- Let people confirm they saved codes before finishing
- Offer to remember a trusted device for 30 days

**Don't**
- Show recovery codes as an image
- Force text message as the only option
- Enable the factor before it has been tested

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-A1: Sign-in and code fields allow paste, password managers and autofill, with no memory test (WCAG 3.3.8).
- A11Y-W1: There are no fixed time limits during setup (WCAG 2.2.1).
- A11Y-N1: The QR code has alt text pointing to the setup key, and the key is read in groups of four characters.
- A11Y-P1: Recovery codes are a list with each code as its own item, and the copy confirmation is announced.
- A11Y-K1: Focus order is method, instructions, setup key, code field, continue.
- A11Y-E1: A wrong code is explained in text next to the field and the typed code is kept.
- A11Y-E3: Setup can be reviewed and two-step verification can be turned off in settings.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Use “two-step verification” consistently; avoid “2FA” and “MFA” in the interface
- Say why: “This stops someone signing in with only your password”
- Be exact about recovery codes: “Each code works once. Keep them somewhere other than this phone.”

## AI interactions

- No AI in this journey because security set-up must be predictable and identical for everyone

## Edge cases

- Phone clock out of sync — accept one step of drift and explain how to fix the clock
- Person closes the page before saving codes — keep the factor off and resume where they left off
- Phone lost later — recovery codes or backup method sign them in; otherwise route to assisted recovery with a waiting period
- Number recycled by the carrier — prompt periodic review of the text-message number and prefer app or key

---

## Measures

| Measure | Target | How |
|---|---|---|
| Set-up completion | ≥ 80% | Start → tested factor + codes saved |
| Screen reader completion | ≥ 80% | Same measure in moderated sessions |
| Post-set-up lockouts | < 1% | Accounts needing assisted recovery within 90 days |
| Stronger method share | ≥ 70% | App or key vs text message among new set-ups |

Research: Moderated sessions with screen reader users on desktop and mobile; Lockout analysis of support tickets after set-up; Card sort on method names and descriptions.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
