import { siteConfig } from "@/lib/site";

export function OrganizationJsonLd({ pageUrl }: { pageUrl: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "GZLANHE",
    alternateName: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    mainEntityOfPage: pageUrl,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "sales inquiry",
      availableLanguage: ["English", "Chinese"]
    },
    areaServed: ["United States", "Europe", "Australia", "Global"],
    knowsAbout: [
      "LED pool lights",
      "Underwater LED lights",
      "IP68 waterproof lighting",
      "OEM lighting manufacturing"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
