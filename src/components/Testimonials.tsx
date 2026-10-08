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
    <section className="py-20 md:py-32 border-t border-[#E5E4DE]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Title */}
          <div className="lg:col-span-4">
            <div className="eyebrow-tag mb-3">TESTIMONIALS</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1117] tracking-tight mb-3">
              What Clients Say
            </h2>
            <p className="text-base text-[#575A65] max-w-[32ch] leading-relaxed">
              Real feedback from people I&apos;ve worked with around the world.
            </p>
          </div>

          {/* Right Testimonial Card */}
          <div className="lg:col-span-8">
            <div className="bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-12 shadow-sm relative transition-all">
              <Quote className="w-10 h-10 text-[#E5E4DE] mb-6" />

              <p className="text-lg sm:text-xl text-[#0F1117] font-medium leading-[1.75] mb-8">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#E5E4DE]">
                <div>
                  <div className="text-base font-bold text-[#0F1117]">
                    {active.author}
                  </div>
                  <div className="text-xs text-[#848792] mt-0.5">
                    {active.role}, {active.company}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono font-bold text-[#848792]">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="p-2.5 rounded-full border border-[#E5E4DE] bg-white text-[#575A65] hover:text-[#0F1117] hover:border-[#0F1117] hover:shadow-xs active:scale-95 transition-all cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="p-2.5 rounded-full border border-[#E5E4DE] bg-white text-[#575A65] hover:text-[#0F1117] hover:border-[#0F1117] hover:shadow-xs active:scale-95 transition-all cursor-pointer"
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
