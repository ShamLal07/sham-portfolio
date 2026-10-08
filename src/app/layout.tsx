import type { Metadata } from "next";
import { displayFont, bodyFont } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/data/siteConfig";

const siteBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : SITE_CONFIG.siteUrl);

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Sham Lal — Web Designer & Frontend Developer",
    template: "%s — Sham Lal",
  },
  description:
    "Sham Lal is a Web Designer and Frontend Developer specializing in modern websites, WordPress, Shopify, CMS and responsive frontend development.",
  keywords: [
    "Sham Lal",
    "Web Designer",
    "Frontend Developer",
    "WordPress Developer",
    "Shopify Storefront",
    "CMS Development",
    "React",
    "Next.js",
    "Webflow",
    "Wix",
    "HubSpot CMS",
    "Responsive Web Design",
    "Chandigarh Web Designer",
    "Mohali Frontend Developer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: siteBaseUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteBaseUrl,
    siteName: "Sham Lal Portfolio",
    title: "Sham Lal — Web Designer & Frontend Developer",
    description:
      "Sham Lal is a Web Designer and Frontend Developer specializing in modern websites, WordPress, Shopify, CMS and responsive frontend development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sham Lal — Web Designer & Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sham Lal — Web Designer & Frontend Developer",
    description:
      "Sham Lal is a Web Designer and Frontend Developer specializing in modern websites, WordPress, Shopify, CMS and responsive frontend development.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sham Lal",
  jobTitle: "Web Designer & Frontend Developer",
  url: SITE_CONFIG.siteUrl,
  sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
  knowsAbout: [
    "Web Design",
    "Frontend Development",
    "WordPress",
    "Shopify",
    "React",
    "Next.js",
    "Webflow",
    "Wix",
    "HubSpot CMS",
  ],
  description:
    "Sham Lal is a Web Designer and Frontend Developer specializing in modern websites, WordPress, Shopify, CMS and responsive frontend development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF9F7] text-[#0F1117]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
