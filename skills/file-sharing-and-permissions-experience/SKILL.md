---
name: file-sharing-and-permissions-experience
type: experience
journey: user
persona: Project coordinator (29) at a small charity
domain: Workplace software · documents and access control
technology: Web app and mobile app
core: "1.0"
description: "Experience skill: Uploading a file and sharing it with the right access — the best-practice user journey for a project coordinator (29) at a small charity in Workplace software · documents and access control on Web app and mobile app. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Uploading a file and sharing it with the right access

A user uploads a file, chooses exactly who can view or edit it, and can see and change that access at any time.

**Outcome** — A user shares a file with the intended people at the intended access level on the first try, with zero accidental public links.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Amara, Project coordinator (29) at a small charity

> “I just need to know who can see this before I hit share.”

Shares budgets and partner documents with volunteers and outside funders; works from a shared office laptop and her phone.

**Goals**
- Share a file with the right people quickly
- Give outside partners view-only access
- Remove access when a project ends

**Pains**
- Not knowing whether a link is public
- Access settings buried in menus
- Uploads failing on slow connections without saying so

**Behaviours**
- Shares from her phone between meetings
- Copies links into email and chat
- Checks access only when something goes wrong

**Access needs**
- Dyslexia — prefers short labels and icons with text
- Uses text spacing overrides

---

## Domain — Workplace software · documents and access control

- Default to the most restrictive sensible access: people in the organisation, view only
- Public or anyone-with-the-link access needs an explicit, separate choice and a warning
- Sharing outside the organisation follows admin policy and is logged
- Owners can always see who has access and revoke it
- Files with personal data follow data minimisation (GDPR): share only with people who need them

Vocabulary to use: `owner`, `viewer`, `commenter`, `editor`, `link sharing`, `external guest`

## Technology — Web app and mobile app

Inputs: Drag and drop, File picker, Touch, Keyboard

- Resumable uploads for files up to 5 GB
- Access changes take effect within 10 seconds
- Admin policy can block external sharing

---

## Journey (6 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Upload** | Add a file and see it arrive | `progress` | “Uploading budget-2026.xlsx · 4.2 of 12 MB” |
| 2 | **Choose people** | Pick who should get access | `form + chips` | “Add people or groups” |
| 3 | **Set access** | Choose view, comment or edit | `form` | “Can view · They can open and download, not change” |
| 4 | **Review** | See exactly who will have access | `detail` | “3 people, 1 outside your organisation, can view this file” |
| 5 | **Share** | Send access and know it worked | `confirmation` | “Shared with 3 people. Link copied — only people with access can open it.” |
| 6 | **Manage** | Change or remove access later | `list + filters` | “Remove Jordan's access?” |

### 1. Upload

- Show progress per file with size and time left
- Resume after a dropped connection
- **error:** Upload paused — connection lost. We'll retry when you're back online.
- **loading:** Progress bar with percentage text

### 2. Choose people

- Type names or emails; each becomes a chip
- External emails are marked “Outside your organisation”
- **error:** “sam@” isn't a full email address

### 3. Set access

- Access level next to each person, defaulting to view
- Plain description of each level

### 4. Review

- Summary lists every person, group and link setting
- Warning shown for external or public access

### 5. Share

- Optional message to recipients
- Copy link reflects the actual access setting

### 6. Manage

- Filter by external, editors, link access
- Remove access with one action and undo
- **empty:** Only you have access to this file

---

## Principles

1. Restrictive by default; wider access is a deliberate step
2. Always show who has access in plain words before sharing
3. External and public access are visually distinct and labelled
4. Every access change is reversible by the owner
5. Upload progress is honest and survives connection drops

## Do / Don't

**Do**
- Name the consequence of each access level
- Warn before sharing outside the organisation
- Offer an expiry date for guest access

**Don't**
- Create public links by default
- Hide the access summary behind a menu
- Use icons alone to show access level

## Accessibility

- Upload progress exposed as a progressbar with text value; completion announced
- Drag and drop has a keyboard alternative: an Upload button (WCAG 2.5.7 dragging movements)
- Access level selects have visible labels and are at least 24×24 px (WCAG 2.5.8)
- External warning conveyed by text and icon, not colour alone (WCAG 1.4.1)

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Describe access by what people can do: “Can edit — they can change and delete content”
- Warnings are specific: “Anyone with the link can open this, even without an account”
- Confirmation names the count and audience: “Shared with 3 people”

## AI interactions

- Optional: suggest people who usually work on similar files, shown as suggestions the user must add; no AI decides access

## Edge cases

- Recipient has no account — invite as guest with expiry, per admin policy
- Admin policy blocks external sharing — explain and name who can approve an exception
- File contains personal data flagged by a scan — warn before external sharing
- Owner leaves the organisation — ownership transfers to a named person, not lost
- Duplicate file name in the folder — offer keep both or replace

---

## Measures

| Measure | Target | How |
|---|---|---|
| Correct first share | ≥ 95% | Shares not changed within 24 h, sampled |
| Accidental public links | 0 | Public links revoked within 1 h of creation |
| Upload completion | ≥ 99% | Started vs finished uploads, including resumes |
| Time to share | < 30 s | Median from upload done to shared |

Research: Usability tests sharing with internal and external recipients; Comprehension test of access-level labels with dyslexic users; Audit of access logs for over-sharing patterns.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
