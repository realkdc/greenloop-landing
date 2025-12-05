# Open Graph Image Fix

## Problem
The Vercel logo was showing when sharing the link via SMS/RCS and social media instead of the GreenLoop branding.

## Solution
1. ✅ Converted OG image from SVG to PNG format (better compatibility)
2. ✅ Updated metadata to use PNG instead of SVG
3. ✅ Created conversion script for future updates

## Files Changed
- `src/app/layout.tsx` - Updated metadata to use `og-image.png`
- `public/og-image.png` - New PNG version of the OG image (created from SVG)
- `scripts/convert-og-image.js` - Script to regenerate PNG from SVG

## After Deployment

### 1. Verify OG Tags
Test your OG tags using these tools:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Open Graph Preview**: https://www.opengraph.xyz/

### 2. Clear Caches
After deploying, you may need to clear caches:

**Facebook/Meta:**
- Use the Facebook Sharing Debugger and click "Scrape Again"

**Twitter:**
- Use the Twitter Card Validator to refresh the cache

**SMS/RCS:**
- The cache should update automatically, but may take 24-48 hours
- Try sharing the link in a new conversation to test

### 3. Test Sharing
Test sharing your link:
- SMS/RCS (Android Messages)
- Instagram Stories/DMs
- Facebook
- Twitter
- LinkedIn

## Regenerating the PNG

If you update `og-image.svg`, regenerate the PNG:

```bash
npm run convert-og
```

Or manually:
```bash
node scripts/convert-og-image.js
```

## Notes
- PNG format is required for SMS/RCS and many social platforms
- SVG is not supported by most link preview systems
- The PNG is 1200x630px (standard OG image size)
- Always use absolute URLs (https://greenloop.dev/og-image.png) in metadata
