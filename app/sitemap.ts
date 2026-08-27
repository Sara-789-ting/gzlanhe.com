import type { MetadataRoute } from "next";
import { applicationPages } from "@/lib/applicationPages";
import { blogPosts } from "@/lib/blogPosts";
import { productPages } from "@/lib/productPages";
import { solutionPages } from "@/lib/solutionPages";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/products", "/catalog", "/about", "/factory", "/certificates", "/contact", "/solutions", "/blog"];
  const productRoutes = productPages.map((product) => `/products/${product.slug}`);
  const applicationRoutes = applicationPages.map((page) => `/applications/${page.slug}`);
  const solutionRoutes = solutionPages.map((solution) => `/solutions/${solution.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, "/applications", ...productRoutes, ...applicationRoutes, ...solutionRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.85 : route.startsWith("/applications") ? 0.8 : route.startsWith("/blog") ? 0.75 : 0.7
  }));
}
