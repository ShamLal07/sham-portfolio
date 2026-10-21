import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-32 text-center bg-[#0A0B0E] text-white min-h-[70vh] flex items-center justify-center">
      <div className="site-container max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono font-bold text-amber-400 mb-4">
          404 ERROR
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-white/65 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-sm font-bold shadow-[0_10px_30px_-5px_rgba(245,120,30,0.5)] hover:shadow-[0_16px_40px_-5px_rgba(245,120,30,0.7)] hover:scale-[1.03] active:scale-95 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
          <ArrowLeft className="w-4 h-4 text-amber-200 transform transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-6 select-none items-center justify-center">
            <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
              Return to Homepage
            </span>
            <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-extrabold">
              Back to Home
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
