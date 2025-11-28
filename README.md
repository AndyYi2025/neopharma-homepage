# NeoPharma Homepage

Modern, AI-focused marketing website for NeoPharma - The AI-Powered Pharmaceutical Lead Discovery Platform

## 🚀 Overview

This is the **public-facing marketing website** for NeoPharma, designed to attract pharmaceutical sales teams and showcase our AI-powered lead discovery platform.

**Live Sites:**
- **Homepage**: www.neopharma.com (this project)
- **Application**: app.neopharma.com (main NeoPharma app)

## 📁 Project Structure

```
NeoPharma_Homepage/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Homepage (/)
│   │   ├── features/        # Features page
│   │   ├── how-it-works/    # How It Works page
│   │   ├── pricing/         # Pricing page
│   │   └── contact/         # Contact page
│   ├── components/          # Reusable React components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── sections/        # Page sections (Hero, Features, etc.)
│   │   └── ui/              # UI components (Button, Card, etc.)
│   └── styles/              # Global styles
├── public/                  # Static assets
│   └── images/              # Images (Figma exports, Banana Pro generated)
├── docs/                    # Documentation
│   ├── PROJECT_OVERVIEW.md  # What NeoPharma does
│   ├── SALES_HIGHLIGHTS.md  # Sales points for pharma teams
│   └── RRD/                 # Requirements & Design for each page
│       ├── 01_HOMEPAGE_RRD.md
│       ├── 02_FEATURES_RRD.md
│       ├── 03_HOW_IT_WORKS_RRD.md
│       ├── 04_PRICING_RRD.md
│       └── 05_CONTACT_RRD.md
└── README.md                # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel (recommended) or Netlify
- **Design**: Figma
- **AI Images**: Banana Pro

## 🚦 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to project
cd NeoPharma_Homepage

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
# Build static site
npm run build

# Export static files (optional)
npm run export

# Output in /out directory
```

## 📄 Pages

1. **Homepage** (`/`) - Hero section, key features, CTA
2. **Features** (`/features`) - Detailed feature showcase
3. **How It Works** (`/how-it-works`) - 3-step process explanation
4. **Pricing** (`/pricing`) - Pricing tiers and contact sales
5. **Contact** (`/contact`) - Contact form and information

## 🎨 Design Assets

### Using Figma

1. Design pages in Figma
2. Export assets (PNG/SVG) to `public/images/`
3. Reference in components

### Using Banana Pro for AI Images

1. Generate hero backgrounds and feature illustrations
2. Save to `public/images/ai-generated/`
3. Optimize images before committing

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
# Set domain: www.neopharma.com
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=out
```

## 🔗 Integration with Main Application

The homepage links to the main NeoPharma application:

- **CTA Buttons**: Link to `https://app.neopharma.com`
- **Get Started**: Redirect to app
- **Login**: Link to app login page

## 📚 Documentation

See the `docs/` directory for:

- **PROJECT_OVERVIEW.md**: What NeoPharma does
- **SALES_HIGHLIGHTS.md**: Key selling points for pharma sales
- **RRD/**: Requirements & Design for each page

## 🎯 Key Features to Highlight

1. **AI-Powered Discovery**: NEO AI assistant
2. **180K+ Physicians**: High-value doctor profiles
3. **Medicare Analytics**: 25M+ prescriptions analyzed
4. **Real-Time Intelligence**: Live data from CMS, FDA, NIH
5. **Research Integration**: Clinical trials, publications, grants

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
# Contact form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=contact@neopharma.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Application URL
NEXT_PUBLIC_APP_URL=https://app.neopharma.com
```

## 📝 Development Workflow

1. **Design in Figma** → Export assets
2. **Generate AI images** → Banana Pro
3. **Develop components** → React + Tailwind
4. **Test locally** → `npm run dev`
5. **Build** → `npm run build`
6. **Deploy** → Vercel/Netlify

## 🎨 Branding

- **Primary Color**: Blue (#0ea5e9)
- **Accent Color**: Purple (#d946ef)
- **Font**: Inter (body), Poppins (headings)
- **Style**: Modern, AI-focused, professional

## 📊 Analytics

Recommended analytics to track:

- Page views
- CTA clicks ("Get Started")
- Contact form submissions
- Time on page
- Bounce rate

## 🤝 Contributing

This is a private project. For internal team:

1. Create feature branch
2. Make changes
3. Test locally
4. Create PR
5. Deploy after review

## 📧 Support

For questions about the homepage:
- Technical: yiwei1982@gmail.com
- Design: [Design team contact]

## 📜 License

Proprietary - Internal use only

---

Built with ❤️ for pharmaceutical sales teams
