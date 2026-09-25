import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CodeCard } from "@/components/CodeCard";
import { CtaSection } from "@/components/CtaSection";
import {
  EXPERIENCE,
  EDUCATION,
  PORTFOLIO_PDF,
  BRAND_NAME,
  FOUNDER_NAME,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Studio & Founder",
  description:
    `Meet ${FOUNDER_NAME}, Founder of ${BRAND_NAME} with 6+ years of mastery across UI/UX architecture, 2D/3D motion design, and high-performance Next.js and Shopify engineering.`,
  openGraph: {
    title: `About ${BRAND_NAME} & ${FOUNDER_NAME}`,
    description:
      "A boutique digital product studio bridging the gap between bespoke visual storytelling and precision code.",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="container page-head">
        <h1>About Our Studio</h1>
        <p>Strategic design thinking, backed by 6+ years of precision engineering.</p>
      </div>

      <div className="container about-grid" style={{ paddingBottom: "96px" }}>
        <CodeCard />
        <div className="about-text rv in">
          <h2>Hi, I&apos;m {FOUNDER_NAME}.</h2>
          <p>
            I am a Senior Creative Technologist, UI/UX Architect, and Founder of{" "}
            <strong>{BRAND_NAME}</strong> based in Chandigarh / Mohali, India.
            With over <strong>6 years of deep multidisciplinary experience</strong>,
            I operate as a full-cycle, boutique digital product studio — delivering
            world-class brand identities, high-converting digital products, and
            custom web platforms.
          </p>
          <p>
            I serve as Senior Frontend Developer at Eminence Technology, leading
            high-impact Shopify and custom CMS architectures, while collaborating
            directly with select global partners through {BRAND_NAME}.
          </p>

          <h3>The Boutique Studio Advantage</h3>
          <p>
            Traditional creative agencies charge steep markups to cover layers
            of account executives, junior designers, and siloed developers. With{" "}
            {BRAND_NAME}, you partner directly with a principal architect who
            conceptualizes the UX, designs the 3D visual language in Figma, and
            writes the production Next.js and Liquid code. The result: unmatched
            velocity, zero communication decay, and agency-grade execution.
          </p>

          <h3>My Design Philosophy</h3>
          <p>
            A high-performing digital experience makes the next step effortless.
            I ground every layout in user psychology, typographic harmony, and
            deliberate conversion funnels before crafting immersive 2D/3D motion
            and visual polish.
          </p>

          <h3>How We Engineer</h3>
          <p>
            What is signed off in design is built line-by-line with clean,
            accessible, performant code. Zero heavy plugins, zero DOM bloat.
            Technical on-page SEO, Schema.org structured data, and 100/100 Core
            Web Vitals are foundational requirements, never an afterthought.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
            <Link className="btn btn-primary" href="/contact">
              Initiate a Project
            </Link>
            <a
              className="btn btn-ghost"
              href={PORTFOLIO_PDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="i-file" /> Agency Deck (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* Experience and Education */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Career &amp; Production Timeline</h2>
            <p>Proven leadership in creative direction, frontend systems, and client delivery.</p>
          </div>
          <div className="exp rv in">
            <ol className="timeline">
              {EXPERIENCE.map((e) => (
                <li key={e.role + e.org}>
                  <h3>{e.role}</h3>
                  <p className="caption" style={{ margin: "4px 0 12px" }}>
                    {e.org}, {e.place} · {e.dates}
                  </p>
                  <ul className="pts">
                    {e.pts.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="edu">
              <h3 style={{ marginBottom: "16px" }}>Education &amp; Foundations</h3>
              {EDUCATION.map((x) => (
                <div key={x.degree} className="edu-i">
                  <h4>{x.degree}</h4>
                  <p className="small">{x.institution}</p>
                  <p className="caption">{x.period}</p>
                </div>
              ))}
              <h3 style={{ margin: "32px 0 12px" }}>Communication</h3>
              <p className="small">English (Fluent Professional), Hindi (Native)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools and skills */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="sec-head">
            <h2>Core Disciplines &amp; Tooling</h2>
            <p>Mastery across modern visual craft, motion, and web architecture.</p>
          </div>
          <div className="cards rv in">
            <article className="card">
              <h3>UI/UX Architecture</h3>
              <p className="small">
                Figma, Adobe XD, and Photoshop for design systems, wireframes,
                prototyping, and user journey mapping.
              </p>
            </article>
            <article className="card">
              <h3>E-Commerce &amp; CMS</h3>
              <p className="small">
                Shopify (Liquid Theme Dev), WordPress (ACF Pro, WooCommerce),
                and Webflow for autonomy-focused content management.
              </p>
            </article>
            <article className="card">
              <h3>Next-Gen Frontend</h3>
              <p className="small">
                Next.js App Router, React.js, TypeScript, Tailwind CSS, Shadcn,
                and modern semantic HTML5/CSS3.
              </p>
            </article>
            <article className="card">
              <h3>2D &amp; 3D Motion</h3>
              <p className="small">
                GSAP ScrollTrigger, Three.js WebGL effects, and Framer Motion
                for kinetic visual storytelling.
              </p>
            </article>
            <article className="card">
              <h3>Technical SEO &amp; AIO</h3>
              <p className="small">
                On-page SEO, Schema.org JSON-LD graph, Core Web Vitals speed
                tuning, and AI search engine citation optimization.
              </p>
            </article>
            <article className="card">
              <h3>AI-Augmented Velocity</h3>
              <p className="small">
                Cursor AI, Claude 3.7, ChatGPT 4o, and Gemini for rapid
                ideation, code optimization, and compressed delivery cycles.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Studio Metrics</h2>
            <p>The essentials, backed by results.</p>
          </div>
          <div className="cards rv in">
            <article className="card">
              <h3>6+ Years Mastery</h3>
              <p className="small">
                Over six years of continuous evolution from graphic and visual
                design to architecting complex full-stack web products.
              </p>
            </article>
            <article className="card">
              <h3>Unified Precision</h3>
              <p className="small">
                Responsive pixel-perfect builds · Figma to code · Shopify and
                WordPress CMS · 2D/3D kinetic animation · high-converting landing
                pages.
              </p>
            </article>
            <article className="card">
              <h3>Global Engagements</h3>
              <p className="small">
                Partnering with startups, technology companies, and agencies
                worldwide with flexible timezone overlap and dedicated attention.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
