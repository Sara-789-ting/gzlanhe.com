import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { ContactActions } from "@/components/ContactActions";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import {
  applicationPages,
  getApplicationBySlug,
  getApplicationProducts
} from "@/lib/applicationPages";
import { blogPosts } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/site";

type ApplicationRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return applicationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ApplicationRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getApplicationBySlug(slug);
  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/applications/${page.slug}`
    },
    keywords: [
      page.keyword,
      "IP68 pool lighting solution",
      "LED pool light manufacturer",
      "pool lighting project supplier"
    ],
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.url}/applications/${page.slug}`,
      images: [{ url: "/images/hero-pool-lights.png", width: 1536, height: 1024 }]
    }
  };
}

export default async function ApplicationDetailPage({ params }: ApplicationRouteProps) {
  const { slug } = await params;
  const page = getApplicationBySlug(slug);
  if (!page) {
    notFound();
  }
  const products = getApplicationProducts(page);
  const projectProducts = page.conversion
    ? products.filter((product) => page.conversion?.recommendedProductSlugs.includes(product.slug))
    : products;
  const relatedGuides = blogPosts.filter((post) =>
    post.targetApplications.some((target) => target.href === `/applications/${page.slug}`)
  );

  return (
    <>
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/applications/${page.slug}`} />
      <FaqJsonLd faqs={page.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Applications", path: "/applications" },
          { name: page.title, path: `/applications/${page.slug}` }
        ]}
      />
      <Header />
      <main>
        <section className="bg-[linear-gradient(120deg,#073847_0%,#075f73_50%,#f7fbfc_50%,#f7fbfc_100%)] py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">
                Application keyword: {page.keyword}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{page.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                {page.introduction}
              </p>
              <ContactActions
                product={page.title}
                primaryLabel="Submit Project Requirement"
                secondaryLabel="Contact Manufacturer"
                leadSource="Application page"
                pagePath={`/applications/${page.slug}`}
              />
            </div>
            <div className="rounded border border-white/30 bg-white p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-ink">Recommended Lighting Solutions</h2>
              <div className="mt-5 grid gap-4">
                {page.recommendedSolutions.map((solution) => (
                  <div key={solution} className="flex gap-3 rounded bg-mist p-4 text-slate-700">
                    <CheckCircle2 className="mt-1 shrink-0 text-ocean" size={20} aria-hidden="true" />
                    <p className="leading-7">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {page.conversion ? (
          <section className="bg-white py-20">
            <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Project Overview</p>
                <h2 className="mt-3 text-3xl font-bold text-ink">Project Lighting Requirements</h2>
                <p className="mt-5 leading-8 text-slate-600">{page.conversion.projectOverview}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {page.conversion.suitableScenes.map((scene) => (
                    <div key={scene} className="rounded border border-cyan-100 bg-mist px-4 py-3 font-semibold text-slate-700">
                      {scene}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <ContactActions
                    product={page.title}
                    compact
                    primaryLabel="Submit Project Requirement"
                    secondaryLabel="Contact Manufacturer"
                    leadSource="Application page"
                    pagePath={`/applications/${page.slug}`}
                  />
                </div>
              </div>
              <div className="rounded border border-cyan-100 bg-mist p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Project Requirement Checklist</p>
                <h2 className="mt-3 text-3xl font-bold text-ink">Send These Details for Project Quotation</h2>
                <div className="mt-6 grid gap-3">
                  {page.conversion.requirementChecklist.map((item) => (
                    <div key={item} className="rounded border border-cyan-100 bg-white px-4 py-3 font-semibold text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="py-20">
          <div className="section-shell grid gap-6 lg:grid-cols-3">
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">IP68 Waterproof Requirements</h2>
              <p className="mt-4 leading-8 text-slate-600">{page.waterproofRequirements}</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">Voltage Options</h2>
              <p className="mt-4 leading-8 text-slate-600">{page.voltageOptions}</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">RGB/RGBW/DMX Control</h2>
              <p className="mt-4 leading-8 text-slate-600">{page.controlOptions}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Project Details</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Installation Considerations</h2>
              <div className="mt-6 grid gap-4">
                {page.installationConsiderations.map((item) => (
                  <div key={item} className="rounded border border-slate-200 p-5">
                    <h3 className="font-bold text-ink">{item}</h3>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded border border-cyan-100 bg-mist p-5">
                <h2 className="text-2xl font-bold text-ink">OEM / Project Customization</h2>
                <p className="mt-4 leading-8 text-slate-700">{page.customization}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Recommended Products</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Products for {page.title}</h2>
              <div className="mt-6 grid gap-4">
                {projectProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                  >
                    <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.metaDescription}</p>
                  </Link>
                ))}
              </div>
              {page.conversion ? (
                <div className="mt-6">
                  <ContactActions
                    product={page.title}
                    compact
                    primaryLabel="Submit Project Requirement"
                    secondaryLabel="Contact Manufacturer"
                    leadSource="Application page"
                    pagePath={`/applications/${page.slug}`}
                  />
                </div>
              ) : null}
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Link
                  href="/factory"
                  className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                >
                  <h3 className="font-bold text-ink">Review Factory Capability</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Check manufacturer and quality-control support before project RFQ.
                  </p>
                </Link>
                <Link
                  href={`/contact?source=Application+page&product=${encodeURIComponent(page.title)}&page=${encodeURIComponent(`/applications/${page.slug}`)}#inquiry`}
                  className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                >
                  <h3 className="font-bold text-ink">Send Project Requirement</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Submit pool size, voltage, control method and quantity for recommendation.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {page.conversion ? (
          <section className="bg-mist py-20">
            <div className="section-shell">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Real Project Image Placeholders</p>
                <h2 className="mt-3 text-3xl font-bold text-ink">Project Images to Add After Confirmation</h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  These placeholders mark the real project and installation images
                  needed later. Do not use generated images or competitor project photos.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {page.conversion.imagePlaceholders.map((image) => (
                  <div key={image.title} className="rounded border border-dashed border-slate-300 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-ink">{image.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      ALT suggestion: {image.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
            <div className="mt-8">
              <ContactActions
                product={page.title}
                compact
                primaryLabel="Submit Project Requirement"
                secondaryLabel="Contact Manufacturer"
                leadSource="Application page"
                pagePath={`/applications/${page.slug}`}
              />
            </div>
          </div>
        </section>

        {relatedGuides.length ? (
          <section className="bg-white py-20">
            <div className="section-shell">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Buyer Guides</p>
                <h2 className="mt-3 text-3xl font-bold text-ink">Related Guides for {page.title}</h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  Review practical buying guides before confirming voltage,
                  waterproof requirements, color control, quantity or project RFQ details.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/blog/${guide.slug}`}
                    className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                  >
                    <h3 className="text-lg font-bold text-ink">{guide.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{guide.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
