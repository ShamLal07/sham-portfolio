"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "./Icons";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  metric: string;
  tag: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "Founder & CEO",
    company: "Aether Dynamics",
    location: "San Francisco, CA",
    quote:
      "Sham is that rare creative technologist who conceptualizes world-class UI/UX in Figma and translates it into flawless Next.js code. Our platform conversion increased by 140% immediately post-launch.",
    metric: "+140% Conversion Growth",
    tag: "Next.js & Telemetry UI",
    avatar: "MV",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    company: "Maison D'Or Luxury",
    location: "Paris, France",
    quote:
      "The custom Shopify Liquid build Sham engineered for our luxury jewelry catalog is breathtaking. Mobile pages render in under 0.8 seconds with an editorial magazine feel.",
    metric: "Sub-Second Load Times",
    tag: "Haute E-Commerce",
    avatar: "ER",
  },
  {
    name: "David Chen",
    role: "Head of Product",
    company: "Astro Markets",
    location: "London, UK",
    quote:
      "Collaborating directly with Sham saved us months of traditional agency bureaucracy. He understands 2D/3D motion, real-time data feeds, and technical SEO inside out.",
    metric: "Zero Agency Handoff Lag",
    tag: "Fintech Web Terminal",
    avatar: "DC",
  },
  {
    name: "Priya Sharma",
    role: "Digital Marketing Lead",
    company: "Velvet Atelier",
    location: "New Delhi, India",
    quote:
      "The custom WordPress ACF architecture is so intuitive our non-technical team updates entire collections effortlessly. What we signed off in Figma is exactly what runs in production.",
    metric: "Autonomous Client Publishing",
    tag: "WordPress ACF Pro",
    avatar: "PS",
  },
  {
    name: "Kavita Rao",
    role: "VP of Product",
    company: "Nexus AI Intelligence",
    location: "Bengaluru, India",
    quote:
      "From Figma design tokens to high-velocity React 19 micro-interactions, Sham executed our AI console with unmatched speed and aesthetic perfection. Truly an elite developer.",
    metric: "100/100 Core Web Vitals",
    tag: "AI Design Systems",
    avatar: "KR",
  },
  {
    name: "Alexander Wright",
    role: "Managing Partner",
    company: "Horizon Capital",
    location: "New York, NY",
    quote:
      "Finding an engineer who treats visual hierarchy with the respect of a master art director is nearly impossible. Sham is the standard for creative technology.",
    metric: "3x Marketing Engagement",
    tag: "Brand Flagship",
    avatar: "AW",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive visible cards listener
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="relative py-20 sm:py-28 bg-[#F1F3F6] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header with Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFBD30]/20 text-[#946C00] border border-[#EFBD30]/40 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFBD30] animate-pulse" />
              Verified Client Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0E0E14] tracking-tight leading-tight">
              Trusted by Innovators &amp; Founders Worldwide
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#4B4B58] leading-relaxed">
              Real testimonials from venture-backed startups, creative directors, and marketing leaders who scaled with our studio.
            </p>
          </div>

          {/* Slider Controls (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-[#EFBD30] hover:text-[#0E0E14] hover:border-[#EFBD30] text-gray-800 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
            >
              <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border border-gray-300 bg-white hover:bg-[#EFBD30] hover:text-[#0E0E14] hover:border-[#EFBD30] text-gray-800 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider Viewport Container */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="px-3 shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <article className="h-full bg-white border border-gray-200/90 hover:border-[#EFBD30] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 relative group">
                  {/* Top Bar: Stars + Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-1 text-[#EFBD30] text-sm">
                        {"★★★★★"}
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                        {t.tag}
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="text-sm sm:text-base text-[#2D2D38] leading-relaxed font-normal m-0 not-italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Bottom: Measured Metric + Author Info */}
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    {/* Metric pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFBD30]/15 text-[#946C00] text-xs font-bold mb-4">
                      <Icon name="i-check" className="w-3.5 h-3.5" />
                      <span>{t.metric}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EFBD30] to-[#f7cf5f] text-[#0E0E14] font-extrabold text-sm flex items-center justify-center shadow-sm shrink-0">
                        {t.avatar}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-[#0E0E14] tracking-tight truncate m-0">
                          {t.name}
                        </h4>
                        <p className="text-xs text-gray-500 truncate m-0">
                          {t.role} · <span className="text-gray-700">{t.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full border-none cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#EFBD30]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
