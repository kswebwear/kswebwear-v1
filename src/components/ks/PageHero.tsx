import Eyebrow from "./Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, title, intro, children }: PageHeroProps) {
  return (
    <section className="ks-container flex flex-col gap-6 py-10 md:pb-16 md:pt-[4.5rem]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="ks-display max-w-[14em] text-ks-h1">{title}</h1>
      {intro && <p className="max-w-[34em] text-[19px] leading-[1.55] text-ks-body">{intro}</p>}
      {children && <div className="flex flex-wrap gap-3">{children}</div>}
    </section>
  );
}
