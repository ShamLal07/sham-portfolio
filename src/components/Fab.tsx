"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";

export function Fab() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 480);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const isContactPage = pathname === "/contact";

  return (
    <div className={`fab ${show ? "show" : ""}`} id="fab">
      {!isContactPage && (
        <Link className="fab-talk" href="/contact">
          Let&apos;s talk
        </Link>
      )}
      <button
        className="fab-top"
        id="totop"
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <Icon name="i-up" />
      </button>
    </div>
  );
}
