import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, PROCESS_STEPS } from "@/data/services";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Services — Sham Lal | Web Designer & Frontend Developer",
  description:
    "Professional web design, frontend development, custom WordPress, Shopify storefronts, CMS solutions, and ongoing website improvements.",
};

function getPlatformBadgeStyle(name: string) {
  const n = name.toLowerCase();
  if (n.includes("html")) return "text-orange-400 border-orange-500/25 bg-orange-500/10";
  if (n.includes("css")) return "text-sky-400 border-sky-500/25 bg-sky-500/10";
  if (n.includes("js") || n.includes("javascript")) return "text-yellow-400 border-yellow-500/25 bg-yellow-500/10";
  if (n.includes("react")) return "text-cyan-400 border-cyan-500/25 bg-cyan-500/10";
  if (n.includes("next")) return "text-white border-white/20 bg-white/10";
  if (n.includes("node")) return "text-emerald-400 border-emerald-500/25 bg-emerald-500/10";
  if (n.includes("mongo")) return "text-green-400 border-green-500/25 bg-green-500/10";
  if (n.includes("postgres") || n.includes("sql")) return "text-blue-400 border-blue-500/25 bg-blue-500/10";
  if (n.includes("tailwind")) return "text-teal-300 border-teal-500/25 bg-teal-500/10";
  if (n.includes("figma")) return "text-pink-400 border-pink-500/25 bg-pink-500/10";
  if (n.includes("wordpress")) return "text-blue-400 border-blue-500/25 bg-blue-500/10";
  if (n.includes("shopify")) return "text-emerald-300 border-emerald-500/25 bg-emerald-500/10";
  if (n.includes("webflow")) return "text-indigo-400 border-indigo-500/25 bg-indigo-500/10";
  if (n.includes("rest") || n.includes("api")) return "text-slate-300 border-white/15 bg-white/5";
  return "text-white/80 border-white/15 bg-white/5";
}

export default function ServicesPage() {
  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36 bg-transparent text-white min-h-screen relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-5">
            SERVICES &amp; CAPABILITIES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-tight">
            Services
          </h1>
          <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-2xl">
            From design and development to CMS, e-commerce and ongoing website
            improvements. Focused on usability, clean code, and practical client
            maintenance.
          </p>
        </div>

        {/* 100% Matching Services Card List */}
        <div className="space-y-10 mb-28">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="relative rounded-[28px] border border-amber-500/30 bg-[#0E0F15] p-7 sm:p-10 lg:p-12 shadow-[0_0_35px_-10px_rgba(245,120,30,0.18)] hover:border-amber-400/60 hover:shadow-[0_0_50px_-5px_rgba(245,120,30,0.28)] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-hidden group"
            >
              {/* Subtle ambient amber corner glow */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Column: Number, Tech Pills, Title, Description, and CTA */}
              <div className="lg:col-span-5 relative z-10">
                <div className="flex items-center gap-4 mb-5 flex-wrap">
                  {/* Glowing Double-Stroke Neon Outline Number matching reference */}
                  <span
                    className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent tracking-tighter shrink-0 select-none"
                    style={{
                      WebkitTextStroke: "1.5px #F59E0B",
                      textShadow: "0 0 20px rgba(245, 158, 11, 0.3)",
                    }}
                  >
                    {service.number}
                  </span>

                  {/* Individual Colored Tech Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.platforms.map((plat) => (
                      <span
                        key={plat}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPlatformBadgeStyle(
                          plat
                        )}`}
                      >
                        {plat}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-7 max-w-md">
                  {service.description}
                </p>

                {/* Vibrant Sunset Pill CTA Button matching reference image */}
                <Link
                  href="/contact"
                  className="group/btn relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(245,120,30,0.4)] hover:shadow-[0_6px_25px_rgba(245,120,30,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
                >
                  <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-5 select-none items-center justify-center">
                    <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover/btn:-translate-y-[140%]">
                      Discuss a project in this area
                    </span>
                    <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover/btn:translate-y-0 text-amber-100 font-extrabold">
                      Start Project Consultation
                    </span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-white transform transition-transform duration-300 group-hover/btn:translate-x-1 shrink-0" />
                </Link>
              </div>

              {/* Right Column: Inset Deliverables Card (2x2 Grid) matching reference image */}
              <div className="lg:col-span-7 bg-[#090A0F] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-inner relative z-10">
                <div className="text-xs font-bold uppercase tracking-wider mb-5 flex items-center">
                  <span className="text-white font-extrabold">WHAT&apos;S INCLUDED</span>
                  <span className="text-amber-400 mx-2 font-bold">•</span>
                  <span className="text-amber-400 font-extrabold">CORE DELIVERABLES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs sm:text-[0.84rem] text-white/90 bg-[#12141D] p-3.5 rounded-xl border border-white/10 leading-tight shadow-xs hover:border-amber-400/40 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-amber-400 stroke-[3]" />
                      </div>
                      <span className="font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-28">
          <div className="mb-14">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              My 5-Step Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#0E0F15] border border-white/10 rounded-2xl p-7 flex flex-col justify-between shadow-lg hover:border-amber-400/40 hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="font-mono text-sm font-extrabold text-amber-400 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <ContactCTA />
    </div>
  );
}
