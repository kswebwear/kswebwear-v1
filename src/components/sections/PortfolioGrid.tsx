"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Event", "Group", "Business", "Custom"];

const portfolioItems = [
  // Business
  {
    id: 1,
    src: "/images/portfolio/infrastructure-team-shirts.jpg",
    title: "Infrastructure Team Uniforms",
    desc: "15+ pieces — bulk business order",
    category: "Business",
  },
  {
    id: 2,
    src: "/images/portfolio/rr-sports-six-pack.jpeg",
    title: "RR Sports Cricket Team",
    desc: "6 shirts — black & white",
    category: "Business",
  },
  {
    id: 3,
    src: "/images/portfolio/sports-numbered-blue.jpeg",
    title: "Sports Team Numbered Jerseys",
    desc: "Custom back numbers — team order",
    category: "Business",
  },
  {
    id: 4,
    src: "/images/portfolio/sultanagr-dark-shirts.jpeg",
    title: "Custom Branded Staff Tees",
    desc: "4 shirts — branded design",
    category: "Business",
  },
  {
    id: 5,
    src: "/images/portfolio/rr-sports-cricket-pair.jpeg",
    title: "RR Sports — Black & White Pair",
    desc: "Cricket team order",
    category: "Business",
  },

  // Group
  {
    id: 6,
    src: "/images/portfolio/family-vacation-black.jpeg",
    title: "Family Vacation Matching Tees",
    desc: "6 shirts — full-colour print",
    category: "Group",
  },
  {
    id: 7,
    src: "/images/portfolio/vacation-travel-tees.jpeg",
    title: "Travel Matching Tees",
    desc: "4 shirts — custom travel design",
    category: "Group",
  },
  {
    id: 8,
    src: "/images/portfolio/minnie-mouse-red.jpeg",
    title: "Minnie Mouse Group Tees",
    desc: "3 matching red shirts",
    category: "Group",
  },
  {
    id: 9,
    src: "/images/portfolio/worlds-best-dad-group.jpeg",
    title: "World's Best Dad — Group",
    desc: "10 shirts — matching design",
    category: "Group",
  },
  {
    id: 10,
    src: "/images/portfolio/they-call-him-og-stack.jpeg",
    title: "They Call Him OG — Group",
    desc: "6 custom birthday tees",
    category: "Group",
  },

  // Event
  {
    id: 11,
    src: "/images/portfolio/double-fun-birthday.jpeg",
    title: "Double Fun Birthday Shirts",
    desc: "Mixed design — birthday event",
    category: "Event",
  },
  {
    id: 12,
    src: "/images/portfolio/music-grey-shirts.jpeg",
    title: "Music Theme Event Shirts",
    desc: "4 shirts — grey marle",
    category: "Event",
  },
  {
    id: 13,
    src: "/images/portfolio/worlds-best-dad-pair.jpeg",
    title: "World's Best Dad Gift Tees",
    desc: "2 shirts — custom gift",
    category: "Event",
  },
  {
    id: 14,
    src: "/images/portfolio/my-nanna-hero.jpeg",
    title: "My Nanna Hero Tees",
    desc: "Custom white shirts",
    category: "Event",
  },
  {
    id: 15,
    src: "/images/portfolio/fathers-day-photo-tee.jpg",
    title: "Father's Day Photo Tee",
    desc: "Personalised photo shirt",
    category: "Event",
  },
  {
    id: 16,
    src: "/images/portfolio/super-dad-shirt.png",
    title: "Super Dad Father's Day",
    desc: "Custom gift shirt",
    category: "Event",
  },
  {
    id: 17,
    src: "/images/portfolio/fathers-day-dad-closeup.png",
    title: "Happy Father's Day DAD",
    desc: "Custom full-front design",
    category: "Event",
  },
  {
    id: 18,
    src: "/images/portfolio/fathers-day-quote-shirt.png",
    title: "Father's Day Quote Tee",
    desc: "Personalised message shirt",
    category: "Event",
  },
  {
    id: 19,
    src: "/images/portfolio/fathers-day-colorful-shirt.png",
    title: "Father's Day Colourful Tee",
    desc: "Watercolour print design",
    category: "Event",
  },

  // Custom
  {
    id: 20,
    src: "/images/portfolio/balinese-mask-navy.jpeg",
    title: "Balinese Mask Custom Print",
    desc: "Navy — white line art design",
    category: "Custom",
  },
  {
    id: 21,
    src: "/images/portfolio/anime-one-piece.jpeg",
    title: "Anime Print Tees",
    desc: "White & red — full-width print",
    category: "Custom",
  },
  {
    id: 22,
    src: "/images/portfolio/zoro-anime-shirt.jpg",
    title: "Zoro Anime Custom Shirt",
    desc: "Black — full-front design",
    category: "Custom",
  },
  {
    id: 23,
    src: "/images/portfolio/caricature-photo-shirts.jpeg",
    title: "Caricature Photo Shirts",
    desc: "2 grey tees — custom photo print",
    category: "Custom",
  },
  {
    id: 24,
    src: "/images/portfolio/never-give-up-colorful.jpg",
    title: "Never Give Up Motivational Tee",
    desc: "Grey marle — colour block print",
    category: "Custom",
  },
  {
    id: 25,
    src: "/images/portfolio/they-call-him-og-single.jpeg",
    title: "They Call Him OG — Display",
    desc: "Black folded shirt display",
    category: "Custom",
  },
];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sora font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${
              active === cat
                ? "bg-brand-navy text-white"
                : "bg-white border border-gray-200 text-brand-muted hover:border-brand-red hover:text-brand-red"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry collage */}
      <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-gap:12px] md:[column-gap:16px]">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid mb-3 md:mb-4 relative rounded-2xl overflow-hidden group"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={0}
              height={0}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="w-full h-auto block"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

            {/* Caption — visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="inline-block text-xs font-sora font-semibold bg-white/20 text-white backdrop-blur-sm px-2 py-0.5 rounded-full mb-1">
                {item.category}
              </span>
              <p className="font-sora font-semibold text-white text-xs sm:text-sm">
                {item.title}
              </p>
              <p className="font-inter text-white/70 text-xs mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Count */}
      <p className="text-center font-inter text-brand-muted text-sm mt-6">
        Showing {filtered.length} of {portfolioItems.length} orders
      </p>
    </>
  );
}
