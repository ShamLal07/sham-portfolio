import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ContactCTA } from "@/components/ContactCTA";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found — Sham Lal" };
  }

  return {
    title: `${project.title} — ${project.role} (${project.platform})`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.title} | Sham Lal Portfolio`,
      description: project.shortDesc,
      images: [project.image],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-12 pb-28 md:pt-18 md:pb-36 bg-transparent text-white min-h-screen">
      <div className="site-container">
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/60 hover:text-amber-400 transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* 1. Project Title & Metadata Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{project.platform}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-white mb-7 leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-white/70 leading-relaxed max-w-3xl">
            {project.shortDesc}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-7 sm:p-9 bg-[#12131A] rounded-3xl border border-white/10 shadow-xl mb-16 text-white">
          <div>
            <div className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1.5">
              Platform
            </div>
            <div className="text-base font-bold text-white">{project.platform}</div>
          </div>

          <div>
            <div className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1.5">
              Industry
            </div>
            <div className="text-base font-bold text-white">{project.industry}</div>
          </div>

          <div>
            <div className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1.5">
              My Role
            </div>
            <div className="text-base font-bold text-white">{project.role}</div>
          </div>

          <div>
            <div className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1.5">
              Website
            </div>
            <div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-base font-semibold text-white/40">
                  Portfolio Archive
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Website Screenshot Visual */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-[#12131A] shadow-2xl mb-20">
          <Image
            src={project.image}
            alt={`${project.title} detailed screenshot`}
            fill
            priority
            sizes="(max-width: 1240px) 100vw, 1240px"
            className="object-cover"
          />
        </div>

        {/* Content Details: Overview, Challenge, Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-8 space-y-14">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-[1.8]">
                {project.overview}
              </p>
            </section>

            {/* Challenge */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5">
                The Challenge
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-[1.8]">
                {project.challenge}
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-5">
                My Approach
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-[1.8]">
                {project.approach}
              </p>
            </section>

            {/* Result / Outcome */}
            <section className="p-8 sm:p-10 rounded-3xl bg-[#12131A] border border-white/10 shadow-lg text-white">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                Result &amp; Outcome
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-[1.8]">
                {project.outcome}
              </p>
            </section>
          </div>

          {/* Key Implementation Details */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#12131A] border border-white/10 rounded-3xl p-8 sm:p-9 shadow-xl text-white">
              <h3 className="text-lg font-bold text-white mb-5 pb-4 border-b border-white/10">
                Key Implementation Details
              </h3>

              <ul className="space-y-4">
                {project.implementationDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-xs sm:text-sm font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                    <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-5 select-none items-center justify-center">
                      <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                        Visit Live Site
                      </span>
                      <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-extrabold">
                        Open Project in New Tab
                      </span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-amber-200 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next Project Navigation Card */}
        <div className="pt-10 border-t border-white/10 mb-16">
          <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">
            Next Project
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#12131A] hover:border-amber-400/40 hover:shadow-2xl transition-all gap-6 text-white"
          >
            <div>
              <span className="text-xs font-bold text-amber-400 mb-1.5 block">
                {nextProject.platform} · {nextProject.role}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                {nextProject.title}
              </h3>
              <p className="text-sm sm:text-base text-white/65 max-w-2xl leading-relaxed">
                {nextProject.shortDesc}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-white group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white group-hover:translate-x-1.5 transition-all flex-shrink-0 shadow-lg">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
