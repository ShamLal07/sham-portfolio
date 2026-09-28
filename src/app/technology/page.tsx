import React from "react";
import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { TECH_GROUPS, GITHUB } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore Sham Lal's technical stack: Figma, Next.js, React, WordPress, Shopify, Tailwind CSS, GSAP, and AI-assisted workflow tools.",
  openGraph: {
    title: "Technology — Sham Lal",
    description:
      "The tools I use to design, build and launch, with an honest view of my level in each.",
  },
};

export default function TechnologyPage() {
  const badgeLabels = {
    strong: "Work with daily",
    mid: "Working knowledge",
    grow: "Still improving",
    tool: "In my workflow",
  };

  return (
    <>
      <div className="container page-head">
        <h1>Technology</h1>
        <p>
          The tools I use to design, build and launch, with an honest view of my
          level in each.
        </p>
      </div>

      <div className="container pb-24">
        <div className="legend">
          <span className="badge strong">Work with daily</span>
          <span className="badge mid">Working knowledge</span>
          <span className="badge grow">Still improving</span>
          <span className="badge tool">In my workflow</span>
        </div>

        <div>
          {TECH_GROUPS.map((g) => (
            <div key={g.group} className="tech-group">
              <div>
                <h3>{g.group}</h3>
                <p className="small">{g.desc}</p>
              </div>
              <div className="tech-items">
                {g.items.map((i) => (
                  <div key={i.name} className="tech">
                    <b>{i.name}</b>
                    <span className={`badge ${i.level}`}>
                      {badgeLabels[i.level]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="small mt-6">
          GitHub:{" "}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-t)] hover:underline"
          >
            github.com/ShamLal07
          </a>
        </p>
      </div>

      <CtaSection />
    </>
  );
}
