import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function HomeCTASection() {
  return (
    <section className="section-padding bg-brand-navy">
      <div className="section-container text-center">
        <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">
          Need Shirts This Week?
        </h2>
        <p className="font-inter text-white/80 text-lg mb-10 max-w-lg mx-auto">
          Minimum 2 shirts per order. Fast turnaround. Tallawong pickup
          available.
        </p>

        <a
          href={waLink("default")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-brand-whatsapp text-white font-sora font-bold px-10 py-5 rounded-full shadow-2xl hover:bg-green-500 active:scale-95 transition-all duration-200 text-lg"
        >
          <MessageCircle size={24} />
          Message Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
