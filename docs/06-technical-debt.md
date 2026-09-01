# 06 — Technical Debt & Backlog

Everything below was found by reading the code, not by testing the live site. Priorities reflect impact on leads and on maintenance cost.

---

## P0 — Breaks the conversion path

### 1. "Book a call" leads nowhere
Every CTA in the navigation points at `/#contact`, which lands on a card whose "Open calendar" button links to `#calendar` — an anchor that does not exist. The card's own footer says "Calendar embed placeholder." The site's primary call to action is a dead end.
*Fix:* embed a real booking tool. See [04-integrations.md](04-integrations.md).

### 2. Contact form runs on a placeholder endpoint
`ContactForm.tsx` posts to a Formspree form marked `// Replace with the real endpoint later`. If nobody is monitoring that inbox, inbound leads are being lost silently.
*Fix:* confirm ownership of form `mdaqdywp`, then move the endpoint to an environment variable.

### 3. Calculator email capture is inert
The "Email me the report" button has no handler and the email input has no state binding. Visitors who complete the calculator — the most qualified traffic on the site — cannot convert.

### 4. No analytics
Nothing installed. There is currently no way to know whether any of the above is costing traffic or leads.

---

## P1 — SEO

### 5. Sixteen of twenty pages share one title tag
Only `layout.tsx`, `how-it-works`, `services/virtual-assistant`, and `services/property-management` export `metadata`. Everything else inherits "Virtual Value Bridge | BPO Outsourcing." Duplicate titles across service pages directly undercut the organic search strategy.
*Fix:* add a `metadata` export to each remaining page. Note that `careers/page.tsx` is a client component and cannot export metadata until the filtering logic is extracted into a child.

### 6. Domain mismatch in structured data
The JSON-LD block in `layout.tsx` references `virtualvaluebridge.com`; the contact section uses `info@vvbridge.net`. Decide which is canonical and align both.

### 7. No `sitemap.ts` or `robots.ts`
Next.js generates both from files of those names in `src/app/`. Small effort, meaningful payoff.

### 8. No footer
There is no footer component anywhere. Beyond looking unfinished, this costs internal linking — usually the cheapest SEO win available on a marketing site.

---

## P2 — Maintenance cost

### 9. Eight near-identical service pages
Each is ~185 lines with the same structure and different strings. Consolidating into `src/app/services/[slug]/page.tsx` plus one data file would cut roughly 1,300 lines to a few hundred and turn a copy change from "find the right file among eight" into "edit one array."
*Same pattern applies to the three team profile pages.*

### 10. `careers` section is built but hidden
`/careers` and `/careers/accounting-specialist` render fine, but the nav links are commented out in both the desktop and mobile blocks of `Navbar.tsx`. The job list is a `mockJobs` array of five placeholder-looking entries, and only one of the five has a detail page.
*Decision needed:* publish it with real listings, or delete it.

### 11. `ServicesGrid` commented out on the homepage
Line 15 of `src/app/page.tsx` is `{/* <ServicesGrid hideHeader={true} /> */}`. Intentional or forgotten? The `hideHeader` prop exists solely for this call site.

### 12. `StatsBanner` is dead code
The component is defined (47 lines, with five business stats) but imported nowhere. It also contains a stale developer comment written in Spanish that quotes an old design brief.

### 13. Hardcoded colours bypassing tokens
`#0B132B` appears in five files, and the calculator's sliders use `#2563eb` while `--primary` is `#1e40af` — a visible mismatch. Full list in [05-style-guide.md](05-style-guide.md).

### 14. Unverified business claims
"50+ specialists," "4.9 rating," "300+ processes optimized," "−47% cost per ticket," "+22h recovered per week" are hardcoded in components with no source of truth. Someone on the business side should sign off before launch.

---

## P3 — Engineering hygiene

### 15. Single-commit history
The repo has one commit (`viewFullJob`). No branching model, no meaningful history, no way to bisect. Adopt small, descriptive commits going forward.

### 16. No tests and no CI
No test framework installed and no pipeline configured. At minimum, run `npm run build` and `npm run lint` on every push — a build failure on a marketing site means the whole site is down.

### 17. No error, loading, or 404 pages
No `error.tsx`, `loading.tsx`, or `not-found.tsx`. Visitors hitting a bad URL get the unstyled Next.js default.

### 18. Silent form failure handling
A failed submission only writes to `console.error`. The visitor sees the spinner stop and nothing else.

### 19. create-next-app leftovers
`public/next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg` are unused.

### 20. Unused import
`Menu` is imported but never used in `src/app/services/virtual-assistant/page.tsx`.

### 21. Naming inconsistency in the virtual assistant page
Card label "Administrative Support," URL `/services/virtual-assistant`, component `AdministrativeSupportPage`, metadata title "Hire a Virtual Assistant." Four names for one page. Pick one for the user-facing copy and be deliberate about the URL, which has SEO consequences.

---

## Suggested sequence

| Phase | Items |
| --- | --- |
| **Before the next campaign** | 1, 2, 3, 4 — the conversion path has to work before you drive traffic to it |
| **SEO sprint** | 5, 6, 7, 8 |
| **Refactor** | 9, plus decisions on 10 and 11 |
| **Cleanup** | 12–14, then 15–21 as you touch each file |
