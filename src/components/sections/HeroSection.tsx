import Link from "next/link";
import { MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-black opacity-90" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative section-container py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-inter px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <MapPin size={12} className="text-brand-red" />
            Tallawong, NSW 2762
          </div>

          {/* Headline */}
          <h1 className="font-sora font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Custom T-Shirt Printing{" "}
            <br className="hidden sm:block" />
            in <span className="text-brand-red">Tallawong</span>
          </h1>

          {/* Sub-headline */}
          <p className="font-inter text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
            Birthdays, businesses &amp; group events. Minimum 2 shirts per order.
            Fast pickup available.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4 shadow-2xl shadow-green-900/30"
            >
              <MessageCircle size={20} />
              Get a Quote on WhatsApp
            </a>

            <Link
              href="/portfolio"
              className="btn-outline-white text-base px-8 py-4"
            >
              View Recent Work
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Micro-trust */}
          <p className="mt-6 text-white/40 font-inter text-xs">
            Local pickup &middot; Fast replies &middot; Transparent pricing
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
