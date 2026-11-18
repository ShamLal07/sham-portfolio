import React from "react";
import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/db";
import { BlogListingClient } from "@/components/BlogListingClient";
import { ContactCTA } from "@/components/ContactCTA";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG, SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Blog & Web Development Insights — WordPress, Shopify, Next.js & UI/UX | Sham Lal",
  description:
    "Actionable web development guides, Shopify conversion optimization tips, custom WordPress tutorials, and performance engineering insights by Sham Lal.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/blog`,
    siteName: "Sham Lal Portfolio",
    title: "Blog & Web Development Insights | Sham Lal",
    description:
      "Actionable web development guides, Shopify conversion optimization tips, custom WordPress tutorials, and performance engineering insights by Sham Lal.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sham Lal Blog — Web Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Web Development Insights | Sham Lal",
    description:
      "Actionable web development guides, Shopify conversion optimization tips, custom WordPress tutorials, and performance engineering insights by Sham Lal.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36 bg-transparent text-white min-h-screen">
      <JsonLd data={breadcrumbSchema} />

      <div className="site-container">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 border border-blue-500/20">
            ARTICLES &amp; TUTORIALS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Web Insights &amp; Strategy
          </h1>
          <p className="text-base sm:text-xl text-white/65 leading-relaxed">
            In-depth guides on WordPress engineering, Shopify speed optimization, React/Next.js architectures, and conversion-focused UI/UX design.
          </p>
        </div>

        {/* Interactive Client Listing with Search, Categories & Pagination */}
        <BlogListingClient initialPosts={posts} />

        {/* In-page Conversion Section */}
        <div className="mt-20">
          <ContactCTA />
        </div>
      </div>
    </div>
  );
}
