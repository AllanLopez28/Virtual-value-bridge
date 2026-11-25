import Link from "next/link";
import { seoPages } from "@/lib/seo";

export const organicServicePaths = ["/services/remote-estimators", "/services/property-management", "/services/bookkeeping-accounting", "/services/virtual-assistant", "/services/customer-service", "/services/data-entry-back-office", "/services/marketing-support", "/services/project-coordination", "/services/sales-lead-generation"];
const copy = ["BILINGUAL NEARSHORE SUPPORT", "Support for the work your business runs on.", "Explore dedicated roles, then talk to us about your tools, workflow and business hours.", "Explore this service"];

export default function ServiceCatalog() {
  return <section className="seo-service-catalog"><div className="section-head"><div><p className="eyebrow">{copy[0]}</p><h2>{copy[1]}</h2></div><p>{copy[2]}</p></div><div className="seo-service-grid">{organicServicePaths.map(path => <article key={path}><h3><Link href={path}>{seoPages[path].label}</Link></h3><p>{seoPages[path].description}</p><Link className="seo-service-link" href={path} aria-label={`Explore ${seoPages[path].label}`}>{copy[3]}</Link></article>)}</div></section>;
}
