"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-[#0A0B0E] text-white overflow-hidden"
    >
      {/* 1. Ambient Background: Warm Sunset/Amber Radiant Glow on Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Sunset Core */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-br from-amber-500/25 via-orange-600/20 to-transparent blur-[120px]" />

        {/* Deep Orange Ambient Wash */}
        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-orange-600/15 blur-[140px]" />

        {/* Fluted / Ribbed Vertical Texture Lines on Right (matches reference image) */}
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0px, rgba(255, 255, 255, 0.4) 1px, transparent 1px, transparent 20px)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)"
          }}
        />
      </div>

      {/* Subtle top subtle grid / glow */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[250px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      {/* 2. Main Hero Content Container */}
      <div className="site-container relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow Capsule Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/12 text-xs font-semibold text-white/90 backdrop-blur-md shadow-inner mb-6 sm:mb-8">
          <span className="text-amber-400">
            <Sparkles className="w-3.5 h-3.5 inline" />
          </span>
          <span>Web Developer — Creative Websites &amp; Web Apps</span>
        </div>

        {/* Impactful Centered Headline matching reference layout */}
        <h1 className="max-w-4xl font-extrabold text-4xl sm:text-6xl lg:text-[4.25rem] tracking-tight text-white leading-[1.12] mb-6">
          Write High-Converting <br className="hidden sm:inline" />
          Websites &amp; Brands{" "} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            With Code
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed mb-9">
          I design and develop responsive, high-performance websites across WordPress,
          Shopify, Webflow, and modern React — turning visitors into loyal clients.
        </p>

        {/* Unique Interactive CTA Buttons with Motion Text Roll & Meaningful Animated Icons */}
        <div className="flex flex-wrap items-center justify-center mt-4 gap-4 mb-16 sm:mb-20">
          {/* Primary CTA */}
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] bg-[length:200%_auto] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.75)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer light sweep reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span className="tracking-wide">View Selected Work</span>

            {/* Launch Vector with dual-sliding diagonal arrow */}
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shrink-0 border border-white/30 shadow-inner">
              <ArrowUpRight className="w-4 h-4 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5" />
              <ArrowUpRight className="w-4 h-4 text-amber-200 absolute transform -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-white/[0.07] border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/[0.14] hover:border-white/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <span>Let&apos;s Work Together</span>

            {/* Launch Vector with dual-sliding diagonal arrow */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center relative overflow-hidden shrink-0 border border-white/20">
              <ArrowUpRight className="w-4 h-4 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5" />
              <ArrowUpRight className="w-4 h-4 text-amber-200 absolute transform -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

const ALL_TECH_TOOLS = [
  {
    name: "Figma",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
      </svg>
    )
  },
  {
    name: "Photoshop",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#001E36] border-2 border-[#31A8FF] flex items-center justify-center font-black text-xs sm:text-sm text-[#31A8FF] shadow-md">
        Ps
      </div>
    )
  },
  {
    name: "Illustrator",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#330000] border-2 border-[#FF9A00] flex items-center justify-center font-black text-xs sm:text-sm text-[#FF9A00] shadow-md">
        Ai
      </div>
    )
  },
  {
    name: "Adobe XD",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#470137] border-2 border-[#FF61F6] flex items-center justify-center font-black text-xs sm:text-sm text-[#FF61F6] shadow-md">
        Xd
      </div>
    )
  },
  {
    name: "HTML5",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.4H5.5l.4 4.5h11.8l-.5 5.5-4.2 1.2-4.2-1.2-.3-3.1H6.1l.5 5.5 5.4 1.5 5.4-1.5.9-10.4H5.1l-.4-4.5h14.2l-.4 2.5z" />
      </svg>
    )
  },
  {
    name: "CSS3",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.4H5.5l.4 4.5h11.8l-.5 5.5-4.2 1.2-4.2-1.2-.3-3.1H6.1l.5 5.5 5.4 1.5 5.4-1.5.9-10.4H5.1l-.4-4.5h14.2l-.4 2.5z" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F7DF1E] text-black font-extrabold flex items-center justify-center text-xs sm:text-sm shadow-md">
        JS
      </div>
    )
  },
  {
    name: "React",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center font-black text-sm shadow-md">
        ▲
      </div>
    )
  },
  {
    name: "WordPress",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.18-1.85l3.87-10.6 3.97 10.87A8.16 8.16 0 0 1 12 20.2zm-6.84-8.2a8.07 8.07 0 0 1 1.25-4.32l4 10.95L7.1 12.87a6.76 6.76 0 0 1-.74-.87zm11.7 6.47l-3.32-9.62c.57-.03 1.08-.09 1.08-.09a.46.46 0 0 0 .42-.48.46.46 0 0 0-.46-.44s-1.38.11-2.28.11c-.85 0-2.25-.11-2.25-.11a.46.46 0 0 0-.46.45.46.46 0 0 0 .44.47s.48.06 1 .09l1.49 4.09-2.11 6.32L6.87 6.64A8.2 8.2 0 0 1 18.6 7.82l-1.74 10.65z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "Shopify",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none">
        <path d="M18.8 4.6c-.1-.3-.3-.4-.5-.4l-2.4-.2s-1.4-2.6-1.7-3c-.3-.4-.9-.6-1.4-.5-.1 0-.3.1-.4.2C12.2.9 10.9 2.2 9.9 3.5l-3.3 1c-.7.2-1.2.9-1.2 1.6L4 21.8l13.9 2.2 6.1-3.2L18.8 4.6z" fill="#95BF47" />
        <path d="M14.5 4.1L12.3 3.9C11.5 5.1 10.3 6.6 9.4 8l5.8-.8c-.3-1-.5-2-.7-3.1z" fill="#5E8E3E" />
        <path d="M12.9 8.8l-4.5.6c-.7 1-1.3 2.1-1.8 3.2l6.8-.9c-.2-1-.4-2-.5-2.9z" fill="#5E8E3E" />
        <path d="M12.6 11.2c-.4-.2-1.3-.4-2-.4-1.5 0-2.4.8-2.4 2 0 2.2 3.3 2.3 3.3 4.2 0 .8-.6 1.4-1.6 1.4-1 0-1.8-.5-2.2-.9l-.4 1.7c.6.5 1.6.8 2.5.8 2 0 3.3-1.1 3.3-2.7 0-2.5-3.4-2.4-3.4-4.2 0-.6.5-1.1 1.3-1.1.7 0 1.3.2 1.7.4l.2-1.2z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "HubSpot",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF7A59]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.8 8.5c0-.8-.6-1.5-1.5-1.5-.4 0-.8.2-1.1.5l-2.8-1.7V4.5c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8v1.3L9 7.5C8.7 7.2 8.3 7 7.9 7c-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8v3.4c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2 .8 0 1.5-.5 1.8-1.2h3.4c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2 0-.8-.5-1.5-1.2-1.8v-3.4c.7-.3 1.2-1 1.2-1.8 0-.4-.1-.7-.3-1l2.8-1.7c.3.3.7.5 1.2.5.8 0 1.5-.7 1.5-1.5z" />
      </svg>
    )
  },
  {
    name: "Webflow",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#146EF5] flex items-center justify-center text-white shadow-md">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.8 7.3c-.8.5-1.5 1.1-2 1.8-.1-.7-.3-1.4-.7-1.9-.8-.9-1.9-1.4-3.1-1.4-.8 0-1.6.2-2.3.7-.8.5-1.4 1.2-1.8 2.1L6.7 13c-.1-.7-.2-1.3-.2-2 0-2.3.9-3.9 2.5-4.8 1-.6 2.1-.9 3.3-.9 1.7 0 3.1.6 4.3 1.8.4.4.8.9 1.2 1.2zm4.7 1.8c-.2-.4-.4-.8-.7-1.1-.9-.9-2.1-1.4-3.5-1.4-.7 0-1.4.1-2.1.4-.7.3-1.3.7-1.8 1.3l-2.4 3.7-1.8-4.5c-.3-.7-.7-1.3-1.2-1.7-.8-.7-1.8-1-2.9-1-1.3 0-2.5.4-3.5 1.3C1.6 8.3.9 9.8.9 11.7c0 1.2.2 2.3.7 3.3l4.3-7.5c.3-.5.7-.9 1.2-1.2.6-.4 1.3-.6 2-.6.9 0 1.7.3 2.3.9.5.5.8 1.2 1 2l-3.8 6.6c-.3.5-.7.9-1.2 1.2-.6.4-1.3.6-2 .6-.4 0-.8-.1-1.2-.2l1.6 2.8c.6.2 1.3.3 2 .3 1.6 0 2.9-.5 4-1.6.6-.6 1.1-1.3 1.5-2.2l2.3-4.1 1.7 4.2c.4.9.9 1.6 1.6 2.1.8.6 1.7.9 2.8.9 1.4 0 2.6-.5 3.6-1.5.9-.9 1.5-2.1 1.7-3.5l.2-1.8c0-.7-.1-1.4-.4-2.1z" />
        </svg>
      </div>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.126 0L8.808 2.585l3.222 3.222a1.78 1.78 0 0 1 2.253 2.274l3.1 3.1a1.78 1.78 0 1 1-1.077 1.053l-2.89-2.89a1.78 1.78 0 0 1-2.09-.43L8.09 12.15v5.71a1.78 1.78 0 1 1-1.5 0V11.37a1.78 1.78 0 0 1-.958-2.333L2.41 5.815.454 7.771a1.5 1.5 0 0 0 0 2.121l10.48 10.48a1.5 1.5 0 0 0 2.125 0l10.487-10.48a1.5 1.5 0 0 0 0-2.122z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </div>
    )
  },
  {
    name: "Wix",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white text-[#0F172A] font-black flex items-center justify-center text-xs sm:text-sm tracking-tighter shadow-md">
        Wix
      </div>
    )
  },
  {
    name: "Bootstrap",
    icon: (
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#7952B3] text-white font-bold flex items-center justify-center text-sm sm:text-base shadow-md">
        B
      </div>
    )
  }
];
