"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
} from "lucide-react";
import { SERVICES } from "@/data/services";

/* ==========================================================================
   High-Precision 3D/Glossy Vector Icons matching Reference Design
   ========================================================================== */

// 01. Frontend Development Icon: Glossy dark squircle with </> and floating cubes
function FrontendIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fe-bg" x1="8" y1="6" x2="52" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E3340" />
            <stop offset="0.6" stopColor="#171922" />
            <stop offset="1" stopColor="#0B0D12" />
          </linearGradient>
          <linearGradient id="fe-shine" x1="12" y1="8" x2="38" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cube-grad1" x1="42" y1="6" x2="56" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="cube-grad2" x1="48" y1="18" x2="60" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Main Squircle Body */}
        <rect x="6" y="10" width="46" height="46" rx="14" fill="url(#fe-bg)" />
        <rect x="6.5" y="10.5" width="45" height="45" rx="13.5" stroke="#475569" strokeOpacity="0.4" />
        <path
          d="M7 20C7 14.4772 11.4772 10 17 10H41C46.5228 10 51 14.4772 51 20V26C51 26 39 30 20 28C10 27 7 24 7 20Z"
          fill="url(#fe-shine)"
        />

        {/* </> Code Symbol */}
        <path
          d="M23 27L17 33L23 39"
          stroke="#F8FAFC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 27L41 33L35 39"
          stroke="#F8FAFC"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31 25L27 41"
          stroke="#94A3B8"
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Floating Mini 3D Pixel Cubes */}
        <g filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))">
          <rect x="46" y="8" width="10" height="10" rx="3" fill="url(#cube-grad1)" />
          <rect x="52" y="18" width="8" height="8" rx="2.5" fill="url(#cube-grad2)" />
        </g>
      </svg>
    </div>
  );
}

// 02. Full Stack Development Icon: 3D Stacked Server Cylinders with Cloud
function FullStackIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="disk-top" x1="10" y1="12" x2="44" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E4554" />
            <stop offset="1" stopColor="#1E222B" />
          </linearGradient>
          <linearGradient id="disk-side" x1="10" y1="18" x2="44" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E212A" />
            <stop offset="0.5" stopColor="#12141A" />
            <stop offset="1" stopColor="#0B0D12" />
          </linearGradient>
          <linearGradient id="cloud-grad" x1="26" y1="32" x2="56" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Bottom Server Disk */}
        <path d="M10 38C10 33.5 17.5 30 27 30C36.5 30 44 33.5 44 38V44C44 48.5 36.5 52 27 52C17.5 52 10 48.5 10 44V38Z" fill="url(#disk-side)" />
        <ellipse cx="27" cy="38" rx="17" ry="6" fill="#2A2F3D" />

        {/* Middle Server Disk */}
        <path d="M10 26C10 21.5 17.5 18 27 18C36.5 18 44 21.5 44 26V32C44 36.5 36.5 40 27 40C17.5 40 10 36.5 10 32V26Z" fill="url(#disk-side)" />
        <ellipse cx="27" cy="26" rx="17" ry="6" fill="#323847" />

        {/* Top Server Disk */}
        <path d="M10 14C10 9.5 17.5 6 27 6C36.5 6 44 9.5 44 14V20C44 24.5 36.5 28 27 28C17.5 28 10 24.5 10 20V14Z" fill="url(#disk-side)" />
        <ellipse cx="27" cy="14" rx="17" ry="6" fill="url(#disk-top)" />

        {/* Disk Slot Lines & LED Indicator Dots */}
        <circle cx="16" cy="16" r="1.5" fill="#38BDF8" />
        <circle cx="16" cy="28" r="1.5" fill="#38BDF8" />
        <circle cx="16" cy="40" r="1.5" fill="#38BDF8" />

        <line x1="22" y1="16" x2="38" y2="16" stroke="#4B5563" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="22" y1="28" x2="38" y2="28" stroke="#4B5563" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="22" y1="40" x2="38" y2="40" stroke="#4B5563" strokeWidth="1.2" strokeLinecap="round" />

        {/* Floating Cloud Overlay */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))">
          <path
            d="M38 34C38.8 31.6 41.2 30 44 30C47.3 30 50 32.7 50 36C50 36.3 49.9 36.6 49.9 37C52.7 37.3 55 39.8 55 43C55 46.3 52.3 49 49 49H36C32.7 49 30 46.3 30 43C30 40 32.2 37.6 35.1 37.1C35.5 34.2 37.9 32 41 32"
            fill="url(#cloud-grad)"
          />
        </g>
      </svg>
    </div>
  );
}

// 03. Custom Web Applications Icon: Browser window mockup with </> and wireframe globe
function CustomWebIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="app-bg" x1="6" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A2E3B" />
            <stop offset="1" stopColor="#0E1015" />
          </linearGradient>
          <linearGradient id="globe-bg" x1="36" y1="30" x2="58" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Browser Window Body */}
        <rect x="6" y="10" width="42" height="34" rx="8" fill="url(#app-bg)" />
        <rect x="6.5" y="10.5" width="41" height="33" rx="7.5" stroke="#475569" strokeOpacity="0.4" />

        {/* Window Top Bar with 3 Window Controls */}
        <path d="M6 18H48" stroke="#334155" strokeWidth="1" />
        <circle cx="12" cy="14" r="1.5" fill="#EF4444" />
        <circle cx="16" cy="14" r="1.5" fill="#F59E0B" />
        <circle cx="20" cy="14" r="1.5" fill="#10B981" />

        {/* Browser </> Symbol */}
        <path d="M19 26L15 30L19 34" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 26L33 30L29 34" stroke="#F1F5F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 24L23 36" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />

        {/* Wireframe Globe Sphere intersecting bottom right */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          <circle cx="47" cy="43" r="11" fill="url(#globe-bg)" />
          <circle cx="47" cy="43" r="11" stroke="#334155" strokeWidth="1.2" />
          <ellipse cx="47" cy="43" rx="5" ry="11" stroke="#334155" strokeWidth="1" strokeDasharray="1 1" />
          <line x1="36" y1="43" x2="58" y2="43" stroke="#334155" strokeWidth="1" />
          <line x1="39" y1="37" x2="55" y2="37" stroke="#334155" strokeWidth="0.8" />
          <line x1="39" y1="49" x2="55" y2="49" stroke="#334155" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}

// 04. UI / UX Design Icon: Monitor screen with paintbrush
function UIUXIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mon-bg" x1="10" y1="8" x2="50" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A2E3B" />
            <stop offset="1" stopColor="#0E1015" />
          </linearGradient>
          <linearGradient id="brush-tip" x1="22" y1="38" x2="34" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* Monitor Screen Frame */}
        <rect x="8" y="10" width="44" height="30" rx="7" fill="url(#mon-bg)" />
        <rect x="8.5" y="10.5" width="43" height="29" rx="6.5" stroke="#475569" strokeOpacity="0.4" />
        <rect x="12" y="14" width="36" height="22" rx="3" fill="#141720" />

        {/* Monitor Stand & Base */}
        <path d="M26 40L24 48H36L34 40" fill="#1E222B" />
        <path d="M20 48H40" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />

        {/* Paintbrush dipping diagonally across screen */}
        <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.3))">
          {/* Paint Stroke on screen */}
          <path d="M16 28C22 25 28 29 36 24" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
          {/* Brush Handle */}
          <path d="M48 8L34 26" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M34 26L31 30" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
          {/* Brush Tip with paint */}
          <path d="M31 30C29 33 26 36 24 37C25 35 27 32 28 30L31 30Z" fill="url(#brush-tip)" />
        </g>
      </svg>
    </div>
  );
}

// 05. Product Design Icon: Isometric 3D Cube with Packaging Badge
function ProductDesignIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cube-top" x1="12" y1="10" x2="48" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3E4554" />
            <stop offset="1" stopColor="#252A36" />
          </linearGradient>
          <linearGradient id="cube-left" x1="12" y1="24" x2="30" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20242E" />
            <stop offset="1" stopColor="#101217" />
          </linearGradient>
          <linearGradient id="cube-right" x1="30" y1="24" x2="48" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#14171E" />
            <stop offset="1" stopColor="#08090C" />
          </linearGradient>
          <linearGradient id="badge-grad" x1="36" y1="34" x2="54" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Isometric 3D Cube: Top Face */}
        <polygon points="30,8 48,18 30,28 12,18" fill="url(#cube-top)" />
        {/* Left Face */}
        <polygon points="12,18 30,28 30,50 12,39" fill="url(#cube-left)" />
        {/* Right Face */}
        <polygon points="30,28 48,18 48,39 30,50" fill="url(#cube-right)" />

        {/* Cube Edge Highlights */}
        <polyline points="12,18 30,28 48,18" stroke="#475569" strokeWidth="0.8" strokeOpacity="0.5" />
        <line x1="30" y1="28" x2="30" y2="50" stroke="#334155" strokeWidth="0.8" />

        {/* Floating Mini Product Box Badge at bottom right */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          <rect x="38" y="34" width="16" height="16" rx="4" fill="url(#badge-grad)" />
          {/* Inset Box Wireframe Icon */}
          <path
            d="M46 38L51 41L46 44L41 41L46 38Z"
            stroke="#1E293B"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path d="M41 41V46L46 49V44" stroke="#1E293B" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M51 41V46L46 49" stroke="#1E293B" strokeWidth="1.2" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

// 06. Custom Design Icon: Artist Palette with Colors & Brush
function CustomDesignIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pal-bg" x1="10" y1="8" x2="52" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E3342" />
            <stop offset="0.6" stopColor="#1A1C24" />
            <stop offset="1" stopColor="#0C0E13" />
          </linearGradient>
          <linearGradient id="sub-pal" x1="36" y1="32" x2="56" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Dark Artist Palette Shape */}
        <path
          d="M32 8C19 8 8 18 8 30C8 38 13 43 18 45C20 46 22 47 22 49C22 52 19 53 23 54C28 55 36 54 44 48C50 42 54 35 54 26C54 16 44 8 32 8Z"
          fill="url(#pal-bg)"
        />
        <path
          d="M32 8.5C19.3 8.5 8.5 18.2 8.5 30C8.5 37.8 13.3 42.6 18.2 44.6C20.3 45.6 22.5 46.8 22.5 49.3C22.5 51.5 20.3 52.4 23.1 53.4C27.8 54.4 35.6 53.5 43.4 47.6C49.3 41.7 53.5 34.8 53.5 26C53.5 16.3 43.7 8.5 32 8.5Z"
          stroke="#475569"
          strokeOpacity="0.4"
        />

        {/* Ergonomic Palette Thumbhole */}
        <ellipse cx="22" cy="38" rx="3.5" ry="4.5" fill="#0C0E13" />

        {/* Paint Wells on dark palette */}
        <circle cx="20" cy="20" r="3" fill="#38BDF8" />
        <circle cx="30" cy="16" r="3" fill="#A855F7" />
        <circle cx="41" cy="20" r="3" fill="#F97316" />

        {/* Secondary White Paint Palette Overlay with 3 color dots */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          <ellipse cx="46" cy="42" rx="10" ry="8" fill="url(#sub-pal)" />
          <circle cx="42" cy="40" r="1.8" fill="#38BDF8" />
          <circle cx="47" cy="39" r="1.8" fill="#F43F5E" />
          <circle cx="49" cy="44" r="1.8" fill="#EAB308" />
          <ellipse cx="40" cy="44" rx="1.5" ry="1.2" fill="#94A3B8" />
        </g>
      </svg>
    </div>
  );
}

// 07. CMS Development Icon: WordPress emblem with Cog/Gear Badge
function CMSIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wp-bg" x1="10" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A2E3B" />
            <stop offset="0.7" stopColor="#161821" />
            <stop offset="1" stopColor="#0B0D12" />
          </linearGradient>
          <linearGradient id="gear-grad" x1="38" y1="36" x2="56" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        {/* Outer Circular/Squircle WordPress Base */}
        <rect x="8" y="10" width="44" height="44" rx="14" fill="url(#wp-bg)" />
        <rect x="8.5" y="10.5" width="43" height="43" rx="13.5" stroke="#475569" strokeOpacity="0.4" />

        {/* Circular Ring */}
        <circle cx="30" cy="32" r="15" stroke="#F8FAFC" strokeWidth="2" strokeOpacity="0.85" />

        {/* WordPress "W" Emblem Vector */}
        <path
          d="M20 27L25 38L27.5 31L25.5 27H20Z"
          fill="#F8FAFC"
        />
        <path
          d="M40 27L35 38L32.5 31L34.5 27H40Z"
          fill="#F8FAFC"
        />
        <path
          d="M26.5 38L29 44L31.5 38L30 34L28.5 34L26.5 38Z"
          fill="#F8FAFC"
        />

        {/* Precision Gear / Cog Badge at bottom right */}
        <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.25))">
          <circle cx="47" cy="45" r="7" fill="url(#gear-grad)" />
          {/* Gear teeth */}
          <path
            d="M47 36V38M47 52V54M38 45H40M54 45H56M40.6 38.6L42 40M52 50L53.4 51.4M40.6 51.4L42 50M52 40L53.4 38.6"
            stroke="#1E293B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="47" cy="45" r="2.8" fill="#1E293B" />
        </g>
      </svg>
    </div>
  );
}

// 08. Code & Development Icon: Terminal squircle with </> and Git commit diamond
function CodeDevIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="code-bg" x1="10" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2E3342" />
            <stop offset="1" stopColor="#0B0D12" />
          </linearGradient>
          <linearGradient id="git-grad" x1="36" y1="36" x2="56" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Main Squircle Terminal */}
        <rect x="8" y="10" width="44" height="44" rx="14" fill="url(#code-bg)" />
        <rect x="8.5" y="10.5" width="43" height="43" rx="13.5" stroke="#475569" strokeOpacity="0.4" />

        {/* Code </> brackets */}
        <path d="M22 25L17 30L22 35" stroke="#F8FAFC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 25L39 30L34 35" stroke="#F8FAFC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 23L26 37" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

        {/* Git Branch / Commit Node Diamond Badge */}
        <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.25))">
          <rect
            x="40"
            y="38"
            width="12"
            height="12"
            rx="3"
            transform="rotate(45 46 44)"
            fill="url(#git-grad)"
          />
          {/* Git Branch Lines inside diamond */}
          <line x1="43" y1="41" x2="43" y2="47" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="43" cy="41" r="1.2" fill="#1E293B" />
          <circle cx="43" cy="47" r="1.2" fill="#1E293B" />
          <path d="M43 45C45 45 47 44 47 42" stroke="#1E293B" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="47" cy="42" r="1.2" fill="#1E293B" />
        </g>
      </svg>
    </div>
  );
}

// 09. Mobile & Cross-Platform Icon: Smartphone frame with React Atom badge
function MobileIcon() {
  return (
    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
      <svg
        className="w-14 h-14 drop-shadow-[0_8px_16px_rgba(15,23,42,0.18)]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="phone-body" x1="10" y1="8" x2="44" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A2E3B" />
            <stop offset="1" stopColor="#0E1015" />
          </linearGradient>
          <linearGradient id="phone-screen" x1="16" y1="12" x2="38" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0F2FE" />
            <stop offset="0.6" stopColor="#BAE6FD" />
            <stop offset="1" stopColor="#7DD3FC" />
          </linearGradient>
          <linearGradient id="atom-grad" x1="36" y1="34" x2="56" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Smartphone Outer Chassis */}
        <rect x="12" y="8" width="28" height="48" rx="7" fill="url(#phone-body)" />
        <rect x="12.5" y="8.5" width="27" height="47" rx="6.5" stroke="#475569" strokeOpacity="0.4" />

        {/* Smartphone Screen Glass */}
        <rect x="14.5" y="12" width="23" height="40" rx="4" fill="url(#phone-screen)" />

        {/* Phone Top Notch / Speaker Slit */}
        <rect x="22" y="10" width="8" height="1.5" rx="0.75" fill="#475569" />

        {/* Floating React/Flutter Atom Badge at bottom right */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          <circle cx="46" cy="42" r="10" fill="url(#atom-grad)" />
          {/* Orbital Atom Rings */}
          <ellipse cx="46" cy="42" rx="7" ry="2.6" stroke="#1E293B" strokeWidth="1.2" transform="rotate(0 46 42)" />
          <ellipse cx="46" cy="42" rx="7" ry="2.6" stroke="#1E293B" strokeWidth="1.2" transform="rotate(60 46 42)" />
          <ellipse cx="46" cy="42" rx="7" ry="2.6" stroke="#1E293B" strokeWidth="1.2" transform="rotate(120 46 42)" />
          {/* Central Nucleus */}
          <circle cx="46" cy="42" r="1.6" fill="#1E293B" />
        </g>
      </svg>
    </div>
  );
}

// Icon Map helper to pair each service with its vector graphic
const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "01": <FrontendIcon />,
  "02": <FullStackIcon />,
  "03": <CustomWebIcon />,
  "04": <UIUXIcon />,
  "05": <ProductDesignIcon />,
  "06": <CustomDesignIcon />,
  "07": <CMSIcon />,
  "08": <CodeDevIcon />,
  "09": <MobileIcon />,
};

/* ==========================================================================
   Services Section Component
   ========================================================================== */

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-28 lg:py-36 bg-[#0E101C]/85 border-t border-white/10 text-white overflow-hidden"
    >
      {/* Subtle Ambient Studio Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Top Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-16 lg:mb-20">
          <div>
            {/* Pill Eyebrow Tag with Green Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
              <span className="text-xs font-semibold text-white/80 tracking-wide">
                My Services
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-white leading-[1.15]">
              Services &amp; Expertise
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              I build modern, fast and scalable digital products. From custom websites
              to full-stack web applications, I turn ideas into real solutions.
            </p>
          </div>

          {/* Decorative Handwritten Slogan & Curved Arrow from Reference */}
          <div className="hidden lg:flex flex-col items-end justify-center select-none pt-2">
            <div className="font-serif italic text-right text-amber-300/40 leading-snug text-lg font-medium tracking-tight">
              <div>Clean Code</div>
              <div>Creative Design</div>
              <div>Real Results</div>
            </div>
            {/* Curved Hand-drawn SVG Arrow pointing down to cards */}
            <svg
              className="w-16 h-12 text-amber-400/40 mt-1 mr-5"
              viewBox="0 0 60 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M48 6 C38 20, 24 28, 12 31" />
              <path d="M20 30 L12 31 L14 24" />
            </svg>
          </div>
        </div>

        {/* 3-Column Grid for the 9 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {SERVICES.map((service) => {
            const icon = SERVICE_ICONS[service.number] || SERVICE_ICONS["01"];

            return (
              <div
                key={service.number}
                className="group relative bg-[#12131A] border border-white/10 rounded-[28px] p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-amber-400/35 hover:-translate-y-1.5 transition-all duration-300 ease-out"
              >
                <div>
                  {/* Card Top Row: Visual 3D Icon on Left + Category Pill on Right */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {icon}
                    <span className="text-[11px] font-semibold text-white/70 bg-white/[0.06] px-3.5 py-1 rounded-full border border-white/10 tracking-tight whitespace-nowrap mt-1">
                      {service.badge || service.title}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-[1.32rem] font-bold text-white tracking-tight mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-[0.88rem] text-white/60 leading-relaxed mb-6 font-normal min-h-[42px]">
                    {service.description}
                  </p>

                  {/* Checklist of Deliverables */}
                  <ul className="space-y-2.5 mb-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[0.82rem] font-medium text-white/80"
                      >
                        <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                          <svg
                            className="w-2.5 h-2.5"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="2.5 6.5 4.8 9 9.5 3.5" />
                          </svg>
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom-Right Circular Arrow Button */}
                <div className="flex justify-end pt-2">
                  <Link
                    href="/contact"
                    aria-label={`Get started with ${service.title}`}
                    className="w-8 h-8 rounded-full bg-white/10 text-white/70 flex items-center justify-center border border-white/10 shadow-sm group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 group-hover:scale-105 transition-all duration-200"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action & Value Highlights */}
        <div className="flex flex-col items-center justify-center mt-14 sm:mt-16 lg:mt-20">
          {/* Main Sunset Gradient Pill Button with Rolling Text */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-sm sm:text-base font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
            <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-6 select-none items-center justify-center">
              <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                Let&apos;s Build Something Great
              </span>
              <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-extrabold">
                Start Your Project
              </span>
            </span>
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shrink-0 border border-white/30">
              <ArrowUpRight className="w-4 h-4 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5" />
              <ArrowUpRight className="w-4 h-4 text-amber-200 absolute transform -translate-x-5 translate-y-5 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
          </Link>

          {/* 4 Feature Trust Indicators below CTA button */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 text-xs sm:text-sm font-medium text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Fast Performance</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Client Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Modern Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
