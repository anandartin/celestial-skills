---
name: mars-design
core: "1.0"
dials: { density: comfortable, shape: sharp, depth: flat, contrast: quiet }
accent-scope: stat numbers
icons: phosphor
overrides:
  - token: rule-style
    value: dashed
    reason: Dashed hairlines are a Mars identity mark
description: "Design-system skill for Mars, an original AI customer-agent brand: IBM Plex Serif 300 headlines on warm paper neutrals, one orange accent for numbers, black 4px buttons, mono eyebrows, dashed rules, Phosphor icons. Use for any Mars-branded UI, page, doc, deck or graphic. Use it for every kind of output, not only web UI: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Mars — Design System Skill

Mars is an AI customer agent (an original brand — never reference or copy any real company's site or copy). Its site sells a serious product with an **editorial, paper-and-ink** aesthetic: light serif display type, warm off-white surfaces, near-black ink, one hot-orange accent used only to make a number pop, and technical mono labels that read like annotations on a blueprint. Tokens below are the canonical Mars values.

---

## Brand Personality

| Trait | Expression |
|---|---|
| **Editorial** | Big, light-weight serif headlines set tight, like a magazine cover, not a SaaS hero |
| **Evidence-led** | Copy leans on numbers ("81% resolved without a hand-off", "38 seconds") — the orange accent exists to highlight them |
| **Calm & confident** | Almost no colour, generous whitespace, short declarative sentences |
| **Technical / precise** | Mono uppercase labels, bracketed index markers `[ 01.A ]`, dashed hairlines, tiny corner-square registration marks |
| **Warm, not sterile** | Paper tones (off-white, chalk, cream, canvas) instead of pure white or cool grey; occasional subtle grain texture |

Tone of voice: plain, declarative, first-person plural ("Mars reads the whole thread…", "We score every reply…"). Numbered arguments ("Seven reasons teams choose Mars"). No exclamation marks, no hype adjectives. All copy is original — write fresh product copy in this voice rather than reusing lines from any existing website.

**Logo** — a solid orange disc (`#ff5600`, 24–26px) followed by the wordmark **Mars** set in a bold grotesk (Inter 700, −0.03em tracking, optically same height as the disc). Reversed on ink the disc stays orange; on an orange surface the disc turns white. Never outline, stretch or recolour the disc.

---

## Color Tokens

```css
:root {
  /* Ink */
  --mars-black:        #000000;   /* headings, primary buttons */
  --mars-off-black:    #111111;   /* button fills, secondary borders */
  --mars-ink-80:       #313130;   /* secondary text */
  --mars-ink-60:       #626260;   /* tertiary text */
  --mars-ink-50:       #7b7b78;   /* neutral borders */
  --mars-ink-20:       #c5c5c1;   /* decorative borders / dashed rules */
  --mars-ink-10:       #ddddd8;
  --mars-ink-5:        #e9e9e5;

  /* Paper */
  --mars-white:        #ffffff;   /* page body */
  --mars-off-white:    #faf9f6;   /* nav, elevated surfaces (default "paper") */
  --mars-cream:        #f4f3ec;   /* warm section backgrounds */
  --mars-chalk:        #f1eee9;   /* cards, nav highlight */
  --mars-canvas:       #e7e3db;   /* darker warm panel */
  --mars-linen:        #dedbd6;
  --mars-clay:         #d3cec6;   /* muted UI, disabled, logo-wall grey */
  --mars-beige:        #d0cfc7;

  /* Accent — the only saturated colour on a page */
  --mars-orange:       #ff5600;   /* stat highlights, progress bars, 8px marker squares */
  --mars-orange-15:    rgba(255, 86, 0, 0.15);  /* soft tint behind orange stats */

  /* Secondary product colours (use only when the context is that product line) */
  --mars-deep-blue:     #0007cb;  /* Support line; also primary-button hover */
  --mars-bright-blue:   #000ce1;  /* focus ring */
  --mars-sales:         #055895;  --mars-sales-accent: #a3b3ff;
  --mars-commerce:      #2f6a5e;  --mars-commerce-accent: #e2f947;
  --mars-voice-accent:  #b9fe6f;

  /* Dark surfaces (rare — video/feature panels) */
  --mars-night:        #080f1e;
  --mars-midnight:     #020917;

  /* Semantic */
  --mars-error:        #c41c1c;
  --mars-positive:     #6ad36d;
  --mars-warning:      #fcd85d;
  --mars-negative:     #ff6b6b;
}
```

**Palette rules**

- Default page is white or off-white; alternate long sections with `cream` / `chalk` panels to create rhythm. Never use cool greys.
- Text is black at reduced **opacity**, not grey hex: primary `#000`, secondary `rgba(0,0,0,.8)`, tertiary `rgba(0,0,0,.6)`, hints `rgba(0,0,0,.4)`.
- Orange is a highlighter, not a brand fill. Use it on the *number* inside a stat ("<span class=mars>81%</span> resolved without a hand-off"), on a thin 2px progress line, on an 8×8px square bullet — and nowhere else. No orange buttons, no orange backgrounds.
- Borders and dividers are `currentColor` at 10–20% opacity, frequently **dashed** (`border-top: 1px dashed rgba(0,0,0,.2)`).
- Hover on the black primary button turns it **deep blue** `#0007cb` — the one moment of colour in the chrome.

---

## Typography

Mars's display face is **IBM Plex Serif**; the sans is **Inter** and the mono is **Geist Mono** — all on Google Fonts (`https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;400&family=Inter:wght@400;500&family=Geist+Mono:wght@300;400&display=swap`). Use IBM Plex Serif at **weight 300 (Light)** for every display size to keep the light, editorial feel; its slab-ish, slightly technical drawing pairs naturally with the mono eyebrows. Track H1 at −0.035em to −0.045em because Plex Serif runs wide.

| Role | Font | Fallback (Google Fonts) | Weight | Notes |
|---|---|---|---|---|
| **Display / H1–H4** | IBM Plex Serif | Newsreader 300 → Georgia | 300 | Light, tight, editorial |
| **UI / Body / H5–H6** | Inter | Hanken Grotesk → system-ui | 400 (500 for emphasis) | Never bold headlines |
| **Labels / Eyebrows / Captions** | Geist Mono | JetBrains Mono → IBM Plex Mono | 300–400 | Uppercase, tracked |

```css
--font-serif: "IBM Plex Serif", "Newsreader", Georgia, serif;
--font-sans:  "Inter", "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;
--font-mono:  "Geist Mono", "JetBrains Mono", ui-monospace, monospace;
```

### Type scale (desktop / tablet / mobile)

| Token | Size | Line-height | Letter-spacing | Font |
|---|---|---|---|---|
| heading-1 | 100px / 80px / 48px | 0.9 / 1 / 1 | −4px / −2.4px / −1.4px | serif 300 |
| heading-2 | 80px / 64px / 40px | 1 / .95 / .95 | −2.4px / −1.9px / −1.2px | serif 300 |
| heading-3 | 54px / 40px / 30px | 1 | −1.6px / −1.2px / −1px | serif 300 |
| heading-4 | 40px / 28px / 22px | 1 / 1 / 1.1 | −1.2px / −.85px / −.65px | serif 300 |
| heading-5 | 24px / 20px | 1 | −.5px / −.4px | sans 400 |
| heading-6 | 20px / 18px | 1.2 | −.2px | sans 400 |
| callout | 28px / 24px | 1 | −1px / −.7px | serif 300 |
| body-xl | 25.6px / 20px / 18px | 1.15 / 1.1 | −.8px / −.6px | sans 400 |
| body-lg | 18px | 1.4 | −.16px | sans 400 |
| body | 14–16px | 1.4–1.5 | 0 | sans 400 |
| label | 12px (11px in nav) | 1 | +.6px, **uppercase** | mono 400 |
| button-lg / sm | 16px / 14px | 1.1 | −.16px / 0 | sans 400 |

**Typography rules**

- Headlines are **light serif with negative tracking** (≈ −2.5% to −4% of font size). Never bold, never all-caps.
- Numbered arguments set the number in the same serif, separated by a wide space: `03  It is measured on outcomes…`.
- Eyebrows and metadata use mono uppercase in square brackets: `[ 01.A ]`, `[ NORTHWIND ]`, `*ACROSS ACCOUNTS ACTIVE FOR 90+ DAYS`. Footnote markers are a literal `*`.
- Body paragraphs are short (1–2 sentences), 18px on desktop, `rgba(0,0,0,.8)`. Inline links are underlined, same colour.

---

## Shape and density — dials on the core ladders

Everything structural follows **Celestial core v1.0** (`core/foundations.md`): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Mars sits on each ladder.

| Dial | Mars | Sets |
|---|---|---|
| Density | Comfortable | control height **40px**, generous padding step, 18px body on desktop, 52px table rows |
| Shape | Sharp | control radius **4px**, card radius **12px**, chips full |
| Depth | Flat | elevation renders as background steps (white → off-white → cream → chalk), no shadows; 1px borders |
| Contrast | Quiet | black at reduced opacity for text steps, display weight 300, accent on numbers only |

```css
--control-height: {core.control.40};
--radius-control: {core.radius.4};
--radius-card:    {core.radius.12};
--rule-style:     dashed 1px;      /* override — see frontmatter */
```

- Accent scope: **stat numbers** — orange appears on the number inside a stat, a 2px progress line and 8px square markers, nowhere else.
- Max content width 1280px; sections separated by dashed rules, not colour changes. Sticky top nav 56px.
- Tiny 6px square registration marks at the corners of full-width panels are a signature pattern (see Signature patterns).

**Overrides** — `rule-style` = dashed (dashed hairlines are a Mars identity mark).

---

## Marketing page layout

The Mars landing page structure, in this order (all copy below is original sample copy — vary it freely in the same voice):

1. **Announcement bar** — cream band, 13px, one product note + underlined link ("Mars Voice is now in open beta — Hear a sample call"), `×` at right.
2. **Nav, 56px** — the Mars mark + wordmark; dropdown items (Product ⌄, AI Technology ⌄, Integrations ⌄, Customers ⌄, Resources ⌄, Pricing); right: `Log in`, `Contact sales`, `Start free trial` as plain links, then **black `View demo`** and **outlined `Mars Cloud →`** buttons (4px radius).
3. **Hero** — left-aligned, three-line light serif H1 at 80–100px, −4px tracking (“Support that answers, not deflects.”), two buttons beneath, and a single large orange arc bleeding off the right edge. No subtitle.
4. **“Seven reasons teams choose Mars”** — dashed rule, then a serif H2 in two lines.
5. **Numbered argument sections** — each opens with a dashed rule, a large serif index `0 1`, `0 2`… (letter-spaced) in a 120px left column, then a serif H3 (40–54px) and 1–3 short paragraphs at 17–18px / 80% black. Sections add one of: a **dark media panel** (`#080f1e`, `[ 01.A ]` mono label, bordered ▶ Play), **stat callouts** (serif 28px, number in orange, dashed rules between, `*ACROSS ACCOUNTS…` mono footnote), an **accordion** (`Mars for Support −`, `Mars for Sales +`, `Mars for Onboarding +`), a **quote panel** on chalk with name + role, a **logo wall** in clay (fictional company names), or **certification chips** in dashed mono boxes.
6. **Closing section** repeats the two CTAs.
7. **Floating “Ask Mars anything about your account…” pill** — white, full radius, soft shadow, sticky at the bottom centre with a black circular `↑`.
8. **Footer** — cream, six mono-uppercase group labels with plain 14px links, dashed rule, `© 2026 Mars` and `[ STATUS ]` in mono.

Rhythm: 56px between sections; everything left-aligned and ragged-right; white page with cream/chalk panels; the only colour on the page is the orange hero shape and the orange stat numbers.

---

## Components

**Primary button** — `bg #000`, `color #fff`, 1px solid #000, radius 4px, height 40px, padding 0 14px, 14–16px sans. Hover: `bg #0007cb`. Active: `#0007cb` at 85%. Disabled: `rgba(0,0,0,.3)`.

**Secondary button** — transparent, 1px solid `#111`, text `#111`, same geometry. Hover: border/text `rgba(17,17,17,.75)`. Active bg `rgba(17,17,17,.02)`.

**Text link / nav item** — 16px sans, no underline in nav; hover bg `rgba(0,0,0,.08)` with 6px radius. Arrow links end in `→`.

**Stat callout** — mono eyebrow above, then `<span style="color:#ff5600">81%</span> resolved without a hand-off` in serif callout size; charts beneath use orange bars on `chalk` with dashed gridlines and mono axis labels.

**Card / panel** — `chalk #f1eee9` or `cream #f4f3ec` fill, no shadow, 8–12px radius, 20–24px padding, optional subtle paper-grain texture (very low-opacity noise).

**Numbered section header** — `02  Companies` in mono/sans small, followed by serif H2 with the number inline.

**Eyebrow** — 12px mono uppercase, +0.6px tracking, `rgba(0,0,0,.6)`, wrapped in `[ ]`.

**Logo wall** — monochrome logos in `clay #d3cec6`, evenly spaced, no borders.

**Floating assistant pill** — bottom-centre, white, full radius, soft shadow, placeholder "Ask Mars anything about your account…", circular black `↑` submit.

**Accordion / footer** — mono uppercase group labels (`PRODUCT`, `AI TECHNOLOGY`), dashed 1px dividers, chevron `⌄` on the right, plain 14px links beneath.

**Dark media panel** — `#080f1e` background with a bordered "▶ Play" ghost button; keep text white at 60–100% opacity.

---

## Icons — Phosphor

Mars's chrome uses very few glyphs (chevrons, a play triangle, the `↑` submit, `→` arrows). Where a real icon set is needed, use **[Phosphor Icons](https://phosphoricons.com/)** — MIT licensed, free for commercial use, no attribution required.

- **Weight:** `regular` everywhere (1.5px optical stroke). Use `light` for large 32px+ marks; never `bold`, `fill` or `duotone` — Mars's line work is thin and even.
- **Size:** 16px inline with text, 20px in buttons and nav, 24px in feature lists. Icons take `currentColor` — black at the same opacity as the text they sit beside, never orange.
- **Install:** `<script src="https://unpkg.com/@phosphor-icons/web"></script>` then `<i class="ph ph-magnifying-glass"></i>`; or `npm i @phosphor-icons/react` and `<MagnifyingGlass size={16} />`; or inline the SVG from `@phosphor-icons/core/assets/regular/*.svg`.
- **Core set for Mars surfaces:** `magnifying-glass`, `arrow-right`, `arrow-up-right`, `caret-down`, `caret-right`, `play`, `check`, `x`, `plus`, `chat-circle`, `headset`, `phone`, `envelope`, `robot`, `sparkle`, `shield-check`, `lock`, `plugs`, `flow-arrow`, `chart-line-up`, `file-text`, `gear`, `user`, `users`, `globe`, `lightning`, `brain`, `list`, `dots-three`.
- Pair an icon with a mono eyebrow, not a heading: `[ 01.A ] ▶ Watch a refund handled end to end`.

---

## Signature patterns

Mars extends core with four patterns, each built from contract tokens only (see `patterns.md`): **Registration marks** (6px squares at panel corners, ink-primary at 20%, full-width panels only), **Numbered argument** (dashed rule → letter-spaced serif index → display H3 → short paragraphs), **Stat callout** (mono eyebrow → serif callout with the number in accent → mono footnote) and **Dark media panel** (night surface with a bordered ▶ ghost button).

---

## Interaction states and accessibility

Anatomy and states are locked by Celestial core v1.0; this brand supplies only the values. Every component specifies default, hover, focus-visible, active, disabled and loading; fields add error and success.

| State | Primary button | Secondary / ghost | Field |
|---|---|---|---|
| Hover | fill `#0007cb` | fill one neutral step darker, border to body ink | border to body ink |
| Active | one further step + 1px nudge | one further neutral step | — |
| Focus-visible | 2px `#000ce1` ring, 2px offset (9.3:1 on the page) — never removed | same ring | border + 3px soft ring in the focus colour |
| Disabled | 45% opacity, `aria-disabled="true"`, no pointer events | same | muted fill, legible text |
| Loading | spinner + label kept, `aria-busy="true"` | same | — |
| Error / success | — | — | status border + icon + written message (never colour alone) |

Labels stay at 4.5:1 or better on every fill, focus rings at 3:1 or better against the page, touch targets 44px on mobile, transitions 120ms and none under `prefers-reduced-motion`.

---

## Do / Don't

**Do** — Lead with one big light serif line; let whitespace do the work; put every key metric in orange; use mono brackets for metadata; alternate white and cream sections; keep corners near-square on controls; write original copy in the Mars voice.

**Don't** — Use bold or uppercase headlines; add gradients, glows, or drop shadows; use orange as a button or background; introduce blues/greens except for the Support/Sales/Commerce sub-brands; use cool greys or pure `#f5f5f5`; over-round buttons (>6px); use more than one accent colour per screen; reuse headlines, taglines or customer names from any real company's website.

---

## Quick-start CSS

```css
:root{--ink:#000;--paper:#faf9f6;--cream:#f4f3ec;--chalk:#f1eee9;--orange:#ff5600;--blue:#0007cb;
--serif:"IBM Plex Serif","Newsreader",Georgia,serif;
--sans:"Inter","Hanken Grotesk",system-ui,sans-serif;
--mono:"Geist Mono","JetBrains Mono",ui-monospace,monospace;}
body{margin:0;background:#fff;color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--serif);font-weight:300;line-height:1;margin:0}
h1{font-size:clamp(48px,8vw,100px);letter-spacing:-.04em;line-height:.9}
h2{font-size:clamp(40px,6vw,80px);letter-spacing:-.03em}
.eyebrow{font:400 12px/1 var(--mono);letter-spacing:.6px;text-transform:uppercase;color:rgba(0,0,0,.6)}
.eyebrow::before{content:"[ "}.eyebrow::after{content:" ]"}
.btn{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px;border-radius:4px;font:400 14px/1.1 var(--sans);border:1px solid #000;background:#000;color:#fff;text-decoration:none;transition:background .15s}
.btn:hover{background:var(--blue);border-color:var(--blue)}
.btn.secondary{background:transparent;color:#111;border-color:#111}
.rule{border:0;border-top:1px dashed rgba(0,0,0,.2);margin:0}
.stat{font-family:var(--serif);font-weight:300;font-size:28px;letter-spacing:-1px}
.stat b{font-weight:300;color:var(--orange)}
.panel{background:var(--chalk);border-radius:12px;padding:24px}
section{padding:clamp(64px,10vw,160px) clamp(20px,4vw,48px)}
section.cream{background:var(--cream)}
.logo{display:inline-flex;align-items:center;gap:8px;font:700 19px/1 var(--sans);letter-spacing:-.03em}
.logo::before{content:"";width:24px;height:24px;border-radius:50%;background:var(--orange)}
```

When building for Mars: start from this CSS, keep the page 95% black-on-paper, and let one orange number carry the eye.

## Using Mars beyond the web

Mars applies to every output. When asked for a deck, a document, a report, an email, a social post or a chart "for Mars" or "in Mars's style", build it from the tokens below — never from a default template or theme.

### Colour roles
| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Slide and page background |
| Surface | `#f1eee9` | Cards, panels, table rows |
| Band | `#f1eee9` | Section bands, divider slides, table headers |
| Ink | `#000000` | Headlines and body text |
| Ink 2 | `#464645` | Secondary text |
| Muted | `#646462` | Captions, footers, axis labels |
| Line | `#dad9d6` | Rules, borders, chart gridlines |
| Accent | `#ff5600` | One highlight per slide or page (stat numbers) |
| On accent | `#111111` | Text on the accent |
| Success / warning / error | `#1f8a4c / #b86e00 / #c62f2f` | Status only, never decoration |

### Type
- Headlines: **IBM Plex Serif**, weight 300, tracking -.01em.
- Body: **Inter**. Labels and code: **Geist Mono**.
- If a face isn't installed, use the closest system font of the same style and say so — never silently swap to a default.

### Logo on every output
Every Mars output carries the logo — never just the name typed out. Use the SVG under **Brand assets** (or a PNG exported from it at 4×); on dark or accent backgrounds use the one-colour version in `#ffffff` / `#111111`. Keep clear space equal to the mark's height and never stretch, outline or recolour it otherwise.
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
- **Theme** (set it on the master so every slide inherits it): dark 1 = `#000000`, light 1 = `#faf9f6`, dark 2 = `#464645`, light 2 = `#f1eee9`, accent 1–6 = `#ff5600`, `#a63800`, `#fd9f6f`, `#464645`, `#646462`, `#fbd0b9`; heading font = IBM Plex Serif, body font = Inter.
- **Title slide**: background `#faf9f6`; headline in IBM Plex Serif 54–64 pt, ink; one-line subtitle in Inter 20 pt, muted; the logo at the top left with clear space equal to its own height.
- **Section divider**: full-bleed `#f1eee9` (or `#000000` with `#ffffff` text); section number in Geist Mono.
- **Content slide**: title in IBM Plex Serif 32–40 pt; body Inter 18–24 pt, max six bullets; one accent highlight at most.
- **Shapes and cards**: fill `#f1eee9`, 1 pt `#dad9d6` border, corner radius 12px (about 0.13 in).
- **Charts**: series in the accent order above; gridlines `#dad9d6`; labels `#646462`; no 3-D, no gradients.
- **Footer**: Geist Mono 10 pt in `#646462`: Mars · title · page number.
- When generating .pptx with code (e.g. python-pptx), write these colours and fonts into the theme and master first, then add slides from the master.

### Documents and PDF reports (Word, Google Docs, PDF)
- Page `#faf9f6`, text `#000000`. H1 IBM Plex Serif 28 pt, H2 20 pt, H3 15 pt; body Inter 11 pt, line spacing 1.5.
- Table header row `#f1eee9`, 1 pt `#dad9d6` rules, numbers right-aligned in Geist Mono.
- Callouts: `#f1eee9` box with a 3 pt left rule in `#ff5600`.
- Cover page: logo, title in IBM Plex Serif, date and owner in Geist Mono.

### Email, social and diagrams
- Email: 600 px column on `#faf9f6`; one primary button in `#d14700` with `#ffffff` text, 4px corners.
- Social: square 1080 × 1080 or 1200 × 628; headline in IBM Plex Serif; accent used once; logo bottom-left.
- Diagrams: nodes `#f1eee9` with `#dad9d6` borders and 12px corners; connectors `#646462`; the one emphasised node in `#ff5600`.


## Brand assets
### Logo (SVG)
Use this mark as-is: don't redraw, recolour (except to one solid colour on dark backgrounds), stretch or add effects.

```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#ff5600"/></svg>
```

### Fonts
- IBM Plex Serif
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
  "$name": "Mars",
  "core": "{core.version 1.0}",
  "dials": {
    "density": "Comfortable",
    "shape": "Sharp",
    "depth": "Flat",
    "contrast": "Quiet"
  },
  "accent-scope": "stat numbers",
  "surface": {
    "ground": {
      "$type": "color",
      "$value": "#faf9f6"
    },
    "raised": {
      "$type": "color",
      "$value": "#faf9f6"
    },
    "card": {
      "$type": "color",
      "$value": "#f1eee9"
    },
    "muted": {
      "$type": "color",
      "$value": "#f1eee9"
    }
  },
  "ink": {
    "primary": {
      "$type": "color",
      "$value": "#000000"
    },
    "body": {
      "$type": "color",
      "$value": "#464645"
    },
    "muted": {
      "$type": "color",
      "$value": "#646462"
    }
  },
  "line": {
    "default": {
      "$type": "color",
      "$value": "#dad9d6"
    },
    "width": {
      "$type": "dimension",
      "$value": "1px"
    },
    "style": {
      "$type": "string",
      "$value": "dashed 1px"
    }
  },
  "accent": {
    "$type": "color",
    "$value": "#ff5600"
  },
  "action": {
    "primary-bg": {
      "$type": "color",
      "$value": "#d14700"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "#0007cb"
    },
    "focus-ring": {
      "$type": "color",
      "$value": "#000ce1"
    }
  },
  "status": {
    "success": {
      "$type": "color",
      "$value": "#1f8a4c"
    },
    "warning": {
      "$type": "color",
      "$value": "#b86e00"
    },
    "error": {
      "$type": "color",
      "$value": "#c62f2f"
    }
  },
  "font": {
    "display": {
      "$type": "fontFamily",
      "$value": [
        "IBM Plex Serif"
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
      "$value": 300
    },
    "tracking-display": {
      "$type": "dimension",
      "$value": "-.01em"
    },
    "case-label": {
      "$type": "string",
      "$value": "UPPERCASE"
    }
  },
  "control": {
    "height": {
      "$type": "dimension",
      "$value": "{core.control.40}"
    },
    "radius": {
      "$type": "dimension",
      "$value": "{core.radius.4}"
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
      "$value": "Background step"
    }
  },
  "icons": {
    "set": {
      "$type": "string",
      "$value": "phosphor"
    }
  },
  "overrides": [
    {
      "token": "rule-style",
      "value": "dashed",
      "reason": "Dashed hairlines are a Mars identity mark"
    }
  ]
}
```
