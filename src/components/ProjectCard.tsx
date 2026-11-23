"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = React.useState(project.image);
  const cardRef = useRef<HTMLElement>(null);

  // Extract ONLY 2 meaningful tech chips (no cluttered tag explosion)
  const coreTech = React.useMemo(() => {
    const list: string[] = [project.platform];
    if (project.tags && project.tags.length > 0) {
      for (const t of project.tags) {
        if (
          !list.some((existing) => existing.toLowerCase() === t.toLowerCase()) &&
          !["saas", "responsive", "b2b", "it services"].includes(t.toLowerCase())
        ) {
          list.push(t);
        }
        if (list.length >= 2) break;
      }
    }
    return list;
  }, [project.platform, project.tags]);

  // Clean 1-line business outcome / impact
  const cleanSummary = React.useMemo(() => {
    if (project.industry && project.industry.length > 10 && project.industry.length < 65) {
      return project.industry;
    }
    if (project.shortDesc) {
      // First sentence or first 70 characters
      const firstSentence = project.shortDesc.split(".")[0];
      return firstSentence.length > 70 ? `${firstSentence.slice(0, 68)}...` : firstSentence;
    }
    return project.role || "Full-Stack Development & CMS Architecture";
  }, [project.industry, project.shortDesc, project.role]);

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 22, stiffness: 220, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-5, 5]);

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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#0C0C0C] border border-white/10 hover:border-white/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_16px_40px_-10px_rgba(255,255,255,0.12)] transition-all duration-300 flex flex-col justify-between"
    >
      {/* Dynamic Cursor Sheen with Monochrome White/Silver specular highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(400px circle at ${gx} ${gy}, rgba(255, 255, 255, 0.12), transparent 70%)`
          ),
        }}
      />

      {/* Top Ambient Glow Edge */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/0 group-hover:via-white/90 to-transparent transition-all duration-500 pointer-events-none z-20" />

      {/* 1. Developer Browser Window Header */}
      <div className="px-4 py-2 bg-[#060606] border-b border-white/[0.08] flex items-center justify-between z-10 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/90 inline-block" />
        </div>
        <span className="text-[10px] font-mono text-zinc-500 tracking-wider truncate max-w-[170px]">
          shamdev.in/work/{project.slug}
        </span>
      </div>

      {/* 2. Top Image Frame with Floating Platform Badge */}
      <Link
        href={`/work/${project.slug}`}
        className="block relative w-full aspect-[16/10] bg-[#050505] overflow-hidden"
      >
        <Image
          src={imgSrc}
          alt={`${project.title} screenshot`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top group-hover:scale-106 transition-transform duration-700 ease-out"
          onError={() => {
            if (project.slug === "xfactor-quiz") {
              setImgSrc("/projects/xfactor-quiz.png");
            }
          }}
        />

        {/* Gradient shadow for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-transparent to-black/20 opacity-70 pointer-events-none" />

        {/* Floating Platform Pill with Live Status Beacon */}
        <div className="absolute top-3 right-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>{project.platform}</span>
          </div>
        </div>
      </Link>

      {/* 3. Card Content: ONLY MEANINGFUL CONTENT (No tag clutter, no truncated overflow) */}
      <div className="p-5 flex flex-col flex-1 justify-between relative z-10">
        <div>
          {/* Project Title */}
          <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight group-hover:text-zinc-200 transition-colors mb-1.5 leading-snug">
            <Link href={`/work/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          {/* Clean 1-Line Meaningful Business Impact / Summary */}
          <p className="text-xs sm:text-[0.82rem] text-zinc-400 leading-relaxed font-normal line-clamp-2 min-h-[2.5rem] mb-4">
            {cleanSummary}
          </p>

          {/* Clean Core Tech Badges (Maximum 2 chips, zero clutter) */}
          <div className="flex items-center gap-2 mb-4">
            {coreTech.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono font-medium text-zinc-300 bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-md group-hover:border-white/30 group-hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4. Sleek Action Bar */}
        <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-zinc-300 transition-colors group/link"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white transform transition-transform duration-300 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site of ${project.title}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white hover:text-black border border-white/15 text-[11px] font-semibold text-zinc-300 hover:text-black transition-all cursor-pointer"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-black" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
