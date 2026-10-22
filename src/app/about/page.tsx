import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers,
  Code2,
  Search,
  CheckCircle2,
  FileText,
  Star,
  MapPin,
  Clock,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Check,
} from "lucide-react";
import { EXPERIENCES, EDUCATION, RESUME_URL } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/data/siteConfig";
import { LinkedInIcon, GitHubIcon, UpworkIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About — Sham Lal | Web Designer & Web Developer",
  description:
    "I’m Sham, a Web Designer and Web Developer focused on creating thoughtful user experiences, responsive websites, and practical digital solutions for businesses.",
};

// Selected featured projects showcasing diverse CMS, frontend, and design capability
const SELECTED_PROJECT_SLUGS = ["topleft", "alerteefy", "mgi-access", "workfully"];

export default function AboutPage() {
  const selectedProjects = PROJECTS.filter((p) =>
    SELECTED_PROJECT_SLUGS.includes(p.slug)
  );

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white overflow-hidden">
      {/* =========================================================================
          1. Hero Section: Strong Personal Introduction
          ========================================================================= */}
      <section className="relative pt-16 pb-18 sm:pt-20 sm:pb-24 border-b border-white/10 overflow-hidden">
        {/* Ambient Warm Sunset Background Glow */}
        <div className="absolute right-0 top-0 bottom-0 w-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute -right-24 top-1/3 -translate-y-1/2 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-br from-amber-500/20 via-orange-600/15 to-transparent blur-[120px]" />
          <div className="absolute top-0 left-1/4 w-[320px] h-[220px] bg-blue-600/5 blur-[100px]" />
          {/* Subtle ribbed fluted pattern matching homepage */}
          <div
            className="absolute inset-0 opacity-[0.10] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.35) 0px, rgba(255, 255, 255, 0.35) 1px, transparent 1px, transparent 24px)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-wide uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Sham Lal · Web Designer &amp; Developer</span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-[3.65rem] tracking-tight text-white leading-[1.14] mb-6">
                I Design and Build Digital Experiences{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  That Work.
                </span>
              </h1>

              {/* Exact Requested Supporting Text */}
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8 max-w-2xl font-normal">
                I’m Sham, a Web Designer and Web Developer focused on creating
                thoughtful user experiences, responsive websites, and practical
                digital solutions for businesses.
              </p>

              {/* Action Buttons: View My Work & Let's Talk */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                  <span>View My Work</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center relative overflow-hidden shrink-0 border border-white/30">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white transform transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-200 absolute transform -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white/[0.06] border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/[0.12] hover:border-white/35 hover:scale-[1.02] active:scale-95 transition-all duration-300 backdrop-blur-md"
                >
                  <span>Let’s Talk</span>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center relative overflow-hidden shrink-0 border border-white/20">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white transform transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-200 absolute transform -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </Link>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white/65 hover:text-amber-400 hover:bg-white/[0.04] transition-all"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Professional Identity Card (No fake photo) */}
            <div className="lg:col-span-5">
              <div className="relative bg-[#12131A] border border-white/10 rounded-3xl p-7 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
                {/* Ambient Card Corner Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-amber-500/15 via-orange-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Identity Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  {/* Monogram Badge representing Sham Lal */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/25 via-orange-500/20 to-transparent border border-amber-400/40 text-amber-300 flex items-center justify-center font-extrabold text-2xl tracking-tight shadow-md shrink-0">
                    SL
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Sham Lal
                      </h2>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    </div>
                    <p className="text-xs sm:text-sm text-amber-400 font-semibold mt-0.5">
                      Web Designer &amp; Web Developer
                    </p>
                  </div>
                </div>

                {/* Availability & Location Badges */}
                <div className="space-y-3 pt-4 border-t border-white/10 relative z-10 text-xs sm:text-sm">
                  <div className="flex items-center gap-3 text-white/75">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Based in India · Working Remotely Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/75">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>~3 Years Professional Design &amp; Dev Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Open for New Projects &amp; Collaborations</span>
                  </div>
                </div>

                {/* Core Focus Pills */}
                <div className="mt-6 pt-5 border-t border-white/10 relative z-10">
                  <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-2.5">
                    Core Capabilities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Figma UI/UX",
                      "WordPress & ACF",
                      "Shopify Liquid",
                      "React / Next.js",
                      "Webflow",
                      "Responsive UI",
                    ].map((pill) => (
                      <span
                        key={pill}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-medium"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust Verification Bar */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-white/60 relative z-10">
                  <span className="flex items-center gap-1.5 text-white/70 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    Verified Profiles
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={SITE_CONFIG.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 text-white/70 hover:text-amber-400 hover:bg-white/10 transition-colors"
                      aria-label="LinkedIn"
                      title="LinkedIn Profile"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONFIG.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 text-white/70 hover:text-amber-400 hover:bg-white/10 transition-colors"
                      aria-label="GitHub"
                      title="GitHub Profile"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={SITE_CONFIG.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 text-white/70 hover:text-amber-400 hover:bg-white/10 transition-colors"
                      aria-label="Upwork"
                      title="Upwork Profile"
                    >
                      <UpworkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. Personal Introduction: Philosophy, Balance of Design & Code
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0D0F18]/85 border-b border-white/10 relative">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase mb-4">
              Background &amp; Philosophy
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
              Connecting Visual Design With Functional Code
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-white/75 leading-relaxed font-normal">
              <p>
                Over the past 3+ years, I have worked across the entire web lifecycle—from
                initial wireframing and interactive UI prototypes in Figma to hands-on frontend
                engineering and CMS architecture.
              </p>
              <p>
                Too often, web design and development operate in separate silos: a designer
                creates an unrealistic mockup that breaks in real browsers, or a developer
                builds a functional page that loses all visual polish. My focus is closing that
                gap completely. Because I both design and write code, what is created in Figma
                is built accurately in code with zero handoff friction, pixel-accurate layouts,
                and smooth interactions.
              </p>
              <p>
                My work is driven by pragmatic business goals: making sure websites load fast,
                render effortlessly on smartphones and tablets, convert visitors into clients,
                and give business owners an intuitive CMS backend that is easy to manage without
                breaking.
              </p>
            </div>

            {/* 3 Pillar Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-white mb-2">Human-Centered UI</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Clear visual hierarchy, readable typography, and intuitive navigation that
                  guides users naturally toward taking action.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-white mb-2">Responsive Engineering</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Clean, standards-compliant HTML, CSS, and modern JavaScript tested across
                  real mobile, tablet, and desktop viewports.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-white mb-2">Business-Driven Results</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Fast performance, intuitive navigation, and straightforward CMS workflows
                  that respect your time and budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. My Expertise: 3 Clear Skill Groups
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/10">
        <div className="site-container">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
              Genuine Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              My Core Expertise
            </h2>
            <p className="text-base text-white/65 leading-relaxed">
              Transparent, practical capabilities backed by real-world commercial experience.
              Focused on modern web design, responsive frontend engineering, and CMS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {/* Group 1: Web Design & UI/UX */}
            <div className="bg-[#12131A] border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Web Design &amp; UI/UX
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  Crafting structured website layouts, clean visual hierarchy, and intuitive user
                  flows that make digital experiences effortless to navigate.
                </p>

                <div className="space-y-2.5 pt-5 border-t border-white/10 text-xs sm:text-[0.84rem] text-white/75">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Website layout planning &amp; visual hierarchy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Mobile-first &amp; tablet responsive design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Usability, spacing systems &amp; typography</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Figma wireframes, design systems &amp; prototypes</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">
                  Key Tools
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Figma", "Photoshop", "Illustrator", "Design Systems", "Wireframing"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-white/80"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Group 2: Web Development */}
            <div className="bg-[#12131A] border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Web Development
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  Building responsive, semantic, and maintainable frontends across modern
                  frameworks and leading platforms without bloated code.
                </p>

                <div className="space-y-2.5 pt-5 border-t border-white/10 text-xs sm:text-[0.84rem] text-white/75">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>HTML5, modern CSS3 &amp; JavaScript (ES6+)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Responsive frontend layouts &amp; component architecture</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>React &amp; Next.js App Router applications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Cross-browser consistency, performance &amp; clean code</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">
                  Key Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["HTML5 / CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Group 3: WordPress & Shopify Development */}
            <div className="bg-[#12131A] border border-white/10 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/30 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  WordPress &amp; Shopify Development
                </h3>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  Custom CMS solutions and e-commerce storefronts tailored for brands that need
                  easy content management and frictionless user buying journeys.
                </p>

                <div className="space-y-2.5 pt-5 border-t border-white/10 text-xs sm:text-[0.84rem] text-white/75">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>WordPress custom themes, Elementor, Gutenberg &amp; ACF</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Shopify Liquid storefront customization &amp; sections</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>WooCommerce store setups &amp; payment gateways</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Webflow &amp; HubSpot CMS customization</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-2">
                  CMS &amp; E-Commerce
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["WordPress", "Shopify", "WooCommerce", "Liquid", "Elementor", "Webflow"].map(
                    (cms) => (
                      <span
                        key={cms}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-white/80"
                      >
                        {cms}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. Work Approach: 5-Step Concise Process
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0D0F18]/85 border-b border-white/10 relative">
        <div className="site-container">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              How I Work
            </h2>
            <p className="text-base text-white/65 leading-relaxed">
              A structured, dependable process designed to eliminate guesswork, keep communication
              clear, and deliver reliable results on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "Understand Goals & Audience",
                desc: "Clarify project objectives, target audience expectations, brand identity, and technical constraints before touching any design tool.",
              },
              {
                step: "02",
                title: "Plan Structure & UX",
                desc: "Map the sitemap, content architecture, user journeys, and wireframe key page layouts for maximum clarity and conversion.",
              },
              {
                step: "03",
                title: "Design & Develop",
                desc: "Craft high-fidelity Figma layouts and translate approved designs into responsive, clean frontend or CMS code.",
              },
              {
                step: "04",
                title: "Test Functionality & Speed",
                desc: "Rigorously audit usability across smartphones, tablets, and desktops, testing form submissions, browser compatibility, and Core Web Vitals.",
              },
              {
                step: "05",
                title: "Refine & Deliver",
                desc: "Fine-tune edge cases based on exact project requirements, configure DNS/hosting, and provide clear handover documentation.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#12131A] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-400/30 transition-all"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-amber-400/80 mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[0.84rem] text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. Career Timeline & Education
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/10">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Career History</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Work Experience
              </h2>
            </div>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-amber-400/40 hover:bg-white/[0.12] transition-all self-start sm:self-auto"
            >
              <span>Download Full Resume (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Timeline Cards */}
          <div className="relative border-l-2 border-white/10 ml-3 sm:ml-5 pl-7 sm:pl-10 space-y-10 sm:space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="relative group">
                <div className="absolute -left-[37px] sm:-left-[49px] top-2.5 w-4 h-4 rounded-full bg-[#0A0B0E] border-[3px] border-amber-400 group-hover:scale-125 transition-all shadow-md" />

                <div className="bg-[#12131A] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-lg group-hover:border-amber-400/30 transition-all text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role} · <span className="text-amber-400">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono font-bold text-white/60 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-white/40 mb-4 uppercase tracking-wider">
                    {exp.location}
                  </div>

                  <p className="text-base text-white/70 mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/10">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-[0.88rem] text-white/75 flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education Block */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Education &amp; Academic Background
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-[#12131A] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-lg"
                >
                  <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                    {edu.period}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5">{edu.degree}</h4>
                  <p className="text-sm text-white/65">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. Selected Work (3–4 Real Projects with Contributions & Tech)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#0D0F18]/85 border-b border-white/10 relative">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
                Portfolio Highlights
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Selected Work
              </h2>
            </div>

            <Link
              href="/work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] border border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-amber-400/40 hover:bg-white/[0.12] transition-all self-start sm:self-auto"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.map((project) => (
              <article
                key={project.slug}
                className="group bg-[#12131A] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Frame */}
                  <Link
                    href={`/work/${project.slug}`}
                    className="block relative w-full aspect-[16/10] bg-[#0A0B0E] overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} portfolio preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </Link>

                  {/* Project Content */}
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                          {project.platform} · {project.industry}
                        </span>
                        <h3 className="text-2xl font-bold text-white tracking-tight mt-1 group-hover:text-amber-400 transition-colors">
                          <Link href={`/work/${project.slug}`}>{project.title}</Link>
                        </h3>
                      </div>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit live site for ${project.title}`}
                          className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/40 flex items-center justify-center transition-all shrink-0"
                          title="Open Live Site"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-white/70 leading-relaxed mb-5">
                      {project.shortDesc}
                    </p>

                    {/* Actual Contribution */}
                    <div className="mb-5 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">
                        My Contribution
                      </div>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                        {project.role} — {project.approach}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {(project.tags || [project.platform, project.category]).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-white/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 sm:p-8 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-white/50 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/[0.06] border border-white/15 text-white font-semibold text-sm hover:border-amber-400/40 hover:bg-white/[0.12] transition-all shadow-md"
            >
              <span>Explore All 26+ Client Projects</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. Professional Trust: Verified Profiles & Accurate Rating
          ========================================================================= */}
      <section className="py-20 sm:py-24 border-b border-white/10">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold tracking-wide uppercase mb-3">
              Credibility &amp; Transparency
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Professional Trust
            </h2>
            <p className="text-base text-white/65 leading-relaxed">
              Connect directly via verified developer and freelancer platforms. I prioritize clear
              contracts, transparent communication, and genuine accountability.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LinkedIn Profile Card */}
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#12131A] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-400/40 hover:-translate-y-1 transition-all shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#0A66C2] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs text-white/60 mb-4">
                  Professional network, recommendations, and career updates.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-400">
                linkedin.com/in/sham-dev →
              </span>
            </a>

            {/* GitHub Profile Card */}
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#12131A] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-white/30 hover:-translate-y-1 transition-all shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <GitHubIcon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">GitHub</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs text-white/60 mb-4">
                  Frontend code repositories, Next.js experiments, and open-source work.
                </p>
              </div>
              <span className="text-xs font-semibold text-white/80">
                github.com/ShamLal07 →
              </span>
            </a>

            {/* Upwork Profile Card with Accurate 5.0/5 Rating */}
            <a
              href={SITE_CONFIG.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#12131A] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-emerald-400/40 hover:-translate-y-1 transition-all shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <UpworkIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">Upwork</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>5.0 / 5.0 (1 Client Review)</span>
                </div>
                <p className="text-xs text-white/60 mb-4">
                  Escrow-protected contracts, hourly or fixed-price client engagements.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-400">
                View Upwork Profile →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. Closing CTA: Have a Project in Mind?
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-transparent text-white">
        <div className="site-container">
          <div className="relative bg-gradient-to-br from-[#1C1713] via-[#12131A] to-[#0A0B0E] border border-amber-500/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center max-w-4xl mx-auto">
            {/* Ambient Radial Accent */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/15 blur-[100px] pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-orange-600/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-wide uppercase mb-5">
                Start a Conversation
              </div>

              {/* Exact Requested Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                Have a Project in Mind?
              </h2>

              {/* Exact Requested Supporting Copy */}
              <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8">
                Whether you need a new website, a better user experience, or help
                improving an existing website, let’s discuss your goals.
              </p>

              {/* Exact Requested Button: Let's Talk */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white font-bold text-base shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                  <span>Let’s Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.06] border border-white/15 text-white font-semibold text-sm hover:bg-white/[0.12] hover:border-white/30 transition-all"
                >
                  <span>Explore Work</span>
                </Link>
              </div>

              {/* Quick direct reach out */}
              <div className="text-xs sm:text-sm text-white/50">
                Prefer email? Drop a note directly to{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-amber-400 hover:underline font-semibold"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
