import type { MetadataRoute } from "next";
import { productPages } from "@/lib/productPages";
import { solutionPages } from "@/lib/solutionPages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/products", "/about", "/factory", "/certificates", "/contact", "/solutions"];
  const productRoutes = productPages.map((product) => `/products/${product.slug}`);
  const solutionRoutes = solutionPages.map((solution) => `/solutions/${solution.slug}`);

  return [...staticRoutes, ...productRoutes, ...solutionRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.85 : 0.7
  }));
}
