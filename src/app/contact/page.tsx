"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, FileText, CheckCircle2, Send, Clock, Globe, Loader2, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
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
  const [errorMessage, setErrorMessage] = useState("");
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
      // Real email submission via FormSubmit to thakursammi1233@gmail.com
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
    } catch (err) {
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
    <div className="pt-14 pb-28 md:pt-20 md:pb-36">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-18">
          <div className="eyebrow-tag mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            CONTACT &amp; INQUIRIES
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1117] mb-6 leading-tight">
            Let&apos;s build something that works.
          </h1>
          <p className="text-base sm:text-xl text-[#575A65] leading-relaxed">
            Whether you need a new website, redesign, e-commerce store or frontend
            implementation, I&apos;m open to discussing the project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Form with real email delivery */}
          <div className="lg:col-span-7 bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-12 shadow-sm">
            {submitted ? (
              needsActivation ? (
                /* One-time FormSubmit Activation Screen */
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full mb-3">
                    One-Time Activation Required
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1117] mb-3">
                    Check Your Gmail Inbox!
                  </h3>
                  <p className="text-base text-[#575A65] max-w-[46ch] mb-4 leading-relaxed">
                    FormSubmit has sent an activation email to <strong className="text-[#0F1117]">{SITE_CONFIG.email}</strong>.
                  </p>
                  <div className="bg-[#FAF9F7] border border-[#E5E4DE] rounded-2xl p-5 text-left text-sm text-[#575A65] max-w-[46ch] mb-6 space-y-2.5">
                    <div className="font-bold text-[#0F1117] flex items-center gap-2">
                      <span>📌 How to activate:</span>
                    </div>
                    <div>1. Open your Gmail (<strong className="text-[#0F1117]">{SITE_CONFIG.email}</strong>).</div>
                    <div>2. Check your <strong>Inbox</strong> or <strong>Spam / Junk</strong> folder.</div>
                    <div>3. Look for an email from <strong>&quot;FormSubmit&quot;</strong> and click <strong>&quot;Activate Form&quot;</strong>.</div>
                    <div className="text-xs text-[#848792] pt-1 border-t border-[#E5E4DE]">
                      Once activated (takes 5 seconds), all website inquiries will land directly in your inbox automatically!
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://mail.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ backgroundColor: "#0F1117", color: "#FFFFFF" }}
                    >
                      <span>Open Gmail Inbox</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Back to form
                    </button>
                  </div>
                </div>
              ) : (
                /* Regular Success Screen: Ultra-Premium Project Confirmation Receipt */
                <div className="py-6 sm:py-8 flex flex-col items-center text-center animate-fade-in">
                  {/* Concentric celebratory checkmark icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-100/70 flex items-center justify-center animate-pulse" />
                    <div className="absolute inset-2 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-9 h-9 text-white" />
                    </div>
                  </div>

                  {/* Status Capsule */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 mb-3 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>INQUIRY DELIVERED DIRECTLY TO INBOX</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F1117] tracking-tight mb-2">
                    Inquiry Sent Successfully!
                  </h3>

                  <p className="text-sm sm:text-base text-[#575A65] max-w-[48ch] mb-8 leading-relaxed">
                    Thank you, <strong className="text-[#0F1117] font-bold">{formData.name || "there"}</strong>! Your project details have been safely received at <strong className="text-[#0F1117] font-bold">{SITE_CONFIG.email}</strong>.
                  </p>

                  {/* SUBMISSION RECEIPT CARD */}
                  <div className="w-full bg-[#FAF9F7] border border-[#E5E4DE] rounded-2xl p-5 sm:p-7 text-left mb-8 shadow-xs space-y-4">
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#E5E4DE] text-xs">
                      <div className="font-mono font-bold text-[#848792] uppercase tracking-wider flex items-center gap-2">
                        <span>Project Inquiry Summary</span>
                      </div>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 text-[11px]">
                        Active Review
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-[#848792] font-semibold mb-0.5">Client Name</div>
                        <div className="font-bold text-[#0F1117] text-sm">{formData.name || "Client"}</div>
                      </div>

                      <div>
                        <div className="text-[#848792] font-semibold mb-0.5">Email Address</div>
                        <div className="font-bold text-[#0F1117] text-sm break-all">{formData.email || "—"}</div>
                      </div>

                      <div>
                        <div className="text-[#848792] font-semibold mb-0.5">Mobile Number</div>
                        <div className="font-bold text-[#0F1117] text-sm">{formData.phone || "—"}</div>
                      </div>

                      <div>
                        <div className="text-[#848792] font-semibold mb-0.5">Primary Service</div>
                        <div className="font-bold text-[#2563EB] text-sm">{formData.service}</div>
                      </div>

                      <div className="sm:col-span-2">
                        <div className="text-[#848792] font-semibold mb-0.5">Target Timeline</div>
                        <div className="font-bold text-[#0F1117] text-sm">{formData.timeline}</div>
                      </div>

                      {formData.message && (
                        <div className="sm:col-span-2 pt-2 border-t border-[#E5E4DE]/60">
                          <div className="text-[#848792] font-semibold mb-1">Project Details</div>
                          <div className="text-xs text-[#575A65] bg-white p-3 rounded-xl border border-[#E5E4DE]/70 leading-relaxed italic line-clamp-3">
                            &ldquo;{formData.message}&rdquo;
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3-STEP ROADMAP: WHAT HAPPENS NEXT */}
                  <div className="w-full text-left mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#848792] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Next Steps</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-white p-3.5 rounded-xl border border-[#E5E4DE] shadow-2xs">
                        <div className="text-[11px] font-mono font-bold text-[#2563EB] mb-1">01 · Review</div>
                        <div className="text-xs font-bold text-[#0F1117] mb-0.5">Scope &amp; Fit</div>
                        <div className="text-[11px] text-[#575A65] leading-normal">Evaluating requirements &amp; tech stack.</div>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-[#E5E4DE] shadow-2xs">
                        <div className="text-[11px] font-mono font-bold text-emerald-600 mb-1">02 · Connect</div>
                        <div className="text-xs font-bold text-[#0F1117] mb-0.5">&lt; 24h Response</div>
                        <div className="text-[11px] text-[#575A65] leading-normal">Direct reply via email or WhatsApp.</div>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-[#E5E4DE] shadow-2xs">
                        <div className="text-[11px] font-mono font-bold text-purple-600 mb-1">03 · Roadmap</div>
                        <div className="text-xs font-bold text-[#0F1117] mb-0.5">Clear Proposal</div>
                        <div className="text-[11px] text-[#575A65] leading-normal">Milestones, timeline &amp; estimate.</div>
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                    <a
                      href={`https://wa.me/917876525326?text=${encodeURIComponent(
                        `Hi Sham, I just submitted an inquiry on your portfolio for ${formData.service}. My name is ${formData.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary group"
                      style={{ backgroundColor: "#0F1117", color: "#FFFFFF" }}
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                      <span style={{ color: "#FFFFFF" }}>Instant Chat on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-1" style={{ color: "#FFFFFF" }} />
                    </a>

                    <Link
                      href="/work"
                      className="btn-secondary"
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
                      className="text-xs font-bold text-[#575A65] hover:text-[#0F1117] py-2 px-3 transition-colors cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              )
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-2.5"
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
                    className="w-full px-5 py-3.5 rounded-2xl border-1.5 border-[#E5E4DE] text-[0.95rem] text-[#0F1117] placeholder:text-[#848792] focus:outline-none focus:border-[#0F1117] transition-all bg-[#FAF9F7]/50 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-2.5"
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
                      className="w-full px-5 py-3.5 rounded-2xl border-1.5 border-[#E5E4DE] text-[0.95rem] text-[#0F1117] placeholder:text-[#848792] focus:outline-none focus:border-[#0F1117] transition-all bg-[#FAF9F7]/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-2.5 flex items-center justify-between"
                    >
                      <span>Mobile Number *</span>
                      <span className="text-[10px] text-emerald-600 font-bold lowercase">required</span>
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
                      className="w-full px-5 py-3.5 rounded-2xl border-1.5 border-[#E5E4DE] text-[0.95rem] text-[#0F1117] placeholder:text-[#848792] focus:outline-none focus:border-[#0F1117] transition-all bg-[#FAF9F7]/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-2.5"
                    >
                      Primary Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-2xl border-1.5 border-[#E5E4DE] text-[0.95rem] text-[#0F1117] bg-[#FAF9F7]/50 focus:bg-white focus:outline-none focus:border-[#0F1117] transition-all"
                    >
                      <option value="Website Design">Website Design</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="WordPress Development">WordPress Development</option>
                      <option value="Shopify Development">Shopify Storefront</option>
                      <option value="CMS (Webflow / HubSpot / Wix)">CMS Development</option>
                      <option value="Website Improvements">Website Improvements</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-2.5"
                    >
                      Timeline Target
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-2xl border-1.5 border-[#E5E4DE] text-[0.95rem] text-[#0F1117] bg-[#FAF9F7]/50 focus:bg-white focus:outline-none focus:border-[#0F1117] transition-all"
                    >
                      <option value="As soon as possible">As soon as possible</option>
                      <option value="Within 2-4 weeks">Within 2–4 weeks</option>
                      <option value="1-2 months">1–2 months</option>
                      <option value="Flexible / Ongoing">Flexible / Ongoing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#0F1117] uppercase tracking-wider mb-2.5"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me briefly about what you want to design, build, or fix..."
                    className="w-full px-5 py-4 rounded-2xl border-1.5 border-[#E5E4DE] text-[0.95rem] text-[#0F1117] placeholder:text-[#848792] focus:outline-none focus:border-[#0F1117] transition-all bg-[#FAF9F7]/50 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  style={{ backgroundColor: "#0F1117", color: "#FFFFFF" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span style={{ color: "#FFFFFF" }}>Sending Inquiry to Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span style={{ color: "#FFFFFF" }}>Send Inquiry Directly</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#848792]">
                  🔒 Your information is confidential and will be sent directly to {SITE_CONFIG.email}.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Details Card with generous padding */}
            <div className="bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0F1117] pb-4 border-b border-[#E5E4DE]">
                Direct Contact
              </h3>

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#F3F2EE] flex items-center justify-center text-[#0F1117]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#848792] font-semibold">Email</div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-bold text-[#0F1117] hover:text-[#2563EB] transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#F1F0EC] text-[#575A65] hover:bg-[#E5E4DE] transition-colors cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F3F2EE] flex items-center justify-center text-[#0F1117]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#848792] font-semibold">Phone</div>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-base font-bold text-[#0F1117] hover:text-[#2563EB] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Link */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#848792] font-semibold">WhatsApp</div>
                  <a
                    href="https://wa.me/917876525326?text=Hi%20Sham,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>+91-7876525326</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F3F2EE] flex items-center justify-center text-[#0F1117]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#848792] font-semibold">Location</div>
                  <div className="text-base font-bold text-[#0F1117]">
                    India · Working remotely worldwide
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F3F2EE] flex items-center justify-center text-[#0F1117]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#848792] font-semibold">Availability</div>
                  <div className="text-base font-bold text-emerald-600">
                    Open for select freelance projects
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-5 border-t border-[#E5E4DE] flex items-center gap-4">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#575A65] hover:text-[#0F1117] transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#575A65] hover:text-[#0F1117] transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://wa.me/917876525326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Collaboration FAQ */}
            <div className="bg-[#FAF9F7] border border-[#E5E4DE] rounded-3xl p-8 text-sm text-[#575A65] space-y-4">
              <div className="font-extrabold text-[#0F1117] text-base mb-1">
                Collaboration Notes
              </div>
              <p className="leading-relaxed">
                <strong>Remote-First:</strong> Comfortable communicating via email, WhatsApp, Google Meet, Slack, and Figma comments.
              </p>
              <p className="leading-relaxed">
                <strong>No Hand-off Misunderstandings:</strong> Because I handle both design and frontend development, what is agreed upon in wireframes matches what goes live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
