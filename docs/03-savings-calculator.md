# 03 — Savings Calculator

**File:** `src/components/sections/SavingsCalculator.tsx` (178 lines)
**Route:** `/calculator`

This is the only piece of real business logic in the codebase. Everything else is presentation. The numbers it produces are a commercial claim shown to prospects, so treat changes here as a business decision, not a code change.

---

## What the visitor does

Three inputs, all client-side state:

| Input | Control | Range | Default |
| --- | --- | --- | --- |
| Role | Four buttons | Admin / tenant support · Bookkeeping (AP/AR) · Leasing support · Collections | Admin / tenant support |
| Hours per week | Slider | 1–40 | 21 |
| Local hourly rate (USD) | Slider | 15–100 | 25 |

> **The role selection does not affect the math.** It is captured in state and highlights the selected button, but no formula reads it. Right now it is purely a framing device. If pricing should vary by role, that logic does not exist yet.

---

## The constants

```tsx
const WEEKS_PER_MONTH = 4.33;
const VVBRIDGE_HOURLY_RATE = 12;
const LOCAL_OVERHEAD_MULTIPLIER = 1.25;
```

| Constant | Value | Meaning | Approved by |
| --- | --- | --- | --- |
| `WEEKS_PER_MONTH` | 4.33 | 52 weeks ÷ 12 months | Arithmetic — no approval needed |
| `VVBRIDGE_HOURLY_RATE` | $12/hr | The blended rate quoted to prospects | `_TBD_` |
| `LOCAL_OVERHEAD_MULTIPLIER` | 1.25 | +25% on a local hire for benefits, payroll tax, and equipment | `_TBD_` |

The 25% figure is disclosed to the visitor in fine print under the sliders: benefits, payroll tax, and equipment overhead. The $12/hr rate is **not** disclosed — the visitor only sees the resulting monthly cost.

**Both of these are sales-facing commitments.** If actual pricing moves off $12/hr, this page will quote a number the sales team cannot honour. Any change should be signed off by whoever owns pricing.

---

## The formulas

```
localWeeklyCost      = hours × localRate × 1.25
localMonthlyCost     = round(localWeeklyCost × 4.33)
vvbridgeMonthlyCost  = round(hours × 12 × 4.33)
monthlySavings       = localMonthlyCost − vvbridgeMonthlyCost
annualSavings        = monthlySavings × 12
```

### Worked example (defaults: 21 hrs/week, $25/hr local)

| Step | Calculation | Result |
| --- | --- | --- |
| Local weekly cost | 21 × 25 × 1.25 | $656.25 |
| Local monthly cost | 656.25 × 4.33 | $2,842 |
| VVBridge monthly cost | 21 × 12 × 4.33 | $1,091 |
| **Monthly savings** | 2,842 − 1,091 | **$1,751** |
| **Annual savings** | 1,751 × 12 | **$21,012** |

### Edge case worth knowing

At a local rate of $15/hr (the slider minimum), the loaded local cost is $18.75/hr against VVBridge's $12/hr — still a saving, so the number never goes negative within the allowed range. If the rate slider minimum is ever lowered below **$9.60/hr**, the calculator would start displaying negative savings with no guard against it.

---

## What happens after the calculation

The results card shows the monthly savings in large type, the annual figure below it, and a two-row breakdown comparing local hire versus VVBridge cost. Below that sits a lead capture block: an email input and an "Email me the report" button.

**Neither is wired to anything.** The email input has no state binding and the button has no `onClick` handler — a visitor who types their address and clicks gets no feedback and the address is lost. See [04-integrations.md](04-integrations.md).

There is also an "or book a call instead" link pointing at `#contact`. On `/calculator` that anchor does not exist, because `ContactForm` is only rendered on the homepage. The link should be `/#contact`.

---

## Changing the numbers

1. Edit the constants at the top of the component
2. Update the "We add 25% for benefits, payroll tax, and equipment overhead" disclosure text if the multiplier changed
3. Re-check the worked example above and update this document
4. Confirm the sales team is quoting the same rate

Add a comment block above the constants recording who approved the values and when — the git history will not tell you.
