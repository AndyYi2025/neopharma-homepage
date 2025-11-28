# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NeoPharma Homepage** is a static marketing website for NeoPharma - an AI-powered pharmaceutical lead discovery platform. This is the public-facing site (www.neopharma.com) that drives traffic to the main application (app.neopharma.com).

## Tech Stack

- **Next.js 14** with App Router and static export (`output: 'export'`)
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **React Icons** for icon components
- **Google Fonts**: Inter (body) and Poppins (headings)

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production (generates static files)
npm run build

# Export static site to /out directory
npm run export

# Run linter
npm run lint

# Start production server (after build)
npm run start
```

## Project Architecture

### Static Site Generation
This project uses Next.js static export mode configured in `next.config.js`:
- `output: 'export'` - Generates static HTML/CSS/JS files
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Adds trailing slashes to URLs

### App Router Structure
```
src/app/
├── layout.tsx          # Root layout with Header/Footer
├── page.tsx            # Homepage (/)
├── globals.css         # Global styles and Tailwind config
└── [future pages]/     # Features, pricing, contact (not yet implemented)
```

### Component Organization
```
src/components/
└── layout/
    ├── Header.tsx      # Navigation bar with mobile menu
    └── Footer.tsx      # Footer with links and social icons
```

### Layout System
- **Header**: Fixed top navigation with backdrop blur, mobile responsive hamburger menu
- **Footer**: 4-column grid layout with product/company links and social icons
- Both components are included in `app/layout.tsx` and wrap all pages

## Design System

### Colors (defined in `tailwind.config.ts` and `globals.css`)
- **Primary**: Blue (`#0ea5e9`) - Main brand color
- **Accent**: Purple (`#d946ef`) - Secondary/gradient accent
- Color scales available: 50-900 for both primary and accent

### Typography
- **Body**: Inter font (sans-serif)
- **Headings**: Poppins font (display)
- Imported via Google Fonts in `layout.tsx`

### Utility Classes (in `globals.css`)
- `.container` - Max-width wrapper with responsive padding
- `.section` - Standard section padding (py-16 md:py-24)
- `.btn` - Base button styles
- `.btn-primary` - Primary button (blue background)
- `.btn-secondary` - Secondary button (white with blue border)
- `.btn-large` - Larger button variant
- `.card` - Card component with shadow and hover effects
- `.gradient-text` - Gradient text effect (primary to accent)
- `.gradient-bg` - Gradient background (primary to accent)

### Animations
- `animate-fade-in` - Fade in effect (0.6s)
- `animate-slide-up` - Slide up from bottom (0.6s)
- `animate-float` - Floating animation (3s infinite)

## Environment Variables

Create `.env.local` based on `.env.local.example`:

```env
# Required: URL of main application
NEXT_PUBLIC_APP_URL=https://app.neopharma.com

# Optional: Analytics and contact form
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

**Important**: Only `NEXT_PUBLIC_*` variables are available in client components.

## Page Structure Pattern

All pages follow this structure:
1. **Hero Section** - Large heading with CTA buttons
2. **Stats Section** - Key metrics in grid layout
3. **Features Section** - 3-column grid of feature cards
4. **How It Works** - 3-step process explanation
5. **CTA Section** - Final call-to-action with gradient background

## Key Business Context

### Target Audience
Pharmaceutical sales representatives and marketing teams

### Value Propositions
- 180K+ high-value physician profiles
- 25M+ Medicare prescription records analyzed
- NEO AI assistant for natural language queries
- 30x faster lead discovery than manual research

### Main Application Integration
- CTA buttons link to `NEXT_PUBLIC_APP_URL` (defaults to https://app.neopharma.com)
- All "Start Free Trial" and "Get Started" buttons open in new tab with `target="_blank"`
- The homepage drives traffic to the main application but does not include application functionality

## Documentation Structure

The `docs/` directory contains comprehensive business documentation:
- `PROJECT_OVERVIEW.md` - Platform mission, architecture, data sources
- `SALES_HIGHLIGHTS.md` - Key selling points for pharma sales teams
- `RRD/*.md` - Requirements & design documents for each page
- `DEPLOYMENT.md` - Vercel/Netlify deployment instructions

**Refer to these docs when implementing new pages or features to ensure alignment with business requirements.**

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=out
```

The site is configured for static export and deploys to a CDN. No server-side rendering.

## Common Tasks

### Adding a New Page
1. Create directory in `src/app/` (e.g., `src/app/features/`)
2. Add `page.tsx` in that directory
3. Reference RRD documentation in `docs/RRD/` for requirements
4. Use existing design system utilities and components
5. Update navigation links in `Header.tsx` and `Footer.tsx` if needed

### Adding Images
1. Place images in `public/images/` directory
2. Reference with `/images/filename.jpg` (leading slash required)
3. Use Next.js `<Image>` component or standard `<img>` tag (images are unoptimized for static export)

### Styling Conventions
- Use Tailwind utility classes for styling
- Follow responsive-first approach (mobile → desktop)
- Use custom utility classes defined in `globals.css` for common patterns
- Apply `container` class to sections for consistent max-width and padding
- Use `section` class for consistent vertical spacing

### Client Components
When using React hooks (`useState`, `useEffect`, etc.), add `'use client'` directive at top of file (see `Header.tsx` example for mobile menu state management).

## Important Notes

- **No server-side features**: This is a static export - no API routes, no server components with dynamic data
- **Image optimization disabled**: Required for static export mode
- **External links**: All links to main application should use `target="_blank"` and `rel="noopener noreferrer"`
- **Trailing slashes**: URLs automatically get trailing slashes (configured in next.config.js)
- **Font loading**: Google Fonts are imported both in `layout.tsx` (next/font) and `globals.css` (@import) for reliability
