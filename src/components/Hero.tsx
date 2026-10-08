"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-36 overflow-hidden relative">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Left Column: Headline & Messaging */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Small Eyebrow above hero */}
            <div className="eyebrow-tag mb-6 px-3.5 py-1.5 rounded-full bg-[#F1F0EC] border border-[#E5E4DE] text-[0.76rem] font-bold text-[#575A65]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WEB DESIGNER + FRONTEND DEVELOPER
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-extrabold tracking-[-0.035em] text-[#0F1117] leading-[1.08] max-w-[18ch] mb-7">
              I design &amp; build websites that move businesses forward.
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg lg:text-[1.12rem] text-[#575A65] max-w-[46ch] leading-relaxed mb-9">
              Web design, frontend development, CMS and e-commerce solutions for
              modern businesses and growing brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link href="/work" className="btn-primary group">
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Let&apos;s Work Together
              </Link>
            </div>

            {/* Small Trust Statement */}
            <div className="flex items-center gap-3 text-xs sm:text-[0.88rem] text-[#848792] font-medium tracking-tight border-t border-[#E5E4DE] pt-5 w-full max-w-[500px]">
              <span className="text-[#0F1117] font-bold">Workflow:</span>
              <span>Design → Frontend → CMS / E-commerce → Launch</span>
            </div>
          </motion.div>

          {/* Right Column: Visual Composition of Website Mockups with Floating Animation */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Annotation badge / note top-right */}
            <div className="hidden sm:flex absolute -top-5 -right-3 z-20 items-center gap-2 bg-white/95 backdrop-blur-md border border-[#E5E4DE] px-4 py-2 rounded-full shadow-md text-xs text-[#575A65] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Modern websites. Real business impact.</span>
            </div>

            {/* Floating Composition Container */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E5E4DE] bg-gradient-to-br from-[#FAF9F7] via-[#F4F3EE] to-[#EAE9E4] shadow-[0_24px_60px_-16px_rgba(15,17,23,0.14)] group animate-float">
              <Image
                src="/projects/hero-composition.jpg"
                alt="Selected websites and user interfaces designed and built by Sham Lal"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain p-3 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Floating metadata badge bottom-left */}
              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-[#E5E4DE] shadow-md flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#0F1117] text-white flex items-center justify-center text-[9px] font-bold">
                    W
                  </span>
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">
                    S
                  </span>
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-bold">
                    R
                  </span>
                </div>
                <div className="text-xs leading-tight text-[#0F1117] font-bold">
                  WordPress · Shopify · React · Webflow
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
