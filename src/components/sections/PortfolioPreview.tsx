import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    src: "/images/portfolio/family-vacation-black.jpeg",
    title: "Family Vacation Matching Tees",
    caption: "6 shirts — group print",
    category: "Group",
  },
  {
    id: 2,
    src: "/images/portfolio/sports-numbered-blue.jpeg",
    title: "Sports Team Numbered Jerseys",
    caption: "Custom numbers — team order",
    category: "Business",
  },
  {
    id: 3,
    src: "/images/portfolio/infrastructure-team-shirts.jpg",
    title: "Infrastructure Team Uniforms",
    caption: "15+ pieces — bulk order",
    category: "Business",
  },
  {
    id: 4,
    src: "/images/portfolio/anime-one-piece.jpeg",
    title: "Anime Custom Print Tees",
    caption: "White & red — full-width print",
    category: "Custom",
  },
  {
    id: 5,
    src: "/images/portfolio/super-dad-shirt.png",
    title: "Super Dad Father's Day Tee",
    caption: "Custom personalised gift",
    category: "Event",
  },
  {
    id: 6,
    src: "/images/portfolio/they-call-him-og-stack.jpeg",
    title: "They Call Him OG — Birthday",
    caption: "6 tees — custom design",
    category: "Event",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-padding bg-brand-light">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="tag">Recent Work</span>
            <h2 className="font-sora font-bold text-3xl md:text-4xl text-brand-navy mt-4">
              Fresh Off The Press
            </h2>
            <p className="font-inter text-brand-muted mt-2 text-base">
              Real orders. Real results. Real local.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-red font-sora font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            View All Work <ArrowRight size={16} />
          </Link>
        </div>

        {/* Context line */}
        <p className="font-inter text-brand-muted text-sm italic text-center mb-6">
          Real orders printed for local customers.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioItems.map((item) => (
            <Link
              key={item.id}
              href="/portfolio"
              className="relative aspect-square rounded-2xl overflow-hidden group block"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-xs font-sora font-semibold bg-white/20 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="font-sora font-semibold text-white text-xs sm:text-sm">
                  {item.title}
                </p>
                <p className="font-inter text-white/70 text-xs mt-0.5">
                  {item.caption}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link href="/portfolio" className="btn-outline">
            See All Our Work
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
