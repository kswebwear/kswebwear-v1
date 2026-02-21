import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function HomeCTASection() {
  return (
    <section className="section-padding bg-brand-red">
      <div className="section-container text-center">
        <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">
          Ready to Get Printing?
        </h2>
        <p className="font-inter text-white/80 text-lg mb-10 max-w-lg mx-auto">
          Send us a WhatsApp with your idea and we&apos;ll come back with a quote —
          usually the same day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-red font-sora font-bold px-8 py-4 rounded-full shadow-xl hover:bg-gray-100 active:scale-95 transition-all duration-200 text-base"
          >
            <MessageCircle size={20} />
            Get a Quote on WhatsApp
          </a>
          <Link
            href="/contact"
            className="btn-outline-white px-8 py-4 text-base justify-center"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>

        <p className="mt-8 text-white/60 font-inter text-sm">
          Limited daily print capacity.{" "}
          Or email us at{" "}
          <a
            href="mailto:admin@kswebwear.com"
            className="text-white font-semibold hover:underline"
          >
            admin@kswebwear.com
          </a>
        </p>
      </div>
    </section>
  );
}
