"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { WhatsAppIcon, LinkedInIcon, XIcon } from "./SocialIcons";

interface BlogShareButtonsProps {
  url: string;
  title: string;
}

export function BlogShareButtons({ url, title }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-xs font-bold text-white/50 uppercase tracking-wider mr-1 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share:</span>
      </span>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-emerald-500/20 text-white/70 hover:text-emerald-400 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center transition-all cursor-pointer"
      >
        <WhatsAppIcon className="w-4 h-4" />
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-blue-500/20 text-white/70 hover:text-blue-400 border border-white/10 hover:border-blue-500/40 flex items-center justify-center transition-all cursor-pointer"
      >
        <LinkedInIcon className="w-4 h-4" />
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.15] text-white/70 hover:text-white border border-white/10 hover:border-white/30 flex items-center justify-center transition-all cursor-pointer"
      >
        <XIcon className="w-4 h-4" />
      </a>

      {/* Copy link */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link to article"
        className="px-3 py-1.5 rounded-full bg-white/[0.05] hover:bg-amber-500/20 text-white/70 hover:text-amber-300 border border-white/10 hover:border-amber-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
