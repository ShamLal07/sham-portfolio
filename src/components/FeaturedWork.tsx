"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS, FILTER_CATEGORIES } from "@/data/projects";

export function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const displayedProjects = useMemo(() => {
    if (activeFilter === "All") {
      return PROJECTS.filter((p) => p.featured).slice(0, 6);
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
    }).slice(0, 6);
  }, [activeFilter]);

  return (
    <section id="work" className="py-14 sm:py-20 md:py-24 bg-[#0D0F18]/85 text-white border-t border-white/10 relative">
      <div className="site-container">
        {/* Header: Title on Left, View All Projects CTA on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-4 h-0.5 bg-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Selected Work
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Recent Projects
            </h2>
          </div>

          <Link
            href="/work"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-amber-400/50 hover:bg-white/[0.12] transition-all overflow-hidden shrink-0 shadow-md self-start sm:self-auto"
          >
            <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-5 select-none items-center justify-center">
              <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                View All Projects
              </span>
              <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-300 font-bold">
                Explore {PROJECTS.length}+ Works
              </span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </Link>
        </div>

        {/* Filter Tabs Container Bar */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar shadow-md mb-8">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${isActive
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25"
                  : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects 3-Column Grid with generous responsive spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={project.slug} project={project} priority={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
