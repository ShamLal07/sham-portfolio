import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { LatestProjects } from "@/components/LatestProjects";
import { SkillsStack } from "@/components/SkillsStack";
import { Services } from "@/components/Services";
import { DeliveryWorkflow } from "@/components/DeliveryWorkflow";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { AmbientCursorGlow } from "@/components/AmbientCursorGlow";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { getAllDynamicProjects } from "@/lib/db";
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

export default async function HomePage() {
  const dynamicProjects = await getAllDynamicProjects();

  return (
    <main className="relative bg-[#05070E] text-white selection:bg-blue-500/30 selection:text-blue-200 min-h-screen">
      {/* Top Dynamic Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Global Mouse Tracker Ambient Glow for Desktop */}
      <AmbientCursorGlow />

      {/* 1. Hero with website mockups */}
      <Hero />

      {/* 2. Project filter tabs & Featured projects (Case Studies) */}
      <FeaturedWork />

      {/* 3. NEW SECTION: Latest Projects (Immediately AFTER Case Studies) */}
      <LatestProjects initialProjects={dynamicProjects} />

      {/* 4. Skills and technology stack with original brand logos */}
      <SkillsStack />

      {/* 5. Services & Expertise */}
      <Services />

      {/* 6. How I Deliver In Record Time (Velocity Pipeline) */}
      <DeliveryWorkflow />

      {/* 7. My Process (5-step timeline with animated wave) */}
      <Process />

      {/* 8. Work History / Professional Experience */}
      <Experience />

      {/* 9. Client Testimonials */}
      <Testimonials />

      {/* 10. Contact Section */}
      <ContactCTA />
    </main>
  );
}
