import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell grid gap-6 md:grid-cols-[1fr_0.8fr_1fr]">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
            LED swimming pool light manufacturer in China, supporting distributors,
            contractors, importers and project buyers with IP68 waterproof lighting
            and OEM custom solutions.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-200">B2B Pages</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/products" className="hover:text-signal">Products</Link>
            <Link href="/applications" className="hover:text-signal">Applications</Link>
            <Link href="/contact#inquiry" className="hover:text-signal">Request a Quote</Link>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-slate-300">Inquiry Email</p>
          <a className="mt-2 block text-lg font-bold text-signal" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
