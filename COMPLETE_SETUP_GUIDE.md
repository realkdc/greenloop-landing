# 🚀 Complete Setup Guide - GreenLoop Landing Page

## ✅ What's Already Built & Ready

- ✅ Landing page deployed on Vercel
- ✅ Lead capture form (name + email)
- ✅ Form submission API route (`/api/submit-lead`)
- ✅ Admin dashboard at `/admin/leads` to view all leads
- ✅ Database storage (Vercel KV)
- ✅ Discord webhook notifications (optional)
- ✅ SEO optimized with Open Graph tags
- ✅ Custom favicon and branding
- ✅ All code committed to GitHub

## 📋 Quick Setup Checklist

### 1. Set Up Vercel KV (Database) - 2 minutes

**Option A: Via CLI**
```bash
cd landing-page
npx vercel kv create greenloop-kv
```

**Option B: Via Dashboard**
1. Go to: https://vercel.com/dashboard
2. Select project: `gl-landing-page`
3. Click **Storage** tab
4. Click **Create Database** → **KV**
5. Name: `greenloop-kv`
6. Done! ✅

### 2. Set Up Resend (Email) - 10 minutes

1. **Sign up**: https://resend.com (free account)
2. **Get API Key**: https://resend.com/api-keys → Create → Copy
3. **Add Domain**: 
   - Go to https://resend.com/domains
   - Click **Add Domain**
   - Enter: `greenloop.dev`
   - Copy the DNS records shown
4. **Add DNS Records to Vercel**:
   - Go to Vercel Dashboard → Project → Settings → Domains
   - Find `greenloop.dev`
   - Add the TXT and CNAME records from Resend
   - Wait 5-10 minutes for verification
5. **Add Environment Variables**:
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Add:
     ```
     RESEND_API_KEY = re_xxxxxxxxxxxxx
     NOTIFICATION_EMAIL = your-email@example.com
     ```
   - Select: Production, Preview, Development
6. **Redeploy**: Go to Deployments → Redeploy latest

### 3. Test Everything

1. Submit the form on your landing page
2. Check your email for: "🎯 New Lead: [Name] - GreenLoop"
3. Check the lead's email for: "Your Agreement is on the way"

## 📧 Email Flow Explained

### When someone fills out the form:

1. **Lead submits form** → Data saved to Vercel KV database
2. **YOU get notified** → Email sent to `NOTIFICATION_EMAIL`
   - Subject: "🎯 New Lead: [Name] - GreenLoop"
   - Contains: Name, Email, Timestamp
   - Reply directly to follow up
3. **LEAD gets confirmation** → Auto-email sent to them
   - Subject: "Your Agreement is on the way - GreenLoop"
   - Confirms receipt, sets expectations

### Email Addresses You'll Get:

Once `greenloop.dev` is verified in Resend, you can use:
- `hello@greenloop.dev` - Customer-facing emails
- `notifications@greenloop.dev` - System notifications
- `support@greenloop.dev` - Support emails
- Any email you want! All free with Resend.

## 🎯 How to Send Follow-Up Messages

### Option 1: Reply to Notification Email
- You get an email with the lead's info
- Just reply to that email (or click the lead's email address)
- Resend automatically handles sending from `hello@greenloop.dev`

### Option 2: View All Leads in Vercel KV
- Go to Vercel Dashboard → Storage → KV Database
- View all keys starting with `lead:`
- Copy emails and send manually

### Option 3: Create Admin Dashboard (Optional)
I can create a simple `/admin/leads` page to view all submissions in a table. Just ask!

## 💰 Costs

**Everything FREE:**
- ✅ Vercel KV: 256 MB storage, 100k reads/month (free tier)
- ✅ Resend: 3,000 emails/month (free tier)
- ✅ Vercel Hosting: Free for personal projects

**You only pay if you exceed:**
- 3,000 emails/month (very unlikely for lead capture)
- 100,000 database reads/month

## 🔒 Avoiding Spam

Resend automatically handles:
- ✅ SPF records (via DNS setup)
- ✅ DKIM signatures (via DNS setup)
- ✅ Professional domain reputation
- ✅ Deliverability optimization

Just make sure you:
- Add the DNS records correctly
- Wait for domain verification
- Use proper email addresses (`hello@greenloop.dev` not `noreply@`)

## 🐛 Troubleshooting

### Form not submitting?
- Check browser console for errors
- Check Vercel logs: Dashboard → Deployments → View Function Logs

### Emails not sending?
- Verify `RESEND_API_KEY` is set in environment variables
- Verify domain is verified in Resend
- Check Resend dashboard for delivery status

### KV database errors?
- Make sure KV database is created
- Check environment variables are set automatically

## 📚 Documentation Files

- `EMAIL_SETUP.md` - Detailed email setup guide
- `SETUP_KV_CLI.md` - KV database setup
- `VERCEL_KV_SETUP.md` - Original KV setup guide
- `DEPLOYMENT.md` - Deployment instructions

## ✨ Next Steps After Setup

1. ✅ Set up KV database
2. ✅ Set up Resend + domain
3. ✅ Add environment variables
4. ✅ Test form submission
5. ✅ Start capturing leads!

**Everything is coded and ready - just needs configuration!**

Need help? All the code is in place, just follow the setup steps above.

