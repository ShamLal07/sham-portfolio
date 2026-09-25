"use client";

import React, { useEffect, useState } from "react";
import { LogoMark } from "./Icons";
import { BRAND_NAME } from "@/data/portfolio";

export function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const hasLoaded = sessionStorage.getItem("swc_preloaded");
    if (hasLoaded) {
      setHidden(true);
      return;
    }

    // Disable scrolling while preloading
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);
        setTimeout(() => {
          setComplete(true);
          document.body.style.overflow = "";
          sessionStorage.setItem("swc_preloaded", "true");
          setTimeout(() => setHidden(true), 900);
        }, 350);
      } else {
        setPercent(current);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`preloader-overlay ${complete ? "slide-out" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#08080C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(24px, 5vw, 64px)",
        color: "#F8F9FA",
        transition: "transform 0.85s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.85s ease",
        transform: complete ? "translateY(-100%)" : "translateY(0)",
        pointerEvents: complete ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(239, 189, 48, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <LogoMark />
          <span
            style={{
              fontFamily: "var(--display)",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
              color: "#F8F9FA",
            }}
          >
            {BRAND_NAME}
          </span>
        </div>
        <span
          style={{
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--accent)",
            fontWeight: 700,
          }}
        >
          Studio v2.5 / 2026
        </span>
      </div>

      {/* Center Hero Reveal */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          margin: "auto 0",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(248, 249, 250, 0.6)",
            marginBottom: "16px",
            fontWeight: 600,
          }}
        >
          Initializing Digital Space · UI/UX &amp; 3D Motion
        </p>
        <h2
          style={{
            fontFamily: "var(--display)",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#F8F9FA",
          }}
        >
          Crafting Digital Realities Without Boundaries.
        </h2>
      </div>

      {/* Bottom Progress Bar & Counter */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                color: "rgba(248, 249, 250, 0.45)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Loading High-Performance Systems
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--accent)",
              }}
            >
              {percent < 30
                ? "Connecting Design Tokens..."
                : percent < 70
                ? "Compiling 3D Motion Matrix..."
                : percent < 100
                ? "Calibrating GPU Canvas..."
                : "Welcome to ShamWeb Creative"}
            </span>
          </div>

          <div
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.9,
              color: "var(--accent)",
              letterSpacing: "-0.04em",
            }}
          >
            {percent}
            <span style={{ fontSize: "0.5em", opacity: 0.8 }}>%</span>
          </div>
        </div>

        {/* The Track Line */}
        <div
          style={{
            width: "100%",
            height: "3px",
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${percent}%`,
              background:
                "linear-gradient(90deg, #d9a514, #EFBD30, #ffffff)",
              boxShadow: "0 0 16px rgba(239, 189, 48, 0.8)",
              transition: "width 0.15s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}
