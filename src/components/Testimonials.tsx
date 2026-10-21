"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/services";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1
    );
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 border-t border-white/10 bg-transparent text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Title */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3 border border-amber-500/20">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              What Clients Say
            </h2>
            <p className="text-base text-white/60 max-w-[32ch] leading-relaxed">
              Real feedback from people I&apos;ve worked with around the world.
            </p>
          </div>

          {/* Right Testimonial Card */}
          <div className="lg:col-span-8">
            <div className="bg-[#12131A] border border-white/10 rounded-2xl p-7 sm:p-10 shadow-lg relative transition-all text-white">
              <Quote className="w-9 h-9 text-amber-400/20 mb-5" />

              <p className="text-base sm:text-lg text-white/90 font-medium leading-[1.75] mb-8">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <div className="text-base font-bold text-white">
                    {active.author}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {active.role}, {active.company}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-bold text-white/40">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="p-2.5 rounded-full border border-white/10 bg-white/[0.06] text-white/70 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/[0.12] active:scale-95 transition-all cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="p-2.5 rounded-full border border-white/10 bg-white/[0.06] text-white/70 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/[0.12] active:scale-95 transition-all cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
