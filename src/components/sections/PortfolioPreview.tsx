import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder portfolio items — client to replace with real Instagram photos
const portfolioItems = [
  {
    id: 1,
    title: "Custom Event Tees",
    category: "Individual",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    title: "Gym Team Merch",
    category: "Gym",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Business Uniforms",
    category: "Business",
    color: "from-gray-700 to-gray-900",
  },
  {
    id: 4,
    title: "Birthday Crew",
    category: "Individual",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 5,
    title: "Oversized Drop",
    category: "Individual",
    color: "from-green-500 to-teal-600",
  },
  {
    id: 6,
    title: "Brand Builder Pack",
    category: "Business",
    color: "from-yellow-500 to-orange-500",
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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`relative aspect-square rounded-2xl bg-gradient-to-br ${item.color} overflow-hidden group cursor-pointer`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-xs font-sora font-semibold bg-white/20 text-white backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Placeholder text (replace with real images) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-sora font-bold text-lg text-center px-4">
                  📸 Photo Coming
                </span>
              </div>

              {/* Hover title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-sora font-semibold text-white text-sm">
                  {item.title}
                </p>
              </div>
            </div>
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
