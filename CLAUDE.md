# KS Web & Wear V1 — Design Decisions & Guidelines

## Business Rules (V1 Locked)

- **Minimum order**: 2 shirts per order. Mix sizes allowed. Best value from 3+.
- **Pricing (single-side)**: 2 shirts $28/ea, 3–9 shirts $26/ea, 10+ message for pricing.
- **Pricing (double-side)**: 2 shirts $35/ea, 3–9 shirts $32/ea, 10+ message for pricing.
- **Turnaround**: 2–4 business days.
- **Pickup**: Tallawong, NSW 2762. Delivery for larger orders only.
- **Same-day**: Only for selected pre-printed designs.
- **Own shirts**: We print on our supplied shirts only.
- **Design help**: Basic layout assistance only. Final artwork required.

## Target Audiences (No Gym Claims)

1. Events & Celebrations — birthdays, family gatherings, vacations, Christmas parties
2. Small Businesses — staff uniforms, logo tees, event merch, seasonal shirts
3. Group & Team Orders — matching tees for teams, trips, special occasions

## Content Rules

- No "no minimum" messaging anywhere
- No gym/PT-specific claims unless verified
- No fabricated testimonials
- No placeholder/stock images — use real work only or gradient placeholders with captions
- No exaggerated experience claims
- Keep messaging honest, local, and clear

## Technical Decisions

- Static site (SSG) — no backend, no database
- All leads via WhatsApp — no server-side form processing
- Fonts self-hosted via next/font/google (no external @import)
- CSP: no unsafe-eval, no data:/blob: in img-src, self-hosted fonts only
- HSTS enabled
- Form validation: maxLength/minLength on all fields, 5s rate limiting

## Site Structure (Do Not Change)

1. Hero → Trust Bar → Who We Serve → Pricing → Process → Portfolio → Instagram CTA → Why Us → CTA
2. No checkout, cart, payment, login, design editor, popups, or animations beyond existing
