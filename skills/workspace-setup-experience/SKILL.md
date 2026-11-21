---
name: workspace-setup-experience
type: experience
journey: user
persona: Small-business owner (34), setting up a tool for her bakery's staff
domain: B2B onboarding
technology: B2B web app, desktop and tablet
core: "1.3"
description: "Experience skill: Setting up a new business workspace to first value — the best-practice user journey for a small-business owner (34), setting up a tool for her bakery's staff in B2B onboarding on B2B web app, desktop and tablet. Use when designing, building, reviewing or writing copy for any step of this journey. Brand-agnostic: pair with any Celestial design skill for the look. Also use it for decks, research readouts, specs and documents about this journey. Outputs: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Setting up a new business workspace to first value

The first person in a new business workspace names it, brings in one real piece of work and one colleague, and reaches a useful result in the first session instead of a blank screen.

**Outcome** — At least 60% of new workspaces reach the first-value event (one real item shared with one colleague) within 24 hours of creation.

**Agent and system (HAI).** If the product has an AI assistant or agent, build every step marked "Agent and system (HAI)" exactly as recorded — mode, trigger, goal, actions, failure response and handover; no step runs above Advisory — and open the HAI skill (`hai-experience`, Human-Centred Agentic Intelligence) for the full rules. The AI always calls itself an "AI assistant" or "AI agent", never just "agent".

This skill says *what happens and in what order*. It never specifies colour, type or spacing: describe screens as compositions of Celestial core v1.3 components and patterns, and let the active design skill render them.

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
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the first question heading; Tab goes to the name field, then the purpose choices, then Continue.
  - Announced (A11Y-S1): Title reads “Name your workspace”; the question is read with the field, and the progress is announced politely.
  - Errors (A11Y-E1): The taken-address error is text beside the field, linked to it, with two options offered, and the name typed is kept.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use short, literal sentences, and explain “workspace address” in one line.

### 2. Bring work in

- Import first, template second, blank last
- Preview the first rows and map columns before importing
- **error:** Row 14 has no date. Skip it or fix it and upload again.
- **loading:** Reading your file…
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the upload heading; a native file input with a visible label is the way to import, drag and drop is extra, and Tab goes to the column-mapping selects, each labelled with its source column.
  - Announced (A11Y-S1): “Reading your file” is announced politely, then the row count; the preview table has header cells.
  - Errors (A11Y-E1): The error “Row 14 has no date” is text beside that row, linked from a summary with Skip and Fix options; the file and mapping are kept, and nothing is imported until the preview is confirmed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Name the row and what is missing in plain words, and explain “map columns” in one line.
- **Agent and system (HAI):**
  - Agent mode: Advisory
  - Trigger / cue: The person uploads a spreadsheet, or chooses to start from a template.
  - Agent goal: Get the person's real rota into the workspace correctly first time.
  - Agent actions: Says it is an AI assistant that proposes column matches and suggests a template, and that nothing is imported or created until the person confirms. Shows each proposed match, marked as proposed by the AI assistant and naming the source column, beside a preview of the first rows; the person confirms or corrects, then presses Import, and a suggested template is used only on a click.
  - Agent tone: Short, literal sentences: 'Column C looks like the shift start. Is that right?'
  - Agent type: Vertical setup AI assistant; single.
  - Multi-agent handoff: File reader, then the AI assistant proposes the mapping, then the person confirms, then the import service commits.
  - Goal failure response: Low confidence (a column could be a date or a shift): leave it unmatched and ask. Ambiguous input (several tabs): ask which tab. Partial completion (row 14 has no date): name the row and offer Skip or Fix. Data unavailable (mapping service down): the person matches columns by hand.
  - Failure handover trigger: Import fails twice or the person asks for a person: customer support, with the handover context package; the file is shared only with the person's permission.
  - Data needs: Uploaded file (up to 5,000 rows), field list, stated purpose, templates.
  - Agent memory: Short-term: this file and mapping, saved with the setup state; the file can be deleted in one step.
  - Regulatory classification: Staff names and shifts are personal data, processed in the workspace's data region; minimal risk under the EU AI Act; AI-proposed matches identified.

### 3. First result

- Land on the imported item, not a generic home
- One highlighted next action
- **empty:** Nothing imported yet — try a template with your own team names
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the main heading about the rota; Tab reaches the highlighted next action first, then the imported item.
  - Announced (A11Y-S1): “Your rota for this week is ready” is announced politely, with the one next action named.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Use short literal sentences and say who a manager is in this product.

### 4. Invite one

- Ask for one email, not a team list
- Show what the colleague will see
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus lands on the Invite one person heading; Tab goes to the email field with autofill, then Send invite, then Skip.
  - Announced (A11Y-S1): The label “Invite one person” is read with the field; the sent invite is announced politely.
  - Errors (A11Y-E1): The email error is text beside the field, linked to it, and the email typed is kept; nothing is sent until Send invite is pressed.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Show what the colleague will see in words, and ask for one email only.

### 5. Checklist

- Three to five items, each with a reason
- Dismissible and never blocking
- **Accessibility:**
  - Keyboard (A11Y-K1): Focus moves to the Checklist heading; Tab goes through the items, each with a reason, then Dismiss.
  - Announced (A11Y-S1): Progress is text, “2 of 4 done, next: set opening hours”, and updates are announced politely.
  - Errors (A11Y-E1): No input on this step.
  - Time limits (A11Y-W1): No time limit.
  - Language (A11Y-L1): Give each item a reason in one short literal sentence and write counts in full.

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

## Accessibility (core v1.0, WCAG 2.2 AA)

Acceptance criteria — each ID is a requirement in Celestial's accessibility core; test against it before release.

- A11Y-P1: File upload is a native input with a visible label, and drag and drop is only an extra.
- A11Y-K1: The column-mapping table works by keyboard only, and each select has a label naming the source column.
- A11Y-S1: Checklist progress is text such as “2 of 4 done” as well as a bar, and updates are announced politely.
- A11Y-K1: Focus moves to the main heading after each step, and no step relies on hover.
- A11Y-L1: Copy uses short, literal sentences, with terms such as workspace address explained in place.
- A11Y-E1: Import errors name the row and the fix in text beside the row, and the uploaded file and mapping are kept.
- A11Y-E3: Importing shows a preview of the first rows, and the person confirms before data is committed.

Requirements this experience layer owns: **A11Y-V1** Video and audio have captions, transcripts or audio description; nothing plays sound automatically for over 3 seconds; **A11Y-K1** Every action works by keyboard in a logical order, with no keyboard traps; single-key shortcuts can be turned off or remapped; **A11Y-G1** Nothing is drag-, gesture- or motion-only: each has a single tap or click alternative, and actions fire on release so they can be cancelled; **A11Y-N1** Every page has a clear title, headings, landmarks and a skip link, and can be found more than one way; **A11Y-N2** Controls have visible labels and instructions; links say where they go; the accessible name contains the visible label; **A11Y-S1** Status, results and errors are announced to screen readers; **A11Y-E1** Errors are named in text, explained, and keep what the person typed; **A11Y-E2** Never ask for the same information twice in one flow; personal fields declare their purpose so they can be autofilled; **A11Y-E3** Money, legal and data actions can be checked, corrected or undone; **A11Y-A1** Signing in needs no memory or puzzle test; **A11Y-H1** Navigation, help and repeated components stay in the same place with the same names on every step; **A11Y-U1** Focusing or changing a field never moves the person somewhere else or submits without warning; **A11Y-W1** Time limits warn first and can be extended; **A11Y-L1** Plain language; no unexplained jargon or abbreviations.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

Core minimums always apply: 4.5:1 text, 3:1 UI and focus, visible focus on every control, 44px touch targets, no meaning by colour alone, reduced motion respected.

## Content and voice

- Short, literal sentences for second-language readers: “Upload your rota” not “Get your rota on board”
- Explain why you're asking: “We use your opening hours to stop shifts being booked when you're closed”
- Name the next action as a verb: “Share with a manager”

## Agent and system (HAI)

Acceptance criteria from the HAI skill (`hai-experience`):

- The AI assistant only proposes column matches and suggests a template; it says it is an AI assistant and that nothing is imported or created until the person confirms
- Each proposed column match is marked as proposed by the AI assistant beside a preview of the first rows; the person confirms or corrects it, and nothing is imported until they press Import
- A suggested template shows why it fits the stated purpose and creates content only on the person's click; sample content is labelled and removed in one action
- The AI assistant never creates the workspace, invites anyone, handles sign-in or asks for card details
- The uploaded file is processed in the workspace's data region and can be deleted in one step; a request for a person goes to support with the handover context package

## Edge cases

- Spreadsheet has merged cells or several tabs — ask which tab and flatten with a preview
- Person creates a second workspace by mistake — detect same email domain and offer to join the existing one
- Trial ends mid-setup — keep the data read-only for 30 days and say so
- Owner leaves before inviting anyone — remind once by email after 2 days, then stop

## Building it into a product

What this journey needs from any product that uses it — generic, with no supplier names. The Product spec skill (`product-spec-experience`) merges these across journeys into one PRODUCT.md.

### Data it needs (conceptual)

- Workspace — name, address, purpose, data region, trial end date · relates to Member, Import, Checklist item
- Member — name, email, role · relates to Workspace, Invite · personal data
- Import — file, tab, column mapping, matches proposed by AI assistant, confirmed by, rows imported, rows skipped · relates to Workspace · personal data
- Rota — shifts, staff names, sites, dates · relates to Workspace, Import · personal data
- Template — name, purpose, sample content label · relates to Workspace
- Invite — email, role, what they will see, sent by, status · relates to Workspace, Member · personal data
- Checklist item — task, reason, done, dismissed · relates to Workspace

### Systems it touches

- Workspace service — reads workspace settings; writes workspace, setup state · when down: Setup state is saved; the person can return later.
- File import service — reads uploaded file; writes imported items · when down: Keep the file and mapping; import when it is back.
- Column-matching service — reads column headers, sample rows; writes proposed matches · when down: The person matches columns by hand.
- Template library — reads templates · when down: Offer import or a blank start.
- Email service; writes invites, one reminder · when down: Show the invite link to copy and send.

### Roles

- Workspace owner — create and name the workspace, import data and confirm the mapping, choose a template, invite colleagues, delete imported files
- Invited colleague — see and use the shared item, join the workspace
- Customer support — help with imports and setup, receive handovers
- AI assistant — propose column matches, marked until confirmed, suggest a template with a reason, hand over to a person, works at most in Advisory mode

### Default targets (the product confirms or replaces them)

- Workspaces reaching first value: 60% within 24 hours (range 50–75%)
- Time to first value: Under 15 minutes median (range 10–30 minutes)
- Imports committed without error after preview: 90% (range 85–98%)
- Rows per import: Up to 5,000 (range 1,000–5,000)
- Data kept read-only after the trial ends: 30 days (range 14–90 days)
- Reminder if no one is invited: Once, after 2 days (range 1–3 days, then stop)

### Required inputs and configuration

- Purpose options and the templates each one suggests
- Field list for column matching
- Workspace data region
- Trial length and what happens at the end
- What an invited colleague will see
- Whether column matching and template suggestions are switched on
- Support contact

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
