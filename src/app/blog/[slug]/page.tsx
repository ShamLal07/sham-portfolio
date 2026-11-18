import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  ChevronRight,
  MessageCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/db";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { BlogShareButtons } from "@/components/BlogShareButtons";
import { JsonLd } from "@/components/JsonLd";
import { LinkedInIcon, GitHubIcon, UpworkIcon } from "@/components/SocialIcons";
import { SITE_CONFIG, SITE_URL } from "@/data/siteConfig";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts(false);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Sham Lal",
    };
  }

  const title = post.seoTitle || `${post.title} | Sham Lal`;
  const description = post.seoDescription || post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName: "Sham Lal Portfolio",
      title,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [SITE_CONFIG.name],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post || post.status !== "published") {
    notFound();
  }

  const allPosts = await getAllBlogPosts(false);
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  const fallbackRelated = relatedPosts.length > 0 ? relatedPosts : allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;

  // Structured Data (JSON-LD)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [ogImageUrl],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Sham, I read your article "${post.title}" on shamdev.in and I'd like to consult on an upcoming project.`
  );

  return (
    <div className="pt-10 pb-28 md:pt-16 md:pb-36 bg-transparent text-white min-h-screen">
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <div className="site-container">
        {/* Top Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/50 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <Link href="/blog" className="hover:text-blue-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <span className="text-blue-400 font-semibold">{post.category}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/70 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs mb-5">
            <span className="px-3.5 py-1 rounded-full font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30">
              {post.category}
            </span>
            <span className="text-white/60 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              {post.readTime}
            </span>
            <span className="text-white/30">·</span>
            <span className="text-white/60 flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              {post.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-white/75 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author Badge & Social Sharing Row */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xs text-white">
                SL
              </div>
              <div>
                <div className="text-sm font-bold text-white">{post.author.name}</div>
                <div className="text-xs text-white/50">{post.author.role}</div>
              </div>
            </div>

            <BlogShareButtons url={pageUrl} title={post.title} />
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] max-w-5xl rounded-3xl overflow-hidden bg-black/40 border border-white/10 mb-14 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content with Interactive Table of Contents */}
        <div className="max-w-5xl mb-16">
          <BlogContentRenderer content={post.content} />
        </div>

        {/* In-Article Conversion Banner */}
        <div className="max-w-5xl my-16 rounded-3xl bg-gradient-to-br from-[#1C1713] via-[#12131A] to-[#0A0B0E] border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Need Professional Web Development?</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Let&apos;s build a fast, high-converting website for your brand.
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-2.5 font-normal">
                Available for custom WordPress builds, Shopify store launches, and Next.js web application projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/917876525326?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                <span>Send Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="max-w-5xl rounded-3xl bg-[#11131C] border border-white/10 p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white font-extrabold text-2xl shrink-0 shadow-lg shadow-blue-500/20">
            SL
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h4 className="text-lg font-bold text-white">Written by Sham Lal</h4>
              <span className="hidden sm:inline text-white/30">·</span>
              <span className="text-xs font-semibold text-blue-400">Web Developer &amp; UI/UX Designer</span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Based in India, Sham Lal crafts high-performance custom WordPress websites, responsive Shopify storefronts, and modern React/Next.js applications for businesses globally.
            </p>
            <div className="pt-2 flex items-center justify-center sm:justify-start gap-4">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={SITE_CONFIG.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <UpworkIcon className="w-3.5 h-3.5" />
                <span>Upwork Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        {fallbackRelated.length > 0 && (
          <div className="max-w-5xl pt-10 border-t border-white/10">
            <h3 className="text-2xl font-extrabold text-white tracking-tight mb-8">
              Related Articles &amp; Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fallbackRelated.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block rounded-2xl bg-[#11131C] border border-white/10 hover:border-blue-400/40 p-5 transition-all shadow-md"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/40 border border-white/10 mb-4">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-blue-300">{rel.category}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mt-1 line-clamp-2">
                    {rel.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-blue-400">
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
