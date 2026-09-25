import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaSection } from "@/components/CtaSection";
import { PRICING_PLANS } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing and starter packages for web design, WordPress, Shopify, and UI/UX projects by Sham Lal.",
  openGraph: {
    title: "Pricing — Sham Lal",
    description: "Simple starting points. Final pricing depends on your project.",
  },
};

export default function PricingPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Pricing</h1>
        <p>Simple starting points. Final pricing depends on your project.</p>
      </div>

      <div className="container" style={{ paddingBottom: "96px" }}>
        <div className="cards rv in">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`card price ${plan.featured ? "featured" : ""}`}
            >
              <h3>{plan.name}</h3>
              <div className="amt">{plan.price}</div>
              <span className="caption" style={{ marginTop: "-12px" }}>
                {plan.prefix === "Around " ? "Approximate" : "Starting from"}
              </span>
              <p className="small">{plan.desc}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="i-check" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"}`}
                style={{ marginTop: "auto" }}
                href="/contact"
              >
                Get a quote
              </Link>
            </article>
          ))}
        </div>
        <p className="small" style={{ marginTop: "24px" }}>
          Prices are indicative only. Final pricing depends on project scope,
          features and requirements.
        </p>
      </div>

      <CtaSection />
    </>
  );
}
