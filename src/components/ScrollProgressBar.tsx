"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-zinc-600 via-white to-zinc-400 shadow-[0_0_12px_rgba(255,255,255,0.7)] z-50 pointer-events-none"
    />
  );
}
