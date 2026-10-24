import SectionHeader from "@/components/ks/SectionHeader";
import Steps from "@/components/ks/Steps";
import { HOME_STEPS } from "@/lib/constants";

export default function HomeHow() {
  return (
    <section id="how" className="bg-ks-ink text-ks-paper">
      <div className="ks-container ks-section-y flex flex-col gap-14">
        <SectionHeader number="03" eyebrow="How it works" title="One chat. No forms." onDark />
        <Steps steps={HOME_STEPS} onDark />
      </div>
    </section>
  );
}
