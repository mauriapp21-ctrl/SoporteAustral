import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Soporte Austral — Servicios TI en Puerto Montt y el sur de Chile",
    template: "%s | Soporte Austral",
  },
  description: SITE.description,
  keywords: [
    "Servicios TI Puerto Montt",
    "soporte informático sur de Chile",
    "soporte TI empresas",
    "ciberseguridad empresas Chile",
    "servicios cloud Chile",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE.url,
    siteName: SITE.name,
    title: "Soporte Austral — Servicios TI en el sur de Chile",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Soporte Austral — Servicios TI en el sur de Chile",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "CL",
    },
    areaServed: "Sur de Chile",
    sameAs: Object.values(SITE.social),
  };

  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
