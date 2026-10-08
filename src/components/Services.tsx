"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  Database,
  ShoppingBag,
  Cpu,
  Gauge,
  ExternalLink
} from "lucide-react";
import { SERVICES } from "@/data/services";

export function Services() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36 border-t border-[#E5E4DE]" id="services">
      <div className="site-container">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="eyebrow-tag mb-3">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              CAPABILITIES &amp; EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold tracking-tight text-[#0F1117] leading-tight">
              Services &amp; Solutions
            </h2>
          </div>
          <p className="text-[#575A65] text-base sm:text-lg max-w-[48ch] md:text-right leading-relaxed">
            Every service blends design sensibility with frontend engineering. Built to look refined, load fast, and convert.
          </p>
        </div>

        {/* 6 Services Grid with Rich Visual Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service, index) => {
            const isHovered = activeTab === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveTab(index)}
                onMouseLeave={() => setActiveTab(null)}
                className="bg-white border-1.5 border-[#E5E4DE] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#0F1117] hover:shadow-[0_20px_48px_-12px_rgba(15,17,23,0.12)] hover:-translate-y-1.5 group relative overflow-hidden"
              >
                {/* Subtle top accent gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0F1117] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Number + Platform Chips */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-sm font-extrabold text-[#0F1117] bg-[#FAF9F7] px-3 py-1 rounded-full border border-[#E5E4DE]">
                      {service.number}
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 justify-end">
                      {service.platforms.slice(0, 2).map((p) => (
                        <span
                          key={p}
                          className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#F3F2EE] text-[#575A65] border border-[#E5E4DE]/60"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* VISUAL SHOWCASE WIDGET PER SERVICE */}
                  {index === 0 && (
                    /* 01: Website Design — Interactive Figma Canvas Mockup */
                    <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-4 mb-6 shadow-inner relative overflow-hidden group-hover:border-[#CBD5E1] transition-colors">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E5E4DE]/70 text-[11px] text-[#848792] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                        </div>
                        <span className="font-semibold text-[#0F1117]">Figma · 8pt Grid</span>
                        <span className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-[#E5E4DE]">100%</span>
                      </div>
                      {/* Wireframe Canvas */}
                      <div className="bg-white rounded-xl p-3 border border-[#E5E4DE]/70 shadow-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-2.5 bg-[#0F1117] rounded-full" />
                          <div className="flex gap-1.5">
                            <div className="w-6 h-1.5 bg-[#E5E4DE] rounded-full" />
                            <div className="w-6 h-1.5 bg-[#E5E4DE] rounded-full" />
                            <div className="w-8 h-3 bg-[#2563EB] rounded-full" />
                          </div>
                        </div>
                        <div className="h-10 rounded-lg bg-gradient-to-r from-[#EFF6FF] via-[#F3F4F6] to-[#FAF9F7] border border-[#E5E4DE]/60 flex items-center justify-between px-3">
                          <div className="space-y-1">
                            <div className="w-20 h-2 bg-[#0F1117] rounded" />
                            <div className="w-14 h-1.5 bg-[#848792] rounded" />
                          </div>
                          <div className="w-6 h-6 rounded-md bg-[#2563EB]/15 flex items-center justify-center">
                            <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-[#575A65] pt-1">
                          <span className="font-bold text-[#2563EB]">✦ Responsive Breakpoints</span>
                          <span className="font-mono text-[#848792]">Desktop · Mobile</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    /* 02: Frontend Development — Interactive Code & Live Execution */
                    <div className="bg-[#0C0E14] text-white border border-[#232738] rounded-2xl p-4 mb-6 shadow-inner relative overflow-hidden font-mono text-[11px]">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#232738] text-[10px] text-white/50">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-white/80 font-bold">HeroSection.tsx</span>
                        </div>
                        <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-800/40 text-[9px] font-bold">
                          ● 60 FPS
                        </span>
                      </div>
                      <div className="space-y-1 text-white/70 leading-relaxed text-[10.5px]">
                        <div>
                          <span className="text-purple-400">export function</span>{" "}
                          <span className="text-blue-300">Hero</span>() &#123;
                        </div>
                        <div className="pl-3 text-white/50">
                          return (
                        </div>
                        <div className="pl-6 text-emerald-300">
                          &lt;<span className="text-pink-400">Layout</span> <span className="text-yellow-300">fluid</span> <span className="text-yellow-300">fast</span> /&gt;
                        </div>
                        <div className="pl-3 text-white/50">
                          );
                        </div>
                        <div>&#125;</div>
                      </div>
                      <div className="mt-2.5 pt-2 border-t border-[#232738] flex items-center justify-between text-[9.5px] text-white/60">
                        <span className="text-blue-400 font-bold">⚡ React · Next.js · TypeScript</span>
                        <span className="text-white/40">Zero bloat</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    /* 03: WordPress Development — ACF & Gutenberg Architecture */
                    <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-4 mb-6 shadow-inner relative overflow-hidden group-hover:border-[#CBD5E1] transition-colors">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E5E4DE]/70 text-[11px] text-[#575A65] font-mono">
                        <div className="flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-[#1D4ED8]" />
                          <span className="font-bold text-[#0F1117]">ACF Pro Architecture</span>
                        </div>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          Cached TTFB
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="bg-white p-2 rounded-lg border border-[#E5E4DE] flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-[#0F1117]">📁 Reusable Hero Block</span>
                          <span className="text-[10px] text-[#2563EB] font-bold">Gutenberg</span>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-[#E5E4DE] flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-[#0F1117]">⚙️ Custom Post Types</span>
                          <span className="text-[10px] text-[#575A65]">ACF Flexible</span>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-1.5 flex items-center justify-between text-[10px] text-[#575A65]">
                        <span className="font-bold text-[#1D4ED8]">✦ Client-Editable Admin</span>
                        <span className="text-[#848792]">Elementor / Blocks</span>
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    /* 04: Shopify Development — Modern E-Commerce Storefront */
                    <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-4 mb-6 shadow-inner relative overflow-hidden group-hover:border-[#CBD5E1] transition-colors">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E5E4DE]/70 text-[11px] text-[#575A65]">
                        <div className="flex items-center gap-1.5">
                          <ShoppingBag className="w-3.5 h-3.5 text-[#15803D]" />
                          <span className="font-bold text-[#0F1117]">Shopify Storefront 2.0</span>
                        </div>
                        <span className="text-[10px] bg-[#DCFCE7] text-[#15803D] font-bold px-2 py-0.5 rounded-full">
                          High CVR
                        </span>
                      </div>
                      <div className="bg-white rounded-xl p-2.5 border border-[#E5E4DE] flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#FAF9F7] border border-[#E5E4DE] flex items-center justify-center font-bold text-xs text-[#0F1117]">
                          🛍️
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[11.5px] font-bold text-[#0F1117] truncate">Custom Product Page</div>
                          <div className="text-[10px] text-[#575A65]">Liquid Theme · Fast Drawer Cart</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-mono font-extrabold text-[#0F1117]">$99</span>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-1.5 flex items-center justify-between text-[10px] text-[#575A65]">
                        <span className="font-bold text-[#15803D]">✦ Optimized Checkout Flow</span>
                        <span className="text-[#848792]">Zero Bloat Apps</span>
                      </div>
                    </div>
                  )}

                  {index === 4 && (
                    /* 05: CMS & No-Code Development — Webflow / Wix / HubSpot */
                    <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-4 mb-6 shadow-inner relative overflow-hidden group-hover:border-[#CBD5E1] transition-colors">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E5E4DE]/70 text-[11px] text-[#575A65]">
                        <div className="flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-[#7C3AED]" />
                          <span className="font-bold text-[#0F1117]">Multi-Platform CMS</span>
                        </div>
                        <span className="text-[10px] bg-[#F3E8FF] text-[#7C3AED] font-bold px-2 py-0.5 rounded-full">
                          No-Lockin
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="bg-white p-2 rounded-lg border border-[#E5E4DE] text-center">
                          <div className="text-[10px] font-bold text-[#0F1117]">Webflow</div>
                          <div className="text-[9px] text-[#848792]">CMS &amp; Inter.</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-[#E5E4DE] text-center">
                          <div className="text-[10px] font-bold text-[#0F1117]">HubSpot</div>
                          <div className="text-[9px] text-[#848792]">Modules</div>
                        </div>
                        <div className="bg-white p-2 rounded-lg border border-[#E5E4DE] text-center">
                          <div className="text-[10px] font-bold text-[#0F1117]">Wix Studio</div>
                          <div className="text-[9px] text-[#848792]">Responsive</div>
                        </div>
                      </div>
                      <div className="mt-2.5 pt-1.5 flex items-center justify-between text-[10px] text-[#575A65]">
                        <span className="font-bold text-[#7C3AED]">✦ Clean Client Handoff</span>
                        <span className="text-[#848792]">Loom Walkthroughs</span>
                      </div>
                    </div>
                  )}

                  {index === 5 && (
                    /* 06: Website Optimization — Google Lighthouse 100/100 */
                    <div className="bg-[#0C0E14] text-white border border-[#232738] rounded-2xl p-4 mb-6 shadow-inner relative overflow-hidden font-mono">
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#232738] text-[10px] text-white/50">
                        <div className="flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-white/80 font-bold">Google Lighthouse Audit</span>
                        </div>
                        <span className="text-emerald-400 font-bold">100 / 100</span>
                      </div>
                      {/* 4 Performance Dials */}
                      <div className="grid grid-cols-4 gap-2 text-center py-1">
                        <div className="bg-[#141722] p-1.5 rounded-lg border border-emerald-500/30">
                          <div className="text-sm font-extrabold text-emerald-400">99</div>
                          <div className="text-[8px] text-white/60 tracking-tight">Perf</div>
                        </div>
                        <div className="bg-[#141722] p-1.5 rounded-lg border border-emerald-500/30">
                          <div className="text-sm font-extrabold text-emerald-400">100</div>
                          <div className="text-[8px] text-white/60 tracking-tight">A11y</div>
                        </div>
                        <div className="bg-[#141722] p-1.5 rounded-lg border border-emerald-500/30">
                          <div className="text-sm font-extrabold text-emerald-400">100</div>
                          <div className="text-[8px] text-white/60 tracking-tight">Practices</div>
                        </div>
                        <div className="bg-[#141722] p-1.5 rounded-lg border border-emerald-500/30">
                          <div className="text-sm font-extrabold text-emerald-400">100</div>
                          <div className="text-[8px] text-white/60 tracking-tight">SEO</div>
                        </div>
                      </div>
                      <div className="mt-2 pt-2 border-t border-[#232738] flex items-center justify-between text-[9px] text-white/60">
                        <span className="text-emerald-400 font-bold">⚡ Core Web Vitals Passed</span>
                        <span className="text-white/40">LCP &lt; 0.9s · CLS 0.00</span>
                      </div>
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F1117] tracking-tight mb-2.5 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[0.92rem] text-[#575A65] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables as modern pill capsules */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#848792] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#2563EB]" />
                      <span>Key Deliverables</span>
                    </div>
                    <div className="space-y-2">
                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-[#424550] bg-[#FAF9F7] hover:bg-[#F3F2EE] transition-colors p-2.5 rounded-xl border border-[#E5E4DE]/70 leading-normal"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 border-t border-[#E5E4DE] flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0F1117] group-hover:text-[#2563EB] transition-colors py-1"
                  >
                    <span>Discuss this service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[11px] font-semibold text-[#848792]">
                    Available for Q2/Q3
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
