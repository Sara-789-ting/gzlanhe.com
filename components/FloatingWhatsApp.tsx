import { WhatsAppLink } from "@/components/WhatsAppLink";

export function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      floating source="Floating WhatsApp"
      className="focus-ring fixed bottom-0 left-0 right-0 z-50 flex min-h-14 items-center justify-center gap-2 bg-emerald-700 px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))] text-sm font-bold text-white shadow-lg md:bottom-6 md:left-auto md:right-6 md:w-auto md:rounded-md md:px-5"
    >
      <span>Get WhatsApp quote</span>
    </WhatsAppLink>
  );
}
