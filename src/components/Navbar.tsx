"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogo } from "./AnimatedLogo";
import { WhatsAppIcon } from "./SocialIcons";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070E]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)]"
          : "bg-[#05070E]/80 backdrop-blur-xl border-b border-white/[0.06]"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="site-container h-20 flex items-center justify-between"
      >
        {/* Left: Authentic Brand Identity */}
        <Link
          href="/"
          aria-label="Sham Lal Portfolio"
          className="flex items-center gap-3.5 group select-none"
        >
          <AnimatedLogo size="sm" showText={false} />
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors font-[family-name:var(--font-display)]">
              SHAM LAL
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-slate-400 font-mono font-medium">
              Creative Dev &bull; UI/UX
            </span>
          </div>
        </Link>

        {/* Center: Spacious Typographic Agency Navigation */}
        <div
          className="hidden md:flex items-center gap-8 lg:gap-11"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href !== "/" && pathname.startsWith(link.href));
            const isHovered = hoveredLink === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                className={`relative py-1.5 text-xs lg:text-[0.875rem] font-semibold tracking-wide transition-colors ${
                  isActive ? "text-white font-bold" : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.label}</span>

                {/* Refined sliding active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbarUnderline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  />
                )}

                {/* Soft hover glow effect */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="navbarHoverPill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute -inset-x-3 -inset-y-1 rounded-lg bg-white/[0.04] -z-10"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: Availability + WhatsApp + High-End Action CTA */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Subtle Live Availability Status */}
          <div className="hidden xl:inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Work</span>
          </div>

          {/* WhatsApp Direct Action */}
          <a
            href="https://wa.me/917876525326?text=Hi%20Sham%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat with Sham Lal"
            title="Chat on WhatsApp (+91 78765 25326)"
            className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:scale-105 active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          {/* Luxury Start a Project CTA Button */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white text-xs sm:text-[0.85rem] font-bold tracking-wide shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-100 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/10 bg-[#07090E]/98 backdrop-blur-2xl px-6 py-6 text-white overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === pathname ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`py-3 px-4 rounded-xl text-base font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "bg-blue-600/20 text-blue-300 border border-blue-500/30 font-bold"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://wa.me/917876525326?text=Hi%20Sham%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 78765 25326)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
