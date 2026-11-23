"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUp, MessageCircle } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { AnimatedLogo } from "./AnimatedLogo";
import { SITE_CONFIG } from "@/data/siteConfig";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#000000] py-12 sm:py-16 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo & title */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link href="/" aria-label="Sham Lal Portfolio">
              <AnimatedLogo size="sm" showText={false} />
            </Link>
            <span className="text-lg font-extrabold text-white">Sham Lal</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span className="text-sm text-zinc-400 font-medium">
              Web Developer &amp; UI/UX Designer
            </span>
          </div>

          {/* Links with generous gap */}
          <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-400">
            <Link href="/work" className="hover:text-white transition-colors py-1">
              Work
            </Link>
            <Link href="/services" className="hover:text-white transition-colors py-1">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition-colors py-1">
              About
            </Link>
            <Link href="/#experience" className="hover:text-white transition-colors py-1">
              Experience
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors py-1">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Socials & Top button */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/917876525326?text=Hi%20Sham%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/15 bg-white/[0.05] text-white hover:text-black hover:border-white hover:bg-white transition-all"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/15 bg-white/[0.05] text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/[0.12] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/15 bg-white/[0.05] text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/[0.12] transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2.5 rounded-full border border-white/15 bg-white/[0.05] text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/[0.12] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/40 hover:bg-white/[0.12] transition-all ml-1 cursor-pointer active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500">
          <div>
            © {new Date().getFullYear()} Sham Lal. All rights reserved.
          </div>
          <div>India · Available for remote &amp; freelance projects worldwide</div>
        </div>
      </div>
    </footer>
  );
}
