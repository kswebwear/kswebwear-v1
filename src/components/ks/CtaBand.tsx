export default function CtaBand({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-ks-accent text-ks-paper">
      <div className="ks-container flex flex-wrap items-center justify-between gap-8 py-16 md:py-[5.5rem]">
        <h2 className="ks-display max-w-[12em] text-[length:clamp(36px,5vw,64px)] leading-[0.98]">{title}</h2>
        {children}
      </div>
    </section>
  );
}
