import { deals } from "@/data/deals";

export default function sitemap() {
  const baseUrl = "https://dealradarng.com";

  const staticRoutes = [
    "",
    "/deals",
    "/categories",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/reviews",
    "/software",
    "/tools",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...deals.map((deal) => ({
      url: `${baseUrl}/deals/${deal.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
