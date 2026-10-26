---
name: workspace-setup-experience
type: experience
journey: user
persona: Small-business owner (34), setting up a tool for her bakery's staff
domain: B2B onboarding
technology: B2B web app, desktop and tablet
core: "1.0"
description: "Experience skill: Setting up a new business workspace to first value — the best-practice user journey for a small-business owner (34), setting up a tool for her bakery's staff in B2B onboarding on B2B web app, desktop and tablet. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Setting up a new business workspace to first value

The first person in a new business workspace names it, brings in one real piece of work and one colleague, and reaches a useful result in the first session instead of a blank screen.

**Outcome** — At least 60% of new workspaces reach the first-value event (one real item shared with one colleague) within 24 hours of creation.

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.0 components and patterns, and let the active design skill render them.

---

## Persona — Javier, Small-business owner (34), setting up a tool for her bakery's staff

> “I've got twenty minutes before the morning rush. Show me it works with my actual rota, not a demo.”

Runs two bakery sites with nine staff; evaluating a scheduling and task tool on a trial, mostly from a laptop in the back office.

**Goals**
- See her own data working in the tool quickly
- Get one manager to try it with her
- Decide within the trial whether to pay

**Pains**
- Long setup wizards asking for things she doesn't know yet
- Empty dashboards with no next step
- Sample data she has to clean out later

**Behaviours**
- Skips video tours
- Imports from spreadsheets
- Comes back in short bursts

**Access needs**
- English is her second language — prefers short, literal sentences

---

## Domain — B2B onboarding

- Ask only for details needed now; defer billing and company details until they unlock something
- Imported files are processed in the workspace's data region and can be deleted in one step
- Trial length, end date and what happens at the end are shown in the workspace, not only in email
- Sample content, if offered, is clearly labelled and removed in one action

Vocabulary to use: `workspace`, `trial`, `import`, `template`, `first project`, `invite`

## Technology — B2B web app, desktop and tablet

Inputs: Keyboard and mouse, CSV or spreadsheet upload, Paste

- Setup state saved after every step so people can leave and return
- Imports up to 5,000 rows with a preview before commit
- Works on a tablet in landscape

---

## Journey (5 steps)

| # | Step | Goal | Compose with | Copy |
|---|---|---|---|---|
| 1 | **Name it** | Create the workspace with a name and purpose | `onboarding` | “What will your team use this for?” |
| 2 | **Bring work in** | Import or start from a template | `form + chips` | “Upload your rota spreadsheet, or start from a template” |
| 3 | **First result** | See their own data working | `dashboard · empty state` | “Your rota for this week is ready. Share it with a manager?” |
| 4 | **Invite one** | Bring in one colleague to try it | `form` | “Invite one person to try this with you” |
| 5 | **Checklist** | See progress and what's left, at their own pace | `progress` | “2 of 4 done · Next: set opening hours” |

### 1. Name it

- Two questions at most: name and what it's for
- Purpose choice tailors templates, can be changed later
- **error:** That workspace address is taken — here are two close options

### 2. Bring work in

- Import first, template second, blank last
- Preview the first rows and map columns before importing
- **error:** Row 14 has no date. Skip it or fix it and upload again.
- **loading:** Reading your file…

### 3. First result

- Land on the imported item, not a generic home
- One highlighted next action
- **empty:** Nothing imported yet — try a template with your own team names

### 4. Invite one

- Ask for one email, not a team list
- Show what the colleague will see

### 5. Checklist

- Three to five items, each with a reason
- Dismissible and never blocking

---

## Principles

1. Real data before configuration
2. Ask for information only when it unlocks something
3. Every screen has one clear next action
4. Progress is saved; leaving is safe
5. Sample content is labelled and removable

## Do / Don't

**Do**
- Offer import as the first path
- Show the trial end date in the workspace header
- Let people skip any step and return to it from the checklist

**Don't**
- Ask for card details before first value
- Land people on an empty dashboard
- Mix sample data with real data without labels

## Accessibility

- Meets WCAG 2.2 AA; file upload is a native input with a visible label and drag-and-drop as an extra
- Column-mapping table works with keyboard only; each select has a label naming the source column
- Checklist progress is text (“2 of 4 done”) as well as a bar, and updates are announced
- Focus moves to the main heading after each step; no step relies on hover

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Short, literal sentences for second-language readers: “Upload your rota” not “Get your rota on board”
- Explain why you're asking: “We use your opening hours to stop shifts being booked when you're closed”
- Name the next action as a verb: “Share with a manager”

## AI interactions

- Optional: map spreadsheet columns to fields automatically; the person sees the proposed mapping and confirms or corrects it before import
- Optional: suggest a template from the stated purpose; never auto-create content without a click

## Edge cases

- Spreadsheet has merged cells or several tabs — ask which tab and flatten with a preview
- Person creates a second workspace by mistake — detect same email domain and offer to join the existing one
- Trial ends mid-setup — keep the data read-only for 30 days and say so
- Owner leaves before inviting anyone — remind once by email after 2 days, then stop

---

## Measures

| Measure | Target | How |
|---|---|---|
| First-value rate | ≥ 60% in 24 h | Workspaces with one real item shared with one colleague |
| Time to first value | < 15 min | Median, workspace created → first item shared |
| Import success | ≥ 90% | Imports committed without error after preview |
| Trial to paid | +15% | vs previous onboarding, cohort comparison |

Research: Observed first sessions with small-business owners using their own spreadsheets; Funnel analysis of the setup checklist by step; Interviews with trial users who did not convert.

---

When building this journey: follow the steps in order, compose each screen from core components and patterns only, keep the persona's access needs and the domain rules non-negotiable, and take every visual value from the active design skill.

## Using this journey in other outputs
- **Deck or readout**: one slide for the persona (name, role, quote, goals, pains), one per step (goal, screen, the principle that matters most, its error state), then measures with targets. 16:9.
- **Spec or document**: a section per step with goal, screen composition, copy, states and acceptance criteria; principles and accessibility rules as a checklist at the end.
- **Look and feel**: this skill is brand-agnostic. If a design skill is named or installed (e.g. "in Mars"), take every colour, font and shape from it; otherwise use plain neutral styling and say which design skill would apply.
