import React from "react";
import Link from "next/link";
import {
  Compass,
  Palette,
  Code2,
  Gauge,
  Rocket,
  ArrowRight
} from "lucide-react";

interface StepItem {
  number: string;
  displayNum: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "up" | "down";
}

const STEPS: StepItem[] = [
  {
    number: "01",
    displayNum: "1",
    title: "Discovery & Strategy",
    description: "Clarifying project goals, structure, and technical requirements before building.",
    icon: <Compass className="w-6 h-6 text-amber-400" />,
    position: "up"
  },
  {
    number: "02",
    displayNum: "2",
    title: "Figma UI/UX Design",
    description: "Crafting clean, responsive layouts in Figma with 100% design fidelity.",
    icon: <Palette className="w-6 h-6 text-amber-400" />,
    position: "down"
  },
  {
    number: "03",
    displayNum: "3",
    title: "Frontend & CMS Build",
    description: "Pixel-accurate code implementation across WordPress, Shopify, or React.",
    icon: <Code2 className="w-6 h-6 text-amber-400" />,
    position: "up"
  },
  {
    number: "04",
    displayNum: "4",
    title: "Testing & Performance",
    description: "Cross-device responsiveness, Core Web Vitals speed tuning, and QA.",
    icon: <Gauge className="w-6 h-6 text-amber-400" />,
    position: "down"
  },
  {
    number: "05",
    displayNum: "5",
    title: "Launch & Handover",
    description: "Final domain deployment, analytics setup, and direct video walkthrough.",
    icon: <Rocket className="w-6 h-6 text-amber-400" />,
    position: "up"
  }
];

export function Process() {
  return (
    <section className="py-20 md:py-32 bg-transparent text-white border-t border-white/10 relative overflow-hidden" id="process">
      <div className="site-container relative z-10">
        {/* Centered Header matching reference image */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-bold tracking-wide mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight mb-4 leading-tight">
            Our simple 5-step process
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
            No complicated process, no surprises. Here is exactly what happens when you work with me.
          </p>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-sm font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all overflow-hidden"
          >
            <div className="relative overflow-hidden h-4 flex flex-col justify-center select-none">
              <span className="block transform transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Start a Project
              </span>
              <span className="absolute inset-0 block transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-amber-100 font-extrabold">
                Let&apos;s Build Together
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-200 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* DESKTOP WAVE FLOW (lg / xl screens) */}
        <div className="hidden lg:block relative w-full h-[460px] mx-auto max-w-6xl">
          {/* Continuous Sinusoidal Wave SVG Ribbon */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 460"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Soft glow aura line */}
              <path
                d="M 20 310 C 60 310, 80 310, 100 310 C 180 310, 220 150, 300 150 C 380 150, 420 310, 500 310 C 580 310, 620 150, 700 150 C 780 150, 820 310, 900 310 L 980 310"
                stroke="#F59E0B"
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-25 blur-[4px]"
              />
              {/* Crisp Amber/Orange Wave Ribbon */}
              <path
                d="M 20 310 C 60 310, 80 310, 100 310 C 180 310, 220 150, 300 150 C 380 150, 420 310, 500 310 C 580 310, 620 150, 700 150 C 780 150, 820 310, 900 310 L 980 310"
                stroke="#F59E0B"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 5 Alternating Process Steps positioned along the wave */}
          {STEPS.map((step, idx) => {
            const leftPct = 10 + idx * 20; // 10%, 30%, 50%, 70%, 90%
            const isTrough = step.position === "up"; // Node at y=310, text ABOVE
            const nodeTopPct = isTrough ? 67.4 : 32.6; // exact alignment with SVG wave

            return (
              <div
                key={step.number}
                className="absolute -translate-x-1/2 group"
                style={{ left: `${leftPct}%`, width: "190px" }}
              >
                {/* Floating Icon Box sitting directly on the Wave Curve */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ top: `${(nodeTopPct / 100) * 460}px` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#12131A] border border-white/20 shadow-[0_12px_28px_-4px_rgba(245,158,11,0.25)] flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:shadow-[0_16px_36px_-4px_rgba(245,158,11,0.45)] group-hover:border-amber-400">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content Block (Alternating Above / Below the Node) */}
                <div
                  className="absolute left-0 right-0 z-10"
                  style={{
                    top: isTrough ? "50px" : "210px"
                  }}
                >
                  <div className="relative">
                    {/* Big Faint Ghost Number matching reference image */}
                    <div className="text-5xl font-extrabold text-white/[0.08] select-none tracking-tighter leading-none mb-1 font-mono group-hover:text-amber-400/25 transition-colors">
                      {step.displayNum}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors leading-snug">
                      {step.title}
                    </h3>

                    {/* Minimal 2-Line Description */}
                    <p className="text-xs text-white/60 leading-relaxed mt-1.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET FALLBACK (< lg screens) */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-white/10 pointer-events-none" />

          <div className="space-y-8 relative z-10 pl-2">
            {STEPS.map((step) => (
              <div key={step.number} className="flex items-start gap-5 group">
                {/* Floating Node */}
                <div className="w-12 h-12 rounded-xl bg-[#12131A] border border-white/20 shadow-md flex items-center justify-center shrink-0 z-10 group-hover:scale-110 group-hover:border-amber-400 transition-all">
                  {step.icon}
                </div>

                {/* Text Block with Ghost Number */}
                <div className="pt-0.5 flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-extrabold text-white/15 font-mono">
                      {step.displayNum}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
