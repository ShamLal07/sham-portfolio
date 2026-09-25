import React from "react";
import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { InsightCard } from "@/components/InsightCard";
import { CtaSection } from "@/components/CtaSection";
import { INSIGHTS, BRAND_NAME } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Insights & Technical Articles",
  description:
    `Articles and architectural deep dives on UI/UX systems, Next.js, custom Shopify, WordPress ACF, and digital product design by ${BRAND_NAME}.`,
  openGraph: {
    title: `Insights — ${BRAND_NAME}`,
    description:
      "Technical perspectives on web architecture, design systems, and digital product craft.",
  },
};

export default function InsightsPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Studio Insights</h1>
        <p>
          Perspectives on UI/UX architecture, Next.js, Shopify engineering, and digital craft.
        </p>
      </div>

      <div className="container" style={{ paddingBottom: "96px" }}>
        <div className="notice">
          <Icon name="i-info" />
          <p>
            Read our latest technical breakdowns, case study methodologies, and
            architectural principles for modern high-performance web products.
          </p>
        </div>

        <div className="cards">
          {INSIGHTS.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </div>

      <CtaSection />
    </>
  );
}
