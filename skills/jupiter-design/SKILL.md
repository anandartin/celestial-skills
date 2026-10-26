---
name: jupiter-design
core: "1.0"
dials: { density: compact, shape: soft, depth: hairline, contrast: standard }
accent-scope: data and links
icons: lucide
overrides: []
description: "Design-system skill for Jupiter, an original multi-app admin-console brand: Inter 14px UI, white canvas with a #fafafa sidebar, #e5e5e5 hairlines, 8px black buttons, 14px cards, a five-step blue chart scale, Lucide icons, and one shell shared by Ecommerce, Project Management, Payment Processor, Todo, Developers and Pages apps. Use for any Jupiter-branded dashboard, admin screen, page, doc, deck or graphic. Use it for every kind of output, not only web UI: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Jupiter — Design System Skill

Jupiter is a neutral, data-dense admin design system for teams that run several operations from one console: a storefront, a project board, a payment ledger and a personal task list all share the same shell. It is an original brand — never reference or copy any real company's site, kit or copy.

The canvas is pure white, the sidebar a whisper darker at `#fafafa`, and every division is a 1px `#e5e5e5` hairline. Inter carries every role at 14px; headings are the same face at 600. The only colour on a screen is the five-step blue scale that charts and links use, plus green / amber / red for status. Everything else is grey, so the numbers are what you read first.

---

## Brand Personality

| Trait | Expression |
|---|---|
| **Neutral** | White canvas, `#fafafa` sidebar, black text. No brand colour in the chrome — the blue scale belongs to data. |
| **Data-dense** | 14px type, 16px card padding, KPI tiles with previous-period context, tables that show 10 rows above the fold. |
| **Composable** | Every screen is assembled from the same shadcn/ui-style parts: card, button, input, badge, table, tabs, sheet, dialog. |
| **Consistent across apps** | Ecommerce, project management, payments and todo share one shell, one nav pattern and one component set. |
| **Quiet chrome** | Hairlines instead of shadows; the sidebar collapses to icons; the header holds only search, notifications and theme. |

Tone of voice: plain operator language — "Monthly revenue", "Orders fulfilled", "Issues assigned". Sentence case everywhere, no exclamation marks, deltas written as "+27.9% vs last month". Write original copy in this voice; never reuse lines from an existing product.

**Logo** — a solid blue disc (`#0062fb`, 24–26px) followed by the wordmark **Jupiter** set in a bold grotesk (Inter 700, −0.03em tracking). In the app header the wordmark carries a second line "Admin console" in 11px muted grey. On dark surfaces the disc stays blue. Never outline, stretch or recolour the disc.

Sample copy: headline "One console for everything you run." · body "Storefront, projects, payments and tasks in a single admin shell — same navigation, same components, same numbers you can trust." · CTA "Open the console" · stat "21,847 orders fulfilled this month".

---

## Color Tokens

```css
:root {
  /* Surfaces */
  --jupiter-background:      #ffffff;   /* page / card canvas */
  --jupiter-sidebar:         #fafafa;   /* sidebar, popover ground */
  --jupiter-muted:           #f5f5f5;   /* secondary surface, active nav row, kanban column */
  --jupiter-border:          #e5e5e5;   /* every hairline, input border */

  /* Ink */
  --jupiter-foreground:      #0a0a0a;   /* headings, body */
  --jupiter-primary:         #171717;   /* primary button fill, active pagination */
  --jupiter-primary-fg:      #fafafa;
  --jupiter-muted-fg:        #737373;   /* captions, table headers, placeholders */
  --jupiter-ring:            #a1a1a1;   /* focus ring */

  /* Data — the only hue in the system */
  --jupiter-chart-1:         #7ec6ff;
  --jupiter-chart-2:         #0083ff;
  --jupiter-chart-3:         #0062fb;   /* also links and active data states */
  --jupiter-chart-4:         #004de5;
  --jupiter-chart-5:         #0040b8;

  /* Status */
  --jupiter-success:         #16a34a;
  --jupiter-warning:         #f59e0b;
  --jupiter-destructive:     #eb0005;
}
```

**Palette rules**

- Greys are pure neutral (R=G=B). Never warm, never blue-tinted. Elevation is a background step (`#ffffff` → `#fafafa` → `#f5f5f5`) plus a hairline, never a shadow.
- Blue is for data and links only: chart series, sparklines, the active data point, a text link. Buttons stay `#171717`; nav highlights stay `#f5f5f5`.
- Status colours mean state: green for succeeded / active / paid / done, amber for pending / low stock / in review, red for failed / refunded / out of stock. Always shown as a soft-tinted badge, never as a filled surface.
- Popovers, dropdowns and the ⌘K palette get the one shadow in the system: `0 4px 12px rgba(0,0,0,.08)`.
- Dark mode inverts the steps (`#0a0a0a` canvas, `#171717` cards, `#262626` borders, `#fafafa` text) and keeps the same blue scale.

---

## Typography

Inter for every UI role, Geist Mono for code and IDs — both on Google Fonts (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`).

| Role | Font | Size / line | Weight | Notes |
|---|---|---|---|---|
| Page title | Inter | 20px / 1.2 | 600 | −0.01em; one per screen |
| Card title | Inter | 14px / 1.3 | 600 | sits beside a 16px icon |
| KPI number | Inter | 26–28px / 1.1 | 600 | tabular numerals, −0.02em |
| Body / table cell | Inter | 14px / 1.45 | 400 (500 for the primary cell) | |
| Caption / previous value | Inter | 12px / 1.3 | 400 | `#737373` |
| Sidebar item | Inter | 13px / 1 | 400 (500 when active) | |
| Section label | Inter | 11px / 1 | 500 | `#737373`, sentence case, never uppercase |
| Code / IDs | Geist Mono | 12–13px | 400 | `txn_9f3a…c21`, `SKU-1042` |

**Typography rules** — no uppercase labels anywhere; hierarchy comes from size and grey level, not caps or colour. Numbers use tabular figures and carry their unit (`$189,540.75`, `+27.9%`, `38 h 12 m`). Headings never exceed 20px inside the console; marketing pages may go to 56–64px at 600.

---

## Shape and density — dials on the core ladders

Everything structural follows **Celestial core v1.0** (`core/foundations.md`): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Jupiter sits on each ladder.

| Dial | Jupiter | Sets |
|---|---|---|
| Density | Compact | control height **36px** (32px small, 40px large), 16px card padding, 14px base type, 10 table rows above the fold |
| Shape | Soft | control radius **8px**, card radius **14px**, 16px dialogs |
| Depth | Hairline | 1px `#e5e5e5` on every edge; the one shadow is `0 4px 12px rgba(0,0,0,.08)` on popovers (level 3+) |
| Contrast | Standard | `#0a0a0a` on white, headings at 600, blue data scale at full strength |

```css
--control-height: {core.control.36};
--radius-control: {core.radius.8};
--radius-card:    {core.radius.14};
--rule-style:     solid 1px;
```

- Accent scope: **data and links** — the blue scale appears in charts, sparklines, active data points and text links; buttons stay `#171717`.
- Max content width 1280px. Shell: 52px header + 256px sidebar fixed, body scrolls. Detail and form screens split `1fr 300px`.

No overrides — every tunable value sits on a core step.

---

## Components

**Primary button** — bg `#171717`, text `#fafafa`, height 36px (32px small, 40px large), padding 0 12px, radius 8px, 14px Inter 500, leading 16px icon; hover `#262626`; focus 2px ring `#a1a1a1` offset 2px. **Outline** — transparent, 1px `#e5e5e5`, text `#0a0a0a`, hover bg `#f5f5f5`. **Ghost** — no border, hover bg `#f5f5f5`. **Destructive** — bg `#eb0005`, white text. **Icon button** — 32×32, outline or ghost, one 16px glyph.

**Input / select / textarea** — height 36px, 1px `#e5e5e5`, radius 8px, 14px text, placeholder `#737373`; focus border `#a1a1a1` + 2px ring; select adds a trailing chevron-down; textarea 96px min. Labels 13px 500 above the field, helper text 12px muted below.

**Checkbox / radio / switch** — 16px, 4px corners (radio round), filled `#171717` when on; switch 36×20 with a white knob, on = `#171717` (blue only when it means a live data state).

**Badge** — 22px, 11px 500, radius 8px, soft tint of its status colour (`#dcfce7` / `#16a34a`, `#fef3c7` / `#b45309`, `#fee2e2` / `#b91c1c`); neutral badge `#f5f5f5` / `#404040`. Used for order, payment, stock and issue status.

**Card** — white, 1px `#e5e5e5`, radius 14px, padding 16px, no shadow; header row = 16px icon in a 32px muted tile + 14px 600 title + optional trailing action or legend.

**KPI tile** — a card stacking: label with a 13px icon → "previous month" value in 12px muted → 26px number → signed delta in green or red with ↗ / ↘ and "vs last month".

**Chart card** — big number and a small caps-free label, then an area or line chart using chart-3 for the current series and chart-1 for the comparison; dashed `#e5e5e5` gridlines; 11px muted axis labels. Bars use chart-1…5 in order; donuts are 14px strokes with the legend at right.

**Data table** — toolbar (240px search, Filter, View, Export, primary Add), checkbox column, 12px muted 500 header, 14px rows with a 500 first cell, monospace IDs, status badges, trailing ⋯ menu; footer "0 of n rows selected", rows-per-page select, page x of y and chevron buttons.

**Kanban** — columns on `#f5f5f5` with a coloured status dot, count badge and +; cards white 12px radius with title, tag badge, comment count and a 20px avatar.

**Calendar** — seven-column month grid with hairline cells, today as a filled `#171717` circle, events as 11px tinted chips in the chart blues.

**Inbox** — 320px list (avatar, name, time, one-line preview, unread in 600) beside a reading pane with attachment chips and a reply input.

**Todo row** — circle checkbox coloured by priority (red high, amber medium, grey low), title, muted project line, indented subtasks, due-date chip at the right.

**Auth card** — 360px white card on `#f5f5f5`, logo centred, 18px title, 36px fields, full-width primary button, "or continue with" divider, two outline social buttons.

**Error page** — 72px 600 code, 20px message, one-line explanation, Go back (outline) + Back to dashboard (primary).

**Command palette (⌘K)** — 520px dialog, 16px radius, search row, grouped results by app, popover shadow.

---

## Applications

Jupiter is a multi-app console. One shell hosts every category below; each group's first item is its dashboard and every screen is assembled from the components above.

| App | Screens |
|---|---|
| **Ecommerce** | Dashboard · Product list · Product detail · Add / edit product · Orders · Order detail · Customers · Customer detail · Shipments · Shipping label |
| **Project Management** | Dashboard · Projects · Project detail · Teams · Members · Issue list · Issue kanban · Issue calendar · Issue Gantt · Issue spreadsheet · Issue detail · Inbox |
| **Payment Processor** | Dashboard · Transactions · Transaction detail · Customers · Customer detail · Subscriptions · Create subscription · Invoices · Create invoice · Invoice detail · Webhooks · Payment workflow |
| **Todo** | All tasks · Today · Upcoming · Important · Projects · Activity · Settings · Trash · Notifications |
| **Developers** | Overview · API keys · Webhooks · Events & logs |
| **Pages** | Login · Register · Forgot password · 401 · 403 · 404 · 500 · 503 · Settings (general, profile, billing, plans, connected apps, notifications) |

**Screen recipes** — *dashboard*: 4 KPI tiles → main chart card → two half-width chart cards → 5-row table. *list*: filter chips (All / Active / Pending / Archived) → toolbar → data table → pagination. *detail*: header (title, subtitle with status, Edit / ⋯ / primary action) → `1fr 300px`: items table + activity timeline on the left; owner card, summary rows and a "needs attention" note on the right. *form*: header with Discard / Save → two-column fields in a card + a media drop zone; right rail with visibility select, switches and organisation selects. *kanban*, *calendar*, *inbox*, *todo*, *auth*, *error* as specified under Components.

---

## Icons — Lucide

Use **[Lucide](https://lucide.dev/)** — ISC licensed, free for commercial use, no attribution required. It is the shadcn/ui default and matches Jupiter's 2px line weight.

- **Size:** 16px in buttons, inputs, nav and card headers; 13–14px inside badges and KPI labels; 20–24px in empty states; 40px in feature wells.
- **Colour:** `currentColor` — `#0a0a0a` beside text, `#737373` for secondary controls and table headers. Never blue on their own.
- **Install:** `npm i lucide-react` → `import { LayoutDashboard } from "lucide-react"` → `<LayoutDashboard size={16} />`; or inline SVGs from `lucide-static/icons/*.svg`.
- **Core set:** layout-dashboard, shopping-bag, package, shopping-cart, truck, users, user, kanban, list, calendar, inbox, credit-card, receipt, wallet, repeat, webhook, key, terminal, activity, list-todo, settings, search, bell, sun, moon, plus, pencil, trash-2, funnel, sliders-horizontal, download, upload, send, check, x, chevron-down, chevron-right, chevron-left, chevrons-up-down, ellipsis, panel-left, info, triangle-alert, circle-check, circle-alert, trending-up, trending-down, external-link, log-out.

---

## Signature patterns

Jupiter extends core with four patterns, each built from contract tokens only (see `patterns.md`): **KPI tile** (icon + label → previous-period value → 26px number → signed delta), **App suite shell** (52px header with app name and ⌘K, 256px sidebar grouped by app, scrolling body), **Command palette** (520px dialog, results grouped by app, first row selected) and **Status badge system** (22px soft-tinted badge: green succeeded / amber pending / red failed / neutral other).

---

## Interaction states and accessibility

Anatomy and states are locked by Celestial core v1.0; this brand supplies only the values. Every component specifies default, hover, focus-visible, active, disabled and loading; fields add error and success.

| State | Primary button | Secondary / ghost | Field |
|---|---|---|---|
| Hover | fill `#454545` | fill one neutral step darker, border to body ink | border to body ink |
| Active | one further step + 1px nudge | one further neutral step | — |
| Focus-visible | 2px `#7b7b7b (the #a1a1a1 ring darkened to pass 3:1)` ring, 2px offset (4.2:1 on the page) — never removed | same ring | border + 3px soft ring in the focus colour |
| Disabled | 45% opacity, `aria-disabled="true"`, no pointer events | same | muted fill, legible text |
| Loading | spinner + label kept, `aria-busy="true"` | same | — |
| Error / success | — | — | status border + icon + written message (never colour alone) |

Labels stay at 4.5:1 or better on every fill, focus rings at 3:1 or better against the page, touch targets 44px on mobile, transitions 120ms and none under `prefers-reduced-motion`.

---

## Do / Don't

**Do** — keep every surface on the three neutral steps and one hairline; give every KPI its previous value and a signed delta; use 8px controls and 14px cards everywhere; reserve blue for charts and links; badge every status; group the sidebar by app; write sentence-case labels.

**Don't** — add a brand colour to buttons, nav or headers; use shadows on cards; use uppercase labels or eyebrows; mix radii; put more than one primary button in a header; let a table exceed one status colour system; reuse copy, names or screenshots from any real product.

---

## Quick-start CSS

```css
:root{--bg:#fff;--side:#fafafa;--muted:#f5f5f5;--line:#e5e5e5;--ink:#0a0a0a;--primary:#171717;--muted-fg:#737373;--ring:#a1a1a1;
--c1:#7ec6ff;--c2:#0083ff;--c3:#0062fb;--c4:#004de5;--c5:#0040b8;--ok:#16a34a;--warn:#f59e0b;--bad:#eb0005;
--sans:'Inter',system-ui,sans-serif;--mono:'Geist Mono',ui-monospace,monospace;--r:8px;--rc:14px;}
body{margin:0;background:var(--bg);color:var(--ink);font:400 14px/1.45 var(--sans);-webkit-font-smoothing:antialiased}
h1{font-size:20px;font-weight:600;letter-spacing:-.01em;margin:0}
.shell{display:grid;grid-template-columns:256px 1fr;grid-template-rows:52px 1fr;height:100vh}
.top{grid-column:1/-1;display:flex;align-items:center;gap:12px;padding:0 16px;border-bottom:1px solid var(--line)}
.side{background:var(--side);border-right:1px solid var(--line);padding:8px;overflow:auto}
.side .grp{font-size:11px;color:var(--muted-fg);font-weight:500;padding:12px 8px 4px}
.side a{display:flex;align-items:center;gap:8px;height:32px;padding:0 8px;border-radius:var(--r);font-size:13px;color:var(--ink);text-decoration:none}
.side a.on{background:var(--muted);font-weight:500}
.main{padding:16px 24px;overflow:auto;display:grid;gap:16px;align-content:start}
.btn{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px;border-radius:var(--r);background:var(--primary);color:#fafafa;font:500 14px/1 var(--sans);border:1px solid transparent;cursor:pointer}
.btn.outline{background:transparent;color:var(--ink);border-color:var(--line)}.btn.outline:hover{background:var(--muted)}
.btn:focus-visible{outline:2px solid var(--ring);outline-offset:2px}
.input{height:36px;border:1px solid var(--line);border-radius:var(--r);padding:0 12px;font:inherit;background:#fff}
.input:focus{outline:0;border-color:var(--ring);box-shadow:0 0 0 2px #fff,0 0 0 4px var(--ring)}
.card{background:#fff;border:1px solid var(--line);border-radius:var(--rc);padding:16px}
.kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.kpi small{display:block;color:var(--muted-fg);font-size:12px}.kpi b{display:block;font-size:26px;font-weight:600;letter-spacing:-.02em;margin:4px 0 2px;font-variant-numeric:tabular-nums}
.delta.up{color:var(--ok)}.delta.down{color:var(--bad)}
.badge{display:inline-flex;align-items:center;height:22px;padding:0 8px;border-radius:var(--r);font-size:11px;font-weight:500;background:var(--muted);color:#404040}
.badge.ok{background:#dcfce7;color:var(--ok)}.badge.warn{background:#fef3c7;color:#b45309}.badge.bad{background:#fee2e2;color:#b91c1c}
table{width:100%;border-collapse:collapse;font-size:14px}th{font-size:12px;font-weight:500;color:var(--muted-fg);text-align:left;padding:10px 12px;border-bottom:1px solid var(--line)}td{padding:12px;border-bottom:1px solid var(--line)}
.logo{display:inline-flex;align-items:center;gap:8px;font:700 15px/1 var(--sans);letter-spacing:-.03em}
.logo::before{content:"";width:24px;height:24px;border-radius:50%;background:var(--c3)}
```

When building for Jupiter: start from this shell, keep everything grey-on-white with hairlines, badge every status, and let the blue scale appear only where there is data to read.

## Using Jupiter beyond the web

Jupiter applies to every output. When asked for a deck, a document, a report, an email, a social post or a chart "for Jupiter" or "in Jupiter's style", build it from the tokens below — never from a default template or theme.

### Colour roles
| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Slide and page background |
| Surface | `#ffffff` | Cards, panels, table rows |
| Band | `#f5f5f5` | Section bands, divider slides, table headers |
| Ink | `#0a0a0a` | Headlines and body text |
| Ink 2 | `#4f4f4f` | Secondary text |
| Muted | `#6c6c6c` | Captions, footers, axis labels |
| Line | `#e5e5e5` | Rules, borders, chart gridlines |
| Accent | `#0062fb` | One highlight per slide or page (data and links) |
| On accent | `#ffffff` | Text on the accent |
| Success / warning / error | `#16a34a / #f59e0b / #eb0005` | Status only, never decoration |

### Type
- Headlines: **Inter**, weight 600, tracking -.02em.
- Body: **Inter**. Labels and code: **Geist Mono**.
- If a face isn't installed, use the closest system font of the same style and say so — never silently swap to a default.

### Logo on every output
Every Jupiter output carries the logo — never just the name typed out. Use the SVG under **Brand assets** (or a PNG exported from it at 4×); on dark or accent backgrounds use the one-colour version in `#ffffff` / `#ffffff`. Keep clear space equal to the mark's height and never stretch, outline or recolour it otherwise.
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
- **Theme** (set it on the master so every slide inherits it): dark 1 = `#0a0a0a`, light 1 = `#ffffff`, dark 2 = `#4f4f4f`, light 2 = `#f5f5f5`, accent 1–6 = `#0062fb`, `#0443a7`, `#73a9fd`, `#4f4f4f`, `#6c6c6c`, `#bfd8fe`; heading font = Inter, body font = Inter.
- **Title slide**: background `#ffffff`; headline in Inter 54–64 pt, ink; one-line subtitle in Inter 20 pt, muted; the logo at the top left with clear space equal to its own height.
- **Section divider**: full-bleed `#f5f5f5` (or `#0a0a0a` with `#ffffff` text); section number in Geist Mono.
- **Content slide**: title in Inter 32–40 pt; body Inter 18–24 pt, max six bullets; one accent highlight at most.
- **Shapes and cards**: fill `#ffffff`, 1 pt `#e5e5e5` border, corner radius 14px (about 0.15 in).
- **Charts**: series in the accent order above; gridlines `#e5e5e5`; labels `#6c6c6c`; no 3-D, no gradients.
- **Footer**: Geist Mono 10 pt in `#6c6c6c`: Jupiter · title · page number.
- When generating .pptx with code (e.g. python-pptx), write these colours and fonts into the theme and master first, then add slides from the master.

### Documents and PDF reports (Word, Google Docs, PDF)
- Page `#ffffff`, text `#0a0a0a`. H1 Inter 28 pt, H2 20 pt, H3 15 pt; body Inter 11 pt, line spacing 1.5.
- Table header row `#f5f5f5`, 1 pt `#e5e5e5` rules, numbers right-aligned in Geist Mono.
- Callouts: `#ffffff` box with a 3 pt left rule in `#0062fb`.
- Cover page: logo, title in Inter, date and owner in Geist Mono.

### Email, social and diagrams
- Email: 600 px column on `#ffffff`; one primary button in `#0062fb` with `#ffffff` text, 8px corners.
- Social: square 1080 × 1080 or 1200 × 628; headline in Inter; accent used once; logo bottom-left.
- Diagrams: nodes `#ffffff` with `#e5e5e5` borders and 14px corners; connectors `#6c6c6c`; the one emphasised node in `#0062fb`.


## Brand assets
### Logo (SVG)
Use this mark as-is: don't redraw, recolour (except to one solid colour on dark backgrounds), stretch or add effects.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#0062fb"/></svg>
```

### Fonts
- Inter
- Geist Mono


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
  "$name": "Jupiter",
  "core": "{core.version 1.0}",
  "dials": {
    "density": "Compact",
    "shape": "Soft",
    "depth": "Hairline",
    "contrast": "Standard"
  },
  "accent-scope": "data and links",
  "surface": {
    "ground": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "raised": {
      "$type": "color",
      "$value": "#fafafa"
    },
    "card": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "muted": {
      "$type": "color",
      "$value": "#f5f5f5"
    }
  },
  "ink": {
    "primary": {
      "$type": "color",
      "$value": "#0a0a0a"
    },
    "body": {
      "$type": "color",
      "$value": "#4f4f4f"
    },
    "muted": {
      "$type": "color",
      "$value": "#6c6c6c"
    }
  },
  "line": {
    "default": {
      "$type": "color",
      "$value": "#e5e5e5"
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
    "$value": "#0062fb"
  },
  "action": {
    "primary-bg": {
      "$type": "color",
      "$value": "#0062fb"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "#0157de"
    },
    "focus-ring": {
      "$type": "color",
      "$value": "#7b7b7b"
    }
  },
  "status": {
    "success": {
      "$type": "color",
      "$value": "#16a34a"
    },
    "warning": {
      "$type": "color",
      "$value": "#f59e0b"
    },
    "error": {
      "$type": "color",
      "$value": "#eb0005"
    }
  },
  "font": {
    "display": {
      "$type": "fontFamily",
      "$value": [
        "Inter"
      ]
    },
    "body": {
      "$type": "fontFamily",
      "$value": [
        "Inter"
      ]
    },
    "mono": {
      "$type": "fontFamily",
      "$value": [
        "Geist Mono"
      ]
    },
    "weight-display": {
      "$type": "fontWeight",
      "$value": 600
    },
    "tracking-display": {
      "$type": "dimension",
      "$value": "-.02em"
    },
    "case-label": {
      "$type": "string",
      "$value": "Sentence"
    }
  },
  "control": {
    "height": {
      "$type": "dimension",
      "$value": "{core.control.36}"
    },
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.8}"
    }
  },
  "card": {
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.14}"
    }
  },
  "elevation": {
    "mode": {
      "$type": "string",
      "$value": "Hairline only"
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
