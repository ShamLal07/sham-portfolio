"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, Calendar, ArrowUpRight, Sparkles, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { BlogPost } from "@/types/cms";

interface BlogListingClientProps {
  initialPosts: BlogPost[];
}

const CATEGORIES = ["All", "WordPress", "Shopify", "Next.js", "UI/UX Design", "Performance"];
const POSTS_PER_PAGE = 6;

export function BlogListingClient({ initialPosts }: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query));

      const matchCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchSearch && matchCategory;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const featuredPost = useMemo(() => {
    return initialPosts.find((p) => p.featured) || initialPosts[0];
  }, [initialPosts]);

  return (
    <div>
      {/* Featured Article Hero Spotlight */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <div className="mb-14 sm:mb-20">
          <div className="text-xs font-bold text-amber-400 tracking-wider uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED ARTICLE</span>
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-3xl bg-gradient-to-br from-[#161824] via-[#10121A] to-[#0A0B0E] border border-white/10 hover:border-amber-400/40 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {featuredPost.category}
                  </span>
                  <span className="text-white/60 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-white/60 flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {featuredPost.publishedAt}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors tracking-tight leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Read Full Guide</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25"
                    : "bg-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.1] border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search articles & topics..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-full bg-white/[0.05] border border-white/10 text-white placeholder-white/40 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
          />
        </div>
      </div>

      {/* Posts Count Indicator */}
      <div className="mb-6 flex items-center justify-between text-xs text-white/50">
        <span>
          Showing {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
        </span>
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="text-amber-400 hover:underline cursor-pointer"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-14">
          {paginatedPosts.map((post) => (
            <article
              key={post.id || post.slug}
              className="group rounded-3xl bg-[#11131C] border border-white/10 hover:border-amber-400/40 p-5 sm:p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-5">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#0A0B0E]/85 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      {post.category}
                    </span>
                  </div>
                </Link>

                {/* Metadata info */}
                <div className="flex items-center gap-3 text-xs text-white/50 mb-3 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {post.readTime}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {post.publishedAt}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight leading-snug mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed line-clamp-3 mb-5 font-normal">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer: Tags & Read Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-white/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/10 p-8">
          <p className="text-lg text-white/70 font-medium">No articles matched your filter criteria.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 px-6 py-2.5 rounded-full bg-amber-500 text-white font-bold text-xs hover:bg-amber-400 transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="p-2 rounded-full border border-white/10 bg-white/[0.04] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.1] transition-all cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === page
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-orange-500/25"
                  : "bg-white/[0.04] text-white/70 hover:bg-white/[0.1] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="p-2 rounded-full border border-white/10 bg-white/[0.04] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/[0.1] transition-all cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
