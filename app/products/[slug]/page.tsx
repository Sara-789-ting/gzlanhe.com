import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Factory, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactActions } from "@/components/ContactActions";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { ProductJsonLd } from "@/components/ProductJsonLd";
import { applicationPages } from "@/lib/applicationPages";
import { blogPosts } from "@/lib/blogPosts";
import { getProductBySlug, productPages } from "@/lib/productPages";
import type { ProductPage } from "@/lib/productPages";
import { siteConfig } from "@/lib/site";

type ProductRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productPages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {};
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/products/${product.slug}`
    },
    keywords: [
      product.name,
      product.keyword,
      "LED pool light manufacturer",
      "IP68 underwater light supplier",
      "China LED lighting manufacturer",
      "OEM pool light factory"
    ],
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `${siteConfig.url}/products/${product.slug}`,
      images: [{ url: product.image, width: 1536, height: 1024 }]
    }
  };
}

export default async function ProductDetailPage({ params }: ProductRouteProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }
  const relatedProducts = product.relatedSlugs
    .map((relatedSlug) => getProductBySlug(relatedSlug))
    .filter((item): item is ProductPage => Boolean(item));
  const relatedApplications = product.applicationSlugs
    .map((applicationSlug) => applicationPages.find((page) => page.slug === applicationSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedGuides = blogPosts.filter((post) =>
    post.targetProducts.some((target) => target.href === `/products/${product.slug}`)
  );

  return (
    <>
      <ProductJsonLd product={product} />
      <FaqJsonLd faqs={product.faqs} />
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/products/${product.slug}`} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` }
        ]}
      />
      <Header />
      <main>
        <section className="bg-[linear-gradient(120deg,#073847_0%,#075f73_50%,#f7fbfc_50%,#f7fbfc_100%)] py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">
                Core keyword: {product.keyword}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                {product.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                {product.description}
              </p>
              <ContactActions product={product.name} />
            </div>
            <div className="overflow-hidden rounded border border-white/30 bg-white shadow-2xl">
              <Image
                src={product.image}
                alt={`IP68 waterproof RGB swimming pool LED light manufacturer - ${product.name}`}
                width={1536}
                height={1024}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Product Images
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Main image, details, installation and application views
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {product.gallery.map((image) => (
                <div key={`${product.slug}-${image.label}`} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1536}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <p className="px-4 py-3 text-sm font-bold text-ink">{image.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Product Overview</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                {product.name} for {product.searchIntent}
              </h2>
              <p className="mt-5 leading-8 text-slate-600">{product.description}</p>
              <div className="mt-6 rounded border border-cyan-100 bg-mist p-5">
                <h3 className="text-lg font-bold text-ink">B2B Purchasing Focus</h3>
                <p className="mt-3 leading-7 text-slate-700">{product.buyingFocus}.</p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded border border-slate-200 bg-white p-5">
                  <Factory className="mb-3 text-ocean" aria-hidden="true" />
                  <p className="font-bold">Factory Supply</p>
                </div>
                <div className="rounded border border-slate-200 bg-white p-5">
                  <ShieldCheck className="mb-3 text-ocean" aria-hidden="true" />
                  <p className="font-bold">IP68 Focus</p>
                </div>
                <div className="rounded border border-slate-200 bg-white p-5">
                  <BadgeCheck className="mb-3 text-ocean" aria-hidden="true" />
                  <p className="font-bold">OEM Ready</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["OEM Available", "Bulk Order Support", "Custom Logo", "Worldwide Shipping"].map((item) => (
                  <div key={item} className="rounded bg-mist px-4 py-3 font-bold text-ocean">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">Technical Specifications</h2>
              <div className="mt-6 overflow-hidden rounded border border-slate-200">
                <table className="w-full border-collapse text-left text-sm">
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-slate-200 last:border-b-0">
                        <th className="w-2/5 bg-mist px-4 py-4 font-bold text-ink">
                          {spec.label}
                        </th>
                        <td className="px-4 py-4 text-slate-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-3">
            <div className="rounded border border-cyan-100 bg-white p-6 shadow-sm lg:col-span-2">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Key Features</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">What B2B Buyers Should Confirm</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {product.keyFeatures.map((feature) => (
                  <div key={feature} className="rounded border border-slate-200 p-5">
                    <h3 className="font-bold text-ink">{feature}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded border border-cyan-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Installation</p>
              <h2 className="mt-3 text-2xl font-bold text-ink">Project Installation Notes</h2>
              <p className="mt-4 leading-8 text-slate-600">{product.installation}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Advantages</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Why Choose Lanhe for {product.name}</h2>
              <div className="mt-6 grid gap-4">
                {product.advantages.map((item) => (
                  <div key={item} className="rounded border border-slate-200 p-5">
                    <h3 className="font-bold text-ink">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Applications</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Application Scenarios</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.applications.map((item) => (
                  <div key={item} className="rounded bg-ink p-5 text-white">
                    <h3 className="font-bold">{item}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Suitable for distributors, contractors and project buyers.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="text-2xl font-bold text-ink">Available Options</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {product.availableOptions.map((option) => (
                  <div key={option} className="rounded bg-mist p-4">
                    <h3 className="font-bold text-ink">{option}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">OEM/ODM Support</h2>
              <p className="mt-4 leading-8 text-slate-600">{product.oem}</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">MOQ Information</h2>
              <p className="mt-4 leading-8 text-slate-600">{product.moq}</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-ink">Certification</h2>
              <p className="mt-4 leading-8 text-slate-600">
                {product.certification}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Application Links</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Where Buyers Use {product.name}</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Review application pages to compare IP68 waterproof requirements,
                voltage options, RGB/RGBW control and project installation details.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedApplications.map((application) => (
                <Link
                  key={application.slug}
                  href={`/applications/${application.slug}`}
                  className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                >
                  <h3 className="text-lg font-bold text-ink">{application.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{application.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell">
            <h2 className="text-3xl font-bold text-ink">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="rounded border border-cyan-100 bg-white p-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact#inquiry"
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded bg-ocean px-6 py-3 font-bold text-white hover:bg-cyan-800"
            >
              Get Quote
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        {relatedGuides.length ? (
          <section className="bg-white py-20">
            <div className="section-shell">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">Related Guides</p>
                <h2 className="mt-3 text-3xl font-bold text-ink">Buyer Guides for {product.name}</h2>
                <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                  Review purchasing guides before confirming voltage, waterproof
                  requirements, OEM details or project specifications.
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

        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Internal Links</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Related Pool Lighting Products</h2>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                Buyers comparing {product.keyword} can also review related LED pool
                light, underwater lighting and OEM solution pages before sending an RFQ.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {relatedProducts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/products/${related.slug}`}
                  className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                >
                  <h3 className="text-lg font-bold text-ink">{related.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{related.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
