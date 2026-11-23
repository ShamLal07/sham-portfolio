"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Palette,
  Code2,
  Gauge,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Terminal,
  FileCode,
  Laptop,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./SocialIcons";

interface ProcessStep {
  id: string;
  number: string;
  terminalTag: string;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  techPills: string[];
  codeSnippet: string;
}

const STEPS: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    terminalTag: "PHASE 01 // ARCHITECTURE",
    duration: "Day 1–2",
    title: "Discovery & Technical Blueprint",
    subtitle: "Eliminating guesswork before writing a single line of code",
    description:
      "We dissect your business goals, target audience, technical requirements, and sitemap hierarchy. By establishing the exact scope and component structure upfront, we eliminate scope creep and prevent costly mid-project revisions.",
    metric: "100% Scope Clarity",
    icon: Layers,
    deliverables: [
      "Technical specification sheet & milestone roadmap",
      "Information architecture, sitemap & user journey flow",
      "Tech stack evaluation (WordPress / Shopify / Next.js)",
    ],
    techPills: ["System Specs", "Sitemap Flow", "Architecture", "Notion"],
    codeSnippet: "const blueprint = await audit({ scope: '100% clear', revisions: 0 });",
  },
  {
    id: "step-2",
    number: "02",
    terminalTag: "PHASE 02 // UI/UX SYSTEM",
    duration: "Day 3–5",
    title: "Figma UI/UX & Responsive Prototyping",
    subtitle: "High-conversion design tailored specifically to your brand",
    description:
      "Crafting modern, clean, mobile-first design systems in Figma. You receive an interactive, clickable prototype that allows you to experience animations, navigation, and user flow before development starts.",
    metric: "100% Design Fidelity",
    icon: Palette,
    deliverables: [
      "Interactive desktop & mobile clickable prototype in Figma",
      "Reusable UI component library, tokens & typography system",
      "Collaborative client review & design approval round",
    ],
    techPills: ["Figma", "UI/UX System", "Atomic Components", "Prototype"],
    codeSnippet: "figma.export({ mode: 'interactive', responsive: true, approved: true });",
  },
  {
    id: "step-3",
    number: "03",
    terminalTag: "PHASE 03 // PRODUCTION CODE",
    duration: "Day 6–11",
    title: "Precision Frontend & Dynamic CMS Build",
    subtitle: "Pixel-perfect implementation with intuitive content controls",
    description:
      "Transforming approved designs into clean, maintainable, semantic code. We configure custom CMS fields so you can update text, images, and new pages effortlessly without ever needing a developer.",
    metric: "Clean & Maintainable",
    icon: Code2,
    deliverables: [
      "Pixel-perfect frontend with responsive breakpoints for all devices",
      "Tailored CMS setup (ACF Pro / Shopify Liquid / Next.js SSR)",
      "Private live staging URL with real-time progress preview",
    ],
    techPills: ["Next.js", "WordPress / ACF", "Shopify Liquid", "Tailwind CSS"],
    codeSnippet: "npm run build && git push origin staging // 0 errors, modular code",
  },
  {
    id: "step-4",
    number: "04",
    terminalTag: "PHASE 04 // LIGHTHOUSE 98+",
    duration: "Day 12–14",
    title: "Speed Tuning, Core Web Vitals & Rigorous QA",
    subtitle: "Engineered to score 95+ on Google Lighthouse with zero defects",
    description:
      "Performance optimization is not an afterthought. We compress assets into modern WebP/AVIF formats, optimize critical rendering paths, test across 10+ screen resolutions, and implement rich JSON-LD schema markup for Google SEO.",
    metric: "< 1.2s LCP Load Time",
    icon: Gauge,
    deliverables: [
      "95+ Google PageSpeed / Core Web Vitals optimization score",
      "Cross-browser and multi-device QA (Chrome, Safari, iOS, Android)",
      "Technical on-page SEO, OpenGraph data & JSON-LD schema markup",
    ],
    techPills: ["Lighthouse 98+", "Web Vitals", "JSON-LD SEO", "Cross-Browser"],
    codeSnippet: "lighthouse --audit-full // Performance: 98, SEO: 100, Best Practices: 100",
  },
  {
    id: "step-5",
    number: "05",
    terminalTag: "PHASE 05 // CI/CD LAUNCH",
    duration: "Day 15 Launch",
    title: "Zero-Downtime Launch & Video Handover",
    subtitle: "Seamless live deployment with direct personalized video training",
    description:
      "Smooth DNS switchover, SSL certificate verification, and indexing in Google Search Console. You receive a personalized Loom video tutorial showing you exactly how to edit your new site, backed by 30 days of post-launch warranty.",
    metric: "Zero Downtime Guarantee",
    icon: Rocket,
    deliverables: [
      "Zero-downtime domain DNS propagation & SSL security verification",
      "Google Search Console & dynamic XML sitemap indexing",
      "Personalized Loom video walkthrough + 30-day post-launch warranty",
    ],
    techPills: ["Vercel / Cloudflare", "DNS Cutover", "GA4 / GSC", "Loom Video"],
    codeSnippet: "git push production:main // Live in production with 30-day warranty",
  },
];

const TRUST_PILLARS = [
  {
    title: "100% Code Ownership",
    desc: "Complete Git repo and CMS credentials transferred to you. No vendor lock-in.",
    icon: ShieldCheck,
  },
  {
    title: "30-Day Bug Warranty",
    desc: "Free support, adjustments, and fixes included after launch.",
    icon: CheckCircle2,
  },
  {
    title: "Zero Outsourcing",
    desc: "Every line of code and design is built personally by Sham Lal.",
    icon: Laptop,
  },
  {
    title: "Direct Communication",
    desc: "Fast responses via WhatsApp and scheduled Loom / Google Meet updates.",
    icon: Clock,
  },
];

export function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section
      id="process"
      className="py-20 md:py-32 bg-[#05070E] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Studio Background Ambient Lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-blue-600/[0.05] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-indigo-600/[0.04] blur-[150px] pointer-events-none" />

      {/* Fluted Grid Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-bold tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>ENGINEERING ROADMAP · OUR 5-STEP PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight mb-4 leading-tight">
            Our Simple 5-Step Process
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            No guesswork, no missed deadlines, no surprise scope creep. Every project follows a
            battle-tested engineering roadmap designed for complete transparency from day one.
          </p>

          {/* Quick Metrics Trust Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-400 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>14–15 Day Typical Turnaround</span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30-Day Post-Launch Warranty</span>
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Communication</span>
            </span>
          </div>
        </motion.div>

        {/* Step Selector Pills for Fast Milestone Switching */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#0E1322] border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                    : "bg-[#090C16] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-extrabold ${
                    isActive ? "bg-blue-600 text-white" : "bg-white/10 text-white/60"
                  }`}
                >
                  {step.number}
                </span>
                <span className="hidden sm:inline">{step.title.split("&")[0]}</span>
                <span className="sm:hidden">{step.duration}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Milestone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Active Milestone Deep Dive (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-gradient-to-b from-[#0F1424] to-[#080B14] border border-blue-500/40 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between flex-1"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

                <div>
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-blue-300 font-bold">
                        {activeStep.terminalTag}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{activeStep.duration}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 leading-tight">
                      {activeStep.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-400">
                      {activeStep.subtitle}
                    </p>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                    {activeStep.description}
                  </p>

                  {/* Technical Deliverables Checklist */}
                  <div className="bg-[#090C16] rounded-2xl border border-white/10 p-5 sm:p-6 mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Guaranteed Client Deliverables</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeStep.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live Terminal Command Preview */}
                  <div className="bg-[#04060A] rounded-xl border border-white/10 p-3.5 font-mono text-xs text-slate-400 flex items-center gap-2 overflow-x-auto">
                    <span className="text-blue-400 select-none">$</span>
                    <span className="text-slate-300">{activeStep.codeSnippet}</span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    {activeStep.techPills.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{activeStep.metric}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Step Quick List & Pipeline Map (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {STEPS.map((step, idx) => {
              const isCurrent = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-4 cursor-pointer group ${
                    isCurrent
                      ? "bg-[#0E1322] border-blue-500 shadow-lg shadow-blue-500/15"
                      : "bg-[#080B14] border-white/10 hover:border-white/20 hover:bg-[#0B0E1B]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-white/[0.05] text-white/50 group-hover:text-white"
                      }`}
                    >
                      {step.number}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-400">{step.duration}</span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                      <h4
                        className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                          isCurrent ? "text-white" : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-all duration-300 shrink-0 ${
                      isCurrent
                        ? "text-blue-400 translate-x-0.5 -translate-y-0.5"
                        : "text-white/20 group-hover:text-white/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Trust Guarantee Ribbon (4 Pillars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#090C16] border border-white/10 mb-12">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="https://wa.me/917876525326?text=Hi%20Sham%2C%20I%20reviewed%20your%205-step%20process%20and%20would%20like%20to%20discuss%20my%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow-[0_10px_25px_-5px_rgba(16,185,129,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Start on WhatsApp (+91 78765 25326)</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-blue-500/40 text-white font-semibold text-sm transition-all hover:scale-105 active:scale-95"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
