import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Factory, Globe2, Settings } from "lucide-react";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { getSolutionBySlug, solutionPages } from "@/lib/solutionPages";
import { siteConfig } from "@/lib/site";

type SolutionRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SolutionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionBySlug(slug);
  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      images: [{ url: "/images/hero-pool-lights.png", width: 1536, height: 1024 }]
    }
  };
}

export default async function SolutionPage({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const page = getSolutionBySlug(slug);
  if (!page) {
    notFound();
  }

  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/solutions/${page.slug}`} />
      <FaqJsonLd faqs={page.faqs} />
      <Header />
      <main>
        <section className="bg-[linear-gradient(120deg,#073847_0%,#075f73_50%,#f7fbfc_50%,#f7fbfc_100%)] py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">
                SEO Solution
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                {page.intro}
              </p>
              <a
                href="/contact"
                className="focus-ring mt-8 inline-flex items-center gap-2 rounded bg-signal px-6 py-3 font-bold text-ink shadow-lg hover:bg-amber-300"
              >
                Get Factory Price
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="overflow-hidden rounded border border-white/30 bg-white shadow-2xl">
              <Image
                src="/images/hero-pool-lights.png"
                alt={`${page.h1} product image`}
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Product Introduction
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Factory supply for overseas B2B buyers
              </h2>
              <p className="mt-5 leading-8 text-slate-600">{page.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {page.keywords.map((keyword) => (
                  <span key={keyword} className="rounded bg-mist px-4 py-2 text-sm font-bold text-ocean">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.advantages.map((advantage, index) => {
                const icons = [Factory, BadgeCheck, Settings, Globe2, BadgeCheck];
                const Icon = icons[index] || BadgeCheck;
                return (
                  <div key={advantage} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon className="mb-3 text-ocean" aria-hidden="true" />
                    <p className="font-bold text-ink">{advantage}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Application Scenarios
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Where this solution is used</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {page.applications.map((item) => (
                  <div key={item} className="rounded bg-ink p-5 text-white">
                    <p className="font-bold">{item}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Suitable for B2B purchasing, project lighting and long-term supply.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">OEM Capability</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Custom lighting support</h2>
              <p className="mt-5 leading-8 text-slate-600">{page.oem}</p>
              <a
                href="/contact"
                className="focus-ring mt-8 inline-flex items-center gap-2 rounded bg-ocean px-6 py-3 font-bold text-white hover:bg-cyan-800"
              >
                Get Factory Price
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell">
            <h2 className="text-3xl font-bold text-ink">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="rounded border border-cyan-100 bg-white p-6">
                  <h3 className="text-lg font-bold text-ink">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
