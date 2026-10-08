import React from "react";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Testimonials } from "@/components/Testimonials";
import { PlatformStrip } from "@/components/PlatformStrip";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { GlobalClients } from "@/components/GlobalClients";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Selected Work / Projects (with interactive filter tabs) */}
      <FeaturedWork />

      {/* 3. Client Testimonials */}
      <Testimonials />

      {/* 4. Tools & Platforms I Work With */}
      <PlatformStrip />

      {/* 5. Services (01 to 06) */}
      <Services />

      {/* 6. My Process (5-step timeline) */}
      <Process />

      {/* 7. Global Clients / Collaboration (Dark section) */}
      <GlobalClients />

      {/* 8. Professional Experience */}
      <Experience />

      {/* 9. About Section & Why Work With Me */}
      <About />

      {/* 10. Large Closing Contact CTA */}
      <ContactCTA />
    </main>
  );
}
