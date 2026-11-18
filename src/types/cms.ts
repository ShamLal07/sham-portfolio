export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: "WordPress" | "Shopify" | "Next.js" | "UI/UX Design" | "Performance" | "Tutorials";
  tags: string[];
  readTime: string;
  publishedAt: string;
  updatedAt?: string;
  status: "published" | "draft";
  featured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface DynamicProject {
  id: string;
  slug: string;
  title: string;
  platform: "WordPress" | "Shopify" | "Next.js" | "React / Next.js" | "Wix" | "Webflow" | "HubSpot" | "HTML / Web" | "Figma";
  category: string;
  role: string;
  industry: string;
  shortDesc: string;
  overview: string;
  challenge: string;
  approach: string;
  implementationDetails: string[];
  outcome: string;
  image: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
  caseStudyUrl?: string;
  order: number;
  createdAt: string;
  updatedAt?: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  budget?: string;
  message: string;
  status: "new" | "contacted" | "archived";
  createdAt: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  projectSlug?: string;
  featured: boolean;
}
