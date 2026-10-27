import React from "react";
import type { Metadata } from "next";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { ALL_SERVICES_CATALOG } from "@/data/servicesCatalog";

import { SITE_CONFIG, SITE_URL } from "@/data/siteConfig";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Web Design & Development Services | Sham Lal",
  description:
    "Professional web design, custom WordPress, Shopify storefronts, Next.js web applications, and UI/UX design by full-stack developer Sham Lal.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/services`,
    siteName: "Sham Lal Portfolio",
    title: "Web Design & Development Services | Sham Lal",
    description:
      "Professional web design, custom WordPress, Shopify storefronts, Next.js web applications, and UI/UX design by full-stack developer Sham Lal.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Services & Expertise by Sham Lal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services | Sham Lal",
    description:
      "Professional web design, custom WordPress, Shopify storefronts, Next.js web applications, and UI/UX design by full-stack developer Sham Lal.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

// Rich JSON-LD Schema for personal branding & search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sham Lal — Web Design & Development Services",
  url: `${SITE_URL}/services`,
  founder: {
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.role,
    email: `mailto:${SITE_CONFIG.email}`,
  },
  description:
    "Professional web design, custom WordPress, Shopify storefronts, Next.js web applications, and UI/UX design by full-stack developer Sham Lal.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Web Services",
    itemListElement: ALL_SERVICES_CATALOG.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${SITE_URL}/services/${s.slug}`,
        description: s.shortDesc,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-28 sm:pt-32 md:pt-36 md:pb-36 bg-transparent text-white min-h-screen relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* JSON-LD Structured Data */}
      <JsonLd data={jsonLd} />

      <div className="site-container relative z-10">
        <ServicesExplorer />
      </div>
    </div>
  );
}
