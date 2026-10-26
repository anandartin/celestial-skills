---
name: mercury-design
core: "1.0"
dials: { density: default, shape: soft, depth: layered, contrast: standard }
accent-scope: actions, links and agent states
icons: lucide
description: "Design-system skill for Mercury. Use whenever creating any UI, landing page, dashboard, app screen, document, deck, report, prototype, or graphic that should look like Mercury — A bright workspace for AI agents: Manrope at weight 500–700, graphite ink on cool white, soft-shadow cards with 16px corners, and one cobalt for actions and agent states. Fonts: Manrope, DM Mono. Icons: Lucide. Triggers on 'Mercury style', 'Mercury look', or any request to design something for a Mercury-branded product. Use it for every kind of output, not only web UI: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Mercury — Design System Skill

Mercury is an original design system for a workspace where teams set up AI agents, watch them work and approve what they do. Rounded geometric type, cool white surfaces and soft depth keep it bright; one cobalt marks everything you can act on.

It covers product UI first — agent lists, run timelines, approvals and settings — and the marketing and docs pages that show that product.

Original brand created for Celestial. Cobalt is for actions, links and agent states; status colours always come with an icon and text. Values were chosen for this skill, not taken from any template, kit or design-skill file.

---

## Brand Personality

| Trait | Expression |
|---|---|
| **Bright** | Cool white surfaces with soft depth; nothing heavy or dark except focused panels. |
| **Transparent** | Every agent step is visible: timelines, tool chips and plain-language approvals. |
| **Direct** | One cobalt for what you can act on; everything else stays graphite. |
| **Friendly** | Rounded geometric type and 16px cards keep a technical product approachable. |

Tone of voice: Direct and reassuring, second person, short sentences: say what the agent will do and what you can change. Two-word buttons ('Approve run', 'Edit step').

**Logo** — the supplied mark (SVG, takes currentColor unless it carries its own fill) followed by the wordmark **Mercury** set in the display face (Manrope). Keep clear space equal to the mark's width; never stretch, outline or recolour the mark.

Sample copy in the brand voice: eyebrow `Agents` · headline "Agents you can watch and approve." · body "Set up an agent, see every step it takes, and approve anything that matters before it happens." · CTA "Build an agent" · stat "3,906 steps run today".

---

## Color Tokens

```css
:root {
  /* Palette */
  --mercury-page-background: #fbfbfc;   /* page background */
  --mercury-card-surface: #ffffff;   /* card surface */
  --mercury-band-muted-surface: #f1f2f5;   /* band / muted surface */
  --mercury-border-decorative-hairlines-and-: #dcdfe6;   /* border — decorative hairlines and dividers */
  --mercury-ink-headings-and-dark-panels: #14161b;   /* ink (headings) and dark panels */
  --mercury-body-text: #33373f;   /* body text */
  --mercury-muted-text-captions-helper-place: #5c6270;   /* muted text — captions, helper, placeholder */
  --mercury-input-border-fields-checkboxes-r: #868c99;   /* input border — fields, checkboxes, radios (3:1) */
  --mercury-primary-button-and-brand-cobalt: #2547d0;   /* primary button and brand cobalt */
  --mercury-primary-button-hover: #1b37a6;   /* primary button hover */
  --mercury-focus-ring: #2547d0;   /* focus ring */
  --mercury-accent-actions-links-and-agent-s: #2547d0;   /* accent — actions, links and agent states */
  --mercury-cobalt-tint-selected-rows-and-ru: #e8edfc;   /* cobalt tint — selected rows and running states (fill only) */
  --mercury-success-text-and-icons: #1d7a4c;   /* success — text and icons */
  --mercury-warning-text-and-icons: #8a5a00;   /* warning — text and icons */
  --mercury-error-text-and-icons: #b42318;   /* error — text and icons */

  /* Semantic roles (derived from the palette above) */
  --mercury-bg:        #fbfbfc;
  --mercury-surface:   #ffffff;
  --mercury-band:      #f1f2f5;
  --mercury-ink:       #14161b;
  --mercury-ink-2:     #33373f;
  --mercury-muted:     #5c6270;
  --mercury-line:      #dcdfe6;
  --mercury-accent:    #2547d0;
  --mercury-on-accent: #ffffff;
  --mercury-button:    #2547d0;
  --mercury-on-button: #ffffff;
  --mercury-ok:        #1d7a4c;
  --mercury-warn:      #8a5a00;
  --mercury-bad:       #b42318;
}
```

**Palette rules**

- Page is `#fbfbfc`; cards and panels sit on `#ffffff`; use `#f1f2f5` for alternating bands and wells. Never drift the neutrals warmer or cooler than these.
- Text is `#14161b` for headings, `#33373f` for body and `#5c6270` for captions and placeholders. Hairlines are `#dcdfe6`.
- The accent `#2547d0` is the primary action fill. One accent per screen.
- Status colours (`#1d7a4c` success, `#8a5a00` warning, `#b42318` danger) mean state, never decoration.
- Layered: white cards sit on a cool-white page with a soft two-layer shadow (0 1px 2px and 0 8px 24px at 6%). Bands step to #f1f2f5. Dark panels use the graphite ink.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| **Display / H1–H3** | Manrope | 700 | letter-spacing -.02em, line-height 1.05–1.1 |
| **Body / UI / H4–H6** | Manrope | 400 (500 for emphasis) | 15–16px, line-height 1.5 |
| **Labels / eyebrows / code** | DM Mono | 400–500 | 11–12px, +0.06em tracking, uppercase eyebrows |

```css
--font-display: 'Manrope', system-ui, sans-serif;
--font-body:    'Manrope', system-ui, sans-serif;
--font-mono:    'DM Mono', ui-monospace, monospace;
```

Load from Google Fonts: `https://fonts.googleapis.com/css2?family=Manrope&family=DM+Mono&display=swap`

### Type scale

| Token | Size | Line-height | Letter-spacing |
|---|---|---|---|
| display | 56–72px | 1.02 | -.02em |
| h1 | 44px | 1.05 | -.02em |
| h2 | 32–36px | 1.1 | -.02em |
| h3 | 22–28px | 1.15 | -.02em |
| title | 18–20px | 1.3 | 0 |
| body | 15–16px | 1.5 | 0 |
| small | 13–14px | 1.45 | 0 |
| label | 11–12px | 1 | +0.06em, uppercase |

---

## Shape and density — dials on the core ladders

Everything structural follows **Celestial core v1.0** (*Celestial core foundations* below): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Mercury sits on each ladder.

| Dial | Mercury | Sets |
|---|---|---|
| Density | Default | control height 40px, padding step, base font size, table row height |
| Shape | Soft | control radius 8px, card radius 16px, chip radius |
| Depth | Layered | elevation mode: Hairline + faint shadow, border width 1px |
| Contrast | Standard | ink steps, display weight 700, accent intensity |

```css
--control-height: {core.control.40};
--radius-control: {core.radius.8};
--radius-card:    {core.radius.16};
--rule-style:     solid 1px;
```

- Accent scope: **actions, links and agent states** — the accent appears in this role and nowhere else.
- 8px controls, 16px cards, 1px cool hairlines; cards lift with a soft two-layer shadow instead of heavy borders Max content width 1200px.
- A 40px cobalt primary button with 8px corners and a white label; a white secondary button with a 1px border. Inputs are 40px with a 1px #868c99 border that turns cobalt with a soft ring on focus. Cards are white, 16px corners, lifted by a soft shadow; agent states use a cobalt tint fill with cobalt text.


---

## Marketing page layout

Layout family: **product-led — hero, product frame, section cards**.

1. **Nav** — mark + lowercase wordmark left; a filled pill button and a bordered icon button right. No links, no border.
2. **Hero, left-aligned** — two-line H1 at weight 400 ending in a full stop, a short muted lead, then a filled and a hairline button.
3. **Product frame** — full-width card on a blurred greyscale backdrop; the app screenshot inset with a hairline border: sidebar, node-graph canvas, chat panel.
4. **Logo wall** — "Trusted by technical teams at" in muted text, monochrome logos.
5. **Section card** — a media well holding the centred prompt pill, then a 22px title ending in a full stop and muted copy.
6. **Feature intro + 2×2 grid** — thin-line icon in a well → 18px H3 → muted copy.
7. **Feature section cards** — media well with a screenshot, title, copy and a plain `Explore … →` link.
8. **CTA** — centred H2 with a filled and a hairline button; **Footer** — hairline rule, seven sentence-case columns, copyright in muted text.

---

## Components

**Primary button** — bg `#2547d0`, text `#ffffff`, height 40px, padding 0 16px, radius 8px, 14px Manrope 500; hover `#1b37a6`; focus-visible 2px `#2547d0` ring; disabled at 45% opacity.

**States** (core anatomy, brand values) — hover `#1b37a6` (label 9.8:1), active `#1b359a` + 1px nudge, focus-visible 2px `#2547d0` ring offset 2px (7.0:1 on the page, never removed), disabled at 45% opacity with `aria-disabled`, loading keeps the label with `aria-busy`. Secondary and ghost hover to `#ededef`. Fields: hover border `#33373f`, focus border + 3px soft ring in the focus colour, error `#b42318` border plus icon and written fix, success `#1d7a4c`, disabled on `#f1f2f5`. Transitions 120ms; none under prefers-reduced-motion; 44px touch targets on mobile.

**Secondary button** — transparent, 1px `#868c99` border, text `#14161b`, same geometry; hover bg `#f1f2f5`. **Ghost** — no border, hover bg `#f1f2f5`.

**Input** — height 40px, bg `#ffffff`, 1px `#868c99`, radius 8px, placeholder `#5c6270`; focus border `#2547d0` + 3px soft ring; error border `#b42318`; helper text 12px `#5c6270` below, never in a tooltip.

**Select / menu** — same shell as input with a trailing chevron; menu on `#ffffff` with 8px corners and the overlay shadow; selected row on `#f1f2f5` with a check.

**Checkbox / radio / toggle** — 16px box with 4px corners (radio round), filled `#2547d0` when on; toggle 36×20 pill, knob white, on = `#2547d0`.

**Chip / badge** — 28px chip and 24px badge, radius 8px, soft tint of the semantic colour with its text colour; a dot before the label for live states.

**Card** — bg `#ffffff`, 1px `#dcdfe6`, radius 16px, padding 20–24px, shadow `none`; a heading, body copy, and at most one action.

**Table** — header row 12px uppercase mono in `#5c6270`, rows separated by `#dcdfe6`, numerals tabular, status as badges, row actions in a trailing ⋯ menu.

**Alert** — 1px border and soft tint of its semantic colour, 18px icon, bold first sentence, dismiss × at the end; lives in the flow, unlike a toast (dark `#14161b` pill, bottom-centre, one undo action).

**Modal / drawer** — `#ffffff`, radius 16px, overlay shadow, 22px padding; destructive confirm uses a `#b42318` filled button; both close on Escape or a click outside.

**Navigation** — breadcrumbs with chevron separators and the current page in `#14161b`; tabs with a 2px `#2547d0` underline; pagination as 30px square buttons with the current page filled `#14161b`.

**App shell** — 52px top bar on `#ffffff` with a pill search, primary action and avatar; a 40px icon rail and a 200px sidebar with 12.5px items, the active item tinted `#dde2f6`; the body scrolls beneath a sticky chrome.

---

## Icons — Lucide

Use **[Lucide](https://lucide.dev/)** (Lucide contributors). ISC — free for commercial use, no attribution required. Style: 24-unit grid, 2px round-capped stroke; the shadcn/ui default set.

- **Size:** 14px in small buttons, 16px in base buttons, inputs and nav, 18px in large buttons and alerts, 24px in feature lists. Icons take `currentColor`, never the accent on their own.
- **Placement:** a leading icon names the action, a trailing arrow or chevron says where it goes; icon buttons are square with one glyph and no label.
- **Core set:** search, plus, minus, check, close, arrow-right, chevron-down/left/right, bell, gear, user, users, chat, mail, calendar, clock, home, folder, file, download, upload, edit, trash, filter, star, heart, lock, globe, info, warning.

```html
npm i lucide-react
import { LayoutDashboard } from "lucide-react"
<LayoutDashboard size={16} />
```

---

## Best for

AI agent workspaces, automation products, run logs and the marketing pages that show them.

---

## Do / Don't

**Do** — keep to one accent per screen; set headings in Manrope at weight 700 with -.02em tracking; use 8px controls and 16px panels everywhere; separate surfaces with tone and hairlines; let status colours mean state.

**Don't** — introduce a second accent or a second display face; mix corner radii; add drop shadows or glows; use colour for decoration; centre what the layout family sets left (or vice versa).

---

## Quick-start CSS

```css
:root{--bg:#fbfbfc;--surface:#ffffff;--band:#f1f2f5;--ink:#14161b;--ink-2:#33373f;--muted:#5c6270;--line:#dcdfe6;--line-strong:#868c99;--accent:#2547d0;--on-accent:#ffffff;--button:#2547d0;--on-button:#ffffff;
--display:'Manrope', system-ui, sans-serif;--body:'Manrope', system-ui, sans-serif;--mono:'DM Mono', ui-monospace, monospace;--r:8px;--rc:16px;}
body{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.5 var(--body);-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--display);font-weight:700;letter-spacing:-.02em;line-height:1.1;margin:0}
h1{font-size:clamp(36px,5vw,64px)} h2{font-size:clamp(28px,3.4vw,40px)} h3{font-size:22px}
p{color:var(--ink-2);margin:0}
.eyebrow{font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.btn{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:var(--r);background:var(--button);color:var(--on-button);font:500 14px/1 var(--body);border:1px solid transparent;text-decoration:none;cursor:pointer}
.btn.secondary{background:transparent;color:var(--ink);border-color:var(--line-strong)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--rc);padding:22px;box-shadow:none}
.input{height:40px;border:1px solid var(--line-strong);border-radius:var(--r);background:var(--surface);padding:0 12px;font:inherit;color:var(--ink)}
.input:focus{outline:0;border-color:var(--accent);box-shadow:0 0 0 3px #dde2f6}
.badge{display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:var(--r);font-size:12px;font-weight:500;background:#dde2f6;color:#2547d0}
.logo{display:inline-flex;align-items:center;gap:8px;font:700 19px/1 var(--display)}
```

When building for Mercury: start from this CSS, keep every surface on these tokens, and let the accent carry the eye.

## Using Mercury beyond the web

Mercury applies to every output. When asked for a deck, a document, a report, an email, a social post or a chart "for Mercury" or "in Mercury's style", build it from the tokens below — never from a default template or theme.

### Colour roles
| Role | Value | Use |
|---|---|---|
| Background | `#fbfbfc` | Slide and page background |
| Surface | `#ffffff` | Cards, panels, table rows |
| Band | `#f1f2f5` | Section bands, divider slides, table headers |
| Ink | `#14161b` | Headlines and body text |
| Ink 2 | `#33373f` | Secondary text |
| Muted | `#5c6270` | Captions, footers, axis labels |
| Line | `#dcdfe6` | Rules, borders, chart gridlines |
| Accent | `#2547d0` | One highlight per slide or page (actions, links and agent states) |
| On accent | `#ffffff` | Text on the accent |
| Success / warning / error | `#1d7a4c / #8a5a00 / #b42318` | Status only, never decoration |

### Type
- Headlines: **Manrope**, weight 700, tracking -.02em.
- Body: **Manrope**. Labels and code: **DM Mono**.
- If a face isn't installed, use the closest system font of the same style and say so — never silently swap to a default.

### Logo on every output
Every Mercury output carries the logo — never just the name typed out. Use the SVG under **Brand assets** (or a PNG exported from it at 4×); keep the mark's own colour only where it reaches 3:1 against the background; otherwise use the one-colour version — `#ffffff` on ink or dark photos, `#ffffff` on the accent, `#14161b` for monochrome. Never place the mark on a background of its own colour. Keep clear space equal to the mark's height and never stretch, outline or recolour it otherwise.
| Output | Where the logo goes |
|---|---|
| Web and app UI | Top-left of the header on every page and screen; again in the footer; the mark as favicon and app icon |
| Presentations | Title slide, top-left (about 0.5 in tall); every slide's footer, bottom-left (about 0.25 in); the closing slide |
| Print, articles, whitepapers | Cover or masthead, top-left; running header on every page; back cover or colophon |
| Banners and ads | Every size, top-left or left of the message, at least 24 px tall digital / 40 mm on a roll-up |
| Posters and social posts | Top-left, plus the sign-off at the bottom |
| Email | Header (120–160 px wide) and footer |
| Native apps | Navigation bar on the first screen (iOS: an asset named BrandLogo; Android: res/drawable/brand_logo) |

### Presentations (PowerPoint, Keynote, Google Slides)
- 16:9, 13.333 × 7.5 in (1920 × 1080). Margins 0.6 in; a 12-column grid.
- **Theme** (set it on the master so every slide inherits it): dark 1 = `#14161b`, light 1 = `#fbfbfc`, dark 2 = `#33373f`, light 2 = `#f1f2f5`, accent 1–6 = `#2547d0`, `#1f3691`, `#8598e4`, `#33373f`, `#5c6270`, `#c6cef1`; heading font = Manrope, body font = Manrope.
- **Title slide**: background `#fbfbfc`; headline in Manrope 54–64 pt, ink; one-line subtitle in Manrope 20 pt, muted; the logo at the top left with clear space equal to its own height.
- **Section divider**: full-bleed `#f1f2f5` (or `#14161b` with `#ffffff` text); section number in DM Mono.
- **Content slide**: title in Manrope 32–40 pt; body Manrope 18–24 pt, max six bullets; one accent highlight at most.
- **Shapes and cards**: fill `#ffffff`, 1 pt `#dcdfe6` border, corner radius 16px (about 0.17 in).
- **Charts**: series in the accent order above; gridlines `#dcdfe6`; labels `#5c6270`; no 3-D, no gradients.
- **Footer**: DM Mono 10 pt in `#5c6270`: Mercury · title · page number.
- When generating .pptx with code (e.g. python-pptx), write these colours and fonts into the theme and master first, then add slides from the master.

### Documents and PDF reports (Word, Google Docs, PDF)
- Page `#fbfbfc`, text `#14161b`. H1 Manrope 28 pt, H2 20 pt, H3 15 pt; body Manrope 11 pt, line spacing 1.5.
- Table header row `#f1f2f5`, 1 pt `#dcdfe6` rules, numbers right-aligned in DM Mono.
- Callouts: `#ffffff` box with a 3 pt left rule in `#2547d0`.
- Cover page: logo, title in Manrope, date and owner in DM Mono.

### Email, social and diagrams
- Email: 600 px column on `#fbfbfc`; one primary button in `#2547d0` with `#ffffff` text, 8px corners.
- Social: square 1080 × 1080 or 1200 × 628; headline in Manrope; accent used once; logo bottom-left.
- Diagrams: nodes `#ffffff` with `#dcdfe6` borders and 16px corners; connectors `#5c6270`; the one emphasised node in `#2547d0`.


## Brand assets
### Logo (SVG)
Use this mark as-is: don't redraw, recolour (except to one solid colour on dark backgrounds), stretch or add effects.

```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#2547d0"/><circle cx="16" cy="8" r="3" fill="#ffffff"/></svg>
```

### Fonts
- Manrope
- DM Mono


## Patterns (core v1.0)
Compositions of core components for recurring jobs. Each uses only contract tokens, so it renders in Mercury and in any other brand. Mercury's own signature patterns follow at the end.

### Navigation
- **App shell:** side navigation with the logo on top and 4–7 destinations (icon and label), one marked current (`aria-current="page"`); content on the right under a page title.
- **Breadcrumb and tabs** show the same current location as the navigation; they never disagree.
- **Mobile:** a top bar (menu · title · one action); destinations move into a drawer or a bottom bar of up to 5 items.

### Forms
- One column, labels above fields, helper text below, one primary action at the end with the secondary beside it.
- Validate on blur and on submit, never while typing. The error sits under the field in text with an icon, the border turns to the error colour, and the typed value is kept.
- **Multi-step:** a step indicator (done · current · upcoming), one task per step, Back never loses answers, and the last step reviews everything before submit.

### Search
- **Command palette** (⌘K / Ctrl+K): one input, results grouped by type with the match highlighted; ↑ ↓ to move, Enter to open, Esc to close.
- **Results list:** a search field with removable filter chips, a result count, and an empty result that says what to change.

### Tables
- Dense and scannable: the first cell is the record, numbers right-aligned, status as a badge with text, row actions in a trailing menu.
- Sortable headers announce their sort order; search and filters sit above; bulk actions appear only after a selection.

### Onboarding
- **Welcome:** a greeting by name and one decision (template, import or blank).
- **Checklist:** 3–5 tasks with a progress count ("2 of 4"); each task opens where it is done.
- **First-run empty state:** an icon, one sentence on what goes here, one primary action — teach by doing.

### Feedback
- **Toast** for something that happened (dismisses itself, with Undo where possible); **alert** for something that needs attention (stays until resolved).
- **Confirmation** only for what can't be undone: name the thing and the consequence ("Delete “Atlas”? This removes 42 issues"), and the destructive button names the action.
- Status always pairs colour with an icon and words.

### AI interactions
- A prompt that invites a job, a streamed answer that cites its sources, and 2–3 suggestions to continue.
- Anything irreversible stops at an **approval step** — what will happen, why, and the data it touches — with Approve, Edit and Reject. Never act first.
- Long runs show progress; the person's prompt stays editable.

### Mercury signature patterns
- **Run timeline** — Show what an agent did, step by step Anatomy: A vertical line with one row per step: status dot → step name → the tool it used in a mono chip → duration on the right; the running step pulses in cobalt. Tokens: accent, line, font-mono, ink-muted.
- **Approval card** — Ask a person before an agent acts Anatomy: Card with the proposed action in plain words → what it will change → Approve (primary) and Edit (secondary); a timer line shows when it expires. Tokens: surface-card, accent, radius-card, elevation-raised.
- **Tool chip** — Name a connected tool inline Anatomy: A 24px chip with the tool's icon and name in mono 12px; cobalt outline while in use. Tokens: surface-muted, font-mono, accent.
- **Agent card** — Summarise one agent at a glance Anatomy: Name and status badge → one-line job description → runs today and success rate → open button. Tokens: surface-card, status-success, elevation-raised.


## Accessibility (core v1.0, WCAG 2.2 AA)
Every Mercury screen, document and graphic must meet Celestial's accessibility core; this file is checked against it, your product still needs testing. Automated result for this palette: **Palette passes automated WCAG 2.2 AA checks**. Automated checks cover only part of WCAG 2.2 AA; keyboard, screen-reader and 200% zoom checks still need a person.

Every WCAG 2.2 Level A and AA success criterion (55 of 55; 4.1.1 Parsing is obsolete) maps to a core requirement: 1.1.1 Non-text Content (A) → A11Y-I1 · 1.2.1 Audio-only and Video-only (Prerecorded) (A) → A11Y-V1 · 1.2.2 Captions (Prerecorded) (A) → A11Y-V1 · 1.2.3 Audio Description or Media Alternative (Prerecorded) (A) → A11Y-V1 · 1.2.4 Captions (Live) (AA) → A11Y-V1 · 1.2.5 Audio Description (Prerecorded) (AA) → A11Y-V1 · 1.3.1 Info and Relationships (A) → A11Y-P1 · 1.3.2 Meaningful Sequence (A) → A11Y-P1 · 1.3.3 Sensory Characteristics (A) → A11Y-C2 · 1.3.4 Orientation (AA) → A11Y-R1 · 1.3.5 Identify Input Purpose (AA) → A11Y-E2 · 1.4.1 Use of Color (A) → A11Y-C2 · 1.4.2 Audio Control (A) → A11Y-V1 · 1.4.3 Contrast (Minimum) (AA) → A11Y-C1 · 1.4.4 Resize Text (AA) → A11Y-R1 · 1.4.5 Images of Text (AA) → A11Y-I1 · 1.4.10 Reflow (AA) → A11Y-R1 · 1.4.11 Non-text Contrast (AA) → A11Y-C1 · 1.4.12 Text Spacing (AA) → A11Y-R1 · 1.4.13 Content on Hover or Focus (AA) → A11Y-O1 · 2.1.1 Keyboard (A) → A11Y-K1 · 2.1.2 No Keyboard Trap (A) → A11Y-K1 · 2.1.4 Character Key Shortcuts (A) → A11Y-K1 · 2.2.1 Timing Adjustable (A) → A11Y-W1 · 2.2.2 Pause, Stop, Hide (A) → A11Y-M1 · 2.3.1 Three Flashes or Below Threshold (A) → A11Y-M1 · 2.4.1 Bypass Blocks (A) → A11Y-N1 · 2.4.2 Page Titled (A) → A11Y-N1 · 2.4.3 Focus Order (A) → A11Y-K1 · 2.4.4 Link Purpose (In Context) (A) → A11Y-N2 · 2.4.5 Multiple Ways (AA) → A11Y-N1 · 2.4.6 Headings and Labels (AA) → A11Y-N1 · 2.4.7 Focus Visible (AA) → A11Y-F1 · 2.4.11 Focus Not Obscured (Minimum) (AA) → A11Y-F1 · 2.5.1 Pointer Gestures (A) → A11Y-G1 · 2.5.2 Pointer Cancellation (A) → A11Y-G1 · 2.5.3 Label in Name (A) → A11Y-N2 · 2.5.4 Motion Actuation (A) → A11Y-G1 · 2.5.7 Dragging Movements (AA) → A11Y-G1 · 2.5.8 Target Size (Minimum) (AA) → A11Y-T1 · 3.1.1 Language of Page (A) → A11Y-L2 · 3.1.2 Language of Parts (AA) → A11Y-L2 · 3.2.1 On Focus (A) → A11Y-U1 · 3.2.2 On Input (A) → A11Y-U1 · 3.2.3 Consistent Navigation (AA) → A11Y-H1 · 3.2.4 Consistent Identification (AA) → A11Y-H1 · 3.2.6 Consistent Help (A) → A11Y-H1 · 3.3.1 Error Identification (A) → A11Y-E1 · 3.3.2 Labels or Instructions (A) → A11Y-N2 · 3.3.3 Error Suggestion (AA) → A11Y-E1 · 3.3.4 Error Prevention (Legal, Financial, Data) (AA) → A11Y-E3 · 3.3.7 Redundant Entry (A) → A11Y-E2 · 3.3.8 Accessible Authentication (Minimum) (AA) → A11Y-A1 · 4.1.2 Name, Role, Value (A) → A11Y-P1 · 4.1.3 Status Messages (AA) → A11Y-S1.

### Rules this design layer owns
- **A11Y-C1** Text contrast at least 4.5:1; large text, icons and field borders at least 3:1 (WCAG 1.4.3, 1.4.11)
- **A11Y-C2** Meaning is never carried by colour, shape, position or sound alone — pair it with text (WCAG 1.4.1, 1.3.3)
- **A11Y-F1** A visible focus indicator on every interactive element, never hidden behind sticky bars (WCAG 2.4.7, 2.4.11)
- **A11Y-T1** Targets at least 24×24px; 44×44px on touch screens (WCAG 2.5.8)
- **A11Y-R1** Text works at 200% zoom, at 320px width, with increased text spacing and in either orientation (WCAG 1.4.4, 1.4.10, 1.4.12, 1.3.4)
- **A11Y-M1** Motion respects the reduced-motion setting; anything moving for over 5 seconds can be paused; nothing flashes more than 3 times a second (WCAG 2.2.2, 2.3.1, 2.3.3 (AAA, advised))
- **A11Y-O1** Tooltips and pop-overs shown on hover or focus can be dismissed, hovered and stay until dismissed (WCAG 1.4.13)
- **A11Y-I1** Images, icons and charts have text alternatives (empty for decoration); text is never an image (WCAG 1.1.1, 1.4.5)

### How to use Mercury's colours accessibly
- Body and small text: only colours marked Pass at 4.5:1 below. A colour that passes only at 3:1 is for large text (24px, or 18.7px bold), icons and graphics.
- Field borders and focus rings need 3:1 against the page; hairline dividers are decorative and exempt.
- Status colours always come with a word or an icon, never colour alone (A11Y-C2).
- Disabled controls are exempt from contrast but must still say they are unavailable (`aria-disabled`).

### Checks
| Check | Colours | Ratio | Needs | Result |
|---|---|---|---|---|
| ink | `#14161b` on `#fbfbfc` | 17.50:1 | 4.5:1 | Pass |
| ink | `#14161b` on `#ffffff` | 18.10:1 | 4.5:1 | Pass |
| ink | `#14161b` on `#f1f2f5` | 16.17:1 | 4.5:1 | Pass |
| body text | `#33373f` on `#fbfbfc` | 11.54:1 | 4.5:1 | Pass |
| body text | `#33373f` on `#ffffff` | 11.94:1 | 4.5:1 | Pass |
| body text | `#33373f` on `#f1f2f5` | 10.66:1 | 4.5:1 | Pass |
| muted text | `#5c6270` on `#fbfbfc` | 5.91:1 | 4.5:1 | Pass |
| muted text | `#5c6270` on `#ffffff` | 6.11:1 | 4.5:1 | Pass |
| muted text | `#5c6270` on `#f1f2f5` | 5.46:1 | 4.5:1 | Pass |
| input border · field border | `#868c99` on `#fbfbfc` | 3.26:1 | 3:1 | Pass |
| focus ring | `#2547d0` on `#fbfbfc` | 7.02:1 | 3:1 | Pass |
| focus ring | `#2547d0` on `#ffffff` | 7.26:1 | 3:1 | Pass |
| focus ring | `#2547d0` on `#f1f2f5` | 6.49:1 | 3:1 | Pass |
| accent | `#2547d0` on `#fbfbfc` | 7.02:1 | 4.5:1 | Pass |
| accent | `#2547d0` on `#ffffff` | 7.26:1 | 4.5:1 | Pass |
| accent | `#2547d0` on `#f1f2f5` | 6.49:1 | 4.5:1 | Pass |
| success · as an icon | `#1d7a4c` on `#fbfbfc` | 5.15:1 | 3:1 | Pass |
| success · as text | `#1d7a4c` on `#fbfbfc` | 5.15:1 | 4.5:1 | Pass |
| warning · as an icon | `#8a5a00` on `#fbfbfc` | 5.73:1 | 3:1 | Pass |
| warning · as text | `#8a5a00` on `#fbfbfc` | 5.73:1 | 4.5:1 | Pass |
| error · as an icon | `#b42318` on `#fbfbfc` | 6.36:1 | 3:1 | Pass |
| error · as text | `#b42318` on `#fbfbfc` | 6.36:1 | 4.5:1 | Pass |
| Primary button label | `#ffffff` on `#2547d0` | 7.26:1 | 4.5:1 | Pass |
| Primary button label · hover | `#ffffff` on `#1b37a6` | 9.80:1 | 4.5:1 | Pass |
| Focus ring | `#2547d0` on `#fbfbfc` | 7.02:1 | 3:1 | Pass |
| Name on the accent lockup (large text) | `#ffffff` on `#2547d0` | 7.26:1 | 3:1 | Pass |
| Muted text | `#5c6270` on `#fbfbfc` | 5.91:1 | 4.5:1 | Pass |
| Control height | 40px | — | ≥ 24px (WCAG 2.5.8); hit area padded to 44px on touch (core) | Pass — Pad the hit area to 44 × 44px on touch screens. |
| Smallest component text | 12px | — | ≥ 12px | Pass |


## Celestial core foundations (included)
This brand sits on Celestial core v1.0. The shared rules are included here so this file works on its own.

Shared by every Celestial design skill. Locked values live here once; a brand SKILL.md documents only its deltas and never restates core.

### Spacing
Base unit 4px. Scale: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160px. Components use only scale values.

### Grid and layout
| Breakpoint | Min width | Columns | Gutter | Page margin |
|---|---|---|---|---|
| Mobile | 0px | 4 | 16px | 16–20px |
| Tablet | 640px | 8 | 24px | 32px |
| Desktop | 1024px | 12 | 24px | 32–40px |
| Wide | 1440px | 12 | 32px | auto · max 1120 / 1200 / 1280px |

### Ladders (brands pick a step, never invent a value)
- Control height: 32 / 36 / 40 / 44px — inputs, buttons and selects share one height per size.
- Control radius: 2 / 4 / 6 / 8 / full. Card radius: 8 / 12 / 14 / 16 / 24px. Rule: card radius ≥ control radius; nested radius = outer radius − padding.
- Type scale ratio: 1.2 / 1.25 / 1.333 from a 16px base (14px in dense apps): caption, body, body-lg, h6 → h1. Line height 1.4–1.5 body, 1.0–1.2 display.
- Density: Compact / Default / Comfortable. Border width: 0.5 / 1 / 1.5px.

### Elevation
- Level 0 · flat — page
- Level 1 · card — cards, tiles
- Level 2 · raised — hover, dragged
- Level 3 · popover — menus, tooltips
- Level 4 · modal — dialogs, sheets
The brand's depth dial decides whether a level renders as a hairline, a background step or a shadow.

### Motion
- 120ms · micro — hover, toggle, focus
- 200ms · standard — expand, reveal, tab change
- 320ms · enter / exit — dialogs, drawers, page
Respects prefers-reduced-motion. Brands choose the easing curve only.

### Accessibility
- 4.5:1 contrast for body text, 3:1 for large text and UI parts
- Visible focus on every interactive element (ring colour is the brand's only choice)
- 44px touch targets on mobile
- No meaning carried by colour alone — pair with a label, icon or shape
- Respects prefers-reduced-motion

### Component states
Every component specifies: default, hover, focus-visible, active, disabled, loading, error (inputs), success (inputs). Core defines which token each state reads; brands only supply the token values.

### Z-index
base 0 · sticky 100 · dropdown 200 · overlay 300 · modal 400 · toast 500

### Token classification
| Token / decision | Class | Who sets it | Brand may change |
|---|---|---|---|
| Spacing unit (4px) and scale | Locked | Core | Nothing |
| 12-column grid, gutters, breakpoints | Locked | Core | Nothing (may pick max width 1120 / 1200 / 1280px) |
| Touch target minimum (44px) | Locked | Core | Nothing |
| Contrast minimums (4.5:1 text, 3:1 UI) | Locked | Core | Nothing |
| Focus ring presence and offset | Locked | Core | Colour only |
| Component anatomy and states | Locked | Core | Nothing |
| Motion durations (120 / 200 / 320ms) | Locked | Core | Easing curve choice |
| Z-index scale | Locked | Core | Nothing |
| Control height | Tunable | Brand picks step | 32 / 36 / 40 / 44px |
| Control radius | Tunable | Brand picks step | 2 / 4 / 6 / 8px / full |
| Card radius | Tunable | Brand picks step | 8 / 12 / 14 / 16 / 24px |
| Type scale ratio | Tunable | Brand picks step | 1.200 / 1.250 / 1.333 |
| Density (padding step) | Tunable | Brand picks step | Compact / Default / Comfortable |
| Border width | Tunable | Brand picks step | 0.5 / 1 / 1.5px |
| Colour palette | Free | Brand | Any, mapped to semantic roles |
| Typefaces and weights | Free | Brand | Any, mapped to display / body / mono |
| Heading tracking and case | Free | Brand | Any |
| Rule style (solid / dashed) | Free | Brand | Any |
| Icon set and stroke | Free | Brand | Phosphor / Lucide / Core Line / custom |
| Logo, voice, imagery | Free | Brand | Any |
| Signature patterns | Free (extension) | Brand | New components built from core primitives |

A value outside its class is an override: allowed only with a written reason in the brand's SKILL.md and a conformance flag in Celestial.


## Design tokens (W3C format)

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "$name": "Mercury",
  "core": "{core.version 1.0}",
  "dials": {
    "density": "Default",
    "shape": "Soft",
    "depth": "Layered",
    "contrast": "Standard"
  },
  "accent-scope": "actions, links and agent states",
  "surface": {
    "ground": {
      "$type": "color",
      "$value": "#fbfbfc"
    },
    "raised": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "card": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "muted": {
      "$type": "color",
      "$value": "#f1f2f5"
    }
  },
  "ink": {
    "primary": {
      "$type": "color",
      "$value": "#14161b"
    },
    "body": {
      "$type": "color",
      "$value": "#33373f"
    },
    "muted": {
      "$type": "color",
      "$value": "#5c6270"
    }
  },
  "line": {
    "default": {
      "$type": "color",
      "$value": "#dcdfe6"
    },
    "width": {
      "$type": "dimension",
      "$value": "1px"
    },
    "style": {
      "$type": "string",
      "$value": "solid 1px"
    }
  },
  "accent": {
    "$type": "color",
    "$value": "#2547d0"
  },
  "action": {
    "primary-bg": {
      "$type": "color",
      "$value": "#2547d0"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "#1b37a6"
    },
    "focus-ring": {
      "$type": "color",
      "$value": "#2547d0"
    }
  },
  "status": {
    "success": {
      "$type": "color",
      "$value": "#1d7a4c"
    },
    "warning": {
      "$type": "color",
      "$value": "#8a5a00"
    },
    "error": {
      "$type": "color",
      "$value": "#b42318"
    }
  },
  "font": {
    "display": {
      "$type": "fontFamily",
      "$value": [
        "Manrope"
      ]
    },
    "body": {
      "$type": "fontFamily",
      "$value": [
        "Manrope"
      ]
    },
    "mono": {
      "$type": "fontFamily",
      "$value": [
        "DM Mono"
      ]
    },
    "weight-display": {
      "$type": "fontWeight",
      "$value": 700
    },
    "tracking-display": {
      "$type": "dimension",
      "$value": "-.02em"
    },
    "case-label": {
      "$type": "string",
      "$value": "Sentence case"
    }
  },
  "control": {
    "height": {
      "$type": "dimension",
      "$value": "{core.control.40}"
    },
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.8}"
    }
  },
  "card": {
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.16}"
    }
  },
  "elevation": {
    "mode": {
      "$type": "string",
      "$value": "Hairline + faint shadow"
    }
  },
  "icons": {
    "set": {
      "$type": "string",
      "$value": "lucide"
    }
  },
  "overrides": []
}
```
