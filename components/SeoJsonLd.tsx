import { siteConfig } from "@/lib/site";

export function SeoJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: ["United States", "Europe", "Australia", "Global"],
    makesOffer: [
      "LED pool light",
      "IP68 underwater light",
      "Submersible pool light",
      "Fountain light",
      "OEM custom lighting"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "sales inquiry",
      availableLanguage: ["English", "Chinese"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
