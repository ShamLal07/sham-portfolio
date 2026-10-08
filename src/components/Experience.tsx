import React from "react";
import { ArrowUpRight } from "lucide-react";
import { EXPERIENCES, RESUME_URL } from "@/data/experience";

export function Experience() {
  return (
    <section className="py-24 md:py-36 border-t border-[#E5E4DE]" id="experience">
      <div className="site-container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="eyebrow-tag mb-3">BACKGROUND &amp; CAREER</div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-[#0F1117]">
              Professional Experience
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#F1F0EC] text-[#575A65] border border-[#E5E4DE]">
              3+ years of professional experience
            </span>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0F1117] hover:text-[#2563EB] transition-colors group"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Clean Spacious Timeline */}
        <div className="relative border-l-2 border-[#E5E4DE] ml-3 sm:ml-5 pl-7 sm:pl-10 space-y-12 sm:space-y-14">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Timeline marker node with hover pulse */}
              <div className="absolute -left-[37px] sm:-left-[49px] top-2.5 w-4 h-4 rounded-full bg-white border-[3px] border-[#0F1117] group-hover:scale-130 group-hover:border-[#2563EB] transition-all shadow-xs" />

              <div className="bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-10 shadow-sm group-hover:border-[#CBD5E1] group-hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F1117] tracking-tight">
                    {exp.role} · <span className="text-[#2563EB]">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono font-bold text-[#848792] px-3 py-1 rounded-full bg-[#FAF9F7] border border-[#E5E4DE] self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#848792] mb-4 uppercase tracking-wider">
                  {exp.location}
                </div>

                <p className="text-base text-[#575A65] mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-5 border-t border-[#E5E4DE]">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#848792] mb-3">
                    Key Responsibilities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-[0.88rem] text-[#575A65] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F1117] mt-2 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
