# Deployment Instructions

## Step 1 — Push to GitHub (run these 3 commands in terminal)

```bash
cd /Users/karteeknidubrolu/Development/kswebwear-v1

# Authenticate GitHub CLI (one-time — opens browser)
gh auth login

# Create repo and push (one command)
gh repo create kswebwear --public --description "KS Web & Wear — Custom DTF printing website" --source=. --remote=origin --push
```

## Step 2 — Deploy to Vercel (takes 2 minutes)

1. Go to https://vercel.com/new
2. Import the `kswebwear` GitHub repository
3. Framework: **Next.js** (auto-detected)
4. No environment variables needed
5. Click **Deploy**

## Step 3 — Connect your domain (kswebwear.com.au)

1. In Vercel → Project → Settings → Domains
2. Add `kswebwear.com.au`
3. Vercel will show you DNS records to update
4. Go to your domain registrar, update DNS to point to Vercel
5. Wait 5–30 min for propagation

## What's Built

| Page | URL |
|------|-----|
| Home | `/` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Get a Quote | `/contact` |
| About | `/about` |
| FAQ | `/faq` |

## After Launch — Things to Add

1. **Real portfolio photos** — Replace gradient placeholders in `src/app/portfolio/page.tsx` with your Instagram photos
2. **Real testimonials** — Update `src/components/sections/TestimonialsSection.tsx` with real Google/Instagram reviews
3. **Google Analytics** — Add your GA4 ID to `src/app/layout.tsx`

## Local Dev

```bash
npm run dev
# Open http://localhost:3000
```
