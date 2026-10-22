"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone, Copy, Check, Sparkles } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="py-20 md:py-32" id="contact-cta">
      <div className="site-container">
        {/* Large dark closing banner with atmospheric backdrop and multi-layer depth */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-b from-[#0F121C] via-[#0A0C13] to-[#07080D] text-white border border-[#232738] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)]">
          {/* Subtle background mountain silhouette image */}
          <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-screen">
            <Image
              src="/cta-mountains.jpg"
              alt="Mountain silhouette atmosphere"
              fill
              className="object-cover object-bottom"
            />
          </div>

          {/* Ambient radial glow effect */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10 p-8 sm:p-14 lg:p-20">
            {/* Top Status Capsule */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/90 mb-8 sm:mb-10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Projects</span>
              <span className="text-white/40">·</span>
              <span className="text-white/70">Remote Worldwide</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">
              {/* Left headline */}
              <div className="lg:col-span-7">
                <div className="text-xs font-bold tracking-[0.18em] uppercase text-blue-400 mb-4 font-mono flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  LET&apos;S WORK TOGETHER
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-white leading-[1.12]">
                  Have a project in mind?<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                    Let&apos;s build something that works.
                  </span>
                </h2>
              </div>

              {/* Right text & buttons */}
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right">
                <p className="text-base sm:text-lg text-white/75 max-w-[44ch] mb-8 leading-relaxed">
                  Whether you need a new website from scratch, a complete redesign,
                  an e-commerce storefront, or frontend implementation for an existing design —
                  I&apos;m ready to talk.
                </p>

                <div className="flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/contact"
                    className="btn-white group"
                    style={{ backgroundColor: "#FFFFFF", color: "#0C0E14" }}
                  >
                    <span style={{ color: "#0C0E14" }}>Start a Conversation</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      style={{ color: "#0C0E14" }}
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-ghost-dark group text-xs font-semibold"
                    style={{ color: "#FFFFFF" }}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span style={{ color: "#FFFFFF" }}>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-white/70" />
                        <span style={{ color: "#FFFFFF" }}>Copy Email</span>
                      </>
                    )}
                  </button>

                  <Link
                    href="/work"
                    className="btn-ghost-dark hidden sm:inline-flex"
                    style={{ color: "#FFFFFF" }}
                  >
                    <span style={{ color: "#FFFFFF" }}>View Work</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Contact Strip with Guaranteed High-Contrast Links */}
            <div className="pt-10 border-t border-white/15 flex flex-wrap items-center justify-between gap-6 text-sm">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2.5 text-white/90 hover:text-white transition-colors group"
                  style={{ color: "#FFFFFF" }}
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-white" style={{ color: "#FFFFFF" }} />
                  </div>
                  <span className="font-semibold text-white" style={{ color: "#FFFFFF" }}>
                    {SITE_CONFIG.email}
                  </span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2.5 text-white/90 hover:text-white transition-colors group"
                  style={{ color: "#FFFFFF" }}
                >
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-white" style={{ color: "#FFFFFF" }} />
                  </div>
                  <span className="font-semibold text-white" style={{ color: "#FFFFFF" }}>
                    {SITE_CONFIG.phone}
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-xs border border-white/10"
                  style={{ color: "#FFFFFF" }}
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-white" style={{ color: "#FFFFFF" }} />
                  <span style={{ color: "#FFFFFF" }}>LinkedIn</span>
                </a>

                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-xs border border-white/10"
                  style={{ color: "#FFFFFF" }}
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-white" style={{ color: "#FFFFFF" }} />
                  <span style={{ color: "#FFFFFF" }}>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
