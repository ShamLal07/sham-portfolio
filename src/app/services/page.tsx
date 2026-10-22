import React from "react";
import type { Metadata } from "next";
import { ServicesExplorer } from "@/components/ServicesExplorer";
import { ALL_SERVICES_CATALOG } from "@/data/servicesCatalog";

export const metadata: Metadata = {
  title: "Services & Expertise — Sham Lal | Web Designer & Web Developer",
  description:
    "Explore professional web design, UI/UX, custom WordPress development, Shopify storefronts, Next.js web applications, and ongoing website maintenance by Sham Lal.",
  keywords: [
    "Sham Lal Services",
    "Web Designer",
    "Web Developer",
    "WordPress Developer Freelance",
    "Shopify Store Expert",
    "Next.js Developer India",
    "Full-Stack Web Development",
    "UI/UX Design Figma",
    "Website Maintenance & Speed Optimization"
  ],
  openGraph: {
    title: "Innovative Web Design & Development Services — Sham Lal",
    description:
      "Expert-led web design, UI/UX, WordPress, Shopify, and frontend web development solutions designed to scale your brand.",
    type: "website",
  },
};

// Rich JSON-LD Schema for personal branding & search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sham Lal — Web Design & Development Services",
  "url": "https://shamdev.in/services",
  "founder": {
    "@type": "Person",
    "name": "Sham Lal",
    "jobTitle": "Web Designer & Web Developer",
    "email": "thakur@shamdev.in",
  },
  "description": "High-performance web design, UI/UX, custom WordPress & Shopify development, and modern Next.js web solutions.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Web Services",
    "itemListElement": ALL_SERVICES_CATALOG.map((s) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": s.title,
        "url": `https://shamlal.com/services/${s.slug}`,
        "description": s.shortDesc,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36 bg-transparent text-white min-h-screen relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="site-container relative z-10">
        <ServicesExplorer />
      </div>
    </div>
  );
}
