"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { LinkedInIcon, WhatsAppIcon } from "./SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export function ContactCTA() {
  const whatsappUrl = `https://wa.me/917876525326?text=${encodeURIComponent(
    "Hi Sham, I'm visiting shamdev.in and I'd like to discuss a new website project."
  )}`;

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-36 bg-[#05070E] text-white border-t border-white/10">
      <div className="site-container">
        {/* Pitch Black Glowing Banner Card */}
        <div className="bg-gradient-to-br from-[#0F1424] via-[#090C16] to-[#04060B] border border-blue-500/25 rounded-3xl p-9 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-600/10 blur-[90px] pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 relative z-10">
            {/* Left Headline */}
            <div>
              <span className="text-xs font-bold text-blue-400 tracking-wide uppercase font-mono">
                Let&apos;s work together
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-1.5">
                Have a project in mind?
              </h2>
              <p className="text-sm sm:text-base text-white/70 mt-2 font-normal">
                Available for freelance WordPress, Shopify, Next.js, and custom web builds worldwide.
              </p>
            </div>

            {/* Right Buttons: WhatsApp + Project Inquiry */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white text-xs sm:text-sm font-bold shadow-[0_10px_30px_-5px_rgba(37,99,235,0.45)] hover:shadow-[0_16px_40px_-5px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-blue-200 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Bottom Social & Email Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold text-white/75 relative z-10">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
