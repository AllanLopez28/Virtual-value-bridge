# Interface redesign — VVB Website v3

The source of truth for the redesign is `VVB_Website_v3.html`. The homepage banner is the explicit exception: it follows the supplied screenshot, uses `/image(20261111-140007).png`, and retains the screenshot’s copy and three statistics.

## Reference views and navigation

- `/`: the v3 homepage sections, in their original order, with the screenshot banner.
- `/our-agents`: rotating and reversible profile deck, standards diagram, sample directory, category filters, expandable profiles, FAQ and final CTA.
- `/industries/construction`: contractor hero, software, four project-stage tabs, dedicated/project-based models, testimonial, FAQ and specialist inquiry.
- `/how-it-works` and `/services`: reuse the relevant reference sections as standalone routes.
- Existing service URLs reuse `ServiceDetail.tsx`; their original responsibilities, software, descriptions and profile details are in `services.json`.
- Existing team, calculator, comparison, career, application and estimating-support URLs remain available. The advertising landing page retains its specialized form and `/api/intro-call` integration.

## Implementation

`ReferenceDesign.tsx` contains server-rendered layouts and copy arrays adapted from the supplied HTML. `reference.css` preserves its responsive rules and animation keyframes, with colors exposed as tokens. `redesign.css` holds integration styles and styles for pages absent from the HTML. DM Sans and Manrope are loaded once by the root layout with `next/font`.

`ReferenceSurface.tsx` mounts the scoped choreography in `reference-interactions.js`. Event listeners, animation frames, timeouts, intervals and observers are disposed on route unmount. This preserves the original process-board SVG motion, 3.6-second steps, five-second profile rotation, 220ms image swaps, card flipping, filters and lifecycle tabs. Reduced-motion preferences, pause controls and keyboard access are supported.

`SpecialistFinder.tsx` reproduces the four-question modal, including preselected needs/industries, editable answers, forward/backward animations, focus containment, Escape and focus restoration. The general form and finder use the existing Formspree endpoint (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`, with the existing fallback). They show success only after a successful HTTP response and emit the existing `generate_lead` event without personal information. Booking buttons use the existing Calendly modal rather than the reference’s placeholder calendar URL. No real lead is submitted by development checks.

The calculator retains its defaults, formulas, $12 hourly rate and 1.25 local overhead multiplier. Its inactive report button is replaced with an actual local text download and a working booking action.

## Verification

Run `npm run lint` and `npm run build`. Check desktop/mobile layouts and interactions in a browser before publication. The automated visual-review tool in this session could not validate the local browser URL; compilation and HTTP checks do not replace visual review.

Session validation: `npm run lint` completed with 0 errors and 13 pre-existing warnings. `npm run build` succeeded and generated 29 pages. Read-only production-server checks returned HTTP 200 and expected content for 11 representative routes, plus both the brand image and supplied banner portrait. No customer form, booking or application was submitted. Visual fidelity and live browser interactions remain unverified because Computer Use could not confidently determine the browser URL.
