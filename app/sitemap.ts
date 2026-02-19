import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.stait.ai";

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/industries/accounting`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/ai-readiness`, changeFrequency: "weekly", priority: 0.9 },
  ];
}
