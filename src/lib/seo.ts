import type { Metadata } from "next";

export const SITE_URL = "https://www.vvbridge.net";
export const SITE_NAME = "Virtual Value Bridge";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const SITE_DESCRIPTION = "Bilingual nearshore specialists for U.S. businesses. Build dedicated support teams in your time zone, backed by our on-site team in San Salvador.";

type SeoPage = { title: string; description: string; label: string; noindex?: boolean; isLandingPage?: boolean };

/** One registry keeps titles, canonicals, social cards and the sitemap consistent. */
export const seoPages: Record<string, SeoPage> = {
  "/": { title: "Nearshore Staffing & Virtual Assistants", label: "Home", description: SITE_DESCRIPTION },
  "/services": { title: "Nearshore Staffing & Outsourcing Services", label: "Services", description: "Explore bilingual support for estimating, property management, bookkeeping, customer service, sales, marketing and back-office operations." },
  "/services/remote-estimators": { title: "Remote Estimators & Construction Takeoffs", label: "Remote Estimators", description: "Explore dedicated remote estimators and project-based takeoffs for U.S. contractors. Get support in your estimating software and business hours." },
  "/services/estimating-support": { title: "Hire a Remote Construction Estimator", label: "Estimating Support", description: "Tell us your trade, software and support needs to request matching estimator profiles. Dedicated staffing and project-based takeoff options.", isLandingPage: true },
  "/services/property-management": { title: "Property Management Virtual Assistants", label: "Property Management", description: "Bilingual property management support for tenant calls, leasing, maintenance coordination, rent follow-ups and owner reporting in U.S. hours." },
  "/services/bookkeeping-accounting": { title: "Outsourced Bookkeeping & Accounting", label: "Bookkeeping & Accounting", description: "Dedicated bilingual bookkeeping support for transactions, reconciliations, accounts payable and receivable, reporting and month-end preparation." },
  "/services/virtual-assistant": { title: "Hire a Bilingual Virtual Assistant", label: "Virtual Assistants", description: "Hire a dedicated bilingual virtual assistant for calendars, inboxes, scheduling, document preparation and administrative support in U.S. hours." },
  "/services/customer-service": { title: "Bilingual Customer Service Outsourcing", label: "Customer Service", description: "Support your customers by phone, email, chat and text with dedicated bilingual specialists who manage tickets, follow-ups and CRM records." },
  "/services/data-entry-back-office": { title: "Data Entry & Back-Office Outsourcing", label: "Data Entry & Back Office", description: "Keep records accurate with dedicated support for data entry, research, order processing, document management and recurring operational reports." },
  "/services/marketing-support": { title: "Dedicated Marketing Virtual Assistants", label: "Marketing Support", description: "Keep marketing moving with bilingual support for content calendars, social media, email campaigns, website updates and performance reporting." },
  "/services/project-coordination": { title: "Remote Project Coordination Support", label: "Project Coordination", description: "Keep projects organized with dedicated support for task boards, deadlines, vendor follow-ups, meeting notes, documentation and status reports." },
  "/services/sales-lead-generation": { title: "Sales Support & Lead Generation Assistants", label: "Sales & Lead Generation", description: "Build a consistent sales process with bilingual support for prospect research, outreach, lead qualification, appointment booking and CRM updates." },
  "/industries/construction": { title: "Construction Back-Office Outsourcing", label: "Construction & Trades", description: "Bilingual back-office support for U.S. contractors: estimating, customer communication, project coordination, paperwork and billing assistance." },
  "/how-it-works": { title: "How Nearshore Staffing Works", label: "How It Works", description: "See how Virtual Value Bridge matches bilingual specialists to your role, tools and workflow, then supports them as part of your day-to-day team." },
  "/our-agents": { title: "Meet Our Bilingual Nearshore Specialists", label: "Our Specialists", description: "Explore sample bilingual specialist profiles, experience and software skills. Request a match selected for your industry, role and workflow." },
  "/team": { title: "Meet the Virtual Value Bridge Team", label: "Our Team", description: "Meet Dora Belloso, Bryan Rivas and Ana Rodríguez and learn about their roles in auditing, back-office operations and professional training." },
  "/team/dora-belloso": { title: "Dora Belloso — Auditor", label: "Dora Belloso", description: "Meet Dora Elizabeth Belloso, an auditor at Virtual Value Bridge, and learn about her work in account auditing, quality and customer experience." },
  "/team/bryan-rivas": { title: "Bryan Rivas — Back-Office Operations Lead", label: "Bryan Rivas", description: "Meet Bryan Alexander Rivas, a back-office operations lead at Virtual Value Bridge, supporting daily operations and mentoring specialists." },
  "/team/ana-rodriguez": { title: "Ana Rodríguez — New Physician Trainer", label: "Ana Rodríguez", description: "Meet Ana Rodríguez and learn about her role in new physician training, professional development and quality service at Virtual Value Bridge." },
  "/calculator": { title: "Outsourcing Savings Calculator", label: "Savings Calculator", description: "Estimate monthly and annual staffing savings. Compare a loaded local hourly rate with Virtual Value Bridge using your role and weekly hours." },
  "/comparison": { title: "Nearshore vs. Offshore Virtual Assistants", label: "Nearshore vs. Offshore", description: "Compare nearshore and offshore virtual assistants across time zones, communication, oversight, software onboarding and replacement arrangements." },
  "/careers": { title: "Bilingual Jobs in San Salvador", label: "Careers", description: "Explore bilingual career opportunities at Virtual Value Bridge in San Salvador, supporting U.S. businesses in administration, finance and operations." },
  "/careers/accounting-specialist": { title: "Accounting Specialist Jobs in San Salvador", label: "Accounting Specialist", description: "Explore the Accounting Specialist opportunity at Virtual Value Bridge. Review responsibilities, requirements and application details in San Salvador." },
  "/careers/administrative-assistant": { title: "Admin Assistant Jobs in San Salvador", label: "Administrative Assistant", description: "Explore the Administrative Assistant opportunity at Virtual Value Bridge. Review the role, requirements and application details in San Salvador." },
  "/careers/bilingual-virtual-assistant": { title: "Virtual Assistant Jobs in San Salvador", label: "Bilingual Virtual Assistant", description: "Explore the Bilingual Virtual Assistant opportunity at Virtual Value Bridge. Review responsibilities, requirements and how to apply in San Salvador." },
  "/careers/property-management": { title: "Property Management Jobs in San Salvador", label: "Property Management Specialist", description: "Explore the Property Management Specialist opportunity at Virtual Value Bridge. Review responsibilities, requirements and how to apply in San Salvador." },
  "/privacy": { title: "Privacy Policy", label: "Privacy", description: "Learn about information collected through Virtual Value Bridge inquiries, applications and booking tools, and how to contact us about privacy." },
};

export function absoluteUrl(path: string) { return new URL(path, `${SITE_URL}/`).toString(); }

export function pageMetadata(path: string): Metadata {
  const page = seoPages[path];
  if (!page) throw new Error(`Missing SEO configuration: ${path}`);
  const title = `${page.title} | ${SITE_NAME}`;
  return {
    title, description: page.description, alternates: { canonical: absoluteUrl(path) },
    robots: { index: !page.noindex, follow: true, googleBot: { index: !page.noindex, follow: true, "max-image-preview": "large" } },
    openGraph: { type: "website", siteName: SITE_NAME, locale: "en_US", title, description: page.description, url: absoluteUrl(path), images: [{ url: "/social-preview.png", width: 1200, height: 630, alt: "Virtual Value Bridge — bilingual nearshore specialists for U.S. businesses" }] },
    twitter: { card: "summary_large_image", title, description: page.description, images: ["/social-preview.png"] },
  };
}

export function breadcrumbsFor(path: string) {
  const items = [{ name: "Home", path: "/" }];
  if (path === "/") return items;
  const parent = path.startsWith("/services/") || path.startsWith("/industries/") ? "/services" : path.startsWith("/team/") ? "/team" : path.startsWith("/careers/") ? "/careers" : null;
  if (parent) items.push({ name: seoPages[parent].label, path: parent });
  items.push({ name: seoPages[path].label, path });
  return items;
}
