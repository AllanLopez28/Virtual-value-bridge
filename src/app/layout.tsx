import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtual Value Bridge | BPO Outsourcing",
  description: "A specialist that fits right in. Every Virtual Value Bridge specialist is matched, trained, and set up to work the way your business already does.",
  icons: {
    icon: '/icon-03.svg',
  },
};

import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
