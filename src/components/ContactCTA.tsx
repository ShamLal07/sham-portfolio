"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedInIcon } from "./SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export function ContactCTA() {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-transparent text-white border-t border-white/10">
      <div className="site-container">
        {/* Dark Glowing Banner Card */}
        <div className="bg-gradient-to-br from-[#1C1713] via-[#12131A] to-[#0A0B0E] border border-amber-500/20 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
            {/* Left Headline */}
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wide uppercase">
                Let&apos;s work together
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-1.5">
                Have a project in mind?
              </h2>
              <p className="text-sm sm:text-base text-white/70 mt-2 font-normal">
                I&apos;m available for freelance or full-time opportunities worldwide.
              </p>
            </div>

            {/* Right Button with Rolling Dual-Text Motion */}
            <div className="shrink-0">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-sm sm:text-base font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-6 select-none items-center justify-center">
                  <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                    Contact Me
                  </span>
                  <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-extrabold">
                    Say Hello
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-amber-200 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Bottom Social & Email Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-white/75 relative z-10">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-amber-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
