---
name: mercury-design
core: "1.4"
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
  --mercury-border: #dcdfe6;   /* border — decorative hairlines and dividers */
  --mercury-ink: #14161b;   /* ink (headings) and dark panels */
  --mercury-body-text: #33373f;   /* body text */
  --mercury-muted-text: #5c6270;   /* muted text — captions, helper, placeholder */
  --mercury-input-border: #868c99;   /* input border — fields, checkboxes, radios (3:1) */
  --mercury-primary-button: #2547d0;   /* primary button (brand cobalt) */
  --mercury-secondary-brand-colour: #0e7a83;   /* secondary brand colour (teal) — second data series, secondary highlights and agent tags */
  --mercury-primary-button-hover: #1b37a6;   /* primary button hover */
  --mercury-focus-ring: #2547d0;   /* focus ring */
  --mercury-accent: #2547d0;   /* accent — actions, links and agent states */
  --mercury-cobalt-tint: #e8edfc;   /* cobalt tint — selected rows and running states (fill only) */
  --mercury-success: #1d7a4c;   /* success — text and icons */
  --mercury-warning: #8a5a00;   /* warning — text and icons */
  --mercury-error: #b42318;   /* error — text and icons */

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
  --mercury-secondary: #0e7a83;
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
- The primary brand colour `#2547d0` fills the primary action; it appears only in these roles: actions, links and agent states. One primary action per screen; the secondary `#0e7a83` balances it.
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

Everything structural follows **Celestial core v1.4** (*Celestial core foundations* below): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Mercury sits on each ladder.

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

**States** (core anatomy, brand values) — hover `#1b37a6` (label 9.8:1), active `#183092` + 1px nudge, focus-visible 2px `#2547d0` ring offset 2px (7.0:1 on the page, never removed), disabled at 45% opacity with `aria-disabled`, loading keeps the label with `aria-busy`. Secondary (`#0e7a83`) hovers to `#0c6971` and presses to `#0b5d64`; outline hovers to `#e6e9f8` and presses to `#d4dbf4` with its border in `#2547d0`; dark hovers to `#434549`; ghost hovers to `#ededef` and presses to `#e4e4e6`. Focus, disabled and loading are the same for every type. Fields: hover border `#33373f`, focus border + 3px soft ring in the focus colour, error `#b42318` border plus icon and written fix, success `#1d7a4c`, disabled on `#f1f2f5`. Transitions 120ms; none under prefers-reduced-motion; 44px touch targets on mobile.

**Secondary button** — bg `#0e7a83`, text `#ffffff`, same geometry. **Outline** — transparent, 1px `#2547d0` border, text `#0e7a83`; hover bg `#f1f2f5`. **Ghost** — no border, hover bg `#f1f2f5`.

**Input** — height 40px, bg `#ffffff`, 1px `#868c99`, radius 8px, placeholder `#5c6270`; focus border `#2547d0` + 3px soft ring; error border `#b42318`; helper text 12px `#5c6270` below, never in a tooltip.

**Select / menu** — same shell as input with a trailing chevron; menu on `#ffffff` with 8px corners and the overlay shadow; selected row on `#f1f2f5` with a check.

**Checkbox / radio / toggle** — 16px box with 4px corners (radio round), filled `#2547d0` when on; toggle 36×20 pill, knob white, on = `#2547d0`.

**Chip / badge** — 28px chip and 24px badge, radius 8px, soft tint of the semantic colour with its text colour; a dot before the label for live states.

**Card** — bg `#ffffff`, 1px `#dcdfe6`, radius 16px, padding 20px, shadow `0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06)`; a heading, body copy, and at most one action.

**Table** — header row 12px uppercase mono in `#5c6270`, rows separated by `#dcdfe6`, numerals tabular, status as badges, row actions in a trailing ⋯ menu.

**Alert** — 1px border and soft tint of its semantic colour, 18px icon, bold first sentence, dismiss × at the end; lives in the flow, unlike a toast (dark `#14161b` pill, bottom-centre, one undo action).

**Modal / drawer** — `#ffffff`, radius 16px, overlay shadow, 24px padding; destructive confirm uses a `#b42318` filled button; both close on Escape or a click outside.

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

**Do** — keep the primary for the one main action and the secondary for balance; set headings in Manrope at weight 700 with -.02em tracking; use 8px controls and 16px panels everywhere; separate surfaces with tone and hairlines; let status colours mean state.

**Don't** — introduce a third brand colour or a second display face; mix corner radii; stack heavy shadows; use colour for decoration; centre what the layout family sets left (or vice versa).

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
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--rc);padding:20px;box-shadow:0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06)}
.input{height:40px;border:1px solid var(--line-strong);border-radius:var(--r);background:var(--surface);padding:0 12px;font:inherit;color:var(--ink)}
.input:focus{outline:0;border-color:var(--accent);box-shadow:0 0 0 3px #dde2f6}
.badge{display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:var(--r);font-size:12px;font-weight:500;background:#dde2f6;color:#2547d0}
.logo{display:inline-flex;align-items:center;gap:8px;font:700 19px/1 var(--display)}
```

When building for Mercury: start from this CSS, keep every surface on these tokens, and let the primary carry the eye, with the secondary for balance.

## Brand colours
Two brand colours balance every Mercury output. **Primary** `#2547d0` — the primary action, outline buttons (border `#2547d0`, label `#2547d0`), the logo and the key figure. **Secondary** `#0e7a83` — the secondary button (`#0e7a83` fill, `#ffffff` label), secondary badges, the second data series and secondary highlights, about one part to four of the primary; use `#0e7a83` where it is text. Never give the two equal weight side by side.

**Button states** — every type has the same six states, each from its own colour: primary `#2547d0` → hover `#1b37a6` → active `#183092`; secondary `#0e7a83` → `#0c6971` → `#0b5d64`; outline fill → `#e6e9f8` → `#d4dbf4`; ghost → `#ededef` → `#e4e4e6`. Focus-visible is a 2px `#2547d0` ring offset 2px on every type; disabled is 45% opacity with `aria-disabled`; loading keeps the label with `aria-busy`. Labels stay at 4.5:1 in every state.

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
| Secondary | `#0e7a83` | Second brand colour: the second data series and secondary highlights, about one part to four of the primary |
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
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#2547d0"/></svg>
```

### Fonts
- Manrope
- DM Mono


## Components (core v1.4)
Every component's anatomy and states are core: Mercury only supplies the token values. Control sizes for Mercury: SM 32px · MD 40px · LG 48px · XL 56px; anything under 44px keeps a 44px hit area on touch. Borders are drawn inside. Disabled is 0.45 opacity with `aria-disabled`.

| Group | Component | Anatomy | Sizes | States | Keyboard and accessibility |
|---|---|---|---|---|---|
| Actions | Button | container · label · leading or trailing icon · loading indicator | SM · MD · LG · XL; hug or fill width | default · hover · active · focus-visible · disabled · loading · selected (toggle buttons) | A native button; Enter and Space; `aria-busy` while loading, `aria-pressed` for toggles (A11Y-K1, A11Y-P1) |
| Actions | Icon button | container · one icon | SM · MD · LG | as button | An accessible name from `aria-label`; 44px hit area on touch (A11Y-T1) |
| Actions | Button group | container · segments | one height for all segments | default · hover · selected · focus-visible · disabled | Arrow keys move between segments; one selected (A11Y-K1) |
| Actions | Dropdown menu | trigger · menu · items · dividers | SM · MD · LG | closed · open · item hover · item focus · item disabled | Escape closes and returns focus; arrow keys move; type-ahead (A11Y-K1, A11Y-O1) |
| Forms | Input | label · field · leading icon · trailing action · helper or error text | SM · MD · LG | default · hover · focus-visible · disabled · read-only · error · success | A visible label tied to the field; errors in text and announced; typed value kept (A11Y-N2, A11Y-E1, A11Y-S1) |
| Forms | Textarea | label · field · counter · helper or error text | SM · MD · LG (rows grow) | as input | Counter changes announced politely (A11Y-S1) |
| Forms | Select | label · trigger · value · chevron · option list | SM · MD · LG | as input, plus open | Native select first; a custom one follows the listbox pattern (A11Y-P1) |
| Forms | Search | search icon · field · clear button · result count | SM · MD · LG | empty · typing · results · no results · focus-visible | A search landmark or labelled field; Escape clears; the result count is announced (A11Y-S1, A11Y-K1) |
| Forms | Multiselect | label · field with removable tags · option list with checkboxes · count | SM · MD · LG | closed · open · option selected · focus-visible · disabled · error | Each tag's remove button names the option; the count is in text (A11Y-N2, A11Y-P1) |
| Forms | Date picker | label · input with calendar button · calendar panel (month nav, weekday row, day grid) · helper text | SM · MD · LG | default · focus-visible · open · day hover · today · selected · range · disabled day · error | Dates can always be typed; the grid moves with arrow keys, Page Up/Down for months; the format is shown (A11Y-K1, A11Y-G1, A11Y-N2) |
| Forms | File upload | drop zone · browse button · constraints text · file list with progress | SM · MD · LG | default · drag over · uploading · success · error | A real file button beside the drop zone; progress and errors announced (A11Y-G1, A11Y-S1) |
| Forms | Range | label · track · fill · thumb · value | one size | default · hover · focus-visible · active · disabled | Arrow keys step; the value is shown in text (A11Y-K1) |
| Selection | Checkbox | box · tick (checked) or dash (indeterminate) in the label colour on the fill · label · helper text | 16 · 20 · 24px | unchecked · checked · indeterminate · hover · focus-visible · disabled · error | The label is clickable; a group has a legend (A11Y-P1) |
| Selection | Radio | ring · inner dot in the brand colour when selected · label · helper text | 16 · 20 · 24px | unselected · selected · hover · focus-visible · disabled · error | Arrow keys move within the group; one selected (A11Y-K1) |
| Selection | Switch | track · thumb · label | 16 · 20 · 24px | off · on · hover · focus-visible · disabled | Takes effect at once; `role="switch"` with `aria-checked` (A11Y-U1) |
| Selection | Tags | label · optional remove button | SM · MD | default · selected (filter) · hover · focus-visible · disabled | A remove button says what it removes; colour is never the only sign of a selected tag (A11Y-C2, A11Y-N2) |
| Selection | Rating | stars (or other marks) · value · count | 12 · 16 · 20 · 24px marks | display · hover preview · selected · focus-visible · disabled · read-only | The value is in text ("4.5 out of 5, 128 reviews"); input ratings are radio groups (A11Y-C2, A11Y-I1) |
| Feedback | Alert | container · icon · title · text · action · close | one size | info · success · warning · error | Status in text and icon, not colour alone; important alerts announced (A11Y-C2, A11Y-S1) |
| Feedback | Badge | container · label · optional dot or icon | SM · MD · LG | neutral · brand · secondary · success · warning · error | Text always says the status (A11Y-C2) |
| Feedback | Progress and loading | bar · spinner · skeleton · toast | one size each | determinate · indeterminate · complete | `role="progressbar"` with a name; loading regions marked busy (A11Y-S1, A11Y-M1) |
| Feedback | Inline loading | spinner or icon · status text · retry | one size | loading · done · failed | The status text is announced; nothing moves out from under the pointer (A11Y-S1, A11Y-U1) |
| Feedback | Toast notification | icon · message · action (Undo, Retry) · close | one size | info · success · error · leaving | Announced politely; a toast with an action stays until dismissed or long enough to use it (A11Y-S1, A11Y-W1) |
| Feedback | Popover | trigger · panel with title, text and links · pointer | one size | closed · open | Opens on click or Enter, traps nothing, closes on Escape and returns focus (A11Y-O1, A11Y-K1) |
| Feedback | Tooltip | trigger · bubble | one size | hidden · shown | Shown on hover and focus, dismissable with Escape, never the only place information lives (A11Y-O1) |
| Navigation | Header and navigation menu | bar · logo · destinations · search · account | SM · MD · LG bar heights | default · hover · current · focus-visible · open (mobile menu) | A `nav` landmark; the current page has `aria-current`; a skip link comes first (A11Y-N1, A11Y-H1) |
| Navigation | Link | text · optional icon | inherits the text size | default · hover · focus-visible · visited · disabled | Underlined in body text; says where it goes (A11Y-N2, A11Y-C2) |
| Navigation | Progress indicator | steps (number · name · done, current, upcoming) · connector | one size | done · current · upcoming · error · disabled | The current step has `aria-current="step"`; states are written, not colour only (A11Y-C2, A11Y-N1) |
| Navigation | Side navigation | groups · destinations (icon · label) · current marker · collapse | one size; collapsed rail | default · hover · current · focus-visible · collapsed | A `nav` landmark; the current page has `aria-current`; the rail keeps labels as tooltips (A11Y-N1, A11Y-H1) |
| Navigation | Tree view | items · expand chevron · icon · label · indentation | compact · default | collapsed · expanded · selected · focus-visible · disabled | The tree pattern: arrow keys move, Right opens, Left closes, Home and End jump (A11Y-K1, A11Y-P1) |
| Navigation | Breadcrumb | trail · separators · current page | SM · MD · LG | default · hover · current · collapsed (overflow) | A `nav` with `aria-label`; the current item has `aria-current` (A11Y-N1) |
| Navigation | Tabs | tab list · tabs · indicator · panels | SM · MD · LG | default · hover · selected · focus-visible · disabled | Arrow keys move between tabs; one selected (A11Y-K1, A11Y-P1) |
| Navigation | Pagination | previous · pages · ellipsis · next · count | SM · MD · LG | default · hover · current · disabled | `aria-current` on the current page; previous and next are named (A11Y-N2) |
| Surfaces | Card | container · media · header · body · footer actions | SM · MD · LG padding | default · hover (interactive) · selected · focus-visible · disabled · loading | One link or button per card; the whole card is not a click trap (A11Y-K1) |
| Surfaces | Structured list | rows of label and value · optional row selection | compact · default | default · hover · selected | A description list or table, read in order (A11Y-P1) |
| Surfaces | Selectable tile | card · selection mark · title · detail | SM · MD · LG | default · hover · selected · focus-visible · disabled | Works as a radio or checkbox; the selected tile is outlined and marked, not colour only (A11Y-C2, A11Y-P1) |
| Surfaces | Code snippet | monospace block · copy button · expand | inline · single line · multi-line | default · copied · expanded | The copy button is named and says "Copied"; long lines scroll, never wrap code (A11Y-N2, A11Y-S1) |
| Surfaces | List | container · items (leading visual · title · meta · trailing action) · dividers | SM · MD · LG row heights | default · hover · selected · focus-visible · disabled · dragging · drop target | Reordering has a keyboard and button alternative to dragging (A11Y-G1) |
| Surfaces | Avatar | image or initials or icon · optional status dot · group stack | 24 · 32 · 40 · 48 · 64 · 96px | default · hover (clickable) · focus-visible | An image has alt text with the name; the status dot has text (A11Y-I1, A11Y-C2) |
| Surfaces | Accordion | item · trigger (label · chevron) · panel | SM · MD · LG | collapsed · expanded · hover · focus-visible · disabled | The trigger is a button with `aria-expanded` (A11Y-P1) |
| Surfaces | Table | header · rows · cells · sort · selection · row actions | compact · default · comfortable | default · hover · selected · sorted · loading · empty | Real table markup; sort order announced (A11Y-P1, A11Y-S1) |
| Overlays | Modal | scrim · dialog · title · body · actions · close | 320 · 480 · 600 · 800 · 1024px or full screen | closed · opening · open · closing | Focus moves in and is kept inside; Escape closes and returns focus (A11Y-K1, A11Y-O1) |
| AI (HAI) | AI label | "AI" chip with a spark icon · optional "Made by AI assistant" tag on filled fields and drafts | SM · MD | default · hover (explains what the AI did) · accepted (tag removed) | The text says "AI assistant" or "AI agent", never just "agent"; the tag stays until a person accepts the content (A11Y-C2) |
| AI (HAI) | Mode indicator | current mode (Assistive · Advisory · Autonomous) · what that means here · change link | one size | assistive · advisory · autonomous · paused | The mode is in text, not colour alone; changing it is a person's action (A11Y-C2) |
| AI (HAI) | Decision card | AI label · proposed action with exact values · reasons and sources · confidence · approve · edit · decline | one size | default · low confidence · approved · edited · declined | Nothing is committed until a person chooses; low confidence is said in words (A11Y-E3, A11Y-S1) |
| AI (HAI) | Activity and undo | list of AI actions (what · when · result) · undo or reverse · stop | compact · default | running · done · undone · failed | Stop and undo are buttons, reachable by keyboard; results are announced (A11Y-K1, A11Y-S1) |
| AI (HAI) | Standing rules | limits (amount, categories) · expiry · set by · end rules | one size | active · expiring soon · ended | Ending the rules is one step and is confirmed in text (A11Y-E3) |
| AI (HAI) | AI states | message with icon: uncertain · degraded · escalating · resolved by a person | one size | uncertain · degraded · escalating · resolved | Each state says what happens next; nothing fails silently (A11Y-S1, A11Y-C2) |
| AI (HAI) | Handover | announcement · summary of what is done and what remains (editable) · wait time · keep reading answers | one size | connecting · connected · call-back offered | The person can correct the summary; the receiving person sees the full context (A11Y-H1) |
| AI (HAI) | AI receipt | what was done · prepared by the AI · approved by whom · reference · undo or dispute | one size | default · reversed · disputed | Says who did what in words; undo or dispute links name the action (A11Y-E3) |
| Overlays | Drawer | scrim · panel · header · body · footer | 280 · 400 · 600 · 800px or full | closed · opening · open · closing | As modal; it slides in from the edge (motion respects reduced-motion) (A11Y-M1) |

Commerce parts (product price, product media, size and colour selector, store rating) are compositions of these components and belong to a brand's own patterns.

## Patterns (core v1.4)
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

### Global header
- Product switcher, current area, search (⌘K), help, notifications and account — in the same order on every page.

### Common actions
- Primary action on the right; the rest in an overflow menu in the order edit, duplicate, export, then destructive last and separated, with "…" when it asks to confirm.
- Bulk actions replace the toolbar only while something is selected and always say how many ("3 selected").

### Sign-in
- Passkey first, then email and password with Show; paste and password managers work; no memory or puzzle tests.
- An error never says which of email or password was wrong; the email stays filled in; after repeated failures offer a sign-in link.

### Filtering
- A filter panel with counts next to each option and a button that says how many results it will show.
- Applied filters are removable chips with Clear all, and the result count is written out ("Showing 170 of 212").

### Dialogs
- Only when the person must decide or must know now: one purpose, a title that says it, Escape closes and focus returns.
- Form dialogs for short input on one object; passive dialogs for information with one next step; confirmations only for what can't be undone.

### Disclosures
- "Show more" names what it reveals and becomes "Show less" in place; expandable rows open under their row with a chevron and aria-expanded.

### Empty states
- First use teaches by doing; **no results** repeats the search, suggests a fix and offers to clear filters; **couldn't load** says what failed and offers Try again; **no access** names who can grant it.

### Loading
- Skeletons keep the final layout so nothing jumps; long work shows real progress and an estimate and lets the person keep working.

### Notifications
- One notification centre: unread items are bold with a dot and the count is written out; Mark all as read; each item opens where it happened.

### Disabled and read-only
- Disabled controls always show the reason next to them; read-only values are selectable text with one clear Edit.

### Text toolbar
- Grouped formatting buttons with names; pressed styles look and announce pressed (aria-pressed); arrow keys move along the toolbar.

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


## Templates (core v1.4)

Ready-made compositions of the components and patterns above, drawn in Mercury's tokens. Build any page, screen, journey or document from the recipe that fits; swap the copy and data, keep the order, and take every value from the tokens. Every screen also needs its empty, loading and error states from *Patterns*. The starter code and documents sit beside this file in `templates/` (in the download and the public repository), and a linked copy lists each one's web address under *Files with this skill*.

### Marketing pages
Mercury's default landing layout is **Product-led**; the other two suit other briefs. Sections run top to bottom in this order.

**Product-led (default)**
1. A minimal top bar (lowercase lockup, one ink button, a menu button on phones)
2. Hero: a headline and lead, centred, with two buttons
3. A large product frame on a photo: the app shell with its side navigation and working screen (the dashboard of the first app area where the brand has them)
4. A row of customer names
5. A prompt card: a question and an example request in a pill input
6. A four-up grid: an illustration icon, a title and a line each
7. Alternating sections: a headline, a paragraph and a link beside a product frame
8. A closing call to action with two buttons
9. A footer of seven link columns under the logo

**Feature landing**
1. Top bar on the band surface (logo, four links, sign-in and the primary button)
2. Hero: an announcement badge, one headline, a lead paragraph, the primary and a secondary button, a trust line
3. Features: an eyebrow, an H2 and four numbered cards in a row
4. How it works: three steps beside a product picture in a card
5. A full-width customer quote with name and role
6. A band of four big numbers with labels
7. A row of customer names
8. Spotlight: tabs over three cards that show the product (people, money, messages)
9. What is included: a checklist grid and a money-back badge
10. One pricing card: plan name, price, what it includes and the button
11. FAQ: topic chips over an accordion with the first answer open
12. A closing card: "Still have questions?" and a contact button
13. Footer: logo and tagline, then link columns

**Editorial**
1. A slim top bar (logo, links, sign-in, ink button)
2. Hero: a large display headline and lede on the left, one big result figure with a mono label on the right
3. A hairline rule, an H2 and four numbered steps (01 / CONNECT …)
4. A band with three big numbers (the middle one may take the secondary brand colour) and a pull quote
5. Numbered argument sections: a mono label, an H3, body copy, a list of uses, and a media panel
6. A trust section: certificates and a row of customer names
7. A centred closing headline with the primary and secondary buttons
8. A footer of five link columns under the logo

### Application screens
**Shell.** A fixed top bar (menu button on small screens, logo, search, notifications, avatar); a side navigation with icons, grouped destinations, counts and the current page marked; a scrolling main area at the `wrap` width with a page header (greeting or title, a short line, a date-range button). Below 1024px the side navigation becomes a drawer behind the menu button.

**Dashboard (the default screen).** A main card with four KPIs and an area chart (this year against last); three cards in a row (a big number with a split bar, leads by day, today's tasks with checkboxes); two cards (a line chart, a donut with legend); two more (a stacked bar, a report card with sparklines and Export); then a data table with search, actions, filters, row selection, status dots, ratings and pagination. Charts use the primary, then the secondary or declared data colours.

**Screen kinds.** Each app area is built from these:
- **Dashboard**: page title and date range; a row of KPI tiles (label, value, change badge); a main chart card; two or three supporting cards (chart, list, tasks); a data table.
- **List**: title with count and the primary action; search, filter chips and a filter button; a table with checkbox column, status badges, row actions and pagination; empty, loading and no-results states.
- **Detail**: breadcrumb; title with status badge and actions; summary fields in a structured list; tabs (details, activity, files); an activity timeline; a side card with key facts.
- **Form**: title and helper text; labelled fields in groups with helper and error text; one primary and one secondary button at the foot; inline validation and a success toast.
- **Kanban**: columns by status with counts; cards with title, owner avatar and tags; an add button per column; drag handles with a keyboard alternative.
- **Calendar**: month or week grid with today marked; events as coloured chips (colour is never the only cue); a side list of upcoming items; previous, next and today controls.
- **Inbox**: a three-pane layout: folders, a message list with unread dots and badges, and the open thread with a reply box.
- **Todo**: tasks with checkboxes, tags, due dates and priority; filter tabs (all, today, upcoming, done); an add-task field.
- **Auth**: a centred card on the band surface: logo, title, fields, the primary button, a secondary link; errors written in words beside the field.
- **Error**: a centred status code, a plain-language headline and explanation, and buttons to go back or home.

### Journeys
Whole flows composed from the components in order. Each step names the screen and the core parts it uses.

**User journey**
1. **Discover**: Landing page with one headline and one primary action (marketing hero)
2. **Sign up**: Auth card: email, password, one social option (auth card)
3. **Onboard**: Welcome choice → 4-step checklist (onboarding)
4. **First task**: The core screen with a guided empty state (dashboard · empty state)
5. **Success**: Toast + next-step suggestion (feedback)

**Customer journey**
1. **Browse**: Product grid with filters (list + filters)
2. **Product**: Detail with gallery, price and add to cart (detail)
3. **Cart**: Line items, totals, promo field (table + totals)
4. **Checkout**: Address and payment in one column (form)
5. **Confirmed**: Order number, status badge, what happens next (confirmation)

**Workflow journey**
1. **Inbox**: New item arrives with a needs-attention badge (inbox)
2. **Triage**: Assign, label, set priority (form + chips)
3. **Approve**: AI-drafted action with an approval step (AI approval)
4. **Run**: Progress with live status (progress)
5. **Report**: Outcome logged, exportable (table + export)

### Screens: starter code
The same tokens as code for each platform.

- **Web**: A starter you can drop into any web project: `tokens.css` carries every colour, font, radius and shadow as CSS variables plus base components; `index.html` is a minimal page wired to it; `tailwind.config.js` maps the same tokens for Tailwind. Files: `templates/screens/web/tokens.css`, `templates/screens/web/index.html`, `templates/screens/web/tailwind.config.js`.

- **Mobile web**: Mobile-first responsive web: the same `tokens.css`, plus a one-column page with a sticky header, full-width primary action, safe-area padding and a bottom tab bar that grows to two columns at 720px. Files: `templates/screens/mobile/tokens.css`, `templates/screens/mobile/mobile.html`.

- **iOS**: SwiftUI: `Theme.swift` exposes the palette and semantic roles as `Color` extensions, the type roles as `Font` helpers, the radii, and a `PrimaryButtonStyle`; `ContentView.swift` shows a NavigationStack + List + TabView screen using them. Add the font files to the target and Info.plist. Files: `templates/screens/ios/MercuryTheme.swift`, `templates/screens/ios/ContentView.swift`.

- **Android**: Jetpack Compose / Material 3: `Color.kt` holds the palette, `Theme.kt` maps it to a `lightColorScheme`, typography and shapes, and `HomeScreen.kt` is a Scaffold with a top app bar, extended FAB and navigation bar. Register the fonts under `res/font`. Files: `templates/screens/android/Color.kt`, `templates/screens/android/Theme.kt`, `templates/screens/android/HomeScreen.kt`.

### Documents
Print and digital documents as token-driven HTML. The site's Templates tab also builds each one as a real .docx or .pptx.

- **Article** (Web, Print · A4): Long-form article: eyebrow, balanced headline, dek, byline, drop cap, pull-quote, stat callout and a data table at a 65ch measure. The print variant is A4 with two columns and `@page` margins; the .docx keeps the same hierarchy in Word styles. Files: `templates/documents/article-digital.html`, `templates/documents/article-print.html`.

- **Whitepaper** (Print · A4, Print · US Letter): Whitepaper: accent-banded cover with a hero stat, contents with dot leaders, running heads and folios, two-column body, key-finding callouts and a results table. A4 or US Letter; the .docx carries headers, footers and page numbers. Files: `templates/documents/whitepaper-a4.html`, `templates/documents/whitepaper-letter.html`.

- **Presentation** (16:9): 16:9 deck, seven slide types: title, section divider, statement with one accent phrase, bullets on hairlines, before/after two-column, data table, and an accent closing slide. The .pptx is built with the same tokens and fonts. Files: `templates/documents/presentation-16x9.html`.

- **Poster** (Print · A3, Social · 1080×1350): One big typographic statement in the display face with the last word in the accent, an accent edge band, and the brand lockup at the foot. A3 portrait for print, 1080×1350 for social; the .pptx is a single custom-size slide you can export to PDF or PNG. Files: `templates/documents/poster-a3.html`, `templates/documents/poster-1080x1350.html`.

- **Banner** (Digital ad sizes, Print · roll-up 850×2000): Digital ad set (728×90 leaderboard, 300×250 rectangle, 1080×1080 square, 1200×628 landscape) or an 850×2000 mm roll-up, each with logo, headline and button from the tokens. The .pptx has one custom-size slide per format. Files: `templates/documents/banners-digital.html`, `templates/documents/banners-print.html`.

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
This brand sits on Celestial core v1.4. The shared rules are included here so this file works on its own.

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

What's new in v1.4 (additive — no v1.0 value changed): Component size ladder: SM / MD / LG / XL around the brand control height, plus selection, icon, avatar and overlay sizes; Opacity scale for scrims, tints and disabled states; Tonal step names 50–950 for colour ramps; Paragraph spacing; Borders drawn inside the element; Colour roles: info, link, visited link, scrim, inverse; States: selected, read-only, expanded, visited, dragging and drop target; Component specs for every core component, including date picker, rating, avatar, list, link and header; v1.2: AI interaction components for the HAI framework — AI label, mode indicator, decision card, activity and undo, standing rules, AI states and handover, receipt; v1.3: search, multiselect, tags, inline loading, toast notification, popover, progress indicator, side navigation, tree view, structured list, selectable tile and code snippet; checkbox ticks, indeterminate dashes and radio dots specified; v1.4: patterns for common actions, dialogs, disclosures, empty states, filtering, global header, loading, sign-in, notifications, disabled and read-only states, and the text toolbar.

### Ladders (brands pick a step, never invent a value)
- Control height: 32 / 36 / 40 / 44px — inputs, buttons and selects share one height per size.
- Control radius: 2 / 4 / 6 / 8 / full. Card radius: 8 / 12 / 14 / 16 / 24px. Rule: card radius ≥ control radius; nested radius = outer radius − padding.
- Type scale ratio: 1.2 / 1.25 / 1.333 from a 16px base (14px in dense apps): caption, body, body-lg, h6 → h1. Line height 1.4–1.5 body, 1.0–1.2 display.
- Density: Compact / Default / Comfortable. Border width: 0.5 / 1 / 1.5px, drawn inside the element so a border never changes its size.

### Component sizes
- Controls (buttons, inputs, selects, tabs, menus): SM = control height − 8px · MD = the control height · LG = + 8px · XL = 56px for touch-first and hero actions. Anything under 44px keeps a 44px hit area on touch screens.
- Checkbox, radio and switch: 16 / 20 / 24px. Icons: 12 / 16 / 20 / 24 / 32 / 48px. Avatars: 24 / 32 / 40 / 48 / 64 / 96px.
- Modal widths: 320 / 480 / 600 / 800 / 1024px or full screen. Drawer widths: 280 / 400 / 600 / 800px or full.

### Opacity, tones and paragraphs
- Opacity: hairline 0.04 · subtle 0.08 · soft 0.12 · muted 0.16 · strong 0.24 · bold 0.32 · scrim 0.48 · heavy 0.64 · dense 0.8. Scrims use 0.48 on light themes and 0.64 on dark; disabled controls use 0.45.
- Tonal steps: every colour ramp is named 50–950 (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950); 500 is the base tone.
- Paragraph spacing: tight 4px · compact 8px · default 12px · reading 16px · long-form 24px. Body copy uses default; long reading uses reading.
- Smallest text is 12px; body text is 16px on mobile.

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

### Brand colours
Every brand declares two brand colours. The **primary** (the accent) carries the primary action, outline buttons, the logo and the key figure. The **secondary** balances it: the secondary button, secondary badges, the second data series and secondary highlights, about one part to four. A brand with no secondary of its own takes the primary's complement, made legible at 4.5:1. Never give the two equal weight side by side.

### Colour roles (added in v1.1)
Besides surfaces, ink, the two brand colours and status, every brand fills: **info** (informational state, 4.5:1), **link** and **visited link**, **scrim** behind modals and drawers, and an **inverse** surface and ink for tooltips and toasts. Without values of its own a brand gets them from its tokens.

### Component states
Every component specifies the states that apply to it: default, hover, focus-visible, active, disabled, loading, error (inputs), success (inputs), selected, read-only (inputs), expanded / open, visited (links), dragging / drop target. One name for each: *default* (not enabled), *active* (not pressed). Core defines which token each state reads; brands only supply the token values.

### Button types and states
Five types — primary, secondary, dark, outline and ghost — share one state model, each from its own colour: hover one step deeper, active one step further with a 1px nudge (outline and ghost tint their own colour instead), focus-visible a 2px ring offset 2px, disabled 45% opacity with `aria-disabled`, loading keeps the label with `aria-busy`. Labels stay at 4.5:1 in every state. A brand whose secondary button is an outline says so (`secondaryButton: outline`); its secondary colour then becomes an accent button.

### Logo
The mark keeps its own colour only where it reaches 3:1 against the background; otherwise it is one solid colour. A brand's own dark-background logo, or the colour its guidelines give for dark, is used on ink and dark screens. Without a supplied logo a brand uses a placeholder (an initial tile) and says so.

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
| Component size ladder (SM / MD / LG / XL; selection 16 / 20 / 24px) | Locked | Core | Nothing — follows the control height |
| Opacity scale and tonal step names | Locked | Core | Nothing |
| Borders drawn inside the element | Locked | Core | Nothing |
| Button state model (every type: hover, active, focus, disabled, loading) | Locked | Core | Colours only |
| Two brand colours (primary + secondary; outline buttons take the primary) | Locked | Core | The two values |
| Logo legibility (3:1 on every background; dark-background version) | Locked | Core | Logo files and colours |
| Motion durations (120 / 200 / 320ms) | Locked | Core | Easing curve choice |
| Z-index scale | Locked | Core | Nothing |
| Control height | Tunable | Brand picks step | 32 / 36 / 40 / 44px |
| Control radius | Tunable | Brand picks step | 2 / 4 / 6 / 8px / full |
| Card radius | Tunable | Brand picks step | 8 / 12 / 14 / 16 / 24px |
| Type scale ratio | Tunable | Brand picks step | 1.200 / 1.250 / 1.333 |
| Density (padding step) | Tunable | Brand picks step | Compact / Default / Comfortable |
| Border width | Tunable | Brand picks step | 0.5 / 1 / 1.5px |
| Colour palette | Free | Brand | Any, mapped to semantic roles, with a primary and a secondary brand colour |
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
  "core": "1.4",
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
    "input": {
      "$type": "color",
      "$value": "#868c99"
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
  "secondary": {
    "$type": "color",
    "$value": "#0e7a83"
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
    "primary-active": {
      "$type": "color",
      "$value": "#183092"
    },
    "secondary-bg": {
      "$type": "color",
      "$value": "#0e7a83"
    },
    "secondary-hover": {
      "$type": "color",
      "$value": "#0c6971"
    },
    "secondary-active": {
      "$type": "color",
      "$value": "#0b5d64"
    },
    "outline-hover": {
      "$type": "color",
      "$value": "#e6e9f8"
    },
    "ghost-hover": {
      "$type": "color",
      "$value": "#ededef"
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
    },
    "info": {
      "$type": "color",
      "$value": "#2f62d0"
    }
  },
  "link": {
    "default": {
      "$type": "color",
      "$value": "#2547d0"
    },
    "visited": {
      "$type": "color",
      "$value": "#0e7a83"
    }
  },
  "overlay": {
    "scrim": {
      "$type": "color",
      "$value": "rgba(20,22,27,0.48)"
    }
  },
  "inverse": {
    "surface": {
      "$type": "color",
      "$value": "#14161b"
    },
    "ink": {
      "$type": "color",
      "$value": "#fbfbfc"
    }
  },
  "size": {
    "control-sm": {
      "$type": "dimension",
      "$value": "32px"
    },
    "control-md": {
      "$type": "dimension",
      "$value": "40px"
    },
    "control-lg": {
      "$type": "dimension",
      "$value": "48px"
    },
    "control-xl": {
      "$type": "dimension",
      "$value": "56px"
    },
    "selection-sm": {
      "$type": "dimension",
      "$value": "16px"
    },
    "selection-md": {
      "$type": "dimension",
      "$value": "20px"
    },
    "selection-lg": {
      "$type": "dimension",
      "$value": "24px"
    },
    "icon-12": {
      "$type": "dimension",
      "$value": "12px"
    },
    "icon-16": {
      "$type": "dimension",
      "$value": "16px"
    },
    "icon-20": {
      "$type": "dimension",
      "$value": "20px"
    },
    "icon-24": {
      "$type": "dimension",
      "$value": "24px"
    },
    "icon-32": {
      "$type": "dimension",
      "$value": "32px"
    },
    "icon-48": {
      "$type": "dimension",
      "$value": "48px"
    },
    "avatar-24": {
      "$type": "dimension",
      "$value": "24px"
    },
    "avatar-32": {
      "$type": "dimension",
      "$value": "32px"
    },
    "avatar-40": {
      "$type": "dimension",
      "$value": "40px"
    },
    "avatar-48": {
      "$type": "dimension",
      "$value": "48px"
    },
    "avatar-64": {
      "$type": "dimension",
      "$value": "64px"
    },
    "avatar-96": {
      "$type": "dimension",
      "$value": "96px"
    }
  },
  "opacity": {
    "hairline": {
      "$type": "number",
      "$value": 0.04
    },
    "subtle": {
      "$type": "number",
      "$value": 0.08
    },
    "soft": {
      "$type": "number",
      "$value": 0.12
    },
    "muted": {
      "$type": "number",
      "$value": 0.16
    },
    "strong": {
      "$type": "number",
      "$value": 0.24
    },
    "bold": {
      "$type": "number",
      "$value": 0.32
    },
    "scrim": {
      "$type": "number",
      "$value": 0.48
    },
    "heavy": {
      "$type": "number",
      "$value": 0.64
    },
    "dense": {
      "$type": "number",
      "$value": 0.8
    }
  },
  "paragraph": {
    "tight": {
      "$type": "dimension",
      "$value": "4px"
    },
    "compact": {
      "$type": "dimension",
      "$value": "8px"
    },
    "default": {
      "$type": "dimension",
      "$value": "12px"
    },
    "reading": {
      "$type": "dimension",
      "$value": "16px"
    },
    "long-form": {
      "$type": "dimension",
      "$value": "24px"
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
      "$value": "40px",
      "$extensions": {
        "celestial": {
          "core-step": "control.40"
        }
      }
    },
    "radius": {
      "$type": "dimension",
      "$value": "8px",
      "$extensions": {
        "celestial": {
          "core-step": "radius.8"
        }
      }
    }
  },
  "card": {
    "radius": {
      "$type": "dimension",
      "$value": "16px",
      "$extensions": {
        "celestial": {
          "core-step": "radius.16"
        }
      }
    },
    "padding": {
      "$type": "dimension",
      "$value": "20px"
    },
    "shadow": {
      "$type": "shadow",
      "$value": "0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(0,0,0,.06)"
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
