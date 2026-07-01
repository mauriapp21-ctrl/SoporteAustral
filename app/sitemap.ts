import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/empresa", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/casos-de-exito", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/contacto", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/cotizacion", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/trabaja-con-nosotros", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  for (const s of SERVICES) {
    entries.push({
      url: `${SITE.url}/servicios/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });

    // Landings locales servicio × ciudad (SEO local).
    for (const l of LOCATIONS) {
      entries.push({
        url: `${SITE.url}/servicios/${s.slug}/${l.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  for (const p of POSTS) {
    entries.push({
      url: `${SITE.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  return entries;
}
