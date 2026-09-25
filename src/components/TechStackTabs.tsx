"use client";

import React, { useState } from "react";
import { Icon } from "./Icons";

interface TechDetail {
  name: string;
  badge: string;
  level: "strong" | "mid" | "tool";
  desc: string;
  useCase: string;
}

interface TabCategory {
  id: string;
  label: string;
  icon: string;
  items: TechDetail[];
}

const TECH_TABS: TabCategory[] = [
  {
    id: "frontend",
    label: "Frontend Systems",
    icon: "i-code",
    items: [
      {
        name: "Next.js 15 / App Router",
        badge: "Core Stack",
        level: "strong",
        desc: "Server components, streaming SSR, dynamic routing, and edge caching.",
        useCase: "Enterprise websites & scalable SaaS architectures",
      },
      {
        name: "React 19 & TypeScript",
        badge: "Daily Production",
        level: "strong",
        desc: "Type-safe interfaces, custom hooks, memoized renders, and state machines.",
        useCase: "Interactive client applications & dynamic dashboards",
      },
      {
        name: "Tailwind CSS & Modern CSS",
        badge: "Design Systems",
        level: "strong",
        desc: "Fluid clamp scaling, custom CSS properties, safe-area insets, and zero bloat.",
        useCase: "Pixel-perfect, high-performance responsive UI",
      },
      {
        name: "JavaScript (ES6+) & Web APIs",
        badge: "Foundation",
        level: "strong",
        desc: "Native DOM manipulation, async workers, intersection observers, and audio/canvas.",
        useCase: "Lightweight, zero-dependency browser performance",
      },
    ],
  },
  {
    id: "design-3d",
    label: "Design & 3D Craft",
    icon: "i-pen",
    items: [
      {
        name: "Figma (Pro Architecture)",
        badge: "Daily Mastery",
        level: "strong",
        desc: "Atomic design tokens, interactive prototyping, autolayout, and developer handoff.",
        useCase: "Complete web & mobile product wireframes and design systems",
      },
      {
        name: "Three.js & WebGL",
        badge: "Specialized 3D",
        level: "mid",
        desc: "Interactive 3D geometry meshes, particle fields, ambient lighting, and GPU shaders.",
        useCase: "Immersive hero banners, interactive product visualizers",
      },
      {
        name: "Adobe Creative Suite",
        badge: "Production Art",
        level: "strong",
        desc: "Photoshop and Illustrator for high-resolution graphics, SVG assets, and textures.",
        useCase: "Custom branding assets, vector iconography, and retouching",
      },
      {
        name: "Design Token Architecture",
        badge: "Design-to-Code",
        level: "strong",
        desc: "Harmonized typography, HSL tailored palettes, elevation matrices, and grids.",
        useCase: "Guaranteed 1:1 fidelity between Figma and live Next.js builds",
      },
    ],
  },
  {
    id: "ecommerce-cms",
    label: "E-Commerce & CMS",
    icon: "i-cart",
    items: [
      {
        name: "Shopify (Liquid Theme Dev)",
        badge: "Revenue Engine",
        level: "strong",
        desc: "Bespoke Liquid section architecture, slide-out carts, and CRO checkout paths.",
        useCase: "Luxury direct-to-consumer storefronts with sub-second speeds",
      },
      {
        name: "WordPress (ACF Pro)",
        badge: "Custom Modeling",
        level: "strong",
        desc: "Modular flexible content blocks, custom post types, and zero bloated page builders.",
        useCase: "Corporate platforms with autonomous content management",
      },
      {
        name: "WooCommerce",
        badge: "Custom Stores",
        level: "strong",
        desc: "Hook-driven templating, custom payment gateways, and inventory relationships.",
        useCase: "Tailored e-commerce stores requiring full data ownership",
      },
      {
        name: "Webflow & Dynamic CMS",
        badge: "Rapid Production",
        level: "mid",
        desc: "Visual CMS modeling, custom script injections, and client-friendly dashboards.",
        useCase: "High-growth marketing landing pages and startup sites",
      },
    ],
  },
  {
    id: "motion",
    label: "Motion & Animation",
    icon: "i-rocket",
    items: [
      {
        name: "GSAP (ScrollTrigger)",
        badge: "Cinema Motion",
        level: "strong",
        desc: "Pinning, parallax scrubs, SVG morphing, and complex staggered timeline choreography.",
        useCase: "Award-winning scroll storytelling and micro-interactions",
      },
      {
        name: "Framer Motion",
        badge: "React Motion",
        level: "strong",
        desc: "Physics-based spring dynamics, layout animations, and gesture drag interactions.",
        useCase: "App-like transitions, modal drawers, and interactive buttons",
      },
      {
        name: "Hardware-Accelerated CSS",
        badge: "60fps Smooth",
        level: "strong",
        desc: "Transform3d, composite layers, keyframe animations, and reduced-motion fallbacks.",
        useCase: "Buttery-smooth hover states with zero battery drain",
      },
    ],
  },
  {
    id: "seo-ai",
    label: "SEO, Performance & AI",
    icon: "i-globe",
    items: [
      {
        name: "Technical On-Page SEO",
        badge: "Organic Growth",
        level: "strong",
        desc: "Canonical routing, semantic HTML5, clean URL structures, and meta tags.",
        useCase: "High Google Search visibility and crawlability",
      },
      {
        name: "Schema.org (JSON-LD)",
        badge: "AIO & Rich Snippets",
        level: "strong",
        desc: "Structured entity graphs (Organization, Person, ProfessionalService, Offer).",
        useCase: "Google Knowledge Panel and AI Overview (ChatGPT/Perplexity) citations",
      },
      {
        name: "Core Web Vitals Tuning",
        badge: "100/100 Scores",
        level: "strong",
        desc: "LCP, FID/INP, and CLS optimization, font preloading, and responsive images.",
        useCase: "Sub-second load times across global CDNs",
      },
      {
        name: "AI-Accelerated Engineering",
        badge: "Efficiency Multiplier",
        level: "tool",
        desc: "Cursor AI, Claude 3.7, ChatGPT 4o for rapid prototyping and clean refactoring.",
        useCase: "2x faster development velocity and rigorous testing",
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
    <div className="tech-tabs-container">
      {/* Category Tab Selector Bar */}
      <div
        className="tech-tab-bar"
        style={{
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          padding: "6px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "99px",
          marginBottom: "var(--s4)",
          width: "max-content",
          maxWidth: "100%",
        }}
      >
        {TECH_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "99px",
                border: "none",
                background: isActive ? "var(--text)" : "transparent",
                color: isActive ? "var(--bg)" : "var(--text-2)",
                fontFamily: "var(--body)",
                fontSize: "0.92rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
                outline: "none",
              }}
            >
              <Icon
                name={tab.icon}
                className={isActive ? "" : "opacity-75"}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Cards Grid with Smooth Transition */}
      <div
        className="tech-items-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "var(--s3)",
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {currentCategory.items.map((tech) => (
          <article
            key={tech.name}
            className="tech-card"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "var(--s3)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              boxShadow: "var(--shadow)",
              transition:
                "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  margin: 0,
                  fontFamily: "var(--display)",
                  color: "var(--text)",
                }}
              >
                {tech.name}
              </h3>
              <span
                className={`badge ${tech.level}`}
                style={{ fontSize: "0.72rem" }}
              >
                {tech.badge}
              </span>
            </div>

            <p className="small" style={{ margin: 0, color: "var(--text-2)" }}>
              {tech.desc}
            </p>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "10px",
                borderTop: "1px dashed var(--border)",
                fontSize: "0.8rem",
                color: "var(--muted)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              <span>{tech.useCase}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
