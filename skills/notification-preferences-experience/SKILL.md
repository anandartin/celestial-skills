---
name: notification-preferences-experience
type: experience
journey: customer
persona: Delivery driver (40), shift worker on a basic phone plan
domain: Communications and consent
technology: Mobile app with matching web settings
core: "1.0"
description: "Experience skill: Choosing which alerts arrive where, with quiet hours — the best-practice customer journey for a delivery driver (40), shift worker on a basic phone plan in Communications and consent on Mobile app with matching web settings. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Choosing which alerts arrive where, with quiet hours

A customer decides which alerts they get by email, push or text, sets quiet hours for their time zone, and knows that essential security and legal messages will still reach them.

**Outcome** — At least 70% of people who open notification settings leave with a saved change, and opt-outs from all notifications fall by 30% versus a single on/off switch.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Ibrahim, Delivery driver (40), shift worker on a basic phone plan

> “I sleep in the day. I don't want offers waking me up, but I do want to know if someone pays me.”

Uses a marketplace app to sell items; works nights, sleeps mornings, pays for texts and has patchy data on the road.

**Goals**
- Stop marketing messages
- Get payment alerts at once
- Keep the phone quiet while he sleeps

**Pains**
- One switch that turns off everything, including important alerts
- Quiet hours that assume a day job
- Texts that cost him money

**Behaviours**
- Checks the app on breaks
- Uses push more than email
- Turns the phone to silent when it gets annoying

**Access needs**
- Reads English as a second language
- Low data — needs a page that loads on a weak signal

---

## Domain — Communications and consent

- Marketing messages need opt-in consent, and every one has a one-step unsubscribe (GDPR, ePrivacy and equivalent rules)
- Security and legal notices (sign-in alerts, policy changes, receipts) are not switchable but are kept to the minimum and labelled
- Text-message charges are disclosed before text alerts are enabled
- Quiet hours use the person's chosen time zone; urgent security alerts may override and say so
- Record each consent change with time and channel for audit

Vocabulary to use: `alert`, `channel`, `push`, `email`, `text message`, `quiet hours`, `essential message`

## Technology — Mobile app with matching web settings

Inputs: Touch, Screen reader, System notification permission

- Respect the operating system's notification permission; explain if it is off
- Settings sync across devices within one minute
- Page under 200 KB for weak connections

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Overview** | See what alerts exist and how they arrive | `list + filters` | “Payments · Push and email” |
| 2 | **Choose channels** | Pick push, email or text per topic | `form + chips` | “Security alerts always go to your email so you can act quickly” |
| 3 | **Quiet hours** | Set when the phone stays quiet | `form` | “Quiet from 08:00 to 16:00 (London time)” |
| 4 | **Save** | Know the changes took effect | `confirmation` | “Saved. Offers are off. Undo” |
| 5 | **Digest** | Get non-urgent alerts in a summary | `inbox` | “Your daily summary: 3 new messages, 1 price drop” |

### 1. Overview

- Group by topic: Orders, Payments, Messages, Offers, Security
- Show current channels per group in words
- **error:** Couldn't load settings. Your current choices still apply. Try again.
- **loading:** Loading your settings…

### 2. Choose channels

- Channels as labelled toggles per topic
- Essential messages shown as locked with a reason
- **error:** Push is off for this app on your phone. Turn it on in phone settings.

### 3. Quiet hours

- Any start and end time, crossing midnight allowed
- Time zone shown and changeable

### 4. Save

- Save automatically per change, with a visible confirmation
- Offer undo for five seconds
- **error:** Not saved — you're offline. We'll save when you're back online.

### 5. Digest

- Bundle low-priority alerts into one daily message
- Each digest links straight to settings
- **empty:** Nothing new today

---

## Principles

1. Fine-grained control beats a single off switch
2. Essential messages are few, labelled and explained
3. Quiet hours fit any schedule and time zone
4. Costs are disclosed before they are incurred
5. Changes save instantly and can be undone

## Do / Don't

**Do**
- Offer a one-tap “Only important alerts” preset
- Show an example of each alert type
- Link to settings from the footer of every message

**Don't**
- Hide unsubscribe behind sign-in
- Re-enable marketing after an app update
- Send texts without telling people they may be charged

## Accessibility

- Meets WCAG 2.2 AA; each toggle is a switch with a name that includes topic and channel (“Payments by push”)
- Toggle state changes announced; locked items explain why when focused
- Time pickers accept typed input as well as scroll wheels
- Targets at least 48 × 48 px on mobile with 8 px spacing

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Topic names in everyday words: “Payments” not “Transactional events”
- Locked items give a reason: “We always send this so you can stop unauthorised sign-ins”
- Confirmation is short and specific: “Saved. Offers are off.”

## AI interactions

- Optional: suggest a quiet-hours window from when the person usually ignores notifications; they accept or edit it, and no setting changes without a tap

## Edge cases

- System permission revoked — show what won't arrive and how to turn it back on, without nagging
- Person travels across time zones — ask whether quiet hours should follow the phone or stay fixed
- Urgent security alert during quiet hours — deliver it and explain the override in the message
- Unsubscribe link clicked from an old email — honour it immediately without sign-in

---

## Measures

| Measure | Target | How |
|---|---|---|
| Saved change rate | ≥ 70% | Sessions in settings with one or more saved change |
| Full opt-outs | −30% | Accounts turning off all optional alerts vs baseline |
| Marketing complaints | < 0.1% | Spam reports ÷ marketing sends |
| Quiet-hours adoption | ≥ 25% | Active accounts with quiet hours set |

Research: Diary study with shift workers over two weeks; Usability test of settings on low-end phones with a throttled connection; Consent record audit against legal requirements.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
