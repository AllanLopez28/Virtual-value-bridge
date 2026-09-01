# Virtual Value Bridge — Website

Marketing website for Virtual Value Bridge, a nearshore BPO that places bilingual specialists with US businesses. The site presents the service lines, the team, a savings calculator, and the contact paths that generate inbound leads.

Package name: `vvbridge-web` · Version `0.1.0` · Private

---

# Part 1 — 

## What the website is for

The site has one job: turn a visitor into a booked conversation. Every page pushes toward the same two actions — filling in the contact form, or booking a call.

Three types of visitor are served:

| Visitor | What they came for | Where they land |
| --- | --- | --- |
| A US business evaluating outsourcing | Understanding the service and the cost saving | Homepage → a service page → calculator |
| A prospect comparing providers | Proof of quality and a reason to trust | Team page, comparison page, testimonials |
| A job seeker in El Salvador | Open positions | Careers page (currently hidden — see below) |

## What is on the site

**19 pages in total.**

| Page | What it does |
| --- | --- |
| **Home** | Headline, value proposition, team teaser, testimonials, contact form |
| **How It Works** | The process of getting a specialist placed |
| **Services** | Grid of the eight service lines |
| **8 service detail pages** | One per service: what the specialist does, which tools they use |
| **Compare** | Comparison table against alternative options |
| **Team** | "Meet Our Top Specialists" — stats plus three featured profiles |
| **3 team profile pages** | Ana Rodríguez, Bryan Rivas, Dora Belloso |
| **Calculator** | Interactive tool estimating monthly and annual savings |
| **Careers** | Job board with five listings — **not currently linked in the menu** |
| **Accounting Specialist** | Detail page for one of the five job listings |

### The eight service lines

Property Management Support · Administrative Support · Customer Service & Support · Bookkeeping & Accounting · Marketing Support · Sales & Lead Generation · Data Entry & Back-Office · Project Coordination

## How the savings calculator works

This is the site's main persuasion tool, so it is worth understanding the claim it makes on the company's behalf.

The visitor sets three things: the role they want to fill, hours per week, and what they currently pay a local hire per hour. The tool then compares two monthly costs:

- **Local hire:** their stated hourly rate, plus **25%** for benefits, payroll tax, and equipment
- **Virtual Value Bridge:** a flat **$12 per hour**

With the default settings (21 hours a week at $25/hour local), it displays a saving of roughly **$1,751 per month**, or **$21,012 per year**.

**Two things to be aware of:**

1. The $12/hour rate is written into the website. If actual pricing moves, the site will keep quoting a number the sales team may not be able to honour.
2. The role selector is currently decorative — picking "Collections" instead of "Bookkeeping" does not change the result. If pricing should vary by role, that has not been built.

Full detail: [docs/03-savings-calculator.md](docs/03-savings-calculator.md)

## What works today, and what does not

| Feature | Status | Impact |
| --- | --- | --- |
| Contact form | **Works** — but sends to a temporary account that needs confirming | Leads may be arriving in an inbox nobody watches |
| Phone number | Works — tappable on mobile | — |
| "Book a call" button | **Broken** — leads to a placeholder, no calendar is connected | The site's main call to action ends in a dead link |
| Calculator "Email me the report" | **Not built** — the button does nothing | The most qualified visitors on the site cannot convert |
| Website analytics | **Not installed** | No visibility into traffic, or into how much the above is costing |
| Careers section | Built, but hidden from the menu | Job seekers cannot find it |

The first three are the reason not to run paid traffic to the site yet — the spend would land on a broken conversion path. Detail and open decisions: [docs/04-integrations.md](docs/04-integrations.md)

## Decisions needed from the business

These cannot be answered from the code. Each one blocks work:

1. **Which domain is official** — the site's structured data says `virtualvaluebridge.com`, the contact section says `vvbridge.net`. Search engines are currently receiving mixed signals.
2. **Which booking tool to connect** (Calendly, Cal.com, or another), and whose calendar it opens.
3. **Where contact form submissions should be delivered.**
4. **Whether the five job listings are real** — they are labelled as placeholder data in the code, and only one has a detail page.
5. **Whether these published figures are accurate:** 50+ specialists · 100% bilingual · 4.9 average rating · 300+ processes optimized · −47% cost per ticket · +22 hours recovered per week.
6. **Whether the careers section should go live.**

## How to request a change

Text and images on this site are written directly into the code — there is no admin panel or CMS to log into. Any change goes through a developer.

To make that fast, say **which page** and **what the new text should be, in full**. Every page maps to a specific file, listed in [docs/02-routes-and-content.md](docs/02-routes-and-content.md), so a well-specified copy change is usually a few minutes of work.

Adding a **new service page** or a **new team profile** is a larger job — each is a full page built from a template, not an entry in a list.

## Where the site is hosted

Hosting provider: `_TBD_`
Production URL: `_TBD_`
Domain registrar: `_TBD_`
Who can publish changes: `_TBD_`

## Who to contact

| Role | Person | Contact |
| --- | --- | --- |
| Repository owner | `_TBD_` | `_TBD_` |
| Business / content owner | `_TBD_` | `_TBD_` |

Public contact details shown on the site: `info@vvbridge.net` · +1 (718) 650-6786

---

# Part 2 

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

No environment variables are required to run the project. There is no test suite and no CI pipeline configured.

## Stack

| Layer | Choice | Version |
| --- | --- | --- |
| Framework | Next.js (App Router) | 16.2.9 |
| UI library | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS (v4, PostCSS plugin) | ^4 |
| Icons | lucide-react | ^1.18.0 |
| Linting | ESLint + eslint-config-next (flat config) | ^9 / 16.2.9 |
| Fonts | Inter via `next/font/google` | — |

> **Note on Next.js 16.** `AGENTS.md` warns that this release includes breaking changes relative to older Next.js knowledge. Check `node_modules/next/dist/docs/` before writing new routing or data-fetching code.

## Repository layout

```
src/
  app/                    # App Router — one folder per route
    layout.tsx            # Root layout: fonts, global metadata, JSON-LD, Navbar
    globals.css           # Tailwind import + design tokens
    page.tsx              # Homepage (composes section components)
    how-it-works/ services/ comparison/ team/ calculator/ careers/
  components/
    layout/Navbar.tsx     # Sticky nav, desktop + mobile
    sections/             # 13 reusable page sections
public/                   # Logos, hero art, team photos, icons
docs/                     # Project documentation
AGENTS.md                 # Rules for AI coding agents
CLAUDE.md                 # Points at AGENTS.md
```

Roughly 4,250 lines across 34 `.tsx` files. All page content is hardcoded in JSX — no CMS, database, or API layer. Route files are mostly thin wrappers around section components; the eight service pages and three team profiles are the exception and are self-contained.

## Documentation

| Document | Read it when |
| --- | --- |
| [docs/01-architecture.md](docs/01-architecture.md) | You need to understand how pages, sections, and rendering fit together |
| [docs/02-routes-and-content.md](docs/02-routes-and-content.md) | **You want to change copy on a page** — start here |
| [docs/03-savings-calculator.md](docs/03-savings-calculator.md) | You need to change the pricing assumptions behind the calculator |
| [docs/04-integrations.md](docs/04-integrations.md) | You are wiring up forms, the calendar, or analytics |
| [docs/05-style-guide.md](docs/05-style-guide.md) | You are building a new page or section |
| [docs/06-technical-debt.md](docs/06-technical-debt.md) | You are planning the next round of work |

## Deployment

Hosting provider: `_TBD_`
Production URL: `_TBD_`
Deploy trigger (branch / manual): `_TBD_`

The live marketing domain referenced in the contact section is `vvbridge.net`, while the JSON-LD block in `layout.tsx` references `virtualvaluebridge.com`. Confirm which is canonical before configuring DNS or structured data.

## Known state

The repository has a single commit. There is no branching model, no test coverage, and no CI. The highest-priority items are the four broken conversion paths listed in [docs/06-technical-debt.md](docs/06-technical-debt.md) under P0.