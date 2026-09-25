"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark, Icon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";
import { BRAND_NAME } from "@/data/portfolio";

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
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
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`nav ${scrolled ? "scrolled" : ""}`}
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg) 85%, transparent)"
            : "var(--bg)",
          transition: "background-color 0.3s, box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div className="container nav-in">
          <Link
            className="logo"
            href="/"
            aria-label={`${BRAND_NAME} Home`}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <LogoMark />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--display)",
                  fontWeight: 800,
                  fontSize: "1.18rem",
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                {BRAND_NAME}
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "var(--accent-t)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "2px",
                }}
              >
                Studio &amp; Lab
              </span>
            </div>
          </Link>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links" id="navlinks">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={isActive ? "active" : ""}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="nav-right">
            <ThemeToggle />
            <Link className="btn btn-primary nav-cta desk" href="/contact">
              Start a project
            </Link>
            <button
              className="icon-btn menu-btn"
              id="menu"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobmenu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "i-x" : "i-menu"} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        id="mobmenu"
        aria-hidden={!menuOpen}
      >
        <div style={{ paddingBottom: "16px", borderBottom: "1px solid var(--border)", marginBottom: "8px" }}>
          <span className="tag live">
            <i className="pulse" /> Accepting Client Projects
          </span>
        </div>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            className="ml"
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className="btn btn-primary"
          href="/contact"
          onClick={() => setMenuOpen(false)}
          style={{ marginTop: "24px" }}
        >
          Start a project
        </Link>
      </div>
    </>
  );
}
