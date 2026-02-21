import { Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-lg mx-auto">
          <span className="tag">See Our Work</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4 mb-4">
            Real Orders. Real Results.
          </h2>
          <p className="font-inter text-brand-muted text-lg mb-8">
            Follow us on Instagram to see completed orders, customer pickups,
            and fresh prints posted weekly.
          </p>
          <a
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4"
          >
            <Instagram size={20} />
            Follow @kswebwear
          </a>
        </div>
      </div>
    </section>
  );
}
