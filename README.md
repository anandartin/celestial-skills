# Celestial skills

120 open skills for AI agents from [Celestial](https://celestialskill.com) — design skills (how a brand looks), experience skills (how a journey works) and engineering skills (how it's built and shipped), all on one shared core.

Each folder in [`skills/`](skills/) is one skill: a `SKILL.md` your agent reads, plus tokens, a logo, `AGENTS.md` or editor rules where the skill has them.

## Use a skill

- **Claude Code** — copy a folder into `~/.claude/skills/` (every project) or `.claude/skills/` in a repository. Claude uses it whenever a request fits.
- **Any agent that reads skills** — install with the open skills CLI: `npx skills add anandartin/celestial-skills`.
- **Claude (claude.ai)** — zip a skill's folder and upload it under Settings → Capabilities → Skills.
- **ChatGPT, Gemini and other assistants** — attach or paste the skill's `SKILL.md`, then ask, e.g. "Build the sign-up flow with this skill."
- **Codex, Copilot, Cursor** — engineering skills include `AGENTS.md` and `rules/<name>.mdc`; each skill's README says where they go.

Browse, preview and remix every skill at [celestialskill.com](https://celestialskill.com).

## Design skills (3)

How a brand looks.

| Skill | What it covers |
|---|---|
| [Jupiter](skills/jupiter-design/) | A neutral admin system: Inter at 14px, white cards on a #fafafa sidebar, #e5e5e5 hairlines, 10px corners, a #171717 primary button and one blue scale reserved for data. |
| [Mars](skills/mars-design/) | Editorial serif headlines on warm paper neutrals, near-black ink, one hot-orange accent reserved for numbers, and mono eyebrow labels in square brackets. |
| [Mercury](skills/mercury-design/) | One geometric sans at weight 400, near-white greyscale surfaces, hairline #d8d8d8 borders, 8px black buttons, and a green accent that appears only inside the product. |

## Experience skills (54)

How a journey works.

| Skill | What it covers |
|---|---|
| [Applying for a government benefit online](skills/benefit-application-experience/) | A resident checks they might be eligible, applies in short sections they can save and return to, uploads evidence from a phone, and knows when to expect a decision. |
| [Applying for a job with screening questions](skills/job-application-experience/) | A candidate applies with their CV, answers job-related screening questions, asks for adjustments, and gets honest status updates until a decision. |
| [Applying for a personal loan with an eligibility check first](skills/loan-application-experience/) | A customer checks their chances of approval without affecting their credit score, then applies with a clear total cost and time to think. |
| [Applying to rent a home with fair, published criteria](skills/rental-application-experience/) | A prospective tenant sees the criteria before applying, adds references and consents to checks, and receives a decision with reasons. |
| [Booking a clinic appointment](skills/clinic-booking-experience/) | An older patient or their carer books the right appointment on a phone, with large text, clear choices and nothing clinical left ambiguous. |
| [Booking a ride and sharing the trip](skills/ride-booking-experience/) | A rider books a car, sees the driver and fare before it arrives, and can share their trip or get help at any point. |
| [Building and sharing a report from a dashboard](skills/report-builder-experience/) | An analyst turns a dashboard view into a report with clear filters, shares it with people who can see the same data, and schedules a regular export. |
| [Buying tickets for an event with seat choice and fair queueing](skills/event-tickets-experience/) | A fan joins a fair queue, picks seats on an accessible map with full prices shown, and pays before their seats are released. |
| [Cancelling a subscription in as few steps as signing up](skills/subscription-cancellation-experience/) | A subscriber finds cancel where they expect it, sees what happens to their access and money, and is done in no more steps than it took to join. |
| [Checking in for a flight on a phone](skills/flight-check-in-experience/) | A passenger checks in on their phone, chooses or keeps a seat, and gets a boarding pass that works offline at the gate. |
| [Checking out as a guest on the web with address lookup and secure payment](skills/guest-checkout-experience/) | A shopper pays without creating an account, with an address lookup, clear totals and strong customer authentication that does not lose their basket. |
| [Choosing and enrolling in an online course](skills/course-enrolment-experience/) | A learner compares courses, sees the total cost and time commitment, pays, and starts the first lesson on the same day. |
| [Choosing which alerts arrive where, with quiet hours](skills/notification-preferences-experience/) | A customer decides which alerts they get by email, push or text, sets quiet hours for their time zone, and knows that essential security and legal messages will still reach them. |
| [Comparing options on a product page and adding to basket](skills/product-page-to-cart-experience/) | A shopper picks the right size, colour and delivery option on one product page and adds it to the basket knowing the full price and when it will arrive. |
| [Connecting a third-party tool through an authorisation screen](skills/integration-connect-experience/) | A work user connects another tool to their workspace, sees exactly what access is being granted and why, approves on the other tool's consent screen, and can test, limit or disconnect the connection later. |
| [Converting from a free trial to a paid plan without surprises](skills/free-trial-to-paid-experience/) | A trial user always knows when the trial ends, what they will pay and how to stop, so choosing to pay is a decision rather than an accident. |
| [Creating an account and verifying email on a consumer web app](skills/sign-up-and-verify-experience/) | A new customer creates an account with only an email and password, confirms the address with a code or link, and lands inside the product without losing what they started. |
| [Downloading your data and closing your account](skills/account-deletion-and-export-experience/) | A customer downloads a copy of their data in a readable format and closes their account, knowing exactly what is deleted, what is kept by law, and how long they have to change their mind. |
| [Drafting content with an AI assistant and reviewing it before sending](skills/ai-drafting-assistant-experience/) | A user asks an AI assistant for a first draft, checks and edits it with sources visible, and decides what is sent. |
| [Drafting, reviewing and scheduling a publication](skills/content-publishing-review-experience/) | A writer drafts a piece, legal and brand reviewers check it in parallel, and an editor schedules it once every required approval is in. |
| [Finding a product in a large catalogue with search and filters](skills/product-search-and-filter-experience/) | A shopper narrows thousands of products to a short list they trust, using forgiving search and filters that never hide how many results remain. |
| [Finding anything in a product with search and a command palette](skills/command-palette-search-experience/) | A busy product user jumps to any record, page or action from one keyboard shortcut, with results that are ranked, scoped and safe to act on. |
| [First-run onboarding for an operations admin](skills/admin-onboarding-experience/) | Take a busy admin from sign-up to their first real result in one sitting — no tour, no empty dashboard, no dead ends. |
| [Following an order from dispatch to delivery, including delays](skills/order-tracking-experience/) | A customer always knows where their parcel is, when it will arrive and what to do if it is late, without having to contact support. |
| [Getting a new starter ready for day one across HR, manager and IT](skills/employee-onboarding-experience/) | HR, the hiring manager and IT each complete their part of getting a new starter ready, and the starter knows what to expect before day one. |
| [Getting help from an AI support assistant with handoff to a person](skills/support-chat-ai-experience/) | A customer asks for help in their own words, gets a clear answer or action from an AI assistant they know is AI, and reaches a person with full context when needed. |
| [Giving to a charity once or monthly](skills/donation-experience/) | A supporter chooses an amount, gives once or monthly, makes a tax declaration if eligible, and receives a receipt and an easy way to manage their gift. |
| [Importing a spreadsheet of records with column mapping](skills/csv-data-import-experience/) | A user uploads a spreadsheet, maps columns to fields, fixes errors in place, and imports only clean records with an undo window. |
| [Inviting colleagues to a workspace and assigning roles](skills/team-invite-and-roles-experience/) | A workspace admin invites colleagues by email or in bulk, gives each the least access they need with roles explained in plain words, and can see and fix pending invites. |
| [Joining a video consultation as a patient](skills/telehealth-visit-experience/) | A patient checks their device, waits in a clear virtual waiting room, talks to a clinician with captions available, and leaves knowing exactly what happens next. |
| [Making an insurance claim after an incident](skills/insurance-claim-experience/) | A policyholder reports what happened, adds photos, and always knows where the claim stands and what happens next. |
| [Mobile checkout for a returning shopper](skills/mobile-checkout-experience/) | From product to paid in under a minute on a phone, with nothing re-typed and no surprise costs at the end. |
| [Opening a current account online for a new customer](skills/bank-account-opening-experience/) | A new customer opens a current account on their phone, proves who they are once, and knows exactly what happens if a check needs more time. |
| [Ordering a meal for delivery with dietary and allergen needs](skills/food-delivery-order-experience/) | A parent orders dinner for the family, filters reliably by allergens, and gets food that is safe, on time and as described. |
| [Paying someone new from a banking app](skills/send-money-experience/) | A customer adds a new payee, sees whether the name matches the account, and gets a clear fraud warning before money leaves. |
| [Rebooking after a cancelled train or flight](skills/travel-disruption-rebooking-experience/) | A traveller whose train or flight is cancelled sees their options straight away, rebooks or claims a refund, and learns what compensation they can claim. |
| [Refund approval with an AI agent](skills/ai-refund-approval-experience/) | Let an agent draft and run refunds while a human stays in charge of anything irreversible — with a trace anyone can read. |
| [Requesting a purchase with budget checks and approvals](skills/purchase-order-approval-experience/) | A requester asks to buy something, the system checks budget, and the right approvers sign off in order before a purchase order is issued. |
| [Requesting a repeat prescription with pickup or delivery](skills/prescription-refill-experience/) | A patient picks the repeat medicines they need, sees what needs a review, and chooses pickup or delivery with a clear ready date. |
| [Requesting time off with balances, team cover and approval](skills/leave-request-experience/) | An employee checks their balance and team cover, requests time off, and their manager approves it with the information they need. |
| [Reserving a restaurant table with access needs and deposits](skills/restaurant-reservation-experience/) | A diner reserves a table for their group, says what access or dietary needs they have, and understands any deposit before paying it. |
| [Resetting a forgotten password safely](skills/password-reset-experience/) | A customer who has forgotten their password proves control of their email, sets a new password and is signed back in, without the flow helping an attacker. |
| [Reviewing work together with comments and mentions](skills/comments-and-mentions-experience/) | A reviewer leaves comments anchored to the work, mentions the right people, and closes threads once each point is settled. |
| [Searching, comparing and booking a hotel stay](skills/hotel-booking-experience/) | A traveller searches for a stay, compares options on the full price including taxes and fees, and books knowing the cancellation terms. |
| [Setting up a new business workspace to first value](skills/workspace-setup-experience/) | The first person in a new business workspace names it, brings in one real piece of work and one colleague, and reaches a useful result in the first session instead of a blank screen. |
| [Setting up and paying a recurring bill](skills/bill-payment-experience/) | A customer sets up a regular bill payment, sees what will leave their account and when, and gets reminders early enough to act. |
| [Signing in with a passkey or one-time link, with a fallback](skills/passwordless-sign-in-experience/) | A returning customer signs in with a passkey on their device or a one-time email link, and always has a clear fallback when the first method is not available. |
| [Starting a return or exchange and getting the refund](skills/returns-and-exchanges-experience/) | A customer returns or swaps an item in a few steps, picks an accessible drop-off or collection, and knows exactly when the refund will land. |
| [Submitting an expense with a receipt for approval and payout](skills/expense-approval-experience/) | An employee submits an expense with a receipt, their manager approves it, and finance pays it, with every step visible to everyone involved. |
| [Triaging support tickets with AI suggestions and agent review](skills/support-ticket-triage-experience/) | Incoming tickets are categorised and prioritised with AI suggestions, agents confirm or correct them, and urgent cases reach the right team fast. |
| [Turning on two-step verification and saving recovery codes](skills/two-factor-setup-experience/) | A customer adds a second step to sign-in using an authenticator app, a security key or text message, saves recovery codes and confirms everything works before leaving. |
| [Upgrading or downgrading a subscription plan with prorated pricing](skills/plan-upgrade-experience/) | A subscriber changes plan and sees exactly what they will pay today, what changes next bill and what they gain or lose, before confirming. |
| [Uploading a file and sharing it with the right access](skills/file-sharing-and-permissions-experience/) | A user uploads a file, chooses exactly who can view or edit it, and can see and change that access at any time. |
| [Verifying identity with a document and selfie for a regulated service](skills/identity-verification-experience/) | A customer opening an account with a regulated service photographs an identity document and takes a selfie, understands why and how the data is used, and gets a clear decision or a human alternative. |

## Engineering skills (63)

How it is built and shipped.

| Skill | What it covers |
|---|---|
| [Accessibility audit](skills/accessibility-audit-engineering/) | Combine automated scans with hands-on keyboard and screen-reader passes, so a UI meets WCAG 2.2 AA for the people who actually use assistive technology. |
| [Angular enterprise app](skills/angular-app-engineering/) | A large Angular app built from standalone components and signals, with lazy feature routes, typed HTTP services and strict compiler settings. |
| [ASP.NET Core Web API](skills/aspnet-core-api-engineering/) | A C# Web API on ASP.NET Core with minimal-API endpoint groups, EF Core migrations and integration tests that boot the real host. |
| [Browser extension (Manifest V3)](skills/chrome-extension-engineering/) | A Manifest V3 browser extension in TypeScript: an event-driven service worker, isolated content scripts and a popup, asking for the fewest permissions that do the job. |
| [CI/CD pipelines](skills/ci-cd-pipelines-engineering/) | Pipelines that give a pass or fail in minutes, build once, preview every change and keep main always deployable. |
| [Code review](skills/code-review-engineering/) | Review a pull request in a fixed order, from whether it is correct to whether it is tested, so real problems are caught and feedback is clear enough to act on. |
| [Context engineering for coding agents](skills/context-engineering-engineering/) | Give a coding agent the right information at the right time, and nothing else, so it follows your conventions, touches the right files and needs fewer corrections. |
| [Database schema and safe migrations](skills/database-migrations-engineering/) | Change the schema in small expand-then-contract steps that old and new code can both run against, so deploys never need downtime or a frantic rollback. |
| [dbt analytics project](skills/dbt-analytics-engineering/) | A version-controlled analytics project in SQL and dbt, with layered models, tested data contracts and documented metrics. |
| [Dependency and supply-chain hygiene](skills/dependency-supply-chain-engineering/) | Know exactly what code you ship and where it came from, so a compromised or abandoned package cannot slip into production unnoticed. |
| [Deprecation and removal](skills/deprecation-and-removal-engineering/) | Retire code, APIs and features in announced, measured steps and then delete them completely, so the codebase shrinks without breaking anyone who still depends on it. |
| [Design tokens to code](skills/design-tokens-to-code-engineering/) | Generate platform code from one token source, build components that only read tokens and guard them with visual regression, so a brand change ships in one commit. |
| [Django web app](skills/django-app-engineering/) | A server-rendered Python web app with the built-in admin for operations staff, design tokens as CSS variables and small sprinkles of interactivity. |
| [Edge Worker API](skills/worker-api-engineering/) | A small JSON API running at the edge: one entry file, a hosted Postgres behind it, rate limits and security headers by default. |
| [End-to-end testing](skills/end-to-end-testing-engineering/) | Test whole user journeys through the real interface with stable selectors, event-based waits and isolated data, so the suite catches breakage without flaking. |
| [Expo React Native app](skills/expo-react-native-app-engineering/) | One TypeScript codebase for iOS and Android on React Native and Expo, with file-based navigation, cloud builds and over-the-air fixes for JavaScript changes. |
| [FastAPI service](skills/fastapi-service-engineering/) | An async Python API where Pydantic models define every request and response, and the OpenAPI document is generated from the code. |
| [Fastify REST API](skills/fastify-api-engineering/) | A typed JSON REST API on Node.js where every route declares its request and response schema, so validation, serialisation and docs come from one source. |
| [Feature flags](skills/feature-flags-engineering/) | Ship code dark, roll it out in stages, switch it off in seconds, and delete the flag once the rollout is done. |
| [Flutter app](skills/flutter-app-engineering/) | One Dart codebase drawn by Flutter on iOS and Android, with tokens as a theme extension, Riverpod for state and golden tests guarding every component. |
| [Framework upgrades](skills/framework-upgrades-engineering/) | Upgrade a framework or major dependency in planned, reversible steps with tests at each one, so you stay current without a long, risky freeze. |
| [Git workflow](skills/git-workflow-engineering/) | Work in short-lived branches with small, well-described commits, so history explains itself and any change can be reviewed, bisected or reverted. |
| [Go HTTP service](skills/go-http-service-engineering/) | A Go HTTP service built on the standard library with a small router, explicit dependencies passed through structs, and table-driven tests. |
| [GraphQL API server](skills/graphql-api-engineering/) | A code-first GraphQL API in TypeScript with batched data loading, field-level authorisation, cost limits and a schema that only changes in backwards-compatible steps. |
| [Incident response](skills/incident-response-engineering/) | Clear roles, mitigation before diagnosis and a blameless postmortem, so outages end sooner and do not repeat. |
| [Incremental implementation](skills/incremental-implementation-engineering/) | Build in thin vertical slices that each compile, pass tests and get committed, so you always have a working save point and any mistake costs one small revert. |
| [Internationalisation and localisation](skills/internationalisation-engineering/) | Externalise every string, format numbers and dates by locale, handle plurals and right-to-left layouts, and prove it with pseudo-localisation, so adding a language is translation work rather than a rewrite. |
| [Jetpack Compose Android app](skills/compose-android-app-engineering/) | A native Android app in Kotlin with declarative UI, one-way data flow and screenshot plus journey tests. |
| [Kubernetes with Helm](skills/kubernetes-helm-engineering/) | Services deployed to Kubernetes through versioned Helm charts with health probes, resource limits and safe rollouts by default. |
| [Laravel app](skills/laravel-app-engineering/) | A server-rendered PHP app on Laravel with Blade components styled from design tokens, queued jobs and feature tests for every route. |
| [Launch readiness](skills/launch-readiness-engineering/) | Run a fixed set of checks before a production launch, from a tested rollback to named owners and a watch window, so launches are boring and problems are caught while they are small. |
| [LLM features and evals](skills/llm-features-and-evals-engineering/) | Build features on large language models with versioned prompts, an evaluation set that gates every change, guardrails and cost and latency budgets, so quality is measured instead of hoped for. |
| [NestJS service](skills/nestjs-service-engineering/) | A modular TypeScript service where each domain is a Nest module with its own controllers, providers and tests, wired by dependency injection. |
| [Next.js full-stack app](skills/nextjs-app-engineering/) | A full-stack TypeScript web app on the App Router, rendering on the server by default and shipping client JavaScript only where a screen needs interaction. |
| [Nuxt web app](skills/nuxt-app-engineering/) | A server-rendered Vue 3 app in TypeScript, with typed server routes in the same project and data fetched once on the server and reused on the client. |
| [Observability](skills/observability-engineering/) | Structured logs, metrics and traces tied to user-facing objectives, with alerts that page only when users are affected. |
| [Privacy by design](skills/privacy-by-design-engineering/) | Collect only the personal data a feature needs, keep it only as long as needed and make it easy to find and delete, so privacy holds up in code and not just in policy. |
| [Python ML service](skills/python-ml-service-engineering/) | Reproducible PyTorch training with versioned model artifacts, served behind a small typed HTTP API with evaluation gates. |
| [Rails app with Hotwire](skills/rails-app-engineering/) | A server-rendered Ruby on Rails app using Turbo and Stimulus for interactivity, with design tokens as CSS variables and no separate front-end build. |
| [React web app](skills/react-web-app-engineering/) | A single-page product app in TypeScript with utility-first styling, fast unit tests and real-browser journey tests. |
| [Release and versioning](skills/release-and-versioning-engineering/) | Semantic versions, a human-written changelog and tagged releases, so users know what changed and whether upgrading is safe. |
| [Requirements interview](skills/requirements-interview-engineering/) | Turn a vague request into a confirmed plan by asking one decision-changing question at a time with a recommended default, so nothing gets built on a guess. |
| [REST API design](skills/rest-api-design-engineering/) | Design resources, status codes, errors and pagination deliberately and write them down first, so clients can integrate once and keep working as the API evolves. |
| [Rust Axum service](skills/rust-axum-service-engineering/) | A Rust web service on Axum and Tokio with typed extractors, compile-time checked SQL and errors that map to HTTP responses through one type. |
| [Rust CLI tool](skills/rust-cli-tool-engineering/) | A single-binary command-line tool in Rust with typed argument parsing, clear exit codes and tests that run the real binary. |
| [Safe refactoring](skills/safe-refactoring-engineering/) | Restructure code in small steps that never change behaviour, each one checked by tests, so the design improves without new bugs. |
| [Secure code review](skills/secure-code-review-engineering/) | Read every change the way an attacker would, so injection, broken access control and leaked secrets are caught before merge instead of after an incident. |
| [Server-rendered marketing site](skills/marketing-site-engineering/) | Content pages that load fast on a slow phone: rendered on the server, almost no JavaScript, and strict performance gates. |
| [Source-grounded development](skills/source-grounded-development-engineering/) | Check every framework and library decision against the official documentation for the exact version installed, so code uses APIs that actually exist and behave as written. |
| [Spec before code](skills/spec-before-code-engineering/) | Write a one-page spec and a step plan before implementing, then build and check against it, so the work matches what was asked the first time. |
| [Spec-driven development](skills/spec-driven-development-engineering/) | Keep a versioned spec in the repository as the source of truth that people and coding agents implement against, with requirement IDs traced into tasks, tests and pull requests, so behaviour and intent never quietly drift apart. |
| [Spring Boot service](skills/spring-boot-service-engineering/) | A Java REST service on Spring Boot with layered packages by feature, validated DTOs, Flyway migrations and integration tests against real dependencies. |
| [SvelteKit web app](skills/sveltekit-app-engineering/) | A SvelteKit app in TypeScript where pages load data on the server, forms work without JavaScript and get enhanced when it arrives. |
| [SwiftUI iOS app](skills/swiftui-ios-app-engineering/) | A native iPhone app with declarative UI, async networking, Dynamic Type everywhere and UI tests for each journey. |
| [Systematic debugging](skills/systematic-debugging-engineering/) | Reproduce the fault, narrow it down, test one hypothesis at a time and fix the cause, so bugs stay fixed instead of moving around. |
| [Task breakdown](skills/task-breakdown-engineering/) | Turn a spec into small, ordered tasks that each have acceptance criteria and a check that proves them done, so work can be reviewed, handed to an agent and finished one piece at a time. |
| [Tauri desktop app](skills/tauri-desktop-app-engineering/) | A small, fast desktop app for macOS, Windows and Linux: a Rust core owns files, data and the OS, and a TypeScript web UI talks to it through typed commands. |
| [Technical documentation](skills/technical-documentation-engineering/) | Keep a working README, short decision records and docs that change in the same pull request as the code, so people and agents can trust what they read. |
| [Terraform infrastructure](skills/terraform-infrastructure-engineering/) | Cloud infrastructure declared in Terraform, changed only through reviewed plans, with small state files and reusable modules. |
| [Test-first development](skills/test-first-development-engineering/) | Write a failing test for one small behaviour, make it pass with the least code, then tidy up, so every line you ship is already proven. |
| [Threat modelling](skills/threat-modelling-engineering/) | Spend thirty minutes before building a feature asking what could go wrong, so security controls are designed in rather than bolted on after launch. |
| [TypeScript npm library](skills/typescript-library-engineering/) | A publishable TypeScript package with an explicit exports map, correct types for every consumer, a tracked public API and semver releases from changesets. |
| [Web performance](skills/web-performance-engineering/) | Measure Core Web Vitals in the lab and the field, fix the biggest cause first and hold the line with budgets, so pages stay fast as features pile on. |

## Contributing

The skills are written and reviewed on [celestialskill.com](https://celestialskill.com). This repository updates itself from there: a skill appears here within minutes of being published on the site, and the full set is re-checked every six hours. Please don't edit `skills/` by hand — changes are overwritten. To suggest a change, open an issue, or create or remix a skill on the site and request publishing.

## Licence

[Apache License 2.0](LICENSE). The licence covers the skill text and files; it grants no rights to any trademark, brand name or logo a skill describes.
