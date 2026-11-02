import type { MetadataRoute } from "next";
import { packages } from "@/lib/packages";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.9 },
    ...packages.map((p) => ({
      url: `${base}/services/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/seminar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/insights`, changeFrequency: "weekly", priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/insights/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/ai-readiness`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products/quotemagic`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/products/oacp`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/industries/accounting`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
