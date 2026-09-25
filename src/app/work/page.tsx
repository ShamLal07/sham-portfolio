import React from "react";
import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { WorkFilter } from "@/components/WorkFilter";
import { CtaSection } from "@/components/CtaSection";
import { PROJECTS, PORTFOLIO_PDF, BRAND_NAME } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Featured Client Work",
  description:
    `Explore award-winning websites, e-commerce stores, and UI/UX design systems engineered by ${BRAND_NAME}. Specializing in Next.js, Shopify, WordPress, and 3D motion.`,
  openGraph: {
    title: `Featured Client Work — ${BRAND_NAME}`,
    description:
      "Websites, stores and digital experiences designed and engineered end to end.",
  },
};

export default function WorkPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Selected Work</h1>
        <p>Websites, e-commerce stores, and digital platforms engineered end-to-end.</p>
      </div>

      <div className="container" style={{ paddingBottom: "96px" }}>
        <div className="notice rv in">
          <Icon name="i-info" />
          <p>
            Explore our curated selection of recent client projects and design
            systems. Detailed project specifications and additional commercial
            case studies are available in our official Agency Portfolio Deck.
          </p>
          <a
            className="btn btn-ghost"
            href={PORTFOLIO_PDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="i-file" /> Open Agency Deck (PDF)
          </a>
        </div>

        <WorkFilter initialProjects={PROJECTS} />
      </div>

      <CtaSection />
    </>
  );
}
