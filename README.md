# KS Web & Wear — Custom T-Shirt Printing Website

Lead-generation website for KS Web & Wear, a local custom DTF printing business in Tallawong, NSW, Australia.

## Tech Stack

- **Framework:** Next.js 16 (App Router, SSG)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Icons:** Lucide React
- **Forms:** React Hook Form
- **Deployment:** Vercel

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Value prop, who we serve, portfolio preview, trust signals |
| Services | `/services` | DTF printing services + business packs |
| Portfolio | `/portfolio` | Work gallery + Instagram CTA |
| Contact | `/contact` | Quote form + WhatsApp + contact details |
| About | `/about` | Story, values, location |
| FAQ | `/faq` | Common questions answered |

## Key Features

- ✅ WhatsApp-first lead generation (floating CTA + inline CTAs)
- ✅ Mobile-first responsive design
- ✅ No checkout, no cart, no eCommerce patterns
- ✅ Security headers configured (CSP, X-Frame-Options, etc.)
- ✅ SEO-ready (sitemap, robots.txt, Open Graph)
- ✅ Fully static output (fast, no server costs)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel — connect GitHub repo, set domain to `kswebwear.com.au`.

## Portfolio Photos

Replace gradient placeholder cards in `src/app/portfolio/page.tsx` with real photo imports once available from Instagram.

## Contact

- WhatsApp: +61410369036
- Email: admin@kswebwear.com
- Instagram: @kswebwear
