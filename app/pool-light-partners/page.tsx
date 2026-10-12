import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedPoolLight } from "@/components/FeaturedPoolLight";
export const metadata: Metadata = {
  title: "35W RGB + Tuya Pool Lights for Distributors | LANHE",
  description: "Review a LANHE pool light configuration for your distribution range. Request a technical sheet, sample or bulk quotation.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gzlanhe.com/pool-light-partners" },
  openGraph: { title: "35W RGB + Tuya Pool Lights for Distributors", url: "https://gzlanhe.com/pool-light-partners", images: ["/images/products/rgb/rgb-swimming-pool-light-main.jpeg"] }
};
export default function Page() { return <><header className="sales-header"><div className="sales-wrap"><Link className="sales-logo" href="/">LANHE</Link><nav aria-label="Navigation"><Link href="/products">Products</Link><Link href="/catalog">Catalog</Link><a href="#quote">Contact</a></nav></div></header><FeaturedPoolLight campaign/><footer className="sales-footer"><div className="sales-wrap">LANHE Pool Lighting<br/><Link href="/">Home</Link> · <Link href="/contact">Contact factory</Link></div></footer></>; }
