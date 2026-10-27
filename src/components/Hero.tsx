"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Code2, TrendingUp, CheckCircle2 } from "lucide-react";
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

      {/* =========================================================================
          Floating Side Badges & CMS Stickers (Desktop Only, Responsive)
          ========================================================================= */}

      {/* Left Upper Floating: Tech Stack Card */}
      <div className="hidden xl:flex absolute left-4 2xl:left-12 top-[38%] -translate-y-1/2 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.1)] hover:-translate-y-[52%] transition-all duration-300 z-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
          <Code2 className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Tech Stack</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <span className="text-xs font-bold text-slate-900">Next.js · React · UI/UX</span>
          <span className="text-[10px] text-slate-500 font-medium">Clean, Scalable Code</span>
        </div>
      </div>

      {/* Left Lower Floating: WordPress CMS Developer Sticker */}
      <div className="hidden xl:flex absolute left-6 2xl:left-16 top-[62%] -translate-y-1/2 items-center gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_14px_35px_-8px_rgba(33,117,155,0.18)] hover:rotate-0 rotate-[-2deg] hover:scale-105 transition-all duration-300 z-10 group cursor-default">
        <div className="w-10 h-10 rounded-xl bg-[#21759B]/10 border border-[#21759B]/20 flex items-center justify-center p-2 shadow-xs shrink-0">
          <ServiceBrandIcon id="wordpress" className="w-6 h-6" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#21759B]">CMS Developer</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-[#21759B]/10 text-[#21759B]">Custom</span>
          </div>
          <span className="text-xs font-bold text-slate-900">WordPress &amp; ACF Pro</span>
          <span className="text-[10px] text-slate-500 font-medium">Theme Dev &amp; Speed Optimized</span>
        </div>
      </div>

      {/* Right Upper Floating: Business Growth Card */}
      <div className="hidden xl:flex absolute right-4 2xl:right-12 top-[38%] -translate-y-1/2 items-center gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.1)] hover:-translate-y-[52%] transition-all duration-300 z-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center text-white shadow-sm shrink-0">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Business Growth</span>
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-200">+140%</span>
          </div>
          <span className="text-xs font-bold text-slate-900">High-Converting Websites</span>
          <span className="text-[10px] text-slate-500 font-medium">Engineered for Revenue</span>
        </div>
      </div>

      {/* Right Lower Floating: Shopify E-Commerce Developer Sticker */}
      <div className="hidden xl:flex absolute right-6 2xl:right-16 top-[62%] -translate-y-1/2 items-center gap-3 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_14px_35px_-8px_rgba(149,191,71,0.22)] hover:rotate-0 rotate-[2deg] hover:scale-105 transition-all duration-300 z-10 group cursor-default">
        <div className="w-10 h-10 rounded-xl bg-[#95BF47]/15 border border-[#95BF47]/30 flex items-center justify-center p-2 shadow-xs shrink-0">
          <ServiceBrandIcon id="shopify" className="w-6 h-6" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#5E8E3E]">E-Commerce</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">High ROAS</span>
          </div>
          <span className="text-xs font-bold text-slate-900">Shopify 2.0 Storefronts</span>
          <span className="text-[10px] text-slate-500 font-medium">Custom Liquid &amp; Fast Checkout</span>
        </div>
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
