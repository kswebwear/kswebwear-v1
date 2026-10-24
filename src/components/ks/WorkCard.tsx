import Image from "next/image";

interface WorkCardProps {
  title: string;
  meta: string;
  /** Real order photo. Without it the card renders a labelled photo slot. */
  src?: string;
  priority?: boolean;
}

export default function WorkCard({ title, meta, src, priority }: WorkCardProps) {
  return (
    <figure className="m-0 flex flex-col gap-3.5">
      <div className="relative aspect-[4/5] bg-ks-placeholder">
        {src ? (
          <Image
            src={src}
            alt={`${title}, printed by KS Web & Wear`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 380px"
            className="object-cover"
          />
        ) : (
          <span className="ks-label absolute bottom-3.5 left-3.5 text-ks-muted">[Photo]</span>
        )}
      </div>
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="text-ks-body font-bold">{title}</span>
        <span className="ks-label whitespace-nowrap text-ks-muted">{meta}</span>
      </figcaption>
    </figure>
  );
}
