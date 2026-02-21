import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Instagram, ArrowRight } from "lucide-react";
import { waLink, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work | KS Web & Wear Portfolio",
  description:
    "See real custom T-shirt printing and merch orders from KS Web & Wear in Tallawong. Gyms, businesses, and individual orders. Follow us on Instagram for fresh work.",
};

const categories = ["All", "Individual", "Gym", "Business", "Oversized", "Event"];

// Portfolio grid items — placeholders until real photos are added
const portfolioItems = [
  { id: 1, title: "Custom Event Tees", category: "Event", desc: "12-piece birthday crew set", color: "from-orange-400 to-red-500" },
  { id: 2, title: "Gym Staff Uniforms", category: "Gym", desc: "25-piece team pack", color: "from-blue-500 to-indigo-600" },
  { id: 3, title: "Small Biz Uniforms", category: "Business", desc: "10-piece starter pack", color: "from-gray-700 to-gray-900" },
  { id: 4, title: "Birthday Crew Tees", category: "Individual", desc: "6-piece custom design", color: "from-pink-500 to-purple-600" },
  { id: 5, title: "Oversized Streetwear", category: "Oversized", desc: "Drop collection", color: "from-green-500 to-teal-600" },
  { id: 6, title: "PT Branding Pack", category: "Gym", desc: "Personal trainer uniforms", color: "from-yellow-500 to-orange-500" },
  { id: 7, title: "Corporate Merch", category: "Business", desc: "Brand Builder pack", color: "from-slate-600 to-slate-800" },
  { id: 8, title: "Suburb Community Tees", category: "Individual", desc: "Tallawong locals run", color: "from-teal-500 to-cyan-600" },
  { id: 9, title: "Gym Hoodie Drop", category: "Gym", desc: "Winter merch collection", color: "from-red-600 to-rose-800" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Portfolio
          </span>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
            Fresh Off The Press
          </h1>
          <p className="font-inter text-white/70 text-xl max-w-2xl mx-auto mb-8">
            Real orders. Real clients. Real local. Follow us on Instagram for
            fresh work posted weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white px-6 py-3"
            >
              <Instagram size={18} />
              Follow @kswebwear
            </a>
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-6 py-3"
            >
              <MessageCircle size={18} />
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Instagram live feed note */}
      <div className="bg-brand-red/10 border-b border-brand-red/20">
        <div className="section-container py-4">
          <p className="font-inter text-brand-navy text-sm text-center">
            📸 We post real completed orders on our Instagram every week —{" "}
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-red hover:underline"
            >
              @kswebwear
            </a>{" "}
            is the most up-to-date gallery of our work.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          {/* Category filters (visual only — no JS filtering needed in V1) */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-sora font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                  cat === "All"
                    ? "bg-brand-navy text-white"
                    : "bg-white border border-gray-200 text-brand-muted hover:border-brand-red hover:text-brand-red"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className={`relative aspect-square rounded-2xl bg-gradient-to-br ${item.color} overflow-hidden group`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-sora font-semibold bg-white/20 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Placeholder indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="font-sora font-bold text-white text-6xl">📸</span>
                </div>

                {/* Hover reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-sora font-semibold text-white text-sm">
                    {item.title}
                  </p>
                  <p className="font-inter text-white/70 text-xs mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More on Instagram */}
          <div className="text-center mt-12">
            <p className="font-inter text-brand-muted mb-4">
              See hundreds more real orders on our Instagram
            </p>
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4"
            >
              <Instagram size={20} />
              View @kswebwear on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy section-padding">
        <div className="section-container text-center">
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">
            Like What You See?
          </h2>
          <p className="font-inter text-white/70 text-lg mb-8 max-w-md mx-auto">
            Send us your idea and we&apos;ll bring it to life. Same-day quotes,
            3–5 day turnaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              <MessageCircle size={20} />
              Get a Quote on WhatsApp
            </a>
            <Link href="/services" className="btn-outline-white px-8 py-4 justify-center">
              See Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
