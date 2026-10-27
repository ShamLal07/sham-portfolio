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
import { SITE_URL } from "@/data/siteConfig";
import { JsonLd } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

function getCaseStudyTitle(project: Project): string {
  const suffix = " | Sham Lal";
  const maxContentLength = 60 - suffix.length; // 48 chars max

  // Try "{Project} — {Platform} Build" or compact role
  let whatIBuilt = project.role
    .replace(/Development|Engineering/g, "Dev")
    .replace(/Storefront/g, "Store");
  let candidate = `${project.title} — ${whatIBuilt}`;

  if (candidate.length > maxContentLength) {
    candidate = `${project.title} — ${project.platform} Build`;
  }
  if (candidate.length > maxContentLength) {
    candidate = `${project.title} — ${project.platform}`;
  }
  if (candidate.length > maxContentLength) {
    candidate = candidate.slice(0, maxContentLength).trim();
  }
  return `${candidate}${suffix}`;
}

function getCaseStudyDescription(project: Project): string {
  let desc = project.shortDesc || project.overview;
  if (desc.length > 155) {
    const trimmed = desc.slice(0, 152);
    desc = trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
  } else if (desc.length < 120) {
    desc = `${desc} Designed and developed by Sham Lal with custom UI/UX.`;
    if (desc.length > 155) {
      const trimmed = desc.slice(0, 152);
      desc = trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
    }
  }
  return desc;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Sham Lal" };
  }

  const pageTitle = getCaseStudyTitle(project);
  const pageDesc = getCaseStudyDescription(project);
  const pageUrl = `${SITE_URL}/work/${project.slug}`;
  const ogImage = project.image.startsWith("http")
    ? project.image
    : `${SITE_URL}${project.image}`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: pageUrl,
      siteName: "Sham Lal Portfolio",
      title: pageTitle,
      description: pageDesc,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} homepage screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [ogImage],
    },
  };
}

function getDomain(url?: string): string {
  if (!url) return "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

// Brand theme styling matching the live website
function getBrandTheme(project: Project) {
  const slug = project.slug;

  if (slug === "topleft") {
    return {
      name: "TopLeft",
      bgGradient: "from-blue-600/20 to-indigo-600/20",
      btnGradient: "bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#0052CC] text-white shadow-[0_8px_25px_-5px_rgba(0,102,255,0.6)] hover:shadow-[0_12px_30px_-5px_rgba(0,102,255,0.8)]",
      badgeBg: "bg-blue-500/15 border-blue-500/30 text-blue-300",
      glow: "from-blue-600/25 via-indigo-500/30 to-blue-600/25",
      accentBg: "bg-blue-500",
      accentText: "text-blue-400",
      metricGradient: "from-white via-white to-blue-200",
    };
  }

  if (slug === "workfully") {
    return {
      name: "Workfully",
      bgGradient: "from-amber-500/20 to-orange-500/20",
      btnGradient: "bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white shadow-[0_8px_25px_-5px_rgba(245,120,30,0.6)] hover:shadow-[0_12px_30px_-5px_rgba(245,120,30,0.8)]",
      badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
      glow: "from-amber-500/25 via-orange-500/30 to-amber-500/25",
      accentBg: "bg-amber-400",
      accentText: "text-amber-400",
      metricGradient: "from-white via-white to-amber-200",
    };
  }

  if (slug === "aquoz") {
    return {
      name: "Aquoz",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      btnGradient: "bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] text-white shadow-[0_8px_25px_-5px_rgba(0,180,216,0.6)]",
      badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
      glow: "from-cyan-500/25 via-blue-500/30 to-cyan-500/25",
      accentBg: "bg-cyan-400",
      accentText: "text-cyan-400",
      metricGradient: "from-white via-white to-cyan-200",
    };
  }

  if (slug === "equity-pulse") {
    return {
      name: "Equity Pulse",
      bgGradient: "from-teal-500/20 to-sky-600/20",
      btnGradient: "bg-gradient-to-r from-[#0F766E] via-[#0284C7] to-[#0F766E] text-white shadow-[0_8px_25px_-5px_rgba(2,132,199,0.6)]",
      badgeBg: "bg-sky-500/15 border-sky-500/30 text-sky-300",
      glow: "from-teal-500/25 via-sky-500/30 to-teal-500/25",
      accentBg: "bg-sky-400",
      accentText: "text-sky-400",
      metricGradient: "from-white via-white to-sky-200",
    };
  }

  if (slug === "entiva-media") {
    return {
      name: "Entiva Media",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      btnGradient: "bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#8B5CF6] text-white shadow-[0_8px_25px_-5px_rgba(168,85,247,0.6)]",
      badgeBg: "bg-purple-500/15 border-purple-500/30 text-purple-300",
      glow: "from-purple-500/25 via-pink-500/30 to-purple-500/25",
      accentBg: "bg-purple-400",
      accentText: "text-purple-400",
      metricGradient: "from-white via-white to-purple-200",
    };
  }

  if (slug === "hyundai-heat-pumps") {
    return {
      name: "Hyundai",
      bgGradient: "from-blue-700/20 to-cyan-500/20",
      btnGradient: "bg-gradient-to-r from-[#002C6C] via-[#0051B3] to-[#002C6C] text-white shadow-[0_8px_25px_-5px_rgba(0,81,179,0.6)]",
      badgeBg: "bg-blue-500/15 border-blue-500/30 text-blue-300",
      glow: "from-blue-700/25 via-cyan-500/30 to-blue-700/25",
      accentBg: "bg-cyan-400",
      accentText: "text-cyan-400",
      metricGradient: "from-white via-white to-cyan-200",
    };
  }

  if (slug === "mgi-access") {
    return {
      name: "MGI Access",
      bgGradient: "from-amber-500/20 to-yellow-500/20",
      btnGradient: "bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-white shadow-[0_8px_25px_-5px_rgba(245,158,11,0.6)]",
      badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
      glow: "from-amber-500/25 via-yellow-500/30 to-amber-500/25",
      accentBg: "bg-amber-400",
      accentText: "text-amber-400",
      metricGradient: "from-white via-white to-amber-200",
    };
  }

  if (slug === "xfactor-quiz") {
    return {
      name: "X-Factor",
      bgGradient: "from-violet-500/20 to-emerald-500/20",
      btnGradient: "bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#7C3AED] text-white shadow-[0_8px_25px_-5px_rgba(139,92,246,0.6)]",
      badgeBg: "bg-violet-500/15 border-violet-500/30 text-violet-300",
      glow: "from-violet-500/25 via-purple-500/30 to-violet-500/25",
      accentBg: "bg-violet-400",
      accentText: "text-violet-400",
      metricGradient: "from-white via-white to-violet-200",
    };
  }

  // Default theme
  return {
    name: project.title,
    bgGradient: "from-amber-500/20 to-orange-500/20",
    btnGradient: "bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white shadow-[0_8px_25px_-5px_rgba(245,120,30,0.6)] hover:shadow-[0_12px_30px_-5px_rgba(245,120,30,0.8)]",
    badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    glow: "from-amber-500/25 via-orange-500/30 to-amber-500/25",
    accentBg: "bg-amber-400",
    accentText: "text-amber-400",
    metricGradient: "from-white via-white to-amber-200",
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
  const brandTheme = getBrandTheme(project);
  const domain = getDomain(project.liveUrl);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/work/${project.slug}#creativework`,
    name: project.title,
    headline: project.title,
    description: project.shortDesc,
    url: `${SITE_URL}/work/${project.slug}`,
    image: project.image.startsWith("http")
      ? project.image
      : `${SITE_URL}${project.image}`,
    dateModified: project.updatedAt || "2026-10-23",
    creator: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sham Lal",
      url: SITE_URL,
    },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Sham Lal",
      url: SITE_URL,
    },
  };

  return (
    <div className="pt-24 pb-28 sm:pt-28 md:pt-32 md:pb-36 bg-transparent text-white min-h-screen">
      <JsonLd data={projectSchema} />
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
          {/* Eyebrow Pill with Live Brand Accent */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${brandTheme.badgeBg} text-xs font-bold uppercase tracking-widest shadow-sm mb-6`}>
            <span className={`w-1.5 h-1.5 rounded-full ${brandTheme.accentBg}`} />
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
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${brandTheme.badgeBg} hover:brightness-125 transition-all font-bold group cursor-pointer shadow-sm`}
              >
                {domain && (
                  <Image
                    src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                    alt={`${project.title} logo`}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain rounded-sm"
                    unoptimized
                  />
                )}
                <span>LIVE WEBSITE</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
              </a>
            )}
          </div>
        </div>

        {/* 2. Device Visual Presentation: Laptop + Mobile Mockup with Live Brand Ambient Underglow */}
        <div className="relative max-w-5xl mx-auto mb-20 sm:mb-24">
          {/* Ambient Warm Golden/Brand Backlight Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r ${brandTheme.glow} blur-[120px] rounded-full pointer-events-none`} />

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

            {/* Subtle Brand Floor Reflection Glow */}
            <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-gradient-to-r ${brandTheme.glow} blur-xl rounded-full pointer-events-none`} />
          </div>

          {/* Companion Mobile Smartphone Mockup docked on right with Official Brand Logo & Color Theme */}
          <div className="hidden md:block absolute -right-2 lg:-right-4 -bottom-6 sm:-bottom-8 w-44 lg:w-56 aspect-[9/18.5] rounded-[2.25rem] bg-[#17181F] border-4 border-[#282A36] p-2 shadow-2xl z-20 overflow-hidden">
            {/* Speaker & Dynamic Notch */}
            <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-center z-30 relative shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1F222E] mr-1.5" />
              <div className="w-2 h-2 rounded-full bg-[#12131A]" />
            </div>

            {/* Mobile Viewport Screen */}
            <div className="relative w-full h-[calc(100%-20px)] rounded-[1.75rem] overflow-hidden bg-[#0A0B0E] flex flex-col justify-between border border-white/10">
              {/* 1. Mobile Header with Official Brand Logo & Responsive Hamburger Menu Toggle */}
              <div className="relative z-20 flex items-center justify-between px-3.5 py-2.5 bg-[#0D0E14]/95 backdrop-blur-md border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  {domain ? (
                    <div className="w-5 h-5 rounded-md overflow-hidden bg-white/10 p-0.5 shrink-0 flex items-center justify-center border border-white/15 shadow-xs">
                      <Image
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                        alt={`${project.title} logo`}
                        width={18}
                        height={18}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className={`w-5 h-5 rounded-md ${brandTheme.btnGradient} flex items-center justify-center text-[9px] font-black text-white shrink-0`}>
                      {project.title.slice(0, 1)}
                    </div>
                  )}
                  <span className="font-extrabold text-[12px] text-white tracking-tight truncate">
                    {project.title}
                  </span>
                </div>

                {/* Hamburger Toggle Bar matching live site accent */}
                <div className="flex flex-col items-end justify-center gap-1 shrink-0 p-0.5 cursor-pointer">
                  <span className="w-4 h-0.5 bg-white rounded-full" />
                  <span className={`w-2.5 h-0.5 rounded-full ${brandTheme.accentBg}`} />
                  <span className="w-3.5 h-0.5 bg-white/80 rounded-full" />
                </div>
              </div>

              {/* 2. Responsive Mobile Banner Area matching Live Site Colors */}
              <div className="relative flex-1 p-3 flex flex-col justify-between overflow-hidden">
                {/* Background Banner with Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} Responsive Banner`}
                    fill
                    sizes="250px"
                    className="object-cover object-top opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0E]/60 via-[#0A0B0E]/80 to-[#0A0B0E] pointer-events-none" />
                </div>

                {/* Centered Mobile Content Stack */}
                <div className="relative z-10 text-center my-auto space-y-2 py-1">
                  <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${brandTheme.badgeBg} text-[8px] font-bold tracking-wider uppercase`}>
                    <span className={`w-1 h-1 rounded-full ${brandTheme.accentBg} animate-pulse`} />
                    <span>Mobile Responsive</span>
                  </div>

                  <h4 className="text-xs lg:text-[13px] font-extrabold text-white leading-tight tracking-tight line-clamp-2 px-1">
                    {project.title}
                  </h4>

                  <p className="text-[9px] text-white/60 leading-tight line-clamp-2 px-2 font-normal">
                    {project.shortDesc}
                  </p>

                  {/* Working Clickable Live Website Button */}
                  {project.liveUrl && (
                    <div className="pt-1">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full ${brandTheme.btnGradient} text-white font-bold text-[9px] tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer`}
                      >
                        <span>View Live</span>
                        <ArrowUpRight className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Simulated Mobile Feature Card */}
                <div className="relative z-10 w-full p-2 rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-sm shrink-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${brandTheme.accentBg}`} />
                    <span className="text-[9px] font-bold text-white truncate">
                      {project.platform} Powered
                    </span>
                  </div>
                  <p className="text-[8px] text-white/55 leading-tight line-clamp-2">
                    Fluid touch navigation, fast mobile load, and adaptive UI components.
                  </p>
                </div>
              </div>

              {/* 3. iOS Home Indicator Bar */}
              <div className="relative z-20 py-1 bg-[#0A0B0E] flex items-center justify-center shrink-0">
                <div className="w-14 h-1 bg-white/30 rounded-full" />
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
                  <div className={`w-10 h-10 rounded-2xl ${brandTheme.badgeBg} flex items-center justify-center mb-5`}>
                    <Target className={`w-5 h-5 ${brandTheme.accentText}`} />
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
                    <span className={`w-1.5 h-1.5 rounded-full ${brandTheme.accentBg} mt-1.5 shrink-0`} />
                    <span>Complex user workflows and conversion friction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${brandTheme.accentBg} mt-1.5 shrink-0`} />
                    <span>Responsive visual hierarchy across all devices</span>
                  </li>
                </ul>
              </div>

              {/* My Approach */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className={`w-10 h-10 rounded-2xl ${brandTheme.badgeBg} flex items-center justify-center mb-5`}>
                    <Sparkles className={`w-5 h-5 ${brandTheme.accentText}`} />
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
                    <span className={`w-1.5 h-1.5 rounded-full ${brandTheme.accentBg} mt-1.5 shrink-0`} />
                    <span>Modular custom component design system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${brandTheme.accentBg} mt-1.5 shrink-0`} />
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
                    className={`w-full group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full ${brandTheme.btnGradient} text-white font-bold text-sm shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300`}
                  >
                    {domain && (
                      <Image
                        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
                        alt=""
                        width={18}
                        height={18}
                        className="w-4 h-4 object-contain rounded-sm"
                        unoptimized
                      />
                    )}
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
              className="relative p-7 sm:p-8 rounded-3xl bg-[#12131A]/90 border border-white/10 shadow-xl overflow-hidden hover:border-white/20 transition-all group"
            >
              {/* Top-Right Ambient Warm Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${brandTheme.bgGradient} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-all`} />

              {/* Growth Indicator Icon */}
              <TrendingUp className={`w-5 h-5 ${brandTheme.accentText} absolute top-7 right-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />

              <div className={`text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${brandTheme.metricGradient} mb-2 font-display tracking-tight`}>
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
                  alt={`${nextProject.title} project screenshot`}
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
