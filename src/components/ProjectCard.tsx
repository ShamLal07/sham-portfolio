import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { BrowserMockup } from "./BrowserMockup";
import { Icon } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block w-full h-full bg-white hover:bg-[#FFFDF5] border border-gray-200/90 hover:border-[#EFBD30] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
    >
      {/* Thumbnail Container with Zoom Effect */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <BrowserMockup
            tone={project.tone}
            label={`Project screenshot for ${project.title}`}
          />
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
          {project.cat.slice(0, 2).map((c) => (
            <span
              key={c}
              className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#946C00] border border-[#EFBD30]/40 backdrop-blur-md shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Year Tag */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/75 text-white backdrop-blur-sm">
            {project.year || "2025"}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold font-display text-[#0E0E14] group-hover:text-[#946C00] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#4B4B58] leading-relaxed line-clamp-2 mb-4">
            {project.desc}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action Row */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0E0E14] group-hover:text-[#946C00] transition-colors">
          <span>Explore Case Study</span>
          <span className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-[#EFBD30] group-hover:text-[#0E0E14] text-gray-700 flex items-center justify-center transition-all duration-300 shadow-sm">
            <Icon name="i-arrow" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
