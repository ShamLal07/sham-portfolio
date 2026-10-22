import React from "react";
import type { Metadata } from "next";
import { ServicesExplorer } from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services & Expertise — Sham Lal | Full-Stack & CMS Developer",
  description:
    "Explore professional freelance web development, custom WordPress, Shopify stores, Technical & On-Page SEO, Off-Page backlinks, Next.js web applications, and ongoing website maintenance by Sham Lal.",
  keywords: [
    "Sham Lal Services",
    "WordPress Developer Freelance",
    "Shopify Store Expert",
    "Technical SEO Specialist",
    "On-Page SEO Services",
    "Off-Page SEO Backlinks",
    "Next.js Developer India",
    "Full-Stack Web Development",
    "UI/UX Design Figma",
    "Website Maintenance & Speed Optimization"
  ],
  openGraph: {
    title: "Innovative Digital Services For Business Growth — Sham Lal",
    description:
      "Expert-led web development, SEO, WordPress, Shopify, and full-stack solutions designed to scale your brand and maximize ROI.",
    type: "website",
  },
};

// Rich SEO JSON-LD Schema for personal branding & search engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sham Lal — Web Design & Development Services",
  "url": "https://shamdev.in/services",
  "founder": {
    "@type": "Person",
    "name": "Sham Lal",
    "jobTitle": "Full Stack & CMS Web Developer",
    "email": "thakur@shamdev.in",
  },
  "description": "High-performance web development, custom WordPress & Shopify, technical and off-page SEO, and modern Next.js solutions.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Web Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom WordPress Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce & Shopify Store Builds"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical & On-Page SEO Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Off-Page SEO & Authority Backlinks"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack React & Next.js Web Apps"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design & Prototyping"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ongoing Website Maintenance & Support"
        }
      }
    ]
  }
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
