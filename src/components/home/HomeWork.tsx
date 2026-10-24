import SectionHeader from "@/components/ks/SectionHeader";
import WorkCard from "@/components/ks/WorkCard";
import Button from "@/components/ks/Button";
import { HOME_WORK, SITE_CONFIG } from "@/lib/constants";

export default function HomeWork() {
  return (
    <section id="work" className="ks-container ks-section-y flex flex-col gap-10">
      <SectionHeader
        number="02"
        eyebrow="Recent orders"
        title="Real orders, printed here."
        aside={
          <Button variant="link" href={SITE_CONFIG.instagram}>
            More on Instagram {SITE_CONFIG.instagramHandle}
          </Button>
        }
      />
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-3">
        {HOME_WORK.map((item) => (
          <WorkCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
