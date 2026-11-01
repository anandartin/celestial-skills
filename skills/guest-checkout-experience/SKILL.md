---
name: guest-checkout-experience
type: experience
journey: customer
persona: Guest shopper (29), buying a gift
domain: Payments and e-commerce
technology: Responsive web
core: "1.0"
description: "Experience skill: Checking out as a guest on the web with address lookup and secure payment — the best-practice customer journey for a guest shopper (29), buying a gift in Payments and e-commerce on Responsive web. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Checking out as a guest on the web with address lookup and secure payment

A shopper pays without creating an account, with an address lookup, clear totals and strong customer authentication that does not lose their basket.

**Outcome** — At least 75% of guests who start checkout complete payment, in under four minutes, with no account required.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Lucía, Guest shopper (29), buying a gift

> “I’ll probably never shop here again. Just take the payment and send it.”

Blind since birth; shops on a laptop with a screen reader and keyboard only.

**Goals**
- Pay without making an account
- Send to a different address from her own
- Know the order went through

**Pains**
- Address lookups that cannot be used with a keyboard
- Payment pop-ups that trap focus or time out
- Forced sign-up before payment

**Behaviours**
- Navigates by headings and form fields
- Uses browser autofill
- Reads the order summary line by line before paying

**Access needs**
- Screen reader user, keyboard only
- Needs every error tied to its field

---

## Domain — Payments and e-commerce

- Card data is captured in a PCI DSS compliant hosted field; the merchant never stores the full card number or security code
- Strong customer authentication (PSD2 SCA) is completed in a way that returns the shopper to the same checkout with the basket intact
- The final button states the obligation to pay, e.g. “Pay £54.98” (EU Consumer Rights Directive)
- Marketing consent is opt-in, unticked, and separate from the order; guests are not required to create an account
- Only data needed to fulfil the order is collected (GDPR data minimisation)

Vocabulary to use: `guest checkout`, `billing address`, `delivery address`, `authentication`, `order confirmation`, `order number`

## Technology — Responsive web

Inputs: Keyboard, Screen reader, Browser autofill, Digital wallet

- Hosted payment fields in an iframe with an accessible name
- Address lookup with a manual-entry fallback that is always available
- Session kept for at least 30 minutes; basket survives a bank authentication redirect

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Start** | Choose guest checkout without friction | `auth card` | “Continue as guest” |
| 2 | **Contact** | Give an email for the receipt and updates | `form` | “Email for your receipt” |
| 3 | **Address** | Find a delivery address quickly or type it | `form` | “Start typing a postcode or address” |
| 4 | **Review** | Check items, delivery and total | `table + totals` | “Total to pay £54.98 · includes £4.99 delivery” |
| 5 | **Pay** | Pay by card or wallet and pass bank authentication | `form` | “Pay £54.98” |
| 6 | **Confirm** | Know it is ordered and what happens next | `confirmation` | “Order RS-48213 confirmed. Receipt sent to your email.” |

### 1. Start

- Guest is a primary option, equal to sign in
- Explain an account can be made after the order, optionally
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the checkout heading; Tab goes to Continue as guest and Sign in, which are equal options, in visual order. Sign in, if chosen, accepts paste, password managers and passkeys, with no puzzle or memory test.
  - Announced (A11Y-S1): Title reads “Checkout”; both options are buttons with clear names, and the note that an account can be made later is read after them.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit; the basket is kept for at least 30 minutes and the person is warned before it expires.
  - Language (A11Y-L1): Say “guest” and “account” plainly, and explain that an account is optional and offered after the order.

### 2. Contact

- Ask only email and, if the carrier needs it, phone
- Marketing opt-in unticked and below the field
- **error:** Enter an email address in the format name@example.com
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Email field; Tab goes to optional phone, then the unticked marketing box, then Continue. Autofill (email) and paste work.
  - Announced (A11Y-S1): The field has a visible label “Email for your receipt”; a bad format is announced assertively on submit.
  - Errors (A11Y-E1): The error “Enter an email address in the format name@example.com” is beside the field, linked to it and listed in a summary; the email typed is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Say why the email is needed in one sentence, and keep the marketing option separate and unticked.

### 3. Address

- Lookup results reachable by arrow keys
- “Enter address manually” always visible
- **empty:** No addresses found for “ZZ1 9QQ”. Enter it manually.
- **loading:** Searching addresses… announced once
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the address search field; arrow keys move through lookup results, Enter chooses one, Escape closes, and a visible Enter address manually link is always reachable.
  - Announced (A11Y-S1): The search field is a combobox; “Searching addresses” is announced once politely, and the result count is announced when results arrive.
  - Errors (A11Y-E1): The empty-result message “No addresses found” is text beside the field, offers the manual link, and the postcode typed is kept; field errors are listed in a summary.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show the postcode example in full and say “Enter address manually” rather than “Use fallback”.

### 4. Review

- Every line, fee and tax itemised
- Edit links next to each section
- **error:** The price of one item changed. New total £56.98 — please review.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Review heading; Tab goes through the Edit link for each section, then to Continue to payment.
  - Announced (A11Y-S1): The table has header cells; the total “£54.98 including £4.99 delivery” is read in full, and a price change is announced politely.
  - Errors (A11Y-E1): The price-change message is text next to the changed line, with the new total and a way to accept or edit; this review is the check before any payment is taken.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write every price in full with the pound sign, itemise fees in words, and say what changed and by how much.

### 5. Pay

- Button names the amount
- Authentication failures return to this step with details kept
- **error:** Your bank declined the payment. No money was taken. Try another card.
- **loading:** Waiting for your bank — don’t close this page
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Pay heading; Tab goes to the hosted payment frame (with a title), then the pay button naming the amount. Autofill and paste work in the card fields, and focus is not trapped.
  - Announced (A11Y-S1): “Waiting for your bank” is announced politely and a decline is announced assertively; after bank authentication focus returns to the pay button.
  - Errors (A11Y-E1): A decline message is shown in text beside the payment fields stating that no money was taken, and all earlier details are kept; billing same as delivery is a checkbox, so nothing is asked twice.
  - Time limits (A11Y-W1): No time limit; the basket survives the bank redirect and the session is kept for at least 30 minutes, with a warning before it ends and a way to extend.
  - Language (A11Y-L1): Say “Your bank declined the payment” and “No money was taken” in plain words and avoid error codes.

### 6. Confirm

- Order number, delivery date and address in large text
- Offer to save details as an account, optional and after the fact
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the Order confirmed heading; Tab reaches the optional Save my details option and Done.
  - Announced (A11Y-S1): The confirmation is announced politely with the order number and that a receipt was sent to the email address.
  - Errors (A11Y-E1): The optional account setup is a separate form with its own errors beside fields; nothing is required, and the details already given are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show the order number, delivery date and address in full text, and offer an account as optional and after the order.

---

## Principles

1. No account required to buy
2. Ask only what is needed to deliver and charge
3. One clear total before the pay button
4. Never lose the basket or typed details on error or redirect
5. Say plainly whether money was taken

## Do / Don't

**Do**
- Support autofill with correct autocomplete attributes
- Offer a manual address route alongside lookup
- State the amount on the pay button

**Don't**
- Force account creation before payment
- Pre-tick marketing consent
- Clear the form after a payment decline

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-N1: Every field has a visible label and the correct autocomplete token, for example email, postal-code and street-address.
- A11Y-E1: Errors are listed in a summary at the top that links to each field, and are also shown beside each field; they are announced on submit.
- A11Y-K1: The payment frame has a title, does not trap focus, and authentication returns focus to the pay button.
- A11Y-E2: Billing same as delivery is a checkbox, and information entered earlier is not asked for again.
- A11Y-E3: A Review step shows every line, fee and total before payment, and each section has an Edit link.
- A11Y-W1: The session lasts at least 30 minutes, the basket survives the bank redirect, and a warning with an extend option appears at least 20 seconds before it ends.
- A11Y-S1: Searching, price changes and payment status are announced politely, and failures assertively.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Decline copy says what happened and what to do: “Your bank declined the payment. No money was taken.”
- Field hints in plain words: “We’ll only call if there’s a delivery problem”
- Confirmation leads with the result: “Order confirmed” before any upsell

## AI interactions

- No AI in payment or address steps because errors here cost money and trust; standard validation and lookup only

## Edge cases

- Bank authentication times out — return to Pay with the basket and details intact, no charge made
- Double submission — idempotency key ensures one charge; show the existing order
- Address abroad or not in the lookup database — manual entry with country-appropriate fields
- Guest email already has an account — allow guest checkout anyway; mention sign-in once, not as a block
- Payment taken but confirmation page fails to load — email the receipt and show the order on reload

---

## Measures

| Measure | Target | How |
|---|---|---|
| Checkout completion | ≥ 75% | Guest checkout started → payment confirmed |
| Time to pay | < 4 min | Median, start to confirmation |
| Authentication drop-off | < 5% | Sessions abandoned during bank authentication |
| Screen reader completion | 100% | Tasks completed in accessibility test rounds |

Research: Moderated tests with screen reader and keyboard-only users; Funnel analysis by step and payment method; PCI DSS and SCA flow review with the payment provider.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
