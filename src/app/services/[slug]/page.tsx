import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Zap,
  Layers,
  ChevronRight,
  ExternalLink,
  Award,
} from "lucide-react";
import { ALL_SERVICES_CATALOG, getServiceBySlug } from "@/data/servicesCatalog";
import { PROJECTS } from "@/data/projects";
import { ServiceBrandIcon } from "@/components/ServiceBrandIcon";
import { ServiceFaqAccordion } from "@/components/ServiceFaqAccordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_SERVICES_CATALOG.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found — Sham Lal" };
  }

  return {
    title: `${service.title} | Sham Lal — Web Designer & Web Developer`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Sham Lal Services`,
      description: service.shortDesc,
      type: "website",
      url: `https://shamdev.in/services/${service.slug}`,
    },
    alternates: {
      canonical: `https://shamdev.in/services/${service.slug}`,
    },
  };
}

export default async function SingleServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Find relevant projects matching this service platform
  const relevantProjects = PROJECTS.filter((p) =>
    service.matchingPlatforms.some(
      (plat) => p.platform.toLowerCase().includes(plat.toLowerCase()) || p.category.toLowerCase().includes(plat.toLowerCase())
    )
  ).slice(0, 3);

  // Previous & Next service navigation
  const currentIndex = ALL_SERVICES_CATALOG.findIndex((s) => s.slug === service.slug);
  const prevService =
    currentIndex > 0
      ? ALL_SERVICES_CATALOG[currentIndex - 1]
      : ALL_SERVICES_CATALOG[ALL_SERVICES_CATALOG.length - 1];
  const nextService =
    currentIndex < ALL_SERVICES_CATALOG.length - 1
      ? ALL_SERVICES_CATALOG[currentIndex + 1]
      : ALL_SERVICES_CATALOG[0];

  // Structured Schema (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://shamdev.in/services/${service.slug}#service`,
        name: service.title,
        description: service.shortDesc,
        provider: {
          "@type": "Person",
          name: "Sham Lal",
          jobTitle: "Web Designer & Web Developer",
          url: "https://shamdev.in",
        },
        serviceType: service.categoryLabel,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://shamlal.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://shamlal.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://shamlal.com/services/${service.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0A0A0E] text-white pt-24 sm:pt-28 pb-24 overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 sm:mb-12 font-medium">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/services" className="hover:text-amber-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          {/* ================================================================= */}
          {/* 1. HERO SECTION */}
          {/* ================================================================= */}
          <div className="relative rounded-3xl bg-[#12131A] border border-white/10 p-7 sm:p-10 lg:p-14 mb-16 sm:mb-20 overflow-hidden shadow-2xl">
            {/* Ambient Brand Color Underglow */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20"
              style={{ backgroundColor: service.brandColor }}
            />

            <div className="relative z-10 max-w-4xl">
              {/* Eyebrow with Brand Icon */}
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-6">
                <div
                  className={`w-7 h-7 rounded-lg ${service.iconBg} border ${service.iconBorder} flex items-center justify-center p-1 shrink-0`}
                >
                  <ServiceBrandIcon id={service.id} className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                  {service.brandName} • {service.categoryLabel}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                <span className="text-[11px] font-semibold text-emerald-400 hidden sm:inline">
                  Available Now
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.12]">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6">
                {service.tagline}
              </p>

              {/* Deep Overview Paragraph */}
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 font-normal max-w-3xl">
                {service.heroDesc}
              </p>

              {/* Key Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 pt-6 border-t border-white/10">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>TIMEFRAME</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {service.deliveryTime}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>GUARANTEE</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    30 Days Warranty
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>SPEED AUDIT</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    90+ PageSpeed
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>DELIVERY</span>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    Direct 1-on-1 Senior
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  <span>Book This Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm transition-all"
                >
                  <span>View Capabilities</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* 2. CORE CAPABILITIES (6 BENTO CARDS) */}
          {/* ================================================================= */}
          <section id="capabilities" className="mb-20 sm:mb-24 scroll-mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3" />
                <span>WHAT&apos;S INCLUDED</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Comprehensive Capabilities & Deliverables
              </h2>
              <p className="text-sm sm:text-base text-white/60">
                Every project is delivered with enterprise precision, clean code, and zero compromises on speed or aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#12131A] border border-white/10 p-6 sm:p-7 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400 font-bold text-sm mb-4 group-hover:bg-amber-500/10 group-hover:border-amber-400/40 transition-all">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-5">
                      {cap.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-white/5">
                    {cap.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* 3. PROVEN 5-STEP WORKFLOW */}
          {/* ================================================================= */}
          <section className="mb-20 sm:mb-24">
            <div className="rounded-3xl bg-[#12131A] border border-white/10 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                  <span>HOW I WORK</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                  My 5-Step Delivery Process
                </h2>
                <p className="text-sm sm:text-base text-white/60">
                  A transparent, collaborative workflow engineered to eliminate surprises and ship on schedule.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-4 relative">
                {[
                  {
                    step: "01",
                    name: "Discovery & Scope",
                    desc: "Align on goals, audience, deliverables, and technical architecture.",
                  },
                  {
                    step: "02",
                    name: "Figma Wireframes",
                    desc: "Interactive visual design and UI prototype with client feedback loops.",
                  },
                  {
                    step: "03",
                    name: "Precision Build",
                    desc: "Pixel-accurate coding in the target platform with semantic structure.",
                  },
                  {
                    step: "04",
                    name: "Speed & Testing",
                    desc: "Cross-device responsiveness and 90+ PageSpeed performance tuning.",
                  },
                  {
                    step: "05",
                    name: "Launch & Support",
                    desc: "Live deployment, recorded video training, and 30-day warranty.",
                  },
                ].map((st, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-400/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-2xl font-extrabold text-amber-400/50 mb-3">
                        {st.step}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2">{st.name}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================================================================= */}
          {/* 4. RELEVANT PORTFOLIO CASE STUDIES */}
          {/* ================================================================= */}
          {relevantProjects.length > 0 && (
            <section className="mb-20 sm:mb-24">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <span>PROVEN RESULTS</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Real Work in {service.brandName}
                  </h2>
                </div>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {relevantProjects.map((proj) => (
                  <div
                    key={proj.slug}
                    className="rounded-2xl bg-[#12131A] border border-white/10 overflow-hidden hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                  >
                    <div className="relative aspect-video w-full bg-[#181A24] overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-white border border-white/15">
                        {proj.platform}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-xs text-white/60 mb-4 line-clamp-2">
                          {proj.shortDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <Link
                          href={`/work/${proj.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:underline"
                        >
                          <span>Read Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/40 hover:text-white inline-flex items-center gap-1"
                          >
                            <span>Live Site</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================================================================= */}
          {/* 5. TECH STACK & TOOLS */}
          {/* ================================================================= */}
          <section className="mb-20 sm:mb-24 text-center">
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">
              TECHNOLOGIES & FRAMEWORKS EMPLOYED FOR THIS SERVICE
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
              {service.techStack.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-white/[0.04] text-white/80 border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* ================================================================= */}
          {/* 6. FREQUENTLY ASKED QUESTIONS */}
          {/* ================================================================= */}
          <section className="mb-20 sm:mb-24">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                <span>FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Got questions about {service.title}? Here are answers to common client questions.
              </p>
            </div>

            <ServiceFaqAccordion faqs={service.faqs} serviceTitle={service.title} />
          </section>

          {/* ================================================================= */}
          {/* 7. BOTTOM CONSULTATION BANNER */}
          {/* ================================================================= */}
          <div className="relative rounded-3xl border border-amber-500/30 bg-[#12131A] p-8 sm:p-12 lg:p-14 mb-16 shadow-[0_10px_40px_-10px_rgba(245,120,30,0.2)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full blur-[80px] pointer-events-none opacity-20"
              style={{ backgroundColor: service.brandColor }}
            />

            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET&apos;S WORK TOGETHER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Ready to launch your {service.title}?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-normal max-w-xl leading-relaxed">
                Contact me directly to discuss your project requirements, scope, timeline, and receive a free quote with zero obligation.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href={`/contact?service=${service.slug}`}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:scale-[1.03] active:scale-95 transition-all duration-300"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ================================================================= */}
          {/* 8. PREV / NEXT SERVICE SWITCHER */}
          {/* ================================================================= */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/services/${prevService.slug}`}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors w-full sm:w-auto text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-all shrink-0">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">
                  Previous Service
                </span>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {prevService.title}
                </span>
              </div>
            </Link>

            <Link
              href="/services"
              className="text-xs font-semibold text-white/50 hover:text-white px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all"
            >
              All {ALL_SERVICES_CATALOG.length} Services
            </Link>

            <Link
              href={`/services/${nextService.slug}`}
              className="flex items-center justify-end gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors w-full sm:w-auto text-right group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-white/40 block">
                  Next Service
                </span>
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {nextService.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-all shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
