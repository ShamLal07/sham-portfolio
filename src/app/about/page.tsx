import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { WHY_WORK_WITH_ME, TOOLS_PLATFORMS } from "@/data/services";
import { EXPERIENCES, EDUCATION, RESUME_URL } from "@/data/experience";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About — Sham Lal | Web Designer & Frontend Developer",
  description:
    "Design-minded and development-focused. Learn about Sham Lal's background in web design, frontend development, CMS platforms, and responsive implementation.",
};

export default function AboutPage() {
  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36 bg-transparent text-white min-h-screen">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-4 border border-amber-500/20">
            ABOUT SHAM LAL
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.12]">
            Design-minded. Development-focused.
          </h1>

          <div className="space-y-6 text-base sm:text-xl text-white/70 leading-[1.8]">
            <p>
              I work at the intersection of web design and frontend development. My
              background includes building websites and digital experiences across CMS,
              e-commerce and modern frontend platforms.
            </p>
            <p>
              I enjoy taking a design, understanding how it should work, and turning it
              into a responsive website that is practical to maintain and ready for real
              users.
            </p>
            <p className="text-sm sm:text-base text-white/50">
              Based in India, I collaborate remotely with brands, design studios, and
              teams across India, the UK, the US, and internationally.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-sm sm:text-base font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-6 select-none items-center justify-center">
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                  View Resume
                </span>
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-extrabold">
                  Download PDF
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-amber-200 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.07] border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/[0.14] hover:border-white/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden backdrop-blur-md shadow-lg"
            >
              <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-6 select-none items-center justify-center">
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                  Get in Touch
                </span>
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-300 font-bold">
                  Let&apos;s Talk
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Practical Strengths Grid */}
        <div className="mb-28">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
              PRACTICAL APPROACH
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
            <div className="bg-[#12131A] border border-white/10 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 text-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-bold text-lg">
                    🎨
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                    Zero Loss
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  Design + Development
                </h3>
                <div className="text-xs font-bold text-amber-400 mb-3">
                  Both visual and technical sides stay connected
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  I understand both the visual design and implementation sides of websites. What is designed in Figma is what gets built in code — with zero handoff friction or misinterpretation.
                </p>
              </div>
            </div>

            <div className="bg-[#12131A] border border-white/10 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 text-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center font-bold text-lg">
                    ⚡
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    Flexible
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  Platform Flexibility
                </h3>
                <div className="text-xs font-bold text-purple-400 mb-3">
                  Stack chosen to match project needs
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  I can work with the CMS or frontend stack that fits the project — whether WordPress, Shopify, React/Next.js, Webflow, Wix, or HubSpot CMS — rather than forcing every project into the same tool.
                </p>
              </div>
            </div>

            <div className="bg-[#12131A] border border-white/10 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 text-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-lg">
                    📱
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Real Devices
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  Responsive First
                </h3>
                <div className="text-xs font-bold text-emerald-400 mb-3">
                  Tested across every viewport and device
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  Websites are designed and built with desktop, tablet, and mobile experiences in mind from day one, ensuring buttons, text, and layout adapt gracefully on touchscreens.
                </p>
              </div>
            </div>

            <div className="bg-[#12131A] border border-white/10 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 text-white">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold text-lg">
                    💬
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    Direct
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-tight">
                  Client Collaboration
                </h3>
                <div className="text-xs font-bold text-amber-400 mb-3">
                  Clear communication &amp; plain updates
                </div>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                  Comfortable understanding requirements, coordinating changes, and communicating clearly during projects so you always know where things stand without jargon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Experience */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
                CAREER TIMELINE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Work Experience
              </h2>
            </div>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-white/[0.06] text-white/80 border border-white/10 self-start sm:self-auto">
              3+ years of professional experience
            </span>
          </div>

          <div className="relative border-l-2 border-white/10 ml-3 sm:ml-5 pl-7 sm:pl-10 space-y-12 sm:space-y-14">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="relative group">
                <div className="absolute -left-[37px] sm:-left-[49px] top-2.5 w-4 h-4 rounded-full bg-[#0A0B0E] border-[3px] border-amber-400 group-hover:scale-130 transition-all shadow-md" />

                <div className="bg-[#12131A] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-lg group-hover:border-amber-400/30 transition-all text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
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

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 border-t border-white/10">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-[0.88rem] text-white/75 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-28">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
              ACADEMIC BACKGROUND
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="bg-[#12131A] border border-white/10 rounded-3xl p-8 shadow-lg text-white"
              >
                <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                  {edu.period}
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-sm text-white/65">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Tools &amp; Platforms
            </h2>
            <p className="text-base text-white/65">
              &ldquo;I choose the platform based on the project&apos;s needs rather than
              forcing every project into the same stack.&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {TOOLS_PLATFORMS.map((tp) => (
              <span
                key={tp.name}
                className="px-5 py-2.5 rounded-full bg-[#12131A] border border-white/10 text-sm font-bold text-white/85 shadow-sm hover:border-amber-400/40 hover:text-white transition-all"
              >
                {tp.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
