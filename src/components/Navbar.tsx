"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

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
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky-nav ${scrolled ? "scrolled" : ""}`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo with clean designer-dev badge */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group py-1"
            aria-label="Sham Lal Portfolio"
          >
            <div
              className="w-8 h-8 rounded-full bg-[#0F1117] flex items-center justify-center font-extrabold text-xs tracking-tight transition-all group-hover:bg-[#2563EB] group-hover:scale-105 shadow-xs"
              style={{ color: "#FFFFFF", backgroundColor: "#0F1117" }}
            >
              <span style={{ color: "#FFFFFF" }}>SL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[1.08rem] tracking-tight text-[#0F1117] leading-tight group-hover:text-[#2563EB] transition-colors">
                Sham Lal
              </span>
              <span className="text-[10.5px] font-semibold text-[#848792] tracking-wide uppercase leading-none mt-0.5">
                Designer &amp; Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-1.5 rounded-full border border-[#E5E4DE] shadow-xs"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href.startsWith("/work") && pathname.startsWith("/work")) ||
                (link.href.startsWith("/services") && pathname.startsWith("/services")) ||
                (link.href.startsWith("/about") && pathname.startsWith("/about"));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-[0.88rem] font-semibold transition-all ${
                    isActive
                      ? "nav-pill-active bg-[#0F1117] shadow-xs"
                      : "text-[#575A65] hover:text-[#0F1117] hover:bg-[#F1F0EC]"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: "#0F1117", color: "#FFFFFF" }
                      : undefined
                  }
                >
                  <span style={{ color: isActive ? "#FFFFFF" : undefined }}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right CTA / Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="nav-cta-btn group hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#0F1117] text-[0.88rem] font-bold transition-all hover:bg-[#262935] hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              style={{ backgroundColor: "#0F1117", color: "#FFFFFF" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span style={{ color: "#FFFFFF" }}>Let&apos;s Talk</span>
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                style={{ color: "#FFFFFF" }}
              />
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full border border-[#E5E4DE] bg-white text-[#0F1117] hover:bg-[#F1F0EC] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] z-40 bg-[#FAF9F7] md:hidden px-7 py-10 flex flex-col justify-between border-t border-[#E5E4DE] animate-fade-in shadow-xl">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-[#0F1117] py-3 border-b border-[#E5E4DE]/60 flex items-center justify-between hover:text-[#2563EB] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-5 h-5 text-[#848792]" />
              </Link>
            ))}
          </nav>

          <div className="pt-8">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary justify-center text-center py-4 text-base"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-[#848792] mt-4">
              Sham Lal · Web Designer &amp; Frontend Developer
            </p>
          </div>
        </div>
      )}
    </>
  );
}
