# Email Setup Guide - GreenLoop

## ✅ What's Already Done

- ✅ Resend package installed
- ✅ Email notification system created
- ✅ Automatic emails when leads submit form
- ✅ Confirmation email to leads

## 📧 Email Flow

1. **Lead submits form** → Form data saved to Vercel KV
2. **You get notified** → Email sent to your notification email
3. **Lead gets confirmation** → Auto-reply sent to their email

## 🚀 Set Up Resend (5 minutes)

### Step 1: Create Resend Account

1. Go to https://resend.com
2. Sign up for free account
3. Verify your email

### Step 2: Get API Key

1. Go to https://resend.com/api-keys
2. Click **Create API Key**
3. Name it: `GreenLoop Production`
4. Copy the API key (starts with `re_...`)

### Step 3: Add Domain (greenloop.dev)

**This is how you get @greenloop.dev email addresses!**

1. Go to https://resend.com/domains
2. Click **Add Domain**
3. Enter: `greenloop.dev`
4. Resend will show you DNS records to add

### Step 4: Add DNS Records to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Find `greenloop.dev` domain
3. Click **DNS Records** or go to your domain registrar
4. Add these DNS records (Resend will show exact values):

   ```
   Type: TXT
   Name: @
   Value: (provided by Resend)
   
   Type: TXT
   Name: resend._domainkey
   Value: (provided by Resend)
   
   Type: CNAME (if needed)
   Name: resend
   Value: (provided by Resend)
   ```

5. Wait 5-10 minutes for DNS propagation
6. Verify domain in Resend dashboard

### Step 5: Add Environment Variables to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add these:

   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxx (your API key)
   NOTIFICATION_EMAIL = your-email@example.com (where you want lead notifications)
   ```

3. Make sure to select **Production**, **Preview**, and **Development**
4. Click **Save**

### Step 6: Redeploy

After adding environment variables, redeploy:
1. Go to Deployments
2. Click **...** on latest deployment
3. Click **Redeploy**

## 📨 Email Addresses You'll Get

Once domain is verified, you can use:
- `hello@greenloop.dev` - For customer emails
- `notifications@greenloop.dev` - For system notifications
- `support@greenloop.dev` - For support
- Any email you want! `anything@greenloop.dev`

**All free with Resend!**

## 💰 Resend Pricing

**Free Tier:**
- 3,000 emails/month
- Unlimited domains
- Custom domain support
- Great deliverability (avoids spam)

Perfect for lead capture! Only pay if you send 3,000+ emails/month.

## 🎯 What Happens Now

When someone fills out the form:
1. ✅ Lead saved to Vercel KV
2. 📧 **YOU** get email: "New Lead: [Name] - GreenLoop"
3. 📧 **LEAD** gets email: "Your Agreement is on the way"
4. You can reply directly to the lead's email

## 🔧 Testing

After setup, test by:
1. Submit the form on your landing page
2. Check your email for notification
3. Check the lead's email for confirmation

## 📝 Next Steps

1. Set up Resend account
2. Add greenloop.dev domain
3. Add DNS records
4. Add environment variables
5. Test form submission

**Questions? The email system is already coded - just needs API key and domain setup!**

