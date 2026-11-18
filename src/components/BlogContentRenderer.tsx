"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { List, CheckCircle, ArrowRight } from "lucide-react";

interface BlogContentRendererProps {
  content: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  // Extract table of contents from markdown headings
  const toc = useMemo<TocItem[]>(() => {
    const lines = content.split("\n");
    const items: TocItem[] = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim().replace(/\*\*/g, "");
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        items.push({ id, text, level });
      }
    });

    return items;
  }, [content]);

  // Format markdown blocks into semantic HTML elements
  const renderedElements = useMemo(() => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];
    let codeLang = "";
    let listBuffer: string[] = [];

    const flushList = (key: string) => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={key} className="space-y-2.5 my-5 pl-2 list-none">
            {listBuffer.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/80 leading-relaxed text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              </li>
            ))}
          </ul>
        );
        listBuffer = [];
      }
    };

    lines.forEach((line, idx) => {
      // Code block start / end
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          flushList(`list-before-code-${idx}`);
          elements.push(
            <div key={`code-${idx}`} className="my-6 rounded-2xl bg-[#07080B] border border-white/10 overflow-hidden">
              {codeLang && (
                <div className="px-4 py-2 border-b border-white/10 bg-white/[0.03] text-xs font-mono text-white/50 uppercase">
                  {codeLang}
                </div>
              )}
              <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-amber-200 overflow-x-auto leading-relaxed">
                <code>{codeBuffer.join("\n")}</code>
              </pre>
            </div>
          );
          codeBuffer = [];
          inCodeBlock = false;
          codeLang = "";
        } else {
          flushList(`list-before-code-${idx}`);
          inCodeBlock = true;
          codeLang = line.replace("```", "").trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Unordered list items
      if (line.match(/^[-*]\s+(.+)$/)) {
        const itemText = line.replace(/^[-*]\s+/, "");
        listBuffer.push(itemText);
        return;
      } else {
        flushList(`list-${idx}`);
      }

      // Headings
      if (line.startsWith("## ")) {
        const text = line.replace("## ", "").trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        elements.push(
          <h2
            key={`h2-${idx}`}
            id={id}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-10 mb-4 scroll-mt-28"
          >
            {text}
          </h2>
        );
        return;
      }

      if (line.startsWith("### ")) {
        const text = line.replace("### ", "").trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        elements.push(
          <h3
            key={`h3-${idx}`}
            id={id}
            className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight mt-8 mb-3 scroll-mt-28"
          >
            {text}
          </h3>
        );
        return;
      }

      // Horizontal Rule
      if (line.trim() === "---") {
        elements.push(<hr key={`hr-${idx}`} className="my-8 border-white/10" />);
        return;
      }

      // Blockquotes
      if (line.startsWith("> ")) {
        const text = line.replace("> ", "").trim();
        elements.push(
          <blockquote
            key={`quote-${idx}`}
            className="my-6 pl-5 border-l-4 border-amber-400 bg-amber-500/[0.04] py-3 pr-4 rounded-r-xl text-white/90 italic font-medium"
          >
            {text}
          </blockquote>
        );
        return;
      }

      // Paragraphs
      if (line.trim().length > 0) {
        elements.push(
          <p
            key={`p-${idx}`}
            className="my-4 text-base sm:text-lg text-white/75 leading-relaxed font-normal"
            dangerouslySetInnerHTML={{ __html: parseInline(line) }}
          />
        );
      }
    });

    flushList("list-final");
    return elements;
  }, [content]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Table of Contents Sticky Sidebar on Desktop */}
      {toc.length > 0 && (
        <aside className="lg:col-span-4 order-2 lg:order-1 lg:sticky lg:top-28">
          <div className="rounded-2xl bg-[#11131C] border border-white/10 p-5 sm:p-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 pb-3 border-b border-white/10">
              <List className="w-4 h-4" />
              <span>Table of Contents</span>
            </div>

            <nav className="space-y-2.5">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block text-xs sm:text-sm transition-colors hover:text-amber-300 ${
                    item.level === 3 ? "pl-3 text-white/50" : "text-white/75 font-medium"
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Consultation Callout Box */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-[#141620] to-[#0A0B0E] border border-amber-500/30 p-5 sm:p-6 text-white shadow-xl">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1.5">
              Direct Developer Contact
            </span>
            <h4 className="text-base font-extrabold text-white mb-2">Need Help With Your Web Build?</h4>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              I develop custom WordPress sites, Shopify stores, and Next.js applications tailored to your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Work With Sham</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </aside>
      )}

      {/* Main Blog Prose Article */}
      <div className={`order-1 lg:order-2 ${toc.length > 0 ? "lg:col-span-8" : "lg:col-span-12"}`}>
        <div className="prose-container">{renderedElements}</div>
      </div>
    </div>
  );
}

// Inline Markdown parser (bold, italic, code, links)
function parseInline(text: string): string {
  let parsed = text;
  // Escapes for HTML
  parsed = parsed
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold **text**
  parsed = parsed.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
  // Italic *text*
  parsed = parsed.replace(/\*(.+?)\*/g, '<em class="italic text-white/90">$1</em>');
  // Inline code `code`
  parsed = parsed.replace(
    /`([^`]+)`/g,
    '<code class="px-1.5 py-0.5 rounded bg-white/[0.08] text-amber-300 font-mono text-xs">$1</code>'
  );
  // Markdown links [text](url)
  parsed = parsed.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-amber-400 hover:underline font-medium">$1</a>'
  );

  return parsed;
}
