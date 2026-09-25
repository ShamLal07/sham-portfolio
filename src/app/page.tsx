import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import { HeroWorkflow } from "@/components/HeroWorkflow";
import { HeroVisual3D } from "@/components/HeroVisual3D";
import { HeroCanvasBackground } from "@/components/HeroCanvasBackground";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { CodeCard } from "@/components/CodeCard";
import { InsightCard } from "@/components/InsightCard";
import { TechStackTabs } from "@/components/TechStackTabs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CtaSection } from "@/components/CtaSection";
import {
  PROJECTS,
  SERVICES,
  PROCESS,
  INSIGHTS,
  BRAND_NAME,
} from "@/data/portfolio";

export default function HomePage() {
  const heroWords = "Engineering High-Impact Digital Products & Brand Realities.".split(
    " "
  );

  return (
    <>
      {/* Hero Section with 100% Canvas Background & 50/50 Desktop Split */}
      <section
        className="hero"
        style={{
          position: "relative",
          overflow: "hidden",
          paddingBlock: "clamp(56px, 8vw, 110px) clamp(48px, 6vw, 96px)",
        }}
      >
        {/* Full-width 100% interactive background with ambient lighting */}
        <HeroCanvasBackground />

        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "15%",
            width: "50vw",
            height: "50vw",
            maxWidth: "650px",
            maxHeight: "650px",
            background:
              "radial-gradient(circle, rgba(239, 189, 48, 0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-top">
            <span className="tag live">
              <i className="pulse" />
              Accepting Select Projects &amp; Retainers
            </span>
            <span className="tag accent">Boutique Digital Product Studio</span>
            <span className="tag accent">6+ Years Industry Mastery</span>
            <span className="tag accent">UI/UX &amp; 3D Web Systems</span>
          </div>

          {/* 50% / 50% Desktop Split Grid */}
          <div
            className="hero-split-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "clamp(24px, 4vw, 48px)",
              alignItems: "center",
              marginTop: "var(--s3)",
            }}
          >
            {/* Left Column (50% on desktop) */}
            <div
              style={{
                gridColumn: "span 7",
                display: "flex",
                flexDirection: "column",
                gap: "var(--s3)",
              }}
              className="hero-left-col"
            >
              <h1
                className="display"
                aria-label="Engineering High-Impact Digital Products & Brand Realities."
                style={{
                  fontSize: "clamp(2.4rem, 4.6vw, 4.1rem)",
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  maxWidth: "18ch",
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                }}
              >
                {heroWords.map((word, i) => (
                  <span key={i} className="w" aria-hidden="true">
                    <span style={{ ["--i" as string]: i }}>{word} </span>
                  </span>
                ))}
              </h1>

              <p
                className="tagline"
                style={{
                  fontSize: "clamp(1.1rem, 1.8vw, 1.32rem)",
                  color: "var(--accent-t)",
                  margin: 0,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Pro UI/UX Architecture · 2D/3D Kinetic Motion · Next.js Web Systems
              </p>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.65 }}>
                Founded by Sham Lal, {BRAND_NAME} is an independent creative
                engineering studio partnering with ambitious startups and global
                brands. We orchestrate pro-level UI/UX architecture, immersive
                2D/3D kinetic animations, and high-velocity web development in
                Next.js, Shopify, and WordPress. Zero bureaucratic lag, zero
                handoff friction — from strategic concept to production launch.
              </p>

              <div
                className="cta"
                style={{
                  display: "flex",
                  gap: "14px",
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <Link className="btn btn-primary" href="/contact">
                  Start a project <Icon name="i-arrow" />
                </Link>
                <Link className="btn btn-ghost" href="/work">
                  Explore selected work
                </Link>
              </div>

              {/* Fast credibility metrics */}
              <div
                style={{
                  display: "flex",
                  gap: "clamp(16px, 3vw, 32px)",
                  marginTop: "var(--s2)",
                  paddingTop: "var(--s3)",
                  borderTop: "1px solid var(--border)",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <b
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "1.35rem",
                      display: "block",
                      color: "var(--text)",
                    }}
                  >
                    6+ Years
                  </b>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    Design &amp; Code Mastery
                  </span>
                </div>
                <div>
                  <b
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "1.35rem",
                      display: "block",
                      color: "var(--accent-t)",
                    }}
                  >
                    Direct Execution
                  </b>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    Principal-led, Zero Bloat
                  </span>
                </div>
                <div>
                  <b
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "1.35rem",
                      display: "block",
                      color: "var(--success)",
                    }}
                  >
                    100/100
                  </b>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    Core Web Vitals Speed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (50% on desktop) - 3D Showcase */}
            <div
              style={{
                gridColumn: "span 5",
                width: "100%",
              }}
              className="hero-right-col"
            >
              <HeroVisual3D />
            </div>
          </div>

          {/* Workflow Stepper */}
          <HeroWorkflow />
        </div>
      </section>

      {/* Facts Row */}
      <div className="container">
        <div className="facts">
          <div className="fact">
            <b>6+ Years</b>
            <span>Design &amp; Code Mastery</span>
          </div>
          <div className="fact">
            <b>Direct Senior Access</b>
            <span>Direct execution, zero bloat</span>
          </div>
          <div className="fact">
            <b>Global Ready</b>
            <span>Worldwide client partnerships</span>
          </div>
          <div className="fact">
            <b>Available Now</b>
            <span>For select client projects</span>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <Marquee />

      {/* Why work with us */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Why partner with our studio</h2>
            <p>Four distinct advantages of a boutique creative engineering studio.</p>
          </div>
          <div className="why rv in">
            <article>
              <h3>Uncompromised Design-to-Code Fidelity</h3>
              <p>
                Because the same creative technologist architects the screens in
                Figma and writes the code in Next.js, what is approved in design
                is 100% pixel-perfect in the final browser build. No handoff
                decay.
              </p>
            </article>
            <article>
              <h3>Autonomous CMS Client Control</h3>
              <p>
                We construct scalable content architectures on WordPress (ACF Pro)
                and Shopify Liquid, giving your internal marketing team complete
                freedom to edit copy, media, and products without touching code.
              </p>
            </article>
            <article>
              <h3>Extreme Speed &amp; Technical SEO</h3>
              <p>
                Every experience is engineered for 100/100 Core Web Vitals,
                responsive fluid typography, structured Schema.org graphs, and
                rich OpenGraph tags for search engines and AI agents.
              </p>
            </article>
            <article>
              <h3>Direct Senior Communication</h3>
              <p>
                You communicate directly with the agency founder and principal
                builder. Plain-language milestones, transparent roadmaps, and
                rapid iteration cycles without layers of junior middlemen.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="sec-head">
            <h2>Featured Client Work</h2>
            <p>
              Bespoke digital platforms showcasing pro UI/UX, e-commerce, and
              modern web architecture.
            </p>
          </div>
          <div className="cards rv in">
            {PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p style={{ marginTop: "32px" }}>
            <Link className="btn btn-ghost" href="/work">
              View all portfolio projects
            </Link>
          </p>
        </div>
      </section>

      {/* Services summary */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Core Agency Capabilities</h2>
            <p>
              Full-cycle design, 3D motion, and engineering handled with unified
              precision.
            </p>
          </div>
          <div className="cards rv in">
            {SERVICES.slice(0, 5).map((service) => (
              <article key={service.name} className="card">
                <Icon name={service.icon} />
                <h3>{service.name}</h3>
                <p className="small">{service.lead}</p>
                <ul className="pts">
                  {service.items.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article
              className="card"
              style={{
                justifyContent: "center",
                background: "var(--accent)",
                color: "var(--accent-ink)",
                borderColor: "var(--accent)",
              }}
            >
              <h3>Explore All Services</h3>
              <p className="small" style={{ color: "var(--accent-ink)" }}>
                Including Shopify Liquid, WordPress ACF, 2D/3D Motion, and
                Technical SEO &amp; AIO.
              </p>
              <Link
                className="btn"
                style={{
                  background: "var(--accent-ink)",
                  color: "var(--accent)",
                  alignSelf: "flex-start",
                }}
                href="/services"
              >
                View all capabilities
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="sec-head">
            <h2>Our Project Methodology</h2>
            <p>
              A disciplined six-phase roadmap ensuring transparency, precision,
              and on-time delivery.
            </p>
          </div>
          <ol className="cards rv in" style={{ listStyle: "none", padding: 0 }}>
            {PROCESS.map((p, i) => (
              <li key={p[0]} className="card">
                <span className="badge" style={{ alignSelf: "flex-start" }}>
                  Phase 0{i + 1}
                </span>
                <h3>{p[0]}</h3>
                <p className="small">{p[1]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Improved Interactive Technology Tabs */}
      <section>
        <div className="container">
          <div className="sec-head">
            <div>
              <span
                className="tag accent"
                style={{ marginBottom: "12px", display: "inline-flex" }}
              >
                Enterprise Stack
              </span>
              <h2>Production Technology Stack</h2>
            </div>
            <p>
              The industry-proven frameworks, design systems, and platforms we
              leverage to build market-leading digital products.
            </p>
          </div>

          {/* Tabbed Interface */}
          <TechStackTabs />

          <p style={{ marginTop: "32px" }}>
            <Link className="btn btn-ghost" href="/technology">
              View full technology matrix &amp; documentation
            </Link>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={{ background: "var(--surface)" }}>
        <div className="container about-grid">
          <CodeCard />
          <div className="about-text rv in">
            <h2>Strategic Design. High-Velocity Engineering.</h2>
            <p>
              Founded by Sham Lal, {BRAND_NAME} merges over 6 years of deep
              visual design mastery with advanced front-end development. Having
              designed and launched digital platforms across multiple industries,
              we understand both aesthetic psychology and the rigorous code
              standards required for high-traffic environments.
            </p>
            <p>
              From custom Shopify stores and WordPress CMS frameworks to complex
              interactive Next.js applications, our boutique studio structure
              gives clients senior-level attention and direct execution without
              agency bloat.
            </p>
            <p>
              <Link className="btn btn-ghost" href="/about">
                Read our story &amp; founder background
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Featured Client Study</h2>
            <p>Deep dive into a recent platform architecture.</p>
          </div>
          <Link className="next rv in" href={`/work/${PROJECTS[0].slug}`}>
            <div className="grid" style={{ alignItems: "center" }}>
              <div style={{ gridColumn: "span 6" }}>
                <span className="tag">Featured Case Study</span>
                <h3
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    margin: "16px 0",
                  }}
                >
                  {PROJECTS[0].title}
                </h3>
                <p>{PROJECTS[0].desc}</p>
                <p
                  className="plink"
                  style={{ marginTop: "16px", display: "inline-flex" }}
                >
                  Read full case study <Icon name="i-arrow" />
                </p>
              </div>
              <div
                className="cs-shot"
                style={{
                  gridColumn: "span 6",
                  position: "relative",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={PROJECTS[0].image || "/projects/saas-dashboard.jpg"}
                  alt={PROJECTS[0].title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* Insights */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Studio Insights &amp; Articles</h2>
            <p>Technical perspectives on design systems, Shopify, and Next.js.</p>
          </div>
          <div className="cards rv in">
            {INSIGHTS.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CtaSection />
    </>
  );
}
