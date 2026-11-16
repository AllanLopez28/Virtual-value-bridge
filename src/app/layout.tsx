import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import SiteExperience from "@/components/redesign/SiteExperience";
import { ReferenceFooter } from "@/components/redesign/ReferenceDesign";
import "./reference.css";
import "./redesign.css";
import { CalendlyProvider } from "@/context/CalendlyContext";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Virtual Value Bridge | BPO Outsourcing",
  description: "A specialist that fits right in. Every Virtual Value Bridge specialist is matched, trained, and set up to work the way your business already does.",
  icons: {
    icon: '/icon-03.svg',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "name": ["Virtual Assistant", "Property Manager", "Bookkeeping", "Customer Service"],
              "url": [
                "https://www.virtualvaluebridge.com/services/virtual-assistant",
                "https://www.virtualvaluebridge.com/services/property-management",
                "https://www.virtualvaluebridge.com/services/bookkeeping-accounting",
                "https://www.virtualvaluebridge.com/services/customer-service"
              ]
            })
          }}
        />
        <CalendlyProvider>
          <SiteExperience footer={<ReferenceFooter />}>{children}</SiteExperience>
        </CalendlyProvider>
      </body>
    </html>
  );
}
