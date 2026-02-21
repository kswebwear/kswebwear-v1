import { MapPin, Clock, Users, Zap } from "lucide-react";

const stats = [
  { value: "2+", label: "Years Local", icon: Clock },
  { value: "500+", label: "Orders Completed", icon: Users },
  { value: "3–5", label: "Day Turnaround", icon: Zap },
  { value: "100%", label: "DTF Quality", icon: MapPin },
];

export default function LocalTrustSection() {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.15),transparent_60%)]" />

      <div className="relative section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div>
            <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
              Why Choose Us
            </span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-6">
              Local. Real. Reliable.
            </h2>
            <p className="font-inter text-white/70 text-lg leading-relaxed mb-8">
              We&apos;re not a faceless online store. We&apos;re a real local print shop in
              Tallawong — you can call, WhatsApp, and pickup in person.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Chat directly with your printer — no chatbots, no wait queues",
                "See your design proof before we print a single shirt",
                "Flexible on quantities — singles to bulk batches",
                "DTF printing means vibrant colours on any fabric",
                "Stored DTF files for fast, affordable reorders",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 font-inter text-white/80 text-sm"
                >
                  <span className="w-5 h-5 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-brand-red text-xs font-bold">✓</span>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-200"
              >
                <stat.icon size={24} className="text-brand-red mb-3" />
                <div className="font-sora font-bold text-4xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-inter text-white/60 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
