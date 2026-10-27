import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingSocialBar } from "@/components/FloatingSocialBar";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG, SITE_URL } from "@/data/siteConfig";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
    template: "%s | Sham Lal",
  },
  description: SITE_CONFIG.metaDescription,
  authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
  creator: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sham Lal Portfolio",
    title: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
    description: SITE_CONFIG.metaDescription,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
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
    description: SITE_CONFIG.metaDescription,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2vJgtBfQq3hJS0FB1ioR577I_esmZPPODBy3-kdx8v0",
  },
};

const rootStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.role,
    url: SITE_URL,
    email: `mailto:${SITE_CONFIG.email}`,
    sameAs: [SITE_CONFIG.github, SITE_CONFIG.linkedin, SITE_CONFIG.upwork],
    knowsAbout: [
      "Next.js",
      "React",
      "WordPress",
      "Shopify",
      "HubSpot CMS",
      "Webflow",
      "Wix",
      "Frontend Development",
      "UI/UX Design",
      "Tailwind CSS",
    ],
    description: SITE_CONFIG.metaDescription,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Sham Lal Portfolio",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    inLanguage: "en-US",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${roboto.variable}`}>
      <head>
        <JsonLd data={rootStructuredData} />
      </head>
      <body className="antialiased min-h-screen flex flex-col   selection:text-white relative">
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
      </body>
    </html>
  );
}
