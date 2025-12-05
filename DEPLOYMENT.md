# GreenLoop Landing Page - Deployment Guide

## ✅ Completed

- ✅ All code committed to git
- ✅ Pushed to GitHub: https://github.com/realkdc/greenloop-landing
- ✅ Logo made clickable (scrolls to top)
- ✅ Email form field simplified
- ✅ Pricing clarified ("Starts at $2,500/mo")

## 🚀 Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `realkdc/greenloop-landing` from the list
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 2: Deploy via CLI

```bash
npx vercel
```

Follow the prompts:
- Login to Vercel
- Link to your account
- Project name: `greenloop-landing`
- Deploy

## 🌐 Domain Connection

Once deployed, you can connect your domain:

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (usually 5-10 minutes)

### DNS Records Needed:
- **A Record** pointing to Vercel's IP, OR
- **CNAME** pointing to your Vercel deployment URL

Vercel will provide exact instructions based on your domain registrar.

## 📝 Final Checklist

- [x] All features implemented
- [x] Mobile optimized
- [x] Calculator logic verified
- [x] Lead capture modal working
- [x] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Domain connected
- [ ] SSL certificate active (automatic with Vercel)

## 🎯 Repository

GitHub: https://github.com/realkdc/greenloop-landing

