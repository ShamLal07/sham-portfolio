import React from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { HeroWorkflow } from "@/components/HeroWorkflow";
import { HeroVisual3D } from "@/components/HeroVisual3D";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { CodeCard } from "@/components/CodeCard";
import { InsightCard } from "@/components/InsightCard";
import { CtaSection } from "@/components/CtaSection";
import Image from "next/image";
import {
  PROJECTS,
  SERVICES,
  PROCESS,
  TECH_GROUPS,
  INSIGHTS,
  BRAND_NAME,
} from "@/data/portfolio";

export default function HomePage() {
  const heroWords = "One creative powerhouse. Agency-grade digital realities.".split(
    " "
  );

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-top">
            <span className="tag live">
              <i className="pulse" />
              Accepting Select Projects &amp; Retainers
            </span>
            <span className="tag accent">One-Person Powerhouse Agency</span>
            <span className="tag accent">6+ Years Industry Mastery</span>
            <span className="tag accent">UI/UX &amp; 3D Web Systems</span>
          </div>

          <h1
            className="display"
            aria-label="One creative powerhouse. Agency-grade digital realities."
          >
            {heroWords.map((word, i) => (
              <span key={i} className="w" aria-hidden="true">
                <span style={{ ["--i" as string]: i }}>{word} </span>
              </span>
            ))}
          </h1>

          <div className="hero-sub">
            <div className="copy">
              <p className="tagline">Design. 3D Motion. Precision Engineering.</p>
              <p>
                Founded by Sham Lal, {BRAND_NAME} is an elite one-person
                creative studio engineered for ambitious startups and global
                brands. We orchestrate pro-level UI/UX architecture, immersive
                2D/3D kinetic animations, and high-velocity web development in
                Next.js, Shopify, and WordPress. Zero bureaucratic lag, zero
                communication gaps — from initial concept to public launch.
              </p>
            </div>
            <div className="cta">
              <Link className="btn btn-primary" href="/contact">
                Start a project <Icon name="i-arrow" />
              </Link>
              <Link className="btn btn-ghost" href="/work">
                Explore portfolio
              </Link>
            </div>
          </div>

          {/* Interactive 3D Hero Banner Visual */}
          <HeroVisual3D />

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
            <b>One-Man Army</b>
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
            <p>Four distinct advantages of a one-person powerhouse agency.</p>
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

      {/* Technology teaser */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Production Technology Stack</h2>
            <p>
              The industry-leading tools and frameworks we leverage to build
              unmatched digital products.
            </p>
          </div>
          <div className="rv in">
            {TECH_GROUPS.slice(0, 3).map((g) => (
              <div key={g.group} className="tech-group">
                <div>
                  <h3>{g.group}</h3>
                  <p className="small">{g.desc}</p>
                </div>
                <div className="tech-items">
                  {g.items.map((i) => {
                    const badgeLabels = {
                      strong: "Daily Production",
                      mid: "Active Architecture",
                      grow: "Specialized",
                      tool: "AI-Augmented",
                    };
                    return (
                      <div key={i.name} className="tech">
                        <b>{i.name}</b>
                        <span className={`badge ${i.level}`}>
                          {badgeLabels[i.level]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            <Link className="btn btn-ghost" href="/technology">
              View full technology matrix
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
              interactive Next.js applications, our one-man army agency structure
              gives clients senior-level attention without agency bloat.
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

      {/* Insights */}
      <section style={{ background: "var(--surface)" }}>
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
