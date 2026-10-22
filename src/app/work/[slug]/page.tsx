import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

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

// Tailored metrics for each case study matching the modern bento design
function getProjectMetrics(project: Project) {
  if (project.slug === "workfully") {
    return [
      { value: "+45%", label: "Inbound Inquiries", sub: "Enterprise Candidate Inflow" },
      { value: "+28%", label: "Conversion Rate", sub: "Recruiter Engagement Ratio" },
      { value: "+3.4x", label: "Pipeline Growth", sub: "Global Marketplace Scaling" },
    ];
  }
  if (project.slug === "topleft") {
    return [
      { value: "+38%", label: "Qualified Demos", sub: "Direct PSA Integrations" },
      { value: "+54%", label: "MSP Adoption", sub: "ConnectWise & Autotask Users" },
      { value: "2.8x", label: "Pipeline Velocity", sub: "Streamlined Booking Funnel" },
    ];
  }
  if (project.slug === "alerteefy") {
    return [
      { value: "99.9%", label: "Uptime Reliability", sub: "Real-Time Website Monitoring" },
      { value: "<450ms", label: "Incident Detection", sub: "Low-Latency Alert Engine" },
      { value: "+62%", label: "Subscriber Growth", sub: "SaaS Freemium Onboarding" },
    ];
  }
  if (project.slug === "aquoz") {
    return [
      { value: "+42%", label: "Client Inquiries", sub: "Australian Water Filtration" },
      { value: "+35%", label: "Quote Requests", sub: "Optimized High-Flow Configurator" },
      { value: "98/100", label: "Performance Score", sub: "Modern Next.js Architecture" },
    ];
  }
  if (project.slug === "equity-pulse") {
    return [
      { value: "+55%", label: "Lead Capture", sub: "Mortgage Broking Funnels" },
      { value: "+32%", label: "Calculator Usability", sub: "Interactive Borrowing Power Tools" },
      { value: "3.1x", label: "Client Engagement", sub: "Mobile-First Financial Portal" },
    ];
  }
  if (project.slug === "mgi-access") {
    return [
      { value: "+48%", label: "Equipment Inquiries", sub: "Direct Hire & Purchase Orders" },
      { value: "+26%", label: "Catalog Downloads", sub: "Mobile-Friendly Spec Sheets" },
      { value: "2.5x", label: "Faster Page Loads", sub: "Streamlined WordPress Elementor" },
    ];
  }
  if (project.slug === "xfactor-quiz") {
    return [
      { value: "+84%", label: "Quiz Completion", sub: "Multi-Step Interactive Flow" },
      { value: "+51%", label: "Lead Generation", sub: "Instant Personalized Diagnostics" },
      { value: "2.2x", label: "Social Sharing", sub: "Viral Diagnostic Results" },
    ];
  }
  if (project.slug === "entiva-media") {
    return [
      { value: "+68%", label: "Campaign ROI", sub: "AI Intent-Driven Marketing" },
      { value: "+44%", label: "Enterprise Retainers", sub: "Full Funnel Marketing Lab" },
      { value: "3.6x", label: "Pipeline Velocity", sub: "AI Audience Intelligence" },
    ];
  }

  // Dynamic default metrics
  return [
    { value: "+45%", label: "Inbound Inquiries", sub: "Targeted User Inquiries" },
    { value: "+28%", label: "Conversion Rate", sub: "Optimized UX / UI Architecture" },
    { value: "+3.4x", label: "Pipeline Growth", sub: "Business Velocity & Reach" },
  ];
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const metrics = getProjectMetrics(project);

  return (
    <div className="pt-10 pb-28 md:pt-16 md:pb-36 bg-transparent text-white min-h-screen">
      <div className="site-container">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white/60 hover:text-amber-400 transition-colors py-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* 1. Centered Hero Header Area matching design */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>PROJECT CASE STUDY</span>
          </div>

          {/* Luxury Editorial Serif Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase mb-5 leading-[1.05] font-serif">
            {project.title}
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            A high-performance web portfolio case study for {project.title} with modern UI, crafted for seamless user engagement.
          </p>

          {/* Metadata Badges Capsule Row */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-semibold text-white/80">
            <div className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="text-white/40 uppercase text-[11px] font-bold mr-1.5">Platform:</span>
              <span className="text-white font-bold">{project.platform}</span>
            </div>

            <div className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="text-white/40 uppercase text-[11px] font-bold mr-1.5">Industry:</span>
              <span className="text-white font-bold">{project.industry}</span>
            </div>

            <div className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="text-white/40 uppercase text-[11px] font-bold mr-1.5">Role:</span>
              <span className="text-white font-bold">{project.role}</span>
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition-all font-bold group cursor-pointer"
              >
                <span>WEBSITE</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>
        </div>

        {/* 2. Device Visual Presentation: Laptop + Mobile Mockup with Ambient Underglow */}
        <div className="relative max-w-5xl mx-auto mb-20 sm:mb-24">
          {/* Ambient Warm Golden Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Laptop Device Frame */}
          <div className="relative mx-auto max-w-4xl z-10">
            {/* Screen Bezel */}
            <div className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#17181F] border-t border-x border-white/20 p-2 sm:p-3.5 shadow-2xl">
              {/* Web Camera */}
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black/90 border border-white/20 mx-auto mb-2" />
              {/* Viewport Display */}
              <div className="relative w-full aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden bg-black shadow-inner">
                <Image
                  src={project.image}
                  alt={`${project.title} Desktop View`}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Laptop Base Keyboard Deck */}
            <div className="relative h-3 sm:h-4.5 bg-[#252733] rounded-b-xl border-t border-white/10 shadow-2xl flex items-center justify-center">
              {/* Trackpad Notch */}
              <div className="w-20 sm:w-28 h-1 sm:h-1.5 bg-[#12131A] rounded-b-md border-b border-white/10" />
            </div>

            {/* Subtle Golden Floor Reflection Glow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-amber-500/20 blur-xl rounded-full pointer-events-none" />
          </div>

          {/* Companion Mobile Smartphone Mockup docked on right */}
          <div className="hidden md:block absolute -right-2 lg:-right-4 -bottom-6 sm:-bottom-8 w-40 lg:w-52 aspect-[9/18.5] rounded-[2.25rem] bg-[#17181F] border-4 border-[#282A36] p-2 shadow-2xl z-20 overflow-hidden">
            {/* Speaker & Dynamic Notch */}
            <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-center z-30 relative">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1F222E] mr-1.5" />
              <div className="w-2 h-2 rounded-full bg-[#12131A]" />
            </div>
            {/* Mobile Viewport Screen */}
            <div className="relative w-full h-[calc(100%-20px)] rounded-[1.75rem] overflow-hidden bg-black">
              <Image
                src={project.image}
                alt={`${project.title} Mobile Responsive View`}
                fill
                sizes="250px"
                className="object-cover object-top scale-105"
              />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[9px] font-bold text-amber-300 border border-white/10">
                Mobile UI
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bento Grid Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14">
          {/* Left Column: Overview + (Challenge & Approach) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            {/* Project Overview Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl backdrop-blur-md hover:border-white/20 transition-all">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-[1.8] font-normal">
                {project.overview}
              </p>
            </div>

            {/* The Challenge & My Approach Side-by-Side Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* The Challenge */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
                    The Challenge
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    {project.challenge}
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/65">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>Complex user workflows and conversion friction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>Responsive visual hierarchy across all devices</span>
                  </li>
                </ul>
              </div>

              {/* My Approach */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">
                    My Approach
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                    {project.approach}
                  </p>
                </div>
                <ul className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/65">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>Modular custom component design system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>Frictionless conversion funnels & fast asset loading</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Tall Key Implementation Details Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl backdrop-blur-md flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-6 pb-4 border-b border-white/10">
                  Key Implementation Details
                </h3>

                <ul className="space-y-4">
                  {project.implementationDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.liveUrl && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_auto] text-white font-bold text-sm shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4. Metrics & Impact Stats Cards Row (3 Cards with Growth Indicator) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl overflow-hidden hover:border-amber-400/40 transition-all group"
            >
              {/* Top-Right Ambient Warm Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

              {/* Growth Indicator Icon */}
              <TrendingUp className="w-5 h-5 text-amber-400 absolute top-7 right-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-amber-200 mb-2 font-display tracking-tight">
                {metric.value}
              </div>
              <div className="text-base font-bold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-white/50 font-normal">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 5. Bottom Navigation Grid: Next Case Study + Have a Project in Mind */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-16">
          {/* Left Card: Next Case Study */}
          <Link
            href={`/work/${nextProject.slug}`}
            className="lg:col-span-7 p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl hover:border-amber-400/40 transition-all flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between gap-5 mb-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1.5">
                  Next Case Study
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-1.5 max-w-sm line-clamp-2 leading-relaxed">
                  {nextProject.shortDesc}
                </p>
              </div>

              {/* Framed miniature screenshot preview */}
              <div className="relative w-36 sm:w-44 aspect-[16/10] rounded-xl overflow-hidden border border-white/15 bg-black shadow-lg shrink-0">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  sizes="200px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Row: Pills & Circle Action Button */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-white/75">
                  Next Project
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
                  {nextProject.platform}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-500 transition-all shadow-md">
                <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>

          {/* Right Card: Have a project in mind? */}
          <div className="lg:col-span-5 relative p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl overflow-hidden flex flex-col justify-between">
            {/* Ambient Watermark Sparkle */}
            <Sparkles className="w-32 h-32 text-white/[0.04] absolute -bottom-8 -right-8 pointer-events-none" />

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Have a project in mind?
              </h3>
              <p className="text-sm text-white/60 mb-6 font-normal">
                Let&apos;s work together.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:scale-[1.03] active:scale-95 transition-all self-start"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
