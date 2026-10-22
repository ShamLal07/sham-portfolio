"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Sparkles, Calendar } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const openCalendly = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const url =
      "https://calendly.com/thakursammi1233/30min?hide_gdpr_banner=1&background_color=0a0b0e&text_color=ffffff&primary_color=f5781e";

    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }

    if (typeof window !== "undefined") {
      let script = document.querySelector(
        'script[src*="calendly.com/assets/external/widget.js"]'
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }

      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({ url });
        } else {
          window.open(url, "_blank", "noopener,noreferrer");
        }
      };

      script.onerror = () => {
        window.open(url, "_blank", "noopener,noreferrer");
      };
    }
  };

  const isDark = true;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isDark
        ? scrolled
          ? "bg-[#0A0B0E]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-1"
          : "bg-[#0A0B0E] border-b border-white/10 py-2 sm:py-3"
        : scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-1"
          : "bg-white border-b border-slate-100 py-2 sm:py-3"
        }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group py-1"
          aria-label="Sham Lal Portfolio"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs tracking-wider transition-colors ${isDark
              ? "bg-white/10 text-white border border-white/20 group-hover:bg-[#F5781E]"
              : "bg-[#0F172A] text-white shadow-xs group-hover:bg-[#2563EB]"
              }`}
          >
            SL
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold text-base tracking-tight transition-colors leading-tight ${isDark
                ? "text-white group-hover:text-amber-400"
                : "text-[#0F172A] group-hover:text-[#2563EB]"
                }`}
            >
              Sham Lal
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider uppercase leading-none mt-0.5 ${isDark ? "text-white/50" : "text-slate-400"
                }`}
            >
              Web Developer
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-8"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative text-[0.92rem] font-semibold transition-colors py-1 ${isDark
                  ? isActive
                    ? "text-amber-400"
                    : "text-white/75 hover:text-white"
                  : isActive
                    ? "text-[#2563EB]"
                    : "text-slate-600 hover:text-[#0F172A]"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${isDark ? "bg-amber-400" : "bg-[#2563EB]"
                      }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Calendly Meeting Button */}
          <button
            type="button"
            onClick={openCalendly}
            className="relative group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[0.84rem] font-semibold text-white transition-all duration-300 border border-amber-500/35 bg-white/[0.04] hover:bg-amber-500/15 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,120,30,0.35)] hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
            aria-label="Schedule a meeting with Sham Lal on Calendly"
          >
            {/* Shimmer sweep animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            <Calendar className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
            <span className="tracking-tight text-white/95 group-hover:text-amber-200 transition-colors font-bold whitespace-nowrap">
              Book Meeting
            </span>
          </button>

          {/* AI Hire Me Button */}
          <Link
            href="/contact"
            className="relative group hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[0.84rem] font-semibold text-white transition-all duration-300 border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 hover:border-amber-400 hover:shadow-[0_0_22px_rgba(245,120,30,0.45)] hover:scale-105 active:scale-95 overflow-hidden"
            aria-label="Hire Sham Lal with AI Assisted Match"
          >
            {/* Shimmer sweep animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

            {/* Glowing radar dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            </span>

            <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
            <span className="tracking-tight text-white group-hover:text-amber-200 transition-colors font-bold">
              Hire Me
            </span>
            <span className="inline-flex text-[9px] uppercase font-extrabold tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-amber-500/35">
              AI
            </span>
          </Link>

          {/* Let's Talk Button */}
          <Link
            href="/contact"
            className={`group hidden lg:inline-flex items-center gap-2.5 px-3 py-2 rounded-full text-[0.88rem] font-semibold transition-all active:translate-y-0 overflow-hidden ${isDark
              ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-md shadow-orange-500/20 hover:scale-105"
              : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xs hover:shadow-md hover:-translate-y-0.5"
              }`}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${isDark
              ? "text-white hover:bg-white/10"
              : "text-slate-700 hover:bg-slate-100"
              }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200 border-b ${isDark
            ? "bg-[#0A0B0E] border-white/10 text-white"
            : "bg-white border-slate-200"
            }`}
        >
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-1.5 transition-colors ${isDark
                    ? isActive
                    ? "text-amber-400"
                    : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-[#2563EB]"
                    : "text-slate-700 hover:text-[#2563EB]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2.5 pt-2">
              {/* Calendly Meeting Mobile Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCalendly();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 shadow-md shadow-orange-500/20 cursor-pointer active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book a Meeting</span>
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white border border-amber-500/40 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:border-amber-400 shadow-md shadow-orange-500/10"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Hire Me • AI Match</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors group ${isDark
                  ? "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                  : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                  }`}
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
