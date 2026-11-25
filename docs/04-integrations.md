# 04 — Integrations

The site has one working external integration and three placeholders. Everything a lead does on the site currently flows through a single form.

---

## 1. Contact form → Formspree

**Status:** Working, but on a temporary endpoint.
**File:** `src/components/sections/ContactForm.tsx`
**Endpoint:** `https://formspree.io/f/mdaqdywp`

The form posts `FormData` with `Accept: application/json`, shows a "Sending…" state while in flight, and swaps to a success panel with a "Send another message" reset button on a `2xx` response.

### Fields

| Name | Label | Required |
| --- | --- | --- |
| `fullName` | Full name | Yes |
| `company` | Company | No |
| `email` | Work email | Yes |
| `message` | What do you need help with? | Yes |

### Open items

The source carries the comment `// Replace with the real endpoint later` — the current form ID is a placeholder.

- Which Formspree account owns form `mdaqdywp`? `_TBD_`
- Where do submissions get delivered? `_TBD_`
- Is the endpoint moving to a different form, or a different provider entirely? `_TBD_`

Two things to fix when you do the swap:

1. **Move the endpoint into an environment variable** (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`) so it is not hardcoded in the bundle. There is currently no `.env` file — you will need to create one and document it in the README.
2. **Handle failures visibly.** A non-`2xx` response only writes to `console.error`; the visitor sees the loading state stop and nothing else. Add an error message.

---

## 2. Calculator lead capture

**Status:** Not implemented.
**File:** `src/components/sections/SavingsCalculator.tsx`

The results card shows an email input and an "Email me the report" button. The input has no state binding and the button has no handler. A visitor who fills it in and clicks gets no response, and the email address is discarded.

To ship this you need decisions on:

- Where the address goes — same Formspree form, a second form, or a CRM/email tool? `_TBD_`
- What "the report" actually is — a PDF, an email with the numbers, or just a follow-up from sales? `_TBD_`
- Whether the calculator inputs (hours, rate, role, computed savings) should be sent along with the address `_TBD_`

If the answer is "same as the contact form," the fastest path is to reuse the `handleSubmit` pattern from `ContactForm.tsx`.

---

## 3. Calendar booking

**Status:** Active via Calendly in-page popup modal (`CalendlyModal.tsx` and `CalendlyContext.tsx`).
**File:** `src/config/constants.ts` (`CALENDLY_URL`, `CALENDLY_EMBED_URL`)
**Endpoint:** `https://calendly.com/tescalante-vvbridge/30min`

Connected across primary CTAs via `useCalendly()`:
- `Navbar.tsx`: "Book a call" buttons (desktop and mobile dropdown) open the in-page popup modal.
- `ContactForm.tsx`: "Prefer to book directly?" card "Open calendar →" button opens the in-page popup modal.
- `EstimatorForm.tsx`: Hero "Book Your Free Discovery Call" CTA opens the in-page popup modal.

---

## 4. Analytics

**Status:** Google Tag Manager and Google Ads lead tracking installed. The sections above describe older integrations and should be checked against the current source before use.

`src/app/layout.tsx` loads GTM through `@next/third-parties/google`, using `NEXT_PUBLIC_GTM_ID` with fallback `GTM-WZMZC3ST`.

- Google tag: `AW-18498223483`, triggered on **Initialization - All Pages**.
- Google Ads conversion: **Lead - Estimating Support**, ID `18498223483`, label `iqWiCNzY4ZsdEPv60fRE`, triggered by the custom event **generate_lead**.
- The estimating-support landing page sends `{ event: "generate_lead", lead_type: "estimating_support" }` only after `/api/intro-call` returns success.
- The estimating-support form uses four steps: contact details (name, work email, optional U.S. phone), support model, contractor type, and estimating software. It submits to `/api/intro-call`, retaining the existing redundant Formspree delivery. The API permits an empty company. No phone number is fabricated. Conversion success still depends on the API response, not clicks or form visibility.
- On `/services/estimating-support`, navigation contact/booking links and the hero discovery-call CTA target `#estimating-inquiry`. The external Calendly link remains disconnected. The page offers dedicated estimators and project-based takeoff support, confirmed by the business on October 27, 2026. On November 3, the hero CTA was changed from a no-op button to an anchor so visitors can reach the existing form.
- The general contact form sends `{ event: "generate_lead", lead_type: "general_contact" }` only after Formspree returns success. This source change must be deployed before that path is measured in production.
- Do not include names, email addresses, phone numbers, or message contents in these events. Failed submissions and career applications must not emit a business lead event.

Validate changes with Tag Assistant: page load should fire the Google tag without a lead conversion; one successful customer form submission should fire one lead conversion. GTM container publication and website source deployment are separate steps.

---

## Structured data and SEO plumbing

The canonical domain is `https://www.vvbridge.net`. Per-page metadata, canonical URLs, social previews and the sitemap share the registry in `src/lib/seo.ts`. Root JSON-LD identifies the Organization and WebSite; page data describes WebPage, BreadcrumbList and relevant services. The estimator landing is now `index,follow`; `/services/remote-estimators` is the indexable service overview. See [08-seo.md](08-seo.md) for maintenance and verification.

---

## Direct contact details on the site

These appear as static text in `ContactForm.tsx` and are the only real contact channels currently working:

- **Email:** `info@vvbridge.net` (plain text — not a `mailto:` link)
- **Phone:** +1 (718) 650-6786 (linked as `tel:+17186506786`)


## Estimating landing update — November 16, 2026

`/services/estimating-support` now reproduces the supplied `VVB_Estimators_LP_coordinated.html`. `EstimatingLanding.tsx` holds the server-rendered content, `EstimatorForm.tsx` the four-step form, and `LandingInteractions.tsx` the CTA scrolling, allowlisted keyword matching and mobile sticky visibility. The CSS module scopes the supplied colors, typography, responsive rules and animation timings to this route. Embedded reference images were extracted to `public/estimating/`.

`SiteExperience.tsx` omits the global navbar, global footer and legacy page styling only for this exact route. The landing retains the reference’s compact logo/call header. Its original `noindex` setting was replaced by `index,follow` in the November 25 SEO review. Its CTA anchors return to the form and preselect a model where supplied. UTM values, gclid and landing URL accompany the lead in process details. The reference’s mailto submission and placeholder tracking scripts are replaced by the existing delivery and `generate_lead` conversion event. No personal contact data is added to analytics events.

Verification: changed-file ESLint passed; a temporary isolated webpack build passed for all 27 pages; generated HTML confirmed navigation absent on the landing and present on the homepage. Formatting checks covered optional U.S. phone inputs and image paths. Full-repository lint remains blocked by 17 pre-existing errors outside this change. No server was started and no lead was submitted. Browser visual review remains pending.

The coordinated landing was reapplied onto the fetched `origin/main` revision `2caee4c` (UpdatedDesign). It reuses the existing DM Sans and Manrope font variables from the current root layout, without replacing the updated site layout or navbar.

After updating to origin/main: TypeScript and isolated build passed (29 pages); full lint passed with 0 errors and 13 existing warnings. Generated HTML confirmed the global navigation is absent only on estimating-support and the page has only its own footer. Local landing files and images match the pre-update backup, with only scoped font-variable integration adjusted.

Contact details are now the first step. Continue validates contact data locally, then visitors select the model, trade and software. Only the final confirmation submits the complete lead and can emit a conversion. Model-specific CTAs preselect the model without skipping contact details. The hero savings badge and free-replacement check background use the landing’s blue token. A mocked flow test confirmed there is no request or conversion on the contact/selection steps.
