import { MetadataRoute } from "next";
import { SITE_URL, PROJECTS, SERVICES, INSIGHTS } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/services",
    "/pricing",
    "/about",
    "/technology",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const insightRoutes = INSIGHTS.map((a) => ({
    url: `${SITE_URL}/insights/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}
