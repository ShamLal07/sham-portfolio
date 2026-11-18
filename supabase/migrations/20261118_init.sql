-- ShamDev Portfolio & CMS Database Schema
-- Run this in your Supabase SQL Editor if connecting a Supabase project

-- 1. Blogs Table
CREATE TABLE IF NOT EXISTS public.blogs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  coverImage TEXT NOT NULL DEFAULT '/projects/topleft.jpg',
  category TEXT NOT NULL DEFAULT 'WordPress',
  tags JSONB NOT NULL DEFAULT '["Web Development"]'::jsonb,
  readTime TEXT NOT NULL DEFAULT '5 min read',
  publishedAt DATE NOT NULL DEFAULT CURRENT_DATE,
  updatedAt DATE DEFAULT CURRENT_DATE,
  status TEXT NOT NULL DEFAULT 'published',
  featured BOOLEAN NOT NULL DEFAULT false,
  seoTitle TEXT,
  seoDescription TEXT,
  author JSONB NOT NULL DEFAULT '{"name":"Sham Lal","role":"Web Developer","avatar":"/icon.svg"}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_status ON public.blogs(status);
CREATE INDEX IF NOT EXISTS idx_blogs_category ON public.blogs(category);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  platform TEXT NOT NULL DEFAULT 'WordPress',
  category TEXT NOT NULL DEFAULT 'WordPress',
  role TEXT NOT NULL DEFAULT 'Web Developer',
  industry TEXT NOT NULL DEFAULT 'General',
  shortDesc TEXT NOT NULL DEFAULT '',
  overview TEXT NOT NULL DEFAULT '',
  challenge TEXT NOT NULL DEFAULT '',
  approach TEXT NOT NULL DEFAULT '',
  implementationDetails JSONB NOT NULL DEFAULT '[]'::jsonb,
  outcome TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '/projects/topleft.jpg',
  tags JSONB NOT NULL DEFAULT '[]'::jsonb,
  featured BOOLEAN NOT NULL DEFAULT true,
  liveUrl TEXT DEFAULT '',
  caseStudyUrl TEXT DEFAULT '',
  "order" INTEGER NOT NULL DEFAULT 1,
  createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_order ON public.projects("order");

-- 3. Inquiries Table (Client Contact Leads)
CREATE TABLE IF NOT EXISTS public.inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  service TEXT NOT NULL DEFAULT 'Website Design',
  timeline TEXT NOT NULL DEFAULT '1-2 months',
  budget TEXT DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'new',
  createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_createdAt ON public.inquiries(createdAt DESC);

-- 4. Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id TEXT PRIMARY KEY,
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT '',
  company TEXT NOT NULL DEFAULT '',
  avatar TEXT DEFAULT '',
  featured BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published blogs, projects, and testimonials
CREATE POLICY "Allow public read published blogs" ON public.blogs FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read testimonials" ON public.testimonials FOR SELECT USING (true);

-- Allow public to insert contact inquiries
CREATE POLICY "Allow public insert inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Allow service role full access to all tables
CREATE POLICY "Allow service role full access blogs" ON public.blogs FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Allow service role full access projects" ON public.projects FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Allow service role full access inquiries" ON public.inquiries FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Allow service role full access testimonials" ON public.testimonials FOR ALL USING (auth.role() = 'service_role');
