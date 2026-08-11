import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="section-shell grid gap-6 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
            LED swimming pool light manufacturer in China, supporting distributors,
            contractors, importers and project buyers with IP68 waterproof lighting
            and OEM custom solutions.
          </p>
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
