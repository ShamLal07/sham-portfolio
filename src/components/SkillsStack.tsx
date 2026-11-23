"use client";

import React, { useState, useRef, useMemo } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  SiWordpress,
  SiShopify,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiWebflow,
  SiHubspot,
  SiWix,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiFigma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiBootstrap,
} from "react-icons/si";

/* ==========================================================================
   Real Adobe Creative Suite Vector Marks (Exact brand specs)
   ========================================================================== */

function PhotoshopIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <div className={`${className} rounded-lg bg-[#001E36] border border-[#31A8FF]/40 flex items-center justify-center font-black text-[#31A8FF] text-xs shadow-sm`}>
      Ps
    </div>
  );
}

function IllustratorIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <div className={`${className} rounded-lg bg-[#330000] border border-[#FF9A00]/40 flex items-center justify-center font-black text-[#FF9A00] text-xs shadow-sm`}>
      Ai
    </div>
  );
}

function XDIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <div className={`${className} rounded-lg bg-[#2E001F] border border-[#FF61F6]/40 flex items-center justify-center font-black text-[#FF61F6] text-xs shadow-sm`}>
      Xd
    </div>
  );
}

/* ==========================================================================
   Comprehensive Real Brand Tools Database
   ========================================================================== */

export interface TechItem {
  id: string;
  name: string;
  category: "cms" | "frontend" | "design" | "backend";
  badge: string;
  level: string;
  brandColor: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const ALL_TECH_ITEMS: TechItem[] = [
  // --- CMS & E-Commerce ---
  {
    id: "wordpress",
    name: "WordPress",
    category: "cms",
    badge: "Custom Themes · ACF Pro",
    level: "Advanced",
    brandColor: "#21759B",
    icon: <SiWordpress className="w-8 h-8 text-[#21759B]" />,
    highlight: true,
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "cms",
    badge: "Liquid Storefronts",
    level: "Advanced",
    brandColor: "#7AB55C",
    icon: <SiShopify className="w-8 h-8 text-[#7AB55C]" />,
    highlight: true,
  },
  {
    id: "webflow",
    name: "Webflow",
    category: "cms",
    badge: "CMS · Interactions",
    level: "Proficient",
    brandColor: "#146EF5",
    icon: <SiWebflow className="w-8 h-8 text-[#146EF5]" />,
    highlight: true,
  },
  {
    id: "wix",
    name: "Wix Studio",
    category: "cms",
    badge: "Studio Layouts · Velo",
    level: "Proficient",
    brandColor: "#0C6EFC",
    icon: <SiWix className="w-8 h-8 text-[#0C6EFC]" />,
    highlight: true,
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "cms",
    badge: "Dynamic HubL Modules",
    level: "Proficient",
    brandColor: "#FF7A59",
    icon: <SiHubspot className="w-8 h-8 text-[#FF7A59]" />,
    highlight: true,
  },

  // --- Modern Frontend & Frameworks ---
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    badge: "SSR · App Router · SEO",
    level: "Production Ready",
    brandColor: "#FFFFFF",
    icon: <SiNextdotjs className="w-8 h-8 text-white" />,
    highlight: true,
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    badge: "Hooks · Components",
    level: "Production Ready",
    brandColor: "#61DAFB",
    icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
    highlight: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    badge: "Modern Utility UI",
    level: "Expert",
    brandColor: "#06B6D4",
    icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    highlight: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    badge: "Type-Safe Architecture",
    level: "Advanced",
    brandColor: "#3178C6",
    icon: <SiTypescript className="w-7 h-7 text-[#3178C6]" />,
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    badge: "ES6+ · Async APIs",
    level: "Expert",
    brandColor: "#F7DF1E",
    icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />,
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    badge: "Semantic · Accessible",
    level: "Expert",
    brandColor: "#E34F26",
    icon: <SiHtml5 className="w-7 h-7 text-[#E34F26]" />,
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    badge: "Grid · Flexbox · Motion",
    level: "Expert",
    brandColor: "#1572B6",
    icon: <SiCss className="w-7 h-7 text-[#1572B6]" />,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "frontend",
    badge: "Responsive Grid",
    level: "Proficient",
    brandColor: "#7952B3",
    icon: <SiBootstrap className="w-7 h-7 text-[#7952B3]" />,
  },

  // --- UI/UX & Creative Design ---
  {
    id: "figma",
    name: "Figma",
    category: "design",
    badge: "UI/UX Design Systems",
    level: "Advanced",
    brandColor: "#F24E1E",
    icon: <SiFigma className="w-7 h-7 text-[#F24E1E]" />,
    highlight: true,
  },
  {
    id: "photoshop",
    name: "Photoshop",
    category: "design",
    badge: "Asset Optimization",
    level: "Proficient",
    brandColor: "#31A8FF",
    icon: <PhotoshopIcon />,
  },
  {
    id: "illustrator",
    name: "Illustrator",
    category: "design",
    badge: "Vector Graphics & Logos",
    level: "Proficient",
    brandColor: "#FF9A00",
    icon: <IllustratorIcon />,
  },
  {
    id: "adobexd",
    name: "Adobe XD",
    category: "design",
    badge: "Interactive Wireframes",
    level: "Proficient",
    brandColor: "#FF61F6",
    icon: <XDIcon />,
  },

  // --- Backend, Cloud & Version Control ---
  {
    id: "supabase",
    name: "Supabase",
    category: "backend",
    badge: "Postgres · Auth · Storage",
    level: "Production Ready",
    brandColor: "#3ECF8E",
    icon: <SiSupabase className="w-7 h-7 text-[#3ECF8E]" />,
  },
  {
    id: "git",
    name: "Git",
    category: "backend",
    badge: "Version Control",
    level: "Advanced",
    brandColor: "#F05032",
    icon: <SiGit className="w-7 h-7 text-[#F05032]" />,
  },
  {
    id: "github",
    name: "GitHub",
    category: "backend",
    badge: "CI/CD & Collaboration",
    level: "Advanced",
    brandColor: "#FFFFFF",
    icon: <SiGithub className="w-7 h-7 text-white" />,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stack (20)" },
  { id: "cms", label: "CMS & E-Commerce (5)" },
  { id: "frontend", label: "Frontend & Frameworks (8)" },
  { id: "design", label: "UI/UX & Design (4)" },
  { id: "backend", label: "Cloud & DevTools (3)" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

/* ==========================================================================
   3D Tilt Card Component with Brand Lighting
   ========================================================================== */

function RealTechCard({ item, idx }: { item: TechItem; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 240, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: idx * 0.03 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative p-5 sm:p-6 rounded-2xl bg-[#0C0C0C] border border-white/10 hover:border-white/50 hover:bg-[#141414] transition-colors duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_12px_36px_-10px_rgba(255,255,255,0.12)] cursor-default"
    >
      {/* Brand Ambient Glow Core */}
      <div
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-all duration-500 opacity-10 group-hover:opacity-40 group-hover:scale-125 bg-white/20"
      />

      {/* Top Edge Brand White Specular Line */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-white/30 transition-all duration-300 drop-shadow-md">
            {item.icon}
          </div>

          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-white/60">
            {item.level}
          </span>
        </div>

        <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-zinc-200 transition-colors tracking-tight">
          {item.name}
        </h3>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
          {item.badge}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40 group-hover:text-white/70 transition-colors">
        <span className="capitalize">{item.category}</span>
        <CheckCircle2 className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

/* ==========================================================================
   Main SkillsStack Component
   ========================================================================== */

export function SkillsStack() {
  const [activeTab, setActiveTab] = useState<CategoryId>("all");

  const filteredItems = useMemo(() => {
    if (activeTab === "all") return ALL_TECH_ITEMS;
    return ALL_TECH_ITEMS.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 lg:py-40 bg-[#000000] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Studio Light Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-white/[0.02] blur-[170px] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/20 text-white text-xs font-bold mb-3 shadow-sm font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>OFFICIAL PRODUCTION TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-tight">
              Tools &amp; Technologies
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 mt-2.5 max-w-2xl leading-relaxed">
              Every platform, framework, and design suite I engineer with daily. Authentic official brand tools battle-tested across 35+ client projects.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 shrink-0">
            <span>Clean Architecture · High Performance</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Category Filter Tabs with Smooth Pill Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none mb-8 sm:mb-10 bg-[#0A0A0A] p-1.5 rounded-2xl border border-white/10 w-fit">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? "text-black font-extrabold" : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillsTab"
                    className="absolute inset-0 rounded-xl bg-white shadow-[0_0_20px_rgba(255,255,255,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Official Brand Tool Cards */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <RealTechCard key={item.id} item={item} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
