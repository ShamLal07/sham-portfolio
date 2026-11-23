"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export function AnimatedLogo({
  size = "md",
  showText = true,
  className = "",
}: AnimatedLogoProps) {
  // Dimension presets
  const sizeMap = {
    sm: { box: "w-8 h-8", svg: 32, font: "text-sm", sub: "text-[9px]" },
    md: { box: "w-9 h-9 sm:w-10 sm:h-10", svg: 38, font: "text-base", sub: "text-[10px]" },
    lg: { box: "w-14 h-14", svg: 56, font: "text-xl", sub: "text-xs" },
    xl: { box: "w-20 h-20 sm:w-24 sm:h-24", svg: 88, font: "text-2xl", sub: "text-sm" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Animated SVG Emblem Box */}
      <div
        className={`relative ${currentSize.box} rounded-2xl bg-gradient-to-br from-[#0F1423] via-[#080B14] to-[#04060A] border border-blue-500/30 p-1 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500 overflow-hidden shrink-0`}
      >
        {/* Ambient Animated Corner Glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 blur-md pointer-events-none"
        />

        {/* Dynamic Monogram SVG with Path Drawing & Pulse */}
        <svg
          width={currentSize.svg}
          height={currentSize.svg}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-500 group-hover:scale-108"
        >
          <defs>
            {/* Linear Gradient for Logo Stroke */}
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>

            {/* Inner Glow */}
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Geometric Hex Shield - Animated Drawing Line */}
          <motion.polygon
            points="32,6 54,18 54,46 32,58 10,46 10,18"
            stroke="url(#logoGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(59, 130, 246, 0.08)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          {/* Architectural "T" Bar (Thakur / Technology) */}
          <motion.path
            d="M 20 22 L 44 22"
            stroke="url(#logoGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          />

          {/* Vertical Stem of "T" intersecting into "S" and "L" */}
          <motion.path
            d="M 32 22 L 32 44"
            stroke="url(#logoGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Interlocking Dynamic "S" Fluid Arc (Sham Lal) */}
          <motion.path
            d="M 22 30 C 22 26, 32 25, 38 28 C 43 31, 41 38, 32 38 C 23 38, 22 44, 27 47 C 32 50, 42 49, 42 45"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#logoGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.95 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
          />

          {/* "L" Baseline Extension Foot */}
          <motion.path
            d="M 32 44 L 40 44"
            stroke="url(#logoGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeInOut" }}
          />

          {/* Center Glowing Core Node */}
          <motion.circle
            cx="32"
            cy="33"
            r="2"
            fill="#22D3EE"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Brand Typographic Wordmark & Professional Role */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`${currentSize.font} font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors font-[family-name:var(--font-display)]`}
            >
              Sham Lal
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              T
            </span>
          </div>
          <span
            className={`${currentSize.sub} text-white/50 font-medium tracking-wide uppercase group-hover:text-white/70 transition-colors`}
          >
            Web Developer
          </span>
        </div>
      )}
    </div>
  );
}
