import { siteConfig } from "@/lib/site";

export const featuredProduct = "35W RGB Pool Light with Tuya Control";
export const featuredPath = "/products/35w-rgb-tuya-pool-light";

export function inquiryContext(path: string, search = "") {
  const params = new URLSearchParams(search);
  const campaign = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
    .filter((key) => params.has(key))
    .map((key) => `${key}: ${params.get(key)!.slice(0, 120)}`);
  return [`Page: ${siteConfig.url}${path.startsWith("/") ? path.split("?")[0] : "/"}`, ...campaign].join("\n");
}

export function whatsappHref(product: string, path = "/", source = "Website", search = "", details = "") {
  const message = [
    `Hello LANHE, I am interested in ${product}.`,
    details || "Quantity:\nDestination country:\nPlease confirm the configuration, accessories and quotation.",
    `Source: ${source}`, inquiryContext(path, search)
  ].join("\n\n");
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
