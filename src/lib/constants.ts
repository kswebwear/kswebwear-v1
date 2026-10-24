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
  logoUrl: "/images/logo.png",
  turnaround: "2–4 Business Days",
  minimumOrder: "Minimum 2 shirts per order",
  designerUrl: "https://design.kswebwear.com.au",
  legalName: "Sindhu Karteek Web and Wear Pty Ltd",
  // Set once the ABN is confirmed; the footer hides the ABN line while this is empty.
  abn: "",
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
    { qty: "10+ shirts", price: "Message us for 10+ shirt pricing" },
  ],
  doubleSide: [
    { qty: "2 shirts", price: "$35 each" },
    { qty: "3–9 shirts", price: "$32 each" },
    { qty: "10+ shirts", price: "Message us for 10+ shirt pricing" },
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
      "Staff uniforms, logo tees, event merch, seasonal shirts. We work with local cafes, trades, and retail shops across Western Sydney.",
    examples: ["Staff uniforms", "Branded merch", "Event giveaways", "Recurring orders"],
    note: "We store your logo for easy reorders anytime.",
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
    title: "Send Your Design",
    description: "WhatsApp us your design, idea, or even just a rough brief. We'll take it from there.",
  },
  {
    step: "02",
    title: "Approve the Preview",
    description: "We'll send a proof before printing. Nothing goes to print until you're happy.",
  },
  {
    step: "03",
    title: "Print & Pickup",
    description: "Ready in 2–4 business days. Pickup from Tallawong or ask about delivery.",
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
      "We use DTF (Direct to Film) printing: vibrant, durable, and works on virtually any fabric colour. Full colour with no extra charge.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept bank transfer and cash. Payment is required before printing begins. We'll confirm payment details when you get your quote.",
  },
  {
    question: "Do you handle business or staff uniform orders?",
    answer:
      "Yes, we regularly print branded tees and staff uniforms for local businesses. Whether it's a one-off batch or a recurring order, just message us with your logo and quantities and we'll sort it out.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just message us on WhatsApp! Send your idea, design, or any questions. We respond fast and make the process simple.",
  },
];

export const PRICE_ROWS = [
  { qty: "2 shirts", oneSide: "$28", bothSides: "$35" },
  { qty: "3–9 shirts", oneSide: "$26", bothSides: "$32" },
];

export const HOME_WORK = [
  { src: "/images/portfolio/family-vacation-black.jpeg", title: "Family vacation tees", meta: "6 shirts" },
  { src: "/images/portfolio/sports-numbered-blue.jpeg", title: "Numbered team jerseys", meta: "Team order" },
  { src: "/images/portfolio/infrastructure-team-shirts.jpg", title: "Infrastructure crew uniforms", meta: "15+ shirts" },
  { src: "/images/portfolio/anime-one-piece.jpeg", title: "Anime full-front print", meta: "Custom" },
  { src: "/images/portfolio/super-dad-shirt.png", title: "Super Dad - Father’s Day", meta: "Gift" },
  { src: "/images/portfolio/they-call-him-og-stack.jpeg", title: "They Call Him OG - birthday", meta: "6 shirts" },
];

export const HOME_STEPS = [
  { title: "Send your idea", body: "A logo, a photo, a sketch or just a sentence. Tell us the quantity and sizes." },
  { title: "Approve the proof", body: "We send a mock-up of your shirt with the price. Nothing prints until you say yes." },
  { title: "Collect your shirts", body: "Ready in 2–4 business days. Pick up in Tallawong, or ask about delivery." },
];

export const HOME_AUDIENCES = [
  { title: "Events", body: "Birthdays, holidays, family trips, Christmas parties. Matching shirts for the whole crew." },
  {
    title: "Small businesses",
    body: "Staff uniforms and logo tees for cafés, trades and shops. We keep your logo on file, so reordering is one message.",
  },
  { title: "Teams & clubs", body: "Numbered jerseys, club merch and trip tees, with names and numbers per shirt." },
];

export const HOME_FAQS = [
  {
    question: "What is DTF printing?",
    answer:
      "Direct-to-film: your design is printed onto a film and heat-pressed onto the shirt. It handles full colour, photos and fine detail, and suits small runs because there are no screens to set up.",
  },
  {
    question: "What file should I send?",
    answer:
      "A PNG or PDF works best, but a photo or sketch is fine. If it needs tidying up, we will tell you before anything prints.",
  },
  {
    question: "Can I mix sizes in one order?",
    answer: "Yes. Tell us how many of each size when you send your design.",
  },
  {
    question: "Can I bring my own shirts?",
    answer: "We print on our supplied shirts only, to keep print quality and durability consistent.",
  },
  {
    question: "Do you deliver?",
    answer: "Pickup is from Tallawong, NSW. Delivery is available for larger orders. Message us for a price.",
  },
];
