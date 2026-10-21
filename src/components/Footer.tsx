"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0B0E] py-12 sm:py-16 text-white">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          {/* Logo & title */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-white font-[family-name:var(--font-display)] hover:text-amber-400 transition-colors"
            >
              Sham
            </Link>
            <span className="hidden sm:inline text-white/20">·</span>
            <span className="text-sm text-white/60 font-medium">
              Web Designer + Frontend Developer
            </span>
          </div>

          {/* Links with generous gap */}
          <nav className="flex flex-wrap items-center gap-7 text-sm font-semibold text-white/70">
            <Link href="/work" className="hover:text-amber-400 transition-colors py-1">
              Work
            </Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors py-1">
              Services
            </Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors py-1">
              About
            </Link>
            <Link href="/#experience" className="hover:text-amber-400 transition-colors py-1">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Socials & Top button */}
          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/[0.05] text-white/70 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/[0.12] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/[0.05] text-white/70 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/[0.12] transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2.5 rounded-full border border-white/10 bg-white/[0.05] text-white/70 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/[0.12] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-white/70 hover:text-amber-400 hover:border-amber-400/40 hover:bg-white/[0.12] transition-all ml-1 cursor-pointer active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/40">
          <div>
            © {new Date().getFullYear()} Sham Lal. Built with Next.js &amp; Tailwind CSS.
          </div>
          <div>India · Available for remote and freelance work worldwide</div>
        </div>
      </div>
    </footer>
  );
}
