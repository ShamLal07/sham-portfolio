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
    <div className="pt-14 pb-28 md:pt-20 md:pb-36">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-4xl mb-24">
          <div className="eyebrow-tag mb-4">ABOUT SHAM LAL</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1117] mb-8 leading-[1.12]">
            Design-minded. Development-focused.
          </h1>

          <div className="space-y-6 text-base sm:text-xl text-[#575A65] leading-[1.8]">
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
            <p className="text-sm sm:text-base text-[#848792]">
              Based in India, I collaborate remotely with brands, design studios, and
              teams across India, the UK, the US, and internationally.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Practical Strengths Grid */}
        <div className="mb-28">
          <div className="mb-12">
            <div className="eyebrow-tag mb-3">PRACTICAL APPROACH</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1117] tracking-tight">
              Why Work With Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
            <div className="bg-white border-1.5 border-[#E5E4DE] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#0F1117] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    🎨
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Zero Loss
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1117] mb-1.5 tracking-tight">
                  Design + Development
                </h3>
                <div className="text-xs font-bold text-[#2563EB] mb-3">
                  Both visual and technical sides stay connected
                </div>
                <p className="text-xs sm:text-sm text-[#575A65] leading-relaxed">
                  I understand both the visual design and implementation sides of websites. What is designed in Figma is what gets built in code — with zero handoff friction or misinterpretation.
                </p>
              </div>
            </div>

            <div className="bg-white border-1.5 border-[#E5E4DE] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#0F1117] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                    ⚡
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    Flexible
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1117] mb-1.5 tracking-tight">
                  Platform Flexibility
                </h3>
                <div className="text-xs font-bold text-[#7C3AED] mb-3">
                  Stack chosen to match project needs
                </div>
                <p className="text-xs sm:text-sm text-[#575A65] leading-relaxed">
                  I can work with the CMS or frontend stack that fits the project — whether WordPress, Shopify, React/Next.js, Webflow, Wix, or HubSpot CMS — rather than forcing every project into the same tool.
                </p>
              </div>
            </div>

            <div className="bg-white border-1.5 border-[#E5E4DE] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#0F1117] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    📱
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Real Devices
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1117] mb-1.5 tracking-tight">
                  Responsive First
                </h3>
                <div className="text-xs font-bold text-[#059669] mb-3">
                  Tested across every viewport and device
                </div>
                <p className="text-xs sm:text-sm text-[#575A65] leading-relaxed">
                  Websites are designed and built with desktop, tablet, and mobile experiences in mind from day one, ensuring buttons, text, and layout adapt gracefully on touchscreens.
                </p>
              </div>
            </div>

            <div className="bg-white border-1.5 border-[#E5E4DE] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#0F1117] hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    💬
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    Direct
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1117] mb-1.5 tracking-tight">
                  Client Collaboration
                </h3>
                <div className="text-xs font-bold text-[#D97706] mb-3">
                  Clear communication &amp; plain updates
                </div>
                <p className="text-xs sm:text-sm text-[#575A65] leading-relaxed">
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
              <div className="eyebrow-tag mb-3">CAREER TIMELINE</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1117] tracking-tight">
                Work Experience
              </h2>
            </div>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#F1F0EC] text-[#575A65] border border-[#E5E4DE] self-start sm:self-auto">
              3+ years of professional experience
            </span>
          </div>

          <div className="relative border-l-2 border-[#E5E4DE] ml-3 sm:ml-5 pl-7 sm:pl-10 space-y-12 sm:space-y-14">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="relative group">
                <div className="absolute -left-[37px] sm:-left-[49px] top-2.5 w-4 h-4 rounded-full bg-white border-[3px] border-[#0F1117] group-hover:scale-130 group-hover:border-[#2563EB] transition-all" />

                <div className="bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-10 shadow-sm group-hover:border-[#CBD5E1] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F1117]">
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

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 border-t border-[#E5E4DE]">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-[0.88rem] text-[#575A65] flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F1117] mt-2 flex-shrink-0" />
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
            <div className="eyebrow-tag mb-3">ACADEMIC BACKGROUND</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1117] tracking-tight">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 shadow-sm"
              >
                <div className="text-xs font-mono font-bold text-[#848792] mb-2">
                  {edu.period}
                </div>
                <h3 className="text-lg font-bold text-[#0F1117] mb-1.5">
                  {edu.degree}
                </h3>
                <p className="text-sm text-[#575A65]">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1117] tracking-tight mb-3">
              Tools &amp; Platforms
            </h2>
            <p className="text-base text-[#575A65]">
              &ldquo;I choose the platform based on the project&apos;s needs rather than
              forcing every project into the same stack.&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {TOOLS_PLATFORMS.map((tp) => (
              <span
                key={tp.name}
                className="px-5 py-2.5 rounded-full bg-white border-1.5 border-[#E5E4DE] text-sm font-bold text-[#0F1117] shadow-xs"
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
