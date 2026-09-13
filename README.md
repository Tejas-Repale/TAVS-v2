# Swami Chaya Tour & Travels — V3.3

A premium, mobile-first standalone travel website built from the V2 foundation.

## V3.0 — Brand & Experience
- Premium visual system and responsive layout
- Real user-supplied Ertiga photography, cleaned of route captions
- English / Marathi UI and WhatsApp messages
- Mobile sticky call / WhatsApp / plan bar

## V3.1 — Advanced Travel Features
- Trip planner
- Destination selector
- Route experience
- Fare estimator
- Travel guide section
- QR / contact actions
- SEO-ready metadata

## V3.2 — Scalable Architecture
- `/admin` standalone content-management prototype using localStorage
- Data structure is intentionally simple so a database/API can replace local storage later
- No database or authentication is required for the current standalone deployment

## V3.3 — Journey Intelligence
- Lightweight local recommendation engine for trip ideas
- Designed so a future AI/API can replace the recommendation logic without changing the public booking flow

## Run
```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` in Vercel after the first production deployment and redeploy.

## Vehicle photos
The vehicle images are the user's supplied real photos with the overlaid “Way to …” captions removed by cropping.
