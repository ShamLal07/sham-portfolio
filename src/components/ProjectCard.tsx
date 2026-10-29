"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(project.image);
  const tags = project.tags || [project.platform, project.category];

  return (
    <article className="group relative bg-[#0E1017] border border-white/[0.08] hover:border-amber-400/40 rounded-[24px] overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_20px_45px_-12px_rgba(245,120,30,0.25)] flex flex-col justify-between">
      {/* Top: Image Frame with floating badge and hover reveal HUD */}
      <div className="relative aspect-[16/10] bg-[#08090D] overflow-hidden">
        {/* Floating Platform Pill */}
        <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0B0E]/85 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white shadow-lg pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>{project.platform}</span>
        </div>

        {/* Floating Quick Live Link (if available) */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live website of ${project.title}`}
            className="absolute top-3.5 right-3.5 z-30 w-8 h-8 rounded-full bg-[#0A0B0E]/85 backdrop-blur-md border border-white/15 text-white/70 hover:text-amber-300 hover:border-amber-400/40 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 cursor-pointer"
            title="Visit Live Website"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        <Link
          href={`/work/${project.slug}`}
          className="block w-full h-full relative"
          aria-label={`View case study for ${project.title}`}
        >
          <Image
            src={imgSrc}
            alt={`${project.title} screenshot`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={() => {
              if (project.slug === "xfactor-quiz") {
                setImgSrc("/projects/xfactor-quiz.png");
              }
            }}
          />

          {/* Bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-transparent opacity-70 pointer-events-none" />

          {/* On-Hover Frosted Glass HUD Overlay */}
          <div className="absolute inset-0 bg-[#090A11]/92 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20 pointer-events-none group-hover:pointer-events-auto">
            {/* Top row */}
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {project.platform}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sham Lal · Developer
                </span>
              </div>

              {/* Role & Industry */}
              <div className="space-y-2 text-left">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/45 block mb-0.5">
                    Role &amp; Contribution
                  </span>
                  <p className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {project.role}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/45 block mb-0.5">
                    Industry / Work Scope
                  </span>
                  <p className="text-xs font-medium text-white/75 line-clamp-1">
                    {project.industry}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom: Technologies */}
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/45 block mb-1.5">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.08] text-white/90 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Card Content with generous spacing and strong visual hierarchy */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5 bg-[#0E1017]">
        <div className="space-y-2.5">
          {/* Subtle Category & Scope Meta Row */}
          <div className="flex items-center justify-between text-xs font-semibold text-white/50">
            <span className="text-amber-400/90 font-mono text-[11px] uppercase tracking-wider truncate max-w-[65%]">
              {project.role.split("&")[0].trim()}
            </span>
            <span className="text-[11px] text-white/40 font-mono truncate max-w-[35%] text-right">
              {project.industry.split("&")[0].trim()}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-[1.32rem] font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors leading-snug line-clamp-1">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
            {project.shortDesc}
          </p>

          {/* Technology Badges Row */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-white/75 bg-white/[0.05] border border-white/10 px-2.5 py-0.5 rounded-md group-hover:border-amber-400/25 group-hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[11px] text-white/40 font-mono px-1">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* View Case Study CTA Button */}
        <div className="pt-4 border-t border-white/[0.08]">
          <Link
            href={`/work/${project.slug}`}
            className="group/btn w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 hover:from-[#F5781E] hover:to-[#F59E0B] text-amber-300 hover:text-white border border-amber-500/30 hover:border-transparent font-bold text-xs sm:text-sm shadow-sm hover:shadow-[0_8px_25px_rgba(245,120,30,0.4)] hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
