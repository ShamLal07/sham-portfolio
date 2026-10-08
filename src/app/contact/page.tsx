"use client";

import React, { useState } from "react";
import { Mail, Phone, FileText, CheckCircle2, Send, Clock, Globe } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Design",
    timeline: "1-2 months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-14 pb-28 md:pt-20 md:pb-36">
      <div className="site-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-18">
          <div className="eyebrow-tag mb-4">CONTACT &amp; INQUIRIES</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F1117] mb-6 leading-tight">
            Let&apos;s build something that works.
          </h1>
          <p className="text-base sm:text-xl text-[#575A65] leading-relaxed">
            Whether you need a new website, redesign, e-commerce store or frontend
            implementation, I&apos;m open to discussing the project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Form with generous padding */}
          <div className="lg:col-span-7 bg-white border-1.5 border-[#E5E4DE] rounded-3xl p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0F1117] mb-3">
                  Message Prepared
                </h3>
                <p className="text-base text-[#575A65] max-w-[38ch] mb-8 leading-relaxed">
                  Thank you, {formData.name || "there"}! I will review your requirements and get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Send another inquiry
                </button>
              </div>
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
                  className="w-full btn-primary justify-center text-base py-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
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
              <div className="pt-5 border-t border-[#E5E4DE] flex items-center gap-5">
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
                {/* 
                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#575A65] hover:text-[#0F1117] transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </a> */}
              </div>
            </div>

            {/* Quick Collaboration FAQ */}
            <div className="bg-[#FAF9F7] border border-[#E5E4DE] rounded-3xl p-8 text-sm text-[#575A65] space-y-4">
              <div className="font-extrabold text-[#0F1117] text-base mb-1">
                Collaboration Notes
              </div>
              <p className="leading-relaxed">
                <strong>Remote-First:</strong> Comfortable communicating via email, video calls, Slack, and Figma comments.
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
