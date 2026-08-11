import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PackageCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { productPages } from "@/lib/productPages";

export const metadata: Metadata = {
  title: "LED Pool Light Products",
  description:
    "Explore LED swimming pool lights, underwater pool lights, RGB pool lights, fountain lights and SPA pool lights from a China LED pool light manufacturer.",
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
                LED Pool Light Products
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Browse B2B product pages for LED pool lights, underwater pool
                lights, RGB pool lights, fountain lights and SPA pool lights.
                Each page is built for Google SEO and factory inquiry conversion.
              </p>
            </div>
            <div className="overflow-hidden rounded border border-white/20 bg-white">
              <Image
                src="/images/hero-pool-lights.png"
                alt="LED pool light product categories"
                width={1536}
                height={1024}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
