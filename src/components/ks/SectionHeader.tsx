import clsx from "clsx";
import Eyebrow from "./Eyebrow";

interface SectionHeaderProps {
  number?: string;
  eyebrow: string;
  title: string;
  /** Right-hand note or link, aligned to the baseline of the heading. */
  aside?: React.ReactNode;
  onDark?: boolean;
  className?: string;
}

export default function SectionHeader({ number, eyebrow, title, aside, onDark, className }: SectionHeaderProps) {
  return (
    <div className={clsx("flex flex-wrap items-end justify-between gap-x-10 gap-y-4", className)}>
      <div className="flex max-w-[36em] flex-col gap-3">
        <Eyebrow number={number} onDark={onDark}>
          {eyebrow}
        </Eyebrow>
        <h2 className="ks-display text-ks-h2 leading-none tracking-[-0.02em]">{title}</h2>
      </div>
      {aside}
    </div>
  );
}
