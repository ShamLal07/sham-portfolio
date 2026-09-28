"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

export function HeroVisual3D() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      className="hero-3d-wrapper relative mt-12 rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background glow */}
      <div className="hero-ambient-glow absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(239,189,48,0.18),_transparent_70%)] pointer-events-none z-[1]" />

      {/* Main 3D Banner Image with Perspective Tilt */}
      <div
        className="relative w-full aspect-video max-h-[520px] transition-transform duration-200 ease-out overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateY(${coords.x * 6}deg) rotateX(${
            coords.y * -6
          }deg)`,
        }}
      >
        <Image
          src="/hero-3d.jpg"
          alt="ShamWeb Creative 3D Digital Production & Kinetic Web Design"
          fill
          priority
          sizes="(max-width: 1240px) 100vw, 1240px"
          className="object-cover brightness-[0.92] contrast-[1.08]"
        />

        {/* Dynamic Video-style scanline overlay & dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,14,20,0.2)] to-[rgba(14,14,20,0.85)] pointer-events-none" />

        {/* Floating Glassmorphic Badges */}
        <div className="hero-badge hero-badge-top absolute top-6 left-6 bg-[#14141d]/80 backdrop-blur-md border border-[var(--accent)]/35 rounded-full px-4 py-2 inline-flex items-center gap-2.5 text-[#F8F9FA] text-xs font-semibold z-[2] shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
          Next-Gen AI &amp; WebGL Production
        </div>

        <div className="hero-badge hero-badge-bottom-left absolute bottom-7 left-7 z-[2] max-w-[380px]">
          <div className="bg-[#0E0E14]/85 backdrop-blur-lg border border-[var(--border)] rounded-xl p-4 sm:p-5 flex flex-col gap-1.5 shadow-xl">
            <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-bold uppercase tracking-wider">
              <Icon name="i-rocket" />
              <span>Full-Cycle Agency Execution</span>
            </div>
            <p className="m-0 text-sm text-[#F8F9FA] font-semibold leading-snug">
              Pro UI/UX Architecture · 2D/3D Kinetic Motion · Next.js &amp; Shopify
              Engineering
            </p>
          </div>
        </div>

        <div className="hero-badge hero-badge-bottom-right absolute bottom-7 right-7 z-[2] hidden sm:flex gap-3">
          <div className="bg-[#0E0E14]/85 backdrop-blur-lg border border-[var(--border)] rounded-xl px-4 py-3 text-center shadow-xl">
            <b className="block text-xl text-[var(--accent)] font-display">
              6+ Years
            </b>
            <span className="text-xs text-[#c4c5cc]">
              Design &amp; Dev Mastery
            </span>
          </div>

          <div className="bg-[#0E0E14]/85 backdrop-blur-lg border border-[var(--border)] rounded-xl px-4 py-3 text-center shadow-xl">
            <b className="block text-xl text-[#4cd08c] font-display">
              100/100
            </b>
            <span className="text-xs text-[#c4c5cc]">
              Performance Speed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
