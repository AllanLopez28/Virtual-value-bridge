# 02 — Routes and Content

**This is the document to open when you want to change words on the site.** All copy is hardcoded in `.tsx` files. Find the route below, open the file listed, and edit the text directly. Save, and the dev server reloads.

---

## Route map

| URL | Route file | Where the copy actually lives |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Composes 7 section components — see the homepage table below |
| `/how-it-works` | `src/app/how-it-works/page.tsx` | `src/components/sections/HowItWorksSection.tsx` |
| `/services` | `src/app/services/page.tsx` | `src/components/sections/ServicesGrid.tsx` |
| `/services/property-management` | `src/app/services/property-management/page.tsx` | Same file (self-contained) |
| `/services/virtual-assistant` | `src/app/services/virtual-assistant/page.tsx` | Same file (self-contained) |
| `/services/customer-service` | `src/app/services/customer-service/page.tsx` | Same file (self-contained) |
| `/services/bookkeeping-accounting` | `src/app/services/bookkeeping-accounting/page.tsx` | Same file (self-contained) |
| `/services/marketing-support` | `src/app/services/marketing-support/page.tsx` | Same file (self-contained) |
| `/services/sales-lead-generation` | `src/app/services/sales-lead-generation/page.tsx` | Same file (self-contained) |
| `/services/data-entry-back-office` | `src/app/services/data-entry-back-office/page.tsx` | Same file (self-contained) |
| `/services/project-coordination` | `src/app/services/project-coordination/page.tsx` | Same file (self-contained) |
| `/comparison` | `src/app/comparison/page.tsx` | `src/components/sections/Comparison.tsx` |
| `/team` | `src/app/team/page.tsx` | `src/components/sections/TeamProfiles.tsx` |
| `/team/ana-rodriguez` | `src/app/team/ana-rodriguez/page.tsx` | Same file (self-contained) |
| `/team/bryan-rivas` | `src/app/team/bryan-rivas/page.tsx` | Same file (self-contained) |
| `/team/dora-belloso` | `src/app/team/dora-belloso/page.tsx` | Same file (self-contained) |
| `/calculator` | `src/app/calculator/page.tsx` | `src/components/sections/SavingsCalculator.tsx` |
| `/careers` | `src/app/careers/page.tsx` | Same file — job list is the `mockJobs` array |
| `/careers/accounting-specialist` | `src/app/careers/accounting-specialist/page.tsx` | Same file (self-contained) |

**Not linked in the navigation:** `/careers` and its sub-page exist and render, but the nav links are commented out in `Navbar.tsx` (both desktop and mobile blocks). Uncomment them to publish the careers section.

---

## Homepage composition

`src/app/page.tsx` renders these sections top to bottom:

1. `HeroSection` — headline, subhead, CTA buttons, `/Banner.png` background
2. `TeamHighlights`
3. `WhyChooseUsSection`
4. `AboutSection`
5. ~~`ServicesGrid`~~ — **currently commented out**
6. `CTASection`
7. `Testimonials`
8. `ContactForm` — anchored at `#contact`, target of every "Book a call" button

To reorder the homepage, reorder these lines. To restore the services grid, uncomment line 15.

---

## Section component reference

| Component | Lines | Used by | Contains |
| --- | --- | --- | --- |
| `HeroSection` | 90 | `/` | Main headline, background image, primary CTAs |
| `TeamHighlights` | 57 | `/` | Short team teaser |
| `WhyChooseUsSection` | 93 | `/` | Value propositions |
| `AboutSection` | 104 | `/` | Company description |
| `CTASection` | 66 | `/` | Mid-page conversion block |
| `Testimonials` | 217 | `/` | Client quotes |
| `ContactForm` | 188 | `/` | Contact form, booking card, direct contact details |
| `ServicesGrid` | 124 | `/services` | The 8-service array (see below) |
| `HowItWorksSection` | 106 | `/how-it-works` | Process steps |
| `Comparison` | 115 | `/comparison` | Comparison table |
| `TeamProfiles` | 192 | `/team` | Team header, stats banner, 3 profile cards |
| `SavingsCalculator` | 178 | `/calculator` | Interactive calculator — see [03](03-savings-calculator.md) |
| `StatsBanner` | 47 | Not currently rendered | Stats strip |

`StatsBanner` is defined but not imported anywhere. Either wire it into a page or delete it.

---

## The eight service pages

Every service page follows the same template: breadcrumbs → hero with "Meet Your **[Role]** Specialist" headline → a `responsibilities` array → a `tools` array → CTA.

Both arrays are declared as plain string arrays near the top of each page's default export. To change what a specialist does or which tools they use, edit those arrays — nothing else.

Example from `virtual-assistant/page.tsx`:

```tsx
const responsibilities = [
  "Calendar management and scheduling coordination",
  "Inbox management and email triage",
  ...
];

const tools = ["Google Workspace", "Microsoft Office", "Calendly", ...];
```

### Service catalogue

The service cards on `/services` come from the `services` array in `ServicesGrid.tsx`. Each entry has `title`, `description`, `icon` (a lucide-react component), and `link`.

| Card title | Links to |
| --- | --- |
| Property Management Support | `/services/property-management` |
| Administrative Support | `/services/virtual-assistant` |
| Customer Service & Support | `/services/customer-service` |
| Bookkeeping & Accounting | `/services/bookkeeping-accounting` |
| Marketing Support | `/services/marketing-support` |
| Sales & Lead Generation | `/services/sales-lead-generation` |
| Data Entry & Back-Office | `/services/data-entry-back-office` |
| Project Coordination | `/services/project-coordination` |

Note the naming mismatch: the card says "Administrative Support" but the URL is `/services/virtual-assistant`, and the page component is named `AdministrativeSupportPage` while its metadata title says "Hire a Virtual Assistant". Keep this in mind when auditing SEO.

### Adding a ninth service

1. Create `src/app/services/[new-slug]/page.tsx` — copy an existing service page as the template
2. Replace the headline, breadcrumb label, `responsibilities`, and `tools`
3. Add a `metadata` export with a unique title and description
4. Add the card to the `services` array in `ServicesGrid.tsx`
5. If it should appear in the JSON-LD block, add its URL in `src/app/layout.tsx`

> **Refactor note.** These eight pages are structurally near-identical. Consolidating them into a single dynamic route (`src/app/services/[slug]/page.tsx`) backed by one data file would cut roughly 1,300 lines to a few hundred and make copy edits a single-file job. Logged in [06-technical-debt.md](06-technical-debt.md).

---

## Careers content

Job openings live in the `mockJobs` array in `src/app/careers/page.tsx`. Each job has `id`, `title`, `department`, `location`, `workModel`, and `hours`. The page filters by search text and by the `filters` array (`All Roles`, `Operations`, `Finance`, `Admin`, `Support`).

The variable name `mockJobs` signals placeholder data — confirm whether these five listings are real before publishing the section.

Only `accounting-specialist` has a detail page. The other four job cards have nowhere to link.

---

## Hardcoded business numbers

These figures appear as text in components and are **not** pulled from any source of truth. If a claim changes, it has to be changed in each place it appears.

| Figure | Appears in |
| --- | --- |
| 50+ specialists · 100% bilingual · CST time zone · 4.9 rating | `TeamProfiles.tsx` |
| 300+ processes optimized · −47% cost per ticket · +22h recovered per week · 4.9 avg. rating · 100% time zone aligned | `StatsBanner.tsx` (not rendered) |
| $12/hr specialist rate, 25% overhead assumption | `SavingsCalculator.tsx` — see [03](03-savings-calculator.md) |

Business owner should verify these before launch: `_TBD_`

---

## Images

All images sit flat in `public/` and are referenced by absolute path (`/Banner.png`, `/Logo-vv.png`, `/ana.png`).

| Asset | Used for |
| --- | --- |
| `Logo-vv.png` | Navbar logo |
| `VVB-logo.jpeg` | Alternate logo |
| `icon-03.svg` | Favicon |
| `Banner.png`, `hero1.png`, `meeting.png` | Hero and section backgrounds |
| `ana.png`, `dora.png`, `carlos.png`, `carlos2.png`, `sofia.png`, `sofia2.png`, `sofia3.png`, `valeria.png`, `andres.png`, `karla.png`, `mateo.png`, `diego.png`, `mark.png`, `mujer.png` | Team and testimonial portraits |
| `next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg` | create-next-app leftovers — safe to delete |

There is no naming convention. If you add assets, consider `public/team/` and `public/hero/` subfolders.
