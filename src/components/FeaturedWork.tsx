"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS, FILTER_CATEGORIES } from "@/data/projects";

export function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const displayedProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS.filter((p) => p.featured).slice(0, 8);
    }
    return PROJECTS.filter((p) => {
      const filterLower = activeFilter.toLowerCase();
      const matchPlatform =
        p.platform.toLowerCase().includes(filterLower) ||
        p.category.toLowerCase().includes(filterLower);
      const matchTags = p.tags?.some((t) =>
        t.toLowerCase().includes(filterLower)
      );
      return matchPlatform || matchTags;
    }).slice(0, 8);
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 sm:py-32 lg:py-40 bg-[#000000] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-36 w-80 h-80 rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Header: Title on Left, View All Projects CTA on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-4 h-0.5 bg-white" />
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Selected Work</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-tight">
              Recent Projects &amp; Case Studies
            </h2>
          </motion.div>

          <Link
            href="/work"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white hover:text-black hover:border-white transition-all overflow-hidden shrink-0 shadow-md self-start sm:self-auto"
          >
            <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-5 select-none items-center justify-center">
              <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                View All Projects
              </span>
              <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-black font-bold">
                Explore {PROJECTS.length}+ Works
              </span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:text-black transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </Link>
        </div>

        {/* Filter Tabs Container Bar with Animated Pill Slider */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-md mb-14">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 sm:px-5 py-2.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? "text-black font-extrabold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)] -z-10"
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Staggered Framer Motion Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-8"
          >
            {displayedProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} priority={idx === 0} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
