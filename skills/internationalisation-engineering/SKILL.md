---
name: internationalisation-engineering
description: "Engineering practice: Internationalisation and localisation — Externalise every string, format numbers and dates by locale, handle plurals and right-to-left layouts, and prove it with pseudo-localisation, so adding a language is translation work rather than a rewrite. Use in any language or framework whenever this practice applies, and when reviewing work that should follow it."
type: engineering
stack: practice
core: "1.0"
checked: 2026-10-26
---

# Internationalisation and localisation

Externalise every string, format numbers and dates by locale, handle plurals and right-to-left layouts, and prove it with pseudo-localisation, so adding a language is translation work rather than a rewrite.

Use this from the first user-facing string in any product that may ship in more than one language or region, and when adding a new locale. It prevents hard-coded text, broken grammar from string concatenation, wrong number and date formats, truncated translations and mirrored layouts that fall apart.

## How to do it
1. **Choose a message format and library** — Pick an ICU MessageFormat-compatible library for the stack (for example FormatJS on the web, the platform string catalogues on iOS and Android) and one file per locale. Agree key naming (feature.screen.element) and a source locale.
2. **Externalise every user-facing string** — Move all visible text, accessible labels, error messages, email and notification copy into the message catalogue. Give each message a description for translators explaining where it appears and any length limit.
3. **Use whole messages with placeholders** — Write complete sentences with named placeholders ({name} shared {count} files) instead of concatenating fragments, so translators can reorder words. Never build sentences from separate translated pieces.
4. **Handle plurals and gender with ICU rules** — Use plural and select syntax for every count and gendered phrase; do not hard-code singular and plural with an if statement, because many languages have more than two plural forms.
5. **Format by locale, store neutrally** — Store timestamps in UTC and amounts as integer minor units with a currency code. Format dates, times, numbers, currencies, units and lists with the platform Intl or locale APIs at display time, using the user's locale and time zone.
6. **Support right-to-left** — Set the document or view direction from the locale, use logical layout properties (margin-inline-start, padding-inline-end, start and end alignment) instead of left and right, mirror directional icons, and isolate user-generated text with bidi isolation.
7. **Pseudo-localise in development and CI** — Generate a pseudo-locale that accents characters, expands strings by about 40% and wraps them in markers. Run the app and screenshot tests in it to catch hard-coded strings, truncation and layout breakage before real translation.
8. **Run the translation workflow** — Extract new keys automatically, send them to translators with context and screenshots, fail CI on missing keys for shipped locales, and fall back to the source locale rather than showing raw keys.

## Checklist
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

## Do
- Give translators screenshots or a preview link for context
- Keep the source-locale catalogue as the single list of keys
- Test with a long-string locale and a right-to-left locale on every release

## Don't
- Do not put text inside images
- Do not derive the user's language from their IP address alone; respect their chosen setting
- Do not reuse one key for identical English text in different contexts

## Quality gates
| Gate | Tool | Threshold | When |
|---|---|---|---|
| No hard-coded strings | i18n lint rule (for example eslint-plugin-i18next or formatjs/no-literal-string) | 0 literal user-facing strings in components | Every pull request |
| Catalogue completeness | Message extraction and key diff | No missing keys for any shipped locale; pseudo-locale screenshots have no clipping | Every pull request and before release |

## Workflow
**Review**
- Reviewer checks new strings are externalised with descriptions
- Layout changes are checked in a right-to-left locale

**Definition of done**
- Pseudo-locale pass recorded
- New keys extracted and sent for translation

## Examples
### ICU plural message and locale formatting (`src/i18n/messages.en.json`)

```json
{
  "files.shared": {
    "defaultMessage": "{name} shared {count, plural, =0 {no files} one {# file} other {# files}} on {date, date, medium}",
    "description": "Activity feed line; name is a person, date is when they shared"
  },
  "cart.total": {
    "defaultMessage": "Total: {amount, number, ::currency/EUR}",
    "description": "Cart summary total, shown above the pay button"
  }
}
```

## Further reading
- [ICU documentation](https://unicode-org.github.io/icu/) — Message formatting, plural rules and locale data that most i18n libraries build on.
- [FormatJS](https://formatjs.github.io/) — ICU message syntax and Intl-based formatting for JavaScript apps.
- [WCAG standards and guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) — Language-of-page and language-of-parts requirements.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — Engineering skills for coding agents covering front-end practices such as localisation.

_Written for Celestial; the sources above inspired it._
