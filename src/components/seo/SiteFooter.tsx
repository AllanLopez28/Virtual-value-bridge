import Image from "next/image";
import Link from "next/link";
import { organicServicePaths } from "@/components/seo/ServiceCatalog";
import { seoPages } from "@/lib/seo";

const explore = ["/how-it-works", "/our-agents", "/team", "/comparison", "/calculator", "/careers", "/privacy"];

export default function SiteFooter() {
  return <footer className="seo-footer"><div><Link href="/" className="brand" aria-label="Virtual Value Bridge home"><Image className="brand-logo" src="/redesign/brand.png" width={450} height={120} sizes="180px" alt="Virtual Value Bridge" /></Link><p>Bilingual nearshore specialists supporting U.S. businesses from San Salvador.</p><a href="mailto:info@vvbridge.net">info@vvbridge.net</a><a href="tel:+17186506786">+1 (718) 650-6786</a></div><nav aria-label="Services"><h2>Services</h2>{organicServicePaths.map(path => <Link key={path} href={path}>{seoPages[path].label}</Link>)}</nav><nav aria-label="Explore Virtual Value Bridge"><h2>Explore</h2>{explore.map(path => <Link key={path} href={path}>{seoPages[path].label}</Link>)}</nav><p className="seo-footer-copyright">© {new Date().getFullYear()} Virtual Value Bridge</p></footer>;
}
