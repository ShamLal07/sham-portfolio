"use client";

import React, { useEffect, useState } from "react";
import { LogoMark } from "./Icons";
import { BRAND_NAME } from "@/data/portfolio";

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasLoaded = sessionStorage.getItem("swc_preloaded");
    if (hasLoaded) {
      setHidden(true);
      return;
    }

    // Disable scrolling while preloading
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);
        setTimeout(() => {
          setComplete(true);
          document.body.style.overflow = "";
          sessionStorage.setItem("swc_preloaded", "true");
          setTimeout(() => setHidden(true), 900);
        }, 350);
      } else {
        setPercent(current);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`preloader-overlay fixed inset-0 z-[9999] bg-[#08080C] flex flex-col justify-between p-6 sm:p-10 lg:p-16 text-[#F8F9FA] transition-all duration-[850ms] overflow-hidden ${
        complete ? "slide-out -translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100 pointer-events-auto"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(239,189,48,0.15)_0%,_transparent_70%)] blur-[60px] pointer-events-none" />

      {/* Top Header */}
      <div className="flex justify-between items-center relative z-[2]">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-display font-extrabold text-lg tracking-tight text-[#F8F9FA]">
            {BRAND_NAME}
          </span>
        </div>
        <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
          Studio v2.5 / 2026
        </span>
      </div>

      {/* Center Hero Reveal */}
      <div className="relative z-[2] max-w-[800px] my-auto">
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#F8F9FA]/60 mb-4 font-semibold">
          Initializing Digital Space · UI/UX &amp; 3D Motion
        </p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#F8F9FA]">
          Crafting Digital Realities Without Boundaries.
        </h2>
      </div>

      {/* Bottom Progress Bar & Counter */}
      <div className="relative z-[2]">
        <div className="flex justify-between items-end mb-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-[#F8F9FA]/45 uppercase tracking-wider">
              Loading High-Performance Systems
            </span>
            <span className="text-sm font-semibold text-[var(--accent)]">
              {percent < 30
                ? "Connecting Design Tokens..."
                : percent < 70
                ? "Compiling 3D Motion Matrix..."
                : percent < 100
                ? "Calibrating GPU Canvas..."
                : "Welcome to ShamWeb Creative"}
            </span>
          </div>

          <div className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-none text-[var(--accent)] tracking-tight">
            {percent}
            <span className="text-[0.5em] opacity-80">%</span>
          </div>
        </div>

        {/* The Track Line */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#d9a514] via-[#EFBD30] to-white shadow-[0_0_16px_rgba(239,189,48,0.8)] transition-[width] duration-150 ease-out"
            style={{
              width: `${percent}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
