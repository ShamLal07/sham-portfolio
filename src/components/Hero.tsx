"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { HeroCanvasAnimation } from "./HeroCanvasAnimation";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-[#0A0B0E] text-white overflow-hidden"
    >
      {/* Interactive Canvas Constellation Animation */}
      <HeroCanvasAnimation />

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
          <span>Web Designer &amp; Web Developer — Thoughtful UI/UX &amp; Modern Code</span>
        </div>

        {/* Impactful Centered Headline matching reference layout */}
        <h1 className="max-w-4xl font-extrabold text-4xl sm:text-6xl lg:text-[4.25rem] tracking-tight text-white leading-[1.12] mb-6">
          I Design. I Build. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            I Create Digital Experiences.
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed mb-9">
          I design and develop modern, responsive websites with thoughtful UI/UX and clean, reliable frontend experiences for businesses and brands.
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

