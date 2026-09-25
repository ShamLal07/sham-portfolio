"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "./Icons";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let currentTheme: "light" | "dark" = "light";
    try {
      const saved = localStorage.getItem("sl-theme") as "light" | "dark" | null;
      if (saved) {
        currentTheme = saved;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        currentTheme = "dark";
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
      localStorage.setItem("sl-theme", nextTheme);
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
