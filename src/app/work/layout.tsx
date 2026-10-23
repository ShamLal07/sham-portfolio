import type { Metadata } from "next";
import { SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Selected Work & Client Projects | Sham Lal",
  description:
    "Explore 27+ client web development projects across Next.js, WordPress, Shopify, and Webflow crafted with precision UI/UX by web developer Sham Lal.",
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/work`,
    siteName: "Sham Lal Portfolio",
    title: "Selected Work & Client Projects | Sham Lal",
    description:
      "Explore 27+ client web development projects across Next.js, WordPress, Shopify, and Webflow crafted with precision UI/UX by web developer Sham Lal.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Selected Work by Sham Lal — Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work & Client Projects | Sham Lal",
    description:
      "Explore 27+ client web development projects across Next.js, WordPress, Shopify, and Webflow crafted with precision UI/UX by web developer Sham Lal.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
