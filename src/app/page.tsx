import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
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
  return (
    <>
      {/* =========================================================================
          HERO BANNER - Center-Stage AI 3D System (Matching Reference Layout)
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-[94vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden bg-[#08080C]">
        {/* Full-bleed interactive 3D WebGL / Canvas AI Hologram Background */}
        <HeroCanvasBackground />

        {/* Ambient Top & Bottom Lighting Voids */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-[#0E0E14] via-[#0E0E14]/70 to-transparent pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0E0E14] via-[#0E0E14]/80 to-transparent pointer-events-none z-[1]" />

        {/* Center Content Section */}
        <div className="container relative z-[2] mx-auto px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center text-center">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14141D]/80 border border-[#EFBD30]/40 backdrop-blur-md mb-6 shadow-[0_0_16px_rgba(239,189,48,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#EFBD30] animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#EFBD30] tracking-wide">
              Next-Gen AI &amp; Full-Stack Digital Systems
            </span>
          </div>

          {/* Main Centered Headline matching reference exactly */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.4rem] font-display font-extrabold text-white tracking-tight leading-[1.08] max-w-5xl drop-shadow-lg">
            Engineering{" "}
            <span className="bg-gradient-to-r from-[#EFBD30] via-[#F9DF7B] to-[#EFBD30] bg-clip-text text-transparent">
              AI-Powered Digital Systems
            </span>{" "}
            that Scale
          </h1>

          {/* Subheading explanation */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-white font-medium max-w-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] text-center">
            Full-cycle creative technologist architecture: Pro UI/UX in Figma,
            2D/3D kinetic motion, and high-velocity engineering across Next.js,
            custom Shopify, and WordPress ACF.
          </p>

          {/* Trust Checkmarks Row matching reference directly below title */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-6 text-xs sm:text-sm font-medium text-[#F8F9FA]/90">
            <div className="flex items-center gap-2 bg-[#14141D]/80 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
              <span className="w-4 h-4 rounded-full bg-[#EFBD30]/25 text-[#EFBD30] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Trusted by 50+ Global Brands</span>
            </div>
            <div className="flex items-center gap-2 bg-[#14141D]/80 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
              <span className="w-4 h-4 rounded-full bg-[#EFBD30]/25 text-[#EFBD30] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>100/100 Core Web Vitals Speed</span>
            </div>
            <div className="flex items-center gap-2 bg-[#14141D]/80 border border-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
              <span className="w-4 h-4 rounded-full bg-[#EFBD30]/25 text-[#EFBD30] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>6+ Years of Proven Mastery</span>
            </div>
          </div>

          {/* Dual Action Pill Buttons with Icon Chips matching reference layout */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            {/* Primary Action Button (Gold Gradient Pill with White/Dark Icon Chip) */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#EFBD30] via-[#ffd566] to-[#EFBD30] hover:brightness-110 text-[#0E0E14] font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(239,189,48,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Book an Enterprise Strategy Call</span>
              <span className="w-8 h-8 rounded-full bg-[#0E0E14] text-[#EFBD30] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shadow-md">
                <Icon name="i-phone" className="w-4 h-4" />
              </span>
            </Link>

            {/* Secondary Action Button (Crisp High-Contrast Glassmorphic Pill) */}
            <Link
              href="/work"
              className="group inline-flex items-center gap-3.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-[#EFBD30] text-white font-extrabold text-sm sm:text-base backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="text-white">View Enterprise Case Studies</span>
              <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <Icon name="i-arrow" className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>

          {/* Floating HUD Telemetry Panels on Left & Right (Desktop Display) */}
          <div className="hidden xl:flex w-full justify-between items-center mt-6 px-4 pointer-events-none">
            {/* Left Telemetry Card */}
            <div className="text-left bg-[#14141D]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-2xl max-w-xs">
              <div className="flex items-center gap-2 text-[#EFBD30] text-xs font-bold uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-[#EFBD30] animate-ping" />
                NEURAL_AI: OPERATIONAL
              </div>
              <p className="text-xs text-white/90 font-medium m-0">
                Sub-Second Server Renders · Automated Schema Graph · High-Conversion UX
              </p>
            </div>

            {/* Right Telemetry Card */}
            <div className="text-right bg-[#14141D]/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-2xl max-w-xs">
              <div className="flex items-center justify-end gap-2 text-[#4cd08c] text-xs font-bold uppercase tracking-wider mb-1">
                PERFORMANCE SCORE: 100/100
                <span className="w-2 h-2 rounded-full bg-[#4cd08c]" />
              </div>
              <p className="text-xs text-white/90 font-medium m-0">
                Direct Senior Engineering · Zero Agency Handoff Decay · Pixel-Perfect
              </p>
            </div>
          </div>
        </div>

        {/* Bottom "Trusted by innovators worldwide" Partner Proof Bar matching reference */}
        <div className="container relative z-[2] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="pt-6 border-t border-white/10 flex flex-col xl:flex-row items-center justify-between gap-5 sm:gap-6">
            <span className="text-xs sm:text-sm font-semibold text-[#F8F9FA]/70 uppercase tracking-widest whitespace-nowrap text-center xl:text-left">
              Trusted by innovators worldwide
            </span>

            {/* Glassmorphic Brand Pills matching reference logo row */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              {[
                "AETHER DYNAMICS",
                "MAISON D'OR",
                "ASTRO MARKETS",
                "VELVET ATELIER",
                "NEXUS AI",
                "ISUZU SYSTEMS",
              ].map((brand) => (
                <div
                  key={brand}
                  className="px-3.5 sm:px-4 py-2 rounded-xl bg-[#14141D]/90 border border-white/15 backdrop-blur-md text-[0.7rem] sm:text-xs font-bold tracking-wider text-white/90 uppercase hover:border-[#EFBD30]/60 transition-colors shadow-sm"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facts Row */}
      <div className="container mt-8 sm:mt-12">
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

      {/* Featured Client Case Studies ("Architected in Figma") */}
      <section className="relative py-20 sm:py-28 bg-[#F8F9FA] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFBD30]/20 text-[#946C00] border border-[#EFBD30]/40 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EFBD30] animate-pulse" />
                Featured Client Deployments
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0E0E14] tracking-tight leading-tight">
                Architected in Figma. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#946C00] via-[#EFBD30] to-[#946C00] bg-clip-text text-transparent">
                  Engineered in Code.
                </span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#4B4B58] leading-relaxed">
                Explore select digital platforms combining editorial aesthetics, custom Liquid/ACF architectures, and sub-second rendering speeds.
              </p>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-gray-300 hover:border-[#EFBD30] text-[#0E0E14] font-bold text-sm shadow-sm transition-all duration-200 self-start md:self-end"
            >
              <span>View All 6 Case Studies</span>
              <Icon name="i-arrow" className="w-4 h-4 text-[#946C00]" />
            </Link>
          </div>

          {/* 33.33% Width 3-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.slug} className="w-full h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
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
              <article key={service.name} className="card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Icon name={service.icon} />
                    {service.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[var(--accent)]/15 text-[var(--accent-t)]">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3>{service.name}</h3>
                  <p className="small">{service.lead}</p>
                  <ul className="pts">
                    {service.items.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border)]">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-t)] hover:underline"
                  >
                    Explore architecture &amp; deliverables <Icon name="i-arrow" className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
            <article className="card justify-center bg-[var(--accent)] text-[var(--accent-ink)] border-[var(--accent)]">
              <h3 className="text-inherit">Explore All Services</h3>
              <p className="small text-[var(--accent-ink)]">
                Including Shopify Liquid, WordPress ACF, 2D/3D Motion, and
                Technical SEO &amp; AIO.
              </p>
              <Link
                className="btn bg-[var(--accent-ink)] text-[var(--accent)] self-start"
                href="/services"
              >
                View all capabilities
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--surface)]">
        <div className="container">
          <div className="sec-head">
            <h2>Our Project Methodology</h2>
            <p>
              A disciplined six-phase roadmap ensuring transparency, precision,
              and on-time delivery.
            </p>
          </div>
          <ol className="cards rv in list-none p-0">
            {PROCESS.map((p, i) => (
              <li key={p[0]} className="card">
                <span className="badge self-start">
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
              <span className="tag accent mb-3 inline-flex">
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

          <p className="mt-8">
            <Link className="btn btn-ghost" href="/technology">
              View full technology matrix &amp; documentation
            </Link>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[var(--surface)]">
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

      {/* Featured Client Deep Dive Study with Clean Light Studio Showcase */}
      <section className="relative py-20 sm:py-28 bg-[#F8F9FA] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="sec-head mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFBD30]/20 text-[#946C00] border border-[#EFBD30]/40 text-xs font-bold uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EFBD30] animate-pulse" />
                Featured Architecture Deep Dive
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0E0E14] tracking-tight">
                Case Study Spotlight
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#4B4B58] mt-2">
              Inside the design systems and engineering architecture of our flagship digital products.
            </p>
          </div>

          <Link
            href={`/work/${PROJECTS[0].slug}`}
            className="group block relative bg-white border border-gray-200/90 hover:border-[#EFBD30] rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-300"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Metadata, Title, Overview, Metrics */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0E0E14] text-[#EFBD30] uppercase tracking-wider">
                      Flagship Platform
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      {PROJECTS[0].cat.join(" · ")}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {PROJECTS[0].year || "2025"}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#0E0E14] group-hover:text-[#946C00] transition-colors leading-tight mb-4">
                    {PROJECTS[0].title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4B4B58] leading-relaxed mb-6">
                    {PROJECTS[0].desc}
                  </p>

                  {/* Impact Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-200">
                    <div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#946C00]">
                        +140%
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-medium">
                        Conversion Lift
                      </div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#0f7a4a]">
                        0.4s
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-medium">
                        LCP Render Time
                      </div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#0E0E14]">
                        100/100
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-medium">
                        Web Vitals Score
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {PROJECTS[0].tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#946C00] group-hover:translate-x-1 transition-transform">
                  <span>Read full architectural case study</span>
                  <Icon name="i-arrow" className="w-4 h-4" />
                </div>
              </div>

              {/* Right Column: High-Res Project Screenshot */}
              <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-gray-100">
                <Image
                  src={PROJECTS[0].image || "/projects/saas-dashboard.jpg"}
                  alt={PROJECTS[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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
