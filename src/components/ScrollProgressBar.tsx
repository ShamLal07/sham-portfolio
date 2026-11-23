"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 z-50 pointer-events-none"
    />
  );
}
