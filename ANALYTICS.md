# Vercel Web Analytics Integration

This project has been configured with Vercel Web Analytics to track page views and gather real-time traffic insights.

## What Was Added

1. **Package Dependencies**
   - Installed `@vercel/analytics` package (version 2.0.1)
   - Updated `package.json` with proper project metadata

2. **Analytics Script** (`analytics.js`)
   - Created a vanilla JavaScript implementation that loads Vercel's analytics script
   - Automatically initializes the analytics queue (`window.va`)
   - Dynamically loads the Vercel insights script from `/_vercel/insights/script.js`

3. **HTML Integration**
   - Added `<script src="analytics.js"></script>` to all 9 HTML pages:
     - index.html
     - article.html
     - ai-robot-economy.html
     - kindness-is-powerful.html
     - paparazzi-red-carpet.html
     - science-deep-space-signal.html
     - sport-final-whistle.html
     - world-cities-climate-front.html
     - world-cup-2026-countdown.html

4. **Vercel Configuration** (`vercel.json`)
   - Added basic Vercel configuration for static site deployment

## How It Works

The `analytics.js` script follows Vercel's recommended approach for vanilla JavaScript/HTML sites:

1. Initializes the analytics queue (`window.va` and `window.vaq`)
2. Dynamically injects the Vercel insights script
3. Automatically tracks page views on each page load
4. Only tracks data in production (not in development mode)

## Next Steps

To complete the setup:

1. **Enable Analytics in Vercel Dashboard**
   - Go to your project in the Vercel Dashboard
   - Navigate to the Analytics tab
   - Click "Enable" to activate Web Analytics

2. **Deploy to Vercel**
   - Push these changes to your repository
   - Vercel will automatically deploy the site
   - Analytics will start tracking once enabled in the dashboard

3. **Verify Installation**
   - After deployment, visit your site
   - Open browser DevTools → Network tab
   - Look for requests to `/_vercel/insights/script.js` and `/_vercel/insights/view`
   - These requests confirm analytics is working

## Documentation

- [Vercel Web Analytics Quickstart](https://vercel.com/docs/analytics/quickstart)
- [Analytics Package Documentation](https://vercel.com/docs/concepts/analytics/package)

## Privacy

Vercel Web Analytics is privacy-friendly and GDPR-compliant:
- No cookies used
- No personal data collected
- No cross-site tracking
- Aggregated traffic insights only
