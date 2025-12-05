# Set Up Vercel KV via CLI

## Quick Setup

```bash
# Link your project (if not already linked)
npx vercel link

# Create KV database
npx vercel kv create greenloop-kv

# This will automatically:
# - Create the KV database
# - Link it to your project
# - Set environment variables
```

That's it! The KV database will be automatically connected to your project.

## Verify Setup

```bash
# List your KV databases
npx vercel kv list

# You should see: greenloop-kv
```

## Manual Setup (Alternative)

If CLI doesn't work:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Storage** tab
4. Click **Create Database**
5. Select **KV**
6. Name it: `greenloop-kv`
7. Done!

The environment variables are set automatically.

