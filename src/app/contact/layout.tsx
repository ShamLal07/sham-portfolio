import type { Metadata } from "next";
import { SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Sham Lal — Hire a Web Developer",
  description:
    "Get in touch with Sham Lal for website design, frontend development, custom WordPress, Shopify, or Next.js projects. Free project consultation.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/contact`,
    siteName: "Sham Lal Portfolio",
    title: "Contact Sham Lal — Hire a Web Developer",
    description:
      "Get in touch with Sham Lal for website design, frontend development, custom WordPress, Shopify, or Next.js projects. Free project consultation.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Contact Sham Lal — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sham Lal — Hire a Web Developer",
    description:
      "Get in touch with Sham Lal for website design, frontend development, custom WordPress, Shopify, or Next.js projects. Free project consultation.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
