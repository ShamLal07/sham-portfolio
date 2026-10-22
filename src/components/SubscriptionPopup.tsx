"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowRight, Check, Loader2, CheckCircle2 } from "lucide-react";
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

    // Validation
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
      setError("Please check the consent box to receive updates.");
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
        }, 2400);
      } else {
        setError(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setError("Network connection error. Please try again later.");
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
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Blurred Website Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-all"
            aria-hidden="true"
          />

          {/* Modal Container with Orange Glowing Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 320,
            }}
            className="relative w-full max-w-[500px] z-10 bg-[#080B11] border border-[#FF7A00]/40 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-[0_0_60px_rgba(255,122,0,0.18),0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Top-Right Ambient Orange Glow */}
            <div
              className="absolute -top-16 -right-16 w-60 h-60 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Bottom-Left Ambient Orange Glow */}
            <div
              className="absolute -bottom-16 -left-16 w-60 h-60 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Subtle Decorative Grid Pattern in Top-Right (matching screenshot) */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-30 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(255, 138, 0, 0.18) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 138, 0, 0.18) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                  maskImage:
                    "radial-gradient(circle at 80% 20%, black 25%, transparent 75%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 80% 20%, black 25%, transparent 75%)",
                }}
              />
              {/* Glowing Coordinate Node Dot */}
              <div className="absolute top-[48px] right-[72px] w-2 h-2 rounded-full bg-[#FFA040] shadow-[0_0_12px_#FF8A00] animate-pulse" />
            </div>

            {/* Close Button ('X') */}
            <button
              onClick={handleClose}
              type="button"
              aria-label="Close subscription popup"
              className="absolute top-5 right-5 sm:top-6 sm:right-6 text-[#94A3B8] hover:text-white p-2 rounded-full hover:bg-white/5 active:scale-95 transition-all z-20 cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Top Tag: WELCOME — FIRST VISIT */}
            <div className="relative z-10 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A120B]/90 border border-[#FF8A00]/40 shadow-[0_0_12px_rgba(255,138,0,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] shadow-[0_0_8px_#FF8A00] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#FFA040] uppercase">
                  WELCOME — FIRST VISIT
                </span>
              </div>
            </div>

            {/* Headline matching screenshot layout exactly */}
            <h2
              id="subscribe-modal-title"
              className="relative z-10 text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight leading-[1.08] mb-3"
            >
              <span className="text-white block">Let&apos;s stay</span>
              <span className="text-[#FF7A00] block">connected.</span>
            </h2>

            {/* Subheading */}
            <p className="relative z-10 text-[#94A3B8] text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
              Enjoying my work? Subscribe for occasional project updates, new builds,
              and design insights.
            </p>

            {/* Success State Notification */}
            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 py-6 px-4 rounded-2xl bg-[#0D1714] border border-emerald-500/40 text-center flex flex-col items-center gap-2 mb-6 shadow-inner"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-[0_0_16px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h3 className="text-white font-bold text-lg">You&apos;re connected!</h3>
                <p className="text-xs text-slate-300 max-w-xs">
                  Thank you for subscribing. You will receive occasional updates directly in your inbox.
                </p>
              </motion.div>
            ) : (
              /* Email Input & Subscribe Form */
              <form onSubmit={handleSubmit} className="relative z-10 mb-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-[#0C101A] border border-[#1E293B] focus-within:border-[#FF7A00]/70 rounded-2xl p-1.5 sm:p-2 gap-2 shadow-inner transition-all duration-200">
                  <div className="flex items-center flex-1 px-2.5 sm:px-2">
                    <Mail className="w-5 h-5 text-[#64748B] flex-shrink-0" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                      className="w-full bg-transparent text-white placeholder-[#64748B] text-sm sm:text-[15px] px-3 py-2 outline-none flex-1 font-medium disabled:opacity-50"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFA014] via-[#FF8000] to-[#FF6A00] hover:brightness-110 active:scale-[0.98] text-[#0F1117] font-extrabold text-sm tracking-wide shadow-[0_0_20px_rgba(255,122,0,0.35)] flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0F1117]" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4 text-[#0F1117] stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>

                {/* Validation Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2.5 text-xs text-rose-400 font-medium px-2 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </form>
            )}

            {/* Divider: OR FOLLOW MY JOURNEY */}
            <div className="relative z-10 flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#1E293B]" />
              </div>
              <span className="relative px-3.5 bg-[#080B11] text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#64748B] uppercase select-none">
                OR FOLLOW MY JOURNEY
              </span>
            </div>

            {/* 4 Social Media Cards Grid */}
            <div className="relative z-10 grid grid-cols-4 gap-2.5 sm:gap-3 mb-6">
              {/* GitHub */}
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 py-3 px-1 rounded-2xl bg-[#0D121D]/80 border border-[#1E293B] hover:border-[#FF7A00]/50 hover:bg-[#121927] hover:scale-[1.03] transition-all duration-200 shadow-sm group text-center"
              >
                <GitHubIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#CBD5E1] group-hover:text-white transition-colors truncate w-full px-1">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 py-3 px-1 rounded-2xl bg-[#0D121D]/80 border border-[#1E293B] hover:border-[#FF7A00]/50 hover:bg-[#121927] hover:scale-[1.03] transition-all duration-200 shadow-sm group text-center"
              >
                <LinkedInIcon className="w-6 h-6 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#CBD5E1] group-hover:text-white transition-colors truncate w-full px-1">
                  LinkedIn
                </span>
              </a>

              {/* X / Twitter */}
              <a
                href={SITE_CONFIG.twitter || "https://x.com/ShamLal07"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 py-3 px-1 rounded-2xl bg-[#0D121D]/80 border border-[#1E293B] hover:border-[#FF7A00]/50 hover:bg-[#121927] hover:scale-[1.03] transition-all duration-200 shadow-sm group text-center"
              >
                <XTwitterIcon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#CBD5E1] group-hover:text-white transition-colors truncate w-full px-1">
                  X / Twitter
                </span>
              </a>

              {/* Dribbble */}
              <a
                href={SITE_CONFIG.dribbble || "https://dribbble.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 py-3 px-1 rounded-2xl bg-[#0D121D]/80 border border-[#1E293B] hover:border-[#FF7A00]/50 hover:bg-[#121927] hover:scale-[1.03] transition-all duration-200 shadow-sm group text-center"
              >
                <DribbbleIcon className="w-6 h-6 text-[#EA4C89] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#CBD5E1] group-hover:text-white transition-colors truncate w-full px-1">
                  Dribbble
                </span>
              </a>
            </div>

            {/* Newsletter Consent Checkbox */}
            <div
              onClick={() => setConsent(!consent)}
              className="relative z-10 flex items-center gap-3 cursor-pointer select-none mb-4 group"
            >
              <div
                className={`w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center transition-all ${
                  consent
                    ? "bg-[#FF8A00] border border-[#FF8A00] text-[#0F1117] shadow-[0_0_8px_rgba(255,138,0,0.4)]"
                    : "bg-[#0D121D] border border-[#334155] group-hover:border-[#64748B]"
                }`}
              >
                {consent && <Check className="w-3.5 h-3.5 stroke-[3] text-[#0F1117]" />}
              </div>
              <p className="text-xs sm:text-[13px] text-[#94A3B8] group-hover:text-slate-300 leading-tight font-normal">
                I&apos;m happy to receive occasional updates. Unsubscribe anytime.
              </p>
            </div>

            {/* Footer Micro-copy: "No spam. Just things worth sharing." */}
            <div className="relative z-10 text-center pt-2">
              <span className="text-[11px] sm:text-xs text-[#64748B] font-medium tracking-wide">
                No spam. Just things worth sharing.
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
