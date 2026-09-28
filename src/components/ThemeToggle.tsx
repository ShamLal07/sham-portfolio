"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "./Icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let currentTheme: "light" | "dark" = "dark";
    try {
      const saved = localStorage.getItem("sl-theme-v2") as "light" | "dark" | null;
      if (saved === "light" || saved === "dark") {
        currentTheme = saved;
      }
    } catch {
      // fallback
    }
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("sl-theme-v2", nextTheme);
    } catch {
      // ignore
    }
  };

  return (
    <button
      className="icon-btn"
      id="theme"
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
          : "Switch theme"
      }
    >
      <Icon name={mounted && theme === "dark" ? "i-sun" : "i-moon"} />
    </button>
  );
}
