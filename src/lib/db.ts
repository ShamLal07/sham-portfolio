import fs from "fs";
import path from "path";
import { BlogPost, DynamicProject, Inquiry, TestimonialItem } from "@/types/cms";
import { SEED_BLOG_POSTS } from "@/data/seedBlogPosts";
import { SEED_DYNAMIC_PROJECTS } from "@/data/seedProjects";
import { TESTIMONIALS } from "@/data/services";

// Supabase environment variables (optional - auto-detected)
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_KEY);

// Local DB directory (fallback / zero-config persistence)
const DB_DIR = path.join(process.cwd(), ".data");

function ensureDbDirectory() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

function readJsonFile<T>(filename: string, defaultValue: T): T {
  try {
    ensureDbDirectory();
    const filePath = path.join(DB_DIR, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), "utf8");
      return defaultValue;
    }
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return defaultValue;
  }
}

function writeJsonFile<T>(filename: string, data: T): void {
  try {
    ensureDbDirectory();
    const filePath = path.join(DB_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
  }
}

// Initial testimonials from services.ts
const INITIAL_TESTIMONIALS: TestimonialItem[] = TESTIMONIALS.map((t, idx) => ({
  id: `testi-${idx + 1}`,
  quote: t.quote,
  author: t.author,
  role: t.role,
  company: t.company,
  featured: true,
}));

// Supabase REST helper
async function supabaseFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  if (!isSupabaseConfigured) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
      ...options,
      headers: {
        "apikey": SUPABASE_KEY!,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation",
        ...(options.headers || {}),
      },
      cache: "no-store",
    });
    if (!res.ok) {
      const errText = await res.text();
      console.warn(`Supabase REST warning on ${endpoint}:`, errText);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`Supabase connection error on ${endpoint}:`, err);
    return null;
  }
}

/* ==========================================================================
   BLOG CMS OPERATIONS
   ========================================================================== */

export async function getAllBlogPosts(includeDrafts = false): Promise<BlogPost[]> {
  if (isSupabaseConfigured) {
    const query = includeDrafts
      ? "blogs?select=*&order=publishedAt.desc"
      : "blogs?select=*&status=eq.published&order=publishedAt.desc";
    const remote = await supabaseFetch<BlogPost[]>(query);
    if (remote && remote.length > 0) return remote;
  }

  const posts = readJsonFile<BlogPost[]>("blogs.json", SEED_BLOG_POSTS);
  if (includeDrafts) {
    return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }
  return posts
    .filter((p) => p.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (isSupabaseConfigured) {
    const remote = await supabaseFetch<BlogPost[]>(`blogs?select=*&slug=eq.${encodeURIComponent(slug)}&limit=1`);
    if (remote && remote.length > 0) return remote[0];
  }

  const posts = readJsonFile<BlogPost[]>("blogs.json", SEED_BLOG_POSTS);
  const found = posts.find((p) => p.slug === slug);
  return found || null;
}

export async function saveBlogPost(post: Partial<BlogPost> & { title: string }): Promise<BlogPost> {
  const posts = readJsonFile<BlogPost[]>("blogs.json", SEED_BLOG_POSTS);
  
  const slug = post.slug?.trim() || post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const id = post.id || `blog-${Date.now()}`;
  
  const fullPost: BlogPost = {
    id,
    slug,
    title: post.title,
    excerpt: post.excerpt || "",
    content: post.content || "",
    coverImage: post.coverImage || "/projects/topleft.jpg",
    category: post.category || "WordPress",
    tags: Array.isArray(post.tags) ? post.tags : ["Web Development"],
    readTime: post.readTime || `${Math.max(1, Math.ceil((post.content?.split(/\s+/).length || 200) / 200))} min read`,
    publishedAt: post.publishedAt || new Date().toISOString().split("T")[0],
    updatedAt: new Date().toISOString().split("T")[0],
    status: post.status || "published",
    featured: Boolean(post.featured),
    seoTitle: post.seoTitle || `${post.title} | Sham Lal`,
    seoDescription: post.seoDescription || post.excerpt || "",
    author: post.author || {
      name: "Sham Lal",
      role: "Web Developer",
      avatar: "/icon.svg",
    },
  };

  const existingIdx = posts.findIndex((p) => p.id === fullPost.id || p.slug === fullPost.slug);
  if (existingIdx >= 0) {
    posts[existingIdx] = fullPost;
  } else {
    posts.unshift(fullPost);
  }
  writeJsonFile("blogs.json", posts);

  if (isSupabaseConfigured) {
    await supabaseFetch("blogs", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates" },
      body: JSON.stringify(fullPost),
    });
  }

  return fullPost;
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const posts = readJsonFile<BlogPost[]>("blogs.json", SEED_BLOG_POSTS);
  const filtered = posts.filter((p) => p.id !== id && p.slug !== id);
  writeJsonFile("blogs.json", filtered);

  if (isSupabaseConfigured) {
    await supabaseFetch(`blogs?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  return true;
}

/* ==========================================================================
   DYNAMIC PROJECTS OPERATIONS
   ========================================================================== */

export async function getAllDynamicProjects(includeAll = false): Promise<DynamicProject[]> {
  if (isSupabaseConfigured) {
    const remote = await supabaseFetch<DynamicProject[]>("projects?select=*&order=order.asc");
    if (remote && remote.length > 0) return remote;
  }

  const projects = readJsonFile<DynamicProject[]>("projects.json", SEED_DYNAMIC_PROJECTS);
  const sorted = projects.sort((a, b) => a.order - b.order);
  if (includeAll) return sorted;
  return sorted;
}

export async function getDynamicProjectBySlug(slug: string): Promise<DynamicProject | null> {
  if (isSupabaseConfigured) {
    const remote = await supabaseFetch<DynamicProject[]>(`projects?select=*&slug=eq.${encodeURIComponent(slug)}&limit=1`);
    if (remote && remote.length > 0) return remote[0];
  }

  const projects = readJsonFile<DynamicProject[]>("projects.json", SEED_DYNAMIC_PROJECTS);
  return projects.find((p) => p.slug === slug) || null;
}

export async function saveDynamicProject(project: Partial<DynamicProject> & { title: string }): Promise<DynamicProject> {
  const projects = readJsonFile<DynamicProject[]>("projects.json", SEED_DYNAMIC_PROJECTS);
  const slug = project.slug?.trim() || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const id = project.id || `proj-${Date.now()}`;

  const fullProject: DynamicProject = {
    id,
    slug,
    title: project.title,
    platform: project.platform || "WordPress",
    category: project.category || "WordPress",
    role: project.role || "Web Developer",
    industry: project.industry || "General",
    shortDesc: project.shortDesc || "",
    overview: project.overview || project.shortDesc || "",
    challenge: project.challenge || "",
    approach: project.approach || "",
    implementationDetails: Array.isArray(project.implementationDetails) ? project.implementationDetails : [],
    outcome: project.outcome || "",
    image: project.image || "/projects/topleft.jpg",
    tags: Array.isArray(project.tags) ? project.tags : [project.platform || "Web Development"],
    featured: project.featured !== undefined ? Boolean(project.featured) : true,
    liveUrl: project.liveUrl || "",
    caseStudyUrl: project.caseStudyUrl || `/work/${slug}`,
    order: project.order !== undefined ? Number(project.order) : projects.length + 1,
    createdAt: project.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const existingIdx = projects.findIndex((p) => p.id === fullProject.id || p.slug === fullProject.slug);
  if (existingIdx >= 0) {
    projects[existingIdx] = fullProject;
  } else {
    projects.push(fullProject);
  }
  writeJsonFile("projects.json", projects);

  if (isSupabaseConfigured) {
    await supabaseFetch("projects", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates" },
      body: JSON.stringify(fullProject),
    });
  }

  return fullProject;
}

export async function deleteDynamicProject(id: string): Promise<boolean> {
  const projects = readJsonFile<DynamicProject[]>("projects.json", SEED_DYNAMIC_PROJECTS);
  const filtered = projects.filter((p) => p.id !== id && p.slug !== id);
  writeJsonFile("projects.json", filtered);

  if (isSupabaseConfigured) {
    await supabaseFetch(`projects?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  return true;
}

/* ==========================================================================
   INQUIRIES OPERATIONS (Client Leads)
   ========================================================================== */

export async function getAllInquiries(): Promise<Inquiry[]> {
  if (isSupabaseConfigured) {
    const remote = await supabaseFetch<Inquiry[]>("inquiries?select=*&order=createdAt.desc");
    if (remote) return remote;
  }

  const list = readJsonFile<Inquiry[]>("inquiries.json", []);
  return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function saveInquiry(inquiry: Omit<Inquiry, "id" | "createdAt" | "status">): Promise<Inquiry> {
  const list = readJsonFile<Inquiry[]>("inquiries.json", []);
  const newInquiry: Inquiry = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    status: "new",
    createdAt: new Date().toISOString(),
  };

  list.unshift(newInquiry);
  writeJsonFile("inquiries.json", list);

  if (isSupabaseConfigured) {
    await supabaseFetch("inquiries", {
      method: "POST",
      body: JSON.stringify(newInquiry),
    });
  }

  return newInquiry;
}

export async function updateInquiryStatus(id: string, status: "new" | "contacted" | "archived"): Promise<boolean> {
  const list = readJsonFile<Inquiry[]>("inquiries.json", []);
  const idx = list.findIndex((i) => i.id === id);
  if (idx >= 0) {
    list[idx].status = status;
    writeJsonFile("inquiries.json", list);
  }

  if (isSupabaseConfigured) {
    await supabaseFetch(`inquiries?id=eq.${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  }

  return true;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const list = readJsonFile<Inquiry[]>("inquiries.json", []);
  const filtered = list.filter((i) => i.id !== id);
  writeJsonFile("inquiries.json", filtered);

  if (isSupabaseConfigured) {
    await supabaseFetch(`inquiries?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  return true;
}

/* ==========================================================================
   TESTIMONIALS OPERATIONS
   ========================================================================== */

export async function getAllTestimonials(): Promise<TestimonialItem[]> {
  if (isSupabaseConfigured) {
    const remote = await supabaseFetch<TestimonialItem[]>("testimonials?select=*");
    if (remote && remote.length > 0) return remote;
  }

  return readJsonFile<TestimonialItem[]>("testimonials.json", INITIAL_TESTIMONIALS);
}

export async function saveTestimonial(item: Partial<TestimonialItem> & { quote: string; author: string }): Promise<TestimonialItem> {
  const list = readJsonFile<TestimonialItem[]>("testimonials.json", INITIAL_TESTIMONIALS);
  const newItem: TestimonialItem = {
    id: item.id || `testi-${Date.now()}`,
    quote: item.quote,
    author: item.author,
    role: item.role || "Business Owner",
    company: item.company || "Client",
    avatar: item.avatar || "",
    featured: item.featured !== undefined ? item.featured : true,
  };

  const idx = list.findIndex((t) => t.id === newItem.id);
  if (idx >= 0) {
    list[idx] = newItem;
  } else {
    list.push(newItem);
  }
  writeJsonFile("testimonials.json", list);

  if (isSupabaseConfigured) {
    await supabaseFetch("testimonials", {
      method: "POST",
      headers: { "Prefer": "resolution=merge-duplicates" },
      body: JSON.stringify(newItem),
    });
  }

  return newItem;
}

export async function deleteTestimonial(id: string): Promise<boolean> {
  const list = readJsonFile<TestimonialItem[]>("testimonials.json", INITIAL_TESTIMONIALS);
  const filtered = list.filter((t) => t.id !== id);
  writeJsonFile("testimonials.json", filtered);

  if (isSupabaseConfigured) {
    await supabaseFetch(`testimonials?id=eq.${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  return true;
}
