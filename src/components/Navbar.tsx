"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark, Icon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

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
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-in">
          <Link className="logo" href="/" aria-label="Sham Lal Portfolio Home">
            <LogoMark />
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
              Let&apos;s talk
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
        >
          Let&apos;s talk
        </Link>
      </div>
    </>
  );
}
