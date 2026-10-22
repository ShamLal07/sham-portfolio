"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  Search,
  Code2,
  ShoppingBag,
  Link2,
  Megaphone,
  FileSearch,
  Layers,
  Palette,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// Brand WordPress SVG icon
function WordPressIcon() {
  return (
    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.18-1.85l3.87-10.6 3.97 10.87A8.16 8.16 0 0 1 12 20.2zm-6.84-8.2a8.07 8.07 0 0 1 1.25-4.32l4 10.95L7.1 12.87a6.76 6.76 0 0 1-.74-.87zm11.7 6.47l-3.32-9.62c.57-.03 1.08-.09 1.08-.09a.46.46 0 0 0 .42-.48.46.46 0 0 0-.46-.44s-1.38.11-2.28.11c-.85 0-2.25-.11-2.25-.11a.46.46 0 0 0-.46.45.46.46 0 0 0 .44.47s.48.06 1 .09l1.49 4.09-2.11 6.32L6.87 6.64A8.2 8.2 0 0 1 18.6 7.82l-1.74 10.65z" />
    </svg>
  );
}

export interface ServiceData {
  id: string;
  category: "web-dev" | "seo-marketing" | "ecommerce" | "strategy-growth";
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  deliverables: string[];
}

export const ALL_SERVICES: ServiceData[] = [
  // 1. Custom WordPress Development
  {
    id: "wordpress",
    category: "web-dev",
    title: "Custom WordPress Development",
    shortDesc: "Build powerful, fast, and easy-to-manage WordPress and custom CMS platforms.",
    icon: <WordPressIcon />,
    deliverables: [
      "Custom theme development & Elementor/Gutenberg",
      "Plugin integration & bespoke functionality",
      "Core Web Vitals & speed performance tuning",
    ],
  },
  // 2. E-Commerce & Shopify
  {
    id: "shopify",
    category: "ecommerce",
    title: "E-Commerce & Shopify",
    shortDesc: "End-to-end e-commerce store architecture and scalable conversion solutions.",
    icon: <ShoppingBag className="w-6 h-6" />,
    deliverables: [
      "Shopify & WooCommerce custom store builds",
      "Secure payment gateway & multi-currency setup",
      "Custom checkout funnels & conversion rate optimization",
    ],
  },
  // 3. Off-Page SEO & Backlinks
  {
    id: "offpage-seo",
    category: "seo-marketing",
    title: "Off-Page SEO & Backlinks",
    shortDesc: "Tailored applications and authority strategies that solve real business rankings.",
    icon: <Link2 className="w-6 h-6" />,
    deliverables: [
      "High-quality authoritative backlink acquisition",
      "Brand outreach & digital PR distribution",
      "Domain authority, trust flow & visibility growth",
    ],
  },
  // 4. Meta Ads & Paid Acquisition
  {
    id: "meta-ads",
    category: "seo-marketing",
    title: "Meta Ads & Paid Acquisition",
    shortDesc: "Meta ads and acquisition funnels that turn target audiences into loyal clients.",
    icon: <Megaphone className="w-6 h-6" />,
    deliverables: [
      "Ad creative design, visual hook & copy crafting",
      "Precision retargeting & lookalike audience scaling",
      "ROAS tracking, pixel integrations & CBO tuning",
    ],
  },
  // 5. Technical & On-Page SEO
  {
    id: "technical-seo",
    category: "seo-marketing",
    title: "Technical & On-Page SEO",
    shortDesc: "Comprehensive technical audits and search architecture that drive long-term organic growth.",
    icon: <FileSearch className="w-6 h-6" />,
    deliverables: [
      "Deep technical website audits & crawlability fixes",
      "Keyword architecture, heading hierarchy & internal links",
      "JSON-LD Schema markup, sitemap & Core Web Vitals",
    ],
  },
  // 6. Full-Stack Web Apps
  {
    id: "fullstack-apps",
    category: "web-dev",
    title: "Full-Stack Web Apps",
    shortDesc: "End-to-end modern web applications and scalable cloud-hosted business solutions.",
    icon: <Layers className="w-6 h-6" />,
    deliverables: [
      "Custom Next.js & React single page / full-stack apps",
      "RESTful API integrations, auth & databases",
      "Scalable Vercel/Node cloud deployment & SSG/SSR",
    ],
  },
  // 7. UI/UX Design
  {
    id: "ui-ux",
    category: "strategy-growth",
    title: "UI/UX Design",
    shortDesc: "User-centered design systems and digital interfaces that turn visitors into loyal customers.",
    icon: <Palette className="w-6 h-6" />,
    deliverables: [
      "Interactive Figma wireframes & prototypes",
      "Modern, luxury clean dark/light design systems",
      "User journey mapping & friction-free checkout flows",
    ],
  },
  // 8. Social Media Marketing
  {
    id: "social-media",
    category: "seo-marketing",
    title: "Social Media Marketing",
    shortDesc: "Strategic brand storytelling and high-impact social campaigns to expand audience reach.",
    icon: <MessageCircle className="w-6 h-6" />,
    deliverables: [
      "Social growth strategy & scheduled editorial calendar",
      "High-engagement creative assets & post graphics",
      "Community management & audience interaction",
    ],
  },
  // 9. Website Support & Maintenance
  {
    id: "maintenance",
    category: "strategy-growth",
    title: "Support & Maintenance",
    shortDesc: "Get found, get traffic, and ensure your website runs 24/7 without downtime.",
    icon: <ShieldCheck className="w-6 h-6" />,
    deliverables: [
      "24/7 technical assistance, uptime & security monitoring",
      "Regular CMS, theme, database & plugin updates",
      "Continuous speed audits & ongoing performance tuning",
    ],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "web-dev", label: "Web Development" },
  { id: "seo-marketing", label: "SEO & Marketing" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "strategy-growth", label: "Strategy & Growth" },
];

export function ServicesExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      // Category filter
      const matchesCategory =
        activeCategory === "all" || service.category === activeCategory;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.title.toLowerCase().includes(q) ||
        service.shortDesc.toLowerCase().includes(q) ||
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
          <span>MY SERVICES</span>
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
          Explore expert-led web development, SEO, and CMS solutions designed to scale your brand and maximize ROI.
        </p>
      </div>

      {/* 2. Interactive Search Bar */}
      <div className="relative max-w-xl mx-auto mb-6">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-white/40 absolute left-4.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services (e.g., WordPress, SEO, Shopify, Next.js, Ads)..."
            className="w-full pl-11 pr-12 py-3.5 rounded-full bg-white/[0.05] border border-white/12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:bg-white/[0.08] focus:ring-2 focus:ring-amber-500/20 transition-all shadow-lg"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white/80 flex items-center justify-center text-xs transition-colors cursor-pointer"
              title="Clear search"
            >
              ✕
            </button>
          ) : (
            <div className="absolute right-2.5 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-sm pointer-events-none">
              <Search className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>

      {/* 3. Filter Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
        {CATEGORIES.map((cat) => {
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

      {/* 4. 3x3 Bento Service Cards Grid */}
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
                {/* Glossy Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-[#171922] border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:border-amber-400 group-hover:bg-amber-500/10 transition-all shadow-md">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors tracking-tight">
                  {service.title}
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

              {/* Action Link at Bottom */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group/link cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-[#12131A] rounded-2xl border border-white/10 max-w-lg mx-auto mb-20">
          <p className="text-base text-white/80 font-bold mb-2">No matching services found</p>
          <p className="text-xs text-white/50 mb-5">
            Try adjusting your search query or reset the filter to explore all services.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-5 py-2 rounded-full bg-amber-500 text-white text-xs font-bold hover:bg-amber-400 transition-colors"
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
