import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
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
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ocean">
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="/contact"
          className="focus-ring rounded bg-signal px-4 py-2 text-sm font-bold text-ink shadow-sm hover:bg-amber-300"
        >
          Get Quote
        </a>
      </div>
    </header>
  );
}
