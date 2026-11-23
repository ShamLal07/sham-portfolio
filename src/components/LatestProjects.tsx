"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DynamicProject } from "@/types/cms";
import { SEED_DYNAMIC_PROJECTS } from "@/data/seedProjects";

interface LatestProjectsProps {
  initialProjects?: DynamicProject[];
}

const CATEGORIES = ["All", "WordPress", "Shopify", "Next.js", "HubSpot"];

function EditorialProjectCard({ project, idx }: { project: DynamicProject; idx: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 22, stiffness: 220, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-4, 4]);

  const glareX = useTransform(smoothMouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothMouseY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group rounded-3xl bg-[#0C0C0C] border border-white/10 hover:border-white/50 p-6 sm:p-8 transition-colors duration-300 shadow-xl hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.12)] flex flex-col justify-between relative overflow-hidden"
    >
      {/* Glare effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(500px circle at ${gx} ${gy}, rgba(255, 255, 255, 0.12), transparent 70%)`
          ),
        }}
      />

      {/* Top ambient highlight on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/0 group-hover:via-white/80 to-transparent transition-all duration-500 pointer-events-none" />

      <div>
        {/* Media Preview Container with Browser Top Bar */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 border border-white/10 mb-6 group-hover:shadow-2xl transition-all">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.platform} Project`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-106"
            priority={idx < 2}
          />
          {/* Subtle inner shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/85 via-transparent to-black/25 pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/90 backdrop-blur-md text-white border border-white/20 shadow-md">
              {project.platform}
            </span>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/15 backdrop-blur-md text-white/90 border border-white/20">
              {project.industry}
            </span>
          </div>

          {/* Outcome Tag on Media bottom */}
          {project.outcome && (
            <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-black/90 backdrop-blur-md border border-white/15 text-xs font-medium text-white/90 flex items-center gap-2 z-10 group-hover:border-white/30 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span className="line-clamp-1">{project.outcome}</span>
            </div>
          )}
        </div>

        {/* Project Header Info */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-2xl font-extrabold text-white group-hover:text-zinc-200 transition-colors tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mt-1 font-mono">
              {project.role}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
          {project.shortDesc || project.overview}
        </p>

        {/* Tech Stack Pills (Max 4 clean badges) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-300 group-hover:border-white/30 group-hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 relative z-10">
        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 font-extrabold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-black" />
          </motion.a>
        )}

        {project.caseStudyUrl && (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Link
              href={project.caseStudyUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white hover:text-black text-white/90 border border-white/20 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Read Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
}

export function LatestProjects({ initialProjects = SEED_DYNAMIC_PROJECTS }: LatestProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return initialProjects;
    }
    return initialProjects.filter((p) => {
      const matchPlatform = p.platform.toLowerCase().includes(activeCategory.toLowerCase());
      const matchCat = p.category.toLowerCase().includes(activeCategory.toLowerCase());
      const matchTags = p.tags?.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()));
      return matchPlatform || matchCat || matchTags;
    });
  }, [activeCategory, initialProjects]);

  return (
    <section id="latest-projects" className="py-20 md:py-28 bg-[#000000] text-white border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-white/[0.02] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] text-white text-xs font-bold mb-3 border border-white/20 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE BUILDS &amp; CLIENT DELIVERIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
              Latest Projects
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 mt-3 leading-relaxed">
              Real client websites and custom web applications engineered for speed, conversion, and seamless content management.
            </p>
          </div>

          {/* Category Filter Pills with animated layoutId */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none bg-white/[0.03] p-1.5 rounded-full border border-white/10">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    active ? "text-black font-extrabold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="latestCategoryPill"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 2-Column Editorial Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <EditorialProjectCard
                key={project.id || project.slug}
                project={project}
                idx={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to explore all works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Explore All 30+ Client Works &amp; Case Studies</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
