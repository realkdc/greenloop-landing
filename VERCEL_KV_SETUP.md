# Vercel KV Setup Guide

## ✅ What's Already Done

- ✅ API route created: `/api/submit-lead`
- ✅ Form submission handler implemented
- ✅ Vercel KV package installed (`@vercel/kv`)
- ✅ Form validation and error handling

## 🚀 Set Up Vercel KV (5 minutes)

### Step 1: Create KV Database

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project: **landing-page**
3. Go to **Storage** tab (in the left sidebar)
4. Click **Create Database**
5. Select **KV** (Redis)
6. Choose a name (e.g., `greenloop-kv`)
7. Select a region (choose closest to your users)
8. Click **Create**

### Step 2: Link KV to Your Project

The KV database will automatically be linked to your project. Vercel will set these environment variables:
- `KV_URL`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`

**These are automatically available in your Vercel deployments!**

### Step 3: Test Locally (Optional)

For local development, create a `.env.local` file:

```bash
KV_URL=your_kv_url
KV_REST_API_URL=your_rest_api_url
KV_REST_API_TOKEN=your_token
KV_REST_API_READ_ONLY_TOKEN=your_readonly_token
```

You can get these from:
1. Vercel Dashboard → Your Project → Storage → KV Database → Settings
2. Copy the connection details

### Step 4: Redeploy

After creating the KV database:
1. Go to your project's **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Click **Redeploy**

Or push a new commit to trigger auto-deployment.

## 📊 Viewing Leads

### Option 1: Vercel Dashboard
1. Go to Storage → KV Database
2. Use the built-in explorer to view keys starting with `lead:`

### Option 2: Create Admin Page (Optional)
I can create a simple admin page at `/admin/leads` to view all submissions in a nice table format. Just ask!

### Option 3: Export via API
You can create an API route to export leads:
```
GET /api/leads
```

## 💰 Pricing

**Free Tier Includes:**
- 256 MB storage
- 100,000 reads/month
- 50,000 writes/month

This is **plenty** for lead capture forms. You can store thousands of leads for free!

## 🔄 Alternative: Use Firebase Instead

If you prefer Firebase, I can switch the implementation. Just let me know!

## ✅ Testing

1. Submit the form on your landing page
2. Check Vercel Dashboard → Storage → KV Database
3. Look for keys starting with `lead:`
4. Each lead will have: name, email, timestamp, source, status

## 🎯 Next Steps

Once KV is set up:
- Form submissions will automatically save
- All leads stored securely in Vercel KV
- No additional setup needed!

Need help? The form works even if KV isn't configured yet - it will gracefully handle errors.

