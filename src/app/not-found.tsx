import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Sham Lal",
  description: "The page you are looking for does not exist. Browse selected web development work, services, or contact Sham Lal.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="pt-32 pb-28 md:pt-40 md:pb-36 text-center bg-[#0A0B0E] text-white min-h-[75vh] flex items-center justify-center">
      <div className="site-container max-w-lg">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-400 mb-5">
          404 ERROR
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-white/65 mb-8 leading-relaxed">
          The link you followed may be broken or the page may have been moved. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-sm font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 text-amber-200 transform transition-transform group-hover:-translate-x-1" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.06] border border-white/15 text-white text-sm font-semibold hover:border-amber-400/40 hover:bg-white/[0.12] transition-all"
          >
            <span>View Work</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-white/45 flex items-center justify-center gap-6">
          <Link href="/services" className="hover:text-amber-400 transition-colors">Services</Link>
          <span>•</span>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}

