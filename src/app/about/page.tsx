import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, MapPin, Heart, Zap, Users, ArrowRight } from "lucide-react";
import { waLink, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | KS Web & Wear — Local Merch Partner",
  description:
    "KS Web & Wear is a local custom T-shirt printing business based in Tallawong, NSW. 2+ years printing for individuals, gyms, and small businesses.",
};

const values = [
  {
    icon: MapPin,
    title: "Local & Accessible",
    desc: "We're based in Tallawong. You can call, WhatsApp, and pickup in person. No warehouses, no chatbots.",
  },
  {
    icon: Heart,
    title: "Real Relationships",
    desc: "We remember your designs, your sizes, and your preferences. Repeat clients are our best clients.",
  },
  {
    icon: Zap,
    title: "Fast & Responsive",
    desc: "Same-day quotes, 3–5 day turnaround. When you need it done, we get it done.",
  },
  {
    icon: Users,
    title: "Built for Communities",
    desc: "Gyms, small businesses, birthday squads — we love printing for groups that care about how they look.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            About Us
          </span>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
            Real People. Local Business.{" "}
            <span className="text-brand-red">Real Prints.</span>
          </h1>
          <p className="font-inter text-white/70 text-xl max-w-2xl mx-auto">
            We&apos;re not a factory, not an online store, and not a generic print
            platform. We&apos;re your local merch partner in Tallawong.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <span className="tag">Our Story</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4 mb-6">
              Started Local. Staying Local.
            </h2>

            <div className="prose prose-lg font-inter text-brand-muted leading-relaxed space-y-5">
              <p>
                KS Web &amp; Wear started over 2 years ago right here in Tallawong,
                NSW. What began as a simple idea — helping people get custom
                printed tees without the hassle of big platforms — has grown
                into a real local business serving individuals, gyms, and small
                businesses across the Hills District and Western Sydney.
              </p>
              <p>
                We use DTF (Direct to Film) printing — one of the best
                technologies available for custom garments. It means full
                colour on any fabric, no minimums, and prints that actually
                last. We don&apos;t do screen printing, heat vinyl, or bargain-bin
                quality. We do it right, or we don&apos;t do it.
              </p>
              <p>
                Our orders come in through WhatsApp and Instagram because
                that&apos;s how real conversations happen. We quote you personally,
                send you a design proof before printing, and you pick up
                locally. No mystery, no hidden fees, no &ldquo;add to cart&rdquo;
                nonsense.
              </p>
              <p>
                Whether you&apos;re after one custom birthday tee or 50 branded
                uniforms for your gym — this is the place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="tag">What We Stand For</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card flex gap-5">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon size={22} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-sora font-bold text-brand-navy text-lg mb-2">
                    {v.title}
                  </h3>
                  <p className="font-inter text-brand-muted text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="section-padding bg-brand-navy">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2+", label: "Years in Business" },
              { value: "500+", label: "Orders Completed" },
              { value: "3–5", label: "Day Turnaround" },
              { value: "100%", label: "Local Pickup Option" },
            ].map((stat) => (
              <div key={stat.label} className="py-4">
                <div className="font-sora font-bold text-4xl md:text-5xl text-brand-red mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-white/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Pickup */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="tag">Where to Find Us</span>
            <h2 className="font-sora font-bold text-3xl text-brand-navy mt-4 mb-4">
              Based in Tallawong, NSW
            </h2>
            <p className="font-inter text-brand-muted text-lg mb-8">
              We&apos;re local to Tallawong (2762) — serving the Hills District and
              greater Western Sydney. Local pickup is always available.
              Confirm pickup time via WhatsApp.
            </p>

            <div className="card inline-block text-left mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red mt-0.5" />
                <div>
                  <p className="font-sora font-semibold text-brand-navy">
                    {SITE_CONFIG.location}
                  </p>
                  <p className="font-inter text-brand-muted text-sm mt-0.5">
                    Near Rouse Hill, Schofields, Marsden Park, Kellyville
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLink("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-4"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn-outline px-8 py-4 justify-center">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
