"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  Search,
} from "lucide-react";

// 1. Authentic WordPress Brand Logo (Official Blue + White 'W')
function WordPressBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10.5" fill="#21759B" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zm0 18.06a8.54 8.54 0 01-5.18-1.74l3.77-10.33 3.86 10.59A8.53 8.53 0 0112 20.56zm-6.6-8.08c0-.6.1-1.18.28-1.72l3.86 10.57-2.6-7.14a6.45 6.45 0 01-.65-.77c-.59-.85-.89-1.87-.89-.94zm11.39 6.27l-3.23-9.37c.55-.03 1.05-.09 1.05-.09a.45.45 0 00.41-.47.45.45 0 00-.45-.43s-1.35.11-2.22.11c-.83 0-2.2-.11-2.2-.11a.45.45 0 00-.45.44.45.45 0 00.43.46s.47.06.98.09l1.45 3.99-2.06 6.16L7 6.94A8.56 8.56 0 0119.8 11.2c0 2.9-1.45 5.46-3.01 7.55z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 2. Authentic Shopify Brand Logo (Official Green Bag + White 'S')
function ShopifyBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <path
        d="M18.8 4.6c-.1-.3-.3-.4-.5-.4l-2.4-.2s-1.4-2.6-1.7-3c-.3-.4-.9-.6-1.4-.5-.1 0-.3.1-.4.2C12.2.9 10.9 2.2 9.9 3.5l-3.3 1c-.7.2-1.2.9-1.2 1.6L4 21.8l13.9 2.2 6.1-3.2L18.8 4.6z"
        fill="#95BF47"
      />
      <path
        d="M14.5 4.1L12.3 3.9C11.5 5.1 10.3 6.6 9.4 8l5.8-.8c-.3-1-.5-2-.7-3.1z"
        fill="#5E8E3E"
      />
      <path
        d="M12.9 8.8l-4.5.6c-.7 1-1.3 2.1-1.8 3.2l6.8-.9c-.2-1-.4-2-.5-2.9z"
        fill="#5E8E3E"
      />
      <path
        d="M12.6 11.2c-.4-.2-1.3-.4-2-.4-1.5 0-2.4.8-2.4 2 0 2.2 3.3 2.3 3.3 4.2 0 .8-.6 1.4-1.6 1.4-1 0-1.8-.5-2.2-.9l-.4 1.7c.6.5 1.6.8 2.5.8 2 0 3.3-1.1 3.3-2.7 0-2.5-3.4-2.4-3.4-4.2 0-.6.5-1.1 1.3-1.1.7 0 1.3.2 1.7.4l.2-1.2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 3. Official Meta Brand Logo (Meta Blue Gradient Infinity)
function MetaBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0668E1" />
          <stop offset="50%" stopColor="#0081FB" />
          <stop offset="100%" stopColor="#0256B8" />
        </linearGradient>
      </defs>
      <path
        fill="url(#metaGrad)"
        d="M12 7.15c-1.6-2.2-3.8-3.4-6.4-3.4C2.5 3.75 0 6.3 0 10.15c0 4.6 3.9 8.1 8.2 8.1 2.3 0 4.3-1 5.7-2.7 1.4 1.7 3.4 2.7 5.7 2.7 4.3 0 8.2-3.5 8.2-8.1 0-3.85-2.5-6.4-5.6-6.4-2.6 0-4.8 1.2-6.4 3.4zm-4.3 8.85c-2.7 0-4.8-2.3-4.8-5.85 0-2.4 1.4-4.1 3.3-4.1 1.7 0 3.1 1.2 4.2 3.1-1 2.7-2 5.3-2.7 6.85zm8.6 0c-.7-1.55-1.7-4.15-2.7-6.85 1.1-1.9 2.5-3.1 4.2-3.1 1.9 0 3.3 1.7 3.3 4.1 0 3.55-2.1 5.85-4.8 5.85z"
        transform="scale(0.85) translate(1.8, 1.8)"
      />
    </svg>
  );
}

// 4. Authentic Figma Brand Logo (Official Multi-Color)
function FigmaBrandLogo() {
  return (
    <svg className="w-6 h-7" viewBox="0 0 38 57" fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

// 5. Official Google 4-Color Logo (Technical & On-Page SEO)
function GoogleSeoBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

// 6. Next.js & React Atomic Brand Logo (Full-Stack Web Apps)
function FullStackBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#00D8FF" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.3" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
    </svg>
  );
}

// 7. Authority Backlinks Dual-Chain Brand Logo
function BacklinksBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="backlinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="url(#backlinkGrad)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="url(#backlinkGrad)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 8. Authentic Instagram / Meta Social Gradient Logo
function SocialMediaBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGrad)" />
      <circle cx="12" cy="12" r="4.2" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="#FFFFFF" />
    </svg>
  );
}

// 9. Cyber Security & Active 24/7 Shield Brand Logo
function SecurityShieldBrandLogo() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        fill="url(#shieldGrad)"
        fillOpacity="0.25"
        stroke="#10B981"
        strokeWidth="2"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#10B981"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface ServiceData {
  id: string;
  category: "web-dev" | "seo-marketing" | "ecommerce" | "strategy-growth";
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  deliverables: string[];
}

export const ALL_SERVICES: ServiceData[] = [
  // 1. Custom WordPress Development
  {
    id: "wordpress",
    category: "web-dev",
    title: "Custom WordPress Development",
    shortDesc: "Build powerful, fast, and easy-to-manage WordPress and custom CMS platforms.",
    icon: <WordPressBrandLogo />,
    iconBg: "bg-[#21759B]/10 hover:bg-[#21759B]/20",
    iconBorder: "border-[#21759B]/30 hover:border-[#21759B]/60",
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
    icon: <ShopifyBrandLogo />,
    iconBg: "bg-[#95BF47]/10 hover:bg-[#95BF47]/20",
    iconBorder: "border-[#95BF47]/30 hover:border-[#95BF47]/60",
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
    icon: <BacklinksBrandLogo />,
    iconBg: "bg-cyan-500/10 hover:bg-cyan-500/20",
    iconBorder: "border-cyan-500/30 hover:border-cyan-500/60",
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
    icon: <MetaBrandLogo />,
    iconBg: "bg-[#0668E1]/10 hover:bg-[#0668E1]/20",
    iconBorder: "border-[#0668E1]/30 hover:border-[#0668E1]/60",
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
    icon: <GoogleSeoBrandLogo />,
    iconBg: "bg-blue-500/10 hover:bg-blue-500/20",
    iconBorder: "border-blue-500/30 hover:border-blue-500/60",
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
    icon: <FullStackBrandLogo />,
    iconBg: "bg-[#00D8FF]/10 hover:bg-[#00D8FF]/20",
    iconBorder: "border-[#00D8FF]/30 hover:border-[#00D8FF]/60",
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
    icon: <FigmaBrandLogo />,
    iconBg: "bg-[#A259FF]/10 hover:bg-[#A259FF]/20",
    iconBorder: "border-[#A259FF]/30 hover:border-[#A259FF]/60",
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
    icon: <SocialMediaBrandLogo />,
    iconBg: "bg-[#d6249f]/10 hover:bg-[#d6249f]/20",
    iconBorder: "border-[#d6249f]/30 hover:border-[#d6249f]/60",
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
    icon: <SecurityShieldBrandLogo />,
    iconBg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    iconBorder: "border-emerald-500/30 hover:border-emerald-500/60",
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
        <div className="relative flex items-center w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search services (e.g., WordPress, Shopify, SEO, Meta Ads)..."
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
                {/* Glossy Authentic Brand Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} border ${service.iconBorder} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-md`}
                >
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
