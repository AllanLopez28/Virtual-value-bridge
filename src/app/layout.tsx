import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, ORGANIZATION_ID } from "@/lib/seo";
import { DM_Sans, Manrope } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import SiteExperience from "@/components/redesign/SiteExperience";
import SiteFooter from "@/components/seo/SiteFooter";
import "./reference.css";
import "./redesign.css";
import { CalendlyProvider } from "@/context/CalendlyContext";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: SITE_NAME,
 description: SITE_DESCRIPTION,
 applicationName: SITE_NAME,
 icons: { icon: '/icon-03.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || "GTM-WZMZC3ST"} />
      <body className={`${dmSans.variable} ${manrope.variable} antialiased font-sans`}>
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [
          { "@type": "Organization", "@id": ORGANIZATION_ID, name: SITE_NAME, url: SITE_URL, logo: { "@type": "ImageObject", url: SITE_URL + "/redesign/brand.png" }, email: "info@vvbridge.net", telephone: "+17186506786", sameAs: ["https://www.linkedin.com/company/virtual-value-bridge"], contactPoint: { "@type": "ContactPoint", telephone: "+17186506786", email: "info@vvbridge.net", contactType: "customer service", availableLanguage: ["English", "Spanish"] } },
          { "@type": "WebSite", "@id": SITE_URL + "/#website", url: SITE_URL, name: SITE_NAME, description: SITE_DESCRIPTION, inLanguage: "en-US", publisher: { "@id": ORGANIZATION_ID } }
        ] }} />
        <CalendlyProvider>
          <SiteExperience footer={<SiteFooter />}>{children}</SiteExperience>
        </CalendlyProvider>
      </body>
    </html>
  );
}
