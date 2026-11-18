"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  Clock,
  CheckCircle2,
  Rocket,
  Layers,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  MonitorCheck,
  ChevronRight,
  Play,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PipelinePhase {
  id: string;
  number: string;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PHASES: PipelinePhase[] = [
  {
    id: "discovery",
    number: "01",
    duration: "Day 1–2",
    title: "Discovery & Architecture Blueprint",
    subtitle: "Eliminating guesswork before touching a line of code",
    description:
      "We clarify project goals, target audience, technical scope, and sitemap hierarchy. By establishing the information architecture upfront, we prevent costly revisions and scope creep.",
    deliverables: [
      "Technical scope & milestone roadmap",
      "Interactive sitemap & user journey flow",
      "Asset & content collection checklist",
    ],
    techStack: ["Figma", "System Specs", "Notion", "Schema Mapping"],
    metric: "100% Scope Clarity",
    icon: Layers,
  },
  {
    id: "design",
    number: "02",
    duration: "Day 3–5",
    title: "Figma UI/UX & Responsive Prototyping",
    subtitle: "High-conversion design tailored to your brand identity",
    description:
      "Crafting modern, clean, mobile-first layouts in Figma with a reusable component system. You receive an interactive clickable prototype to review and approve before development begins.",
    deliverables: [
      "Mobile-first responsive wireframes & screens",
      "Interactive Figma prototype with micro-interactions",
      "Structured client feedback & design approval",
    ],
    techStack: ["Figma", "Design Tokens", "Wireframing", "UI Kit"],
    metric: "Zero Visual Surprises",
    icon: Sparkles,
  },
  {
    id: "development",
    number: "03",
    duration: "Day 6–10",
    title: "Frontend & Dynamic CMS Implementation",
    subtitle: "Clean, production-grade code with intuitive client controls",
    description:
      "Transforming approved Figma designs into pixel-perfect code across your preferred stack. Every page is built with custom fields so you can update text and images effortlessly without code.",
    deliverables: [
      "Semantic, accessible, mobile-first frontend",
      "Dynamic CMS custom fields & block setup",
      "Private live staging URL for progress review",
    ],
    techStack: ["Shopify Liquid", "Next.js", "WordPress ACF", "Tailwind CSS"],
    metric: "40%+ Faster Execution",
    icon: Cpu,
  },
  {
    id: "optimization",
    number: "04",
    duration: "Day 11–12",
    title: "Performance Tuning & Core Web Vitals QA",
    subtitle: "Engineered to score 95+ on Google Lighthouse",
    description:
      "Rigorous cross-browser testing across mobile, tablet, and desktop. Image compression, asset minification, SEO meta tags, OpenGraph data, and accessibility audits.",
    deliverables: [
      "95+ Google PageSpeed score optimization",
      "Cross-device QA on iOS, Android, and Desktop",
      "Technical on-page SEO & Schema markup",
    ],
    techStack: ["Lighthouse", "Web Vitals", "BrowserStack", "JSON-LD"],
    metric: "95+ Speed Score",
    icon: MonitorCheck,
  },
  {
    id: "launch",
    number: "05",
    duration: "Day 13–14",
    title: "Zero-Downtime Launch & Video Handover",
    subtitle: "Live deployment with recorded walkthrough training",
    description:
      "Seamless domain DNS pointing, SSL verification, Google Analytics 4 / Search Console integration, and a personalized recorded video guide showing you how to update content effortlessly.",
    deliverables: [
      "Live domain deployment with SSL",
      "Google Search Console & sitemap submission",
      "Loom video walkthrough for easy CMS edits",
    ],
    techStack: ["Cloudflare", "Vercel", "GA4", "Search Console"],
    metric: "Zero Downtime",
    icon: Rocket,
  },
];

const METRIC_BADGES = [
  {
    label: "Delivery Speed",
    value: "2–3x Faster",
    desc: "Modular component systems & rapid prototyping",
    icon: Zap,
    color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    label: "Google Lighthouse",
    value: "95+ Score",
    desc: "Optimized Core Web Vitals & lightweight code",
    icon: ShieldCheck,
    color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    label: "Communication",
    value: "Daily Updates",
    desc: "Loom video demos, live staging links & WhatsApp",
    icon: Clock,
    color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  },
  {
    label: "Revision Rate",
    value: "< 2 Rounds",
    desc: "Upfront Figma blueprint ensures accurate execution",
    icon: CheckCircle2,
    color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  },
];

export function DeliveryWorkflow() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance through phases smoothly
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActivePhaseIndex((prev) => (prev + 1) % PHASES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activePhase = PHASES[activePhaseIndex];
  const ActiveIcon = activePhase.icon;

  return (
    <section
      id="how-i-deliver"
      className="py-20 sm:py-28 lg:py-32 bg-[#05070E] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Ambient Radiance */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-blue-600/[0.05] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-[500px] h-[500px] rounded-full bg-indigo-600/[0.04] blur-[160px] pointer-events-none" />

      <div className="site-container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5" />
            <span>RAPID EXECUTION • ZERO COMPROMISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-tight">
            How I Deliver In{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Record Time
            </span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-white/65 leading-relaxed">
            A battle-tested 5-phase production pipeline combining custom architecture, rapid component design, and automated QA — cutting project launch timelines from months to days.
          </p>
        </motion.div>

        {/* 4 Feature Metric Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {METRIC_BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#090C16] border border-white/10 hover:border-blue-500/40 hover:bg-[#0E1322] transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${badge.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-white/40 uppercase">
                    METRIC 0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-white group-hover:text-blue-300 transition-colors tracking-tight">
                    {badge.value}
                  </h3>
                  <p className="text-xs font-semibold text-white/70 mt-0.5">
                    {badge.label}
                  </p>
                  <p className="text-[11px] text-white/40 mt-1 leading-snug">
                    {badge.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Interactive Velocity Pipeline Interface */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-3xl bg-[#0B0E1A] border border-white/12 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Top Edge Ambient Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />

          {/* 5 Phase Progress Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
            {PHASES.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const Icon = phase.icon;

              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => {
                    setActivePhaseIndex(idx);
                    setIsPaused(true);
                  }}
                  className={`relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group ${
                    isActive
                      ? "bg-[#11172B] border-blue-400/60 shadow-lg shadow-blue-500/15"
                      : "bg-[#070912] border-white/10 hover:border-white/20 hover:bg-[#0E1322]"
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activePhaseIndicator"
                      className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] font-mono font-bold ${
                        isActive ? "text-blue-400" : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      {phase.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md ${
                        isActive
                          ? "bg-blue-400/20 text-blue-300 border border-blue-400/30"
                          : "bg-white/[0.04] text-white/50"
                      }`}
                    >
                      {phase.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? "text-blue-400" : "text-white/40 group-hover:text-white/70"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold tracking-tight truncate ${
                        isActive ? "text-white" : "text-white/75 group-hover:text-white"
                      }`}
                    >
                      {phase.title.split("&")[0].trim()}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Spotlight Details with AnimatePresence */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#060810] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.05] blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Overview (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-400/15 text-blue-300 border border-blue-400/30">
                      PHASE {activePhase.number} • {activePhase.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {activePhase.metric}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 mb-2">
                    {activePhase.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400/90 mb-4">
                    {activePhase.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal mb-6">
                    {activePhase.description}
                  </p>

                  {/* Tech Tools Applied */}
                  <div>
                    <span className="text-xs uppercase font-extrabold text-white/45 tracking-wider block mb-2 font-mono">
                      Tools &amp; Frameworks
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activePhase.techStack.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-white/[0.06] border border-white/10 text-white/90"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Deliverables Card (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0E1322] border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <ActiveIcon className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm uppercase font-extrabold text-white tracking-wider font-mono">
                      Guaranteed Deliverables
                    </h4>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {activePhase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all active:scale-95"
                  >
                    <span>Discuss Your Timeline</span>
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Fast Track Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
              <span className="font-semibold text-white">Have a strict project deadline?</span>
              <span className="hidden md:inline text-white/50">Rapid sprint delivery is available for urgent launches.</span>
            </div>

            <a
              href="https://wa.me/917876525326?text=Hi%20Sham%2C%20I%20have%20a%20project%20with%20a%20tight%20deadline."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-blue-200 transition-colors"
            >
              <span>Instant Chat on WhatsApp (+91 78765 25326)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
