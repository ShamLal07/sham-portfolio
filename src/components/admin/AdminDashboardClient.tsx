"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Mail,
  Quote,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Eye,
  LogOut,
  Upload,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Search,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";
import { BlogPost, DynamicProject, Inquiry, TestimonialItem } from "@/types/cms";

interface AdminDashboardClientProps {
  initialAuthenticated: boolean;
}

type TabType = "overview" | "blogs" | "projects" | "inquiries" | "testimonials";

export function AdminDashboardClient({ initialAuthenticated }: AdminDashboardClientProps) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // CMS States
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<DynamicProject[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  // Active Editors
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost> | null>(null);
  const [editingProject, setEditingProject] = useState<Partial<DynamicProject> | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<Partial<TestimonialItem> | null>(null);
  const [blogPreviewMode, setBlogPreviewMode] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Load CMS data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [resBlogs, resProj, resInq, resTesti] = await Promise.all([
        fetch("/api/admin/blogs").then((r) => r.ok ? r.json() : { posts: [] }),
        fetch("/api/admin/projects").then((r) => r.ok ? r.json() : { projects: [] }),
        fetch("/api/admin/inquiries").then((r) => r.ok ? r.json() : { inquiries: [] }),
        fetch("/api/admin/testimonials").then((r) => r.ok ? r.json() : { testimonials: [] }),
      ]);
      setBlogs(resBlogs.posts || []);
      setProjects(resProj.projects || []);
      setInquiries(resInq.inquiries || []);
      setTestimonials(resTesti.testimonials || []);
    } catch (e) {
      console.error("Failed to load admin data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated]);

  const showFeedback = (type: "success" | "error", text: string) => {
    setFeedback({ type, text });
    setTimeout(() => setFeedback(null), 4000);
  };

  // Auth Handlers
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAuthenticated(true);
      } else {
        setAuthError(data.error || "Incorrect password. Default is shamdev@2026");
      }
    } catch {
      setAuthError("Failed to authenticate.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false);
  };

  // Upload Handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: "blog" | "project") => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        if (targetField === "blog" && editingBlog) {
          setEditingBlog({ ...editingBlog, coverImage: data.url });
        } else if (targetField === "project" && editingProject) {
          setEditingProject({ ...editingProject, image: data.url });
        }
        showFeedback("success", "Image uploaded successfully!");
      } else {
        showFeedback("error", data.error || "Upload failed");
      }
    } catch {
      showFeedback("error", "Image upload failed");
    } finally {
      setUploadingImage(false);
    }
  };

  // Save Blog
  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog?.title) return;

    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingBlog),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showFeedback("success", `Article "${data.post.title}" saved successfully!`);
        setEditingBlog(null);
        fetchData();
      } else {
        showFeedback("error", data.error || "Failed to save article");
      }
    } catch {
      showFeedback("error", "Failed to save article");
    }
  };

  // Delete Blog
  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/admin/blogs?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        showFeedback("success", "Article deleted");
        fetchData();
      }
    } catch {
      showFeedback("error", "Failed to delete article");
    }
  };

  // Save Project
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject?.title) return;

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingProject),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showFeedback("success", `Project "${data.project.title}" saved successfully!`);
        setEditingProject(null);
        fetchData();
      } else {
        showFeedback("error", data.error || "Failed to save project");
      }
    } catch {
      showFeedback("error", "Failed to save project");
    }
  };

  // Delete Project
  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/admin/projects?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        showFeedback("success", "Project deleted");
        fetchData();
      }
    } catch {
      showFeedback("error", "Failed to delete project");
    }
  };

  // Inquiry Status
  const handleInquiryStatus = async (id: string, status: "new" | "contacted" | "archived") => {
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        fetchData();
      }
    } catch {
      showFeedback("error", "Failed to update inquiry status");
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;
    try {
      const res = await fetch(`/api/admin/inquiries?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        showFeedback("success", "Inquiry deleted");
        fetchData();
      }
    } catch {
      showFeedback("error", "Failed to delete inquiry");
    }
  };

  // Save Testimonial
  const handleSaveTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial?.quote || !editingTestimonial?.author) return;

    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingTestimonial),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        showFeedback("success", "Testimonial saved!");
        setEditingTestimonial(null);
        fetchData();
      } else {
        showFeedback("error", data.error || "Failed to save testimonial");
      }
    } catch {
      showFeedback("error", "Failed to save testimonial");
    }
  };

  // Delete Testimonial
  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    try {
      const res = await fetch(`/api/admin/testimonials?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (res.ok) {
        showFeedback("success", "Testimonial deleted");
        fetchData();
      }
    } catch {
      showFeedback("error", "Failed to delete testimonial");
    }
  };

  // -------------------------------------------------------------
  // LOGIN SCREEN
  // -------------------------------------------------------------
  if (!authenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-3xl bg-[#11131C] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-500 mx-auto flex items-center justify-center font-bold text-white text-lg mb-3 shadow-lg shadow-blue-500/25">
              SL
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Admin CMS Portal</h1>
            <p className="text-xs text-white/60 mt-1">
              Secure control panel to manage blogs, projects &amp; inquiries.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (default: shamdev@2026)"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-hidden focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
            >
              {authLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Access Dashboard</span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 text-center text-xs text-white/40">
            Protected with server authorization and HTTP-only cookie sessions.
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // AUTHENTICATED DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="site-container py-10 sm:py-14 min-h-screen text-white">
      {/* Toast Feedback */}
      {feedback && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-semibold border animate-in slide-in-from-bottom-2 ${
            feedback.type === "success"
              ? "bg-emerald-950/90 text-emerald-200 border-emerald-500/40"
              : "bg-rose-950/90 text-rose-200 border-rose-500/40"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-400" />
          )}
          <span>{feedback.text}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              ShamDev CMS Dashboard
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Live Connected
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            Dynamic content management for blog articles, client projects &amp; inquiries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white/80 border border-white/10 flex items-center gap-1.5 transition-all"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 rounded-full bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-300 border border-rose-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-white/10">
        <button
          type="button"
          onClick={() => {
            setActiveTab("overview");
            setEditingBlog(null);
            setEditingProject(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "overview"
              ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
              : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>Overview</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("blogs");
            setEditingProject(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "blogs"
              ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
              : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Blog Articles ({blogs.length})</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("projects");
            setEditingBlog(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "projects"
              ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
              : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>Projects ({projects.length})</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("inquiries");
            setEditingBlog(null);
            setEditingProject(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "inquiries"
              ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
              : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
          }`}
        >
          <Mail className="w-4 h-4" />
          <span>Inquiries ({inquiries.filter((i) => i.status === "new").length} new)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("testimonials");
            setEditingBlog(null);
            setEditingProject(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "testimonials"
              ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
              : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]"
          }`}
        >
          <Quote className="w-4 h-4" />
          <span>Testimonials ({testimonials.length})</span>
        </button>
      </div>

      {/* -------------------------------------------------------------
          TAB: OVERVIEW
          ------------------------------------------------------------- */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-[#11131C] border border-white/10">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">
                Published Articles
              </span>
              <div className="text-3xl font-extrabold text-white">
                {blogs.filter((b) => b.status === "published").length}
              </div>
              <span className="text-xs text-blue-400 mt-1 inline-block">
                {blogs.filter((b) => b.status === "draft").length} in draft
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#11131C] border border-white/10">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">
                Active Projects
              </span>
              <div className="text-3xl font-extrabold text-white">{projects.length}</div>
              <span className="text-xs text-blue-400 mt-1 inline-block">
                {projects.filter((p) => p.featured).length} featured on homepage
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#11131C] border border-white/10">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">
                Client Inquiries
              </span>
              <div className="text-3xl font-extrabold text-white">{inquiries.length}</div>
              <span className="text-xs text-emerald-400 mt-1 inline-block">
                {inquiries.filter((i) => i.status === "new").length} waiting for reply
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#11131C] border border-white/10">
              <span className="text-xs font-bold text-white/50 uppercase tracking-wider block mb-1">
                Client Testimonials
              </span>
              <div className="text-3xl font-extrabold text-white">{testimonials.length}</div>
              <span className="text-xs text-white/50 mt-1 inline-block">Worldwide reviews</span>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-[#131522] to-[#11131C] border border-blue-500/20 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Quick Content Actions</h3>
              <p className="text-xs text-white/60">Manage your portfolio and publishing workflow.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("blogs");
                  setEditingBlog({
                    title: "",
                    slug: "",
                    excerpt: "",
                    content: "",
                    category: "WordPress",
                    tags: ["WordPress", "Web Development"],
                    readTime: "5 min read",
                    status: "published",
                    featured: false,
                  });
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Article</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("projects");
                  setEditingProject({
                    title: "",
                    slug: "",
                    platform: "WordPress",
                    category: "WordPress",
                    role: "Web Developer",
                    industry: "Client Brand",
                    shortDesc: "",
                    overview: "",
                    tags: ["WordPress"],
                    featured: true,
                    order: projects.length + 1,
                  });
                }}
                className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>
            </div>
          </div>

          {/* Recent Inquiries Snippet */}
          <div className="rounded-2xl bg-[#11131C] border border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white">Recent Client Inquiries</h3>
              <button
                type="button"
                onClick={() => setActiveTab("inquiries")}
                className="text-xs text-blue-400 font-semibold hover:underline cursor-pointer"
              >
                View All ({inquiries.length})
              </button>
            </div>

            {inquiries.length > 0 ? (
              <div className="divide-y divide-white/10">
                {inquiries.slice(0, 4).map((inq) => (
                  <div key={inq.id} className="py-3 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{inq.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            inq.status === "new"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-white/10 text-white/60"
                          }`}
                        >
                          {inq.status}
                        </span>
                      </div>
                      <p className="text-xs text-white/50">{inq.email} · {inq.phone}</p>
                    </div>

                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-white/50 py-4">No inquiries yet. New submissions will appear here.</p>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          TAB: BLOG CMS
          ------------------------------------------------------------- */}
      {activeTab === "blogs" && (
        <div>
          {editingBlog ? (
            /* Blog Editor Form */
            <div className="rounded-2xl bg-[#11131C] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">
                  {editingBlog.id ? "Edit Article" : "Create New Article"}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBlogPreviewMode(!blogPreviewMode)}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white/80 border border-white/10 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{blogPreviewMode ? "Edit Mode" : "Preview"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEditingBlog(null)}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white/60 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>

              {!blogPreviewMode ? (
                <form onSubmit={handleSaveBlog} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                        Article Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={editingBlog.title || ""}
                        onChange={(e) => {
                          const title = e.target.value;
                          const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                          setEditingBlog({ ...editingBlog, title, slug: editingBlog.slug || slug });
                        }}
                        placeholder="e.g. Complete Guide to Custom WordPress Development"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                        URL Slug (/blog/slug) *
                      </label>
                      <input
                        type="text"
                        required
                        value={editingBlog.slug || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                        placeholder="e.g. complete-guide-wordpress"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                        Category
                      </label>
                      <select
                        value={editingBlog.category || "WordPress"}
                        onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                      >
                        <option value="WordPress">WordPress</option>
                        <option value="Shopify">Shopify</option>
                        <option value="Next.js">Next.js</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Performance">Performance</option>
                        <option value="Tutorials">Tutorials</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                        Read Time
                      </label>
                      <input
                        type="text"
                        value={editingBlog.readTime || "5 min read"}
                        onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                        Publish Status
                      </label>
                      <select
                        value={editingBlog.status || "published"}
                        onChange={(e) => setEditingBlog({ ...editingBlog, status: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft (Private)</option>
                      </select>
                    </div>
                  </div>

                  {/* Cover Image URL & Upload */}
                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Cover Image URL or File Upload
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={editingBlog.coverImage || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, coverImage: e.target.value })}
                        placeholder="/projects/topleft.jpg or https://..."
                        className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                      />
                      <label className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white border border-white/15 flex items-center gap-1.5 cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{uploadingImage ? "Uploading..." : "Upload"}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, "blog")}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Short Excerpt (Cards &amp; Meta Description)
                    </label>
                    <textarea
                      rows={2}
                      value={editingBlog.excerpt || ""}
                      onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                      placeholder="Brief 1-2 sentence overview for search engines and card preview..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>

                  {/* Main Content Markdown */}
                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Article Content (Markdown supported: ## Headings, lists, code blocks, links)
                    </label>
                    <textarea
                      rows={12}
                      required
                      value={editingBlog.content || ""}
                      onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                      placeholder="Write your article in Markdown. Use ## for section headings, ``` for code snippets, etc."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm font-mono focus:border-blue-400 focus:outline-hidden leading-relaxed"
                    />
                  </div>

                  {/* SEO Metadata */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-black/30 border border-white/5">
                    <div>
                      <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                        SEO Meta Title
                      </label>
                      <input
                        type="text"
                        value={editingBlog.seoTitle || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, seoTitle: e.target.value })}
                        placeholder="Optimized 50-60 char title for Google..."
                        className="w-full px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs focus:border-blue-400 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                        SEO Meta Description
                      </label>
                      <input
                        type="text"
                        value={editingBlog.seoDescription || ""}
                        onChange={(e) => setEditingBlog({ ...editingBlog, seoDescription: e.target.value })}
                        placeholder="140-155 char meta description..."
                        className="w-full px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-white text-xs focus:border-blue-400 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  {/* Form Submit */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setEditingBlog(null)}
                      className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-bold text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      Save &amp; Publish Article
                    </button>
                  </div>
                </form>
              ) : (
                /* Live Preview Mode */
                <div className="p-6 rounded-2xl bg-[#0A0B0E] border border-white/10 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-blue-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Live Preview</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white">{editingBlog.title || "Untitled Article"}</h2>
                  <p className="text-white/60 italic">{editingBlog.excerpt}</p>
                  <div className="prose prose-invert max-w-none pt-4 border-t border-white/10">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-white/80">
                      {editingBlog.content}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Articles List */
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">All Articles ({blogs.length})</h2>
                <button
                  type="button"
                  onClick={() =>
                    setEditingBlog({
                      title: "",
                      slug: "",
                      excerpt: "",
                      content: "",
                      category: "WordPress",
                      tags: ["WordPress", "Web Development"],
                      readTime: "5 min read",
                      status: "published",
                      featured: false,
                    })
                  }
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Create Article</span>
                </button>
              </div>

              <div className="rounded-2xl bg-[#11131C] border border-white/10 divide-y divide-white/10 overflow-hidden">
                {blogs.map((post) => (
                  <div key={post.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base font-bold text-white hover:text-blue-300 transition-colors">
                          {post.title}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            post.status === "published"
                              ? "bg-emerald-500/20 text-emerald-300"
                              : "bg-blue-500/20 text-blue-300"
                          }`}
                        >
                          {post.status}
                        </span>
                        {post.featured && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-white/50 flex items-center gap-2">
                        <span>{post.category}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span className="font-mono text-white/40">/blog/{post.slug}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
                        title="View Live"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setEditingBlog(post)}
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-blue-300 transition-colors cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(post.id)}
                        className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 transition-colors cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          TAB: PROJECTS CMS
          ------------------------------------------------------------- */}
      {activeTab === "projects" && (
        <div>
          {editingProject ? (
            /* Project Editor */
            <div className="rounded-2xl bg-[#11131C] border border-white/10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">
                  {editingProject.id ? "Edit Project" : "Add New Project"}
                </h2>
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-white/60 cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProject.title || ""}
                      onChange={(e) => {
                        const title = e.target.value;
                        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                        setEditingProject({ ...editingProject, title, slug: editingProject.slug || slug });
                      }}
                      placeholder="e.g. Acme SaaS"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProject.slug || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, slug: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Platform
                    </label>
                    <select
                      value={editingProject.platform || "WordPress"}
                      onChange={(e) => setEditingProject({ ...editingProject, platform: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0A0B0E] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    >
                      <option value="WordPress">WordPress</option>
                      <option value="Shopify">Shopify</option>
                      <option value="Next.js">Next.js</option>
                      <option value="HubSpot">HubSpot</option>
                      <option value="React / Next.js">React / Next.js</option>
                      <option value="Webflow">Webflow</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Industry
                    </label>
                    <input
                      type="text"
                      value={editingProject.industry || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, industry: e.target.value })}
                      placeholder="e.g. Fitness &amp; Apparel"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Display Order (1 = Top)
                    </label>
                    <input
                      type="number"
                      value={editingProject.order || 1}
                      onChange={(e) => setEditingProject({ ...editingProject, order: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Thumbnail Image URL & Upload */}
                <div>
                  <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                    Project Thumbnail Image
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={editingProject.image || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                      placeholder="/projects/topleft.jpg"
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                    <label className="px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-semibold text-white border border-white/15 flex items-center gap-1.5 cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>{uploadingImage ? "Uploading..." : "Upload"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, "project")}
                      />
                    </label>
                  </div>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                    Short Description (Cards)
                  </label>
                  <textarea
                    rows={2}
                    value={editingProject.shortDesc || ""}
                    onChange={(e) => setEditingProject({ ...editingProject, shortDesc: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                  />
                </div>

                {/* URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Live Project URL
                    </label>
                    <input
                      type="text"
                      value={editingProject.liveUrl || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/75 uppercase tracking-wider mb-2">
                      Case Study URL (Internal)
                    </label>
                    <input
                      type="text"
                      value={editingProject.caseStudyUrl || ""}
                      onChange={(e) => setEditingProject({ ...editingProject, caseStudyUrl: e.target.value })}
                      placeholder="/work/example-slug"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-xs font-bold text-white cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Projects List */
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">All Projects ({projects.length})</h2>
                <button
                  type="button"
                  onClick={() =>
                    setEditingProject({
                      title: "",
                      slug: "",
                      platform: "WordPress",
                      category: "WordPress",
                      role: "Web Developer",
                      industry: "Client Brand",
                      shortDesc: "",
                      overview: "",
                      tags: ["WordPress"],
                      featured: true,
                      order: projects.length + 1,
                    })
                  }
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              <div className="rounded-2xl bg-[#11131C] border border-white/10 divide-y divide-white/10 overflow-hidden">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-black/40 border border-white/10 shrink-0">
                        <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-white">{proj.title}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300">
                            {proj.platform}
                          </span>
                        </div>
                        <p className="text-xs text-white/50">{proj.role} · Order: #{proj.order}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white/70 hover:text-white transition-colors"
                          title="View Live"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => setEditingProject(proj)}
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-blue-300 transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 transition-colors cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          TAB: INQUIRIES (CLIENT LEADS)
          ------------------------------------------------------------- */}
      {activeTab === "inquiries" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Client Inquiries &amp; Leads ({inquiries.length})</h2>
          </div>

          {inquiries.length > 0 ? (
            <div className="space-y-4">
              {inquiries.map((inq) => {
                const whatsappLink = `https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  `Hi ${inq.name}, this is Sham Lal replying to your inquiry on shamdev.in regarding ${inq.service}.`
                )}`;

                return (
                  <div key={inq.id} className="p-6 rounded-2xl bg-[#11131C] border border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-white">{inq.name}</h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              inq.status === "new"
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                : inq.status === "contacted"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                : "bg-white/10 text-white/50"
                            }`}
                          >
                            {inq.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-xs text-white/50 mt-0.5">
                          Received on {new Date(inq.createdAt).toLocaleDateString()} at{" "}
                          {new Date(inq.createdAt).toLocaleTimeString()}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => handleInquiryStatus(inq.id, "contacted")}
                          className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Reply WhatsApp</span>
                        </a>

                        <a
                          href={`mailto:${inq.email}?subject=${encodeURIComponent(`Replying to your project inquiry - Sham Lal`)}`}
                          onClick={() => handleInquiryStatus(inq.id, "contacted")}
                          className="px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Email</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => handleDeleteInquiry(inq.id)}
                          className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 transition-colors cursor-pointer"
                          title="Delete Inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                      <div>
                        <span className="text-white/40 block">Email Address:</span>
                        <a href={`mailto:${inq.email}`} className="text-white font-medium hover:text-blue-300">
                          {inq.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-white/40 block">Phone / WhatsApp:</span>
                        <span className="text-white font-medium">{inq.phone}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block">Service Requested:</span>
                        <span className="text-blue-300 font-bold">{inq.service}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block">Timeline:</span>
                        <span className="text-white font-medium">{inq.timeline}</span>
                      </div>
                    </div>

                    {/* Inquiry Message */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-white/80 leading-relaxed">
                      {inq.message}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center rounded-2xl bg-white/[0.02] border border-white/10 p-8">
              <Mail className="w-8 h-8 text-white/30 mx-auto mb-2" />
              <p className="text-sm text-white/60">No client inquiries received yet.</p>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          TAB: TESTIMONIALS
          ------------------------------------------------------------- */}
      {activeTab === "testimonials" && (
        <div>
          {editingTestimonial ? (
            <div className="rounded-2xl bg-[#11131C] border border-white/10 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6">
                {editingTestimonial.id ? "Edit Testimonial" : "Add Testimonial"}
              </h2>
              <form onSubmit={handleSaveTestimonial} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase mb-2">Author Name *</label>
                    <input
                      type="text"
                      required
                      value={editingTestimonial.author || ""}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, author: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase mb-2">Role &amp; Company</label>
                    <input
                      type="text"
                      value={editingTestimonial.role || ""}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, role: e.target.value })}
                      placeholder="e.g. Founder, TopLeft"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase mb-2">Quote Text *</label>
                  <textarea
                    rows={4}
                    required
                    value={editingTestimonial.quote || ""}
                    onChange={(e) => setEditingTestimonial({ ...editingTestimonial, quote: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm focus:border-blue-400 focus:outline-hidden"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setEditingTestimonial(null)}
                    className="px-4 py-2 rounded-full bg-white/[0.06] text-xs font-bold text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-blue-500 text-white font-bold text-xs"
                  >
                    Save Testimonial
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Client Testimonials ({testimonials.length})</h2>
                <button
                  type="button"
                  onClick={() => setEditingTestimonial({ author: "", role: "", quote: "", company: "", featured: true })}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <div key={t.id} className="p-6 rounded-2xl bg-[#11131C] border border-white/10 space-y-4">
                    <p className="text-sm text-white/80 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <div className="text-sm font-bold text-white">{t.author}</div>
                        <div className="text-xs text-white/50">{t.role}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingTestimonial(t)}
                          className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-blue-300 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteTestimonial(t.id)}
                          className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
