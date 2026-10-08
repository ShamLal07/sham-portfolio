"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="project-card group">
      {/* Project image with platform label on top */}
      <Link
        href={`/work/${project.slug}`}
        className="image-frame block"
        aria-label={`View case study for ${project.title}`}
      >
        {/* Subtle platform pill top-left */}
        <div className="platform-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F1117]" />
          <span>{project.platform}</span>
        </div>

        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </Link>

      {/* Card Body with generous, comfortable padding */}
      <div className="p-7 sm:p-8 flex flex-col flex-1 bg-white">
        {/* Subtitle / Role */}
        <div className="flex items-center justify-between text-xs font-bold text-[#848792] mb-2 uppercase tracking-wider">
          <span>{project.role}</span>
          <span className="text-[11px] font-medium text-[#575A65]">{project.industry}</span>
        </div>

        {/* Project Name */}
        <h3 className="text-xl sm:text-[1.32rem] font-bold text-[#0F1117] tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
          <Link href={`/work/${project.slug}`}>{project.title}</Link>
        </h3>

        {/* Short description with comfortable line-height */}
        <p className="text-[0.92rem] text-[#575A65] leading-relaxed mb-6 flex-1">
          {project.shortDesc}
        </p>

        {/* Link footer */}
        <div className="pt-4 border-t border-[#E5E4DE] flex items-center justify-between mt-auto">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0F1117] group-hover:text-[#2563EB] group-hover:gap-2.5 transition-all py-1"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <span className="text-xs text-[#848792] font-semibold">
            {project.platform}
          </span>
        </div>
      </div>
    </article>
  );
}
