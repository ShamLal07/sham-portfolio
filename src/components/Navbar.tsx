"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoHorizontal, Icon } from "./Icons";
import { BRAND_NAME, SERVICES } from "@/data/portfolio";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setServicesOpen(false);
    }, 220);
  };

  // Group services for the modern mega menu
  const designServices = SERVICES.filter((s) =>
    ["ui-ux-architecture", "web-design-brand-experience", "motion-3d-creative"].includes(s.slug)
  );
  const engineeringServices = SERVICES.filter((s) =>
    ["figma-to-code-nextjs", "shopify-ecommerce-engineering", "wordpress-cms-architecture"].includes(s.slug)
  );
  const performanceServices = SERVICES.filter((s) =>
    ["technical-seo-aio"].includes(s.slug)
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 text-[#0E0E14] shadow-sm py-3"
            : "bg-transparent border-b border-white/10 text-white py-4 sm:py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo with Brand (Width 200px, Height 42px) */}
          <div className="flex items-center gap-3">
            <Link
              className="group inline-flex items-center"
              href="/"
              aria-label={`${BRAND_NAME} Home`}
            >
              <LogoHorizontal />
            </Link>

            {/* Glowing AI Pill Indicator */}
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFBD30]/15 border border-[#EFBD30]/40 text-[#EFBD30] text-xs font-extrabold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#EFBD30] animate-pulse" />
              AI Studio
            </span>
          </div>

          {/* Navigation Links with Modern Mega Menu */}
          <nav aria-label="Primary Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1 list-none p-0 m-0">
              <li>
                <Link
                  href="/work"
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/work")
                      ? "text-[#EFBD30] bg-[#EFBD30]/15"
                      : scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Work
                </Link>
              </li>

              {/* Mega Menu Trigger for Services */}
              <li
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/services") || servicesOpen
                      ? "text-[#EFBD30] bg-[#EFBD30]/15"
                      : scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180 text-[#EFBD30]" : scrolled ? "text-gray-500" : "text-white/60"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/about")
                      ? "text-[#EFBD30] bg-[#EFBD30]/15"
                      : scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/technology")
                      ? "text-[#EFBD30] bg-[#EFBD30]/15"
                      : scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pathname.startsWith("/insights")
                      ? "text-[#EFBD30] bg-[#EFBD30]/15"
                      : scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Insights
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* "Contact Us >" Pill Button */}
            <Link
              className={`hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? "border-gray-300 text-gray-800 hover:border-[#EFBD30] hover:text-[#946C00] bg-gray-50"
                  : "border-white/20 text-white hover:border-[#EFBD30] hover:text-[#EFBD30] bg-white/5"
              }`}
              href="/contact"
            >
              Contact Us <Icon name="i-arrow" className="w-3.5 h-3.5" />
            </Link>

            {/* "For Enterprises" Pill Button */}
            <Link
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EFBD30] to-[#d9a514] hover:from-[#f7cf5f] hover:to-[#EFBD30] text-[#0E0E14] font-extrabold text-xs sm:text-sm shadow-[0_4px_14px_rgba(239,189,48,0.35)] transition-all duration-300 hover:scale-[1.03]"
              href="/contact"
            >
              For Enterprises
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              className={`lg:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                scrolled
                  ? "border-gray-300 text-gray-800 bg-gray-50"
                  : "border-white/20 text-white bg-white/5"
              }`}
              id="menu"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobmenu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "i-x" : "i-menu"} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modern Full-Width Services Mega Menu with Perfect Column & Row Gaps */}
        {servicesOpen && (
          <div
            className="hidden lg:block fixed top-[66px] left-0 right-0 w-full z-50 bg-white/98 backdrop-blur-2xl border-b border-gray-200 shadow-[0_24px_64px_rgba(0,0,0,0.12)] animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="container mx-auto px-6 lg:px-8 py-8 max-w-7xl">
              {/* Header Bar inside Mega Menu */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EFBD30] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#946C00]">
                    Capabilities &amp; Digital Engineering Services
                  </span>
                </div>
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="text-xs font-bold text-gray-600 hover:text-black inline-flex items-center gap-1.5 transition-colors"
                >
                  View All 7 Capabilities Overview
                  <Icon name="i-arrow" className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4 Clean Columns with Perfect 36px Column Gap and 14px Row Gap */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                {/* Column 1: Design & 3D Systems */}
                <div className="flex flex-col gap-3.5">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    Design &amp; 3D Systems
                  </div>
                  {designServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group p-3.5 rounded-xl bg-gray-50 hover:bg-[#FFFDF5] border border-gray-200/80 hover:border-[#EFBD30] transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#0E0E14] group-hover:text-[#946C00] transition-colors">
                          {s.shortName}
                        </span>
                        {s.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EFBD30]/20 text-[#946C00] font-bold">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed m-0">
                        {s.lead}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Column 2: Web Engineering */}
                <div className="flex flex-col gap-3.5">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    Modern Web Engineering
                  </div>
                  {engineeringServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group p-3.5 rounded-xl bg-gray-50 hover:bg-[#FFFDF5] border border-gray-200/80 hover:border-[#EFBD30] transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#0E0E14] group-hover:text-[#946C00] transition-colors">
                          {s.shortName}
                        </span>
                        {s.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EFBD30]/20 text-[#946C00] font-bold">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed m-0">
                        {s.lead}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Column 3: Performance & Growth */}
                <div className="flex flex-col gap-3.5">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1">
                    Performance &amp; Scale
                  </div>
                  {performanceServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="group p-3.5 rounded-xl bg-gray-50 hover:bg-[#FFFDF5] border border-gray-200/80 hover:border-[#EFBD30] transition-all duration-200 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-[#0E0E14] group-hover:text-[#946C00] transition-colors">
                          {s.shortName}
                        </span>
                        {s.badge && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EFBD30]/20 text-[#946C00] font-bold">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed m-0">
                        {s.lead}
                      </p>
                    </Link>
                  ))}

                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase mb-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      100/100 Core Web Vitals
                    </div>
                    <p className="text-xs text-emerald-700 leading-relaxed m-0">
                      Sub-second LCP, zero layout shifts, and semantic Schema.org entity graphs.
                    </p>
                  </div>
                </div>

                {/* Column 4: Enterprise Advisory Card */}
                <div className="bg-gradient-to-br from-[#FFFBEA] to-[#FFF3CC] border border-[#EFBD30]/40 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div>
                    <span className="text-[10px] font-bold text-[#946C00] uppercase tracking-wider block mb-1">
                      Boutique Studio Advantage
                    </span>
                    <h4 className="text-base font-bold text-[#0E0E14] mb-2">
                      Work Directly with Principal Technologist
                    </h4>
                    <p className="text-xs text-gray-700 leading-relaxed m-0">
                      6+ years mastery in Figma UI/UX, Next.js App Router, and custom Shopify Liquid. Direct execution with zero agency decay.
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#EFBD30]/30 flex flex-col gap-2.5">
                    <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Accepting select client projects
                    </div>
                    <Link
                      href="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#0E0E14] text-[#EFBD30] font-bold text-xs shadow-md hover:bg-black transition-colors"
                    >
                      Book Strategy Call <Icon name="i-arrow" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        id="mobmenu"
        aria-hidden={!menuOpen}
      >
        <div className="pb-4 border-b border-gray-200 mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFBD30]/15 text-[#946C00] text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-[#EFBD30] animate-pulse" />
            Accepting Client Projects
          </span>
          <span className="text-xs font-bold text-[#946C00] uppercase tracking-wider">
            AI Studio
          </span>
        </div>

        <Link
          className="ml"
          href="/work"
          onClick={() => setMenuOpen(false)}
        >
          Work
        </Link>

        {/* Mobile Accordion for Services */}
        <div>
          <button
            type="button"
            className="ml w-full text-left flex items-center justify-between"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            <span>Services</span>
            <span className="text-sm font-bold text-[#946C00]">{mobileServicesOpen ? "−" : "+"}</span>
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 py-2 flex flex-col gap-2 border-l-2 border-[#EFBD30] ml-2 mb-2">
              <Link
                href="/services"
                className="text-xs font-bold text-[#946C00] py-1"
                onClick={() => setMenuOpen(false)}
              >
                → View All Services Overview
              </Link>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs text-gray-700 hover:text-black py-1 flex items-center justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{s.shortName}</span>
                  {s.badge && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-[#946C00] font-semibold">
                      {s.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          className="ml"
          href="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          className="ml"
          href="/technology"
          onClick={() => setMenuOpen(false)}
        >
          Technology
        </Link>
        <Link
          className="ml"
          href="/insights"
          onClick={() => setMenuOpen(false)}
        >
          Insights
        </Link>
        <Link
          className="ml"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <Link
          className="btn btn-primary mt-6 text-center font-bold"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Book an Enterprise Strategy Call
        </Link>
      </div>
    </>
  );
}
