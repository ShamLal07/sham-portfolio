import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, PROCESS_STEPS } from "@/data/services";
import { PlatformStrip } from "@/components/PlatformStrip";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Services — Sham Lal | Web Designer & Frontend Developer",
  description:
    "Professional web design, frontend development, custom WordPress, Shopify storefronts, CMS solutions, and ongoing website improvements.",
};

export default function ServicesPage() {
  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <div className="eyebrow-tag mb-4">SERVICES &amp; CAPABILITIES</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1117] mb-6 leading-tight">
            Services
          </h1>
          <p className="text-base sm:text-xl text-[#575A65] leading-relaxed">
            From design and development to CMS, e-commerce and ongoing website
            improvements. Focused on usability, clean code, and practical client
            maintenance.
          </p>
        </div>

        {/* In-depth 6 Services List with generous padding */}
        <div className="space-y-12 mb-28">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-12 shadow-sm hover:border-[#CBD5E1] hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-base font-mono font-extrabold text-[#0F1117]">
                    {service.number}
                  </span>
                  <div className="h-px w-8 bg-[#E5E4DE]" />
                  <span className="text-xs font-bold text-[#2563EB]">
                    {service.platforms.join(" · ")}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0F1117] tracking-tight mb-4">
                  {service.title}
                </h2>

                <p className="text-base text-[#575A65] leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0F1117] hover:text-[#2563EB] transition-colors py-1 group"
                >
                  <span>Discuss a project in this area</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:col-span-7 bg-[#FAF9F7] border border-[#E5E4DE] rounded-2xl p-7 sm:p-9">
                <div className="text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-5 flex items-center justify-between">
                  <span>What&apos;s Included</span>
                  <span className="text-[11px] font-semibold text-[#2563EB]">Core Deliverables</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#424550] bg-white p-3.5 rounded-xl border border-[#E5E4DE]/80 leading-relaxed shadow-2xs hover:border-[#CBD5E1] transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
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
            <div className="eyebrow-tag mb-3">HOW IT WORKS</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1117] tracking-tight">
              My 5-Step Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-white border-1.5 border-[#E5E4DE] rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:border-[#0F1117] transition-all"
              >
                <div>
                  <div className="font-mono text-sm font-extrabold text-[#0F1117] mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F1117] mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#575A65] leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Strip */}
        <PlatformStrip />
      </div>

      <ContactCTA />
    </div>
  );
}
