"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/siteConfig";

export function FloatingSocialBar() {
  const socials = [
    {
      name: "WhatsApp",
      url: `https://wa.me/917876525326?text=${encodeURIComponent(
        "Hi Sham, I'm visiting shamdev.in and I'd like to discuss a project."
      )}`,
      label: "WhatsApp • Chat with Sham",
      bgColor: "bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-white",
      shadowGlow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.45)]",
      icon: (
        <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.09-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
        </svg>
      ),
    },
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
      bgColor: "bg-white/10 hover:bg-white text-white hover:text-black border-white/20 hover:border-white",
      shadowGlow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.45)]",
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
      aria-label="Connect Directly on WhatsApp, GitHub, and LinkedIn"
    >
      {/* 1. Glass Vertical Dock on the RIGHT side */}
      <div className="flex flex-col items-center gap-3 p-2 sm:p-2.5 rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/20 shadow-[0_12px_45px_rgba(0,0,0,0.95)] hover:border-white/40 transition-all duration-300">
        {/* Availability / Connect Radar Beacon */}
        <div className="relative group/status flex items-center justify-center p-1.5 rounded-xl text-white transition-colors cursor-pointer">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_12px_#ffffff]" />
          </span>
          {/* Tooltip to the LEFT */}
          <span className="pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap bg-[#0C0C0C] text-white border border-white/20 opacity-0 group-hover/status:opacity-100 translate-x-2 group-hover/status:translate-x-0 transition-all duration-200 shadow-2xl z-50">
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
            <span className="pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide whitespace-nowrap bg-[#0C0C0C] text-white border border-white/20 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 shadow-2xl z-50 backdrop-blur-md">
              {social.label}
            </span>
          </a>
        ))}
      </div>

      {/* 2. Taller Animated Connector Wire extending down to bottom screen edge */}
      <div className="relative flex flex-col items-center w-6 h-20 sm:h-28 overflow-hidden">
        {/* Vertical Wire Line */}
        <div className="w-[2px] h-full bg-gradient-to-b from-white/80 via-white/30 to-transparent relative">
          {/* Flowing Light Beam Pulse */}
          <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
        </div>
      </div>
    </aside>
  );
}
