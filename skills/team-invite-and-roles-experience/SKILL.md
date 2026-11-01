---
name: team-invite-and-roles-experience
type: experience
journey: user
persona: Operations lead (45), admin for a 40-person team
domain: Workspace administration
technology: B2B web app, desktop first
core: "1.0"
description: "Experience skill: Inviting colleagues to a workspace and assigning roles — the best-practice user journey for a operations lead (45), admin for a 40-person team in Workspace administration on B2B web app, desktop first. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Inviting colleagues to a workspace and assigning roles

A workspace admin invites colleagues by email or in bulk, gives each the least access they need with roles explained in plain words, and can see and fix pending invites.

**Outcome** — Admins invite a team of ten in under five minutes, at least 85% of invites are accepted within seven days, and fewer than 5% of members need a role change in their first month.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Marcus, Operations lead (45), admin for a 40-person team

> “I need everyone in by Monday, but I don't want the interns able to delete client projects.”

Just bought seats for a new tool; has a spreadsheet of names and emails and limited time between meetings.

**Goals**
- Invite the whole team at once
- Give people the right access without reading a manual
- See who hasn't joined yet

**Pains**
- Role names that don't say what they allow
- Invites going to spam with no way to resend
- Paying for seats for people who never accepted

**Behaviours**
- Pastes lists from a spreadsheet
- Checks the bill before confirming
- Works with many tabs open and gets interrupted

**Access needs**
- ADHD — needs progress saved and clear summaries before confirming

---

## Domain — Workspace administration

- Default new members to the least-privileged role that lets them work
- Only owners and admins can invite; only owners can create other owners
- Show seat and cost impact before sending invites, including prorated charges
- Invites expire (e.g. 14 days) and can be revoked; revoked links stop working immediately
- Record every invite, role change and removal in the audit log with who and when

Vocabulary to use: `workspace`, `member`, `guest`, `role`, `seat`, `pending invite`, `audit log`

## Technology — B2B web app, desktop first

Inputs: Keyboard and mouse, Paste from spreadsheet, CSV upload

- Bulk invites up to 500 per batch
- Domain allow-list for automatic joining
- Single sign-on and directory sync may manage some members

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Members** | See current members and pending invites | `list + filters` | “38 of 40 seats used · 4 invites pending” |
| 2 | **Invite** | Add emails and choose a role | `form + chips` | “Paste emails separated by commas or new lines” |
| 3 | **Review** | Check access and cost before sending | `table + totals` | “Inviting 10 people · 8 Members, 2 Guests · adds £64 to your next bill” |
| 4 | **Sent** | Know invites went out and what happens next | `confirmation` | “10 invites sent. They expire on 8 November.” |
| 5 | **Manage** | Resend, revoke or change roles later | `detail` | “Change Priya's role to Admin?” |

### 1. Members

- Filter by role and status (active, pending, expired)
- Seat count visible at the top
- **empty:** Just you here. Invite your team to start working together.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Members heading; Tab goes to the filters, then the Invite button, then the members table, which has header cells and sortable columns.
  - Announced (A11Y-S1): The seat count “38 of 40 seats used” is read first; sorting announces the column and direction politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write seat counts and statuses in full and say what “pending” and “expired” mean.

### 2. Invite

- Paste a list; each email becomes a chip with validation
- Role picker shows what each role can and can't do
- **error:** 2 emails look wrong — fix or remove them to continue
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the email field; pasting a list turns each email into a chip, each chip has a labelled Remove button, and the role picker is a radio group.
  - Announced (A11Y-S1): The count of added emails is announced politely; each role description is linked to its option.
  - Errors (A11Y-E1): The error “2 emails look wrong” is listed above the field, linked to each invalid chip, and the pasted text and valid chips are kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Describe each role by what it can and cannot do, in short sentences, with no jargon.

### 3. Review

- Group invitees by role
- Show added cost and billing date
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Review heading; Tab goes through the grouped table, then Back to change anything, then Send invites.
  - Announced (A11Y-S1): The table is read by role group with the added cost; the total “adds £64 to your next bill” is read in full.
  - Errors (A11Y-E1): Nothing is sent until the person confirms; Back returns with every email and role kept, so the invites can be corrected before sending.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the cost and billing date in full and say how many people are in each role.

### 4. Sent

- Say when invites expire
- Offer a copyable join link for the team chat
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the “10 invites sent” heading; Tab reaches Copy join link, then Done.
  - Announced (A11Y-S1): The confirmation is announced politely, including the expiry date of 8 November.
  - Errors (A11Y-E1): No input on this step; invites can be revoked from Manage.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Write the expiry date in full and say what the person invited will see next.

### 5. Manage

- Role changes take effect immediately and are logged
- Warn before removing the last admin
- **error:** You can't remove the last admin. Make someone else an admin first.
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Manage heading; Tab goes to each member's Resend, Revoke and role controls, and a role change opens a confirm step.
  - Announced (A11Y-S1): “Change Priya's role to Admin?” is announced in a dialog; the result is announced politely and a refusal assertively.
  - Errors (A11Y-E1): The last-admin error is text beside the control, linked to it, and the role stays as it was; a role change needs a confirm step and can be changed back, and is logged.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Explain what Admin can do in one plain sentence and say that changes take effect immediately.

---

## Principles

1. Least privilege by default
2. Every role is described by what it lets people do
3. Cost is visible before commitment
4. Pending invites are visible and fixable
5. Every access change is logged

## Do / Don't

**Do**
- Show a permissions table comparing roles
- Allow bulk role changes with a review step
- Let admins copy an invite link limited to their email domain

**Don't**
- Default new people to Admin
- Charge for seats before invites are accepted without saying so
- Hide guests from the member count

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-K1: Email chips are removable by keyboard with a labelled delete button, and the whole journey works with no drag.
- A11Y-E1: Validation errors are listed above the field and linked to each invalid chip, and the pasted text is kept.
- A11Y-P1: The members table has header cells and sortable columns announce their sort state.
- A11Y-N1: The role picker is a radio group with each description linked by aria-describedby.
- A11Y-E3: Review shows access and cost before sending, and role changes need a confirm step and are logged and reversible.
- A11Y-S1: Seat counts, sort changes and sent confirmations are announced politely.
- A11Y-H1: Progress is saved at each step, and help sits in the same place on every step.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Role descriptions start with a verb: “Can create and edit projects, can't manage billing”
- Invite email names the inviter and workspace: “Marcus invited you to join Fernhill Studio”
- Plain status words: Active, Invited, Expired — no internal codes

## AI interactions

- Optional: suggest a role for each invitee based on the admin's past choices for similar job titles; the admin confirms every role before sending

## Edge cases

- Invitee already belongs to another workspace — let them join without a new account
- Email belongs to an external domain — flag as guest and ask the admin to confirm
- Members managed by directory sync — show them as read-only with where to change them
- Admin invites past the seat limit — offer to buy seats or remove pending invites, with costs shown
- Person leaves the company — removal revokes sessions and transfers their content to a chosen owner

---

## Measures

| Measure | Target | How |
|---|---|---|
| Time to invite 10 | < 5 min | Median, Members page → invites sent |
| Invite acceptance | ≥ 85% in 7 days | Accepted ÷ sent |
| Role corrections | < 5% | Members whose role changes within 30 days |
| Over-privileged accounts | < 10% admins | Admins ÷ total members, per workspace |

Research: Task-based tests with admins inviting from a real spreadsheet; Comprehension test of role descriptions (can people predict what a role allows); Audit log review with security-minded customers.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
