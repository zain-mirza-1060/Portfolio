# Deployment Guide

This portfolio can be deployed to **Vercel** for free. Vercel is the recommended platform for Next.js applications.

## Prerequisites

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free tier available)
- Your portfolio code pushed to a GitHub repository

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio ready for deployment"
   git push origin main
   ```

2. **Import the project on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click **Add New** → **Project**
   - Select your portfolio repository
   - Vercel will auto-detect Next.js and configure the build

3. **Configure build settings** (usually auto-detected)
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Deploy**
   - Click **Deploy**
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from project directory**
   ```bash
   cd /path/to/Portfolio
   vercel
   ```

3. **Follow the prompts**
   - Log in or create a Vercel account
   - Link to existing project or create new one
   - Confirm build settings

4. **Production deployment**
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. In the Vercel dashboard, open your project
2. Go to **Settings** → **Domains**
3. Add your custom domain (e.g., `zainmirza.com`)
4. Follow the DNS configuration instructions

## Environment Variables

This portfolio does not require environment variables for basic deployment. If you add features that need secrets (e.g., contact form backend), add them in **Settings** → **Environment Variables** on Vercel.

## Automatic Deployments

With GitHub integration, every push to your main branch triggers a new deployment. Pull requests get preview deployments automatically.

## Troubleshooting

- **Build fails:** Ensure `npm run build` works locally
- **404 on refresh:** Next.js handles this; no extra config needed for static export
- **Slow first load:** Vercel uses edge caching; subsequent loads are fast
