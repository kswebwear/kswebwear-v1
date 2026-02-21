import { Star } from "lucide-react";

// Placeholder testimonials — client to replace with real Google/Instagram reviews
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Birthday Event",
    text: "Ordered 12 matching tees for my birthday weekend. The quality was amazing and they were ready in 4 days. Everyone loved them!",
    stars: 5,
    initial: "S",
  },
  {
    id: 2,
    name: "Jake T.",
    role: "Gym Owner, Blacktown",
    text: "Got our gym branded up with 25 tees and hoodies. Professional result, great communication on WhatsApp, and the price was fair for local.",
    stars: 5,
    initial: "J",
  },
  {
    id: 3,
    name: "Priya K.",
    role: "Small Business Owner",
    text: "Exactly what I needed for our team uniforms. Quick quote, no fuss, picked them up from Tallawong. Will definitely reorder.",
    stars: 5,
    initial: "P",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag">What Clients Say</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
            Real Orders. Real Feedback.
          </h2>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="card hover:border-brand-red/20">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-inter text-brand-muted text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-sora font-bold text-white text-sm">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <p className="font-sora font-semibold text-brand-navy text-sm">
                    {t.name}
                  </p>
                  <p className="font-inter text-brand-muted text-xs">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google reviews note */}
        <p className="text-center mt-8 font-inter text-brand-muted text-sm">
          Follow us on{" "}
          <a
            href="https://instagram.com/kswebwear"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red font-semibold hover:underline"
          >
            @kswebwear
          </a>{" "}
          to see real orders and customer posts.
        </p>
      </div>
    </section>
  );
}
