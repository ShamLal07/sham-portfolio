import React from "react";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { SkillsStack } from "@/components/SkillsStack";
import { Services } from "@/components/Services";
import { AiWorkflow } from "@/components/AiWorkflow";
import { Process } from "@/components/Process";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";

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
