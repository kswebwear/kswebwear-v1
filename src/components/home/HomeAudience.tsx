import SectionHeader from "@/components/ks/SectionHeader";
import { HOME_AUDIENCES } from "@/lib/constants";

export default function HomeAudience() {
  return (
    <section className="ks-container ks-section-y flex flex-col gap-10">
      <SectionHeader number="04" eyebrow="Who we print for" title="Small runs, done properly." />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {HOME_AUDIENCES.map((item) => (
          <div key={item.title} className="flex flex-col gap-3 border-t-2 border-ks-ink pt-5">
            <h3 className="ks-title text-ks-h3">{item.title}</h3>
            <p className="text-base leading-[1.55] text-ks-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
