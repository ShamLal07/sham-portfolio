"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowUpRight, Check, Loader2, CheckCircle2 } from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  XTwitterIcon,
  DribbbleIcon,
} from "./SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

const STORAGE_KEY_SUBSCRIBED = "sham_newsletter_subscribed";
const STORAGE_KEY_DISMISSED = "sham_newsletter_dismissed";

export function SubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Close handler with persistence
  const handleClose = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY_DISMISSED, Date.now().toString());
    } catch {
      // ignore storage failure (e.g. private mode)
    }
    setIsOpen(false);
  }, []);

  // Timer: trigger after 3 seconds on first visit
  useEffect(() => {
    try {
      const alreadySubscribed = localStorage.getItem(STORAGE_KEY_SUBSCRIBED);
      const alreadyDismissed = localStorage.getItem(STORAGE_KEY_DISMISSED);

      if (!alreadySubscribed && !alreadyDismissed) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case localStorage is blocked
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      setError("Please agree to receive occasional updates.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, consent }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        try {
          localStorage.setItem(STORAGE_KEY_SUBSCRIBED, "true");
        } catch {
          // ignore
        }
        setTimeout(() => {
          setIsOpen(false);
        }, 2200);
      } else {
        setError(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setError("Network connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="subscribe-modal-title"
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-5 overflow-y-auto"
        >
          {/* Blurred Website Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-all"
            aria-hidden="true"
          />

          {/* Compact Modal Container with Orange Glowing Border & Center Align */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 340,
            }}
            className="relative w-full max-w-[430px] z-10 bg-[#080B11] border border-[#FF7A00]/40 rounded-[26px] p-5 sm:p-6 shadow-[0_0_50px_rgba(255,122,0,0.18),0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden text-center flex flex-col items-center"
          >
            {/* Top-Right Ambient Orange Glow */}
            <div
              className="absolute -top-14 -right-14 w-48 h-48 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Bottom-Left Ambient Orange Glow */}
            <div
              className="absolute -bottom-14 -left-14 w-48 h-48 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Subtle Decorative Grid Pattern in Top-Right */}
            <div
              className="absolute top-0 right-0 w-36 h-36 opacity-25 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 138, 0, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 138, 0, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                  maskImage:
                    "radial-gradient(circle at 80% 20%, black 25%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 80% 20%, black 25%, transparent 75%)",
                }}
              />
              <div className="absolute top-[36px] right-[56px] w-1.5 h-1.5 rounded-full bg-[#FFA040] shadow-[0_0_10px_#FF8A00] animate-pulse" />
            </div>

            {/* Close Button ('X') */}
            <button
              onClick={handleClose}
              type="button"
              aria-label="Close subscription popup"
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-white p-1.5 rounded-full hover:bg-white/5 active:scale-95 transition-all z-20 cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[2.2]" />
            </button>

            {/* Centered Top Tag: WELCOME — FIRST VISIT */}
            <div className="relative z-10 mb-3.5 flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A120B]/90 border border-[#FF8A00]/40 shadow-[0_0_10px_rgba(255,138,0,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shadow-[0_0_6px_#FF8A00] animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFA040] uppercase">
                  WELCOME — FIRST VISIT
                </span>
              </div>
            </div>

            {/* Centered Headline */}
            <h2
              id="subscribe-modal-title"
              className="relative z-10 text-2xl sm:text-[28px] font-extrabold tracking-tight leading-[1.12] mb-2 text-center"
            >
              <span className="text-white">Let&apos;s stay </span>
              <span className="text-[#FF7A00]">connected.</span>
            </h2>

            {/* Centered Subheading */}
            <p className="relative z-10 text-[#94A3B8] text-xs sm:text-[13px] leading-relaxed mb-4 max-w-[340px] text-center font-normal">
              Enjoying my work? Subscribe for occasional project updates, new builds,
              and design insights.
            </p>

            {/* Success State Notification */}
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full py-5 px-4 rounded-2xl bg-[#0D1714] border border-emerald-500/40 text-center flex flex-col items-center gap-1.5 mb-4 shadow-inner"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="text-white font-bold text-base">You&apos;re connected!</h3>
                <p className="text-[11px] text-slate-300">
                  Thank you for subscribing.
                </p>
              </motion.div>
            ) : (
              /* Email Input & Banner-Style Subscribe Button */
              <form onSubmit={handleSubmit} className="relative z-10 w-full mb-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#0C101A] border border-[#1E293B] focus-within:border-[#FF7A00]/70 rounded-2xl sm:rounded-full p-1.5 gap-2 shadow-inner transition-all duration-200">
                  <div className="flex items-center flex-1 px-2.5">
                    <Mail className="w-4 h-4 text-[#64748B] flex-shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                      className="w-full bg-transparent text-white placeholder-[#64748B] text-xs sm:text-[13.5px] px-2.5 py-1.5 outline-none flex-1 font-medium disabled:opacity-50"
                      required
                    />
                  </div>

                  {/* Banner-Style Subscribe Button with Dual Motion Arrow Vector */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white font-bold text-xs sm:text-[13px] shadow-[0_4px_16px_rgba(245,120,30,0.4)] hover:shadow-[0_8px_24px_rgba(245,120,30,0.65)] hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span className="tracking-wide">Subscribe</span>
                        {/* Signature Banner Section Circular Arrow Chip */}
                        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center relative overflow-hidden shrink-0 border border-white/30 shadow-inner">
                          <ArrowUpRight className="w-3.5 h-3.5 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" />
                          <ArrowUpRight className="w-3.5 h-3.5 text-amber-200 absolute transform -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
                        </div>
                      </>
                    )}
                  </button>
                </div>

                {/* Validation Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs text-rose-400 font-medium px-2 flex items-center justify-center gap-1.5 text-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </form>
            )}

            {/* Centered Divider: OR FOLLOW MY JOURNEY */}
            <div className="relative z-10 w-full flex items-center justify-center my-3.5">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#1E293B]" />
              </div>
              <span className="relative px-3 bg-[#080B11] text-[9.5px] font-bold tracking-[0.18em] text-[#64748B] uppercase select-none">
                OR FOLLOW MY JOURNEY
              </span>
            </div>

            {/* Icon-Only Social Media Buttons (Centered & Compact) */}
            <div className="relative z-10 flex items-center justify-center gap-3 mb-4 w-full">
              {/* GitHub */}
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-[#0D121D]/90 border border-[#1E293B] hover:border-[#FF7A00]/60 hover:bg-[#141C2B] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group shadow-sm cursor-pointer"
              >
                <GitHubIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-[#0D121D]/90 border border-[#1E293B] hover:border-[#FF7A00]/60 hover:bg-[#141C2B] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group shadow-sm cursor-pointer"
              >
                <LinkedInIcon className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
              </a>

              {/* X / Twitter */}
              <a
                href={SITE_CONFIG.twitter || "https://x.com/ShamLal07"}
                target="_blank"
                rel="noopener noreferrer"
                title="X / Twitter"
                aria-label="X / Twitter"
                className="w-11 h-11 rounded-xl bg-[#0D121D]/90 border border-[#1E293B] hover:border-[#FF7A00]/60 hover:bg-[#141C2B] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group shadow-sm cursor-pointer"
              >
                <XTwitterIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </a>

              {/* Dribbble */}
              <a
                href={SITE_CONFIG.dribbble || "https://dribbble.com"}
                target="_blank"
                rel="noopener noreferrer"
                title="Dribbble"
                aria-label="Dribbble"
                className="w-11 h-11 rounded-xl bg-[#0D121D]/90 border border-[#1E293B] hover:border-[#FF7A00]/60 hover:bg-[#141C2B] hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group shadow-sm cursor-pointer"
              >
                <DribbbleIcon className="w-5 h-5 text-[#EA4C89] group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Centered Newsletter Consent Checkbox */}
            <div
              onClick={() => setConsent(!consent)}
              className="relative z-10 flex items-center justify-center gap-2 cursor-pointer select-none mb-3 group"
            >
              <div
                className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center transition-all ${
                  consent
                    ? "bg-[#FF8A00] border border-[#FF8A00] text-[#0F1117] shadow-[0_0_8px_rgba(255,138,0,0.4)]"
                    : "bg-[#0D121D] border border-[#334155] group-hover:border-[#64748B]"
                }`}
              >
                {consent && <Check className="w-3 h-3 stroke-[3] text-[#0F1117]" />}
              </div>
              <p className="text-[11.5px] text-[#94A3B8] group-hover:text-slate-300 leading-tight font-normal text-center">
                I&apos;m happy to receive occasional updates. Unsubscribe anytime.
              </p>
            </div>

            {/* Centered Footer Micro-copy */}
            <div className="relative z-10 text-center">
              <span className="text-[10px] sm:text-[10.5px] text-[#64748B] font-medium tracking-wide">
                No spam. Just things worth sharing.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
