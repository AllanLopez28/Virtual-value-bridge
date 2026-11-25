# SEO maintenance

Updated November 25, 2026.

The canonical origin is `https://www.vvbridge.net`. `src/lib/seo.ts` contains the page registry used for unique titles, descriptions, canonicals, Open Graph, Twitter cards, breadcrumbs and sitemap URLs. Add a registry entry and export `pageMetadata(route)` when adding a page. Render `PageStructuredData` once per route. Interactive careers pages use server wrappers so metadata appears in the initial HTML.

`/services/estimating-support` is now eligible for organic indexing (`index,follow`) and is included in the sitemap, following the November 25 review request. It retains its conversion layout: no global navbar, global footer or breadcrumb navigation, and the existing form flow. `isLandingPage` controls this presentation independently of indexing. `/services/remote-estimators` remains a separate service overview linking to the matching form. Both routes have self-canonicals and distinct metadata and content.

The service directory and global footer link to all nine service overview pages. Related links include the comparison and savings pages. The calculator's rates and business claims remain unchanged. Reference animations remain in place; responsive images retain their srcset when the animated profile changes, and the matching modal loads on demand.

Root JSON-LD describes the Organization and WebSite on the correct domain. Page JSON-LD describes the WebPage, breadcrumbs and relevant service. There are no fabricated reviews, job posting dates or availability claims. The custom 404 is noindex. The shared social preview is generated at `/social-preview.png`.

`/privacy` uses the authorized commercial name Virtual Value Bridge and public email info@vvbridge.net. No legal entity, street address or fixed retention period was invented. Update the notice when business practices or providers change.

## Verification

Run `npm run lint`, `npm run build`, then `node scripts/verify-seo.mjs`. An alternate build directory can be supplied, for example `node scripts/verify-seo.mjs .seo-validation/.next`. The verification checks actual generated production HTML for all registered routes, unique metadata, consistent branding, document language, concise descriptions, canonicals, H1 counts, indexing, JSON-LD, internal links, sitemap entries and the social preview PNG.

No development or production server is needed for these checks. An isolated copy can be used for compilation while a development server is already running in the original project.

## After publication

Submit the sitemap in Google Search Console and inspect representative service URLs and the paid landing. Measure Core Web Vitals from real users; the earlier PageSpeed API request was quota-limited, so no performance score or passing field metrics are claimed. Confirm ownership of analytics and lead delivery tools separately. Search positions and Google's final choice of snippets are not controlled by metadata alone.

## Published-site review — November 25, 2026

The published HTML still had noindex on estimating-support, the abbreviated VVBridge brand on the Virtual Assistant title, and missing canonicals and Open Graph. Those differ from the current local changes, which need publication before they can appear online. The published calculator title was already Savings Calculator | Virtual Value Bridge, rather than the generic title quoted in the review. The local title is now Outsourcing Savings Calculator | Virtual Value Bridge. Published pages already had lang=en and JSON-LD blocks; presence alone does not validate the contents of schema.

The current local descriptions range from 137 to 151 characters, including 145 for the homepage and 140 for estimating-support. The 160-character target is an editorial preference, not a Google requirement: Google can truncate or rewrite snippets based on the query and device width.
