import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "B2B Pool Lighting Buyer Guides",
  description:
    "B2B buyer guides for LED pool lights, IP68 underwater lights, RGB pool lighting, OEM pool lights and commercial swimming pool lighting projects.",
  alternates: {
    canonical: `${siteConfig.url}/blog`
  },
  keywords: [
    "pool light buyer guide",
    "LED pool light manufacturer guide",
    "commercial pool lighting",
    "OEM pool light buying guide"
  ],
  openGraph: {
    title: "B2B Pool Lighting Buyer Guides",
    description:
      "Practical guides for importers, distributors, contractors and project buyers sourcing LED pool lights.",
    url: `${siteConfig.url}/blog`
  }
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <p className="text-sm font-bold uppercase tracking-wide text-signal">
              Buyer Resources
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
              B2B Pool Lighting Buyer Guides
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Practical procurement guides for pool equipment importers,
              contractors, distributors and commercial project buyers comparing
              LED pool lights, underwater lights and OEM pool lighting supply.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="focus-ring group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded bg-mist text-ocean">
                  <BookOpen aria-hidden="true" />
                </div>
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                  {post.buyerStage} · {post.searchIntent}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-ink">{post.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{post.metaDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-ocean">
                  Read Buyer Guide
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
