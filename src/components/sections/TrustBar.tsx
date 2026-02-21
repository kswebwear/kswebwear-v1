import { Clock, Package, MapPin, Star, Zap } from "lucide-react";

const trustItems = [
  { icon: Clock, label: "3–5 Day Turnaround" },
  { icon: Package, label: "No Minimum Orders" },
  { icon: Zap, label: "Same-Day Quotes" },
  { icon: MapPin, label: "Tallawong Pickup" },
  { icon: Star, label: "2+ Years Local" },
];

export default function TrustBar() {
  return (
    <div className="bg-brand-navy py-5 border-b border-white/10">
      <div className="section-container">
        <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 flex-shrink-0 text-white/80 hover:text-white transition-colors duration-200"
            >
              <item.icon size={16} className="text-brand-red flex-shrink-0" />
              <span className="font-inter text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="ml-4 text-white/20 hidden md:block">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
