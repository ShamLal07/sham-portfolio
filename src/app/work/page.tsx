"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, FILTER_CATEGORIES } from "@/data/projects";
import { ContactCTA } from "@/components/ContactCTA";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    if (activeFilter === "React / Next.js") {
      return PROJECTS.filter((p) => p.platform === "React / Next.js");
    }
    return PROJECTS.filter((p) => p.platform === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="eyebrow-tag mb-4">PORTFOLIO &amp; CASE STUDIES</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1117] mb-6 leading-tight">
            Selected Work
          </h1>
          <p className="text-base sm:text-xl text-[#575A65] leading-relaxed">
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
                : PROJECTS.filter((p) =>
                    category === "React / Next.js"
                      ? p.platform === "React / Next.js"
                      : p.platform === category
                  ).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`filter-pill ${isActive ? "active" : ""}`}
              >
                <span>{category}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/25 text-white" : "bg-[#F1F0EC] text-[#848792]"
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
                className="project-card group"
              >
                {/* Project Image */}
                <Link
                  href={`/work/${project.slug}`}
                  className="image-frame block"
                  aria-label={`View case study for ${project.title}`}
                >
                  <div className="platform-badge">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F1117]" />
                    <span>{project.platform}</span>
                  </div>

                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </Link>

                {/* Project Details with generous padding */}
                <div className="p-7 sm:p-8 flex flex-col flex-1 bg-white">
                  <div className="flex items-center justify-between text-xs font-bold text-[#848792] mb-2 uppercase tracking-wider">
                    <span>{project.role}</span>
                    <span className="text-[11px] font-medium text-[#575A65]">
                      {project.industry}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-[1.32rem] font-bold text-[#0F1117] tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="text-[0.92rem] text-[#575A65] line-clamp-2 leading-relaxed mb-6 flex-1">
                    {project.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-[#E5E4DE] flex items-center justify-between mt-auto">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#0F1117] group-hover:text-[#2563EB] group-hover:gap-2.5 transition-all py-1"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <span className="text-xs text-[#848792] font-semibold">
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
