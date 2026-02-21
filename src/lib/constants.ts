export const SITE_CONFIG = {
  name: "KS Web & Wear",
  tagline: "Custom T-Shirt Printing in Tallawong",
  description:
    "Custom DTF T-shirt printing for events, businesses & groups in Tallawong, NSW. Minimum 2 shirts per order. Fast turnaround, local pickup.",
  location: "Tallawong, NSW 2762",
  whatsapp: "+61410369036",
  whatsappLink: "https://wa.me/61410369036",
  email: "admin@kswebwear.com",
  instagram: "https://instagram.com/kswebwear",
  instagramHandle: "@kswebwear",
  facebook: "https://facebook.com/kswebwear",
  logoUrl:
    "https://kswebwear.com.au/cdn/shop/files/Logo.png?v=1710504103&width=600",
  turnaround: "2–4 Business Days",
  minimumOrder: "Minimum 2 shirts per order",
};

export const WHATSAPP_MESSAGES = {
  default: encodeURIComponent(
    "Hi! I'd like to get a quote for custom printing. Can you help?"
  ),
  events: encodeURIComponent(
    "Hi! I'm interested in custom T-shirts for an event. Can I get a quote?"
  ),
  business: encodeURIComponent(
    "Hi! I'm interested in custom shirts for my business. Can I get more details?"
  ),
  group: encodeURIComponent(
    "Hi! I'm looking for matching tees for a group order. Can I get a quote?"
  ),
  bulk: encodeURIComponent(
    "Hi! I'm interested in bulk pricing for 10+ shirts. Can I get more details?"
  ),
};

export const waLink = (msg: keyof typeof WHATSAPP_MESSAGES = "default") =>
  `${SITE_CONFIG.whatsappLink}?text=${WHATSAPP_MESSAGES[msg]}`;

export const PRICING = {
  singleSide: [
    { qty: "2 shirts", price: "$28 each" },
    { qty: "3–9 shirts", price: "$26 each" },
    { qty: "10+ shirts", price: "Message for event pricing" },
  ],
  doubleSide: [
    { qty: "2 shirts", price: "$35 each" },
    { qty: "3–9 shirts", price: "$32 each" },
    { qty: "10+ shirts", price: "Message for event pricing" },
  ],
};

export const WHO_WE_SERVE = [
  {
    id: "events",
    title: "Events & Celebrations",
    emoji: "\uD83C\uDF89",
    description:
      "Birthdays, family gatherings, vacations, Christmas parties.",
    examples: ["Birthday crew tees", "Holiday matching shirts", "Party prints"],
    cta: "events" as const,
  },
  {
    id: "businesses",
    title: "Small Businesses",
    emoji: "\uD83C\uDFE2",
    description:
      "Staff uniforms, logo tees, event merch, seasonal shirts.",
    examples: ["Staff uniforms", "Branded merch", "Event giveaways"],
    cta: "business" as const,
  },
  {
    id: "groups",
    title: "Group & Team Orders",
    emoji: "\uD83D\uDC55",
    description:
      "Matching tees for teams, trips, or special occasions.",
    examples: ["Team shirts", "Trip matching tees", "Club merch"],
    cta: "group" as const,
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Message Us",
    description: "Send us a WhatsApp with your idea, design, or just a rough brief.",
  },
  {
    step: "02",
    title: "Get Your Quote",
    description: "We'll come back with pricing — usually same day.",
  },
  {
    step: "03",
    title: "Approve Proof",
    description: "We'll send a design proof before printing. You approve it.",
  },
  {
    step: "04",
    title: "Pickup in Tallawong",
    description: "Ready in 2–4 business days. Pickup at Tallawong or local delivery.",
  },
];

export const FAQS = [
  {
    question: "What is the minimum order?",
    answer:
      "Minimum 2 shirts per order. Mix sizes allowed.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Typically 2–4 business days depending on quantity and design.",
  },
  {
    question: "Do you offer same-day printing?",
    answer:
      "Same-day available for selected pre-printed designs only.",
  },
  {
    question: "Do you help with design?",
    answer:
      "Basic layout assistance available. Final artwork required for printing.",
  },
  {
    question: "Can I bring my own shirts?",
    answer:
      "We print on our supplied shirts only to ensure print quality and durability.",
  },
  {
    question: "Is pickup available?",
    answer:
      "Local pickup available in Tallawong. Delivery available for larger orders.",
  },
  {
    question: "What printing method do you use?",
    answer:
      "We use DTF (Direct to Film) printing — vibrant, durable, and works on virtually any fabric colour. Full colour with no extra charge.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept bank transfer and cash. Payment is required before printing begins. We'll confirm payment details when you get your quote.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just message us on WhatsApp! Send your idea, design, or any questions — we respond fast and make the process simple.",
  },
];
