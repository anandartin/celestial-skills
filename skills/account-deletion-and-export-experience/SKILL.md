---
name: account-deletion-and-export-experience
type: experience
journey: customer
persona: Night-shift nurse (61), leaving a service she no longer uses
domain: Privacy rights
technology: Web app settings and account area
core: "1.0"
description: "Experience skill: Downloading your data and closing your account — the best-practice customer journey for a night-shift nurse (61), leaving a service she no longer uses in Privacy rights on Web app settings and account area. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Downloading your data and closing your account

A customer downloads a copy of their data in a readable format and closes their account, knowing exactly what is deleted, what is kept by law, and how long they have to change their mind.

**Outcome** — At least 95% of export and deletion requests complete within the legal deadline, and 90% of people say they understood what would happen before confirming.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Grace, Night-shift nurse (61), leaving a service she no longer uses

> “I want my photos back and then I want it gone. Don't make me hunt for the button or argue with me.”

Has a decade of photos and messages in the account; switching services and tidying her digital life after a data breach elsewhere.

**Goals**
- Get a complete copy of her photos and messages
- Close the account for good
- Know nothing is left that could be breached

**Pains**
- Delete options buried several menus deep
- Guilt-trip screens and repeated “are you sure?” prompts
- Exports in formats she can't open

**Behaviours**
- Does admin tasks after night shifts, when tired
- Reads the small print
- Keeps confirmation emails as proof

**Access needs**
- Tired and low on attention — needs clear, short steps
- Varifocal glasses — prefers larger text

---

## Domain — Privacy rights

- Right of access and data portability (GDPR Articles 15 and 20): provide the data in a common, machine-readable format within one month
- Right to erasure (Article 17): delete personal data unless a legal duty requires keeping some, and say which data and for how long
- Confirm identity before releasing an export or deleting; do not ask for more data than needed to confirm
- Offer a grace period (e.g. 14 days) before permanent deletion, with a one-tap cancel
- Cancel active subscriptions and explain any refund before closing the account

Vocabulary to use: `export`, `archive`, `close account`, `grace period`, `retained records`, `subscription`

## Technology — Web app settings and account area

Inputs: Mouse and keyboard, Touch, Email link

- Exports prepared asynchronously; large archives split into parts under 2 GB
- Download links expire after 7 days and require sign-in
- Deletion runs across backups within the stated period

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Privacy hub** | Find export and close options in one place | `detail` | “Download your data or close your account” |
| 2 | **Export** | Choose what to export and request it | `form + chips` | “We'll email you when your download is ready — usually within a few hours” |
| 3 | **Download** | Get the archive safely | `table + export` | “3 files ready · 4.2 GB total · available until 2 November” |
| 4 | **Close account** | Understand the consequences and confirm | `form` | “Your account will close on 8 November. Until then you can cancel by signing in.” |
| 5 | **Closed** | Have proof and a way back during the grace period | `confirmation` | “Request received · Reference DL-48213” |

### 1. Privacy hub

- Reachable from Settings in two taps
- Explain both options side by side
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the page heading; the two options are separate links or buttons in reading order, each reachable in a single Tab.
  - Announced (A11Y-S1): Announces the page title and heading, then the two options as a short list with their names and descriptions.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Describe each option in one short sentence and say 'close your account' rather than 'deactivate' or 'terminate'.

### 2. Export

- Everything selected by default; categories can be unticked
- Formats named in plain words (photos as JPG, messages as HTML and JSON)
- **error:** Something went wrong preparing part 2. We're retrying and will email you.
- **loading:** Preparing your archive…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first category checkbox; Tab and Space toggle each category, and the request button comes last in order.
  - Announced (A11Y-S1): Announces the step heading, each category as checked or not checked, and politely 'Preparing your archive' when requested; the part 2 failure is announced assertively.
  - Errors (A11Y-E1): If part 2 fails, the message sits beside the archive status in text, and the ticked categories and formats stay as chosen; no data is lost.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name formats in plain words, such as photos as JPG, and say 'a few hours' alongside the email promise.

### 3. Download

- List parts with sizes and expiry
- Require a fresh sign-in before download
- **empty:** Your archive has expired. Request a new one.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the table of parts is read by row with size and expiry, and each download button is a real link in order.
  - Announced (A11Y-S1): Announces the heading, then '3 files ready, 4.2 gigabytes total, available until 2 November' as text; the status is polite, not colour only.
  - Errors (A11Y-E1): If the archive has expired, the message and the request-a-new-one button sit together; a fresh sign-in prompt keeps the person's place and allows paste and password managers.
  - Time limits (A11Y-W1): Download links expire after 7 days; the expiry date is written in full on the page and in the email, and a new archive can be requested at any time.
  - Language (A11Y-L1): Write sizes as '4.2 gigabytes' and dates in full, such as 2 November, never only 'in 3 days'.

### 4. Close account

- List what is deleted, what is kept and why, and the grace period
- One confirmation, with password re-entry; no guilt copy
- **error:** You have an active subscription. We'll cancel it and refund £3.20 for unused days.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the heading; the consequences list is read first, then the confirm checkbox and the Close account button, with Cancel before it. Signing in to cancel works with paste, password managers and passkeys; there is no puzzle or memory test.
  - Announced (A11Y-S1): Announces the heading, then the consequences as a list, then the confirm control; the subscription message is announced politely, not as an alert.
  - Errors (A11Y-E1): The subscription notice is text above the button, naming the £3.20 refund; closing needs a separate confirm control and can be cancelled by signing in until 8 November.
  - Time limits (A11Y-W1): The 8 November closing date is written in full on the page and in the email; the grace period can be used to cancel at any time.
  - Language (A11Y-L1): Say plainly what is deleted and what is kept, and write '£3.20 refund for unused days' in full.

### 5. Closed

- Confirmation email with reference and dates
- Final notice sent when deletion completes
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the confirmation heading; the reference and a Cancel closure link follow in order.
  - Announced (A11Y-S1): Announces 'Request received' as the heading, then the reference DL-48213 as plain text that can be copied.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): The grace period ends on 8 November; the date is written in full and repeated in the confirmation email.
  - Language (A11Y-L1): Spell out the reference in groups and say how to cancel in one short sentence.

---

## Principles

1. Leaving is as easy as joining
2. Say plainly what is deleted, what is kept, and for how long
3. Offer a copy of the data before closing
4. One confirmation, no pressure tactics
5. Proof of every request, by email

## Do / Don't

**Do**
- Suggest exporting before closing, once
- Show the legal reason for any retained records
- Send a final message when deletion is complete

**Don't**
- Use confirmshaming or repeated retention offers
- Require a phone call to close an account
- Release an export without re-confirming identity

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: The close-account control is a native button reachable by keyboard and meets WCAG 2.2 AA.
- A11Y-K1: The consequence list is a semantic list that is read before the confirm button in focus order.
- A11Y-L1: Download sizes and expiry dates are written as text, not icons, with dates in full.
- A11Y-S1: Export status (preparing, ready, expired) is announced politely and is never shown by colour alone.
- A11Y-E3: Closing the account needs an explicit confirm control and can be cancelled by signing in until the stated date.
- A11Y-W1: Download and closing dates are stated in text and email; no step expires without a written date.
- A11Y-R1: At 200% zoom and 320px width the hub, table and form reflow without horizontal scrolling.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Neutral, factual tone: “Your account will close on 8 November”
- Name retained data precisely: “We keep invoices for 6 years because tax law requires it”
- Avoid euphemisms: say “delete” and “close”, not “deactivate” unless it is reversible

## AI interactions

- No AI in this journey because privacy-rights requests must be handled consistently and auditable; a person reviews any request flagged as possible account takeover

## Edge cases

- Request made from a session that may be compromised — require re-authentication and notify all contact methods
- Account holds shared content (group albums) — explain what others keep and offer to transfer ownership
- Outstanding balance or legal hold — explain what blocks deletion and what can still be removed now
- Person signs in during the grace period — ask whether to cancel the closure, never assume
- Export larger than storage on their device — split into parts and say the size up front

---

## Measures

| Measure | Target | How |
|---|---|---|
| Deadline compliance | 100% < 30 days | Request → export delivered / deletion complete |
| Comprehension | ≥ 90% | Post-task check: “What will be kept?” answered correctly |
| Export success | ≥ 95% | Archives that open without errors, sampled |
| Closure without contact | ≥ 90% | Closures completed with no support ticket |

Research: Comprehension testing of the consequences screen with tired, end-of-shift participants; Privacy and legal review of retention statements; Archive usability test: can people open and find their items in the export.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
