import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { ContactActions } from "@/components/ContactActions";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogPosts";
import { siteConfig } from "@/lib/site";

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`
    },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const relatedGuides = blogPosts
    .filter((guide) => guide.slug !== post.slug)
    .filter((guide) => {
      const productOverlap = guide.targetProducts.some((guideProduct) =>
        post.targetProducts.some((postProduct) => postProduct.href === guideProduct.href)
      );
      const applicationOverlap = guide.targetApplications.some((guideApplication) =>
        post.targetApplications.some((postApplication) => postApplication.href === guideApplication.href)
      );
      return productOverlap || applicationOverlap;
    })
    .slice(0, 3);

  return (
    <>
      <ArticleJsonLd post={post} />
      <FaqJsonLd faqs={post.faqs} />
      <OrganizationJsonLd pageUrl={`${siteConfig.url}/blog/${post.slug}`} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Buyer Guides", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ]}
      />
      <Header />
      <main>
        <section className="bg-[linear-gradient(120deg,#073847_0%,#075f73_55%,#f7fbfc_55%,#f7fbfc_100%)] py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-100">
                Buyer Guide · {post.buyerStage}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50">
                Primary keyword: {post.primaryKeyword}
              </p>
              <ContactActions
                product={post.ctaProduct}
                leadSource="Blog"
                pagePath={`/blog/${post.slug}`}
              />
            </div>
            <div className="rounded border border-white/30 bg-white p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-ink">Procurement Focus</h2>
              <div className="mt-5 grid gap-3 text-sm text-slate-700">
                <p>
                  <span className="font-bold text-ink">Search intent:</span> {post.searchIntent}
                </p>
                <p>
                  <span className="font-bold text-ink">Buyer stage:</span> {post.buyerStage}
                </p>
                <p>
                  <span className="font-bold text-ink">Best for:</span> importers,
                  distributors, contractors and project buyers preparing RFQs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="h-max rounded border border-slate-200 bg-mist p-6 lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-ink">Table of Contents</h2>
              <nav className="mt-5 grid gap-3 text-sm font-bold text-ocean">
                {post.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="hover:text-cyan-800">
                    {section.heading}
                  </a>
                ))}
                <a href="#faq" className="hover:text-cyan-800">FAQ</a>
                <a href="#rfq" className="hover:text-cyan-800">Request a Quote</a>
              </nav>
            </aside>

            <article className="rounded border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="space-y-5 text-lg leading-8 text-slate-700">
                {post.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="my-10 rounded border border-cyan-100 bg-mist p-6">
                <h2 className="text-2xl font-bold text-ink">Quick RFQ Checklist</h2>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    "Project type",
                    "Pool size",
                    "Voltage",
                    "Light quantity",
                    "RGB/RGBW requirement",
                    "Control method",
                    "Destination country",
                    "Estimated quantity"
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded bg-white p-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-ocean" size={18} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <ContactActions
                    product={post.ctaProduct}
                    compact
                    leadSource="Blog"
                    pagePath={`/blog/${post.slug}`}
                  />
                </div>
              </div>

              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24 border-t border-slate-200 py-10">
                  <h2 className="text-3xl font-bold text-ink">{section.heading}</h2>
                  {section.paragraphs ? (
                    <div className="mt-5 space-y-5 leading-8 text-slate-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-3 leading-7 text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 className="mt-1 shrink-0 text-ocean" size={18} aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.table ? (
                    <div className="mt-6 overflow-hidden rounded border border-slate-200">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead className="bg-mist text-ink">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} className="px-4 py-4 font-bold">{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")} className="border-t border-slate-200">
                              {row.map((cell) => (
                                <td key={cell} className="px-4 py-4 leading-6 text-slate-700">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}

              <section className="border-t border-slate-200 py-10">
                <h2 className="text-3xl font-bold text-ink">Related Product Pages</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {post.targetProducts.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                    >
                      <h3 className="font-bold text-ink">{product.label}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Review product specifications and factory quotation information.
                      </p>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="border-t border-slate-200 py-10">
                <h2 className="text-3xl font-bold text-ink">Related Applications</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {post.targetApplications.map((application) => (
                    <Link
                      key={application.href}
                      href={application.href}
                      className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                    >
                      <h3 className="font-bold text-ink">{application.label}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Compare application requirements before choosing pool lighting models.
                      </p>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="border-t border-slate-200 py-10">
                <h2 className="text-3xl font-bold text-ink">Manufacturer and RFQ Support</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Link
                    href="/factory"
                    className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                  >
                    <h3 className="font-bold text-ink">Review Factory Capability</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Check manufacturer, production and quality-control information before choosing a supplier.
                    </p>
                  </Link>
                  <Link
                    href={`/contact?source=Blog&product=${encodeURIComponent(post.ctaProduct)}&page=${encodeURIComponent(`/blog/${post.slug}`)}#inquiry`}
                    className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                  >
                    <h3 className="font-bold text-ink">Send RFQ to Manufacturer</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Send project type, voltage, quantity, control method and destination country for recommendation.
                    </p>
                  </Link>
                </div>
              </section>

              {relatedGuides.length ? (
                <section className="border-t border-slate-200 py-10">
                  <h2 className="text-3xl font-bold text-ink">Related Buyer Guides</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {relatedGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={`/blog/${guide.slug}`}
                        className="focus-ring rounded border border-slate-200 bg-slate-50 p-5 transition hover:border-ocean hover:bg-white"
                      >
                        <h3 className="font-bold text-ink">{guide.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{guide.metaDescription}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              <section id="faq" className="scroll-mt-24 border-t border-slate-200 py-10">
                <h2 className="text-3xl font-bold text-ink">FAQ</h2>
                <div className="mt-6 grid gap-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded border border-slate-200 bg-mist p-5">
                      <h3 className="text-lg font-bold text-ink">{faq.question}</h3>
                      <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="rfq" className="scroll-mt-24 rounded bg-ink p-6 text-white md:p-8">
                <h2 className="text-3xl font-bold">Send Your Project Requirements</h2>
                <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                  Share your project type, pool size, voltage, quantity, control
                  method and destination country. Lanhe Pool Lighting will help
                  recommend suitable LED pool light options before quotation.
                </p>
                <ContactActions
                  product={post.ctaProduct}
                  leadSource="Blog"
                  pagePath={`/blog/${post.slug}`}
                />
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
