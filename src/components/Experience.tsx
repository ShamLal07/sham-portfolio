"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Download,
  Layers,
  ListFilter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES, EDUCATION, RESUME_URL, ExperienceItem } from "@/data/experience";

// Tech stack tags mapped to each company
const EXPERIENCE_STACK: Record<string, string[]> = {
  "Eminence Technology": ["Shopify Liquid", "Figma", "JavaScript", "HTML5", "CSS3 / SCSS", "Responsive QA"],
  "Web Forte Technologies": ["WordPress", "ACF Pro", "Figma", "Webflow", "HubSpot", "JavaScript", "Performance"],
  "Vqcodes Software Solutions LLP": ["UI/UX Layouts", "Photoshop", "HTML/CSS", "Wireframing", "Component Design"],
  "Bepoj Technology": ["Web Styling", "Graphic Design", "Photoshop", "Illustrator", "HTML5 / CSS3"],
};

function getInitials(name: string) {
  const words = name.split(" ");
  return words.length > 1 ? `${words[0][0]}${words[1][0]}` : name.slice(0, 2);
}

export function Experience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"spotlight" | "timeline">("spotlight");

  const activeExp = EXPERIENCES[selectedIndex];
  const activeStack = EXPERIENCE_STACK[activeExp.company] || [];

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#000000] text-white border-t border-white/10 relative overflow-hidden" id="experience">
      {/* Background Studio Glow Meshes */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] text-white text-xs font-bold mb-3 border border-white/20 font-mono">
              <Briefcase className="w-3.5 h-3.5 text-white" />
              <span>CAREER &amp; EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
              Work History &amp; Track Record
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mt-3 leading-relaxed font-normal">
              4+ years of professional development and UI/UX design delivering responsive Shopify storefronts, custom WordPress themes, and high-performance client sites.
            </p>
          </div>

          {/* View Mode Toggle & Resume CTA */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-[#0C0C0C] p-1 rounded-full border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setViewMode("spotlight")}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  viewMode === "spotlight"
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Interactive View
              </button>
              <button
                type="button"
                onClick={() => setViewMode("timeline")}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                  viewMode === "timeline"
                    ? "bg-white text-black shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Timeline View
              </button>
            </div>

            {/* Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.07] hover:bg-white/[0.15] border border-white/15 hover:border-white/40 text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-white group-hover:-translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* VIEW 1: SPOTLIGHT MASTER-DETAIL INTERACTIVE UX (Default)      */}
        {/* ============================================================== */}
        {viewMode === "spotlight" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column: Interactive Company Switcher (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {EXPERIENCES.map((exp, idx) => {
                const isSelected = selectedIndex === idx;

                return (
                  <motion.button
                    key={exp.company}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-[#141414] border-white/40 shadow-[0_10px_30px_rgba(255,255,255,0.05)] ring-1 ring-white/30"
                        : "bg-[#0C0C0C] border-white/10 hover:border-white/20 hover:bg-[#141414]/60"
                    }`}
                  >
                    {/* Active Gradient Side Indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeCompanyIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-white"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Monogram Icon */}
                      <div
                        className={`w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-sm ${
                          isSelected ? "bg-white text-black font-extrabold" : ""
                        }`}
                      >
                        {getInitials(exp.company)}
                      </div>

                      <div className="min-w-0">
                        <h3 className={`font-bold text-sm sm:text-base tracking-tight truncate ${isSelected ? "text-white" : "text-zinc-300"}`}>
                          {exp.company}
                        </h3>
                        <p className="text-xs text-zinc-400 truncate mt-0.5 font-normal">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-mono font-bold text-zinc-400 block">
                        {exp.period.split("–")[0].trim()}
                      </span>
                      <span className="text-[10px] text-zinc-500 block mt-0.5">
                        {exp.location.split(",")[0]}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Column: Active Role Spotlight Showcase (7 cols) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.company}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl bg-[#0C0C0C] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Top White Glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-white border border-white/20">
                          EXPERIENCE
                        </span>
                        <div className="flex items-center gap-1 text-xs text-zinc-400">
                          <MapPin className="w-3 h-3 text-white" />
                          <span>{activeExp.location}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {activeExp.role}
                      </h3>
                      <p className="text-base font-bold text-zinc-300 mt-0.5">
                        {activeExp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 self-start sm:self-auto text-xs font-mono font-bold text-zinc-300 shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <span>{activeExp.period}</span>
                    </div>
                  </div>

                  {/* Role Narrative Overview */}
                  <div className="py-6 border-b border-white/10">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {activeExp.description}
                    </p>
                  </div>

                  {/* Key Highlights & Achievements */}
                  <div className="py-6 border-b border-white/10">
                    <h4 className="text-xs uppercase font-extrabold text-zinc-400 tracking-wider mb-4">
                      Key Highlights &amp; Accomplishments
                    </h4>
                    <ul className="space-y-3">
                      {activeExp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Applied */}
                  <div className="pt-6">
                    <h4 className="text-xs uppercase font-extrabold text-zinc-400 tracking-wider mb-3">
                      Technologies &amp; Tools Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/[0.05] border border-white/10 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* VIEW 2: CONTINUOUS VISUAL TIMELINE                             */
          /* ============================================================== */
          <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 pl-7 sm:pl-10 space-y-10 sm:space-y-12">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-zinc-400 to-transparent pointer-events-none"
            />

            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-[37px] sm:-left-[51px] top-3 w-4 h-4 rounded-full bg-[#000000] border-[3px] border-white group-hover:scale-125 group-hover:shadow-[0_0_14px_rgba(255,255,255,0.8)] transition-all duration-300" />

                <div className="bg-[#0C0C0C] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-white/30 transition-all text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                      {exp.role} · <span className="text-zinc-300">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono font-bold text-zinc-300 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs text-zinc-400 mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-xs sm:text-[0.84rem] text-zinc-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ============================================================== */}
        {/* EDUCATION & CREDENTIALS BANNER STRIP                           */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#0C0C0C] border border-white/10 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold text-zinc-400 tracking-wider">
                  Academic Foundation
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Education &amp; Computer Science Degree
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 md:max-w-xl">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10"
                >
                  <p className="text-xs font-bold text-white">{edu.degree}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">{edu.institution}</p>
                  <span className="inline-block mt-1 text-[10px] font-mono text-zinc-300">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
