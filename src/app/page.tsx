import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { SkillsStack } from "@/components/SkillsStack";
import { Services } from "@/components/Services";
import { AiWorkflow } from "@/components/AiWorkflow";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { SITE_CONFIG, SITE_URL } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Sham Lal — Web Developer | Build Creative Websites & Web Apps",
  description: SITE_CONFIG.metaDescription,
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
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero with website mockups */}
      <Hero />

      {/* 2. Project filter tabs & Featured projects */}
      <FeaturedWork />

      {/* 3. Skills and technology stack with original brand logos */}
      <SkillsStack />

      {/* 4. Services & Expertise */}
      <Services />

      {/* 5. AI Tools & Workflow */}
      <AiWorkflow />

      {/* 6. Tools & Platforms I Work With */}

      {/* 7. My Process (5-step timeline) */}
      <Process />

      {/* 8. Global Clients / Collaboration */}

      {/* 9. Work History / Professional Experience */}
      <Experience />

      {/* 10. Client Testimonials */}
      <Testimonials />


      {/* 12. Contact Section */}
      <ContactCTA />
    </main>
  );
}
