import React from "react";
import { PROCESS_STEPS } from "@/data/services";

export function Process() {
  return (
    <section className="py-24 md:py-36 border-t border-[#E5E4DE] bg-[#F7F6F2]">
      <div className="site-container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">HOW I WORK</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-[#0F1117]">
              My Process
            </h2>
          </div>
          <p className="text-[#575A65] text-base max-w-[44ch] md:text-right leading-relaxed">
            A clear, dependable progression from first concept through to launch and handover.
          </p>
        </div>

        {/* Process Timeline: Spacious layout that doesn't cram text */}
        <div className="relative">
          {/* Timeline Cards Grid: 1 col on mobile, 2 cols on tablet, 3/5 cols on wide screens with spacious padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-7 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white border-1.5 border-[#E5E4DE] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#0F1117] hover:shadow-md hover:translate-y-[-4px] transition-all group"
              >
                <div>
                  {/* Step indicator node with active hover effect */}
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9F7] border-1.5 border-[#D8D7D1] flex items-center justify-center font-mono font-extrabold text-sm text-[#0F1117] mb-6 group-hover:bg-[#0F1117] group-hover:text-white group-hover:border-[#0F1117] transition-all shadow-inner">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1117] tracking-tight mb-2.5">
                    {step.name}
                  </h3>

                  <p className="text-xs sm:text-[0.82rem] font-bold text-[#2563EB] mb-3 leading-snug">
                    {step.summary}
                  </p>

                  <p className="text-xs sm:text-[0.85rem] text-[#575A65] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E5E4DE]/60 text-[11px] font-bold uppercase tracking-wider text-[#848792]">
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
