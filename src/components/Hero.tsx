"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HeroCanvasAnimation } from "./HeroCanvasAnimation";
import { WhatsAppIcon } from "./SocialIcons";

const STATS = [
  { value: "4+", label: "Years Experience", icon: <ShieldCheck className="w-3.5 h-3.5 text-white/85" /> },
  { value: "35+", label: "Shipped Websites", icon: <CheckCircle2 className="w-3.5 h-3.5 text-white/85" /> },
  { value: "98+", label: "Speed Score", icon: <Zap className="w-3.5 h-3.5 text-white/85" /> },
  { value: "Global", label: "Client Base", icon: <Globe className="w-3.5 h-3.5 text-white/85" /> },
];

const SHOWCASE_TABS = [
  {
    id: "topleft",
    name: "TopLeft",
    platform: "HubSpot CMS",
    metric: "38% More Demos",
    image: "/projects/topleft.jpg",
    slug: "topleft",
  },
  {
    id: "alerteefy",
    name: "Alerteefy",
    platform: "Next.js & React",
    metric: "99+ Mobile Speed",
    image: "/projects/alerteefy.jpg",
    slug: "alerteefy",
  },
  {
    id: "workfully",
    name: "Workfully",
    platform: "HubSpot & UI/UX",
    metric: "Global Hiring Portal",
    image: "/projects/workfully.jpg",
    slug: "workfully",
  },
  {
    id: "benjamin",
    name: "Benjamin Heating",
    platform: "WordPress & Elementor",
    metric: "2.4x Lead Inquiries",
    image: "/projects/benjamin-heating.jpg",
    slug: "benjamin-heating",
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  const currentShowcase = SHOWCASE_TABS[activeTab];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative pt-36 sm:pt-40 md:pt-48 pb-20 md:pb-28 bg-[#000000] text-white overflow-hidden"
    >
      {/* Interactive Canvas Constellation Animation (Monochrome Silver/White) */}
      <HeroCanvasAnimation />

      {/* 1. Ambient Background: Subtle Monochrome Silver/White Wash */}
      <div className="absolute right-0 top-0 bottom-0 w-full pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial White Core */}
        <div className="absolute -right-24 top-1/4 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] rounded-full bg-white/[0.04] blur-[150px]" />

        {/* Deep Ambient Monochrome Wash */}
        <div className="absolute right-10 bottom-10 w-[450px] h-[450px] rounded-full bg-white/[0.025] blur-[160px]" />

        {/* Fluted Vertical Texture Lines on Right */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0px, rgba(255, 255, 255, 0.4) 1px, transparent 1px, transparent 24px)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Top soft center spotlight */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-white/[0.03] blur-[130px] pointer-events-none" />

      {/* 2. Main Hero Content Container */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="site-container relative z-10 text-center flex flex-col items-center"
      >
        {/* Clean Agency Eyebrow Badge (Monochrome Luxury) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/20 text-xs font-mono font-bold text-white/90 backdrop-blur-md shadow-sm mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>FULL STACK &bull; WORDPRESS &bull; SHOPIFY &bull; NEXT.JS</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-white/90 border border-white/20">
            T
          </span>
        </motion.div>

        {/* Balanced, Impactful Headline without awkward line breaks */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-extrabold text-4xl sm:text-6xl lg:text-[4.75rem] tracking-tight text-white leading-[1.12] mb-6"
        >
          I Design &amp; Build <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Websites That Convert.
          </span>
        </motion.h1>

        {/* Subtitle Paragraph with balanced measure */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mb-10 font-normal"
        >
          Senior Full-Stack &amp; CMS Developer crafting high-performance, conversion-focused websites with thoughtful UI/UX and clean, reliable code.
        </motion.p>

        {/* Unique Interactive CTA Buttons (High Contrast Black & White) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-14 sm:mb-16"
        >
          {/* Primary CTA */}
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3.5 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-black font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] hover:bg-zinc-200 hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
            <span className="tracking-wide">Explore Selected Work</span>
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center relative overflow-hidden shrink-0 border border-black/15 shadow-inner">
              <ArrowUpRight className="w-4 h-4 text-black transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5" />
              <ArrowUpRight className="w-4 h-4 text-zinc-800 absolute transform -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>

          {/* Secondary Direct WhatsApp CTA */}
          <a
            href="https://wa.me/917876525326?text=Hi%20Sham%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.05] border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white hover:text-black hover:border-white hover:scale-[1.03] active:scale-95 transition-all duration-300 backdrop-blur-md shadow-md"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* 3. VISUAL SHOWCASE STAGE: Interactive 3D Perspective Browser Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto mb-16"
        >
          <div className="rounded-3xl bg-[#0D0D0D] border border-white/15 p-2 sm:p-3 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden group">
            {/* Ambient Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            {/* Browser Header Bar */}
            <div className="px-4 py-3 bg-[#060606] rounded-t-2xl border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-600 inline-block" />
                <span className="w-3 h-3 rounded-full bg-zinc-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-white/90 inline-block" />
                <span className="ml-3 text-xs font-mono text-zinc-400 hidden sm:inline">
                  shamdev.in/work/{currentShowcase.slug}
                </span>
              </div>

              {/* Showcase Tab Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {SHOWCASE_TABS.map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-white text-black font-bold shadow-md shadow-white/15"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Screenshot Frame */}
            <div className="relative aspect-[16/9] w-full bg-[#050505] rounded-b-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentShowcase.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentShowcase.image}
                    alt={`${currentShowcase.name} client project`}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1100px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-70" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Live Metric Overlay Chips */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-xs font-mono text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>{currentShowcase.platform}</span>
                </div>

                <Link
                  href={`/work/${currentShowcase.slug}`}
                  className="pointer-events-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Live Metrics Trust Strip with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full pt-8 sm:pt-10 border-t border-white/10"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-5 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-white/40 hover:bg-[#121212] transition-all flex flex-col items-center justify-center group shadow-md"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                {stat.icon}
                <span className="font-extrabold text-xl sm:text-2xl text-white group-hover:text-zinc-200 transition-colors font-[family-name:var(--font-display)]">
                  {stat.value}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
