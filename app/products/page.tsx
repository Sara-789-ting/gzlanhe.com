import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Cable, Factory, PackageCheck, SlidersHorizontal } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { catalogSupportItems, productCatalogCategories } from "@/lib/productCatalog";
import { productPages } from "@/lib/productPages";

export const metadata: Metadata = {
  title: "LED Pool Light Products",
  description:
    "Explore LED swimming pool lights, underwater pool lights, RGB pool lights, fountain lights and SPA pool lights from a China LED pool light manufacturer.",
  alternates: {
    canonical: "https://gzlanhe.com/products"
  },
  keywords: [
    "LED pool light products",
    "LED swimming pool light",
    "underwater pool light",
    "RGB pool light",
    "fountain light",
    "SPA pool light"
  ]
};

export default function ProductsPage() {
  const productBySlug = new Map(productPages.map((product) => [product.slug, product]));
  const featuredProducts = [
    "ip68-underwater-led-pool-light",
    "rgb-swimming-pool-light",
    "dmx512-pool-light",
    "fountain-led-light"
  ]
    .map((slug) => productBySlug.get(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-20 text-white">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-signal">
                Product Center
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                LED Pool Light Product Catalog
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Browse LED pool lights, underwater lights, RGB/DMX lighting,
                fountain lights and OEM supply programs. This product center is
                built for overseas distributors, contractors, importers and
                project purchasing teams.
              </p>
              <ContactActions
                product="LED Pool Light Product Catalog"
                primaryLabel="Get Product Catalog"
                secondaryLabel="Contact Manufacturer"
                whatsappLabel="Talk to Lighting Expert"
                leadSource="Products catalog page"
                pagePath="/products"
              />
            </div>
            <div className="overflow-hidden rounded border border-white/20 bg-white">
              <Image
                src="/images/factory/led-pool-light-workshop-hero.jpg"
                alt="LED pool light product categories"
                width={1279}
                height={1706}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {productCatalogCategories.map((category) => (
                <a
                  key={category.title}
                  href={`#${category.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "")}`}
                  className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded bg-mist text-ocean">
                    <Boxes aria-hidden="true" size={21} />
                  </div>
                  <h2 className="text-lg font-bold text-ink">{category.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{category.subtitle}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell">
            <div className="mb-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                  Featured Product Lines
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink">
                  Core products buyers usually check first
                </h2>
              </div>
              <p className="leading-8 text-slate-600">
                These pages already have stronger product photos and purchasing
                information. They should be the first product pages used in
                customer development emails, Google indexing and RFQ follow-up.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="focus-ring group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    width={product.imageWidth ?? 900}
                    height={product.imageHeight ?? 900}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {product.keyword}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-ocean">
                      View Details
                      <ArrowRight size={17} className="transition group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {productCatalogCategories.map((category) => {
          const categoryId = category.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "");
          const categoryProducts = category.productSlugs
            .map((slug) => productBySlug.get(slug))
            .filter((product): product is NonNullable<typeof product> => Boolean(product));

          return (
            <section key={category.title} id={categoryId} className="bg-white py-20">
              <div className="section-shell">
                <div className="mb-10 grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                      Product Category
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-ink">{category.title}</h2>
                  </div>
                  <div className="rounded border border-cyan-100 bg-mist p-5">
                    <p className="font-bold text-ink">{category.subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {category.buyerIntent}
                    </p>
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <Link
                      key={`${category.title}-${product.slug}`}
                      href={`/products/${product.slug}`}
                      className="focus-ring group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="mb-5 grid h-12 w-12 place-items-center rounded bg-mist text-ocean">
                        <PackageCheck aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-ink">{product.name}</h3>
                      <p className="mt-3 min-h-24 leading-7 text-slate-600">
                        {product.description}
                      </p>
                      <div className="mt-5 grid gap-2 text-sm text-slate-600">
                        <span>
                          <strong className="text-ink">Keyword:</strong> {product.keyword}
                        </span>
                        <span>
                          <strong className="text-ink">Focus:</strong> IP68 / OEM / B2B RFQ
                        </span>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 font-bold text-ocean">
                        View Product Page
                        <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="bg-ink py-20 text-white">
          <div className="section-shell">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-signal">
                Controllers & Accessories Framework
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Support products buyers often ask about before quotation
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Sundy-style product catalogs usually include controllers, power
                supplies and accessories. These sections are now prepared as B2B
                RFQ entry points and can become detailed pages after real product
                photos and specifications are confirmed.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {catalogSupportItems.map((item, index) => {
                const Icon = index === 0 ? SlidersHorizontal : index === 1 ? Cable : Factory;
                return (
                  <div key={item.title} className="rounded border border-white/15 bg-white/8 p-6">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded bg-white text-ocean">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                    <p className="mt-5 rounded bg-white/10 px-4 py-3 text-sm font-bold text-cyan-100">
                      {item.status}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8">
              <ContactActions
                product="Pool light controller and accessory requirements"
                primaryLabel="Ask for Matching Solution"
                secondaryLabel="Send Accessory RFQ"
                whatsappLabel="Discuss on WhatsApp"
                leadSource="Products catalog support section"
                pagePath="/products"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                RFQ Preparation
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Information to prepare before asking for factory price
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                For faster quotation, buyers should send product type, quantity,
                voltage, application, installation method, control method and
                destination country.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Product model or product category",
                "Quantity for sample, project or bulk order",
                "Voltage: 12V, 24V or project requirement",
                "RGB, RGBW, DMX512 or white light",
                "Installation method and cable requirement",
                "Destination country and target market"
              ].map((item) => (
                <div key={item} className="rounded border border-slate-200 bg-white p-4 font-semibold text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wide text-ocean">
                All Product SEO Pages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Complete product page index
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {productPages.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="focus-ring group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded bg-mist text-ocean">
                  <PackageCheck aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-ink">{product.name}</h2>
                <p className="mt-3 min-h-24 leading-7 text-slate-600">
                  {product.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-ocean">
                  View Product Page
                  <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
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
