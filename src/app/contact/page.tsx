"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, CheckCircle2, Send, Clock, Globe, Loader2, ArrowUpRight, Sparkles, ChevronDown } from "lucide-react";
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Design",
    timeline: "1-2 months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setErrorMessage] = useState("");
  const [needsActivation, setNeedsActivation] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Real email submission via FormSubmit to thakur@shamdev.in
      const response = await fetch(`https://formsubmit.co/ajax/${SITE_CONFIG.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Mobile Number": formData.phone,
          Service: formData.service,
          Timeline: formData.timeline,
          Message: formData.message,
          _subject: `New Project Inquiry from ${formData.name} - ${formData.phone} (${formData.service})`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      // Check if FormSubmit requires 1-time email activation
      if (
        result.message &&
        (result.message.toLowerCase().includes("activation") ||
          result.message.toLowerCase().includes("activate"))
      ) {
        setNeedsActivation(true);
        setSubmitted(true);
      } else if (response.ok || result.success === "true" || result.success === true) {
        setNeedsActivation(false);
        setSubmitted(true);
      } else {
        // Fallback: Trigger direct Gmail web compose
        const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE_CONFIG.email}&su=${encodeURIComponent(
          `Project Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.phone}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
        )}`;
        window.open(directGmailUrl, "_blank");
        setSubmitted(true);
      }
    } catch {
      // Fallback on network/adblocker block: Open Gmail Web compose
      const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SITE_CONFIG.email}&su=${encodeURIComponent(
        `Project Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.phone}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
      )}`;
      window.open(directGmailUrl, "_blank");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36 bg-transparent text-white min-h-screen relative overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>CONTACT &amp; INQUIRIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
            Let&apos;s build something that works.
          </h1>
          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
            Whether you need a new website, redesign, e-commerce store or frontend
            implementation, I&apos;m open to discussing the project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Form matching reference image 100% */}
          <div className="lg:col-span-7 bg-[#0E1017] border border-white/10 rounded-[28px] p-7 sm:p-10 shadow-2xl">
            {submitted ? (
              needsActivation ? (
                /* One-time FormSubmit Activation Screen */
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-3 py-1 rounded-full mb-3 border border-amber-500/30">
                    One-Time Activation Required
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Check Your Gmail Inbox!
                  </h3>
                  <p className="text-base text-white/70 max-w-[46ch] mb-4 leading-relaxed">
                    FormSubmit has sent an activation email to <strong className="text-white">{SITE_CONFIG.email}</strong>.
                  </p>
                  <div className="bg-[#0A0B0E] border border-white/10 rounded-2xl p-5 text-left text-sm text-white/70 max-w-[46ch] mb-6 space-y-2.5">
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>📌 How to activate:</span>
                    </div>
                    <div>1. Open your Gmail (<strong className="text-white">{SITE_CONFIG.email}</strong>).</div>
                    <div>2. Check your <strong>Inbox</strong> or <strong>Spam / Junk</strong> folder.</div>
                    <div>3. Look for an email from <strong>&quot;FormSubmit&quot;</strong> and click <strong>&quot;Activate Form&quot;</strong>.</div>
                    <div className="text-xs text-white/50 pt-2 border-t border-white/10">
                      Once activated, all website inquiries will land directly in your inbox automatically!
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-md inline-flex items-center gap-2"
                    >
                      <span>Open Gmail Inbox</span>
                      <ArrowUpRight className="w-4 h-4 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-sm transition-colors"
                    >
                      Back to form
                    </button>
                  </div>
                </div>
              ) : (
                /* Regular Success Screen: Ultra-Premium Project Confirmation Receipt */
                <div className="py-6 sm:py-8 flex flex-col items-center text-center animate-fade-in">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center animate-pulse" />
                    <div className="absolute inset-2 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-9 h-9 text-white" />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-400 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>INQUIRY DELIVERED DIRECTLY TO INBOX</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    Inquiry Sent Successfully!
                  </h3>

                  <p className="text-sm sm:text-base text-white/70 max-w-[48ch] mb-8 leading-relaxed">
                    Thank you, <strong className="text-white font-bold">{formData.name || "there"}</strong>! Your project details have been safely received at <strong className="text-amber-400 font-bold">{SITE_CONFIG.email}</strong>.
                  </p>

                  {/* Submission summary receipt */}
                  <div className="w-full bg-[#090A0F] border border-white/10 rounded-2xl p-5 sm:p-7 text-left mb-8 shadow-inner space-y-4">
                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs">
                      <div className="font-mono font-bold text-white/50 uppercase tracking-wider flex items-center gap-2">
                        <span>Project Inquiry Summary</span>
                      </div>
                      <span className="font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-0.5 rounded-full border border-emerald-500/30 text-[11px]">
                        Active Review
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-white/50 font-semibold mb-0.5">Client Name</div>
                        <div className="font-bold text-white text-sm">{formData.name || "Client"}</div>
                      </div>

                      <div>
                        <div className="text-white/50 font-semibold mb-0.5">Email Address</div>
                        <div className="font-bold text-white text-sm break-all">{formData.email || "—"}</div>
                      </div>

                      <div>
                        <div className="text-white/50 font-semibold mb-0.5">Mobile Number</div>
                        <div className="font-bold text-white text-sm">{formData.phone || "—"}</div>
                      </div>

                      <div>
                        <div className="text-white/50 font-semibold mb-0.5">Primary Service</div>
                        <div className="font-bold text-amber-400 text-sm">{formData.service}</div>
                      </div>

                      <div className="sm:col-span-2">
                        <div className="text-white/50 font-semibold mb-0.5">Target Timeline</div>
                        <div className="font-bold text-white text-sm">{formData.timeline}</div>
                      </div>

                      {formData.message && (
                        <div className="sm:col-span-2 pt-2 border-t border-white/10">
                          <div className="text-white/50 font-semibold mb-1">Project Details</div>
                          <div className="text-xs text-white/75 bg-white/[0.04] p-3 rounded-xl border border-white/10 leading-relaxed italic line-clamp-3">
                            &ldquo;{formData.message}&rdquo;
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3-Step Next Steps */}
                  <div className="w-full text-left mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Next Steps</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-[#12141D] p-3.5 rounded-xl border border-white/10">
                        <div className="text-[11px] font-mono font-bold text-amber-400 mb-1">01 · Review</div>
                        <div className="text-xs font-bold text-white mb-0.5">Scope &amp; Fit</div>
                        <div className="text-[11px] text-white/60 leading-normal">Evaluating requirements &amp; tech stack.</div>
                      </div>

                      <div className="bg-[#12141D] p-3.5 rounded-xl border border-white/10">
                        <div className="text-[11px] font-mono font-bold text-emerald-400 mb-1">02 · Connect</div>
                        <div className="text-xs font-bold text-white mb-0.5">&lt; 24h Response</div>
                        <div className="text-[11px] text-white/60 leading-normal">Direct reply via email or WhatsApp.</div>
                      </div>

                      <div className="bg-[#12141D] p-3.5 rounded-xl border border-white/10">
                        <div className="text-[11px] font-mono font-bold text-purple-400 mb-1">03 · Roadmap</div>
                        <div className="text-xs font-bold text-white mb-0.5">Clear Proposal</div>
                        <div className="text-[11px] text-white/60 leading-normal">Milestones, timeline &amp; estimate.</div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                    <a
                      href={`https://wa.me/917876525326?text=${encodeURIComponent(
                        `Hi Sham, I just submitted an inquiry on your portfolio for ${formData.service}. My name is ${formData.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Instant Chat on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm transition-all"
                    >
                      Browse Selected Work
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          service: "Website Design",
                          timeline: "1-2 months",
                          message: "",
                        });
                      }}
                      className="text-xs font-bold text-white/50 hover:text-white py-2 px-3 transition-colors cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              )
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field: Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-5 py-3.5 rounded-2xl border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400 focus:bg-[#181B26] transition-all bg-[#141724]"
                  />
                </div>

                {/* Fields: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-5 py-3.5 rounded-2xl border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400 focus:bg-[#181B26] transition-all bg-[#141724]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2 flex items-center justify-between"
                    >
                      <span>Mobile Number *</span>
                      <span className="text-[11px] text-amber-400 font-normal lowercase">required</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-5 py-3.5 rounded-2xl border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400 focus:bg-[#181B26] transition-all bg-[#141724]"
                    />
                  </div>
                </div>

                {/* Fields: Service & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2"
                    >
                      Primary Service
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-5 py-3.5 pr-10 rounded-2xl border border-white/10 text-sm text-white bg-[#141724] focus:outline-none focus:border-amber-400 focus:bg-[#181B26] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Website Design" className="bg-[#141724] text-white">Website Design</option>
                        <option value="Frontend Development" className="bg-[#141724] text-white">Frontend Development</option>
                        <option value="WordPress Development" className="bg-[#141724] text-white">WordPress Development</option>
                        <option value="Shopify Development" className="bg-[#141724] text-white">Shopify Storefront</option>
                        <option value="CMS (Webflow / HubSpot / Wix)" className="bg-[#141724] text-white">CMS Development</option>
                        <option value="Website Improvements" className="bg-[#141724] text-white">Website Improvements</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-white/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2"
                    >
                      Timeline Target
                    </label>
                    <div className="relative">
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-5 py-3.5 pr-10 rounded-2xl border border-white/10 text-sm text-white bg-[#141724] focus:outline-none focus:border-amber-400 focus:bg-[#181B26] transition-all appearance-none cursor-pointer"
                      >
                        <option value="As soon as possible" className="bg-[#141724] text-white">As soon as possible</option>
                        <option value="Within 2-4 weeks" className="bg-[#141724] text-white">Within 2–4 weeks</option>
                        <option value="1-2 months" className="bg-[#141724] text-white">1–2 months</option>
                        <option value="Flexible / Ongoing" className="bg-[#141724] text-white">Flexible / Ongoing</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-white/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Field: Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-white/80 uppercase tracking-wider mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me briefly about what you want to design, build, or fix..."
                    className="w-full px-5 py-4 rounded-2xl border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400 focus:bg-[#181B26] transition-all bg-[#141724] resize-none"
                  />
                </div>

                {/* Submit Button matching reference image 100% */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative inline-flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-to-r from-[#F5781E] via-[#F59E0B] to-[#F5781E] text-white font-bold text-base shadow-[0_4px_25px_rgba(245,120,30,0.45)] hover:shadow-[0_6px_30px_rgba(245,120,30,0.65)] hover:scale-[1.01] active:scale-95 transition-all duration-300 overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span>Sending Inquiry to Inbox...</span>
                    </>
                  ) : (
                    <>
                      <span className="inline-grid grid-cols-1 grid-rows-1 overflow-hidden h-6 select-none items-center justify-center">
                        <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
                          Send Inquiry Directly
                        </span>
                        <span className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap leading-none transition-transform duration-300 ease-out translate-y-[140%] group-hover:translate-y-0 text-amber-100 font-extrabold">
                          Deliver to Sham&apos;s Inbox →
                        </span>
                      </span>
                      <Send className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Info Cards matching reference image 100% */}
          <div className="lg:col-span-5 space-y-7">
            {/* Direct Contact Card */}
            <div className="bg-[#0E1017] border border-white/10 rounded-[28px] p-7 sm:p-9 shadow-xl space-y-6 text-white">
              <h3 className="text-xl font-bold text-white tracking-tight pb-2">
                Direct Contact
              </h3>

              {/* Email item */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 font-semibold mb-0.5">Email</div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 hover:bg-amber-500 hover:text-white border border-white/10 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold mb-0.5">Phone</div>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp item */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold mb-0.5">WhatsApp</div>
                  <a
                    href="https://wa.me/917876525326?text=Hi%20Sham,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm sm:text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>+91-7876525326</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold mb-0.5">Location</div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    India · Working remotely worldwide
                  </div>
                </div>
              </div>

              {/* Availability item */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50 font-semibold mb-0.5">Availability</div>
                  <div className="text-sm font-semibold text-emerald-400">
                    Open for select freelance projects
                  </div>
                </div>
              </div>

              {/* Profiles bottom bar */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-5 text-sm font-semibold text-white/70">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://wa.me/917876525326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Collaboration Notes Card */}
            <div className="bg-[#0E1017] border border-white/10 rounded-[28px] p-7 sm:p-8 text-xs sm:text-sm text-white/60 space-y-3.5 shadow-xl">
              <div className="font-bold text-white text-base mb-1">
                Collaboration Notes
              </div>
              <p className="leading-relaxed">
                <strong className="text-white">Remote-First:</strong> Comfortable communicating via email, WhatsApp, Google Meet, Slack, and Figma comments.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">No Hand-off Misunderstandings:</strong> Because I handle both design and frontend development, what is agreed upon in wireframes matches what goes live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
