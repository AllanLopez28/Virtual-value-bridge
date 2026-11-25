import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found | Virtual Value Bridge", robots: { index: false, follow: true } };

export default function NotFound() {
  return <main className="seo-content"><p className="eyebrow">404</p><h1>We couldn’t find that page.</h1><p>The link may have changed. Explore our services or return to the homepage.</p><div className="ag-cta"><Link className="ag-btn" href="/">Go to the homepage</Link><Link className="ag-btn-o" href="/services">Explore services</Link></div></main>;
}
