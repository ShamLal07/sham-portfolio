"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight, Search, Sparkles } from "lucide-react";
import { ALL_SERVICES_CATALOG, SERVICE_CATEGORIES } from "@/data/servicesCatalog";
import { ServiceBrandIcon } from "@/components/ServiceBrandIcon";

export function ServicesExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = useMemo(() => {
    return ALL_SERVICES_CATALOG.filter((service) => {
      // Category filter
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
        service.brandName.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        service.deliverables.some((d) => d.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div>
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-sm mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span>MY SERVICES ({ALL_SERVICES_CATALOG.length} CAPABILITIES)</span>
        </div>

        {/* Impactful Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
          Innovative Digital Services <br className="hidden sm:inline" />
          For Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
            Growth
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-normal">
          Explore expert-led web development, UI/UX design, E-Commerce, and CMS solutions designed to scale your brand and maximize ROI.
        </p>
      </div>

      {/* 2. Interactive Search Bar */}
      <div className="relative max-w-xl mx-auto mb-6">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all services (e.g., WordPress, Shopify, UI/UX, Next.js, Web Design)..."
            className="w-full pl-5 pr-14 py-3.5 rounded-full bg-[#12131A] border border-white/15 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:bg-white/[0.08] focus:ring-2 focus:ring-amber-500/20 transition-all shadow-lg"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              style={{ right: "12px", top: "50%", transform: "translateY(-50%)" }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 text-white/90 flex items-center justify-center text-xs transition-colors cursor-pointer"
              title="Clear search"
            >
              ✕
            </button>
          ) : (
            <div
              style={{ right: "10px", top: "50%", transform: "translateY(-50%)" }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md pointer-events-none"
            >
              <Search className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>

      {/* 3. Filter Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
        {SERVICE_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? "bg-amber-500 text-white shadow-md shadow-orange-500/25 border border-amber-400 font-bold scale-105"
                  : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 4. Service Cards Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-20 sm:mb-24">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#12131A] rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-amber-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-xl group relative overflow-hidden"
            >
              {/* Top-Right Soft Amber Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/15 transition-all" />

              <div>
                {/* Header row with Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} border ${service.iconBorder} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md`}
                  >
                    <ServiceBrandIcon id={service.id} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] text-white/60 border border-white/10">
                    {service.deliveryTime}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors tracking-tight">
                  <Link href={`/services/${service.slug}`} className="hover:underline">
                    {service.title}
                  </Link>
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Deliverables Checklist with Amber Checkmark Icons */}
                <ul className="space-y-2.5 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-white/75 leading-tight"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links at Bottom */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group/link cursor-pointer"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>

                <Link
                  href={`/contact?service=${service.slug}`}
                  className="text-xs font-semibold text-white/50 hover:text-white transition-colors"
                >
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-[#12131A] rounded-2xl border border-white/10 max-w-lg mx-auto mb-20">
          <p className="text-base text-white/80 font-bold mb-2">No matching services found</p>
          <p className="text-xs text-white/50 mb-5">
            Try adjusting your search query or reset the filter to explore all {ALL_SERVICES_CATALOG.length} services.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-5 py-2 rounded-full bg-amber-500 text-white text-xs font-bold hover:bg-amber-400 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* 5. Bottom Consultation CTA Banner */}
      <div className="relative rounded-3xl border border-amber-500/30 bg-[#12131A] p-7 sm:p-10 lg:p-12 shadow-[0_10px_40px_-10px_rgba(245,120,30,0.2)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Ambient Warm Underglow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Scale?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Have a project in mind?
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-normal max-w-xl leading-relaxed">
            Let&apos;s discuss your ideas, goals and how I can help turn them into a real, high-converting digital solution.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_auto] text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300"
          >
            <span>Get a Free Consultation</span>
            <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
