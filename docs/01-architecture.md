# 01 — Architecture

## The mental model

The site is a **static marketing site built with the Next.js App Router**. There is no backend, no database, and no authentication. Everything a visitor sees is either hardcoded JSX or a static asset in `public/`.

Two layers, and the split is consistent:

1. **Route files** (`src/app/**/page.tsx`) define the URL and, in most cases, do very little beyond composing section components.
2. **Section components** (`src/components/sections/*.tsx`) hold the actual layout and copy. They are large, self-contained blocks — a hero, a pricing table, a testimonial wall.

The clearest example is `src/app/services/page.tsx`, which is nine lines: it wraps `<ServicesGrid />` in a `<main>` and nothing else. The homepage does the same thing with seven sections stacked in order.

The exception is the eight service detail pages and three team profile pages. These do **not** use shared section components — each one is a self-contained ~185-line page with its own hero, responsibilities list, and tools list. See [02-routes-and-content.md](02-routes-and-content.md).

## Server vs. client components

Next.js App Router renders on the server by default. A component only opts into the browser by declaring `"use client"` at the top of the file.

Eight files currently do:

| File | Why it needs the client |
| --- | --- |
| `components/layout/Navbar.tsx` | `useState` for the mobile menu toggle |
| `components/sections/SavingsCalculator.tsx` | `useState` for role, hours, and rate inputs |
| `components/sections/ContactForm.tsx` | `useState` + `fetch` for form submission |
| `app/careers/page.tsx` | `useState` for search and department filtering |
| `components/sections/HeroSection.tsx` | Interactive elements |
| `components/sections/ServicesGrid.tsx` | Interactive elements |
| `components/sections/StatsBanner.tsx` | Interactive elements |
| `components/sections/Comparison.tsx` | Interactive elements |

Everything else is a server component. **Practical consequence:** you cannot export `metadata` from a file marked `"use client"`. This is why `app/careers/page.tsx` has no page-level SEO metadata — the filtering state forced it to be a client component. If you need both, split the interactive part into a child component and keep the page file on the server.

## The root layout

`src/app/layout.tsx` is the shell every page inherits. It does four things:

1. Loads Inter from `next/font/google` and exposes it as the `--font-inter` CSS variable.
2. Sets the site-wide `<title>` and `<meta description>`, plus the favicon (`/icon-03.svg`).
3. Injects a JSON-LD `SiteNavigationElement` block listing four service URLs for search engines.
4. Renders `<Navbar />` above `{children}`.

There is **no footer component**. Pages end wherever their last section ends.

## Styling

Tailwind CSS v4 through the PostCSS plugin — no `tailwind.config.js`. Design tokens are declared as CSS custom properties in `src/app/globals.css` and mapped into Tailwind's theme with the `@theme inline` block, which is what makes classes like `bg-primary` and `text-accent` work.

Full token list and usage rules: [05-style-guide.md](05-style-guide.md).

## Path aliases

`@/` maps to `src/`, configured in `tsconfig.json`. Imports look like:

```tsx
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
```

## What is deliberately absent

Knowing what *isn't* here saves time looking for it:

- No CMS or content API — all copy lives in `.tsx` files
- No test framework
- No CI/CD configuration in the repo
- No `.env` file or environment variables
- No `sitemap.ts` or `robots.ts`
- No footer
- No internationalization (`<html lang="en">` is hardcoded)
- No error boundaries (`error.tsx`) or loading states (`loading.tsx`)
- No `not-found.tsx` — 404s fall back to the Next.js default

## Version control

The repository currently has a single commit (`viewFullJob`). Git history is not a usable record of how the project evolved, which is the main reason this documentation set exists.