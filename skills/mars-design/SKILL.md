---
name: mars-design
core: "1.4"
dials: { density: comfortable, shape: sharp, depth: flat, contrast: quiet }
accent-scope: primary action and stat numbers
icons: phosphor
overrides: []
description: "Design-system skill for Mars, an original AI customer-agent brand: IBM Plex Serif 300 headlines on warm paper neutrals, Mars rust as the primary and wine as the secondary brand colour, aubergine ink, 4px buttons, numbered mono eyebrows, solid hairlines, Phosphor icons. Use for any Mars-branded UI, page, doc, deck or graphic. Use it for every kind of output, not only web UI: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Mars — Design System Skill

Mars is an AI customer agent (an original brand — never reference or copy any real company's site or copy). Its site sells a serious product with an **editorial, paper-and-ink** aesthetic: light serif display type, dusty warm surfaces with a faint red-earth cast, deep aubergine ink, and Mars rust for the one action that matters and the number that proves it, and numbered mono labels that read like field notes. Tokens below are the canonical Mars values.

---

## Brand Personality

| Trait | Expression |
|---|---|
| **Editorial** | Big, light-weight serif headlines set tight, like a magazine cover, not a SaaS hero |
| **Evidence-led** | Copy leans on numbers ("81% resolved without a hand-off", "38 seconds") — the rust accent exists to highlight them |
| **Calm & confident** | Almost no colour, generous whitespace, short declarative sentences |
| **Technical / precise** | Mono uppercase labels numbered like field notes (`01 / SUPPORT`), solid 1px hairlines, figures set in mono |
| **Warm, not sterile** | Dust tones (dust, sand, dune, canvas) with a faint red-earth cast instead of pure white or cool grey |

Tone of voice: plain, declarative, first-person plural ("Mars reads the whole thread…", "We score every reply…"). Plain explanations in order ("How Mars works", step by step). No exclamation marks, no hype adjectives. All copy is original — write fresh product copy in this voice rather than reusing lines from any existing website.

**Logo** — a solid rust disc (`#c1440e`, 24–26px) followed by the wordmark **Mars** set in a bold grotesk (Inter 700, −0.03em tracking, optically same height as the disc). Reversed on ink the disc stays rust where it reaches 3:1, otherwise it turns white; on a rust surface the disc turns white. Never outline, stretch or recolour the disc beyond these one-colour versions.

---

## Color Tokens

```css
:root {
  /* Ink */
  --mars-ink:          #241721;   /* headings, primary buttons */
  --mars-ink-90:       #451804;   /* secondary borders */
  --mars-ink-80:       #451804;   /* secondary text */
  --mars-ink-60:       #735650;   /* tertiary text */
  --mars-ink-50:       #8d6e67;   /* neutral borders */
  --mars-ink-20:       #dccac7;   /* decorative borders / solid hairlines */
  --mars-ink-10:       #e6d6d4;
  --mars-ink-5:        #f0e4e3;

  /* Paper */
  --mars-white:        #ffffff;   /* page body */
  --mars-dust:         #fbf7f6;   /* page, nav, elevated surfaces (default "paper") */
  --mars-dune:         #f0e7e7;   /* warm section bands */
  --mars-sand:         #f6efee;   /* cards, nav highlight */
  --mars-canvas:       #ebdcda;   /* darker warm panel */
  --mars-linen:        #e3d0cd;
  --mars-clay:         #d9c3bf;   /* muted UI, disabled, logo-wall grey */
  --mars-beige:        #d6c0bb;

  /* Accent — the only saturated colour on a page */
  --mars-rust:         #c1440e;   /* stat figures, progress bars, 8px marker squares */
  --mars-rust-15:      rgba(193, 68, 14, 0.15);  /* soft tint behind rust figures */
  --mars-wine:         #741630;   /* secondary brand colour: second data series, secondary highlights, quote marks */
  --mars-wine-10:      #f3e6ea;   /* wine tint: secondary badges and selected rows (fill only) */

  /* Interaction */
  --mars-rust-deep:    #9a3409;   /* primary-button hover */
  --mars-focus:        #c1440e;   /* focus ring */

  /* Dark surfaces (rare — video/feature panels) */
  --mars-deep wine:       #40152a;   /* dark media panel */
  --mars-deep wine-deep:  #241721;

  /* Semantic */
  --mars-error:        #a81b28;
  --mars-positive:     #3a733b;
  --mars-warning:      #8a4f00;
  --mars-negative:     #a81b28;
}
```

**Palette rules**

- Default page is white or dust; alternate long sections with `dune` / `sand` panels to create rhythm. Never use cool greys.
- Text is black at reduced **opacity**, not grey hex: primary `#000`, secondary `rgba(0,0,0,.8)`, tertiary `rgba(0,0,0,.6)`, hints `rgba(0,0,0,.4)`.
- Two brand colours balance each other. **Rust** `#c1440e` is the primary: the primary button, the logo and the number inside a stat. **Wine** `#741630` is the secondary: the second data series, secondary badges, quote marks and links in long text. Use roughly four parts rust to one part wine, and never put the two side by side as equal fills.
- Rust is used sparingly: Use it on the *number* inside a stat ("<span class=mars>81%</span> resolved without a hand-off"), on a thin 2px progress line, on an 8×8px square bullet — and nowhere else. No rust backgrounds, and never more than one rust button on a screen.
- Borders and dividers are solid 1px hairlines in `#dccac7`; never dashed.
- The primary button is **Mars rust** `#c1440e` with a white label, deepening to `#9a3409` on hover — one per screen.

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
- Steps carry a small mono number above the heading (`03 / MEASURE`), never a large serif index.
- Eyebrows and metadata use mono uppercase with a number and a slash, no brackets: `01 / SUPPORT`, `CASE / NORTHWIND`. Footnotes use a superscript number.
- Body paragraphs are short (1–2 sentences), 18px on desktop, `rgba(0,0,0,.8)`. Inline links are underlined, same colour.

---

## Shape and density — dials on the core ladders

Everything structural follows **Celestial core v1.4** (*Celestial core foundations* below): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Mars sits on each ladder.

| Dial | Mars | Sets |
|---|---|---|
| Density | Comfortable | control height **40px**, generous padding step, 18px body on desktop, 52px table rows |
| Shape | Sharp | control radius **4px**, card radius **12px**, chips full |
| Depth | Flat | elevation renders as background steps (white → dust → dune → sand), no shadows; 1px borders |
| Contrast | Quiet | black at reduced opacity for text steps, display weight 300, accent on numbers only |

```css
--control-height: {core.control.40};
--radius-control: {core.radius.4};
--radius-card:    {core.radius.12};
--rule-style:     solid 1px;
```

- Accent scope: **stat numbers** — rust appears on the number inside a stat, a 2px progress line and 8px square markers, nowhere else.
- Max content width 1280px; sections separated by solid hairlines and dune bands. Sticky top nav 56px.
- Figures are the signature: one large rust number per panel, labelled in mono (see Signature patterns).

**Overrides** — none; Mars sits on the core ladders.

---

## Marketing page layout

The Mars landing page structure, in this order (all copy below is original sample copy — vary it freely in the same voice):

1. **Nav, 56px** — the Mars mark + wordmark; links (Platform ⌄, How it works, Customers, Pricing, Docs); right: `Sign in` as a plain link, then a **rust `Try Mars`** and an **outlined `Book a demo`** button (4px radius).
2. **Hero** — two columns. Left: a light serif H1 at 72–96px (“Support that answers, not deflects.”), one sentence beneath and the two buttons. Right: a sand panel holding one large figure in rust (`81%`) with its mono label. No illustration.
3. **How Mars works** — four steps in a row on desktop (stacked on mobile), each a mono number (`01 / CONNECT`), a serif H3 and one short paragraph, separated by solid hairlines.
4. **Proof band** — a full-width dune band with three figures (number in rust, label in body ink) and a customer quote.
5. **Detail sections** — alternating text and product frames: a **dark media panel** (`#40152a`, mono label, bordered ▶ Play), a use-case list (Support, Sales, Onboarding), a fictional logo row in clay, and security chips.
6. **Closing section** repeats the two CTAs.
7. **Footer** — sand, five mono-uppercase group labels with plain 14px links, a solid rule, `© 2026 Mars` and a plain status line.

Rhythm: 64px between sections; left-aligned and ragged-right; dust page with sand and dune bands; the only colour on the page is the rust figures.

---

## Components

**Primary button** — `bg #c1440e`, `color #fff`, 1px solid #c1440e, radius 4px, height 40px, padding 0 14px, 14–16px sans. Hover: `bg #9a3409`. Active: `#9a3409` at 85%. Disabled: 45% opacity.

**Secondary button** — transparent, 1px solid `#111`, text `#111`, same geometry. Hover: border/text `rgba(17,17,17,.75)`. Active bg `rgba(17,17,17,.02)`.

**Text link / nav item** — 16px sans, no underline in nav; hover bg `rgba(0,0,0,.08)` with 6px radius. Arrow links end in `→`.

**Stat callout** — mono eyebrow above, then `<span style="color:#c1440e">81%</span> resolved without a hand-off` in serif callout size; charts beneath use rust bars on `sand` with solid hairline gridlines and mono axis labels.

**Card / panel** — `sand #f6efee` or `dune #f0e7e7` fill, no shadow, 12px radius, 20–24px padding, optional subtle paper-grain texture (very low-opacity noise).

**Numbered section header** — `02 / CUSTOMERS` in small mono above a serif H2.

**Eyebrow** — 12px mono uppercase, +0.6px tracking, tertiary ink, numbered with a slash (`01 / SUPPORT`), never bracketed.

**Logo wall** — monochrome logos in `clay #d9c3bf`, evenly spaced, no borders.

**Accordion / footer** — mono uppercase group labels (`PLATFORM`, `CUSTOMERS`), solid 1px dividers, plus/minus on the right, plain 14px links beneath.

**Dark media panel** — `#40152a` (deep wine) background with a bordered "▶ Play" ghost button; keep text white at 60–100% opacity.

---

## Icons — Phosphor

Mars's chrome uses very few glyphs (chevrons, a play triangle, the `↑` submit, `→` arrows). Where a real icon set is needed, use **[Phosphor Icons](https://phosphoricons.com/)** — MIT licensed, free for commercial use, no attribution required.

- **Weight:** `regular` everywhere (1.5px optical stroke). Use `light` for large 32px+ marks; never `bold`, `fill` or `duotone` — Mars's line work is thin and even.
- **Size:** 16px inline with text, 20px in buttons and nav, 24px in feature lists. Icons take `currentColor` — black at the same opacity as the text they sit beside, never rust.
- **Install:** `<script src="https://unpkg.com/@phosphor-icons/web"></script>` then `<i class="ph ph-magnifying-glass"></i>`; or `npm i @phosphor-icons/react` and `<MagnifyingGlass size={16} />`; or inline the SVG from `@phosphor-icons/core/assets/regular/*.svg`.
- **Core set for Mars surfaces:** `magnifying-glass`, `arrow-right`, `arrow-up-right`, `caret-down`, `caret-right`, `play`, `check`, `x`, `plus`, `chat-circle`, `headset`, `phone`, `envelope`, `robot`, `sparkle`, `shield-check`, `lock`, `plugs`, `flow-arrow`, `chart-line-up`, `file-text`, `gear`, `user`, `users`, `globe`, `lightning`, `brain`, `list`, `dots-three`.
- Pair an icon with a mono eyebrow, not a heading: `CLIP / 01 ▶ Watch a refund handled end to end`.

---

## Signature patterns

Mars extends core with four patterns, each built from contract tokens only (see *Patterns* below): **Field-note step** (mono number with a slash → display H3 → one short paragraph, steps in a row), **Proof band** (full-width dune band → three figures with the number in accent → one quote), **Stat callout** (mono eyebrow → serif callout with the number in accent → mono footnote) and **Dark media panel** (deep wine surface with a bordered ▶ ghost button).

---

## Interaction states and accessibility

Anatomy and states are locked by Celestial core v1.4; this brand supplies only the values. Every component specifies default, hover, focus-visible, active, disabled and loading; fields add error and success.

| State | Primary button | Secondary / ghost | Field |
|---|---|---|---|
| Hover | fill `#9a3409` | fill one neutral step darker, border to body ink | border to body ink |
| Active | one further step + 1px nudge | one further neutral step | — |
| Focus-visible | 2px `#c1440e` ring, 2px offset (6.5:1 on the page) — never removed | same ring | border + 3px soft ring in the focus colour |
| Disabled | 45% opacity, `aria-disabled="true"`, no pointer events | same | muted fill, legible text |
| Loading | spinner + label kept, `aria-busy="true"` | same | — |
| Error / success | — | — | status border + icon + written message (never colour alone) |

Labels stay at 4.5:1 or better on every fill, focus rings at 3:1 or better against the page, touch targets 44px on mobile, transitions 120ms and none under `prefers-reduced-motion`.

---

## Do / Don't

**Do** — Lead with one big light serif line; let whitespace do the work; put every key metric in rust; number mono labels with a slash; alternate dust and dune sections; keep corners near-square on controls; write original copy in the Mars voice.

**Don't** — Use bold or uppercase headlines; add gradients, glows, or drop shadows; use rust as a background or on more than one button per screen; add any other hue; use dashed rules or bracketed labels; use cool greys or pure `#f5f5f5`; over-round buttons (>6px); use more than one accent colour per screen; reuse headlines, taglines or customer names from any real company's website.

---

## Quick-start CSS

```css
:root{--ink:#241721;--paper:#fbf7f6;--dune:#f0e7e7;--sand:#f6efee;--rust:#c1440e;--hover:#9a3409;
--serif:"IBM Plex Serif","Newsreader",Georgia,serif;
--sans:"Inter","Hanken Grotesk",system-ui,sans-serif;
--mono:"Geist Mono","JetBrains Mono",ui-monospace,monospace;}
body{margin:0;background:var(--paper);color:var(--ink);font:400 16px/1.5 var(--sans);-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:var(--serif);font-weight:300;line-height:1;margin:0}
h1{font-size:clamp(48px,8vw,100px);letter-spacing:-.04em;line-height:.9}
h2{font-size:clamp(40px,6vw,80px);letter-spacing:-.03em}
.eyebrow{font:400 12px/1 var(--mono);letter-spacing:.6px;text-transform:uppercase;color:rgba(0,0,0,.6)}
.btn{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px;border-radius:4px;font:400 14px/1.1 var(--sans);border:1px solid var(--rust);background:var(--rust);color:#fff;text-decoration:none;transition:background .15s}
.btn:hover{background:var(--hover);border-color:var(--hover)}
.btn.secondary{background:transparent;color:var(--ink);border-color:var(--ink)}
.rule{border:0;border-top:1px solid #dccac7;margin:0}
.stat{font-family:var(--serif);font-weight:300;font-size:28px;letter-spacing:-1px}
.stat b{font-weight:300;color:var(--rust)}
.panel{background:var(--sand);border-radius:12px;padding:24px}
section{padding:clamp(64px,10vw,160px) clamp(20px,4vw,48px)}
section.dune{background:var(--dune)}
.logo{display:inline-flex;align-items:center;gap:8px;font:700 19px/1 var(--sans);letter-spacing:-.03em}
.logo::before{content:"";width:24px;height:24px;border-radius:50%;background:var(--rust)}
```

When building for Mars: start from this CSS, keep the page 95% ink-on-dust, and let one rust number carry the eye.

## Brand colours
Two brand colours balance every Mars output. **Primary** `#c1440e` — the primary action, outline buttons (border `#c1440e`, label `#a43a0c`), the logo and the key figure. **Secondary** `#741630` — the secondary button (`#741630` fill, `#ffffff` label), secondary badges, the second data series and secondary highlights, about one part to four of the primary; use `#741630` where it is text. Never give the two equal weight side by side.

**Button states** — every type has the same six states, each from its own colour: primary `#c1440e` → hover `#9a3409` → active `#882e08`; secondary `#741630` → `#641329` → `#581124`; outline fill → `#f5e5df` → `#f1d7cc`; ghost → `#eeeae9` → `#e6e1e1`. Focus-visible is a 2px `#c1440e` ring offset 2px on every type; disabled is 45% opacity with `aria-disabled`; loading keeps the label with `aria-busy`. Labels stay at 4.5:1 in every state.

## Using Mars beyond the web

Mars applies to every output. When asked for a deck, a document, a report, an email, a social post or a chart "for Mars" or "in Mars's style", build it from the tokens below — never from a default template or theme.

### Colour roles
| Role | Value | Use |
|---|---|---|
| Background | `#fbf7f6` | Slide and page background |
| Surface | `#f6efee` | Cards, panels, table rows |
| Band | `#f0e7e7` | Section bands, divider slides, table headers |
| Ink | `#241721` | Headlines and body text |
| Ink 2 | `#451804` | Secondary text |
| Muted | `#735650` | Captions, footers, axis labels |
| Line | `#dccac7` | Rules, borders, chart gridlines |
| Accent | `#c1440e` | One highlight per slide or page (primary rust for the action and stat numbers; secondary wine for the second series and highlights) |
| On accent | `#ffffff` | Text on the accent |
| Secondary | `#741630` | Second brand colour: the second data series and secondary highlights, about one part to four of the primary |
| Success / warning / error | `#3a733b / #8a4f00 / #a81b28` | Status only, never decoration |

### Type
- Headlines: **IBM Plex Serif**, weight 300, tracking -.01em.
- Body: **Inter**. Labels and code: **Geist Mono**.
- If a face isn't installed, use the closest system font of the same style and say so — never silently swap to a default.

### Logo on every output
Every Mars output carries the logo — never just the name typed out. Use the SVG under **Brand assets** (or a PNG exported from it at 4×); keep the mark's own colour only where it reaches 3:1 against the background; otherwise use the one-colour version — `#ffffff` on ink or dark photos, `#ffffff` on the accent, `#241721` for monochrome. Never place the mark on a background of its own colour. Keep clear space equal to the mark's height and never stretch, outline or recolour it otherwise.
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
- **Theme** (set it on the master so every slide inherits it): dark 1 = `#241721`, light 1 = `#fbf7f6`, dark 2 = `#451804`, light 2 = `#f0e7e7`, accent 1–6 = `#c1440e`, `#8a3415`, `#db9576`, `#451804`, `#735650`, `#edcabc`; heading font = IBM Plex Serif, body font = Inter.
- **Title slide**: background `#fbf7f6`; headline in IBM Plex Serif 54–64 pt, ink; one-line subtitle in Inter 20 pt, muted; the logo at the top left with clear space equal to its own height.
- **Section divider**: full-bleed `#f0e7e7` (or `#241721` with `#ffffff` text); section number in Geist Mono.
- **Content slide**: title in IBM Plex Serif 32–40 pt; body Inter 18–24 pt, max six bullets; one accent highlight at most.
- **Shapes and cards**: fill `#f6efee`, 1 pt `#dccac7` border, corner radius 12px (about 0.13 in).
- **Charts**: series in the accent order above; gridlines `#dccac7`; labels `#735650`; no 3-D, no gradients.
- **Footer**: Geist Mono 10 pt in `#735650`: Mars · title · page number.
- When generating .pptx with code (e.g. python-pptx), write these colours and fonts into the theme and master first, then add slides from the master.

### Documents and PDF reports (Word, Google Docs, PDF)
- Page `#fbf7f6`, text `#241721`. H1 IBM Plex Serif 28 pt, H2 20 pt, H3 15 pt; body Inter 11 pt, line spacing 1.5.
- Table header row `#f0e7e7`, 1 pt `#dccac7` rules, numbers right-aligned in Geist Mono.
- Callouts: `#f6efee` box with a 3 pt left rule in `#c1440e`.
- Cover page: logo, title in IBM Plex Serif, date and owner in Geist Mono.

### Email, social and diagrams
- Email: 600 px column on `#fbf7f6`; one primary button in `#c1440e` with `#ffffff` text, 4px corners.
- Social: square 1080 × 1080 or 1200 × 628; headline in IBM Plex Serif; accent used once; logo bottom-left.
- Diagrams: nodes `#f6efee` with `#dccac7` borders and 12px corners; connectors `#735650`; the one emphasised node in `#c1440e`.


## Brand assets
### Logo (SVG)
Use this mark as-is: don't redraw, recolour (except to one solid colour on dark backgrounds), stretch or add effects.

```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#c1440e"/></svg>
```

### Fonts
- IBM Plex Serif
- Inter
- Geist Mono


## Components (core v1.4)
Every component's anatomy and states are core: Mars only supplies the token values. Control sizes for Mars: SM 32px · MD 40px · LG 48px · XL 56px; anything under 44px keeps a 44px hit area on touch. Borders are drawn inside. Disabled is 0.45 opacity with `aria-disabled`.

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
Compositions of core components for recurring jobs. Each uses only contract tokens, so it renders in Mars and in any other brand. Mars's own signature patterns follow at the end.

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

### Mars signature patterns
- **Field-note step** — Explain how something works one step at a time Anatomy: Mono number with a slash (01 / CONNECT) → display H3 → one short paragraph; steps sit in a row, divided by solid hairlines. Tokens: font-mono, font-display, ink-body, line.
- **Proof band** — Put the evidence in one place Anatomy: Full-width dune band → three figures with the number in accent and a mono label → one customer quote. Tokens: surface-band, accent, font-display, font-mono.
- **Stat callout** — Make one number the whole point Anatomy: Mono eyebrow → serif callout with the number in accent → solid rule → mono footnote. Tokens: accent, font-display, font-mono, line.
- **Dark media panel** — Hold video or a product clip inside the dust system Anatomy: Deep wine surface, mono label, bordered ▶ ghost button. Tokens: surface-night (brand extension), ink-inverse.


## Templates (core v1.4)

Ready-made compositions of the components and patterns above, drawn in Mars's tokens. Build any page, screen, journey or document from the recipe that fits; swap the copy and data, keep the order, and take every value from the tokens. Every screen also needs its empty, loading and error states from *Patterns*. The starter code and documents sit beside this file in `templates/` (in the download and the public repository), and a linked copy lists each one's web address under *Files with this skill*.

### Marketing pages
Mars's default landing layout is **Editorial**; the other two suit other briefs. Sections run top to bottom in this order.

**Editorial (default)**
1. A slim top bar (logo, links, sign-in, ink button)
2. Hero: a large display headline and lede on the left, one big result figure with a mono label on the right
3. A hairline rule, an H2 and four numbered steps (01 / CONNECT …)
4. A band with three big numbers (the middle one may take the secondary brand colour) and a pull quote
5. Numbered argument sections: a mono label, an H3, body copy, a list of uses, and a media panel
6. A trust section: certificates and a row of customer names
7. A centred closing headline with the primary and secondary buttons
8. A footer of five link columns under the logo

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

**Product-led**
1. A minimal top bar (lowercase lockup, one ink button, a menu button on phones)
2. Hero: a headline and lead, centred, with two buttons
3. A large product frame on a photo: the app shell with its side navigation and working screen (the dashboard of the first app area where the brand has them)
4. A row of customer names
5. A prompt card: a question and an example request in a pill input
6. A four-up grid: an illustration icon, a title and a line each
7. Alternating sections: a headline, a paragraph and a link beside a product frame
8. A closing call to action with two buttons
9. A footer of seven link columns under the logo

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

- **iOS**: SwiftUI: `Theme.swift` exposes the palette and semantic roles as `Color` extensions, the type roles as `Font` helpers, the radii, and a `PrimaryButtonStyle`; `ContentView.swift` shows a NavigationStack + List + TabView screen using them. Add the font files to the target and Info.plist. Files: `templates/screens/ios/MarsTheme.swift`, `templates/screens/ios/ContentView.swift`.

- **Android**: Jetpack Compose / Material 3: `Color.kt` holds the palette, `Theme.kt` maps it to a `lightColorScheme`, typography and shapes, and `HomeScreen.kt` is a Scaffold with a top app bar, extended FAB and navigation bar. Register the fonts under `res/font`. Files: `templates/screens/android/Color.kt`, `templates/screens/android/Theme.kt`, `templates/screens/android/HomeScreen.kt`.

### Documents
Print and digital documents as token-driven HTML. The site's Templates tab also builds each one as a real .docx or .pptx.

- **Article** (Web, Print · A4): Long-form article: eyebrow, balanced headline, dek, byline, drop cap, pull-quote, stat callout and a data table at a 65ch measure. The print variant is A4 with two columns and `@page` margins; the .docx keeps the same hierarchy in Word styles. Files: `templates/documents/article-digital.html`, `templates/documents/article-print.html`.

- **Whitepaper** (Print · A4, Print · US Letter): Whitepaper: accent-banded cover with a hero stat, contents with dot leaders, running heads and folios, two-column body, key-finding callouts and a results table. A4 or US Letter; the .docx carries headers, footers and page numbers. Files: `templates/documents/whitepaper-a4.html`, `templates/documents/whitepaper-letter.html`.

- **Presentation** (16:9): 16:9 deck, seven slide types: title, section divider, statement with one accent phrase, bullets on hairlines, before/after two-column, data table, and an accent closing slide. The .pptx is built with the same tokens and fonts. Files: `templates/documents/presentation-16x9.html`.

- **Poster** (Print · A3, Social · 1080×1350): One big typographic statement in the display face with the last word in the accent, an accent edge band, and the brand lockup at the foot. A3 portrait for print, 1080×1350 for social; the .pptx is a single custom-size slide you can export to PDF or PNG. Files: `templates/documents/poster-a3.html`, `templates/documents/poster-1080x1350.html`.

- **Banner** (Digital ad sizes, Print · roll-up 850×2000): Digital ad set (728×90 leaderboard, 300×250 rectangle, 1080×1080 square, 1200×628 landscape) or an 850×2000 mm roll-up, each with logo, headline and button from the tokens. The .pptx has one custom-size slide per format. Files: `templates/documents/banners-digital.html`, `templates/documents/banners-print.html`.

## Accessibility (core v1.0, WCAG 2.2 AA)
Every Mars screen, document and graphic must meet Celestial's accessibility core; this file is checked against it, your product still needs testing. Automated result for this palette: **Palette passes automated WCAG 2.2 AA checks**. Automated checks cover only part of WCAG 2.2 AA; keyboard, screen-reader and 200% zoom checks still need a person.

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

### How to use Mars's colours accessibly
- Body and small text: only colours marked Pass at 4.5:1 below. A colour that passes only at 3:1 is for large text (24px, or 18.7px bold), icons and graphics.
- Field borders and focus rings need 3:1 against the page; hairline dividers are decorative and exempt.
- Status colours always come with a word or an icon, never colour alone (A11Y-C2).
- Disabled controls are exempt from contrast but must still say they are unavailable (`aria-disabled`).

### Checks
| Check | Colours | Ratio | Needs | Result |
|---|---|---|---|---|
| ink / headings | `#241721` on `#fbf7f6` | 16.18:1 | 4.5:1 | Pass |
| ink / headings | `#241721` on `#f6efee` | 15.17:1 | 4.5:1 | Pass |
| ink / headings | `#241721` on `#f0e7e7` | 14.18:1 | 4.5:1 | Pass |
| tertiary text | `#735650` on `#fbf7f6` | 6.21:1 | 4.5:1 | Pass |
| tertiary text | `#735650` on `#f6efee` | 5.83:1 | 4.5:1 | Pass |
| tertiary text | `#735650` on `#f0e7e7` | 5.44:1 | 4.5:1 | Pass |
| focus ring | `#c1440e` on `#fbf7f6` | 4.81:1 | 3:1 | Pass |
| focus ring | `#c1440e` on `#f6efee` | 4.51:1 | 3:1 | Pass |
| focus ring | `#c1440e` on `#f0e7e7` | 4.22:1 | 3:1 | Pass |
| input border · field border | `#a07e76` on `#fbf7f6` | 3.44:1 | 3:1 | Pass |
| body text | `#451804` on `#fbf7f6` | 14.25:1 | 4.5:1 | Pass |
| body text | `#451804` on `#f6efee` | 13.35:1 | 4.5:1 | Pass |
| body text | `#451804` on `#f0e7e7` | 12.48:1 | 4.5:1 | Pass |
| error · as an icon | `#a81b28` on `#fbf7f6` | 6.92:1 | 3:1 | Pass |
| error · as text | `#a81b28` on `#fbf7f6` | 6.92:1 | 4.5:1 | Pass |
| warning · as an icon | `#8a4f00` on `#fbf7f6` | 6.17:1 | 3:1 | Pass |
| warning · as text | `#8a4f00` on `#fbf7f6` | 6.17:1 | 4.5:1 | Pass |
| success · as an icon | `#3a733b` on `#fbf7f6` | 5.34:1 | 3:1 | Pass |
| success · as text | `#3a733b` on `#fbf7f6` | 5.34:1 | 4.5:1 | Pass |
| Primary button label | `#ffffff` on `#c1440e` | 5.12:1 | 4.5:1 | Pass |
| Primary button label · hover | `#ffffff` on `#9a3409` | 7.32:1 | 4.5:1 | Pass |
| Focus ring | `#c1440e` on `#fbf7f6` | 4.81:1 | 3:1 | Pass |
| Name on the accent lockup (large text) | `#ffffff` on `#c1440e` | 5.12:1 | 3:1 | Pass |
| Muted text | `#735650` on `#fbf7f6` | 6.21:1 | 4.5:1 | Pass |
| Control height | 40px | — | ≥ 24px (WCAG 2.5.8); hit area padded to 44px on touch (core) | Pass — Pad the hit area to 44 × 44px on touch screens. |


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
  "$name": "Mars",
  "core": "1.4",
  "dials": {
    "density": "Comfortable",
    "shape": "Sharp",
    "depth": "Flat",
    "contrast": "Quiet"
  },
  "accent-scope": "primary rust for the action and stat numbers; secondary wine for the second series and highlights",
  "surface": {
    "ground": {
      "$type": "color",
      "$value": "#fbf7f6"
    },
    "raised": {
      "$type": "color",
      "$value": "#f6efee"
    },
    "card": {
      "$type": "color",
      "$value": "#f6efee"
    },
    "muted": {
      "$type": "color",
      "$value": "#f0e7e7"
    }
  },
  "ink": {
    "primary": {
      "$type": "color",
      "$value": "#241721"
    },
    "body": {
      "$type": "color",
      "$value": "#451804"
    },
    "muted": {
      "$type": "color",
      "$value": "#735650"
    }
  },
  "line": {
    "default": {
      "$type": "color",
      "$value": "#dccac7"
    },
    "input": {
      "$type": "color",
      "$value": "#a07e76"
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
    "$value": "#c1440e"
  },
  "secondary": {
    "$type": "color",
    "$value": "#741630"
  },
  "action": {
    "primary-bg": {
      "$type": "color",
      "$value": "#c1440e"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "#9a3409"
    },
    "primary-active": {
      "$type": "color",
      "$value": "#882e08"
    },
    "secondary-bg": {
      "$type": "color",
      "$value": "#741630"
    },
    "secondary-hover": {
      "$type": "color",
      "$value": "#641329"
    },
    "secondary-active": {
      "$type": "color",
      "$value": "#581124"
    },
    "outline-hover": {
      "$type": "color",
      "$value": "#f5e5df"
    },
    "ghost-hover": {
      "$type": "color",
      "$value": "#eeeae9"
    },
    "focus-ring": {
      "$type": "color",
      "$value": "#c1440e"
    }
  },
  "status": {
    "success": {
      "$type": "color",
      "$value": "#3a733b"
    },
    "warning": {
      "$type": "color",
      "$value": "#8a4f00"
    },
    "error": {
      "$type": "color",
      "$value": "#a81b28"
    },
    "info": {
      "$type": "color",
      "$value": "#2f62d0"
    }
  },
  "link": {
    "default": {
      "$type": "color",
      "$value": "#ae3d0d"
    },
    "visited": {
      "$type": "color",
      "$value": "#741630"
    }
  },
  "overlay": {
    "scrim": {
      "$type": "color",
      "$value": "rgba(36,23,33,0.48)"
    }
  },
  "inverse": {
    "surface": {
      "$type": "color",
      "$value": "#241721"
    },
    "ink": {
      "$type": "color",
      "$value": "#fbf7f6"
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
      "$value": "40px",
      "$extensions": {
        "celestial": {
          "core-step": "control.40"
        }
      }
    },
    "radius": {
      "$type": "dimension",
      "$value": "4px",
      "$extensions": {
        "celestial": {
          "core-step": "radius.4"
        }
      }
    }
  },
  "card": {
    "radius": {
      "$type": "dimension",
      "$value": "12px",
      "$extensions": {
        "celestial": {
          "core-step": "radius.12"
        }
      }
    },
    "padding": {
      "$type": "dimension",
      "$value": "24px"
    },
    "shadow": {
      "$type": "shadow",
      "$value": "none"
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
  "overrides": []
}
```
