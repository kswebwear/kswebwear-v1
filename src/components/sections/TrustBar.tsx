import { MapPin, Clock, Package, Users, MessageCircle } from "lucide-react";

const trustItems = [
  { icon: MapPin, label: "Based in Tallawong" },
  { icon: Clock, label: "Fast Turnaround" },
  { icon: Package, label: "Minimum 2 Shirts Per Order" },
  { icon: Users, label: "Events & Business Orders" },
  { icon: MessageCircle, label: "Direct WhatsApp Support" },
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
