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

**Status:** Placeholder.
**File:** `src/components/sections/ContactForm.tsx`

The "Prefer to book directly?" card promises a 30-minute founder-led slot and has an "Open calendar" button linking to `#calendar` — an anchor that does not exist anywhere on the site. The card's own footer reads "Calendar embed placeholder."

Every "Book a call" button in the navigation also points to `/#contact`, which lands on this same card. So the site's primary CTA currently ends at a dead link.

- Booking tool (Calendly, Cal.com, HubSpot, other)? `_TBD_`
- Whose calendar? `_TBD_`
- Embed inline or link out to a hosted page? `_TBD_`

This is the highest-value gap on the site — it breaks the main conversion path.

---

## 4. Analytics

**Status:** None installed.

No Google Analytics, no Google Tag Manager, no Vercel Analytics, no Search Console verification tag. There is no way to measure traffic, conversion, or which service pages perform.

- Analytics platform? `_TBD_`
- Measurement ID? `_TBD_`

---

## Structured data and SEO plumbing

`src/app/layout.tsx` injects a JSON-LD `SiteNavigationElement` block listing four service URLs on the `virtualvaluebridge.com` domain. The contact section of the same site lists `info@vvbridge.net`. **Confirm which domain is canonical** — mismatched structured data works against the SEO effort rather than for it.

There is no `sitemap.ts` and no `robots.ts`. Next.js generates both from files of those names in `src/app/`; adding them is a small job with real SEO payoff.

Page-level `metadata` exports exist on only 4 of the 20 route files (`layout`, `how-it-works`, `services/virtual-assistant`, `services/property-management`). The other 16 pages inherit the site-wide title "Virtual Value Bridge | BPO Outsourcing" and its description, which means search engines see 16 pages with identical titles. Details in [06-technical-debt.md](06-technical-debt.md).

---

## Direct contact details on the site

These appear as static text in `ContactForm.tsx` and are the only real contact channels currently working:

- **Email:** `info@vvbridge.net` (plain text — not a `mailto:` link)
- **Phone:** +1 (718) 650-6786 (linked as `tel:+17186506786`)
