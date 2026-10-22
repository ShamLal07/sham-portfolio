"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS, FILTER_CATEGORIES } from "@/data/projects";

export function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const displayedProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS.filter((p) => p.featured).slice(0, 6);
    }
    return PROJECTS.filter((p) => {
      if (activeFilter === "React / Next.js") {
        return p.platform === "React / Next.js";
      }
      return p.platform === activeFilter;
    }).slice(0, 6);
  }, [activeFilter]);

  return (
    <section className="py-24 md:py-36 border-t border-[#E5E4DE]" id="work">
      <div className="site-container">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow-tag mb-3">RECENT WORK</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-[#0F1117]">
              Selected Work
            </h2>
          </div>
          <p className="text-[#575A65] text-base max-w-[44ch] md:text-right leading-relaxed">
            A selection of websites I&apos;ve designed and developed across different
            platforms and industries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-14 scrollbar-none">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`filter-pill ${isActive ? "active" : ""}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects 3-Column Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <ProjectCard project={project} priority={idx < 3} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Work Link */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="btn-secondary group inline-flex"
          >
            <span>Explore All {PROJECTS.length} Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
