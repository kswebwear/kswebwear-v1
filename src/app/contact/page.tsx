import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { waLink, SITE_CONFIG, WHATSAPP_MESSAGES } from "@/lib/constants";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Get a Quote | Contact KS Web & Wear",
  description:
    "Get a custom printing quote from KS Web & Wear in Tallawong. WhatsApp us directly or fill in the contact form. Same-day quotes.",
};

const enquiryTypes = [
  { label: "Custom T-Shirts (Individual)", key: "individual" as const },
  { label: "Gym / PT Merch", key: "gym" as const },
  { label: "Business Merch Pack", key: "business" as const },
  { label: "Starter Pack (10 tees – $300)", key: "starter" as const },
  { label: "Team Pack (25 tees – $720)", key: "team" as const },
  { label: "Brand Builder (50 tees – $1,350)", key: "brandBuilder" as const },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="section-container text-center">
          <span className="inline-block bg-brand-red/20 text-brand-red font-sora font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Get a Quote
          </span>
          <h1 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
            Let&apos;s Get Printing
          </h1>
          <p className="font-inter text-white/70 text-xl max-w-xl mx-auto">
            The fastest way to get a quote is WhatsApp — we reply same day.
            Or fill out the form below and we&apos;ll come back to you.
          </p>
        </div>
      </section>

      {/* Quick enquiry types */}
      <div className="bg-brand-red">
        <div className="section-container py-6">
          <p className="font-sora font-semibold text-white text-sm text-center mb-4">
            Quick WhatsApp Enquiry — Tap the one that fits:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {enquiryTypes.map((type) => (
              <a
                key={type.key}
                href={waLink(type.key)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-inter bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {type.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-sora font-bold text-2xl text-brand-navy mb-6">
                Contact Details
              </h2>

              {/* WhatsApp — primary */}
              <div className="card mb-4 border-brand-whatsapp/30 bg-green-50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-whatsapp rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-brand-navy mb-1">
                      WhatsApp (Fastest)
                    </p>
                    <a
                      href={waLink("default")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-brand-muted text-sm hover:text-brand-whatsapp transition-colors"
                    >
                      {SITE_CONFIG.whatsapp}
                    </a>
                    <p className="font-inter text-xs text-brand-muted mt-1">
                      Same-day response · Mon–Sat
                    </p>
                  </div>
                </div>
                <a
                  href={waLink("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center mt-4"
                >
                  <MessageCircle size={18} />
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Email */}
              <div className="card mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-brand-navy mb-1">Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-inter text-brand-muted text-sm hover:text-brand-red transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="font-inter text-xs text-brand-muted mt-1">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-brand-navy mb-1">
                      Pickup Location
                    </p>
                    <p className="font-inter text-brand-muted text-sm">
                      {SITE_CONFIG.location}
                    </p>
                    <p className="font-inter text-xs text-brand-muted mt-1">
                      Pickup by appointment — confirm via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-brand-navy mb-2">
                      Response Hours
                    </p>
                    <div className="flex flex-col gap-1 font-inter text-sm">
                      <div className="flex justify-between gap-4">
                        <span className="text-brand-muted">Mon–Fri</span>
                        <span className="text-brand-navy font-medium">9am – 6pm</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-brand-muted">Saturday</span>
                        <span className="text-brand-navy font-medium">10am – 3pm</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="text-brand-muted">Sunday</span>
                        <span className="text-brand-muted">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Instagram size={22} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sora font-semibold text-brand-navy mb-1">Instagram</p>
                    <a
                      href={SITE_CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-brand-muted text-sm hover:text-brand-red transition-colors"
                    >
                      {SITE_CONFIG.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact form */}
            <div className="lg:col-span-3">
              <h2 className="font-sora font-bold text-2xl text-brand-navy mb-6">
                Send Us Your Brief
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
