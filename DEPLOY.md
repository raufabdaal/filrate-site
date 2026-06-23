# Filrate Deployment Guide — Go Live in 10 Minutes

## Option 1: Vercel + GitHub (Recommended)

### Step 1: Push to GitHub
1. Install **GitHub Desktop** from https://desktop.github.com
2. Sign in with your GitHub account
3. Create a **new repository** (e.g., `filrate-site`) and make it **Public**
4. Choose the local folder where you keep these files (`/filrate`)
5. Commit with message: `Initial launch — v1.0`
6. Click **Publish repository**

### Step 2: Connect to Vercel
1. Go to https://vercel.com and sign up with your **GitHub** account
2. Click **Add New Project**
3. Import your `filrate-site` repository
4. Vercel will auto-detect it as a static site. Leave all settings default.
5. Click **Deploy**
6. In ~30 seconds, you will get a live URL: `https://filrate-site.vercel.app`

### Step 3: Custom Domain (Optional)
1. In Vercel project dashboard, go to **Domains**
2. Add your domain (e.g., `filrate.co`)
3. Update DNS A record to Vercel's IP (they will show you the exact values)
4. Free SSL is automatic

---

## Option 2: Netlify Drop (Fastest, no Git needed)
1. Go to https://app.netlify.com/drop
2. Drag and drop the entire `filrate` folder into the browser window
3. Site goes live instantly with a Netlify subdomain
4. To add a custom domain: go to **Site settings → Domain management**

---

## Option 3: Cloudflare Pages (Fast, free, great CDN)
1. Go to https://dash.cloudflare.com and sign up
2. Go to **Pages** → **Create a project**
3. Connect your GitHub repo (or upload directly)
4. Build settings: leave blank (static HTML, no build command needed)
5. Deploy

---

## What to Check Before Going Live

- [ ] The founder image loads at `/assets/founder.jpg`
- [ ] Contact form submits to Formspree (test it once)
- [ ] Calendly links open correctly in a new tab
- [ ] Vapi demo loads inside the modal (not a popup)
- [ ] Privacy, Terms, and HIPAA pages are accessible from footer links
- [ ] Mobile responsive: test on your phone

---

## Important Notes for Uganda Payments

Since Stripe is difficult in Uganda, the current setup routes paid tiers to a **Calendly onboarding call** instead of a checkout page. You will:
1. Collect interest via the contact form (Formspree → your email)
2. Qualify the practice on the Calendly call
3. Send a Wise invoice or bank transfer details manually
4. Mark them as "active" internally

This is the correct starter flow for your situation. Once you have US entity/banking, you can add Stripe Checkout and swap the Calendly links.

---

## File Structure for Upload

```
filrate/
├── index.html
├── privacy.html
├── terms.html
├── hipaa.html
├── style.css
├── app.js
├── config.js
├── DEPLOY.md
└── assets/
    └── founder.jpg
```

Make sure **all files are in the same folder** when you upload. The HTML files reference each other with `./file.html` paths.

---

## Need Help?

If anything breaks during deploy, check the browser console (F12 → Console) for 404 errors. The most common issue is image paths being wrong because the folder structure changed on upload.
