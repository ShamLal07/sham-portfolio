import React from "react";
import { TOOLS_PLATFORMS } from "@/data/services";

export function PlatformStrip() {
  return (
    <section className="py-20 md:py-32 border-t border-[#E5E4DE]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow-tag mb-3">VERSATILITY &amp; STACK</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1117] tracking-tight mb-3">
              Tools &amp; Platforms I Work With
            </h2>
            <p className="text-base text-[#575A65] max-w-[56ch] leading-relaxed">
              I choose the platform based on the project&apos;s needs rather than
              forcing every project into the same stack.
            </p>
          </div>
        </div>

        {/* Clean compact pills row with generous spacing */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {TOOLS_PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white border-1.5 border-[#E5E4DE] text-sm sm:text-[0.95rem] font-bold text-[#0F1117] shadow-sm hover:border-[#0F1117] hover:translate-y-[-2px] hover:shadow-md transition-all cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
