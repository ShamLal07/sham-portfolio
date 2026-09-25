import React from "react";
import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import {
  EMAIL,
  PHONE,
  GITHUB,
  PORTFOLIO_PDF,
  LOCATION,
  BRAND_NAME,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Project Consultation & Partnership",
  description:
    `Initiate a project inquiry with ${BRAND_NAME}. Pro-level UI/UX architecture, 2D/3D motion, Next.js web applications, and custom Shopify engineering.`,
  openGraph: {
    title: `Initiate a Project — ${BRAND_NAME}`,
    description:
      "Tell us about your project vision. We'll reply with strategic questions, ideas, and a clear architectural roadmap.",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Initiate a Project</h1>
        <p>
          Tell us about your digital vision. We&apos;ll reply with strategic
          questions, technical recommendations, and a transparent roadmap.
        </p>
      </div>

      <div className="container contact-grid" style={{ paddingBottom: "96px" }}>
        <div className="f">
          <ContactForm />
        </div>

        <aside className="s">
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "8px" }}>
              Direct Studio Contact
            </h2>
            <a className="linkrow" href={`mailto:${EMAIL}`}>
              <Icon name="i-mail" />
              {EMAIL}
            </a>
            <a className="linkrow" href={`tel:${PHONE}`}>
              <Icon name="i-phone" />
              {PHONE}
            </a>
            <a
              className="linkrow"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="i-github" />
              GitHub Repository
            </a>
            <a
              className="linkrow"
              href={PORTFOLIO_PDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="i-file" />
              Agency Deck (PDF)
            </a>
            <div className="linkrow" style={{ fontWeight: 500 }}>
              <Icon name="i-globe" />
              {LOCATION} · Global Client Engagements
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>
              Our Engagement Process
            </h2>
            <ol
              style={{
                paddingLeft: "20px",
                color: "var(--text-2)",
                display: "grid",
                gap: "8px",
              }}
            >
              <li>Submit your project vision &amp; scope</li>
              <li>Discovery &amp; technical scoping call</li>
              <li>Fixed proposal &amp; architecture roadmap</li>
              <li>Figma UI/UX &amp; 3D motion design</li>
              <li>High-velocity Next.js / Shopify build</li>
              <li>Testing, SEO setup &amp; public launch</li>
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
}
