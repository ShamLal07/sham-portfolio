"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/services";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1
    );
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIdx) =>
        prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = TESTIMONIALS[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-28 md:py-36 border-t border-white/10 bg-[#05070E] text-white overflow-hidden relative">
      {/* Background Studio Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/[0.04] blur-[150px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold mb-4 border border-blue-500/20 tracking-wider">
              CLIENT TRUST &bull; TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white tracking-tight mb-4 leading-tight">
              What Clients Say
            </h2>
            <p className="text-base text-slate-300 max-w-[34ch] leading-[1.8] mb-8 font-normal">
              Real feedback from founders, product teams, and businesses I&apos;ve worked with worldwide.
            </p>

            {/* Overall Rating Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/85 shadow-sm">
              <div className="flex items-center gap-0.5 text-blue-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white font-mono">5.0 / 5.0</span>
              <span className="text-white/40">&bull; 100% Satisfaction</span>
            </div>
          </motion.div>

          {/* Right Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:col-span-8"
          >
            <div className="bg-[#090C16] border border-white/10 hover:border-blue-500/40 rounded-3xl p-8 sm:p-11 shadow-2xl relative transition-all duration-300 text-white min-h-[320px] flex flex-col justify-between overflow-hidden">
              {/* Subtle top electric blue highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

              <Quote className="w-10 h-10 text-blue-400/20 mb-5 shrink-0" />

              <div className="relative overflow-hidden flex-1 flex flex-col justify-center">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-[1.8] mb-8">
                      &ldquo;{active.quote}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
                <div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {active.author}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {active.role}, <span className="text-blue-300 font-semibold">{active.company}</span>
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
                      className="p-2.5 rounded-full border border-white/10 bg-white/[0.06] text-white/70 hover:text-blue-300 hover:border-blue-500/40 hover:bg-blue-600/15 active:scale-90 transition-all cursor-pointer"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="p-2.5 rounded-full border border-white/10 bg-white/[0.06] text-white/70 hover:text-blue-300 hover:border-blue-500/40 hover:bg-blue-600/15 active:scale-90 transition-all cursor-pointer"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
