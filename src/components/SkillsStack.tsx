"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/* ==========================================================================
   Authentic Brand Vector Logos
   ========================================================================== */

function WordPressLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <path
        d="M12 3.4a8.6 8.6 0 0 0-4.9 15.7l3.6-9.9 3.7 10.1A8.6 8.6 0 0 0 12 3.4zm-5.7 7.7a7 7 0 0 1 .9-3.2l3.2 8.8-4.1-5.6zm10.5 5.5l-2.8-8.2c.4 0 .8-.1.8-.1a.3.3 0 0 0 .3-.3.3.3 0 0 0-.3-.3s-.9.1-1.6.1c-.6 0-1.6-.1-1.6-.1a.3.3 0 0 0-.3.3.3.3 0 0 0 .3.3s.4 0 .7.1l1.1 3-1.6 4.8L7.5 6.4a7 7 0 0 1 10.3 10.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function ShopifyLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <path
        d="M18.8 4.6c-.1-.3-.3-.4-.5-.4l-2.4-.2s-1.4-2.6-1.7-3c-.3-.4-.9-.6-1.4-.5-.1 0-.3.1-.4.2C12.2.9 10.9 2.2 9.9 3.5l-3.3 1c-.7.2-1.2.9-1.2 1.6L4 21.8l13.9 2.2 6.1-3.2L18.8 4.6z"
        fill="#95BF47"
      />
      <path
        d="M14.5 4.1L12.3 3.9C11.5 5.1 10.3 6.6 9.4 8l5.8-.8c-.3-1-.5-2-.7-3.1z"
        fill="#5E8E3E"
      />
      <path
        d="M12.9 8.8l-4.5.6c-.7 1-1.3 2.1-1.8 3.2l6.8-.9c-.2-1-.4-2-.5-2.9z"
        fill="#5E8E3E"
      />
      <path
        d="M12.6 11.2c-.4-.2-1.3-.4-2-.4-1.5 0-2.4.8-2.4 2 0 2.2 3.3 2.3 3.3 4.2 0 .8-.6 1.4-1.6 1.4-1 0-1.8-.5-2.2-.9l-.4 1.7c.6.5 1.6.8 2.5.8 2 0 3.3-1.1 3.3-2.7 0-2.5-3.4-2.4-3.4-4.2 0-.6.5-1.1 1.3-1.1.7 0 1.3.2 1.7.4l.2-1.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function WebflowLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#146EF5" />
      <path
        d="M17.8 7.3c-.8.5-1.5 1.1-2 1.8-.1-.7-.3-1.4-.7-1.9-.8-.9-1.9-1.4-3.1-1.4-.8 0-1.6.2-2.3.7-.8.5-1.4 1.2-1.8 2.1L6.7 13c-.1-.7-.2-1.3-.2-2 0-2.3.9-3.9 2.5-4.8 1-.6 2.1-.9 3.3-.9 1.7 0 3.1.6 4.3 1.8.4.4.8.9 1.2 1.2zm4.7 1.8c-.2-.4-.4-.8-.7-1.1-.9-.9-2.1-1.4-3.5-1.4-.7 0-1.4.1-2.1.4-.7.3-1.3.7-1.8 1.3l-2.4 3.7-1.8-4.5c-.3-.7-.7-1.3-1.2-1.7-.8-.7-1.8-1-2.9-1-1.3 0-2.5.4-3.5 1.3C1.6 8.3.9 9.8.9 11.7c0 1.2.2 2.3.7 3.3l4.3-7.5c.3-.5.7-.9 1.2-1.2.6-.4 1.3-.6 2-.6.9 0 1.7.3 2.3.9.5.5.8 1.2 1 2l-3.8 6.6c-.3.5-.7.9-1.2 1.2-.6.4-1.3.6-2 .6-.4 0-.8-.1-1.2-.2l1.6 2.8c.6.2 1.3.3 2 .3 1.6 0 2.9-.5 4-1.6.6-.6 1.1-1.3 1.5-2.2l2.3-4.1 1.7 4.2c.4.9.9 1.6 1.6 2.1.8.6 1.7.9 2.8.9 1.4 0 2.6-.5 3.6-1.5.9-.9 1.5-2.1 1.7-3.5l.2-1.8c0-.7-.1-1.4-.4-2.1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function WixLogo() {
  return (
    <div className="w-8 h-8 rounded-lg bg-[#0C1222] border border-white/20 flex items-center justify-center relative">
      <span className="font-black text-white text-sm tracking-tight">
        W<span className="text-[#FBBF24]">i</span>x
      </span>
    </div>
  );
}

function HubSpotLogo() {
  return (
    <svg className="w-8 h-8 text-[#FF7A59]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.8 8.5c0-.8-.6-1.5-1.5-1.5-.4 0-.8.2-1.1.5l-2.8-1.7V4.5c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8v1.3L9 7.5C8.7 7.2 8.3 7 7.9 7c-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8v3.4c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2 .8 0 1.5-.5 1.8-1.2h3.4c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2 0-.8-.5-1.5-1.2-1.8v-3.4c.7-.3 1.2-1 1.2-1.8 0-.4-.1-.7-.3-1l2.8-1.7c.3.3.7.5 1.2.5.8 0 1.5-.7 1.5-1.5z" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
    </svg>
  );
}

/* Row 2 compact tech logos */
function Html5Logo() {
  return (
    <svg className="w-6 h-6 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.4H5.5l.4 4.5h11.8l-.5 5.5-4.2 1.2-4.2-1.2-.3-3.1H6.1l.5 5.5 5.4 1.5 5.4-1.5.9-10.4H5.1l-.4-4.5h14.2l-.4 2.5z" />
    </svg>
  );
}

function Css3Logo() {
  return (
    <svg className="w-6 h-6 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.4H5.5l.4 4.5h11.8l-.5 5.5-4.2 1.2-4.2-1.2-.3-3.1H6.1l.5 5.5 5.4 1.5 5.4-1.5.9-10.4H5.1l-.4-4.5h14.2l-.4 2.5z" />
    </svg>
  );
}

function JsLogo() {
  return (
    <div className="w-6 h-6 rounded bg-[#F7DF1E] text-black font-extrabold flex items-center justify-center text-[10px] shadow-2xs">
      JS
    </div>
  );
}

function BootstrapLogo() {
  return (
    <div className="w-6 h-6 rounded-lg bg-[#7952B3] text-white font-bold flex items-center justify-center text-xs shadow-2xs">
      B
    </div>
  );
}

function FigmaLogo() {
  return (
    <svg className="w-5 h-6" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

function PhotoshopLogo() {
  return (
    <div className="w-6 h-6 rounded bg-[#001E36] text-[#31A8FF] border border-[#31A8FF]/30 font-bold flex items-center justify-center text-[10px] shadow-2xs">
      Ps
    </div>
  );
}

function IllustratorLogo() {
  return (
    <div className="w-6 h-6 rounded bg-[#330000] text-[#FF9A00] border border-[#FF9A00]/30 font-bold flex items-center justify-center text-[10px] shadow-2xs">
      Ai
    </div>
  );
}

function XDLogo() {
  return (
    <div className="w-6 h-6 rounded bg-[#470137] text-[#FF61F6] border border-[#FF61F6]/30 font-bold flex items-center justify-center text-[10px] shadow-2xs">
      Xd
    </div>
  );
}

function SupabaseLogo() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.9 2.5L3.8 13.6c-.3.4 0 1 .5 1h7.8l-1 6.9c-.1.7.7 1.1 1.2.6l9.1-11.1c.3-.4 0-1-.5-1h-7.8l1-6.9c.1-.7-.7-1.1-1.2-.6z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

function GitLogo() {
  return (
    <svg className="w-6 h-6 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452a1.493 1.493 0 0 0-2.112 0l-2.1 2.1 2.665 2.666a1.777 1.777 0 0 1 2.25 2.25l2.568 2.57a1.777 1.777 0 0 1 1.637 1.42 1.777 1.777 0 0 1-.58 1.956 1.777 1.777 0 0 1-2.072-.188l-2.43-2.43v5.82a1.777 1.777 0 0 1 .51 1.09 1.777 1.777 0 0 1-1.777 1.778 1.777 1.777 0 0 1-1.778-1.778c0-.442.164-.847.437-1.157l-.02-.02V9.824a1.777 1.777 0 0 1-.954-.482 1.777 1.777 0 0 1-.36-1.956L6.5 4.72.454 10.767a1.493 1.493 0 0 0 0 2.112l10.48 10.478a1.493 1.493 0 0 0 2.11 0l10.502-10.5a1.493 1.493 0 0 0 0-2.113z" />
    </svg>
  );
}

/* ==========================================================================
   Tools & Technologies Component
   ========================================================================== */

const PRIMARY_STACK = [
  {
    name: "WordPress",
    sub: "ACF · Custom Themes",
    icon: <WordPressLogo />,
    brandColor: "#21759B",
    bgShape: "from-[#21759B]/30 to-transparent",
  },
  {
    name: "Shopify",
    sub: "Liquid · Theme Dev",
    icon: <ShopifyLogo />,
    brandColor: "#95BF47",
    bgShape: "from-[#95BF47]/30 to-transparent",
  },
  {
    name: "Webflow",
    sub: "CMS · Design System",
    icon: <WebflowLogo />,
    brandColor: "#146EF5",
    bgShape: "from-[#146EF5]/30 to-transparent",
  },
  {
    name: "Wix",
    sub: "Editor · Customization",
    icon: <WixLogo />,
    brandColor: "#F59E0B",
    bgShape: "from-[#F59E0B]/30 to-transparent",
  },
  {
    name: "HubSpot",
    sub: "Dynamic Pages",
    icon: <HubSpotLogo />,
    brandColor: "#FF7A59",
    bgShape: "from-[#FF7A59]/30 to-transparent",
  },
  {
    name: "React",
    sub: "Next.js · Tailwind",
    icon: <ReactLogo />,
    brandColor: "#00D8FF",
    bgShape: "from-[#00D8FF]/30 to-transparent",
  },
];

const SECONDARY_STACK = [
  { name: "HTML5", icon: <Html5Logo />, brandColor: "#E34F26" },
  { name: "CSS3", icon: <Css3Logo />, brandColor: "#1572B6" },
  { name: "JavaScript", icon: <JsLogo />, brandColor: "#F7DF1E" },
  { name: "Bootstrap", icon: <BootstrapLogo />, brandColor: "#7952B3" },
  { name: "Figma", icon: <FigmaLogo />, brandColor: "#A259FF" },
  { name: "Photoshop", icon: <PhotoshopLogo />, brandColor: "#31A8FF" },
  { name: "Illustrator", icon: <IllustratorLogo />, brandColor: "#FF9A00" },
  { name: "XD", icon: <XDLogo />, brandColor: "#FF61F6" },
  { name: "Supabase", icon: <SupabaseLogo />, brandColor: "#3ECF8E" },
  { name: "Git", icon: <GitLogo />, brandColor: "#F05032" },
];

export function SkillsStack() {
  return (
    <section id="skills" className="py-14 sm:py-20 md:py-24 bg-[#0B0C12] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/[0.04] blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Heading & Subtitle Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-4 h-0.5 bg-amber-400" />
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                My Skills
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Tools &amp; Technologies
            </h2>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/60 shrink-0">
            <span>Designing. Developing. Delivering.</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

        {/* Row 1: 6 Primary Platforms with 0.3 Opacity Background Shapes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-5">
          {PRIMARY_STACK.map((item) => (
            <div
              key={item.name}
              className="relative bg-[#12141F] border border-white/10 rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center shadow-lg hover:border-amber-400/50 hover:bg-[#161928] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
            >
              {/* 0.3 Opacity Background Ambient Shape */}
              <div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-60"
                style={{ backgroundColor: item.brandColor }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br pointer-events-none opacity-30 transition-opacity duration-300 group-hover:opacity-50"
                style={{
                  backgroundImage: `radial-gradient(circle at 85% 15%, ${item.brandColor}40 0%, transparent 70%)`,
                }}
              />

              <div className="relative mb-3.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                {item.icon}
              </div>
              <h3 className="relative font-bold text-sm text-white tracking-tight mb-1 z-10">
                {item.name}
              </h3>
              <p className="relative text-[11px] text-white/60 font-medium tracking-tight z-10">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Row 2: 10 Secondary Technologies with 0.3 Opacity Background Accents */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-3.5">
          {SECONDARY_STACK.map((item) => (
            <div
              key={item.name}
              className="relative bg-[#12141F] border border-white/10 rounded-xl p-3 sm:p-3.5 text-center flex flex-col items-center justify-center shadow-md hover:border-amber-400/40 hover:bg-[#161928] hover:-translate-y-0.5 transition-all duration-200 group overflow-hidden"
            >
              {/* 0.3 Opacity Background Shape */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-200 group-hover:opacity-60"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 30%, ${item.brandColor}30 0%, transparent 75%)`,
                }}
              />

              <div className="relative mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 z-10">
                {item.icon}
              </div>
              <span className="relative text-[11px] font-semibold text-white/80 tracking-tight z-10">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
