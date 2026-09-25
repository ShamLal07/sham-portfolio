"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "./Icons";

export function HeroVisual3D() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      className="hero-3d-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        marginTop: "var(--s5)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--surface)",
        boxShadow: "0 24px 64px -24px rgba(0,0,0,0.45)",
      }}
    >
      {/* Ambient background glow */}
      <div
        className="hero-ambient-glow"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(239, 189, 48, 0.18), transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Main 3D Banner Image with Perspective Tilt */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          maxHeight: "520px",
          transform: `perspective(1000px) rotateY(${coords.x * 6}deg) rotateX(${
            coords.y * -6
          }deg)`,
          transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        <Image
          src="/hero-3d.jpg"
          alt="ShamWeb Creative 3D Digital Production & Kinetic Web Design"
          fill
          priority
          sizes="(max-width: 1240px) 100vw, 1240px"
          style={{
            objectFit: "cover",
            filter: "brightness(0.92) contrast(1.08)",
          }}
        />

        {/* Dynamic Video-style scanline overlay & dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(14,14,20,0.2) 0%, rgba(14,14,20,0.85) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Floating Glassmorphic Badges */}
        <div
          className="hero-badge hero-badge-top"
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            background: "rgba(20, 20, 29, 0.82)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(239, 189, 48, 0.35)",
            borderRadius: "99px",
            padding: "8px 18px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "var(--themewhite)",
            fontSize: "0.85rem",
            fontWeight: 600,
            zIndex: 2,
            boxShadow: "0 12px 24px rgba(0,0,0,0.4)",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 10px var(--accent)",
            }}
          />
          Next-Gen AI & WebGL Production
        </div>

        <div
          className="hero-badge hero-badge-bottom-left"
          style={{
            position: "absolute",
            bottom: "28px",
            left: "28px",
            zIndex: 2,
            maxWidth: "380px",
          }}
        >
          <div
            style={{
              background: "rgba(14, 14, 20, 0.85)",
              backdropFilter: "blur(18px)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--accent)",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              <Icon name="i-rocket" />
              <span>Full-Cycle Agency Execution</span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                color: "#F8F9FA",
                fontWeight: 600,
                lineHeight: 1.4,
              }}
            >
              Pro UI/UX Architecture · 2D/3D Kinetic Motion · Next.js & Shopify
              Engineering
            </p>
          </div>
        </div>

        <div
          className="hero-badge hero-badge-bottom-right"
          style={{
            position: "absolute",
            bottom: "28px",
            right: "28px",
            zIndex: 2,
            display: "flex",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "rgba(14, 14, 20, 0.85)",
              backdropFilter: "blur(18px)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "12px 18px",
              textAlign: "center",
            }}
          >
            <b
              style={{
                display: "block",
                fontSize: "1.4rem",
                color: "var(--accent)",
                fontFamily: "var(--display)",
              }}
            >
              6+ Years
            </b>
            <span style={{ fontSize: "0.78rem", color: "#c4c5cc" }}>
              Design & Dev Mastery
            </span>
          </div>

          <div
            style={{
              background: "rgba(14, 14, 20, 0.85)",
              backdropFilter: "blur(18px)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              padding: "12px 18px",
              textAlign: "center",
            }}
          >
            <b
              style={{
                display: "block",
                fontSize: "1.4rem",
                color: "#4cd08c",
                fontFamily: "var(--display)",
              }}
            >
              100/100
            </b>
            <span style={{ fontSize: "0.78rem", color: "#c4c5cc" }}>
              Performance Speed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
