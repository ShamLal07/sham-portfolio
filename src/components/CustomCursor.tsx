"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!visible) setVisible(true);
    };

    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    // Smooth trailing animation loop
    const loop = () => {
      const ease = 0.18;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      setTrailingPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest(".btn") ||
          target.closest(".pcard") ||
          target.closest(".chip") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select"))
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        className="cursor-dot"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
          pointerEvents: "none",
          zIndex: 99999,
          boxShadow: "0 0 8px var(--accent)",
          transition: "opacity 0.2s ease",
        }}
      />

      {/* Outer fluid trailing ring */}
      <div
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovered ? "56px" : "36px",
          height: hovered ? "56px" : "36px",
          borderRadius: "50%",
          border: "1.5px solid var(--accent)",
          backgroundColor: hovered
            ? "color-mix(in srgb, var(--accent) 15%, transparent)"
            : "transparent",
          transform: `translate3d(${
            trailingPos.x - (hovered ? 28 : 18)
          }px, ${trailingPos.y - (hovered ? 28 : 18)}px, 0)`,
          pointerEvents: "none",
          zIndex: 99998,
          transition:
            "width 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.25s ease",
          boxShadow: hovered ? "0 0 20px rgba(239, 189, 48, 0.3)" : "none",
        }}
      />
    </>
  );
}
