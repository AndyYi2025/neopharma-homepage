# How It Works Page RRD (Requirements & Design Document)

## 📄 Page Overview

**URL**: `/how-it-works`
**Purpose**: Explain the user workflow and demystify the platform for new users
**Target Audience**: First-time visitors, prospects considering signup

---

## 🎯 Objectives

### Primary:
1. **Simplify the concept** - Show how easy it is to use
2. **Reduce friction** - Address "Is this complicated?" concern
3. **Drive trial signups** - CTA after showing simplicity

### Secondary:
1. Build confidence in ease of use
2. Show typical workflows
3. Set expectations for onboarding

---

## 👥 User Stories

### Story 1: Hesitant User
**As a** sales rep unfamiliar with AI tools
**I want to** understand how NeoPharma works
**So that** I know it's not too complicated for me

**Acceptance Criteria**:
- Clear 3-step process
- Visual workflow diagram
- "No technical skills required" messaging

### Story 2: Manager Evaluating
**As a** sales director
**I want to** understand the user workflow
**So that** I can assess training needs for my team

**Acceptance Criteria**:
- Typical use cases shown
- Time estimates provided
- Team collaboration options mentioned

---

## 📐 Layout & Structure

### Section 1: Hero
**Content**:
- **Headline**: "From Search to Sale in 3 Simple Steps"
- **Subheading**: "No technical skills required. No complex setup. Just ask, analyze, and export."
- **Visual**: Workflow diagram or animated process

---

### Section 2: The 3-Step Process

#### Step 1: Search & Discover
**Title**: "1. Find Your Perfect Targets"

**Content**:
**Option A: Ask NEO AI**
- Type natural language query
- Example: "Find cardiologists in Los Angeles prescribing statins"
- NEO understands and executes search
- Time: 10 seconds

**Option B: Use Advanced Filters**
- 20+ search filters available
- Specialty, location, prescribing, research
- Boolean logic (AND/OR)
- Time: 1-2 minutes

**Visual**:
- Split-screen: NEO chat on left, filter panel on right
- Screenshot of search interface

**Stats**:
- "180K+ physicians to search"
- "Average search time: <10 seconds"

---

#### Step 2: Analyze & Enrich
**Title**: "2. Review Comprehensive Profiles"

**Content**:
**What You See**:
1. **Basic Info**
   - Name, specialty, location
   - Contact information
   - Practice details

2. **Prescribing Intelligence**
   - Top prescribed drugs
   - Prescription volumes
   - Beneficiary counts
   - Market trends

3. **Research Activity**
   - Active clinical trials
   - Recent publications
   - NIH grants

4. **Relationship Intelligence**
   - Industry payments
   - Speaking engagements
   - Academic affiliations

**Visual**:
- Annotated screenshot of physician profile
- Highlight key data sections

**Stats**:
- "330+ fields per physician"
- "8+ integrated data sources"

**Time**: 2-3 minutes per profile

---

#### Step 3: Export & Engage
**Title**: "3. Export to Your CRM & Start Selling"

**Content**:
**Export Options**:
- Excel/CSV format
- Customizable fields (select what you need)
- Bulk export (up to 500 leads)
- CRM-ready formatting

**What Happens Next**:
1. Import leads to your CRM (Salesforce, Veeva, etc.)
2. Enrich CRM records with prescribing data
3. Prioritize calls based on intelligence
4. Call prepared with insights

**Visual**:
- Export dialog screenshot
- Flow diagram: NeoPharma → CRM → Sales

**Stats**:
- "Export in seconds"
- "CRM-ready format"

**Time**: 30 seconds to export, 5 minutes to import

---

### Section 3: Real-World Workflows

**Title**: "See How Sales Reps Use NeoPharma"

**Workflow 1: Territory Planning** (5-10 minutes)
1. New territory assigned (California for diabetes drug)
2. Ask NEO: "Find endocrinologists in California prescribing metformin"
3. Apply filters: Practice size > 5, Prescriptions > 500/year
4. Review top 20 profiles
5. Export top 100 leads
6. Import to CRM
7. Start calling

**Workflow 2: KOL Identification** (30 minutes)
1. Launching new cardiovascular drug
2. Search: "Cardiologists with active NIH grants"
3. Filter: Publications > 10, Clinical trials active
4. Review research interests
5. Identify 25 potential KOLs
6. Export with contact info
7. Reach out for advisory board

**Workflow 3: Quick Daily Research** (5 minutes)
1. Meeting with Dr. Smith tomorrow
2. Search Dr. Smith by name or NPI
3. Review profile: Top drugs, research, payments
4. Note: Recently started clinical trial on drug X
5. Prepare tailored pitch around research interest
6. Successful meeting

**Visual**: Timeline graphic for each workflow

---

### Section 4: NEO AI Examples

**Title**: "Ask NEO Anything (in Plain English)"

**Content**: Example queries with results

**Example 1**:
- **Query**: "Find oncologists in Texas"
- **Result**: "Found 342 oncologists in Texas. Top cities: Houston (78), Dallas (64), Austin (45)..."

**Example 2**:
- **Query**: "Which cardiologists prescribe the most blood thinners?"
- **Result**: "Top 10 cardiologists by anticoagulant volume: Dr. Smith (1,245 prescriptions), Dr. Jones (1,103)..."

**Example 3**:
- **Query**: "Show me diabetes researchers with NIH grants"
- **Result**: "15 endocrinologists with active NIH grants for diabetes research. Total funding: $48M..."

**Visual**: Chat interface with these examples

---

### Section 5: Video Demo (Optional)

**Title**: "Watch NeoPharma in Action"

**Content**:
- 2-minute demo video
- Shows: Search → Profile review → Export
- Voiceover or captions explaining each step

**Visual**: Embedded video player (YouTube, Vimeo, or self-hosted)

---

### Section 6: Getting Started

**Title**: "Ready to Try NeoPharma?"

**Content**:
**Onboarding Steps**:
1. **Sign Up** (2 minutes)
   - Email and password
   - Choose plan (14-day free trial)
   - No credit card required

2. **First Search** (2 minutes)
   - Tutorial popup guides first search
   - Try sample queries
   - Explore example profiles

3. **Export First Leads** (1 minute)
   - Export sample results
   - Review format
   - Import to CRM

**Total Time**: 5 minutes to first export

**CTA**: "Start Free Trial" → app.neopharma.com/signup

---

## 🎨 Design Specifications

### Layout:
- Linear, sequential storytelling
- Step numbers prominent (large, colorful circles)
- Alternating visual placement (left/right)

### Colors:
- Step numbers: Primary blue, accent purple, green
- Background: White with subtle gradients
- Section dividers: Light gray

### Typography:
- Step titles: H2, Poppins, 32px
- Descriptions: Body, Inter, 18px (larger for readability)

### Animations:
- Scroll-triggered step animations
- Number circles fade in sequentially
- Screenshots slide in from sides

---

## 🔧 Technical Requirements

### Components:
- `<ProcessStep />` - Step component with number, title, content, visual
- `<WorkflowTimeline />` - Visual timeline for workflows
- `<NEOExample />` - Chat example component
- `<VideoPlayer />` - Embedded video

### Performance:
- Lazy load video
- Optimize screenshots
- Smooth scroll animations (GPU-accelerated)

### SEO:
- **Title**: "How NeoPharma Works - 3 Simple Steps to Intelligent Lead Discovery"
- **Description**: "See how easy it is to discover high-value physicians with NeoPharma. Search with NEO AI, analyze comprehensive profiles, and export to your CRM in minutes."

---

## ✅ Acceptance Criteria

- [ ] 3 main steps clearly defined
- [ ] Real-world workflows shown
- [ ] NEO AI examples interactive or animated
- [ ] Video demo embedded (optional)
- [ ] Getting started section with CTA
- [ ] Mobile responsive
- [ ] Animations smooth and performant

---

## 📊 Success Metrics

- **Time on Page**: Target 3+ minutes (detailed process)
- **Video Play Rate**: Target 40%+ (if video present)
- **CTA Click Rate**: Target 20%+ (high intent after understanding)
- **Scroll Depth**: Target 80%+ (engaged, read full process)

---

**How It Works Page RRD v1.0** | Last Updated: 2025-01-27
