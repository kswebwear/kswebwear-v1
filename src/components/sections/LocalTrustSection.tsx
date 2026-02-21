import { MapPin, Clock, MessageCircle, Package, RefreshCw } from "lucide-react";

const reasons = [
  { icon: MapPin, text: "Tallawong-based small local printer" },
  { icon: Package, text: "Small-batch printing from just 2 shirts" },
  { icon: Clock, text: "Transparent pricing" },
  { icon: MessageCircle, text: "Fast WhatsApp replies" },
  { icon: RefreshCw, text: "Easy repeat orders" },
];

export default function LocalTrustSection() {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.15),transparent_60%)]" />

      <div className="relative section-container">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Why Work With Us
          </span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white">
            Local. Honest. Reliable.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.text}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors duration-200"
            >
              <reason.icon size={24} className="text-brand-red mx-auto mb-3" />
              <p className="font-inter text-white/80 text-sm leading-snug">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
