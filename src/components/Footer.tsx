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
    <footer className="border-t border-[#E5E4DE] bg-[#FAF9F7] py-14 sm:py-20 mt-16">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#E5E4DE]">
          {/* Logo & title */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-[#0F1117] font-[family-name:var(--font-display)] hover:text-[#2563EB] transition-colors"
            >
              Sham
            </Link>
            <span className="hidden sm:inline text-[#D1D0CA]">·</span>
            <span className="text-sm text-[#575A65] font-medium">
              Web Designer + Frontend Developer
            </span>
          </div>

          {/* Links with generous gap */}
          <nav className="flex flex-wrap items-center gap-7 text-sm font-semibold text-[#575A65]">
            <Link href="/work" className="hover:text-[#0F1117] transition-colors py-1">
              Work
            </Link>
            <Link href="/services" className="hover:text-[#0F1117] transition-colors py-1">
              Services
            </Link>
            <Link href="/about" className="hover:text-[#0F1117] transition-colors py-1">
              About
            </Link>
            <Link href="/#experience" className="hover:text-[#0F1117] transition-colors py-1">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-[#0F1117] transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Socials & Top button */}
          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#E5E4DE] bg-white text-[#575A65] hover:text-[#0F1117] hover:border-[#0F1117] hover:shadow-xs transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#E5E4DE] bg-white text-[#575A65] hover:text-[#0F1117] hover:border-[#0F1117] hover:shadow-xs transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2 rounded-full border border-[#E5E4DE] bg-white text-[#575A65] hover:text-[#0F1117] hover:border-[#0F1117] hover:shadow-xs transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[#E5E4DE] bg-white flex items-center justify-center text-[#575A65] hover:text-[#0F1117] hover:border-[#0F1117] hover:shadow-xs transition-all ml-2 cursor-pointer active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#848792]">
          <div>
            © {new Date().getFullYear()} Sham Lal. Built with Next.js &amp; Tailwind CSS.
          </div>
          <div>India · Available for remote and freelance work worldwide</div>
        </div>
      </div>
    </footer>
  );
}
