---
name: comments-and-mentions-experience
type: experience
journey: user
persona: Design lead (36), reviews three teams' work
domain: Workplace software · collaboration
technology: Web app with mobile notifications
core: "1.0"
description: "Experience skill: Reviewing work together with comments and mentions — the best-practice user journey for a design lead (36), reviews three teams' work in Workplace software · collaboration on Web app with mobile notifications. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Reviewing work together with comments and mentions

A reviewer leaves comments anchored to the work, mentions the right people, and closes threads once each point is settled.

**Outcome** — Every review comment reaches the right person and is resolved or answered within the agreed review window.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Oluwaseun, Design lead (36), reviews three teams' work

> “I want to point at the exact thing, ask the right person, and know when it's done.”

Reviews screens, documents and specs across time zones; uses a screen magnifier at 300% after eye surgery.

**Goals**
- Comment on a precise part of the work
- Bring in the right person without a meeting
- See what's still open before sign-off

**Pains**
- Comments that lose their place when the work changes
- Notification overload from every reply
- Not knowing if feedback was acted on

**Behaviours**
- Reviews in batches twice a day
- Mentions people for decisions
- Resolves threads only after checking the change

**Access needs**
- Screen magnifier at 300%
- Prefers keyboard navigation between comments

---

## Domain — Workplace software · collaboration

- Mentions only notify people who can access the item; otherwise ask to share first
- Resolved threads stay visible in history and can be reopened
- Comment edits and deletions are recorded for the author and admins
- Users control notification frequency; mentions always notify

Vocabulary to use: `comment`, `thread`, `mention`, `resolve`, `reopen`, `anchor`

## Technology — Web app with mobile notifications

Inputs: Keyboard, Pointer, Screen magnifier, Touch

- Comments anchor to content and follow it through edits
- Real-time updates within 2 seconds
- Email and in-app notifications deduplicated

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Select** | Point at the part of the work to discuss | `detail` | “Add a comment” |
| 2 | **Write** | Write a comment and mention someone | `form` | “@Leon can we use the shorter label here?” |
| 3 | **Notify** | The mentioned person sees what's needed | `inbox` | “Oluwaseun mentioned you on “Checkout screens”” |
| 4 | **Discuss** | Reply and agree a change | `detail` | “Content changed since this comment” |
| 5 | **Resolve** | Close the thread once settled | `confirmation` | “Thread resolved · Undo” |
| 6 | **Review open** | See what's still open before sign-off | `list + filters` | “4 open threads · 2 waiting on you” |

### 1. Select

- Comment on a selection, element or region
- Keyboard command to comment on the focused item
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the item; a keyboard command comments on the focused element, and Tab then moves to the comment box. Selecting by mouse is never the only way.
  - Announced (A11Y-S1): The page title names the file; “Add a comment” is announced as a button, and the comment box is announced with its anchor, for example “Comment on Checkout label”.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use “Add a comment” consistently and avoid jargon such as “anchor”; say what will be commented on.

### 2. Write

- @ opens a people list filtered by access
- Draft is kept if the user navigates away
- **error:** Leon can't see this file. Share it with him first?
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands in the comment box; typing @ opens a people list reachable with arrow keys, Enter selects, Escape closes, and Tab reaches Post and Cancel.
  - Announced (A11Y-S1): The people list is a listbox announced politely with its result count; the mentioned name is read as a link; posting is announced as “Comment posted”.
  - Errors (A11Y-E1): The access error is written next to the box, linked to it, and offers Share first or Remove mention; the comment text typed is always kept as a draft.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write error text in plain words, such as “Leon can't see this file”, and avoid permission jargon.

### 3. Notify

- Notification shows the comment text and a link to its place
- Grouped by item, newest first
- **empty:** You're all caught up
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the inbox heading; Tab or arrow keys move through notifications, which are grouped by item, and Enter opens the linked thread.
  - Announced (A11Y-S1): Each notification reads who mentioned you, the comment text and the item; new notifications are announced politely and do not move focus.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show the comment text itself, not “You have a notification”, and write dates in full, for example “1 November”.

### 4. Discuss

- Replies stay in the thread under the anchor
- Show when the anchored content changed since the comment
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves into the thread when it opens; shortcut keys move to the next and previous comment, Tab reaches Reply, and Escape returns to the item.
  - Announced (A11Y-S1): New replies are announced politely without moving focus; the “Content changed since this comment” note is text, and each pin has a name such as “Comment 3 by Oluwaseun, open”.
  - Errors (A11Y-E1): A reply error is shown in text beside the reply box and linked to it; the draft reply is kept if the person leaves the thread.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain “content changed” in one plain sentence, naming what changed and when.

### 5. Resolve

- Resolve is one action with undo
- Resolved threads collapse but stay searchable
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus stays on the Resolve button, then moves to the Undo button in the confirmation, which stays long enough to reach by keyboard.
  - Announced (A11Y-S1): “Thread resolved” is announced politely, with Undo as a button that reverses it.
  - Errors (A11Y-E1): No input on this step; Resolve is one action that is undone with the Undo button, and resolved threads stay searchable.
  - Time limits (A11Y-W1): The Undo option stays available for at least 20 seconds, and a Resolved filter in the list restores a thread later; it is not a timed message that disappears.
  - Language (A11Y-L1): Use “Resolve” and “Undo” consistently, and say that the thread stays searchable.

### 6. Review open

- Filter by open, mine, mentioned me
- Count of open threads on the item header
- **empty:** No open threads — ready for sign-off
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the list heading; Tab goes to the filters (Open, Mine, Mentioned me) as toggle buttons, then the thread list in order.
  - Announced (A11Y-S1): The count “4 open threads, 2 waiting on you” is a polite live region that updates when a filter changes; the page title names the item.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Spell out the counts and the filter names in full; avoid abbreviations such as “thr.” or “cmts”.

---

## Principles

1. Comments stay attached to the content they describe
2. Mentions reach only people who can see the work
3. Open versus resolved is always clear and countable
4. Notifications are grouped and controllable
5. Nothing is lost: drafts and resolved threads are kept

## Do / Don't

**Do**
- Show what changed since a comment was made
- Let people mute a thread without missing mentions
- Count open threads where sign-off happens

**Don't**
- Delete resolved threads
- Notify on every reaction
- Let comment pins cover the content with no way to hide them

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: Shortcuts move to the next and previous comment, and focus moves into the thread when it opens.
- A11Y-R1: The comment panel reflows at 400% zoom and 320px width with no horizontal scrolling.
- A11Y-S1: New replies and counts are announced through a polite live region and never steal focus.
- A11Y-N1: Comment pins have accessible names such as “Comment 3 by Oluwaseun, open”, and visible text matches the name.
- A11Y-E3: Resolving a thread is one action with an Undo that stays available and is reachable by keyboard.
- A11Y-E1: The cannot-see-this-file error appears in text next to the comment box and the typed draft is kept.
- A11Y-C2: Open and resolved states are shown by text or an icon with a label, never by colour alone.

Requirements this experience layer owns: **A11Y-K1** Every action works by keyboard in a logical order; nothing is drag-only; **A11Y-N1** Every step has a clear title, headings and visible labels; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Help is in the same place on every step; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Notification copy names who, what and where: “Oluwaseun mentioned you on Checkout screens”
- Status words are consistent: open, resolved, reopened
- Error copy offers the next step: “Share it with him first?”

## AI interactions

- Optional: summarise a long thread into decisions and open questions, labelled as a summary with a link to every source comment; the reviewer resolves threads, not the AI

## Edge cases

- Anchored content deleted — keep the thread, labelled “Original content removed”
- Mentioned person has left the organisation — suggest their replacement or the item owner
- Two people resolve and reopen at once — last action wins, both shown in history
- Comment contains personal data — author can edit or delete; edits are logged

---

## Measures

| Measure | Target | How |
|---|---|---|
| Mention response time | < 1 working day | Median time from mention to reply or resolve |
| Open threads at sign-off | 0 unacknowledged | Threads open when an item is approved |
| Lost comments | < 1% | Threads with a broken anchor after edits |
| Notification mute rate | < 10% | Users muting all notifications within 30 days |

Research: Diary study of review cycles across two time zones; Usability tests with magnifier and keyboard-only reviewers; Analytics on thread lifecycle: open, reply, resolve, reopen.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
