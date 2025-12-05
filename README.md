# GreenLoop Landing Page

Landing page for **The Restaurant Repeat Revenue Audit™** - deployed at [greenloop.dev](https://greenloop.dev)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## ✨ Features

- ✅ High-converting landing page with Hormozi principles
- ✅ Real-time revenue calculator
- ✅ Lead capture form with Discord notifications
- ✅ Admin dashboard at `/admin/leads`
- ✅ Optimized for mobile & social sharing
- ✅ SEO optimized with Open Graph tags

## 📁 Project Structure

- `src/app/page.tsx` - Main landing page
- `src/app/api/submit-lead/route.ts` - Lead submission API
- `src/app/admin/leads/` - Admin dashboard
- `SALES_PLAYBOOK.md` - Sales scripts and process
- `NOTIFICATIONS_AND_EMAIL_GUIDE.md` - Setup guide for notifications

## 🌐 Deployment

- **Live Site**: [greenloop.dev](https://greenloop.dev)
- **Hosting**: Vercel (auto-deploys from GitHub)
- **Database**: Vercel KV (Redis)
- **Notifications**: Discord webhook

## 🔔 Notifications

Discord webhook is configured - you'll get instant notifications when leads submit the form!

## 📧 Email Setup

See `NOTIFICATIONS_AND_EMAIL_GUIDE.md` for branded email setup options.
