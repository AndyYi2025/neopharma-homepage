# Homepage RRD (Requirements & Design Document)

## 📄 Page Overview

**URL**: `/` (root)
**Purpose**: Primary landing page to capture visitor attention, communicate value proposition, and drive conversions to the application
**Target Audience**: Pharmaceutical sales representatives, sales directors, MSLs

---

## 🎯 Objectives

### Primary:
1. **Convert visitors to trial signups** (CTA clicks to app.neopharma.com)
2. **Communicate core value** in <10 seconds
3. **Build credibility** through data and social proof

### Secondary:
1. Drive traffic to feature pages
2. Capture email leads (optional newsletter)
3. Establish brand identity

---

## 👥 User Stories

### Story 1: First-Time Visitor
**As a** pharmaceutical sales rep
**I want to** quickly understand what NeoPharma does
**So that** I can decide if it's relevant to my needs

**Acceptance Criteria**:
- Hero headline clearly states value proposition
- Subheading explains the "how"
- Visual demo or screenshot visible above the fold

### Story 2: Interested Prospect
**As a** sales director evaluating tools
**I want to** see key features and benefits
**So that** I can determine if this solves our team's problems

**Acceptance Criteria**:
- 3-4 key features highlighted with icons
- Quantifiable benefits (time savings, ROI)
- Social proof (stats, testimonials if available)

### Story 3: Ready-to-Buy User
**As a** sales rep ready to try the platform
**I want to** easily start a trial or sign up
**So that** I can start using NeoPharma immediately

**Acceptance Criteria**:
- Prominent CTA button ("Get Started", "Start Free Trial")
- CTA appears multiple times (hero, mid-page, bottom)
- Clear path to app.neopharma.com

---

## 📐 Layout & Structure

### Section 1: Hero (Above the Fold)
**Purpose**: Capture attention and communicate core value in <5 seconds

**Content Requirements**:
- **Headline** (H1): "AI-Powered Pharmaceutical Lead Discovery"
  - Alt: "Find High-Value Physicians in Minutes, Not Hours"
  - Alt: "Transform Your Sales with AI-Powered Intelligence"
- **Subheading** (H2): "Discover 180K+ physicians, analyze 25M+ prescriptions, and target the right leads with NEO AI"
- **Primary CTA**: "Start Free Trial" → app.neopharma.com/signup
- **Secondary CTA**: "Watch Demo" → Video modal or /demo page
- **Hero Image/Video**:
  - AI-generated abstract medical/tech background (Banana Pro)
  - Or: Animated dashboard screenshot
  - Or: NEO AI chat demo video (15-30 seconds)

**Visual Design**:
- **Layout**: Left text (60%), right visual (40%) - OR - Center text with full-width background
- **Colors**: Primary blue gradient background, white text
- **Animation**: Fade-in on load, floating AI elements (optional)

**Technical**:
- Responsive: Stack vertically on mobile
- Video: Auto-play (muted), fallback to image
- CTA: Track clicks to measure conversion

---

### Section 2: Social Proof / Trust Bar
**Purpose**: Build immediate credibility

**Content Requirements**:
- Stats in 3-4 columns:
  - "180K+ High-Value Physicians"
  - "25M+ Prescriptions Analyzed"
  - "400K+ Clinical Trials Tracked"
  - "30x Faster Lead Discovery"
- Icons for each stat
- Optional: "Trusted by 500+ pharma sales reps" (if applicable)

**Visual Design**:
- Light gray background
- Icon + large number + description
- Animated counter on scroll (count up effect)

**Technical**:
- Intersection Observer for animation trigger
- Numbers as data attributes for easy updates

---

### Section 3: Key Features (3-Column Grid)
**Purpose**: Communicate main value propositions

**Content Requirements**:
**Feature 1**: Smart Doctor Discovery
- Icon: 🔍 or custom search icon
- Headline: "Find Your Perfect Targets"
- Description: "Search 180K+ high-value physicians by specialty, location, prescribing patterns, and research activity in seconds."
- Link: "Learn More" → /features#discovery

**Feature 2**: Prescribing Intelligence
- Icon: 💊 or custom chart icon
- Headline: "Know What They Prescribe"
- Description: "Access 25M+ Medicare Part D records. See top drugs, prescription volumes, and identify switching opportunities."
- Link: "Learn More" → /features#prescribing

**Feature 3**: NEO AI Assistant
- Icon: 🤖 or custom AI icon
- Headline: "Ask in Plain English"
- Description: "No complex filters. Just ask NEO: 'Find cardiologists in Boston prescribing blood thinners' and get instant results."
- Link: "Learn More" → /features#neo-ai

**Visual Design**:
- White cards with subtle shadow
- Icon at top, centered
- Hover: Lift effect (translateY)
- Mobile: Stack vertically

**Technical**:
- Card component (reusable)
- Hover animations with CSS transitions
- Links track feature interest

---

### Section 4: How It Works (3-Step Process)
**Purpose**: Demystify the platform and show ease of use

**Content Requirements**:
**Step 1**: Search
- Illustration: Search interface or magnifying glass
- Title: "1. Ask NEO or Use Advanced Filters"
- Description: "Natural language queries or 20+ search filters. Your choice."

**Step 2**: Analyze
- Illustration: Data visualization or charts
- Title: "2. Review Comprehensive Profiles"
- Description: "Prescribing data, research activity, payment history, contact info—all in one place."

**Step 3**: Export
- Illustration: Export icon or CRM integration
- Title: "3. Export & Start Selling"
- Description: "Export to Excel, import to your CRM, and start calling with confidence."

**Visual Design**:
- Horizontal timeline (desktop) or vertical (mobile)
- Numbers in circles connecting steps
- Illustrations from Figma (Banana Pro generated)
- Light blue background

**Technical**:
- Responsive layout (flex or grid)
- Optional: Scroll-triggered animations

---

### Section 5: Testimonials / Use Cases (Optional)
**Purpose**: Provide social proof and relatable scenarios

**Content Requirements** (if available):
- 2-3 testimonial cards:
  - Quote
  - Name, Title, Company (optional)
  - Photo (optional, or avatar)
- Or: 2-3 quick use case snippets:
  - "Territory Planning in 10 Minutes"
  - "KOL Identification for Product Launch"
  - "Competitive Displacement Strategy"

**Visual Design**:
- Card layout, light background
- Quote icon
- Professional photos or illustrations

**Technical**:
- Slider/carousel if >3 testimonials (optional)
- Static grid acceptable for MVP

---

### Section 6: Final CTA (Above Footer)
**Purpose**: Last chance conversion

**Content Requirements**:
- **Headline**: "Ready to Transform Your Sales Process?"
- **Subheading**: "Start your 14-day free trial. No credit card required."
- **CTA Button**: "Get Started Free" → app.neopharma.com/signup
- **Secondary CTA**: "Schedule a Demo" → /contact or Calendly link

**Visual Design**:
- Full-width section
- Primary blue gradient background
- Large, centered text
- CTA button: White background, primary text (high contrast)

**Technical**:
- Track CTA conversion rate
- A/B test button copy (optional)

---

### Section 7: Footer
**Purpose**: Navigation, legal, contact

**Content Requirements**:
- **Column 1**: NeoPharma logo + tagline
- **Column 2**: Product links
  - Features
  - How It Works
  - Pricing
  - Contact
- **Column 3**: Resources (future)
  - Blog
  - Help Center
  - API Docs
- **Column 4**: Company
  - About
  - Privacy Policy
  - Terms of Service
- **Column 5**: Contact
  - Email: contact@neopharma.com
  - Social media icons (LinkedIn, Twitter)

**Visual Design**:
- Dark background (navy or black)
- White/light gray text
- 4-5 columns (desktop), stack (mobile)

**Technical**:
- Reusable Footer component (all pages)
- Copyright year: Dynamic `{new Date().getFullYear()}`

---

## 🎨 Design Specifications

### Typography:
- **H1 (Headline)**: Poppins, 48-64px, bold, line-height 1.2
- **H2 (Subheading)**: Poppins, 24-32px, medium, line-height 1.4
- **Body**: Inter, 16-18px, regular, line-height 1.6
- **CTA Button**: Inter, 16-18px, semibold

### Colors:
- **Primary**: #0ea5e9 (blue)
- **Accent**: #d946ef (purple)
- **Background**: #ffffff (white), #f9fafb (light gray for sections)
- **Text**: #111827 (dark gray), #6b7280 (medium gray)
- **CTA**: #0ea5e9 (primary) or gradient (primary → accent)

### Spacing:
- **Section Padding**: 80px vertical (desktop), 40px (mobile)
- **Container**: Max-width 1200px, centered
- **Grid Gap**: 32px

### Buttons:
- **Primary CTA**:
  - Background: Primary blue (#0ea5e9)
  - Text: White
  - Padding: 16px 32px
  - Border-radius: 8px
  - Hover: Darker blue (#0284c7) + slight lift
  - Shadow: Subtle on hover
- **Secondary CTA**:
  - Background: White
  - Text: Primary blue
  - Border: 2px solid primary
  - Hover: Light blue background

### Animations:
- **Hero**: Fade-in (0.6s)
- **Stats**: Count-up on scroll
- **Cards**: Hover lift (translateY(-4px), 0.3s)
- **Buttons**: Scale (1.05) on hover
- **Scroll**: Intersection Observer for fade-in animations

---

## 📱 Responsive Design

### Desktop (>1024px):
- Hero: Side-by-side text/visual
- Features: 3-column grid
- How It Works: Horizontal timeline
- Footer: 5 columns

### Tablet (768-1024px):
- Hero: Side-by-side (60/40)
- Features: 2-column grid
- How It Works: Horizontal (smaller)
- Footer: 3 columns

### Mobile (<768px):
- Hero: Stack vertically, text first
- Features: 1 column, full-width cards
- How It Works: Vertical timeline
- Footer: 1 column, stack all

---

## 🔧 Technical Requirements

### Framework:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Components:
- `<Hero />` - Hero section
- `<StatsBar />` - Social proof stats
- `<FeatureCard />` - Reusable feature card
- `<ProcessStep />` - How It Works step
- `<CTASection />` - Call-to-action section
- `<Footer />` - Global footer

### Performance:
- **First Contentful Paint (FCP)**: <1.5s
- **Largest Contentful Paint (LCP)**: <2.5s
- **Cumulative Layout Shift (CLS)**: <0.1
- **Time to Interactive (TTI)**: <3s

### SEO:
- **Title**: "NeoPharma - AI-Powered Pharmaceutical Lead Discovery"
- **Description**: "Discover 180K+ high-value physicians and analyze 25M+ prescriptions with NEO AI. Transform your pharma sales with intelligent lead discovery. Start free trial."
- **Keywords**: pharmaceutical sales, lead discovery, physician targeting, NEO AI, prescribing intelligence
- **OG Image**: Hero visual (1200x630)
- **Canonical URL**: https://www.neopharma.com/

### Analytics:
- Track CTA clicks (all "Get Started" buttons)
- Track scroll depth (how far users scroll)
- Track time on page
- Track feature card clicks
- Track video play (if demo video)

---

## ✅ Acceptance Criteria

### Functional:
- [ ] Hero section visible above the fold on all devices
- [ ] All CTAs link to app.neopharma.com (or appropriate page)
- [ ] Stats animate on scroll into view
- [ ] Feature cards clickable, link to /features
- [ ] Video autoplays (muted) or fallback image loads
- [ ] Footer links work correctly
- [ ] Responsive on mobile, tablet, desktop

### Non-Functional:
- [ ] Page loads in <2 seconds
- [ ] No layout shift during load
- [ ] Images optimized (<500KB total)
- [ ] Accessible (WCAG 2.1 AA)
  - Alt text on images
  - Keyboard navigable
  - Proper heading hierarchy
- [ ] SEO meta tags present

### Design:
- [ ] Matches Figma design (if provided)
- [ ] Colors match brand guidelines
- [ ] Typography consistent
- [ ] Animations smooth (60fps)
- [ ] Professional, modern aesthetic

---

## 📊 Success Metrics

### Primary KPIs:
- **CTA Click Rate**: Target 10%+ (visitors who click "Get Started")
- **Bounce Rate**: Target <50%
- **Time on Page**: Target >1 minute
- **Scroll Depth**: Target 60%+ scroll to CTA section

### Secondary KPIs:
- **Page Load Time**: <2s
- **Mobile Traffic**: Monitor % (optimize if >50%)
- **Feature Link Clicks**: Track interest in specific features
- **Demo Video Plays**: Track engagement

---

## 🚀 Implementation Plan

### Phase 1: Structure (Day 1)
- [ ] Create page layout
- [ ] Build Hero component
- [ ] Build StatsBar component
- [ ] Set up Tailwind config

### Phase 2: Content (Day 1-2)
- [ ] Add hero copy
- [ ] Add feature cards (3)
- [ ] Add How It Works steps (3)
- [ ] Add footer content

### Phase 3: Design (Day 2)
- [ ] Apply brand colors
- [ ] Add hero visual (Figma/Banana Pro)
- [ ] Style buttons and CTAs
- [ ] Add animations

### Phase 4: Testing (Day 2-3)
- [ ] Test responsive design
- [ ] Test CTA links
- [ ] Test animations
- [ ] Accessibility audit
- [ ] Performance audit (Lighthouse)

### Phase 5: Launch (Day 3)
- [ ] Deploy to Vercel/Netlify
- [ ] Configure domain (www.neopharma.com)
- [ ] Set up analytics
- [ ] Monitor metrics

---

## 🎯 Future Enhancements

### V2 Features:
- [ ] A/B test hero headlines
- [ ] Add interactive demo (live NEO AI chat)
- [ ] Add customer logos (once available)
- [ ] Add video testimonials
- [ ] Implement chat widget (Intercom/Drift)
- [ ] Add exit-intent popup (email capture)

### V3 Features:
- [ ] Personalization (different copy for roles)
- [ ] Dynamic content (show stats from real database)
- [ ] Case study section with ROI calculator
- [ ] Integration showcase (Salesforce, Veeva logos)

---

**Homepage RRD v1.0** | Last Updated: 2025-01-27
