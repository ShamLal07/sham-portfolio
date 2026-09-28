"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";

interface TechDetail {
  name: string;
  badge: string;
  level: "strong" | "mid" | "tool";
  desc: string;
  useCase: string;
  techKey: string;
}

interface TabCategory {
  id: string;
  label: string;
  icon: string;
  items: TechDetail[];
}

// Custom High-Fidelity SVG Brand Icons
function TechBrandIcon({ techKey }: { techKey: string }) {
  switch (techKey) {
    case "figma":
      return (
        <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );
    case "threejs":
      return (
        <svg className="w-6 h-6 text-[#946C00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className="w-6 h-6 text-[#0E0E14]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8.5 7.5v9h2v-5.2l4.9 5.2h1.6v-9h-2v5.2l-4.9-5.2H8.5z" />
        </svg>
      );
    case "react":
      return (
        <svg className="w-6 h-6 text-[#087ea4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#087ea4" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className="w-6 h-6 text-[#0ea5e9]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case "shopify":
      return (
        <svg className="w-6 h-6 text-[#7AB55C]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.337 3.52c-.08-.07-.2-.08-.28-.03-.08.05-.12.14-.11.23l.42 2.45c-.47-.21-.99-.33-1.55-.33-1.92 0-2.34 1.26-2.34 1.76 0 1.25 1.76 1.73 1.76 2.63 0 .5-.4.81-1.07.81-.79 0-1.42-.39-1.42-.39l-.26 1.34s.7.38 1.66.38c2.05 0 2.54-1.34 2.54-1.89 0-1.36-1.76-1.74-1.76-2.62 0-.42.34-.73.96-.73.49 0 .93.18 1.2.32l.2-1.14zm4.8 2.92c-.11-.08-.26-.07-.36.02-.1.08-.14.21-.11.33l1.83 10.82-10.4-1.98-2.69-12.72c-.02-.12-.11-.21-.23-.23l-3.32-.59c-.14-.02-.27.06-.31.19-.04.14.04.28.18.32l3.07.55 2.66 12.59c.02.1.09.18.19.2l11.08 2.11c.03.01.07.01.1 0 .09-.02.16-.08.19-.17l2.06-11.23c.03-.12-.02-.24-.14-.32z" />
        </svg>
      );
    case "wordpress":
      return (
        <svg className="w-6 h-6 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm-8.23 9.999c0-1.637.49-3.158 1.328-4.437l4.47 12.247c-3.418-1.57-5.798-4.908-5.798-7.81zm8.23 8.231c-.961 0-1.884-.158-2.75-.443l3.08-8.948 3.16 8.657c-1.076.471-2.257.734-3.49.734zm5.556-2.825l2.673-7.72c.677 1.353 1.066 2.879 1.066 4.495 0 2.508-1.125 4.757-3.739 6.225zM15.714 8.28c.453-.023.864-.074.864-.074.409-.049.362-.647-.046-.624 0 0-1.23.098-2.02.098-.742 0-1.996-.098-1.996-.098-.409-.023-.456.598-.046.624 0 0 .387.051.795.074l-1.18 3.528-1.88-5.602c.453-.023.863-.074.863-.074.409-.049.363-.647-.046-.624 0 0-1.23.098-2.02.098-.168 0-.376-.005-.595-.015C10.01 4.108 10.976 3.77 12 3.77c2.316 0 4.417 1.002 5.867 2.607-.066.002-.128.006-.184.006-.818 0-1.396.711-1.396 1.472 0 .685.397 1.258.82 1.944.326.545.698 1.237.698 2.234 0 .708-.2 1.573-.591 2.548l-1.5-6.299z" />
        </svg>
      );
    case "motion":
      return (
        <svg className="w-6 h-6 text-[#946C00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "seo":
      return (
        <svg className="w-6 h-6 text-[#0f7a4a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-[#946C00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
}

const TECH_TABS: TabCategory[] = [
  {
    id: "frontend",
    label: "Frontend & Full-Stack",
    icon: "i-code",
    items: [
      {
        techKey: "nextjs",
        name: "Next.js 15 App Router",
        badge: "Core Mastery",
        level: "strong",
        desc: "Server components, streaming SSR, edge middleware, dynamic routing, and caching.",
        useCase: "Enterprise web platforms & scalable digital SaaS products",
      },
      {
        techKey: "react",
        name: "React 19 & TypeScript",
        badge: "Strictly Typed",
        level: "strong",
        desc: "Type-safe interfaces, custom reactive hooks, memoized renders, and state machines.",
        useCase: "High-velocity interactive client applications & analytics",
      },
      {
        techKey: "tailwind",
        name: "Tailwind CSS & Modern CSS",
        badge: "Design Systems",
        level: "strong",
        desc: "Fluid clamp typography, custom variables, container queries, and sub-millisecond paint.",
        useCase: "Pixel-perfect responsive builds with zero runtime weight",
      },
      {
        techKey: "threejs",
        name: "JavaScript & Web APIs",
        badge: "Native Core",
        level: "strong",
        desc: "Canvas 2D, WebGL shaders, async workers, intersection observers, and audio engines.",
        useCase: "High-performance browser applications and creative kinetic motion",
      },
    ],
  },
  {
    id: "design-3d",
    label: "Design, 3D & Creative",
    icon: "i-pen",
    items: [
      {
        techKey: "figma",
        name: "Figma Pro Architecture",
        badge: "Lead Designer",
        level: "strong",
        desc: "Atomic design tokens, responsive auto-layout, interactive prototypes, and component variables.",
        useCase: "Complete web & mobile UX/UI systems ready for code",
      },
      {
        techKey: "threejs",
        name: "Three.js & WebGL 3D",
        badge: "Specialist 3D",
        level: "strong",
        desc: "Interactive 3D geometry meshes, particle fields, ambient lighting, and GPU shaders.",
        useCase: "Immersive hero banners and 3D kinetic interaction models",
      },
      {
        techKey: "motion",
        name: "GSAP & Kinetic Motion",
        badge: "Cinema Flow",
        level: "strong",
        desc: "ScrollTrigger pinning, SVG morphs, timeline choreography, and velocity gestures.",
        useCase: "Award-winning scroll experiences and micro-interactions",
      },
      {
        techKey: "figma",
        name: "Design Token Architecture",
        badge: "1:1 Fidelity",
        level: "strong",
        desc: "Exact color hierarchies, fluid spacing matrices, and typography curves matching code.",
        useCase: "Zero handoff decay between design mockup and production build",
      },
    ],
  },
  {
    id: "ecommerce-cms",
    label: "E-Commerce & CMS Platforms",
    icon: "i-cart",
    items: [
      {
        techKey: "shopify",
        name: "Custom Shopify Liquid",
        badge: "Revenue Engine",
        level: "strong",
        desc: "Bespoke Liquid section schemas, slide-out mini carts, and high-conversion checkout flows.",
        useCase: "Luxury direct-to-consumer flagship storefronts with instant loading",
      },
      {
        techKey: "wordpress",
        name: "WordPress & ACF Pro",
        badge: "Client Freedom",
        level: "strong",
        desc: "Modular flexible content blocks, custom post types, and zero bloated page builders.",
        useCase: "Corporate platforms where marketing teams update content autonomously",
      },
      {
        techKey: "shopify",
        name: "WooCommerce Architectures",
        badge: "Full Control",
        level: "strong",
        desc: "Hook-driven custom templating, multi-currency gateways, and custom checkout logic.",
        useCase: "Tailored online shopping systems requiring full infrastructure ownership",
      },
      {
        techKey: "seo",
        name: "Technical SEO & AIO Tuning",
        badge: "Organic Growth",
        level: "strong",
        desc: "JSON-LD Schema graphs, OpenGraph cards, canonical routes, and 100/100 Core Web Vitals.",
        useCase: "Google search dominance and AI Overview citation indexing",
      },
    ],
  },
];

export function TechStackTabs() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 180);
  };

  const currentCategory =
    TECH_TABS.find((t) => t.id === activeTab) || TECH_TABS[0];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Category Tab Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-gray-200/90 rounded-full mb-10 w-fit mx-auto shadow-sm">
        {TECH_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all duration-300 outline-none ${
                isActive
                  ? "bg-[#0E0E14] text-[#EFBD30] shadow-md"
                  : "bg-transparent text-gray-600 hover:text-black hover:bg-gray-100"
              }`}
            >
              <Icon
                name={tab.icon}
                className={`w-4 h-4 ${isActive ? "text-[#EFBD30]" : "text-gray-500"}`}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Spacious Architectural Geometric Cards Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 transition-all duration-300 ${
          isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        {currentCategory.items.map((tech) => (
          <div
            key={tech.name}
            className="group relative"
          >
            {/* Custom Chamfered Architectural Shape */}
            <article
              className="relative h-full bg-white hover:bg-[#FFFDF5] border border-gray-200/90 hover:border-[#EFBD30] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5"
              style={{
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              {/* Gold Angled Accent Stripe */}
              <div
                className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, rgba(239,189,48,0.4) 50%)",
                }}
              />

              {/* Top Row: Brand Icon Pod + Badge */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 group-hover:border-[#EFBD30]/40 group-hover:bg-[#EFBD30]/10 flex items-center justify-center transition-all duration-300 shadow-inner">
                    <TechBrandIcon techKey={tech.techKey} />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#EFBD30]/15 text-[#946C00] border border-[#EFBD30]/30">
                    {tech.badge}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-lg font-bold font-display text-[#0E0E14] group-hover:text-[#946C00] transition-colors mb-2">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4B4B58] leading-relaxed mb-4">
                  {tech.desc}
                </p>
              </div>

              {/* Bottom Target Use Case */}
              <div className="pt-4 border-t border-gray-100 mt-auto">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                  Primary Application
                </span>
                <p className="text-xs text-[#0E0E14] font-medium leading-normal m-0 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EFBD30] inline-block shrink-0" />
                  {tech.useCase}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
