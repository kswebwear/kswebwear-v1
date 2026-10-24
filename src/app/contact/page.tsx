import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { waLink, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ks/Button";
import PageHero from "@/components/ks/PageHero";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Get a Quote | Contact KS Web & Wear",
  description:
    "Get a custom printing quote from KS Web & Wear in Tallawong. WhatsApp us directly or fill in the contact form. Same-day quotes.",
};

const enquiryTypes = [
  { label: "Events & Celebrations", key: "events" as const },
  { label: "Small Business Order", key: "business" as const },
  { label: "Group & Team Order", key: "group" as const },
  { label: "Bulk Order (10+)", key: "bulk" as const },
];

const hours = [
  { day: "Mon–Fri", time: "9am – 6pm" },
  { day: "Saturday", time: "10am – 3pm" },
  { day: "Sunday", time: "Closed" },
];

const detail = "flex flex-col gap-1 border-t border-ks-line pt-4";
const detailLink = "text-ks-ink underline underline-offset-4 hover:text-ks-accent";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Let's get printing."
        intro="The fastest way to get a quote is WhatsApp. We reply same day. Or fill out the form below and we'll come back to you."
      >
        <Button href={waLink("default")} size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
          Open WhatsApp chat
        </Button>
      </PageHero>

      <section className="border-t border-ks-line">
        <div className="ks-container ks-section-y flex flex-col gap-4">
          <p className="ks-label text-ks-muted">Quick WhatsApp enquiry. Tap the one that fits.</p>
          <div className="flex flex-wrap gap-2">
            {enquiryTypes.map((type) => (
              <a
                key={type.key}
                href={waLink(type.key)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-ks-tap items-center border-[1.5px] border-ks-ink px-5 text-base font-bold text-ks-ink no-underline transition-colors duration-150 hover:bg-ks-ink hover:text-ks-paper"
              >
                {type.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ks-fog">
        <div className="ks-container ks-section-y flex flex-wrap gap-x-20 gap-y-12">
          <div className="flex min-w-0 flex-[1_1_17rem] flex-col gap-5">
            <h2 className="ks-display text-ks-h3 leading-none tracking-[-0.02em]">Contact details</h2>

            <div className={detail}>
              <p className="ks-label text-ks-muted">WhatsApp (fastest)</p>
              <a href={waLink("default")} target="_blank" rel="noopener noreferrer" className={detailLink}>
                {SITE_CONFIG.whatsapp}
              </a>
              <p className="text-sm text-ks-body">Same-day response, Mon–Sat</p>
            </div>

            <div className={detail}>
              <p className="ks-label text-ks-muted">Email</p>
              <a href={`mailto:${SITE_CONFIG.email}`} className={detailLink}>
                {SITE_CONFIG.email}
              </a>
              <p className="text-sm text-ks-body">Response within 24 hours</p>
            </div>

            <div className={detail}>
              <p className="ks-label text-ks-muted">Pickup location</p>
              <p className="text-ks-ink">{SITE_CONFIG.location}</p>
              <p className="text-sm text-ks-body">Pickup by appointment, confirm via WhatsApp</p>
            </div>

            <div className={detail}>
              <p className="ks-label text-ks-muted">Response hours</p>
              <dl className="m-0 flex flex-col gap-1 text-base">
                {hours.map((row) => (
                  <div key={row.day} className="flex justify-between gap-4">
                    <dt className="text-ks-body">{row.day}</dt>
                    <dd className="m-0 font-semibold text-ks-ink">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={detail}>
              <p className="ks-label text-ks-muted">Instagram</p>
              <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" className={detailLink}>
                {SITE_CONFIG.instagramHandle}
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-[999_1_30rem] flex-col gap-6">
            <h2 className="ks-display text-ks-h3 leading-none tracking-[-0.02em]">Send us your brief</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
