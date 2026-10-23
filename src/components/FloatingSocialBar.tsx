"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";

export function FloatingSocialBar() {
  const socials = [
    {
      name: "GitHub",
      url: SITE_CONFIG.github,
      label: "GitHub • ShamLal07",
      bgColor: "bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-white",
      shadowGlow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.45)]",
      icon: (
        <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: SITE_CONFIG.linkedin,
      label: "LinkedIn • Sham Lal",
      bgColor: "bg-[#0A66C2] hover:bg-[#0077B5] text-white border-[#0A66C2]/60 hover:border-cyan-300",
      shadowGlow: "hover:shadow-[0_0_24px_rgba(10,102,194,0.65)]",
      icon: (
        <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37z" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className="fixed bottom-0 right-3 sm:right-6 md:right-8 z-40 flex flex-col items-center gap-2.5 select-none"
      aria-label="Connect Directly on GitHub, Upwork, and LinkedIn"
    >
      {/* 1. Glass Vertical Dock on the RIGHT side */}
      <div className="flex flex-col items-center gap-3 p-2 sm:p-2.5 rounded-2xl bg-[#12141F]/90 backdrop-blur-2xl border border-white/20 shadow-[0_12px_45px_rgba(0,0,0,0.85)] hover:border-amber-400/50 transition-all duration-300">
        {/* Availability / Connect Radar Beacon */}
        <div className="relative group/status flex items-center justify-center p-1.5 rounded-xl text-emerald-400 transition-colors cursor-pointer">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_12px_#10B981]" />
          </span>
          {/* Tooltip to the LEFT */}
          <span className="pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap bg-[#12131A] text-emerald-300 border border-emerald-500/40 opacity-0 group-hover/status:opacity-100 translate-x-2 group-hover/status:translate-x-0 transition-all duration-200 shadow-2xl z-50">
            Available • Let&apos;s Connect
          </span>
        </div>

        {/* Separator Accent */}
        <div className="w-6 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Social Icons List with Authentic Real Brand Badges */}
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`relative group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl border shadow-md transition-all duration-300 active:scale-95 ${social.bgColor} ${social.shadowGlow}`}
          >
            {social.icon}

            {/* Slide-out Tooltip to the LEFT */}
            <span className="pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap bg-[#12141F] text-white border border-white/20 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 shadow-2xl z-50 backdrop-blur-md">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* 2. Taller Animated Connector Wire extending down to bottom screen edge */}
      <div className="relative flex flex-col items-center w-6 h-20 sm:h-28 overflow-hidden">
        {/* Vertical Wire Line */}
        <div className="w-[2px] h-full bg-gradient-to-b from-[#F5781E] via-amber-400/50 to-transparent relative">
          {/* Flowing Light Beam Pulse */}
          <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
        </div>
      </div>
    </aside>
  );
}
