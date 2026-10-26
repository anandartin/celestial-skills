# AGENTS.md — Privacy by design

Collect only the personal data a feature needs, keep it only as long as needed and make it easy to find and delete, so privacy holds up in code and not just in policy.

## How to do it
1. **Inventory the personal data** — For the feature, list every personal field collected or derived (name, email, address, IP, device id, location, free text), its purpose, where it is stored, who can access it and which third parties receive it. Record it in the data inventory beside the code.
2. **Minimise** — Remove any field without a clear purpose. Prefer coarser data (birth year instead of date, region instead of precise location), derived flags instead of raw values, and pseudonymous ids instead of direct identifiers in analytics.
3. **Set retention for each store** — Give every table, bucket, log stream and backup a retention period tied to its purpose, and implement automatic expiry with a scheduled job or storage lifecycle rule. Document what happens at expiry: delete or anonymise.
4. **Gate collection on consent where required** — Load non-essential analytics, advertising and tracking scripts only after the user has opted in, and record the consent choice with timestamp and version. Make withdrawing consent as easy as giving it and honour it immediately.
5. **Keep personal data out of logs and telemetry** — Use structured logging with an allow-list of fields, redact emails, tokens, card numbers and free text by default, and never put personal data in URLs or query strings. Scrub error-tracker payloads and analytics events.
6. **Protect it at rest and in transit** — Encrypt stores holding personal data, restrict access by role, log administrative access and use field-level encryption for especially sensitive fields.
7. **Implement export and deletion** — Build a tested path that finds every record linked to a user across databases, files, caches, search indexes and third-party processors, and either exports or deletes it. Deletion propagates to backups by expiry and is confirmed to the user.
8. **Review with the privacy owner** — Walk the inventory, retention and deletion path with whoever owns privacy before release, and update the privacy notice if purposes or recipients changed.

## Checklist (before a pull request)
- [ ] Every personal field is in the data inventory with a purpose and location
- [ ] No field is collected without a documented purpose
- [ ] Each store has an automated retention rule
- [ ] Non-essential tracking loads only after opt-in
- [ ] Logs, error reports and analytics contain no direct personal data
- [ ] Export and deletion cover every store and third party, with a test
- [ ] The privacy notice reflects any new purpose or recipient

## Rules
- Every new personal-data field needs a stated purpose and retention period in the pull request. _(Data without a purpose is pure liability.)_
- Log with an allow-list of fields and redact personal data by default. _(Logs are copied widely, kept long and rarely access-controlled.)_
- Analytics events use pseudonymous ids and never carry names, emails or free text. _(Analytics tools are third parties with their own retention.)_
- Never place personal data in URLs, query strings or cache keys. _(URLs end up in browser history, server logs and referrer headers.)_
- Deletion must reach caches, search indexes, files and processors, not only the primary table. _(A partial delete is a broken promise to the user.)_

## Checks
| Gate | Tool | Threshold | When |
|---|---|---|---|
| PII in logs check | Log redaction tests + secret and PII scanner on log output in CI | 0 unredacted emails, tokens or card numbers in captured test logs | Every pull request |
| Deletion test | Integration test of the user deletion path | No records remain for the deleted test user in any store | Every pull request touching personal-data storage |

_Generated from the Celestial engineering practice “Privacy by design”._
