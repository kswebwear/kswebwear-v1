"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export default function WhatsAppFAB() {
  return (
    <a
      href={waLink("default")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="md:hidden fixed bottom-6 right-6 z-50 bg-brand-whatsapp text-white p-4 rounded-full shadow-2xl hover:bg-green-500 active:scale-95 transition-all duration-200 flex items-center justify-center group"
    >
      <MessageCircle size={26} className="group-hover:scale-110 transition-transform duration-200" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-brand-whatsapp opacity-20 animate-pulse" />
    </a>
  );
}
