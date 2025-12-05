# 🔔 Lead Notifications & Free Branded Email Setup Guide

## 🎯 Lead Notification Options

You currently have **Discord webhook** support built-in. Here are all your notification options:

### Option 1: Discord Webhook (INSTANT - Recommended) ⚡

**What it does:** Sends instant notifications to a Discord channel when someone fills out your form.

**Setup (2 minutes):**
1. Go to your Discord server
2. Right-click a channel → **Edit Channel** → **Integrations** → **Webhooks** → **New Webhook**
3. Name it "GreenLoop Leads" and copy the webhook URL
4. In Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
5. Add:
   ```
   DISCORD_WEBHOOK_URL = https://discord.com/api/webhooks/your-webhook-url
   ```
6. Done! ✅ You'll get instant Discord notifications

**Pros:**
- ✅ Instant notifications
- ✅ Free forever
- ✅ Can access from mobile app
- ✅ No setup complexity

---

### Option 2: Email Notifications (Already coded, needs setup)

**What it does:** Sends you an email when a new lead signs up.

**Setup:** See "Free Branded Email" section below for receiving emails, then we'll enable this.

---

### Option 3: Admin Dashboard (Already built)

**What it does:** View all leads at `greenloop.dev/admin/leads`

**Setup:** Nothing needed! Just bookmark the page.

---

## 📧 Free Branded Email Setup (@greenloop.dev)

> **💡 Since you bought your domain through Vercel**, use **Zoho Mail** (Option B below) - it works perfectly with Vercel DNS and doesn't require changing nameservers!

### Option A: Cloudflare Email Routing (100% FREE) ⚠️ **Requires Nameserver Change**

**Note:** This requires switching to Cloudflare's nameservers. See **VERCEL_DOMAIN_EMAIL_SETUP.md** for easier options that work with Vercel DNS!

**What you get:**
- Unlimited `@greenloop.dev` email addresses
- Forward emails to any existing email (Gmail, etc.)
- Send emails FROM your domain
- Free forever, no limits

**Setup Steps (10 minutes):**

1. **Add domain to Cloudflare:**
   - Sign up at https://dash.cloudflare.com (free)
   - Click "Add a Site" → Enter `greenloop.dev`
   - Follow DNS setup (Cloudflare will scan your existing DNS)
   - Update nameservers in Vercel (or wherever you manage DNS)

2. **Enable Email Routing:**
   - In Cloudflare Dashboard → **Email** → **Email Routing** → **Get Started**
   - Verify your domain (automatic)
   - Click **Create address**
   - Create: `hello@greenloop.dev` → Forward to: `your-personal-email@gmail.com`
   - Create: `notifications@greenloop.dev` → Forward to: `your-personal-email@gmail.com`
   - Create: `support@greenloop.dev` → Forward to: `your-personal-email@gmail.com`

3. **Done!** ✅ 
   - Emails to `hello@greenloop.dev` forward to your Gmail
   - You can REPLY from `hello@greenloop.dev` (Cloudflare handles it)

**Cost:** FREE forever

**Pros:**
- ✅ Completely free
- ✅ Unlimited addresses
- ✅ No credit card needed
- ✅ Works with any email provider (Gmail, Outlook, etc.)

**Cons:**
- ⚠️ Need to use Cloudflare for DNS (requires nameserver change)

---

### Option B: Zoho Mail (FREE - Perfect for Vercel Domains!) ⭐ **RECOMMENDED**

**Perfect for Vercel domains!** Just add DNS records in Vercel Dashboard - no nameserver changes needed!

**What you get:**
- Full email inbox at `hello@greenloop.dev`
- 5GB storage
- Mobile apps
- Webmail interface
- FREE forever for 1 user

**Setup (15 minutes):**
1. Sign up at https://www.zoho.com/mail/ → "Free for Life" plan
2. Add domain `greenloop.dev` in Zoho
3. Get MX and TXT records from Zoho
4. Add DNS records in **Vercel Dashboard** → **Domains** → `greenloop.dev` → **DNS Records**
   - Add MX records: `mx.zoho.com` (priority 10) and `mx2.zoho.com` (priority 20)
   - Add TXT record (for verification)
5. Verify domain in Zoho (takes 5-10 minutes)
6. Create email: `hello@greenloop.dev`

**Cost:** FREE for 1 user

**Pros:**
- ✅ Works perfectly with Vercel DNS (no nameserver changes!)
- ✅ Full email client (inbox, sent, folders)
- ✅ Mobile apps available
- ✅ Professional email experience

**Cons:**
- ⚠️ Limited to 1 email address on free plan
- ⚠️ 5GB storage limit

**📖 See `VERCEL_DOMAIN_EMAIL_SETUP.md` for detailed step-by-step instructions!**

---

### Option C: Google Workspace (NOT FREE, but $6/month)

If you want Gmail but with your domain, Google Workspace is $6/user/month. But Cloudflare Email Routing is free and works just as well for forwarding.

---

## 🚀 Quick Start: Best Setup (5 minutes)

**For instant notifications:**
1. Set up Discord webhook (see Option 1 above)
2. Add `DISCORD_WEBHOOK_URL` to Vercel environment variables
3. Done! Get instant Discord notifications

**For branded email:**
1. Use Cloudflare Email Routing (Option A above)
2. Forward `notifications@greenloop.dev` to your personal email
3. When you want email notifications, we can enable them (they're already coded!)

---

## 🔧 Enable Email Notifications (After setting up branded email)

Once you have branded email set up, I can enable email notifications. Just let me know!

The code is already built - we just need to:
1. Add your email service API key (Resend or similar)
2. Set `NOTIFICATION_EMAIL = notifications@greenloop.dev`
3. Done!

---

## 📊 Current Notification Status

- ✅ **Discord Webhook:** Ready (just add webhook URL)
- ✅ **Admin Dashboard:** Live at `/admin/leads`
- ✅ **Email Notifications:** Code ready, needs email service setup

---

## 💡 My Recommendation

**Start with Discord Webhook** - it's the fastest to set up (2 minutes) and gives instant notifications. Then set up Cloudflare Email Routing when you have 10 minutes for the branded email addresses.

Both are completely free! 🎉

