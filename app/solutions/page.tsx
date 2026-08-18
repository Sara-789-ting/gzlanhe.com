import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { solutionPages } from "@/lib/solutionPages";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "LED Pool Light SEO Solutions | GZLANHE",
  description:
    "SEO landing pages for LED pool light manufacturer, IP68 underwater pool light, RGB pool light, OEM pool light and hotel pool lighting solutions.",
  alternates: {
    canonical: `${siteConfig.url}/solutions`
  },
  keywords: [
    "LED pool light manufacturer",
    "IP68 underwater pool light",
    "RGB pool light",
    "OEM pool light",
    "hotel pool lighting"
  ]
};

export default function SolutionsIndexPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <p className="text-sm font-bold uppercase tracking-wide text-signal">
              Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              LED Pool Light SEO Landing Pages
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Search-focused pages for global buyers looking for LED pool light
              manufacturers, waterproof lighting and OEM pool lighting solutions.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-5 md:grid-cols-2">
            {solutionPages.map((page) => (
              <Link
                href={`/solutions/${page.slug}`}
                key={page.slug}
                className="focus-ring group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-ink">{page.h1}</h2>
                <p className="mt-3 leading-7 text-slate-600">{page.metaDescription}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-ocean">
                  View SEO Page
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
