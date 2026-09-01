# 05 — Style Guide

Read this before building a new page or section so it matches the rest of the site.

---

## Design tokens

Declared in `src/app/globals.css` as CSS custom properties, then exposed to Tailwind through `@theme inline`. Use the Tailwind class, not the hex value.

| Token | Hex | Tailwind classes | Used for |
| --- | --- | --- | --- |
| `--background` | `#f8fafc` | `bg-background` | Page background (light gray) |
| `--foreground` | `#0f172a` | `text-foreground` | Body text |
| `--primary` | `#1e40af` | `bg-primary`, `text-primary` | Corporate blue — headers, buttons, links |
| `--secondary` | `#0f172a` | `bg-secondary`, `text-secondary` | Navy — dark sections, headings |
| `--accent` | `#84cc16` | `bg-accent`, `text-accent` | Lime green — CTAs and highlights |

### Known token violations

Several places hardcode hex values instead of using tokens. Fix these when you touch the file:

| Value | Where | Should be |
| --- | --- | --- |
| `#0B132B` | `TeamProfiles.tsx`, `SavingsCalculator.tsx`, `HeroSection.tsx`, `ServicesGrid.tsx`, `team/page.tsx` | `secondary` — but note `#0B132B` and `#0f172a` are *not* the same colour, so confirm which is intended before replacing |
| `#2563eb` | `SavingsCalculator.tsx` slider gradients | `--primary` is `#1e40af` — the sliders render a visibly different blue than the rest of the page |
| `#84cc16` | `HeroSection.tsx` | `accent` |

---

## Typography

Inter, loaded via `next/font/google` in `layout.tsx` and bound to `--font-inter`. The `font-sans` class resolves to it. Do not import fonts anywhere else.

Observed hierarchy:

| Element | Classes |
| --- | --- |
| Page h1 | `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight` |
| Section h2 | `text-4xl md:text-5xl font-extrabold tracking-tight` |
| Card h3 | `text-2xl font-extrabold` |
| Body | `text-sm` / `text-base` / `text-lg` with `leading-relaxed` |
| Eyebrow label | `text-xs font-bold uppercase tracking-widest` |
| Fine print | `text-[10px] font-medium text-slate-500` |

`font-extrabold` on headings and `font-bold` on labels is consistent across the site. Match it.

---

## Recurring layout patterns

### Section shell

```tsx
<section className="w-full py-20 md:py-32 bg-[token]">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    {/* content */}
  </div>
</section>
```

Max widths in use: `max-w-7xl` for full sections, `max-w-6xl` for profile grids, `max-w-5xl` for the calculator, `max-w-3xl` for centered copy blocks.

### Overlapping card

Used on `/calculator` and `/team`. A coloured header block with generous bottom padding, followed by a card pulled up over it:

```tsx
<div className="w-full bg-primary pt-24 pb-32">…</div>
<div className="relative z-20 -mt-16">…card…</div>
```

### Highlighted phrase

The site's signature device — a lime-green rotated block behind a key word in the headline:

```tsx
<span className="inline-block bg-accent text-secondary px-4 py-1 md:py-2 rounded-2xl -rotate-2">
  savings
</span>
```

### Buttons

| Type | Classes |
| --- | --- |
| Primary CTA (lime) | `rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-secondary hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all` |
| Secondary (blue) | `rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-primary/90 hover:scale-105 active:scale-95` |
| Pill toggle | `px-4 py-3 rounded-full text-sm font-semibold border` — selected state swaps to `border-primary text-primary bg-primary/5` |

`rounded-full` on buttons and `rounded-2xl` / `rounded-3xl` / `rounded-[2rem]` on cards. Sharp corners appear nowhere.

### Form inputs

Text inputs are `rounded-full`, textareas are `rounded-[1.5rem]`. Both use `border-slate-300` with `focus:border-primary focus:ring-1 focus:ring-primary`.

---

## Responsive approach

Mobile-first with `md:` (768px) as the main breakpoint and `lg:` (1024px) for column layouts. Standard progressions:

- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Split layouts: `flex-col lg:flex-row`
- Nav: hamburger below `md`, full links above

---

## Icons

lucide-react only. Import named components and size with Tailwind:

```tsx
import { ArrowRight } from "lucide-react";
<ArrowRight className="w-4 h-4" />
```

Common sizes: `w-4 h-4` inside buttons, `w-5 h-5` in lists, `w-8 h-8` as card headers. Decorative icons use `strokeWidth={1.5}`.

---

## Conventions to follow

- **Default to server components.** Only add `"use client"` when you need state or an event handler.
- **Export `metadata`** from every new page file. If the page needs client state, extract the interactive part into a child component so the page file can stay on the server.
- **Use `next/image`**, not `<img>`. Add `priority` to above-the-fold images only.
- **Use the `@/` alias** for imports from `src/`.
- **Keep copy in arrays** near the top of the component rather than scattered through the JSX — it makes content edits obvious.
- **Remove unused imports.** `virtual-assistant/page.tsx` currently imports `Menu` without using it.
