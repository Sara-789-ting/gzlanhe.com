import { productPages } from "@/lib/productPages";
import { applicationPages } from "@/lib/applicationPages";

export const productCategories = productPages.map((product) => ({
  name: product.name,
  href: `/products/${product.slug}`,
  description: product.metaDescription
}));

export const advantages = [
  "Factory Direct Supply",
  "OEM/ODM Service",
  "IP68 Waterproof Technology",
  "CE RoHS Certification",
  "Global Export Experience"
];

export const applications = [
  ...applicationPages.map((page) => ({
    name: page.title,
    href: `/applications/${page.slug}`,
    description: page.metaDescription
  }))
];
