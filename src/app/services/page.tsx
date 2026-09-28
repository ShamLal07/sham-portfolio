import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { CtaSection } from "@/components/CtaSection";
import {
  SERVICES,
  EVERY_PROJECT,
  PROCESS,
  PRICING_PLANS,
  FAQ,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive UI/UX design, web design, Figma to code, WordPress, and Shopify development services by Sham Lal. Clear pricing and transparent process.",
  openGraph: {
    title: "Services — Sham Lal",
    description:
      "Design, build and launch handled by one person. UI/UX design, web development, WordPress, Shopify, and performance.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="container page-head">
        <h1>Services</h1>
        <p>
          Design, build and launch handled by one person. Here is exactly what
          each service covers.
        </p>
      </div>

      <div className="container pb-16">
        {SERVICES.map((s) => (
          <article key={s.name} className="svc rv in">
            <div className="l">
              <Icon name={s.icon} />
              <h2 className="text-2xl sm:text-3xl font-bold">{s.name}</h2>
            </div>
            <div className="m">
              <p>{s.lead}</p>
              <p className="small mt-3">
                {s.moreDetail}
              </p>
              <p className="small mt-3">
                <strong>Best for:</strong> {s.bestFor}
              </p>
              <ul className="mt-4 list-none p-0 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="r flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold mb-3">
                  What&apos;s included
                </h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 pt-4 border-t border-[var(--border)]">
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-t)] hover:underline"
                >
                  View Full Architecture &amp; Deliverables <Icon name="i-arrow" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Included on every project */}
      <section className="bg-[var(--surface)]">
        <div className="container">
          <div className="sec-head">
            <h2>Included on every project</h2>
            <p>
              The details that separate a good website from an average one.
            </p>
          </div>
          <div className="cards rv in">
            {EVERY_PROJECT.map((x) => (
              <article key={x[0]} className="card">
                <h3>{x[0]}</h3>
                <p className="small">{x[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How a project works */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>How a project works</h2>
            <p>Six steps from the first message to launch.</p>
          </div>
          <ol className="cards rv in list-none p-0">
            {PROCESS.map((x, i) => (
              <li key={x[0]} className="card">
                <span className="badge self-start">
                  Step {i + 1}
                </span>
                <h3>{x[0]}</h3>
                <p className="small">{x[1]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing section */}
      <section className="bg-[var(--surface)]">
        <div className="container">
          <div className="sec-head">
            <h2>Pricing</h2>
            <p>
              Indicative starting points in Indian rupees. Every project is
              scoped individually.
            </p>
          </div>

          <div className="cards rv in">
            {PRICING_PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`card price ${plan.featured ? "featured" : ""}`}
              >
                <h3>{plan.name}</h3>
                <div className="amt">{plan.price}</div>
                <span className="caption -mt-3">
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
                  className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"} mt-auto`}
                  href="/contact"
                >
                  Get a quote
                </Link>
              </article>
            ))}
          </div>
          <p className="small mt-6">
            Prices are indicative only. Final pricing depends on project scope,
            features and requirements.
          </p>
        </div>
      </section>

      {/* FAQ section */}
      <section>
        <div className="container">
          <div className="sec-head">
            <h2>Questions</h2>
          </div>
          {FAQ.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
