import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Instagram, ArrowRight, Play } from "lucide-react";
import { waLink, SITE_CONFIG } from "@/lib/constants";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work | KS Web & Wear Portfolio",
  description:
    "See real custom T-shirt printing orders from KS Web & Wear in Tallawong. Events, businesses, and group orders. Follow us on Instagram for fresh work.",
};

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
            We post real completed orders on our Instagram every week —{" "}
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

      {/* Featured Video */}
      <section className="bg-brand-navy py-14">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            {/* Video */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-black">
              <video
                src="/videos/portfolio-showcase.mp4"
                controls
                preload="none"
                playsInline
                className="w-full block"
                aria-label="KS Web & Wear order showcase video"
              />
            </div>
            {/* Text */}
            <div className="flex-1 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 bg-brand-red/20 rounded-full flex items-center justify-center">
                  <Play size={14} className="text-brand-red ml-0.5" />
                </span>
                <span className="font-sora font-semibold text-brand-red text-sm uppercase tracking-widest">
                  Showcase
                </span>
              </div>
              <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-4">
                See the work in action
              </h2>
              <p className="font-inter text-white/70 text-base mb-6 leading-relaxed">
                Every order is packed with care, labelled by size, and ready for
                pickup from Tallawong. This is what a real KS Web &amp; Wear
                order looks like.
              </p>
              <a
                href={waLink("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex"
              >
                <MessageCircle size={18} />
                Start Your Order
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-10">
            <span className="tag">All Orders</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              25+ Real Orders
            </h2>
            <p className="font-inter text-brand-muted mt-2">
              Filter by type or browse the full collage below
            </p>
          </div>

          <PortfolioGrid />

          {/* More on Instagram */}
          <div className="text-center mt-12">
            <p className="font-inter text-brand-muted mb-4">
              See more real orders on our Instagram
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
            Send us your idea and we&apos;ll bring it to life. Minimum 2 shirts,
            2–4 day turnaround.
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
            <Link
              href="/services"
              className="btn-outline-white px-8 py-4 justify-center"
            >
              See Our Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
