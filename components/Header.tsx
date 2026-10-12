import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Catalog", href: "/catalog" },
  { label: "Guides", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Factory", href: "/factory" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-ink">
          <span className="grid h-10 w-10 place-items-center rounded bg-ocean text-white">
            LH
          </span>
          <span>
            {siteConfig.name}
            <span className="block text-xs font-medium text-slate-500">
              Pool Lighting Manufacturer
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ocean">
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative ml-auto xl:hidden">
          <summary className="focus-ring cursor-pointer rounded px-2 py-2 text-sm font-bold">Menu</summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-full z-50 grid w-56 gap-1 rounded border border-slate-200 bg-white p-3 shadow-lg">
            {navItems.map((item) => <Link key={item.href} href={item.href} className="focus-ring px-3 py-2 text-sm hover:bg-mist">{item.label}</Link>)}
          </nav>
        </details>
        <a
          href="/contact?source=Navigation#inquiry"
          className="focus-ring hidden shrink-0 rounded bg-signal px-4 py-2 text-sm font-bold text-ink shadow-sm hover:bg-amber-300 sm:block"
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}
