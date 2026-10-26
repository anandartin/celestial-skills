---
name: mercury-design
core: "1.0"
dials: { density: default, shape: soft, depth: hairline, contrast: quiet }
accent-scope: product states
icons: coreline
overrides:
  - token: radius-node
    value: 13px
    reason: Workflow nodes sit one step inside the 16px frame radius
description: "Design-system skill for Mercury, an original AI agent-workspace brand: Scoutie Sans at weight 400 everywhere, near-white greyscale, #d8d8d8 hairlines, 8px black buttons, green #33c482 reserved for product states, Core-Line-style icons. Use for any Mercury-branded UI, page, doc, deck or graphic. Use it for every kind of output, not only web UI: PowerPoint / Keynote / Google Slides decks, Word and Google Docs documents, PDF reports, emails, social posts, charts and diagrams."
---

# Mercury — Design System Skill

Mercury is an AI workspace where teams build, deploy and manage AI agents (agents, runs, memory, records, files; 1,000+ connections). It is an original brand — never reference or copy any real company's site or copy. Its site sells a developer-grade product with a **quiet, monochrome, tool-like** aesthetic: one regular-weight geometric sans for everything, a near-white page, grey text hierarchy in three steps, hairline borders instead of shadows, and product UI mockups floating over softly blurred greyscale photographs. Colour is almost entirely absent from the marketing chrome — the green brand accent lives inside the product. Tokens below are the canonical Mercury values.

---

## Brand Personality

| Trait | Expression |
|---|---|
| **Monochrome & quiet** | Page is `#fefefe`; text is three greys (`#1a1a1a` / `#434343` / `#7a7a7a`). No colour in the hero, nav, buttons or footer. |
| **Tool-like, not editorial** | A single sans at weight 400 at every size. No serif, no display weight, no uppercase eyebrows. Headlines read like product copy, not magazine covers. |
| **Show the product** | Every section ends in a real UI screenshot (sidebar + canvas + node graph) inside a hairline-bordered card, sitting on a desaturated photo backdrop. |
| **Structural, diagrammatic** | Feature icons are thin-line isometric/wireframe illustrations in grey; the workflow canvas is a vertical node graph with hairline connectors. |
| **Plain-spoken** | Short sentences ending in full stops. "Say it once. Mercury runs it." "Your first agent, before lunch." Verbs first: Connect, Remember, Compose, Observe. |

Tone of voice: direct, second person, no hype ("Plug into the tools you already pay for." / "Read every run like a story."). Numbers are stated plainly (2.4k runs today, 96% completed without a retry). CTAs are two words: "Start free", "Talk to us", "Book a walkthrough". All copy is original — write fresh product copy in this voice rather than reusing lines from any existing website.

**Logo** — a solid black disc (`#1a1a1a`, 24–26px) followed by the wordmark **Mercury** set in a bold grotesk (Inter 700, −0.03em tracking). On dark app surfaces the disc turns `#fafafa`. Never outline, stretch or recolour the disc, and never make it green.

---

## Color Tokens

```css
:root {
  /* Surfaces (near-white, cool-neutral — NOT warm) */
  --mercury-page:          #fefefe;   /* body background */
  --mercury-white:         #ffffff;   /* cards, inputs, chat pill */
  --mercury-card:          #fbfbfb;   /* card / panel fill on the landing page (app card is #fdfdfd) */
  --mercury-surface-2:     #f7f7f7;   /* nested panels, feature-illustration wells */
  --mercury-surface-3:     #f3f3f3;   /* media wells (app muted is #f5f5f5) */
  --mercury-accent-fill:   #ececec;   /* selected/accent bg */

  /* Lines */
  --mercury-border:        #d8d8d8;   /* THE border colour — every card, input, divider */
  --mercury-input:         #e5e5e5;   /* input border */

  /* Ink — three-step hierarchy */
  --mercury-text-primary:  #1a1a1a;   /* headings, nav, links, primary button fill */
  --mercury-text-body:     #434343;   /* body paragraphs */
  --mercury-text-secondary:#525252;
  --mercury-text-tertiary: #5c5c5c;   /* icons */
  --mercury-text-muted:    #7a7a7a;   /* subheads, captions, footer-group items */
  --mercury-text-subtle:   #8c8c8c;   /* placeholder */
  --mercury-foreground:    #0a0a0a;

  /* Brand accent — product only */
  --mercury-brand:         #33c482;   /* primary green: run/success/active states in the app */
  --mercury-brand-hover:   #2dac72;
  --mercury-brand-secondary: #33b4ff; /* informational blue */
  --mercury-brand-agent:   #6f3dfa;   /* agent/LLM block purple */
  --mercury-brand-knowledge:#00b0b0;  /* knowledge-base teal */

  /* Semantic */
  --mercury-success:       #22c55e;
  --mercury-error:         #ef4444;

  /* Dark mode (app) */
  --mercury-dark-bg:       #1b1b1b;
  --mercury-dark-card:     #171717;
  --mercury-dark-border:   #3a3a3a;
  --mercury-dark-muted:    #2d2d2d;
  --mercury-dark-text:     #fafafa;
  --mercury-dark-text-muted:#a3a3a3;
}
```

**Palette rules**

- The marketing page is greyscale. Do not add the green (or any colour) to hero, nav, buttons, section backgrounds or footer. If you need emphasis, use weight of *contrast* (`#1a1a1a` on `#fefefe`) and size, never hue.
- The green `#33c482` is a **product** colour: run buttons, success dots, active toggles, the "running" progress state. Use it sparingly inside app/dashboard UI; the purple/teal/blue are block-type colours for agent / knowledge / data nodes on the workflow canvas.
- Borders are always `#d8d8d8` at 0.5–1px (`0.5px` on secondary buttons and the footer rule). Never darker, never dashed.
- Shadows are near-invisible: `0 1px 2px rgba(0,0,0,.05)` on workflow nodes, `0 1px 3px #0000000a` for cards. No glows, no coloured shadows.
- Greys are pure neutral (R=G=B). Never warm/cream, never blue-tinted.
- Photographic backdrops behind product mockups are **desaturated / near-greyscale, softly blurred** (mountains, industrial interiors, ductwork) — texture, not colour.

---

## Typography

Mercury uses a single variable sans, **[Scoutie Sans](https://fonts.google.com/specimen/Scoutie+Sans)** (Tyler Finck, OFL, on Google Fonts), for every role. There is no serif and no separate display face; Geist Mono is used for code. Its geometric, slightly wide proportions and quiet regular weight carry the whole system at weight 400. Load it with `https://fonts.googleapis.com/css2?family=Scoutie+Sans:wght@300..700&family=Geist+Mono:wght@400&display=swap`.

| Role | Font | Fallback (Google Fonts) | Weight | Notes |
|---|---|---|---|---|
| **Everything (display → caption)** | Scoutie Sans | Geist → Inter → system-ui | **400** | h1, body, buttons and footer all at 400 |
| **Code / logs / tables** | Geist Mono | JetBrains Mono | 400 | App only |

```css
--font-sans: "Scoutie Sans", "Geist", "Inter", ui-sans-serif, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-mono: "Geist Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

### Type scale (desktop values in clamp)

| Token | Size | Line-height | Letter-spacing | Colour |
|---|---|---|---|---|
| h1 hero | 52px @ 700px → ~64–72px desktop | 1.05 | −0.01em | primary |
| h2 section | 40px (CTA) / 28px (feature intro) | 1.1–1.2 | +0.28px | primary |
| h2 card title | 22px | 1.3 | +0.28px | primary |
| h3 feature | 18px | 28px | +0.28px | primary |
| body / p | 16px | 24px | +0.28px | `#434343` |
| subhead / lead | 15px | 22.5px | +0.28px | `#7a7a7a` |
| button | 14–15px | 20–22.5px | +0.28px | — |
| caption / footer link | 14px | 1.3 | +0.28px | `#7a7a7a` / `#1a1a1a` |
| tiny UI (sidebar, node fields) | 12–13px | 1.3 | 0 | `#434343` / `#7a7a7a` |

**Typography rules**

- Weight is **400 everywhere** — headings differentiate by size and colour, never by boldness. Use 500 at most for a selected nav item in the app.
- Small text has a *positive* tracking of `+0.28px` (≈ +0.02em); only the hero h1 is tracked slightly negative (−0.01em). Do not use the −3% tracking common on SaaS sites.
- Headlines end with a full stop. Two-line hero: break after a natural clause ("Agents that do the work, / and show their working.").
- Section sub-copy sits directly under the heading in `#7a7a7a` 15px, 2 lines max, ~60ch.
- No uppercase, no eyebrows, no bracketed labels. Footer group titles are 14px sentence-case in `#1a1a1a`.

---

## Shape and density — dials on the core ladders

Everything structural follows **Celestial core v1.0** (`core/foundations.md`): the 4px spacing scale, the 12-column grid and breakpoints, control and radius ladders, elevation levels, motion durations, accessibility minimums, component anatomy and states. This file never restates core; it records only where Mercury sits on each ladder.

| Dial | Mercury | Sets |
|---|---|---|
| Density | Default | control height **36px** (30px in the marketing nav), 16px card padding, 44px table rows |
| Shape | Soft | control radius **8px**, card radius **16px**, 12px product frames |
| Depth | Hairline | every edge is a 0.5–1px `#d8d8d8` line; shadows near-invisible (`0 1px 3px #0000000a`) |
| Contrast | Quiet | three greys for text, weight 400 everywhere, accent only inside the product |

```css
--control-height: {core.control.36};
--radius-control: {core.radius.8};
--radius-card:    {core.radius.16};
--border-width:   {core.border.0.5};
--rule-style:     solid 0.5px;
```

- Accent scope: **product states** — green `#33c482` appears on run buttons, success dots and active toggles inside the app, never in marketing chrome.
- Max content width 1200px, 32px gutters, 62px transparent nav; sections are contained in 16px cards.

**Overrides** — `radius-node` = 13px (workflow nodes sit one step inside the 16px frame radius).

---

## Marketing page layout

The Mercury landing page structure, in this order (all copy below is original sample copy — vary it freely in the same voice):

1. **Nav, 62px, transparent** — the Mercury mark + lowercase wordmark at 24px left; right: black `Sign up` pill (30px tall, 8px radius) and a 36px bordered hamburger icon button. No links, no bottom border.
2. **Hero, left-aligned** — two-line H1 at 52–72px weight 400 ending in a full stop (“Agents that do the work, and show their working.”), a 15–16px grey lead (≤ 60ch), then `Book a walkthrough` (black) and `Start free` (hairline secondary).
3. **Product frame** — a full-width 16px-radius card with a softly blurred greyscale photo backdrop; the app screenshot is inset from the top-left with a 12px radius and hairline border: 238px sidebar (workspace, Connections, Threads, Records, Files, Memory, Runs, Agents and their sub-items, avatar at the bottom), a vertical node-graph canvas (New email → Read thread → Classify → Draft reply → Log outcome, each node a white 13px-radius card with a coloured 16px block icon and two `label — value` rows, joined by 1px lines), and a chat panel (user request, a one-line reply, numbered Next steps, a “Tell Mercury what to run…” pill with a black `↑`).
4. **Logo wall** — “Running in production at” in 15px `#7a7a7a` then monochrome logos (fictional company names).
5. **Section card** (`#fbfbfb`, 1px `#d8d8d8`, 16px radius, 16px padding) — a `#f3f3f3` media well holding the centred **prompt pill** (“What should Mercury take off your plate?” + typed example + `↑`), then 22px title “Say it once. Mercury runs it.” and 15px grey copy.
6. **Feature intro** — H2 “Four things every agent needs. One place for all of them.” + one-line grey sub-copy, then a **2×2 grid**: thin-line icon in a 120px `#f7f7f7` well → 18px H3 (Connect / Remember / Compose / Observe) → 15px grey copy.
7. **Three section cards**, one per feature, each with a media well containing a product screenshot, a 22px title ending in a full stop, grey copy and a plain `See … →` link.
8. **CTA** — centred H2 “Your first agent, before lunch.” with `Start free` (black) and `Talk to us` (secondary).
9. **Footer** — `0.5px solid #d8d8d8` rule, seven sentence-case columns (Product, Resources, Compare, Integrations, Models, Socials, Legal), `© 2026 Mercury. All rights reserved.` in `#7a7a7a`.

Rhythm: 80px between blocks, max 1200px, 32px gutters, everything greyscale at weight 400; the green appears only inside the product screenshots.

---

## Components

**Primary button** — `bg #1a1a1a`, `color #fff`, no border, radius 8px, height 36px (30px in nav), padding `0 10px`, 15px sans 400, tracking +0.28px. Hover: `#000`. This is the only "filled" element on the page.

**Secondary button** — transparent, `0.5px solid #d8d8d8`, text `#1a1a1a`, same geometry. Hover: `bg #f7f7f7`.

**Ghost / nav link** — 14px, `#1a1a1a`, padding `0 8px`, height 30px, radius 8px; hover `bg #f3f3f3`.

**Icon button (hamburger)** — 36×36, 1px `#d8d8d8` border, radius 8px, three 1.5px lines in `#1a1a1a`.

**Prompt pill ("What should Mercury take off your plate?")** — centred 22–28px heading, then a white input `1px solid #d8d8d8`, radius 16px, padding 16px, placeholder `#8d8d8d` with a typed example ("Triage new support emails and draft replies…"), and a 28px circular `#1a1a1a` `↑` submit at bottom-right. Sits in a `#f3f3f3` well.

**Section card** — `#fbfbfb` fill, 1px `#d8d8d8`, radius 16px, padding 16px; contains media well, then 22px title, then 15px `#7a7a7a` copy. Optional row of 4 thin-line glyph icons (24px, `#7a7a7a`) between media and title.

**Product frame** — white, 1px `#d8d8d8`, radius 12px, `shadow-card`; inside: 238px sidebar (`#f7f7f7`, 12px labels, active row `#ececec`), main canvas white.

**Workflow node** — white, 1.4px `#d8d8d8`, radius 13px, `0 1px 2px rgba(0,0,0,.05)`; header row = 16px rounded-square icon (block-type colour: agent purple, knowledge teal, integration logo) + 12px name; body = 2–3 `label — value` rows in 11px `#7a7a7a`. Nodes connect with 1px `#d8d8d8` vertical/elbow lines.

**Chat bubble** — `#fefefe`, 1.2px `#d8d8d8`, radius 6px, 12px text; assistant reply is plain text, no bubble.

**Logo wall** — "Running in production at" in 15px `#7a7a7a`, then monochrome `#7a7a7a` SVG logos, evenly spaced, no borders.

**Feature illustration** — thin 1px grey line-art isometric objects (stacked cubes, cube grid, layered capsules) on a `#f7f7f7` well; no fills darker than `#ececec`.

**Footer** — `0.5px solid #d8d8d8` top rule; 7 columns (Product, Resources, Compare, Integrations, Models, Socials, Legal) with 14px `#1a1a1a` group titles and 14px links; `© 2026 Mercury. All rights reserved.` in `#7a7a7a`.

**Cookie banner** — bottom-left white card, 1px border, radius 16px, three ghost buttons (Customize / Reject all / Accept all).

**App (dark)** — `#1b1b1b` page, `#171717` cards, `#3a3a3a` borders, `#fafafa` text, `#a3a3a3` muted; green `#33c482` for run/active.

---

## Icons — Core Line (Noun Project)

Mercury's feature illustrations are thin 1px grey line art; its UI glyphs follow the same logic. Use **[Core Line Icon Set](https://thenounproject.com/browse/collection-icon/core-line-179227/)** by Philipp Koerner on Noun Project — 78 icons, 2px round-capped strokes, generous circular frames (info, close, search, trash, book, arrows, gear…).

- **Licence:** a royalty-free Noun Project set (paid / Pro download). It cannot be redistributed with the skill — download the SVGs under your own Noun Project licence and inline them; do not hotlink. If you have no licence yet, draw a matching set (24px grid, `stroke-width:1.6`, `stroke-linecap:round`, `stroke-linejoin:round`, `fill:none`) or use an OFL/MIT set with the same feel (Lucide at 1.5px is the closest) and swap later.
- **Colour:** `currentColor` — `#7a7a7a` for feature illustrations and secondary controls, `#1a1a1a` for the hamburger and primary controls. Never green, never filled.
- **Size:** 16px in nav and node headers, 20–24px in buttons and lists, 40px inside the `#f7f7f7` illustration wells of the 2×2 feature grid.
- **Core set for Mercury surfaces:** search, info, close-circle, check-circle, trash, book, arrow-right, arrow-down, chevron-down, chevron-right, chevron-left, gear, plus, minus, user, users, bell, mail, calendar, clock, folder, file, download, upload, edit, chart, link, eye, send, refresh, cube, layers, terminal, database, branch, bolt, plug, tag, lock, warning.
- Attribution: when using the free tier of Noun Project instead of Pro, credit “Core Line Icon Set by Philipp Koerner from Noun Project” in the footer or About page.

---

## Signature patterns

Mercury extends core with four patterns, each built from contract tokens only (see `patterns.md`): **Product frame** (16px card over a blurred greyscale photo, screenshot inset with a 12px radius and hairline), **Workflow node** (13px white card, block-type icon, two label — value rows, 1px connectors), **Prompt pill** (centred question → 16px input with a typed example → circular ink ↑) and **Feature illustration** (1px grey isometric line art in a muted well).

---

## Interaction states and accessibility

Anatomy and states are locked by Celestial core v1.0; this brand supplies only the values. Every component specifies default, hover, focus-visible, active, disabled and loading; fields add error and success.

| State | Primary button | Secondary / ghost | Field |
|---|---|---|---|
| Hover | fill `#484848` | fill one neutral step darker, border to body ink | border to body ink |
| Active | one further step + 1px nudge | one further neutral step | — |
| Focus-visible | 2px `#1a1a1a` ring, 2px offset (17.3:1 on the page) — never removed | same ring | border + 3px soft ring in the focus colour |
| Disabled | 45% opacity, `aria-disabled="true"`, no pointer events | same | muted fill, legible text |
| Loading | spinner + label kept, `aria-busy="true"` | same | — |
| Error / success | — | — | status border + icon + written message (never colour alone) |

Labels stay at 4.5:1 or better on every fill, focus rings at 3:1 or better against the page, touch targets 44px on mobile, transitions 120ms and none under `prefers-reduced-motion`.

---

## Do / Don't

**Do** — Keep the page greyscale; use one sans at weight 400 everywhere; separate elements with 0.5–1px `#d8d8d8` lines and 8/12/16px radii; put product screenshots in hairline frames over blurred greyscale photos; end headlines with a full stop; keep CTAs to two words; reserve green for product states; write original copy in the Mercury voice.

**Don't** — Use bold headlines or a second typeface; add gradients, glows, coloured backgrounds or heavy shadows; use warm/cream or blue-tinted greys; put the green on marketing buttons or headings; use uppercase labels, eyebrows or bracketed metadata; over-round buttons (>8px) or under-round cards (<12px); use dashed borders; reuse headlines, taglines or customer names from any real company's website.

---

## Quick-start CSS

```css
:root{--page:#fefefe;--card:#fbfbfb;--well:#f3f3f3;--line:#d8d8d8;--ink:#1a1a1a;--body:#434343;--muted:#7a7a7a;--brand:#33c482;
--sans:"Scoutie Sans","Geist","Inter",ui-sans-serif,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
--mono:"Geist Mono","JetBrains Mono",ui-monospace,Menlo,monospace;}
body{margin:0;background:var(--page);color:var(--ink);font:400 16px/1.5 var(--sans);letter-spacing:.28px;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-weight:400;margin:0;color:var(--ink)}
h1{font-size:clamp(40px,6.5vw,72px);line-height:1.05;letter-spacing:-.01em}
h2{font-size:clamp(28px,3.2vw,40px);line-height:1.1}
h3{font-size:18px;line-height:28px}
p{color:var(--body);margin:0}
.lead{font-size:15px;line-height:1.5;color:var(--muted);max-width:60ch}
.btn{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 10px;border-radius:8px;font:400 15px/1 var(--sans);letter-spacing:.28px;background:var(--ink);color:#fff;border:0;text-decoration:none;cursor:pointer}
.btn:hover{background:#000}
.btn.secondary{background:transparent;color:var(--ink);border:.5px solid var(--line)}
.btn.secondary:hover{background:#f7f7f7}
.btn.ghost{background:transparent;color:var(--ink);height:30px;padding:0 8px;font-size:14px}
.btn.ghost:hover{background:var(--well)}
nav{display:flex;align-items:center;justify-content:space-between;height:62px;padding:16px 32px}
.wordmark{display:inline-flex;align-items:center;gap:8px;font:700 24px/1 "Inter",var(--sans);letter-spacing:-.03em}
.wordmark::before{content:"";width:24px;height:24px;border-radius:50%;background:#1a1a1a}
section{padding:80px 32px 0}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px}
.well{background:var(--well);border-radius:12px;padding:48px 24px}
.frame{background:#fff;border:1px solid var(--line);border-radius:12px;box-shadow:0 1px 3px #0000000a;overflow:hidden}
.node{background:#fff;border:1.4px solid var(--line);border-radius:13px;box-shadow:0 1px 2px rgba(0,0,0,.05);padding:10px 12px;font-size:12px}
.node small{display:block;color:var(--muted);font-size:11px}
.pill{display:flex;align-items:flex-end;justify-content:space-between;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px;color:#8d8d8d}
.pill .send{width:28px;height:28px;border-radius:50%;background:var(--ink);color:#fff;display:grid;place-items:center}
.rule{border:0;border-top:.5px solid var(--line);margin:0}
.grid-2{display:grid;grid-template-columns:repeat(2,1fr);gap:48px 32px}
footer{border-top:.5px solid var(--line);padding:48px 32px;font-size:14px}
footer h3{font-size:14px;margin-bottom:12px}
footer a{color:var(--ink);text-decoration:none;display:block;line-height:1.9}
.status-ok{color:var(--brand)}
```

When building for Mercury: start from this CSS, keep everything grey-on-near-white at weight 400, frame the product in hairlines over a blurred greyscale photo, and let the green appear only where the product is *running*.

## Using Mercury beyond the web

Mercury applies to every output. When asked for a deck, a document, a report, an email, a social post or a chart "for Mercury" or "in Mercury's style", build it from the tokens below — never from a default template or theme.

### Colour roles
| Role | Value | Use |
|---|---|---|
| Background | `#fefefe` | Slide and page background |
| Surface | `#fbfbfb` | Cards, panels, table rows |
| Band | `#f3f3f3` | Section bands, divider slides, table headers |
| Ink | `#1a1a1a` | Headlines and body text |
| Ink 2 | `#5a5a5a` | Secondary text |
| Muted | `#6a6a6a` | Captions, footers, axis labels |
| Line | `#d8d8d8` | Rules, borders, chart gridlines |
| Accent | `#1a1a1a` | One highlight per slide or page (monotone black; green for product states) |
| On accent | `#ffffff` | Text on the accent |
| Success / warning / error | `#33c482 / #b86e00 / #c62f2f` | Status only, never decoration |

### Type
- Headlines: **Scoutie Sans**, weight 400, tracking -.01em.
- Body: **Scoutie Sans**. Labels and code: **Geist Mono**.
- If a face isn't installed, use the closest system font of the same style and say so — never silently swap to a default.

### Logo on every output
Every Mercury output carries the logo — never just the name typed out. Use the SVG under **Brand assets** (or a PNG exported from it at 4×); on dark or accent backgrounds use the one-colour version in `#ffffff` / `#ffffff`. Keep clear space equal to the mark's height and never stretch, outline or recolour it otherwise.
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
- **Theme** (set it on the master so every slide inherits it): dark 1 = `#1a1a1a`, light 1 = `#fefefe`, dark 2 = `#5a5a5a`, light 2 = `#f3f3f3`, accent 1–6 = `#1a1a1a`, `#1a1a1a`, `#818181`, `#5a5a5a`, `#6a6a6a`, `#c5c5c5`; heading font = Scoutie Sans, body font = Scoutie Sans.
- **Title slide**: background `#fefefe`; headline in Scoutie Sans 54–64 pt, ink; one-line subtitle in Scoutie Sans 20 pt, muted; the logo at the top left with clear space equal to its own height.
- **Section divider**: full-bleed `#f3f3f3` (or `#1a1a1a` with `#ffffff` text); section number in Geist Mono.
- **Content slide**: title in Scoutie Sans 32–40 pt; body Scoutie Sans 18–24 pt, max six bullets; one accent highlight at most.
- **Shapes and cards**: fill `#fbfbfb`, 1 pt `#d8d8d8` border, corner radius 16px (about 0.17 in).
- **Charts**: series in the accent order above; gridlines `#d8d8d8`; labels `#6a6a6a`; no 3-D, no gradients.
- **Footer**: Geist Mono 10 pt in `#6a6a6a`: Mercury · title · page number.
- When generating .pptx with code (e.g. python-pptx), write these colours and fonts into the theme and master first, then add slides from the master.

### Documents and PDF reports (Word, Google Docs, PDF)
- Page `#fefefe`, text `#1a1a1a`. H1 Scoutie Sans 28 pt, H2 20 pt, H3 15 pt; body Scoutie Sans 11 pt, line spacing 1.5.
- Table header row `#f3f3f3`, 1 pt `#d8d8d8` rules, numbers right-aligned in Geist Mono.
- Callouts: `#fbfbfb` box with a 3 pt left rule in `#1a1a1a`.
- Cover page: logo, title in Scoutie Sans, date and owner in Geist Mono.

### Email, social and diagrams
- Email: 600 px column on `#fefefe`; one primary button in `#1a1a1a` with `#ffffff` text, 8px corners.
- Social: square 1080 × 1080 or 1200 × 628; headline in Scoutie Sans; accent used once; logo bottom-left.
- Diagrams: nodes `#fbfbfb` with `#d8d8d8` borders and 16px corners; connectors `#6a6a6a`; the one emphasised node in `#1a1a1a`.


## Brand assets
### Logo (SVG)
Use this mark as-is: don't redraw, recolour (except to one solid colour on dark backgrounds), stretch or add effects.

```svg
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1a1a1a"/></svg>
```

### Fonts
- Scoutie Sans
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
  "$name": "Mercury",
  "core": "{core.version 1.0}",
  "dials": {
    "density": "Default",
    "shape": "Soft",
    "depth": "Hairline",
    "contrast": "Quiet"
  },
  "accent-scope": "monotone black; green for product states",
  "surface": {
    "ground": {
      "$type": "color",
      "$value": "#fefefe"
    },
    "raised": {
      "$type": "color",
      "$value": "#fbfbfb"
    },
    "card": {
      "$type": "color",
      "$value": "#fbfbfb"
    },
    "muted": {
      "$type": "color",
      "$value": "#f3f3f3"
    }
  },
  "ink": {
    "primary": {
      "$type": "color",
      "$value": "#1a1a1a"
    },
    "body": {
      "$type": "color",
      "$value": "#5a5a5a"
    },
    "muted": {
      "$type": "color",
      "$value": "#6a6a6a"
    }
  },
  "line": {
    "default": {
      "$type": "color",
      "$value": "#d8d8d8"
    },
    "width": {
      "$type": "dimension",
      "$value": "0.5px"
    },
    "style": {
      "$type": "string",
      "$value": "solid 0.5px"
    }
  },
  "accent": {
    "$type": "color",
    "$value": "#1a1a1a"
  },
  "action": {
    "primary-bg": {
      "$type": "color",
      "$value": "#1a1a1a"
    },
    "primary-hover": {
      "$type": "color",
      "$value": "#1a1a1a"
    },
    "focus-ring": {
      "$type": "color",
      "$value": "#1a1a1a"
    }
  },
  "status": {
    "success": {
      "$type": "color",
      "$value": "#33c482"
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
        "Scoutie Sans"
      ]
    },
    "body": {
      "$type": "fontFamily",
      "$value": [
        "Scoutie Sans"
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
      "$value": 400
    },
    "tracking-display": {
      "$type": "dimension",
      "$value": "-.01em"
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
      "$value": "{core.radius.16}"
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
      "$value": "coreline"
    }
  },
  "overrides": [
    {
      "token": "radius-node",
      "value": "13px",
      "reason": "Workflow nodes sit one step inside the 16px frame radius"
    }
  ]
}
```
