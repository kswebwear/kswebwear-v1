export const SITE_CONFIG = {
  name: "KS Web & Wear",
  tagline: "Your Local Merch Partner in Tallawong",
  description:
    "Custom DTF T-shirt printing for individuals, gyms & small businesses in Tallawong, NSW. Fast 3–5 day turnaround, local pickup.",
  location: "Tallawong, NSW 2762",
  whatsapp: "+61410369036",
  whatsappLink: "https://wa.me/61410369036",
  email: "admin@kswebwear.com",
  instagram: "https://instagram.com/kswebwear",
  instagramHandle: "@kswebwear",
  facebook: "https://facebook.com/kswebwear",
  logoUrl:
    "https://kswebwear.com.au/cdn/shop/files/Logo.png?v=1710504103&width=600",
  turnaround: "3–5 Business Days",
  yearsInBusiness: "2+",
};

export const WHATSAPP_MESSAGES = {
  default: encodeURIComponent(
    "Hi! I'd like to get a quote for custom printing. Can you help?"
  ),
  individual: encodeURIComponent(
    "Hi! I'm interested in custom T-shirt printing. Can I get a quote?"
  ),
  gym: encodeURIComponent(
    "Hi! I'm a gym owner and I'm interested in branded merch for my team. Can I get a quote?"
  ),
  business: encodeURIComponent(
    "Hi! I'm interested in a business merch pack. Can I get more details?"
  ),
  starter: encodeURIComponent(
    "Hi! I'm interested in the Starter Business Pack (10 tees from $300). Can I get more details?"
  ),
  team: encodeURIComponent(
    "Hi! I'm interested in the Team Pack (25 tees from $720). Can I get more details?"
  ),
  brandBuilder: encodeURIComponent(
    "Hi! I'm interested in the Brand Builder Pack (50 tees from $1,350). Can I get more details?"
  ),
};

export const waLink = (msg: keyof typeof WHATSAPP_MESSAGES = "default") =>
  `${SITE_CONFIG.whatsappLink}?text=${WHATSAPP_MESSAGES[msg]}`;

export const SERVICES = [
  {
    id: "custom-tees",
    title: "Custom T-Shirts",
    description:
      "DTF printed tees for any occasion. Single or double-sided. Bring your artwork or we'll help design it.",
    from: "$28",
    icon: "Shirt",
    tags: ["Singles welcome", "No minimums", "Any design"],
  },
  {
    id: "oversized",
    title: "Oversized Tees",
    description:
      "Premium oversized fit — perfect for streetwear, gyms, and group merch drops.",
    from: "$34",
    icon: "Package",
    tags: ["Streetwear fit", "DTF print", "Popular choice"],
  },
  {
    id: "hoodies",
    title: "Custom Hoodies",
    description:
      "Branded hoodies with full DTF print quality. Great for teams, winter drops, and business uniforms.",
    from: "$55",
    icon: "Wind",
    tags: ["DTF quality", "Full colour", "Team orders"],
  },
  {
    id: "business-packs",
    title: "Business Merch Packs",
    description:
      "Structured packs for gyms and small businesses. Fixed pricing, priority printing, and stored DTF for easy reorders.",
    from: "$300",
    icon: "Briefcase",
    tags: ["Bulk savings", "Priority print", "Logo branding"],
  },
];

export const BUSINESS_PACKS = [
  {
    id: "starter",
    name: "Starter Pack",
    price: "From $300",
    quantity: "10 Tees",
    features: [
      "10 custom tees",
      "1 logo placement (front or back)",
      "DTF full-colour print",
      "Local pickup Tallawong",
      "3–5 business day turnaround",
    ],
    cta: "starter" as const,
    popular: false,
  },
  {
    id: "team",
    name: "Team Pack",
    price: "From $720",
    quantity: "25 Tees",
    features: [
      "25 custom tees",
      "Front + sleeve branding",
      "DTF full-colour print",
      "Priority print queue",
      "Local pickup Tallawong",
      "3–5 business day turnaround",
    ],
    cta: "team" as const,
    popular: true,
  },
  {
    id: "brand-builder",
    name: "Brand Builder",
    price: "From $1,350",
    quantity: "50 Tees",
    features: [
      "50 custom tees",
      "Front + back branding",
      "DTF full-colour print",
      "Priority print queue",
      "Free stored DTF for reorders",
      "Local pickup Tallawong",
    ],
    cta: "brandBuilder" as const,
    popular: false,
  },
];

export const WHO_WE_SERVE = [
  {
    id: "individuals",
    title: "Individuals",
    emoji: "👕",
    description:
      "Birthdays, events, custom ideas — no minimum order, singles welcome.",
    examples: ["Birthday crew tees", "Custom gifts", "One-off designs"],
    cta: "individual" as const,
  },
  {
    id: "gyms",
    title: "Gyms & PTs",
    emoji: "🏋️",
    description:
      "Brand your gym with quality merch your members will actually wear.",
    examples: ["Staff uniforms", "Member merch", "PT branding"],
    cta: "gym" as const,
  },
  {
    id: "businesses",
    title: "Small Businesses",
    emoji: "💼",
    description:
      "Affordable branded uniforms and merch packs built for local businesses.",
    examples: ["Team uniforms", "Event merch", "Branded giveaways"],
    cta: "business" as const,
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
    description: "Ready in 3–5 business days. Pickup at Tallawong or local delivery.",
  },
];

export const FAQS = [
  {
    question: "Do you have a minimum order quantity?",
    answer:
      "No minimums for individual custom tees — we print singles. For business packs, minimums start at 10 pieces.",
  },
  {
    question: "How long does it take?",
    answer:
      "Standard turnaround is 3–5 business days from design approval. Same-day pickup is available for pre-printed designs.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in Tallawong, NSW 2762. Local pickup is available. We also offer limited delivery to nearby suburbs.",
  },
  {
    question: "What printing method do you use?",
    answer:
      "We use DTF (Direct to Film) printing — it's vibrant, durable, and works on virtually any fabric colour. Full colour with no extra charge.",
  },
  {
    question: "Can I supply my own design?",
    answer:
      "Absolutely. You can send your artwork (PNG or vector preferred). If you don't have a design, we can help create one — just describe your idea.",
  },
  {
    question: "Can I reorder the same design later?",
    answer:
      "Yes. We store your DTF file so reorders are quick and easy. Brand Builder pack customers get free stored DTF.",
  },
  {
    question: "Do you print on garments I supply?",
    answer:
      "Yes — if you supply your own blank tees or hoodies, we can print on them. Just message us first to confirm the garment works with DTF.",
  },
  {
    question: "How do I pay?",
    answer:
      "We accept bank transfer and cash. Payment is generally required before printing begins. We'll confirm payment details when you get your quote.",
  },
  {
    question: "Do you deliver?",
    answer:
      "We primarily do local pickup at Tallawong. Limited delivery available for bulk orders — ask us when you enquire.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just message us on WhatsApp! Send your idea, design, or any questions — we respond fast and make the process simple.",
  },
];
