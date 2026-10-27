"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { HeroCanvasAnimation } from "./HeroCanvasAnimation";
import { ServiceBrandIcon } from "./ServiceBrandIcon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Interactive Antigravity Canvas Animation */}
      <HeroCanvasAnimation />

      {/* 1. Ambient Background: Warm Sunset/Amber Radiant Glow on Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Sunset Core */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-transparent blur-[120px]" />

        {/* Deep Orange Ambient Wash */}
        <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-orange-500/10 blur-[140px]" />

        {/* Fluted / Ribbed Vertical Texture Lines on Right */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(15, 23, 42, 0.4) 0px, rgba(15, 23, 42, 0.4) 1px, transparent 1px, transparent 20px)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)"
          }}
        />
      </div>


      {/* 2. Main Hero Content Container */}
      <div className="site-container relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow Capsule Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/[0.04] border border-slate-200/90 text-xs font-bold text-slate-800 backdrop-blur-md shadow-xs mb-6 sm:mb-8">
          <span className="text-amber-500">
            <Sparkles className="w-3.5 h-3.5 inline" />
          </span>
          <span>Web Designer &amp; Developer — Design, Build &amp; Scale Businesses Online</span>
        </div>

        {/* Impactful Centered Headline with Gradient Text on White */}
        <h1 className="max-w-4xl font-extrabold text-4xl sm:text-6xl lg:text-[4.25rem] tracking-tight leading-[1.12] mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800">
            I Design. I Build. I Develop.
          </span>
          <br className="hidden sm:inline" />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#EA580C]">
            Helping Businesses Grow Online.
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-9">
          I design and develop modern, high-converting websites and digital experiences that strengthen your brand and help your business grow online.
        </p>

        {/* Unique Interactive CTA Buttons with Compact Height */}
        <div className="flex flex-wrap items-center justify-center mt-2 gap-4 mb-8 sm:mb-10">
          {/* Primary CTA */}
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] bg-[length:200%_auto] text-white font-semibold text-sm shadow-[0_10px_25px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_35px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer light sweep reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

            <span className="tracking-wide">View Selected Work</span>

            {/* Launch Vector with dual-sliding diagonal arrow */}
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shrink-0 border border-white/30 shadow-inner">
              <ArrowUpRight className="w-3.5 h-3.5 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5" />
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-200 absolute transform -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-slate-900/[0.04] hover:bg-slate-900/[0.08] border border-slate-300/80 text-slate-900 font-semibold text-sm hover:border-slate-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-xs"
          >
            <span>Let&apos;s Work Together</span>

            {/* Launch Vector with dual-sliding diagonal arrow */}
            <div className="w-7 h-7 rounded-full bg-slate-900/[0.06] flex items-center justify-center relative overflow-hidden shrink-0 border border-slate-300/60">
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-800 transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5" />
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F5781E] absolute transform -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>
        </div>

        {/* CMS & E-Commerce Developer Stickers & Platform Badge Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-2">
          {/* Shopify Sticker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-[#95BF47] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group">
            <ServiceBrandIcon id="shopify" className="w-4 h-4 shrink-0" />
            <span className="text-xs font-bold text-slate-800">Shopify</span>
            <span className="text-[10px] font-semibold text-slate-400">· E-Com Storefronts</span>
          </div>

          {/* WordPress Sticker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-[#21759B] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group">
            <ServiceBrandIcon id="wordpress" className="w-4 h-4 shrink-0" />
            <span className="text-xs font-bold text-slate-800">WordPress</span>
            <span className="text-[10px] font-semibold text-slate-400">· ACF &amp; Custom CMS</span>
          </div>

          {/* WooCommerce Sticker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-xs hover:border-[#7F54B3] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group">
            <ServiceBrandIcon id="woocommerce" className="w-4 h-4 shrink-0" />
            <span className="text-xs font-bold text-slate-800">WooCommerce</span>
            <span className="text-[10px] font-semibold text-slate-400">· Online Stores</span>
          </div>

          {/* Verified Badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-700 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>CMS &amp; E-Com Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
