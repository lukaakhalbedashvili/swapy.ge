import type { MetadataRoute } from "next";
import comps from "@/data/comps.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const stores = comps.stores.map((store) => ({
    url: `https://swapy.ge/plus-partniorebi/${store.brand_name
      .toLowerCase()
      .replace(/ /g, "-")}`,
    lastModified: new Date(),
  }));

  const staticRoutes = [
    {
      url: "https://swapy.ge",
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "https://swapy.ge/plus-qulebi",
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "https://swapy.ge/plus-qulebi-gadacvla",
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: "https://swapy.ge/plus-qulebi-larshi",
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: "https://swapy.ge/plus-partniorebi",
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.7,
    },
  ];

  return [...stores, ...staticRoutes];
}
