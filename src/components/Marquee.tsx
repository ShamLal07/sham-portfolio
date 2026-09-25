import React from "react";
import { MARQUEE_TECH } from "@/data/portfolio";

export function Marquee() {
  // Repeating twice to make a continuous seamless loop
  const list = [...MARQUEE_TECH, ...MARQUEE_TECH, ...MARQUEE_TECH];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {list.map((tech, idx) => (
          <span key={`${tech}-${idx}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
