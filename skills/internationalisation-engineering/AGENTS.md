# AGENTS.md — Internationalisation and localisation

Externalise every string, format numbers and dates by locale, handle plurals and right-to-left layouts, and prove it with pseudo-localisation, so adding a language is translation work rather than a rewrite.

## How to do it
1. **Choose a message format and library** — Pick an ICU MessageFormat-compatible library for the stack (for example FormatJS on the web, the platform string catalogues on iOS and Android) and one file per locale. Agree key naming (feature.screen.element) and a source locale.
2. **Externalise every user-facing string** — Move all visible text, accessible labels, error messages, email and notification copy into the message catalogue. Give each message a description for translators explaining where it appears and any length limit.
3. **Use whole messages with placeholders** — Write complete sentences with named placeholders ({name} shared {count} files) instead of concatenating fragments, so translators can reorder words. Never build sentences from separate translated pieces.
4. **Handle plurals and gender with ICU rules** — Use plural and select syntax for every count and gendered phrase; do not hard-code singular and plural with an if statement, because many languages have more than two plural forms.
5. **Format by locale, store neutrally** — Store timestamps in UTC and amounts as integer minor units with a currency code. Format dates, times, numbers, currencies, units and lists with the platform Intl or locale APIs at display time, using the user's locale and time zone.
6. **Support right-to-left** — Set the document or view direction from the locale, use logical layout properties (margin-inline-start, padding-inline-end, start and end alignment) instead of left and right, mirror directional icons, and isolate user-generated text with bidi isolation.
7. **Pseudo-localise in development and CI** — Generate a pseudo-locale that accents characters, expands strings by about 40% and wraps them in markers. Run the app and screenshot tests in it to catch hard-coded strings, truncation and layout breakage before real translation.
8. **Run the translation workflow** — Extract new keys automatically, send them to translators with context and screenshots, fail CI on missing keys for shipped locales, and fall back to the source locale rather than showing raw keys.

## Checklist (before a pull request)
- [ ] No hard-coded user-facing strings remain in components
- [ ] Every message has a translator description
- [ ] Plurals and gendered phrases use ICU plural or select
- [ ] Dates, numbers and currencies are formatted with locale APIs
- [ ] Layout uses logical properties and works in a right-to-left locale
- [ ] The app renders correctly in the pseudo-locale with no clipped text
- [ ] CI fails on missing keys for shipped locales

## Rules
- Never concatenate translated fragments to build a sentence; use one message with placeholders. _(Word order and grammar differ between languages.)_
- Format dates, numbers and currency only with locale-aware APIs, never with manual string templates. _(Separators, order and symbols vary by locale.)_
- Components use logical CSS or start/end layout values instead of left and right. _(Right-to-left support then comes from setting one direction attribute.)_
- Do not fix widths to fit English text; allow labels to grow and wrap. _(Translations are often 30–50% longer than English.)_
- Set the lang attribute (or platform locale) on the document and on any inline text in a different language. _(Screen readers choose pronunciation from it.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| No hard-coded strings | i18n lint rule (for example eslint-plugin-i18next or formatjs/no-literal-string) | 0 literal user-facing strings in components | Every pull request |
| Catalogue completeness | Message extraction and key diff | No missing keys for any shipped locale; pseudo-locale screenshots have no clipping | Every pull request and before release |

_Generated from the Celestial engineering practice “Internationalisation and localisation”._
