import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ks/Button";
import { SITE_CONFIG, waLink } from "@/lib/constants";

const facts = [
  { label: "From", value: "$26 / shirt" },
  { label: "Minimum", value: "2 shirts" },
  { label: "Ready in", value: "2–4 days" },
];

export default function HomeHero() {
  return (
    <section id="top" className="ks-container flex flex-wrap items-stretch gap-x-14 gap-y-10 py-10 md:pb-20 md:pt-[4.5rem]">
      <div className="flex min-w-0 flex-[1_1_30rem] flex-col justify-center gap-7">
        <p className="ks-label text-ks-muted">Custom t-shirt printing, Western Sydney</p>
        <h1 className="ks-display text-ks-h1">
          Your design.
          <br />
          On a shirt.
          <br />
          In 2–4 days.
        </h1>
        <p className="max-w-[30em] text-[19px] leading-[1.55] text-ks-body">
          Send us a logo, a photo or a rough idea on WhatsApp. We send a proof, you approve it, and your shirts are
          ready to collect in Tallawong. Minimum 2 shirts.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href={waLink("default")} size="lg" icon={<MessageCircle size={20} aria-hidden="true" />}>
            Get a quote on WhatsApp
          </Button>
          <Button href={SITE_CONFIG.designerUrl} variant="secondary" size="lg">
            Design it online
          </Button>
        </div>
        <dl className="m-0 grid grid-cols-3 gap-4 border-t border-ks-line pt-5">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <dt className="ks-label text-ks-muted">{fact.label}</dt>
              <dd className="ks-title m-0 text-lg sm:text-2xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid min-h-[22rem] min-w-0 flex-[1_1_26rem] grid-cols-2 gap-3 md:min-h-[32.5rem]">
        <div className="relative row-span-2 bg-ks-placeholder">
          <Image
            src="/images/portfolio/family-vacation-black.jpeg"
            alt="Six matching family vacation tees printed for a customer"
            fill
            priority
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="relative bg-ks-placeholder">
          <Image
            src="/images/portfolio/super-dad-shirt.png"
            alt="Super Dad Father's Day tee"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between bg-ks-ink p-5 text-ks-paper">
          <span className="ks-label text-ks-on-dark-muted">Local pickup</span>
          <span className="ks-title text-[length:var(--ks-h3)] leading-[1.15]">
            Tallawong, NSW. Delivery for larger orders.
          </span>
        </div>
      </div>
    </section>
  );
}
