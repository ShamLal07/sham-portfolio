import React from "react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { EXPERIENCES, RESUME_URL } from "@/data/experience";

export function Experience() {
  return (
    <section className="py-20 md:py-28 bg-transparent text-white border-t border-white/10" id="experience">
      <div className="site-container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER &amp; EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white">
              Work History
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/[0.06] text-white/80 border border-white/10">
              3+ years of professional experience
            </span>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-amber-400/50 hover:bg-white/[0.12] transition-all overflow-hidden shrink-0 shadow-md"
            >
              <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-5 select-none items-center justify-center">
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                  View Full CV
                </span>
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-300 font-bold">
                  Download PDF
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-amber-400 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Clean Spacious Timeline */}
        <div className="relative border-l-2 border-white/10 ml-3 sm:ml-5 pl-7 sm:pl-10 space-y-10 sm:space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[37px] sm:-left-[49px] top-2.5 w-4 h-4 rounded-full bg-[#0A0B0E] border-[3px] border-amber-400 group-hover:scale-125 transition-all shadow-md" />

              <div className="bg-[#12131A] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-lg hover:border-amber-400/30 transition-all text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role} · <span className="text-amber-400">{exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono font-bold text-white/60 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <div className="text-xs font-semibold text-white/40 mb-4 uppercase tracking-wider">
                  {exp.location}
                </div>

                <p className="text-base text-white/70 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-5 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                    Key Highlights &amp; Responsibilities:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-[0.88rem] text-white/75 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
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
