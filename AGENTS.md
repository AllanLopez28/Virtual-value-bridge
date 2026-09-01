<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project context

Marketing website for **Virtual Value Bridge**, a nearshore BPO placing bilingual specialists with US businesses. Static site — no backend, no database, no auth. All copy is hardcoded in `.tsx` files.

Next.js 16.2.9 (App Router) · React 19.2.4 · TypeScript · Tailwind CSS v4 · lucide-react.

## Before you start

Read the relevant doc first:

- Changing page copy → `docs/02-routes-and-content.md`
- Building a new page or section → `docs/05-style-guide.md`
- Touching the savings calculator → `docs/03-savings-calculator.md`
- Wiring up a form or integration → `docs/04-integrations.md`
- Looking for known issues → `docs/06-technical-debt.md`

## Conventions

- **Server components by default.** Only add `"use client"` when the file needs `useState` or an event handler. A `"use client"` file cannot export `metadata` — if you need both, extract the interactive part into a child component.
- **Every new page exports `metadata`** with a unique title and description. Sixteen of twenty existing pages currently don't; do not add to that count.
- **Use design tokens**, not hex values: `bg-primary`, `text-accent`, `bg-secondary`. Tokens are defined in `src/app/globals.css`. Several files violate this — don't copy the violation.
- **Import via the `@/` alias** (`@/components/sections/HeroSection`).
- **Use `next/image`**, never `<img>`.
- **Icons from lucide-react only.** No other icon library.
- **Keep copy in arrays** near the top of the component, not scattered through JSX.
- **Tailwind v4** — there is no `tailwind.config.js`. Theme extensions go in the `@theme inline` block in `globals.css`.

## Structure

```
src/app/          One folder per route; page files are usually thin wrappers
src/components/sections/   The 13 section components that hold the real layout
src/components/layout/     Navbar (no footer exists)
public/           Flat image directory, referenced by absolute path
```

The eight `src/app/services/*/page.tsx` files are self-contained ~185-line pages, not wrappers. Same for the three `src/app/team/*/page.tsx` profiles. They follow an identical template — copy an existing one when adding another.

## Do not

- Do not change the constants in `SavingsCalculator.tsx` (`VVBRIDGE_HOURLY_RATE`, `LOCAL_OVERHEAD_MULTIPLIER`) without an explicit instruction. They are sales-facing pricing commitments, not implementation details.
- Do not alter hardcoded business claims (specialist counts, ratings, percentages) without an explicit instruction.
- Do not uncomment the `careers` nav links or the homepage `ServicesGrid` unless asked — both are deliberate-looking omissions pending a decision.
- Do not add a new dependency without flagging it. The dependency list is intentionally small.

## Verify before finishing

```bash
npm run lint
npm run build
```