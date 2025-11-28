# NeoPharma Homepage - Deployment Guide

## 🚀 Quick Deployment to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Git installed locally

### Step 1: Push to GitHub

```bash
cd NeoPharma_Homepage

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: NeoPharma Homepage"

# Create repository on GitHub (via web interface)
# Then link and push:
git remote add origin https://github.com/yourusername/neopharma-homepage.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

**Option A: Via Vercel Website (Easiest)**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js - click "Deploy"
5. Wait 2-3 minutes
6. Your site is live! 🎉

**Option B: Via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts (accept defaults)
# Production deployment
vercel --prod
```

### Step 3: Configure Custom Domain

1. In Vercel dashboard → Your Project → Settings → Domains
2. Add domain: `www.neopharma.com`
3. Add DNS records (Vercel provides instructions):
   - Type: `A` Record
   - Name: `www`
   - Value: `76.76.21.21` (Vercel IP)

   OR

   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

4. Wait for DNS propagation (5-60 minutes)
5. Your site is live at www.neopharma.com! ✅

### Step 4: Configure Environment Variables

1. Vercel dashboard → Your Project → Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_APP_URL` = `https://app.neopharma.com`
3. Redeploy to apply changes

---

## 🌐 Alternative: Deploy to Netlify

### Option 1: Drag & Drop (Quick Test)

```bash
# Build the site
npm run build

# Drag /out folder to netlify.com/drop
```

### Option 2: Git Integration

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

### Custom Domain on Netlify

1. Site settings → Domain management → Add custom domain
2. Enter `www.neopharma.com`
3. Add DNS records from your domain provider
4. Wait for DNS propagation

---

## 🔧 Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build & Test Locally

```bash
# Build for production
npm run build

# Export static files (to /out)
npm run export

# Preview production build (optional)
npm run start
```

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:8000
```

---

## 📦 Project Structure After Deployment

```
NeoPharma_Homepage/
├── src/                   # Source code
├── public/                # Static assets
├── docs/                  # Documentation (not deployed)
├── .next/                 # Next.js build output (gitignored)
├── out/                   # Static export (gitignored)
└── node_modules/          # Dependencies (gitignored)
```

**Deployed**: Only `/out` folder (static HTML/CSS/JS)
**Size**: ~2-5 MB
**Performance**: Instant load (CDN)

---

## 🎨 Adding Your Design Assets

### Figma Exports

1. Export assets from Figma (PNG, SVG)
2. Place in `public/images/`
3. Reference in components:
   ```jsx
   <Image src="/images/hero-bg.png" alt="Hero" width={1200} height={600} />
   ```

### Banana Pro AI Images

1. Generate images with Banana Pro
2. Optimize images (use tinypng.com or squoosh.app)
3. Place in `public/images/ai-generated/`
4. Reference in components

### Image Optimization

- Use `.jpg` for photos (smaller file size)
- Use `.png` for graphics with transparency
- Use `.svg` for icons (scalable)
- Target: <500KB per image

---

## 🔐 Environment Variables Reference

### Public (NEXT_PUBLIC_*)
Exposed to browser, safe to use in client components:

```env
NEXT_PUBLIC_APP_URL=https://app.neopharma.com
NEXT_PUBLIC_GA_ID=your_analytics_id
```

### Private (SERVER-SIDE ONLY)
Only available in API routes, never exposed to browser:

```env
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=contact@neopharma.com
```

---

## 📊 Post-Deployment Checklist

### Functional Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] Forms submit (if implemented)
- [ ] Images load properly
- [ ] CTAs link to correct URLs (app.neopharma.com)

### Performance Testing
- [ ] Lighthouse score >90 (run in Chrome DevTools)
- [ ] Page load time <2 seconds
- [ ] Images optimized (<500KB each)
- [ ] No console errors

### SEO Testing
- [ ] Meta tags present (view page source)
- [ ] OG tags for social sharing
- [ ] Sitemap generated (if applicable)
- [ ] robots.txt present (if applicable)

### Domain & SSL
- [ ] Custom domain configured (www.neopharma.com)
- [ ] HTTPS enabled (auto on Vercel/Netlify)
- [ ] SSL certificate valid
- [ ] Redirects working (http → https, naked domain → www)

---

## 🔄 Continuous Deployment (CD)

### Automatic Deployments

Vercel/Netlify auto-deploy when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update hero section"
git push

# Vercel/Netlify auto-deploys in 2-3 minutes
# No manual steps needed! 🎉
```

### Preview Deployments

- Every pull request gets a preview URL
- Test changes before merging to main
- Share preview links with team

---

## 🐛 Troubleshooting

### Build Fails

**Error**: `Module not found`
**Solution**: `npm install` to ensure all dependencies installed

**Error**: `Sharp module error`
**Solution**: `npm install sharp` (image optimization)

### Images Not Loading

**Issue**: Images show broken icon
**Solution**:
- Ensure images are in `public/images/`
- Reference with `/images/filename.jpg` (leading slash)
- Check file names (case-sensitive on Linux servers)

### Domain Not Working

**Issue**: Domain shows "Page not found"
**Solution**:
- Wait for DNS propagation (up to 48 hours, usually 5-60 minutes)
- Check DNS records in domain registrar
- Verify domain added in Vercel/Netlify dashboard

### Environment Variables Not Working

**Issue**: `undefined` in browser
**Solution**:
- Must start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables
- Check Vercel/Netlify dashboard for typos

---

## 📧 Support

- **Vercel Support**: vercel.com/support
- **Netlify Support**: netlify.com/support
- **Next.js Docs**: nextjs.org/docs
- **Project Issues**: [Your GitHub repo issues]

---

## 🎯 Next Steps

1. ✅ Deploy to Vercel/Netlify
2. ✅ Configure custom domain
3. 🎨 Add your Figma designs
4. 🤖 Generate AI images with Banana Pro
5. 📝 Implement remaining pages (Features, Pricing, Contact)
6. 📊 Set up analytics (Google Analytics, Plausible)
7. 🚀 Launch and promote!

---

**Deployment Guide v1.0** | Last Updated: 2025-01-27
