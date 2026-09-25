import type { Metadata } from "next";
import { displayFont, bodyFont } from "./fonts";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Fab } from "@/components/Fab";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import {
  SITE_URL,
  BRAND_NAME,
  FOUNDER_NAME,
  AGENCY_TAGLINE,
  LOCATION,
  EMAIL,
  PHONE,
  GITHUB,
  PORTFOLIO_PDF,
} from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} — ${AGENCY_TAGLINE}`,
    template: `%s — ${BRAND_NAME}`,
  },
  description:
    `${BRAND_NAME} is an elite one-person digital agency and studio founded by ${FOUNDER_NAME} with 6+ years of mastery in pro-level UI/UX architecture, 2D/3D motion, Next.js, custom Shopify, and WordPress.`,
  keywords: [
    BRAND_NAME,
    FOUNDER_NAME,
    "One Person Digital Agency",
    "Creative Studio",
    "UI UX Architecture",
    "3D Motion Design",
    "Next.js Development Agency",
    "Shopify Liquid Expert",
    "WordPress ACF Developer",
    "Front End Creative Technologist",
    "Chandigarh Web Agency",
    "Mohali Digital Studio",
    "Technical SEO Specialist",
    "AIO Optimization",
  ],
  authors: [{ name: FOUNDER_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} — ${AGENCY_TAGLINE}`,
    description:
      "Full-cycle digital studio and one-person creative powerhouse. Pro UI/UX, 2D/3D kinetic motion, and high-velocity Next.js/Shopify web systems.",
    images: [
      {
        url: "/hero-3d.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} — 3D Digital Creative Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} — ${AGENCY_TAGLINE}`,
    description:
      "Full-cycle digital studio and one-person creative powerhouse. Pro UI/UX, 2D/3D kinetic motion, and high-velocity Next.js/Shopify web systems.",
    images: ["/hero-3d.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/hero-3d.jpg`,
      founder: {
        "@type": "Person",
        name: FOUNDER_NAME,
        jobTitle: "Founder & Lead Creative Technologist",
      },
      description:
        "Full-cycle digital studio and one-person creative agency specializing in pro-level UI/UX, 2D/3D motion, Next.js, Shopify, and technical SEO.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandigarh / Mohali",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE,
        email: EMAIL,
        contactType: "customer service",
      },
      sameAs: [GITHUB, PORTFOLIO_PDF],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${BRAND_NAME} — Digital Studio`,
      url: SITE_URL,
      priceRange: "₹₹₹",
      image: `${SITE_URL}/hero-3d.jpg`,
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandigarh / Mohali",
        addressCountry: "IN",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Creative & Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Architecture & Product Design",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Next.js & React Web Engineering",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Shopify & E-Commerce Theme Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WordPress & ACF Pro CMS Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "2D/3D Motion & WebGL Interactive Experiences",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical On-Page SEO & AIO",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: FOUNDER_NAME,
      jobTitle: "Founder & Lead Creative Technologist",
      description:
        "Senior creative technologist and digital designer with 6+ years of mastery in UI/UX architecture, 2D/3D motion, and full-stack web development.",
      url: SITE_URL,
      worksFor: {
        "@id": `${SITE_URL}/#organization`,
      },
      sameAs: [GITHUB, PORTFOLIO_PDF],
      knowsAbout: [
        "UI/UX Architecture",
        "3D Motion Design",
        "Next.js App Router",
        "React.js",
        "Shopify Liquid",
        "WordPress ACF",
        "Tailwind CSS",
        "Technical SEO & AIO",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND_NAME,
      description: AGENCY_TAGLINE,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('sl-theme');
    var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <CustomCursor />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" tabIndex={-1} className="pg">
          {children}
        </main>
        <Footer />
        <Fab />
      </body>
    </html>
  );
}
