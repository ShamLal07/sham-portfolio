import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialBar } from "@/components/FloatingSocialBar";
import { SubscriptionPopup } from "@/components/SubscriptionPopup";
import { SITE_CONFIG } from "@/data/siteConfig";

const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shamdev.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
    template: "%s — Sham Lal",
  },
  description:
    "Sham Lal is a Web Developer building creative websites and web apps. Specialized in modern responsive websites, Next.js, WordPress, Shopify, and interactive digital experiences.",
  keywords: [
    "Sham Lal",
    "Web Developer",
    "Frontend Developer",
    "Build Creative Websites",
    "Web Apps",
    "WordPress Developer",
    "Shopify Storefront",
    "CMS Development",
    "React",
    "Next.js",
    "Webflow",
    "Wix",
    "HubSpot CMS",
    "Responsive Web Design",
  ],
  authors: [{ name: SITE_CONFIG.name, url: siteBaseUrl }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shamdev.in",
    siteName: "Sham Lal Portfolio",
    title: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
    description:
      "Sham Lal — Web Developer. Build creative websites and web apps with modern design, Next.js, WordPress, and Shopify.",
    images: [
      {
        url: "https://shamdev.in/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
    description:
      "Sham Lal — Web Developer. Build creative websites and web apps with modern design, Next.js, WordPress, and Shopify.",
    images: ["https://shamdev.in/og-image.jpg"],
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
  jobTitle: "Web Developer",
  url: "https://shamdev.in",
  sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin],
  knowsAbout: [
    "Web Development",
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
    "Sham Lal is a Web Developer building creative websites and web apps. Specialized in modern responsive websites, Next.js, WordPress, Shopify, and interactive digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Explicit Social / WhatsApp / Telegram OpenGraph Meta Tags */}
        <meta property="og:image" content="https://shamdev.in/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://shamdev.in/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sham Lal — Web Developer | Build Creative Websites & Web Apps" />
        <meta name="twitter:image" content="https://shamdev.in/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#0A0B0E] text-white selection:bg-[#F5781E] selection:text-white relative">
        {/* Global Architectural Background Grid, 5-6 Vertical Guide Lines & Ambient Shade */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Subtle Ambient Sunset Tone & Radial Glows */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-amber-500/[0.09] via-orange-600/[0.04] to-transparent blur-[140px]" />
          <div className="absolute top-1/3 -right-36 w-[600px] h-[600px] bg-amber-600/[0.04] blur-[160px]" />
          <div className="absolute top-2/3 -left-36 w-[600px] h-[600px] bg-orange-600/[0.035] blur-[160px]" />
          <div className="absolute -bottom-24 right-1/4 w-[700px] h-[500px] bg-amber-500/[0.05] blur-[150px]" />

          {/* 1px Gray Grid (Rows & Columns Matrix) */}
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "52px 52px",
              maskImage: "radial-gradient(ellipse 90% 90% at 50% 30%, #000 65%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 30%, #000 65%, transparent 100%)",
            }}
          />

          {/* 5-6 Architectural Vertical Guide Lines spanning the website container */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-full max-w-7xl h-full grid grid-cols-6 px-4 sm:px-6 lg:px-8 border-x border-white/[0.04]">
              <div className="border-r border-white/[0.035] h-full" />
              <div className="border-r border-white/[0.035] h-full" />
              <div className="border-r border-white/[0.035] h-full" />
              <div className="border-r border-white/[0.035] h-full" />
              <div className="border-r border-white/[0.035] h-full" />
            </div>
          </div>

          {/* Subtle vertical ribbed accent lines (matches Hero section aesthetic) */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0px, rgba(255, 255, 255, 0.3) 1px, transparent 1px, transparent 24px)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <Navbar />
        <div className="flex-1 relative z-10">{children}</div>
        <Footer />
        <FloatingSocialBar />
        <SubscriptionPopup />
      </body>
    </html>
  );
}
