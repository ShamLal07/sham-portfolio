"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

// Brand monogram icons for client projects
function ProjectBrandIcon({ title }: { title: string }) {
  const words = title.split(" ");
  const initials = words.length > 1 ? `${words[0][0]}${words[1][0]}` : title.slice(0, 2);

  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center text-[10px] font-black tracking-tighter shrink-0 uppercase">
      {initials}
    </div>
  );
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const tags = project.tags || [project.platform, project.category];
  const [imgSrc, setImgSrc] = React.useState(project.image);

  return (
    <article className="group relative bg-[#12131A] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* Top Image Frame */}
      <Link
        href={`/work/${project.slug}`}
        className="block relative w-full aspect-[16/10] bg-[#0A0B0E] overflow-hidden"
      >
        <Image
          src={imgSrc}
          alt={`${project.title} website preview`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => {
            if (project.slug === "xfactor-quiz") {
              setImgSrc("/projects/xfactor-quiz.png");
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-transparent to-transparent opacity-60 pointer-events-none" />
      </Link>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Header Row: Logo + Title on left, Action buttons on right */}
          <div className="flex items-center justify-between gap-3 mb-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <ProjectBrandIcon title={project.title} />
              <h3 className="font-bold text-base sm:text-[1.08rem] text-white tracking-tight truncate group-hover:text-amber-400 transition-colors">
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              </h3>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live website of ${project.title}`}
                  className="w-8 h-8 rounded-full bg-white/5 text-white/60 hover:bg-amber-500/20 hover:text-amber-300 flex items-center justify-center transition-all cursor-pointer"
                  title="Visit Live Website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <Link
                href={`/work/${project.slug}`}
                aria-label={`View details of ${project.title}`}
                className="w-8 h-8 rounded-full bg-white/10 text-white/70 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white flex items-center justify-center transition-all shrink-0"
                title="View Case Study"
              >
                <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Tags Row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-white/75 bg-white/[0.07] border border-white/10 px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-[0.84rem] text-white/60 leading-relaxed font-normal line-clamp-2">
            {project.shortDesc}
          </p>
        </div>
      </div>
    </article>
  );
}
