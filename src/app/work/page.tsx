"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroCanvasAnimation } from "@/components/HeroCanvasAnimation";
import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS, FILTER_CATEGORIES } from "@/data/projects";
import { ContactCTA } from "@/components/ContactCTA";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    if (activeFilter === "HTML / Web") {
      return PROJECTS.filter(
        (p) =>
          p.platform.includes("HTML") ||
          p.category.includes("HTML") ||
          p.tags?.some((t) => t.toLowerCase().includes("html") || t.toLowerCase().includes("web"))
      );
    }
    if (activeFilter === "Next.js") {
      return PROJECTS.filter(
        (p) =>
          p.platform.includes("Next") ||
          p.category.includes("Next") ||
          p.tags?.some((t) => t.toLowerCase().includes("next"))
      );
    }
    return PROJECTS.filter(
      (p) =>
        p.platform === activeFilter ||
        p.category === activeFilter ||
        p.tags?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36 bg-[#0A0B0E] text-white min-h-screen relative overflow-hidden">
      {/* Interactive Canvas Constellation Animation (Fixed across the full page height) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80">
        <HeroCanvasAnimation />
      </div>

      {/* Ambient Background: Warm Sunset/Amber Radiant Glow (matches Home page Hero) */}
      <div className="absolute right-0 top-0 w-full h-[850px] pointer-events-none z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
        {/* Soft Radial Sunset Core */}
        <div className="absolute -right-24 top-20 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-br from-amber-500/25 via-orange-600/18 to-transparent blur-[120px]" />

        {/* Deep Orange Ambient Wash */}
        <div className="absolute right-0 top-60 w-[450px] h-[450px] rounded-full bg-orange-600/15 blur-[140px]" />

        {/* Fluted / Ribbed Vertical Texture Lines on Right */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0px, rgba(255, 255, 255, 0.4) 1px, transparent 1px, transparent 20px)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Subtle top subtle grid / glow */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[250px] bg-blue-600/5 blur-[100px] pointer-events-none z-0" />

      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="site-container relative z-10">
        {/* Page Header matching user reference */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>PORTFOLIO &amp; CASE STUDIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
            Selected Work.
          </h1>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
            Websites, stores and digital experiences I&apos;ve designed and developed across WordPress, Shopify, Next.js, and modern web platforms.
          </p>
        </div>

        {/* Filter Pills with animated selection */}
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            const count =
              category === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => {
                    if (category === "HTML / Web") {
                      return (
                        p.platform.includes("HTML") ||
                        p.category.includes("HTML") ||
                        p.tags?.some((t) => t.toLowerCase().includes("html") || t.toLowerCase().includes("web"))
                      );
                    }
                    if (category === "Next.js") {
                      return (
                        p.platform.includes("Next") ||
                        p.category.includes("Next") ||
                        p.tags?.some((t) => t.toLowerCase().includes("next"))
                      );
                    }
                    return (
                      p.platform === category ||
                      p.category === category ||
                      p.tags?.includes(category)
                    );
                  }).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25"
                    : "bg-white/[0.06] text-white/70 border border-white/10 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/25 text-white" : "bg-white/10 text-white/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with AnimatePresence initial={false} to ensure instant visibility & NO fluctuation */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-28"
          >
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} priority={idx < 3} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ContactCTA />
    </div>
  );
}
