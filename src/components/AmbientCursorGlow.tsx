"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function AmbientCursorGlow() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!visible) setVisible(true);
      };

      const handleMouseLeave = () => {
        setVisible(false);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-30"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Soft warm sunset ambient spotlight aura */}
      <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-amber-500/[0.07] via-orange-500/[0.04] to-transparent blur-[90px]" />
    </motion.div>
  );
}
