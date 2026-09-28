import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { INSIGHTS, BRAND_NAME, FOUNDER_NAME } from "@/data/portfolio";
import { CtaSection } from "@/components/CtaSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Insights`,
    description: article.desc,
    openGraph: {
      title: `${article.title} — ${BRAND_NAME}`,
      description: article.desc,
      images: ["/hero-3d.jpg"],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="container page-head article">
        <Link
          href="/insights"
          className="small text-[var(--muted)] hover:underline no-underline"
        >
          ← All studio insights
        </Link>
        <div className="my-5 mb-4">
          <span className="tag accent">{article.cat}</span>
        </div>
        <h1>{article.title}</h1>
        <p className="caption mt-4">
          By {FOUNDER_NAME} · {BRAND_NAME} · {article.date || "Sep 2026"} ·{" "}
          {article.readTime || "5 min read"}
        </p>
      </div>

      <div className="container article pb-24">
        <div className="cs-shot relative mb-10 aspect-video overflow-hidden shadow-2xl rounded-2xl">
          <Image
            src="/hero-3d.jpg"
            alt={article.title}
            fill
            priority
            sizes="(max-width: 720px) 100vw, 720px"
            className="object-cover"
          />
        </div>

        <p className="text-lg font-medium text-[var(--text)]">
          {article.desc}
        </p>

        {article.body &&
          article.body.map((para, idx) => <p key={idx}>{para}</p>)}

        <h2>Architectural Principles &amp; Best Practices</h2>
        <p>
          High-performance digital craft requires uncompromising discipline
          across both design tokens and engineering pipelines. When visual
          storytelling and code architecture are unified from day one, web
          experiences load instantly, rank organically, and convert effortlessly.
        </p>
        <p>
          Whether deploying custom Shopify storefronts, dynamic WordPress CMS
          platforms, or bespoke interactive Next.js web applications, eliminating
          bureaucratic handoff gaps ensures that creative fidelity never decays
          between mockup and production.
        </p>
      </div>

      <CtaSection />
    </>
  );
}
