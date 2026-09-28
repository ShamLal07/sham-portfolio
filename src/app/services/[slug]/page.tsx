import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, BRAND_NAME, FOUNDER_NAME, SITE_URL } from "@/data/portfolio";
import { Icon } from "@/components/Icons";
import { CtaSection } from "@/components/CtaSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} — ${BRAND_NAME}`,
    description: service.lead,
    keywords: [
      service.name,
      service.shortName,
      ...service.tags,
      BRAND_NAME,
      FOUNDER_NAME,
      "Elite Digital Studio",
      "Web Architecture Agency",
    ],
    openGraph: {
      title: `${service.name} | ${BRAND_NAME}`,
      description: service.lead,
      url: `${SITE_URL}/services/${service.slug}`,
      siteName: BRAND_NAME,
      images: [
        {
          url: "/hero-real-studio.jpg",
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
  };
}

export default async function SingleServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.lead,
    provider: {
      "@type": "ProfessionalService",
      name: BRAND_NAME,
      founder: FOUNDER_NAME,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chandigarh / Mohali",
        addressCountry: "India",
      },
    },
    serviceType: service.shortName,
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      price: service.pricingEstimate || "Custom Scoped",
      priceCurrency: "INR",
    },
  };

  return (
    <>
      {/* Schema.org Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#0E0E14] via-[#0E0E14] to-[var(--surface)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[2]">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-[var(--muted)] mb-6">
            <Link href="/" className="hover:text-[var(--text)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--text)] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[var(--accent-t)] font-semibold">
              {service.shortName}
            </span>
          </nav>

          {/* Badges & Category */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="tag accent flex items-center gap-1.5 font-bold">
              <Icon name={service.icon} className="w-3.5 h-3.5" />
              {service.badge || "Specialized Architecture"}
            </span>
            {service.timeline && (
              <span className="tag live">
                <i className="pulse" /> Typical Turnaround: {service.timeline}
              </span>
            )}
            {service.pricingEstimate && (
              <span className="tag">{service.pricingEstimate}</span>
            )}
          </div>

          {/* Service Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text)] tracking-tight max-w-4xl leading-[1.08]">
            {service.name}
          </h1>

          {/* Lead Description */}
          <p className="mt-5 text-lg sm:text-xl text-[var(--text-2)] max-w-3xl leading-relaxed">
            {service.lead}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-bold rounded-full shadow-lg"
            >
              Consult On This Service <Icon name="i-arrow" />
            </Link>
            <Link
              href="/work"
              className="btn btn-ghost inline-flex items-center gap-2 px-6 py-3.5 text-base rounded-full"
            >
              Explore Related Work
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Overview & Best For */}
      <section className="py-16 sm:py-20 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="tag accent mb-3 inline-flex">Architectural Strategy</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[var(--text)] mb-5">
                Engineered for High-Stakes Performance
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-2)] leading-relaxed mb-4">
                {service.moreDetail}
              </p>
              <div className="p-5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] mt-6">
                <b className="text-xs uppercase tracking-wider text-[var(--accent-t)] block mb-1">
                  Ideal Project Fit:
                </b>
                <p className="text-sm sm:text-base text-[var(--text)] font-medium m-0">
                  {service.bestFor}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold font-display text-[var(--text)] mb-4">
                Key Highlights Included
              </h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-2)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--accent)]/15 text-[var(--accent-t)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Breakdown */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sec-head">
              <div>
                <span className="tag accent mb-3 inline-flex">Tangible Assets</span>
                <h2>What You Receive</h2>
              </div>
              <p>
                Precise, production-ready deliverables built with zero handoff friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {service.deliverables.map((deliv, idx) => (
                <div
                  key={deliv.title}
                  className="card p-6 sm:p-8 flex flex-col gap-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 text-[var(--accent-t)] font-display font-bold flex items-center justify-center text-sm">
                      0{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[var(--text)] m-0">
                      {deliv.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[var(--text-2)] leading-relaxed m-0">
                    {deliv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Step-by-Step Methodology */}
      {service.processSteps && service.processSteps.length > 0 && (
        <section className="py-20 sm:py-28 bg-[var(--surface)] border-y border-[var(--border)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sec-head">
              <div>
                <span className="tag accent mb-3 inline-flex">Our Blueprint</span>
                <h2>Execution Methodology</h2>
              </div>
              <p>
                A disciplined four-phase roadmap that ensures transparency and on-time delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.processSteps.map((step) => (
                <div
                  key={step.phase}
                  className="card p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex flex-col gap-2.5"
                >
                  <span className="badge self-start text-xs font-bold font-display">
                    Phase {step.phase}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-display text-[var(--text)] m-0">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-2)] leading-relaxed m-0">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="sec-head text-center mx-auto mb-12">
              <span className="tag accent mb-3 inline-flex">Clear Answers</span>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know before initiating this service.</p>
            </div>

            <div className="space-y-4">
              {service.faqs.map(([q, a]) => (
                <details
                  key={q}
                  className="p-5 sm:p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] transition-colors open:border-[var(--accent)]"
                >
                  <summary className="font-display font-bold text-base sm:text-lg text-[var(--text)] cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{q}</span>
                    <span className="text-[var(--accent-t)] text-xl font-mono">+</span>
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-[var(--text-2)] leading-relaxed m-0">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to action */}
      <CtaSection />
    </>
  );
}
