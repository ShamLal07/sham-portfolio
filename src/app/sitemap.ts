import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/siteConfig";
import { PROJECTS } from "@/data/projects";
import { ALL_SERVICES_CATALOG } from "@/data/servicesCatalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date("2026-10-23T00:00:00.000Z"),
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date("2026-10-23T00:00:00.000Z"),
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-10-20T00:00:00.000Z"),
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(`${project.updatedAt || "2026-10-23"}T00:00:00.000Z`),
  }));

  const serviceRoutes: MetadataRoute.Sitemap = ALL_SERVICES_CATALOG.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date("2026-10-20T00:00:00.000Z"),
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
