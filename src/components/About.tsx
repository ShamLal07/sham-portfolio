"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Cpu,
  Smartphone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Zap,
  Monitor
} from "lucide-react";
import { WHY_WORK_WITH_ME } from "@/data/services";

export function About() {
  const visualCards = [
    {
      title: "Design + Development",
      tagline: "Both visual and technical sides stay connected",
      badge: "Zero Handoff Loss",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      icon: <Layers className="w-5 h-5 text-[#2563EB]" />,
      visual: (
        <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-3.5 mb-5 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="font-bold text-[#0F1117] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              Figma Mockup
            </span>
            <span className="text-[#848792]">── 1:1 Match ──&gt;</span>
            <span className="font-bold text-[#0F1117] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Live Code
            </span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-[#E5E4DE] flex items-center justify-between text-xs">
            <span className="text-[#575A65]">Visual Fidelity</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              100% Pixel Match
            </span>
          </div>
        </div>
      ),
      points: [
        "What is approved in Figma is what gets built in code",
        "No miscommunication between designer and engineer",
        "Micro-interactions planned during design, executed smoothly"
      ]
    },
    {
      title: "Platform Flexibility",
      tagline: "Stack chosen to match your project needs",
      badge: "No Developer Bias",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      icon: <Cpu className="w-5 h-5 text-[#7C3AED]" />,
      visual: (
        <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-3.5 mb-5 space-y-2">
          <div className="text-[11px] font-bold text-[#575A65] flex items-center justify-between">
            <span>Adaptive Tech Stack</span>
            <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold">
              Tailored
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["WordPress", "Shopify", "React", "Next.js", "Webflow", "Wix"].map((p) => (
              <span
                key={p}
                className="text-[10px] font-bold px-2 py-1 bg-white rounded-lg border border-[#E5E4DE] text-[#0F1117]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      ),
      points: [
        "Unbiased platform recommendations based on scale & budget",
        "WordPress or Shopify when you need client content power",
        "React & Next.js when you require custom web app speed"
      ]
    },
    {
      title: "Responsive First",
      tagline: "Tested across real devices and screen sizes",
      badge: "Multi-Device QA",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: <Smartphone className="w-5 h-5 text-[#059669]" />,
      visual: (
        <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-3.5 mb-5 space-y-2">
          <div className="text-[11px] font-bold text-[#575A65] flex items-center justify-between">
            <span>Viewport Validation</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
              375px → 1920px
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="bg-white p-1.5 rounded-lg border border-[#E5E4DE]">
              <div className="font-bold text-[#0F1117]">Mobile</div>
              <div className="text-[9px] text-[#848792]">375px · 414px</div>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-[#E5E4DE]">
              <div className="font-bold text-[#0F1117]">Tablet</div>
              <div className="text-[9px] text-[#848792]">768px · 1024px</div>
            </div>
            <div className="bg-white p-1.5 rounded-lg border border-[#E5E4DE]">
              <div className="font-bold text-[#0F1117]">Desktop</div>
              <div className="text-[9px] text-[#848792]">1440px+</div>
            </div>
          </div>
        </div>
      ),
      points: [
        "Fluid clamp typography and flexible proportional spacing",
        "Thumb-friendly hit targets and gestures for mobile users",
        "Fast asset loading optimized for mobile cellular networks"
      ]
    },
    {
      title: "Direct Collaboration",
      tagline: "Clear communication and plain-language updates",
      badge: "Zero Agency Jargon",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      icon: <MessageSquare className="w-5 h-5 text-[#D97706]" />,
      visual: (
        <div className="bg-[#F8F7F3] border border-[#E5E4DE] rounded-2xl p-3.5 mb-5 space-y-2">
          <div className="text-[11px] font-bold text-[#575A65] flex items-center justify-between">
            <span>Collaboration Channels</span>
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
              Direct Access
            </span>
          </div>
          <div className="bg-white p-2 rounded-xl border border-[#E5E4DE] flex items-center justify-between text-[10.5px]">
            <span className="font-semibold text-[#0F1117]">🎥 Loom Video Reviews</span>
            <span className="text-emerald-600 font-bold">Async &amp; Fast</span>
          </div>
        </div>
      ),
      points: [
        "You work directly with the builder — no layers or account reps",
        "Recorded video walk-throughs of every completed milestone",
        "Predictable turnaround times with transparent progress tracking"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-36 border-t border-[#E5E4DE]" id="about">
      <div className="site-container">
        {/* Core Philosophy / Headline */}
        <div className="max-w-4xl mb-20">
          <div className="eyebrow-tag mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0F1117]" />
            ABOUT SHAM LAL
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#0F1117] mb-8 leading-[1.12]">
            Design-minded. Development-focused.
          </h2>

          <div className="space-y-6 text-base sm:text-lg lg:text-[1.15rem] text-[#575A65] leading-[1.8]">
            <p>
              I work at the intersection of web design and frontend development. My
              background includes building websites and digital experiences across CMS,
              e-commerce, and modern frontend platforms.
            </p>
            <p>
              I enjoy taking a design, understanding how it should work, and turning it
              into a responsive website that is practical to maintain and ready for real
              users.
            </p>
          </div>
        </div>

        {/* Why Work With Me: 4 Visual Pillars Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="eyebrow-tag mb-2">CORE ADVANTAGES</div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1117] tracking-tight">
                Why Work With Me
              </h3>
            </div>
            <p className="text-base text-[#575A65] max-w-[42ch]">
              Practical strengths focused on clear execution, reliable engineering, and project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
            {visualCards.map((item) => (
              <div
                key={item.title}
                className="bg-white border-1.5 border-[#E5E4DE] rounded-[28px] p-7 sm:p-8 flex flex-col justify-between hover:border-[#0F1117] hover:shadow-[0_20px_48px_-12px_rgba(15,17,23,0.12)] hover:-translate-y-1.5 transition-all duration-300 group shadow-sm relative overflow-hidden"
              >
                <div>
                  {/* Top Bar: Icon + Value Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#FAF9F7] border border-[#E5E4DE] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Visual Showcase Graphic */}
                  {item.visual}

                  <h4 className="text-xl font-bold text-[#0F1117] mb-1.5 tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs font-bold text-[#2563EB] mb-4">
                    {item.tagline}
                  </p>

                  {/* Bullet points with checkmark */}
                  <div className="space-y-2 mb-6">
                    {item.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2 text-xs text-[#575A65] leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E4DE]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F1117] group-hover:text-[#2563EB] transition-colors"
                  >
                    <span>Discuss requirements</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
