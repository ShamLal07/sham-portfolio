"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "./SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export function ContactCTA() {
  const whatsappUrl = `https://wa.me/917876525326?text=${encodeURIComponent(
    "Hi Sham, I'm visiting shamdev.in and I'd like to discuss a new website project."
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-36 bg-[#000000] text-white border-t border-white/10">
      <div className="site-container">
        {/* Luxury Monochrome Banner Card */}
        <div className="bg-[#0C0C0C] border border-white/15 rounded-3xl p-9 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

          {/* Top Edge Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
            {/* Left Headline */}
            <div>
              <span className="text-xs font-bold text-zinc-400 tracking-wider uppercase font-mono">
                Let&apos;s work together
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-1.5 leading-tight">
                Have a project in mind?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mt-2 font-normal">
                Available for freelance WordPress, Shopify, Next.js, and custom web builds worldwide.
              </p>
            </div>

            {/* Right Buttons: WhatsApp + Project Inquiry */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-extrabold shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-black transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Bottom Social & Email Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-300 relative z-10">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-white" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
