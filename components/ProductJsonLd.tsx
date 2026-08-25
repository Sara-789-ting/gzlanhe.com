import { ProductPage } from "@/lib/productPages";
import { siteConfig } from "@/lib/site";

export function ProductJsonLd({ product }: { product: ProductPage }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${siteConfig.url}${product.image}`,
    description: product.metaDescription,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email
    },
    category: "LED pool lighting",
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/products/${product.slug}`,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceCurrency: "USD",
      price: "0.00",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
