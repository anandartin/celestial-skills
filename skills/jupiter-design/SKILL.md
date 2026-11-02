---
name: jupiter-design
core: "1.0"
dials: { density: compact, shape: soft, depth: hairline, contrast: standard }
accent-scope: primary blue-grey for actions, links and data; secondary terracotta for the second series and highlights
icons: lucide
description: "Design-system skill for Jupiter Admin Kit. Use whenever creating any UI, landing page, dashboard, app screen, document, deck, report, prototype, or graphic that should look like Jupiter Admin Kit — An admin kit of 36 ready templates across eight areas — operations, billing, CRM, inventory, support, analytics, team and account — in one calm shell: Public Sans at 14px, blue-grey hairlines, 6px corners, a blue-grey primary and its complement, terracotta, as the secondary brand colour. Fonts: Public Sans, JetBrains Mono. Icons: Lucide. Triggers on 'Jupiter Admin Kit style', 'Jupiter Admin Kit look', or any request to design something for a Jupiter Admin Kit-branded product. Use it for every kind of output, not only web UI: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Jupiter Admin Kit — Design System Skill

Jupiter Admin Kit is an original admin design system with 36 ready templates across eight areas: Operations, Billing, CRM, Inventory, Support, Analytics, Team and Account (sign-in and error pages). Every area uses the same shell, components and numbers, so a new screen starts from a template rather than a blank page.

It suits internal tools and admin products first: overviews, long tables, boards, detail pages, forms and settings. It also covers the help and docs pages that sit beside them, using the same type and blue-grey.

Original brand created for Celestial. Two brand colours balance each other: polar blue-grey #507992 is the primary (buttons, links, focus, the first data series and every neutral, which are shades of it), and its complement terracotta #a8562f is the secondary (the second data series, highlights and secondary badges). Use roughly four parts blue-grey to one part terracotta; never two terracotta buttons. Status colours always come with an icon and text. Values were chosen for this skill, not taken from any template or kit.

---

## Brand Personality

| Trait | Expression |
|---|---|
| **Calm** | Two brand colours in balance: blue-grey for structure and actions, terracotta for what stands out; colour is kept for actions and data, never decoration. |
| **Exact** | Tabular figures, every number shown with its comparison, units always written. |
| **Orderly** | One shell for every area: the same sidebar, filter bar, table and detail sheet everywhere. |
| **Quietly confident** | Short labels in sentence case; one primary action per screen. |

Tone of voice: Plain operator language in sentence case: name the thing and the number ('Open requests', '12 due today'). No exclamation marks; changes written as '+4.2% on last week'.

**Logo** — the supplied mark (SVG, takes currentColor unless it carries its own fill) followed by the wordmark **Jupiter Admin Kit** set in a bold grotesk (Inter 700, −0.03em tracking). Keep clear space equal to the mark's width; never stretch, outline or recolour the mark.

Sample copy in the brand voice: eyebrow `Operations` · headline "Every admin screen, one calm kit." · body "36 ready templates — overviews, tables, boards, records, forms and account pages — in the same shell, filters and numbers." · CTA "Open the kit" · stat "1,284 requests closed this week".

---

## Color Tokens

```css
:root {
  /* Palette */
  --jupiter-page-background: #ffffff;   /* page background */
  --jupiter-card-surface: #ffffff;   /* card surface */
  --jupiter-sidebar-nav: #eef3f6;   /* sidebar / nav (raised) */
  --jupiter-muted-surface: #f3f6f8;   /* muted surface — table headers, wells */
  --jupiter-border: #dbe3e9;   /* border — decorative hairlines and dividers */
  --jupiter-ink: #1c2830;   /* ink (headings) */
  --jupiter-body-text: #34434d;   /* body text */
  --jupiter-muted-text: #586873;   /* muted text — captions, helper, placeholder */
  --jupiter-input-border: #8796a1;   /* input border — fields, checkboxes, radios (3:1) */
  --jupiter-primary-button: #507992;   /* primary button (brand blue-grey) */
  --jupiter-primary-button-hover: #3e6077;   /* primary button hover */
  --jupiter-focus-ring: #507992;   /* focus ring */
  --jupiter-accent: #507992;   /* accent — data series 1 and links */
  --jupiter-secondary-brand-colour: #a8562f;   /* secondary brand colour (terracotta) — data series 2, highlights, secondary badges */
  --jupiter-data-series-3: #6f8fa5;   /* data series 3 (light blue-grey, graphics only) */
  --jupiter-data-series-4: #2f4f63;   /* data series 4 (deep blue-grey, graphics only) */
  --jupiter-secondary-tint: #f6e9e3;   /* secondary tint (fill only) */
  --jupiter-success: #1e7a3e;   /* success — text and icons */
  --jupiter-warning: #8a5a00;   /* warning — text and icons */
  --jupiter-error: #b42318;   /* error — text and icons */

  /* Semantic roles (derived from the palette above) */
  --jupiter-bg:        #ffffff;
  --jupiter-surface:   #ffffff;
  --jupiter-band:      #f3f6f8;
  --jupiter-ink:       #1c2830;
  --jupiter-ink-2:     #34434d;
  --jupiter-muted:     #586873;
  --jupiter-line:      #dbe3e9;
  --jupiter-accent:    #507992;
  --jupiter-on-accent: #ffffff;
  --jupiter-secondary: #a8562f;
  --jupiter-button:    #507992;
  --jupiter-on-button: #ffffff;
  --jupiter-ok:        #1e7a3e;
  --jupiter-warn:      #8a5a00;
  --jupiter-bad:       #b42318;
}
```

**Palette rules**

- Page is `#ffffff`; cards and panels sit on `#ffffff`; use `#f3f6f8` for alternating bands and wells. Never drift the neutrals warmer or cooler than these.
- Text is `#1c2830` for headings, `#34434d` for body and `#586873` for captions and placeholders. Hairlines are `#dbe3e9`.
- The accent `#507992` is the primary action fill. One accent per screen.
- Status colours (`#1e7a3e` success, `#8a5a00` warning, `#b42318` danger) mean state, never decoration.
- Flat work areas. Cards are white with a 1px #dbe3e9 border; the sidebar sits one blue-grey step (#eef3f6). Menus, popovers and the detail sheet take a soft 0 6px 20px shadow at 8%.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| **Display / H1–H3** | Public Sans | 600 | letter-spacing -.02em, line-height 1.05–1.1 |
| **Body / UI / H4–H6** | Public Sans | 400 (500 for emphasis) | 15–16px, line-height 1.5 |
| **Labels / eyebrows / code** | JetBrains Mono | 400–500 | 11–12px, +0.06em tracking, uppercase eyebrows |

```css
--font-display: 'Public Sans', system-ui, sans-serif;
--font-body:    'Public Sans', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', ui-monospace, monospace;
```

Load from Google Fonts: `https://fonts.googleapis.com/css2?family=Public+Sans&family=JetBrains+Mono&display=swap`

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

Everything structural follows **Celestial core v1.0** (*Celestial core foundations* below): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Jupiter Admin Kit sits on each ladder.

| Dial | Jupiter Admin Kit | Sets |
|---|---|---|
| Density | Compact | control height 36px, padding step, base font size, table row height |
| Shape | Soft | control radius 6px, card radius 12px, chip radius |
| Depth | Hairline | elevation mode: Hairline only, border width 1px |
| Contrast | Standard | ink steps, display weight 600, accent intensity |

```css
--control-height: {core.control.36};
--radius-control: {core.radius.6};
--radius-card:    {core.radius.12};
--rule-style:     solid 1px;
```

- Accent scope: **primary blue-grey for actions, links and data; secondary terracotta for the second series and highlights** — the accent appears in this role and nowhere else.
- 6px controls, 12px cards, 1px blue-grey hairlines; no shadow on cards, a soft shadow on menus and sheets only Max content width 1280px.
- A 36px blue-grey primary button with 6px corners and white label; outline and quiet variants for secondary actions. Inputs are 36px with a 1px #8796a1 border that turns blue-grey with a 3px soft ring on focus. Tables are 40px rows with a muted header, tabular figures and a filter bar above.


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

**Primary button** — bg `#507992`, text `#ffffff`, height 36px, padding 0 16px, radius 6px, 14px Public Sans 500; hover `#3e6077`; focus-visible 2px `#507992` ring; disabled at 45% opacity.

**States** (core anatomy, brand values) — hover `#3e6077` (label 6.7:1), active `#375469` + 1px nudge, focus-visible 2px `#507992` ring offset 2px (4.7:1 on the page, never removed), disabled at 45% opacity with `aria-disabled`, loading keeps the label with `aria-busy`. Secondary (`#a8562f`) hovers to `#904a28` and presses to `#804124`; outline hovers to `#f6eeea` and presses to `#efe1da` with its border in `#974d2a`; dark hovers to `#495359`; ghost hovers to `#f1f2f3` and presses to `#e8eaea`. Focus, disabled and loading are the same for every type. Fields: hover border `#34434d`, focus border + 3px soft ring in the focus colour, error `#b42318` border plus icon and written fix, success `#1e7a3e`, disabled on `#f3f6f8`. Transitions 120ms; none under prefers-reduced-motion; 44px touch targets on mobile.

**Secondary button** — bg `#a8562f`, text `#ffffff`, same geometry. **Outline** — transparent, 1px `#a8562f` border, text `#a8562f`; hover bg `#f3f6f8`. **Ghost** — no border, hover bg `#f3f6f8`.

**Input** — height 36px, bg `#ffffff`, 1px `#8796a1`, radius 6px, placeholder `#586873`; focus border `#507992` + 3px soft ring; error border `#b42318`; helper text 12px `#586873` below, never in a tooltip.

**Select / menu** — same shell as input with a trailing chevron; menu on `#ffffff` with 6px corners and the overlay shadow; selected row on `#f3f6f8` with a check.

**Checkbox / radio / toggle** — 16px box with 4px corners (radio round), filled `#507992` when on; toggle 36×20 pill, knob white, on = `#507992`.

**Chip / badge** — 28px chip and 24px badge, radius 6px, soft tint of the semantic colour with its text colour; a dot before the label for live states.

**Card** — bg `#ffffff`, 1px `#dbe3e9`, radius 12px, padding 20–24px, shadow `none`; a heading, body copy, and at most one action.

**Table** — header row 12px uppercase mono in `#586873`, rows separated by `#dbe3e9`, numerals tabular, status as badges, row actions in a trailing ⋯ menu.

**Alert** — 1px border and soft tint of its semantic colour, 18px icon, bold first sentence, dismiss × at the end; lives in the flow, unlike a toast (dark `#1c2830` pill, bottom-centre, one undo action).

**Modal / drawer** — `#ffffff`, radius 12px, overlay shadow, 22px padding; destructive confirm uses a `#b42318` filled button; both close on Escape or a click outside.

**Navigation** — breadcrumbs with chevron separators and the current page in `#1c2830`; tabs with a 2px `#507992` underline; pagination as 30px square buttons with the current page filled `#1c2830`.

**App shell** — 52px top bar on `#ffffff` with a pill search, primary action and avatar; a 40px icon rail and a 200px sidebar with 12.5px items, the active item tinted `#e7ecf0`; the body scrolls beneath a sticky chrome.

---
## Applications

Jupiter Admin Kit is a multi-app console. One shell — 52px top bar (app name, ⌘K search, notifications, theme switcher), a 232px sidebar grouped by app, and a scrolling body — hosts every category below. Each group's first item is its dashboard; every screen is assembled from the same components above.

| App | Screens |
|---|---|
| **Operations** | Overview (dashboard), Requests (list), Request (detail), Request board (kanban), Schedule (calendar), New request (form) |
| **Billing** | Overview (dashboard), Invoices (list), Invoice (detail), New plan (form) |
| **CRM** | Pipeline (dashboard), Deals (list), Deal board (kanban), Deal (detail), New deal (form) |
| **Inventory** | Overview (dashboard), Stock (list), Item (detail), Receive stock (form) |
| **Support** | Overview (dashboard), Tickets (list), Ticket (detail), Shared inbox (inbox) |
| **Analytics** | Usage (dashboard), Reports (list), Report (detail), New report (form) |
| **Team** | Members (list), Member (detail), My tasks (todo), Settings (form) |
| **Account** | Sign in (auth), Create account (auth), Forgot password (auth), Error 404 (error), Error 500 (error) |

**Screen kinds** — *dashboard*: four KPI tiles (label, previous period, big number, signed delta) → main chart card → two half-width chart cards → a five-row table. *list*: filter chips, toolbar (search, filter, view, export, primary add), data table with checkbox column, status badges, row ⋯ menu and pagination. *detail*: header with title, status badge and actions; two-column body — items/activity on the left, summary/owner cards at 300px on the right. *form*: two-column fields in a card plus a right rail for status, toggles and organisation; Discard / Save in the header. *kanban*: columns on the band colour with white cards, tag badge, comment count and avatar. *calendar*: seven-column month grid, today as a filled ink circle, events as tinted chips. *inbox*: 320px message list + reading pane. *todo*: circle checkboxes coloured by priority, subtasks indented, due-date chip on the right. *auth*: centred 360px card on the band colour. *error*: 72px code, one-line message, Go back / Back to dashboard.

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

Admin consoles, internal tools and back offices that need many ready screens — dashboards, tables, boards, detail pages, forms, inboxes and account pages — in one consistent shell.

---

## Do / Don't

**Do** — keep to one accent per screen; set headings in Public Sans at weight 600 with -.02em tracking; use 6px controls and 12px panels everywhere; separate surfaces with tone and hairlines; let status colours mean state.

**Don't** — introduce a second accent or a second display face; mix corner radii; add drop shadows or glows; use colour for decoration; centre what the layout family sets left (or vice versa).

---

## Quick-start CSS

```css
:root{--bg:#ffffff;--surface:#ffffff;--band:#f3f6f8;--ink:#1c2830;--ink-2:#34434d;--muted:#586873;--line:#dbe3e9;--line-strong:#8796a1;--accent:#507992;--on-accent:#ffffff;--button:#507992;--on-button:#ffffff;
--display:'Public Sans', system-ui, sans-serif;--body:'Public Sans', system-ui, sans-serif;--mono:'JetBrains Mono', ui-monospace, monospace;--r:6px;--rc:12px;}
body{margin:0;background:var(--bg);color:var(--ink);font:400 16px/1.5 var(--body);-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--display);font-weight:600;letter-spacing:-.02em;line-height:1.1;margin:0}
h1{font-size:clamp(36px,5vw,64px)} h2{font-size:clamp(28px,3.4vw,40px)} h3{font-size:22px}
p{color:var(--ink-2);margin:0}
.eyebrow{font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.btn{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:var(--r);background:var(--button);color:var(--on-button);font:500 14px/1 var(--body);border:1px solid transparent;text-decoration:none;cursor:pointer}
.btn.secondary{background:transparent;color:var(--ink);border-color:var(--line-strong)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--rc);padding:22px;box-shadow:none}
.input{height:40px;border:1px solid var(--line-strong);border-radius:var(--r);background:var(--surface);padding:0 12px;font:inherit;color:var(--ink)}
.input:focus{outline:0;border-color:var(--accent);box-shadow:0 0 0 3px #e7ecf0}
.badge{display:inline-flex;align-items:center;height:24px;padding:0 10px;border-radius:var(--r);font-size:12px;font-weight:500;background:#e7ecf0;color:#486d83}
.logo{display:inline-flex;align-items:center;gap:8px;font:700 19px/1 var(--body);letter-spacing:-.03em}
```

When building for Jupiter Admin Kit: start from this CSS, keep every surface on these tokens, and let the accent carry the eye.

## Brand colours
Two brand colours balance every Jupiter Admin Kit output. **Primary** `#507992` — the primary action, the logo and the key figure. **Secondary** `#a8562f` — the secondary button (`#a8562f` fill, `#ffffff` label) and outline buttons (border `#a8562f`, label `#974d2a`), secondary badges, the second data series and secondary highlights, about one part to four of the primary; use `#a8562f` where it is text. Never give the two equal weight side by side.

**Button states** — every type has the same six states, each from its own colour: primary `#507992` → hover `#3e6077` → active `#375469`; secondary `#a8562f` → `#904a28` → `#804124`; outline fill → `#f6eeea` → `#efe1da`; ghost → `#f1f2f3` → `#e8eaea`. Focus-visible is a 2px `#507992` ring offset 2px on every type; disabled is 45% opacity with `aria-disabled`; loading keeps the label with `aria-busy`. Labels stay at 4.5:1 in every state.

## Using Jupiter Admin Kit beyond the web

Jupiter Admin Kit applies to every output. When asked for a deck, a document, a report, an email, a social post or a chart "for Jupiter Admin Kit" or "in Jupiter Admin Kit's style", build it from the tokens below — never from a default template or theme.

### Colour roles
| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Slide and page background |
| Surface | `#ffffff` | Cards, panels, table rows |
| Band | `#f3f6f8` | Section bands, divider slides, table headers |
| Ink | `#1c2830` | Headlines and body text |
| Ink 2 | `#34434d` | Secondary text |
| Muted | `#586873` | Captions, footers, axis labels |
| Line | `#dbe3e9` | Rules, borders, chart gridlines |
| Accent | `#507992` | One highlight per slide or page (primary blue-grey for actions, links and data; secondary terracotta for the second series and highlights) |
| On accent | `#ffffff` | Text on the accent |
| Secondary | `#a8562f` | Second brand colour: the second data series and secondary highlights, about one part to four of the primary |
| Success / warning / error | `#1e7a3e / #8a5a00 / #b42318` | Status only, never decoration |

### Type
- Headlines: **Public Sans**, weight 600, tracking -.02em.
- Body: **Public Sans**. Labels and code: **JetBrains Mono**.
- If a face isn't installed, use the closest system font of the same style and say so — never silently swap to a default.

### Logo on every output
Every Jupiter Admin Kit output carries the logo — never just the name typed out. Use the SVG under **Brand assets** (or a PNG exported from it at 4×); keep the mark's own colour only where it reaches 3:1 against the background; otherwise use the one-colour version — `#ffffff` on ink or dark photos, `#ffffff` on the accent, `#1c2830` for monochrome. Never place the mark on a background of its own colour. Keep clear space equal to the mark's height and never stretch, outline or recolour it otherwise.
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
- **Theme** (set it on the master so every slide inherits it): dark 1 = `#1c2830`, light 1 = `#ffffff`, dark 2 = `#34434d`, light 2 = `#f3f6f8`, accent 1–6 = `#507992`, `#3e5d70`, `#9fb5c3`, `#34434d`, `#586873`, `#d3dee4`; heading font = Public Sans, body font = Public Sans.
- **Title slide**: background `#ffffff`; headline in Public Sans 54–64 pt, ink; one-line subtitle in Public Sans 20 pt, muted; the logo at the top left with clear space equal to its own height.
- **Section divider**: full-bleed `#f3f6f8` (or `#1c2830` with `#ffffff` text); section number in JetBrains Mono.
- **Content slide**: title in Public Sans 32–40 pt; body Public Sans 18–24 pt, max six bullets; one accent highlight at most.
- **Shapes and cards**: fill `#ffffff`, 1 pt `#dbe3e9` border, corner radius 12px (about 0.13 in).
- **Charts**: series in the accent order above; gridlines `#dbe3e9`; labels `#586873`; no 3-D, no gradients.
- **Footer**: JetBrains Mono 10 pt in `#586873`: Jupiter Admin Kit · title · page number.
- When generating .pptx with code (e.g. python-pptx), write these colours and fonts into the theme and master first, then add slides from the master.

### Documents and PDF reports (Word, Google Docs, PDF)
- Page `#ffffff`, text `#1c2830`. H1 Public Sans 28 pt, H2 20 pt, H3 15 pt; body Public Sans 11 pt, line spacing 1.5.
- Table header row `#f3f6f8`, 1 pt `#dbe3e9` rules, numbers right-aligned in JetBrains Mono.
- Callouts: `#ffffff` box with a 3 pt left rule in `#507992`.
- Cover page: logo, title in Public Sans, date and owner in JetBrains Mono.

### Email, social and diagrams
- Email: 600 px column on `#ffffff`; one primary button in `#507992` with `#ffffff` text, 6px corners.
- Social: square 1080 × 1080 or 1200 × 628; headline in Public Sans; accent used once; logo bottom-left.
- Diagrams: nodes `#ffffff` with `#dbe3e9` borders and 12px corners; connectors `#586873`; the one emphasised node in `#507992`.


## Brand assets
### Logo (SVG)
Use this mark as-is: don't redraw, recolour (except to one solid colour on dark backgrounds), stretch or add effects.

```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#507992"/></svg>
```

### Fonts
- Public Sans
- JetBrains Mono


## Patterns (core v1.0)
Compositions of core components for recurring jobs. Each uses only contract tokens, so it renders in Jupiter Admin Kit and in any other brand. Jupiter Admin Kit's own signature patterns follow at the end.

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

### Jupiter Admin Kit signature patterns
- **Metric strip** — Show the few numbers that matter, each with its comparison Anatomy: A row of three or four cells divided by hairlines: label → value in tabular figures → change against the last period in status colour with an arrow. Tokens: surface-card, line, ink-muted, status-success, status-error.
- **Filter bar** — Narrow a long list without leaving it Anatomy: Search field → up to four filter chips → a saved-view menu on the right; active filters show a count and a clear button. Tokens: surface-muted, line, radius-control.
- **Detail sheet** — Open one record beside the list Anatomy: A right-hand panel 480px wide: title and status badge → key facts as a two-column list → activity log → actions pinned to the bottom. Tokens: surface-card, line, elevation-overlay.
- **Empty state with a next step** — Turn an empty screen into the first action Anatomy: A short sentence on what will appear here → one primary button → a secondary link to import or docs. Tokens: ink-muted, accent.


## Accessibility (core v1.0, WCAG 2.2 AA)
Every Jupiter Admin Kit screen, document and graphic must meet Celestial's accessibility core; this file is checked against it, your product still needs testing. Automated result for this palette: **Palette passes automated WCAG 2.2 AA checks**. Automated checks cover only part of WCAG 2.2 AA; keyboard, screen-reader and 200% zoom checks still need a person.

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

### How to use Jupiter Admin Kit's colours accessibly
- Body and small text: only colours marked Pass at 4.5:1 below. A colour that passes only at 3:1 is for large text (24px, or 18.7px bold), icons and graphics.
- Field borders and focus rings need 3:1 against the page; hairline dividers are decorative and exempt.
- Status colours always come with a word or an icon, never colour alone (A11Y-C2).
- Disabled controls are exempt from contrast but must still say they are unavailable (`aria-disabled`).

### Checks
| Check | Colours | Ratio | Needs | Result |
|---|---|---|---|---|
| ink | `#1c2830` on `#ffffff` | 15.05:1 | 4.5:1 | Pass |
| ink | `#1c2830` on `#f3f6f8` | 13.86:1 | 4.5:1 | Pass |
| body text | `#34434d` on `#ffffff` | 10.21:1 | 4.5:1 | Pass |
| body text | `#34434d` on `#f3f6f8` | 9.41:1 | 4.5:1 | Pass |
| muted text | `#586873` on `#ffffff` | 5.77:1 | 4.5:1 | Pass |
| muted text | `#586873` on `#f3f6f8` | 5.31:1 | 4.5:1 | Pass |
| input border · field border | `#8796a1` on `#ffffff` | 3.04:1 | 3:1 | Pass |
| focus ring | `#507992` on `#ffffff` | 4.68:1 | 3:1 | Pass |
| focus ring | `#507992` on `#f3f6f8` | 4.31:1 | 3:1 | Pass |
| accent · chart | `#507992` on `#ffffff` | 4.68:1 | 3:1 | Pass |
| data series 3 · chart | `#6f8fa5` on `#ffffff` | 3.42:1 | 3:1 | Pass |
| data series 4 · chart | `#2f4f63` on `#ffffff` | 8.68:1 | 3:1 | Pass |
| success · as an icon | `#1e7a3e` on `#ffffff` | 5.37:1 | 3:1 | Pass |
| success · as text | `#1e7a3e` on `#ffffff` | 5.37:1 | 4.5:1 | Pass |
| warning · as an icon | `#8a5a00` on `#ffffff` | 5.93:1 | 3:1 | Pass |
| warning · as text | `#8a5a00` on `#ffffff` | 5.93:1 | 4.5:1 | Pass |
| error · as an icon | `#b42318` on `#ffffff` | 6.57:1 | 3:1 | Pass |
| error · as text | `#b42318` on `#ffffff` | 6.57:1 | 4.5:1 | Pass |
| Primary button label | `#ffffff` on `#507992` | 4.68:1 | 4.5:1 | Pass |
| Primary button label · hover | `#ffffff` on `#3e6077` | 6.68:1 | 4.5:1 | Pass |
| Focus ring | `#507992` on `#ffffff` | 4.68:1 | 3:1 | Pass |
| Name on the accent lockup (large text) | `#ffffff` on `#507992` | 4.68:1 | 3:1 | Pass |
| Muted text | `#586873` on `#ffffff` | 5.77:1 | 4.5:1 | Pass |
| Control height | 36px | — | ≥ 24px (WCAG 2.5.8); hit area padded to 44px on touch (core) | Pass — Pad the hit area to 44 × 44px on touch screens. |
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
  "$name": "Jupiter Admin Kit",
  "core": "{core.version 1.0}",
  "dials": {
    "density": "Compact",
    "shape": "Soft",
    "depth": "Hairline",
    "contrast": "Standard"
  },
  "accent-scope": "primary blue-grey for actions, links and data; secondary terracotta for the second series and highlights",
  "surface": {
    "ground": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "raised": {
      "$type": "color",
      "$value": "#eef3f6"
    },
    "card": {
      "$type": "color",
      "$value": "#ffffff"
    },
    "muted": {
      "$type": "color",
      "$value": "#f3f6f8"
    }
  },
  "ink": {
    "primary": {
      "$type": "color",
      "$value": "#1c2830"
    },
    "body": {
      "$type": "color",
      "$value": "#34434d"
    },
    "muted": {
      "$type": "color",
      "$value": "#586873"
    }
  },
  "line": {
    "default": {
      "$type": "color",
      "$value": "#dbe3e9"
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
    "$value": "#507992"
  },
  "action": {
    "primary-bg": {
      "$type": "color",
      "$value": "#507992"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "#3e6077"
    },
    "focus-ring": {
      "$type": "color",
      "$value": "#507992"
    }
  },
  "status": {
    "success": {
      "$type": "color",
      "$value": "#1e7a3e"
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
        "Public Sans"
      ]
    },
    "body": {
      "$type": "fontFamily",
      "$value": [
        "Public Sans"
      ]
    },
    "mono": {
      "$type": "fontFamily",
      "$value": [
        "JetBrains Mono"
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
      "$value": "Sentence case"
    }
  },
  "control": {
    "height": {
      "$type": "dimension",
      "$value": "{core.control.36}"
    },
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.6}"
    }
  },
  "card": {
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.12}"
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
