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
    <div className="pt-12 pb-28 md:pt-18 md:pb-36">
      <div className="site-container">
        {/* Back navigation */}
        <div className="mb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#575A65] hover:text-[#0F1117] transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* 1. Project Title & Metadata Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E4DE] text-xs font-bold text-[#0F1117] mb-5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
            <span>{project.platform}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight text-[#0F1117] mb-7 leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-2xl text-[#575A65] leading-relaxed max-w-3xl">
            {project.shortDesc}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-7 sm:p-9 bg-white rounded-3xl border-1.5 border-[#E5E4DE] shadow-sm mb-16">
          <div>
            <div className="text-xs text-[#848792] uppercase font-bold tracking-wider mb-1.5">
              Platform
            </div>
            <div className="text-base font-bold text-[#0F1117]">{project.platform}</div>
          </div>

          <div>
            <div className="text-xs text-[#848792] uppercase font-bold tracking-wider mb-1.5">
              Industry
            </div>
            <div className="text-base font-bold text-[#0F1117]">{project.industry}</div>
          </div>

          <div>
            <div className="text-xs text-[#848792] uppercase font-bold tracking-wider mb-1.5">
              My Role
            </div>
            <div className="text-base font-bold text-[#0F1117]">{project.role}</div>
          </div>

          <div>
            <div className="text-xs text-[#848792] uppercase font-bold tracking-wider mb-1.5">
              Website
            </div>
            <div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-bold text-[#2563EB] hover:underline"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-base font-semibold text-[#575A65]">
                  Portfolio Archive
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 8. Main Website Screenshot Visual */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-1.5 border-[#E5E4DE] bg-[#F1F0EC] shadow-md mb-20">
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
            {/* 5. Project Overview */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1117] tracking-tight mb-5">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg text-[#575A65] leading-[1.8]">
                {project.overview}
              </p>
            </section>

            {/* 6. Challenge */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1117] tracking-tight mb-5">
                The Challenge
              </h2>
              <p className="text-base sm:text-lg text-[#575A65] leading-[1.8]">
                {project.challenge}
              </p>
            </section>

            {/* 7. Approach */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1117] tracking-tight mb-5">
                My Approach
              </h2>
              <p className="text-base sm:text-lg text-[#575A65] leading-[1.8]">
                {project.approach}
              </p>
            </section>

            {/* 10. Result / Outcome */}
            <section className="p-8 sm:p-10 rounded-3xl bg-[#F7F6F2] border-1.5 border-[#E5E4DE]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F1117] tracking-tight mb-4">
                Result &amp; Outcome
              </h2>
              <p className="text-base sm:text-lg text-[#575A65] leading-[1.8]">
                {project.outcome}
              </p>
            </section>
          </div>

          {/* 9. Key Implementation Details */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-9 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F1117] mb-5 pb-4 border-b border-[#E5E4DE]">
                Key Implementation Details
              </h3>

              <ul className="space-y-4">
                {project.implementationDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#575A65] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <div className="mt-8 pt-6 border-t border-[#E5E4DE]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary justify-center text-xs sm:text-sm py-3.5 group"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 12. Next Project Navigation Card */}
        <div className="pt-10 border-t border-[#E5E4DE] mb-16">
          <div className="text-xs font-bold text-[#848792] uppercase tracking-wider mb-4">
            Next Project
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 sm:p-10 rounded-3xl border-1.5 border-[#E5E4DE] bg-white hover:border-[#0F1117] hover:shadow-md transition-all gap-6"
          >
            <div>
              <span className="text-xs font-bold text-[#2563EB] mb-1.5 block">
                {nextProject.platform} · {nextProject.role}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#0F1117] group-hover:text-[#2563EB] transition-colors mb-2">
                {nextProject.title}
              </h3>
              <p className="text-sm sm:text-base text-[#575A65] max-w-2xl leading-relaxed">
                {nextProject.shortDesc}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full border border-[#E5E4DE] bg-[#FAF9F7] flex items-center justify-center text-[#0F1117] group-hover:bg-[#0F1117] group-hover:text-white group-hover:translate-x-1.5 transition-all flex-shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
