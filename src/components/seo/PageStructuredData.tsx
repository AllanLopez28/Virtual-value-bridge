import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, breadcrumbsFor, ORGANIZATION_ID, seoPages, SITE_NAME, SITE_URL } from "@/lib/seo";

export default function PageStructuredData({ path }: { path: string }) {
  const page = seoPages[path];
  const breadcrumbs = breadcrumbsFor(path);
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [{ "@type": "WebPage", "@id": `${url}#webpage`, url, name: `${page.title} | ${SITE_NAME}`, description: page.description, inLanguage: "en-US", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": ORGANIZATION_ID } }];
  if (path !== "/" && !page.noindex && !page.isLandingPage) graph.push({ "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`, itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) });
  if (!page.noindex && (path.startsWith("/services/") || path.startsWith("/industries/"))) graph.push({ "@type": "Service", "@id": `${url}#service`, name: page.label, description: page.description, url, serviceType: page.title, provider: { "@id": ORGANIZATION_ID }, areaServed: { "@type": "Country", name: "United States" }, availableChannel: { "@type": "ServiceChannel", serviceUrl: url } });
  return <>
    {path !== "/" && !page.noindex && !page.isLandingPage && <nav className="seo-breadcrumbs" aria-label="Breadcrumb"><ol>{breadcrumbs.map((item, index) => <li key={item.path}>{index === breadcrumbs.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}</li>)}</ol></nav>}
    <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
  </>;
}
