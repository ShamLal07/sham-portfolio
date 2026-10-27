"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="pt-28 pb-28 sm:pt-32 md:pt-36 md:pb-36 bg-transparent text-white min-h-screen">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4 border border-amber-500/20">
            PORTFOLIO &amp; CASE STUDIES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Selected Work
          </h1>
          <p className="text-base sm:text-xl text-white/65 leading-relaxed">
            Websites, stores and digital experiences I&apos;ve designed and developed
            across different platforms and industries.
          </p>
        </div>

        {/* Filter Pills with animated selection */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-16 scrollbar-none">
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
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25"
                    : "bg-white/[0.06] text-white/75 border border-white/10 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/25 text-white" : "bg-white/10 text-white/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with generous gaps */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-28"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="group bg-[#12131A] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Project Image */}
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-[16/10] bg-[#0A0B0E] overflow-hidden"
                  aria-label={`View case study for ${project.title}`}
                >
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-semibold text-white border border-white/15 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{project.platform}</span>
                  </div>

                  <Image
                    src={project.image}
                    alt={`${project.title} homepage screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>

                {/* Project Details with generous padding */}
                <div className="p-7 sm:p-8 flex flex-col flex-1 bg-[#12131A]">
                  <div className="flex items-center justify-between text-xs font-bold text-white/50 mb-2 uppercase tracking-wider">
                    <span>{project.role}</span>
                    <span className="text-[11px] font-medium text-white/40">
                      {project.industry}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-[1.32rem] font-bold text-white tracking-tight mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="text-[0.92rem] text-white/65 line-clamp-2 leading-relaxed mb-6 flex-1">
                    {project.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group/link inline-flex items-center gap-2 text-xs font-bold text-white hover:text-amber-400 py-1"
                    >
                      <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-4 select-none items-center justify-center">
                        <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover/link:-translate-y-[140%]">
                          View Case Study
                        </span>
                        <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover/link:translate-y-0 text-amber-300 font-bold">
                          Explore Project
                        </span>
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 transform transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>

                    <span className="text-xs text-white/40 font-semibold">
                      {project.platform}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ContactCTA />
    </div>
  );
}
