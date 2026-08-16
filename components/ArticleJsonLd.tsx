import type { BlogPost } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/site";

export function ArticleJsonLd({ post }: { post: BlogPost }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    about: post.primaryKeyword,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
