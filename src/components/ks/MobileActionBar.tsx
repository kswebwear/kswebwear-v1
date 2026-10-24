import { MessageCircle, Phone } from "lucide-react";
import Button from "./Button";
import { SITE_CONFIG, waLink } from "@/lib/constants";

export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-ks-line bg-ks-paper px-4 pb-6 pt-3 md:hidden">
      <Button
        href={waLink("default")}
        size="lg"
        className="flex-1"
        icon={<MessageCircle size={18} aria-hidden="true" />}
      >
        Get a quote
      </Button>
      <a
        href={`tel:${SITE_CONFIG.whatsapp}`}
        aria-label="Call 0410 369 036"
        className="flex min-h-ks-btn w-ks-btn items-center justify-center border-[1.5px] border-ks-ink text-ks-ink"
      >
        <Phone size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
