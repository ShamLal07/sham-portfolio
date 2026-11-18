import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/siteConfig";
import { PROJECTS } from "@/data/projects";
import { ALL_SERVICES_CATALOG } from "@/data/servicesCatalog";
import { getAllBlogPosts } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(`${project.updatedAt || "2026-10-23"}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES_CATALOG.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date("2026-10-20T00:00:00.000Z"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogs = await getAllBlogPosts(false);
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...blogRoutes];
}
