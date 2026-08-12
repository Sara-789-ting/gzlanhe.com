import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Factory, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactActions } from "@/components/ContactActions";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { ProductJsonLd } from "@/components/ProductJsonLd";
import { getProductBySlug, productPages } from "@/lib/productPages";
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
                {product.shortName}
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
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                Product Introduction
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Built for B2B supply and project requirements
              </h2>
              <p className="mt-5 leading-8 text-slate-600">{product.description}</p>
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

        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">Advantages</p>
              <h2 className="mt-3 text-3xl font-bold text-ink">Product Advantages</h2>
              <div className="mt-6 grid gap-4">
                {product.advantages.map((item) => (
                  <div key={item} className="rounded border border-slate-200 p-5">
                    <p className="font-bold text-ink">{item}</p>
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
                    <p className="font-bold">{item}</p>
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
      </main>
      <Footer />
    </>
  );
}
