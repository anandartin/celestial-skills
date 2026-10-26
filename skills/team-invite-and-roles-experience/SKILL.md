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

### 2. Invite

- Paste a list; each email becomes a chip with validation
- Role picker shows what each role can and can't do
- **error:** 2 emails look wrong — fix or remove them to continue

### 3. Review

- Group invitees by role
- Show added cost and billing date

### 4. Sent

- Say when invites expire
- Offer a copyable join link for the team chat

### 5. Manage

- Role changes take effect immediately and are logged
- Warn before removing the last admin
- **error:** You can't remove the last admin. Make someone else an admin first.

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

## Accessibility

- Meets WCAG 2.2 AA; email chips are removable by keyboard with a labelled delete button
- Validation errors listed above the field and linked to each invalid chip
- Members table has proper header cells and sortable columns announce sort state
- Role picker is a radio group with each description linked via aria-describedby

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
