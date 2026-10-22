"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Code2,
  CheckCheck,
  Cpu,
  Wand2,
  Layers,
  CheckCircle2,
  Route,
  Terminal,
  ArrowUpRight,
  Palette,
  Lightbulb,
  Rocket,
  TrendingUp,
} from "lucide-react";

/* ==========================================================================
   Real Brand Vector Logos (Pixel-Accurate SVGs)
   ========================================================================== */

// 1. ChatGPT (OpenAI)
function ChatGptLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3428 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3428 7.8956zm16.5991 3.8558L13.1038 8.364 15.124 7.1955a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6624zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

// 2. Claude (Anthropic)
function ClaudeLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h3.2l-2.26 2.26c-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0L9.82 15.6V19.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3.9l2.26 2.26c.59.59 1.54.59 2.12 0 .59-.59.59-1.54 0-2.12L14.94 13.5H19.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-4.56l2.26-2.26c.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0L12.82 8.4V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3.9L7.56 6.12c-.59-.59-1.54-.59-2.12 0-.59.59-.59 1.54 0 2.12L7.7 10.5H4.5z" />
    </svg>
  );
}

// 3. Google Gemini
function GeminiLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <defs>
        <linearGradient id="gemini-real-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4E82EE" />
          <stop offset="48%" stopColor="#9B72CF" />
          <stop offset="100%" stopColor="#E26D8B" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
        fill="url(#gemini-real-grad)"
      />
    </svg>
  );
}

// 4. Perplexity
function PerplexityLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
      <line x1="12" y1="22" x2="12" y2="12" />
      <path d="M20 7l-8 5-8-5" />
    </svg>
  );
}

// 5. Cursor
function CursorLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#0F1117" />
      <path d="M8 8l8 4.5L12 14l-1.5 3.5L8 8z" fill="#FFFFFF" />
    </svg>
  );
}

// 6. GitHub Copilot
function CopilotLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// 7. Bolt.new
function BoltLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13 2L3 14h8l-2 8 10-12h-8l2-8z" />
    </svg>
  );
}

// 8. Lovable
function LovableLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

// 9. Vercel / Vercel AI
function VercelLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L23 21H1L12 2z" />
    </svg>
  );
}

// 10. Replit Agent
function ReplitLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M2 3h9v5H2V3zm0 6.5h9v5H2v-5zm0 6.5h9v5H2v-5zm11-6.5h9v5h-9v-5z" />
    </svg>
  );
}

// 11. Figma
function FigmaLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 38 57" className={className} fill="none">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

// 12. React
function ReactLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
    </svg>
  );
}

// 13. Next.js
function NextJsLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <circle cx="12" cy="12" r="11" fill="#0F1117" />
      <path d="M8 7v10h1.8V11.2l5.7 5.8h1.8V7h-1.8v5.8L9.8 7H8z" fill="#FFFFFF" />
    </svg>
  );
}

// 14. Shopify
function ShopifyLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M18.8 4.6c-.1-.3-.3-.4-.5-.4l-2.4-.2s-1.4-2.6-1.7-3c-.3-.4-.9-.6-1.4-.5-.1 0-.3.1-.4.2C12.2.9 10.9 2.2 9.9 3.5l-3.3 1c-.7.2-1.2.9-1.2 1.6L4 21.8l13.9 2.2 6.1-3.2L18.8 4.6z" fill="#95BF47" />
      <path d="M14.5 4.1L12.3 3.9C11.5 5.1 10.3 6.6 9.4 8l5.8-.8c-.3-1-.5-2-.7-3.1z" fill="#5E8E3E" />
      <path d="M12.9 8.8l-4.5.6c-.7 1-1.3 2.1-1.8 3.2l6.8-.9c-.2-1-.4-2-.5-2.9z" fill="#5E8E3E" />
      <path d="M12.6 11.2c-.4-.2-1.3-.4-2-.4-1.5 0-2.4.8-2.4 2 0 2.2 3.3 2.3 3.3 4.2 0 .8-.6 1.4-1.6 1.4-1 0-1.8-.5-2.2-.9l-.4 1.7c.6.5 1.6.8 2.5.8 2 0 3.3-1.1 3.3-2.7 0-2.5-3.4-2.4-3.4-4.2 0-.6.5-1.1 1.3-1.1.7 0 1.3.2 1.7.4l.2-1.2z" fill="#FFFFFF" />
    </svg>
  );
}

// 15. WordPress
function WordPressLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18.2a8.2 8.2 0 0 1-5.18-1.85l3.87-10.6 3.97 10.87A8.16 8.16 0 0 1 12 20.2zm-6.84-8.2a8.07 8.07 0 0 1 1.25-4.32l4 10.95L7.1 12.87a6.76 6.76 0 0 1-.74-.87zm11.7 6.47l-3.32-9.62c.57-.03 1.08-.09 1.08-.09a.46.46 0 0 0 .42-.48.46.46 0 0 0-.46-.44s-1.38.11-2.28.11c-.85 0-2.25-.11-2.25-.11a.46.46 0 0 0-.46.45.46.46 0 0 0 .44.47s.48.06 1 .09l1.49 4.09-2.11 6.32L6.87 6.64A8.2 8.2 0 0 1 18.6 7.82l-1.74 10.65z" />
    </svg>
  );
}

// 16. Webflow
function WebflowLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.8 7.3c-.8.5-1.5 1.1-2 1.8-.1-.7-.3-1.4-.7-1.9-.8-.9-1.9-1.4-3.1-1.4-.8 0-1.6.2-2.3.7-.8.5-1.4 1.2-1.8 2.1L6.7 13c-.1-.7-.2-1.3-.2-2 0-2.3.9-3.9 2.5-4.8 1-.6 2.1-.9 3.3-.9 1.7 0 3.1.6 4.3 1.8.4.4.8.9 1.2 1.2zm4.7 1.8c-.2-.4-.4-.8-.7-1.1-.9-.9-2.1-1.4-3.5-1.4-.7 0-1.4.1-2.1.4-.7.3-1.3.7-1.8 1.3l-2.4 3.7-1.8-4.5c-.3-.7-.7-1.3-1.2-1.7-.8-.7-1.8-1-2.9-1-1.3 0-2.5.4-3.5 1.3C1.6 8.3.9 9.8.9 11.7c0 1.2.2 2.3.7 3.3l4.3-7.5c.3-.5.7-.9 1.2-1.2.6-.4 1.3-.6 2-.6.9 0 1.7.3 2.3.9.5.5.8 1.2 1 2l-3.8 6.6c-.3.5-.7.9-1.2 1.2-.6.4-1.3.6-2 .6-.4 0-.8-.1-1.2-.2l1.6 2.8c.6.2 1.3.3 2 .3 1.6 0 2.9-.5 4-1.6.6-.6 1.1-1.3 1.5-2.2l2.3-4.1 1.7 4.2c.4.9.9 1.6 1.6 2.1.8.6 1.7.9 2.8.9 1.4 0 2.6-.5 3.6-1.5.9-.9 1.5-2.1 1.7-3.5l.2-1.8c0-.7-.1-1.4-.4-2.1z" />
    </svg>
  );
}

// 17. Wix / Wix Studio
function WixLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M1.5 8h2.3l1.8 6.1L7.5 8h2.1l1.9 6.1L13.3 8h2.2l-2.8 8.5h-2.1L8.6 10.3l-2 6.2H4.4L1.5 8zm14.8 0h2.4v8.5h-2.4V8zm3.2 0h2.4l1.6 3.8L25 8h2.4l-2.7 4.2 2.9 4.3h-2.5l-1.8-3.9-1.8 3.9h-2.4l2.9-4.3-2.9-4.2z" />
    </svg>
  );
}

// 18. HubSpot
function HubSpotLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.8 8.5c0-.8-.6-1.5-1.5-1.5-.4 0-.8.2-1.1.5l-2.8-1.7V4.5c.7-.3 1.2-1 1.2-1.8 0-1.1-.9-2-2-2s-2 .9-2 2c0 .8.5 1.5 1.2 1.8v1.3L9 7.5C8.7 7.2 8.3 7 7.9 7c-1.1 0-2 .9-2 2 0 .8.5 1.5 1.2 1.8v3.4c-.7.3-1.2 1-1.2 1.8 0 1.1.9 2 2 2 .8 0 1.5-.5 1.8-1.2h3.4c.3.7 1 1.2 1.8 1.2 1.1 0 2-.9 2-2 0-.8-.5-1.5-1.2-1.8v-3.4c.7-.3 1.2-1 1.2-1.8 0-.4-.1-.7-.3-1l2.8-1.7c.3.3.7.5 1.2.5.8 0 1.5-.7 1.5-1.5z" />
    </svg>
  );
}

// 19. Supabase
function SupabaseLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12.9 2.5L3.8 13.6c-.3.4 0 1 .5 1h7.8l-1 6.9c-.1.7.7 1.1 1.2.6l9.1-11.1c.3-.4 0-1-.5-1h-7.8l1-6.9c.1-.7-.7-1.1-1.2-.6z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

// 20. Tailwind CSS
function TailwindLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.6 3.2 3.3 6.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.5-3.2-3.3-6.1-3.3zM6 13c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.6 3.2 3.3 6.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.6-3.2-3.3-6.1-3.3z" />
    </svg>
  );
}

/* ==========================================================================
   Tool Items Database with Real Brand Icons & Tech Stacks
   ========================================================================== */

export interface StackItem {
  id: string;
  name: string;
  cat: "ai" | "frontend" | "cms" | "cloud";
  tag: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TOOLS_DATA: StackItem[] = [
  // --- Leading AI Tools ---
  {
    id: "cursor",
    name: "Cursor",
    cat: "ai",
    tag: "AI IDE",
    desc: "AI code editor, instant refactor & agent",
    icon: CursorLogo,
    color: "bg-slate-900 text-white border-slate-700",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    cat: "ai",
    tag: "Reasoning",
    desc: "Architecture reasoning & code audit",
    icon: ChatGptLogo,
    color: "bg-emerald-50 text-[#10A37F] border-emerald-200",
  },
  {
    id: "claude",
    name: "Claude 3.7",
    cat: "ai",
    tag: "Deep Logic",
    desc: "Complex logic, long-context system analysis",
    icon: ClaudeLogo,
    color: "bg-amber-50 text-[#CC785C] border-amber-200",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    cat: "ai",
    tag: "Pair Dev",
    desc: "Contextual IDE code completions",
    icon: CopilotLogo,
    color: "bg-slate-100 text-slate-800 border-slate-300",
  },
  {
    id: "gemini",
    name: "Gemini",
    cat: "ai",
    tag: "Multimodal",
    desc: "Multimodal vision & deep reasoning APIs",
    icon: GeminiLogo,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    cat: "ai",
    tag: "Research",
    desc: "Real-time web verification & API specs",
    icon: PerplexityLogo,
    color: "bg-cyan-50 text-[#22B8CD] border-cyan-200",
  },
  {
    id: "bolt",
    name: "Bolt.new",
    cat: "ai",
    tag: "Fullstack AI",
    desc: "Prompt-to-production browser sandbox",
    icon: BoltLogo,
    color: "bg-yellow-50 text-amber-600 border-amber-200",
  },
  {
    id: "lovable",
    name: "Lovable",
    cat: "ai",
    tag: "AI Builder",
    desc: "Rapid UI to React codebase conversion",
    icon: LovableLogo,
    color: "bg-rose-50 text-rose-500 border-rose-200",
  },
  {
    id: "vercel-ai",
    name: "Vercel AI",
    cat: "ai",
    tag: "AI SDK",
    desc: "Serverless model SDK & edge deployment",
    icon: VercelLogo,
    color: "bg-slate-900 text-white border-slate-800",
  },
  {
    id: "replit",
    name: "Replit Agent",
    cat: "ai",
    tag: "Autonomous",
    desc: "Autonomous scaffold & micro-apps",
    icon: ReplitLogo,
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
  {
    id: "figma-ai",
    name: "Figma AI",
    cat: "ai",
    tag: "UI Design",
    desc: "Wireframes, vector assets & layouts",
    icon: FigmaLogo,
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },

  // --- Core Tech Stack & Frameworks ---
  {
    id: "nextjs",
    name: "Next.js",
    cat: "frontend",
    tag: "Framework",
    desc: "Server Components, App Router & SSR",
    icon: NextJsLogo,
    color: "bg-slate-900 text-white border-slate-800",
  },
  {
    id: "react",
    name: "React",
    cat: "frontend",
    tag: "Frontend",
    desc: "Interactive, reactive UI architectures",
    icon: ReactLogo,
    color: "bg-sky-50 text-[#00D8FF] border-sky-200",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    cat: "frontend",
    tag: "Styling",
    desc: "Utility-first modern responsive CSS",
    icon: TailwindLogo,
    color: "bg-cyan-50 text-[#06B6D4] border-cyan-200",
  },

  // --- CMS & E-Commerce Platforms ---
  {
    id: "shopify",
    name: "Shopify",
    cat: "cms",
    tag: "E-Commerce",
    desc: "Custom Liquid themes & modern storefronts",
    icon: ShopifyLogo,
    color: "bg-emerald-50 text-[#5E8E3E] border-emerald-200",
  },
  {
    id: "wordpress",
    name: "WordPress",
    cat: "cms",
    tag: "CMS",
    desc: "ACF Pro, Gutenberg blocks & custom themes",
    icon: WordPressLogo,
    color: "bg-blue-50 text-[#21759B] border-blue-200",
  },
  {
    id: "webflow",
    name: "Webflow",
    cat: "cms",
    tag: "Visual CMS",
    desc: "Dynamic CMS collections & fluid interactions",
    icon: WebflowLogo,
    color: "bg-blue-50 text-[#146EF5] border-blue-200",
  },
  {
    id: "wix",
    name: "Wix Studio",
    cat: "cms",
    tag: "CMS Builder",
    desc: "Wix Studio layouts, Velo code & bookings",
    icon: WixLogo,
    color: "bg-slate-900 text-white border-slate-700",
  },
  {
    id: "hubspot",
    name: "HubSpot CMS",
    cat: "cms",
    tag: "Marketing CMS",
    desc: "Custom HubL modules & landing pages",
    icon: HubSpotLogo,
    color: "bg-orange-50 text-[#FF7A59] border-orange-200",
  },

  // --- Cloud & Database ---
  {
    id: "supabase",
    name: "Supabase",
    cat: "cloud",
    tag: "Backend & DB",
    desc: "PostgreSQL, Auth, Storage & Realtime",
    icon: SupabaseLogo,
    color: "bg-emerald-50 text-[#3ECF8E] border-emerald-200",
  },
];

interface WorkflowStep {
  num: string;
  title: string;
  tools: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    num: "1",
    title: "Plan & Research",
    tools: "Claude, Perplexity, Gemini",
    desc: "Deep research, system architecture design, data modeling and feasibility checks before touching code.",
    icon: Lightbulb,
  },
  {
    num: "2",
    title: "Write & Improve Code",
    tools: "Cursor, Copilot, Next.js, React",
    desc: "High-speed implementation, unit test generation, algorithmic debugging and automatic refactoring.",
    icon: Code2,
  },
  {
    num: "3",
    title: "Design & CMS Integration",
    tools: "Figma, Shopify, WordPress, Webflow",
    desc: "Converting mockups into pixel-accurate storefronts, reusable modules, and reactive Tailwind layouts.",
    icon: Palette,
  },
  {
    num: "4",
    title: "Build & Deploy",
    tools: "Vercel, Supabase, GitHub CI",
    desc: "Automated test suites, edge compute functions, preview branches and instant cloud production runs.",
    icon: Rocket,
  },
  {
    num: "5",
    title: "Automate & Optimize",
    tools: "SEO, Web Vitals, Custom Scripts",
    desc: "Self-generating documentation, PR summaries, performance monitoring, and ongoing speed tuning.",
    icon: TrendingUp,
  },
];

const CATEGORIES = [
  { id: "all", label: "All Stack (20)" },
  { id: "ai", label: "AI Tools (11)" },
  { id: "frontend", label: "React & Next.js" },
  { id: "cms", label: "CMS & Platforms (5)" },
  { id: "cloud", label: "Cloud & Supabase" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export function AiWorkflow() {
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");
  const [category, setCategory] = useState<CategoryId>("all");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);
  const [isPaused, setIsPaused] = useState(false);

  // Filter tools based on active category
  const filteredTools =
    category === "all"
      ? TOOLS_DATA
      : TOOLS_DATA.filter((t) => t.cat === category);

  // Divide tools into two rows for marquee
  const half = Math.ceil(filteredTools.length / 2);
  const listA = filteredTools.slice(0, half);
  const listB = filteredTools.slice(half);

  // Repeat for continuous seamless marquee animation
  const row1Items = [...listA, ...listA, ...listA, ...listA];
  const row2Items = [...listB, ...listB, ...listB, ...listB];

  // Auto-advance workflow steps smoothly
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="ai-workflow"
      className="relative py-20 sm:py-28 lg:py-32 bg-transparent border-t border-white/10 text-white overflow-hidden"
    >
      <div className="site-container relative z-10 max-w-6xl mx-auto space-y-6">
        {/* Top Hero Header */}
        <header className="bg-[#12131A] rounded-2xl p-5 md:p-7 shadow-lg border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left: Badge + Title + Subtitle */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Tools &amp; Full Tech Stack</span>
                <span className="inline-block w-1 h-1 rounded-full bg-amber-400 mx-1" />
                <span className="text-white/60 font-normal">Supercharged Productivity</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                I Use AI &amp; Modern Tech to Build{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                  Better, Faster, Smarter
                </span>
              </h2>
              <p className="mt-2 text-sm text-white/65 leading-relaxed max-w-xl">
                From Next.js, React, and Supabase to Shopify, WordPress, Webflow, and leading AI models — I combine human craft with cutting-edge tooling to ship production-ready web solutions at 10x speed.
              </p>
            </div>

            {/* Right: 4 Compact Quick Metric Badges */}
            <div className="grid grid-cols-2 gap-2.5 w-full md:w-auto shrink-0">
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/10 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Code Faster</p>
                  <p className="text-[11px] text-white/50">Save 40%+ time</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/10 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <CheckCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Better Code</p>
                  <p className="text-[11px] text-white/50">Clean &amp; optimized</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/10 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">All CMS &amp; Web</p>
                  <p className="text-[11px] text-white/50">Shopify · WP · Wix</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] rounded-xl border border-white/10 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Wand2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Creativity</p>
                  <p className="text-[11px] text-white/50">Rapid prototypes</p>
                </div>
              </div>
            </div>
          </div>
        </header>



        {/* Bottom Floating Bar */}
        <footer className="bg-[#12131A] border border-white/10 rounded-2xl px-5 py-4 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Full Stack &amp; CMS Developer
                </span>
                <span className="text-white/40 text-xs">• Production Ready</span>
              </div>
              <p className="text-sm font-semibold text-white/90">
                Next.js · React · Shopify · WordPress · AI Powered
              </p>
            </div>
          </div>

          {/* Center Tool Quick Stack Dots with Real Brand Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/[0.04] py-1.5 px-3 rounded-xl border border-white/10">
            <span className="text-[11px] text-white/40 mr-1 hidden sm:inline">Active Stack:</span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <ChatGptLogo className="w-3 h-3" />
              ChatGPT
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <ClaudeLogo className="w-3 h-3" />
              Claude
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-500/20 text-sky-300 border border-sky-500/30 flex items-center gap-1">
              <ReactLogo className="w-3 h-3" />
              Next.js / React
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <ShopifyLogo className="w-3 h-3" />
              Shopify
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
              <WordPressLogo className="w-3 h-3" />
              WordPress
            </span>
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <SupabaseLogo className="w-3 h-3" />
              Supabase
            </span>
          </div>

          {/* Right Action Button with Rolling Dual-Text Motion */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white text-xs font-semibold shadow-md shadow-orange-500/25 transition-all overflow-hidden hover:scale-[1.03] active:scale-95 shrink-0"
            >
              <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-5 select-none items-center justify-center">
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                  Let&apos;s Build Something Great
                </span>
                <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-bold">
                  Start Your Project
                </span>
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-200 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
