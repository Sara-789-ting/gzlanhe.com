import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Lanhe Pool Lighting on WhatsApp"
      className="focus-ring fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-[#25d366] px-4 py-3 text-sm font-bold text-white shadow-2xl md:bottom-6 md:left-auto md:right-6 md:w-auto md:rounded-full md:px-5"
    >
      <MessageCircle size={21} aria-hidden="true" />
      <span className="md:hidden">Chat on WhatsApp</span>
      <span className="hidden md:inline">WhatsApp</span>
    </a>
  );
}
