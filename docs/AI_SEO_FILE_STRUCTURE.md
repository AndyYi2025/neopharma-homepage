# NeoPharma AI-SEO File Structure

**Visual reference for all files affected by AI-SEO optimization**

---

## 📁 CURRENT STATE (Before AI-SEO)

```
NeoPharma_Homepage/
├── public/
│   └── images/
│       └── (empty or minimal)
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx           ← Basic metadata only
│   │   └── page.tsx              ← Homepage (standard content)
│   │
│   └── components/
│       ├── backgrounds/
│       │   └── LiquidEther.tsx
│       └── layout/
│           ├── Header.tsx
│           └── Footer.tsx
│
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── SALES_HIGHLIGHTS.md
│   ├── DEPLOYMENT.md
│   └── RRD/
│       └── (requirements docs)
│
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

**Missing:**
- ❌ No robots.txt
- ❌ No sitemap.xml
- ❌ No Schema.org structured data
- ❌ No AI-specific meta tags
- ❌ No FAQ page
- ❌ No About page
- ❌ No schema components

---

## 📁 TARGET STATE (After Full AI-SEO)

```
NeoPharma_Homepage/
├── public/
│   ├── robots.txt                    ⭐ NEW - Phase 1
│   ├── sitemap.xml                   ⭐ NEW - Phase 1
│   └── images/
│       ├── logo.png                  ⭐ NEW - Required for schema
│       └── screenshot.png            NEW - Optional for Product schema
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx                ✏️ MODIFIED - Add schema + AI meta
│   │   ├── page.tsx                  ✏️ MODIFIED - Definitional sentence + Q&A + FAQ schema
│   │   │
│   │   ├── faq/                      ⭐ NEW - Phase 3
│   │   │   └── page.tsx              FAQ page with FAQPage schema
│   │   │
│   │   ├── about/                    NEW - Phase 3
│   │   │   └── page.tsx              About page with Org schema
│   │   │
│   │   ├── features/                 FUTURE
│   │   │   └── page.tsx              Features detail page
│   │   │
│   │   ├── how-it-works/             FUTURE
│   │   │   └── page.tsx              Process explanation + HowTo schema
│   │   │
│   │   └── pricing/                  FUTURE
│   │       └── page.tsx              Pricing tiers + Offer schema
│   │
│   ├── components/
│   │   ├── backgrounds/
│   │   │   └── LiquidEther.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── schema/                   ⭐ NEW - Phase 1-4
│   │   │   ├── OrganizationSchema.tsx    Phase 1 - Critical
│   │   │   ├── ProductSchema.tsx         Phase 3
│   │   │   ├── FAQSchema.tsx             Phase 3 (optional, can be inline)
│   │   │   └── HowToSchema.tsx           Phase 4
│   │   │
│   │   ├── seo/                      ⭐ NEW - Phase 1
│   │   │   └── AIMeta.tsx                AI-specific meta tags
│   │   │
│   │   └── sections/                 NEW - Phase 3
│   │       └── FAQSection.tsx            Reusable FAQ component
│   │
│   └── lib/                          NEW - Optional
│       ├── metadata.ts                   Centralized metadata
│       └── schema-generators.ts          Schema helper functions
│
├── docs/
│   ├── PROJECT_OVERVIEW.md
│   ├── SALES_HIGHLIGHTS.md
│   ├── DEPLOYMENT.md
│   ├── AI_SEO_IMPLEMENTATION_PLAN.md ⭐ THIS DOC
│   ├── AI_SEO_CHECKLIST.md           ⭐ TRACKING
│   ├── AI_SEO_FILE_STRUCTURE.md      ⭐ THIS FILE
│   └── RRD/
│       └── (requirements docs)
│
├── next.config.js
├── next-sitemap.config.js            NEW - Optional (if using auto-sitemap)
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

**Legend:**
- ⭐ = Critical for Phase 1 (Quick Win)
- ✏️ = Existing file to be modified
- NEW = New file to create
- FUTURE = Planned but not in current scope

---

## 📄 FILE DETAILS

### `public/robots.txt` ⭐
```
Purpose: Allow AI crawler access
Size: ~500 bytes
Priority: CRITICAL
Dependencies: None
```

**Content Preview:**
```txt
User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /
...
Sitemap: https://www.neopharma.com/sitemap.xml
```

---

### `public/sitemap.xml` ⭐
```
Purpose: Help crawlers discover all pages
Size: ~1-2 KB (grows with pages)
Priority: HIGH
Dependencies: All pages must exist
```

**Content Preview:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.neopharma.com/</loc>
    <priority>1.0</priority>
  </url>
  ...
</urlset>
```

**Auto-Generation Option:**
Install `next-sitemap` for automatic generation:
```bash
npm install next-sitemap
```

---

### `src/components/schema/OrganizationSchema.tsx` ⭐
```
Purpose: Knowledge graph entity recognition
Size: ~50 lines
Priority: CRITICAL
Dependencies: Logo image
```

**Structure:**
```typescript
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    // ... company info ...
  }
  return <script type="application/ld+json" ... />
}
```

**Integration:** Add to `layout.tsx` `<head>`

---

### `src/components/seo/AIMeta.tsx` ⭐
```
Purpose: AI-specific meta tags
Size: ~30 lines
Priority: CRITICAL
Dependencies: None
```

**Structure:**
```typescript
export default function AIMeta() {
  return (
    <>
      <meta name="ai-crawl" content="allow" />
      <meta name="robots" content="index, follow..." />
      // ... more meta tags ...
    </>
  )
}
```

**Integration:** Add to `layout.tsx` `<head>`

---

### `src/app/layout.tsx` (MODIFIED) ✏️
```
Purpose: Root layout with global SEO
Original Size: ~55 lines
New Size: ~75 lines
Priority: CRITICAL
Changes:
  - Import OrganizationSchema + AIMeta
  - Add metadataBase
  - Enhance metadata description
  - Add schema + meta to <head>
```

**Changes Preview:**
```diff
+ import OrganizationSchema from '@/components/schema/OrganizationSchema'
+ import AIMeta from '@/components/seo/AIMeta'

  export const metadata: Metadata = {
+   metadataBase: new URL('https://www.neopharma.com'),
    title: 'NeoPharma - AI-Powered Pharmaceutical Lead Discovery',
-   description: 'Discover 180K+ high-value physicians...',
+   description: 'NeoPharma is an AI-powered pharmaceutical lead discovery platform that helps pharma sales reps discover 180K+ physicians, analyze 25M+ prescriptions...',
  }

  return (
    <html lang="en">
+     <head>
+       <OrganizationSchema />
+       <AIMeta />
+     </head>
      <body>...</body>
    </html>
  )
```

---

### `src/app/page.tsx` (MODIFIED) ✏️
```
Purpose: Homepage with AI-optimized content
Original Size: ~180 lines
New Size: ~220 lines
Priority: HIGH
Changes:
  - Add 'use client' (for inline schema)
  - Add definitional sentence
  - Convert headings to Q&A format
  - Add FAQPage schema
```

**Changes Preview:**
```diff
+ 'use client'

  export default function Home() {
+   const faqSchema = { ... } // FAQ structured data

    return (
      <>
+       <script type="application/ld+json" ... />

        <section className="hero...">
+         <p className="definitional-sentence">
+           NeoPharma is an AI-powered pharmaceutical lead discovery platform
+         </p>
          <h1>AI-Powered <span>Pharmaceutical</span> Lead Discovery</h1>
        </section>

        <section className="features...">
-         <h2>Everything You Need to Find High-Value Leads</h2>
+         <h2>How does NeoPharma help pharmaceutical sales teams?</h2>
        </section>
      </>
    )
  }
```

---

### `src/app/faq/page.tsx` (NEW)
```
Purpose: Comprehensive FAQ for AI retrieval
Size: ~200-300 lines
Priority: HIGH
Dependencies: None
```

**Structure:**
```
- FAQ heading (H1)
- 10+ Q&A pairs (H2 questions)
- FAQPage schema
- Internal links
- CTA to trial
```

**Content Categories:**
1. About NeoPharma (3 Q&A)
2. Features (3 Q&A)
3. Pricing (2 Q&A)
4. Compliance (2 Q&A)

---

### `src/app/about/page.tsx` (NEW)
```
Purpose: Company overview + entity linking
Size: ~150 lines
Priority: MEDIUM
Dependencies: Social profiles exist
```

**Structure:**
```
- Definitional paragraph
- Mission/Vision
- Data sources
- Contact info
- Organization schema with sameAs
```

---

### `src/components/schema/ProductSchema.tsx` (NEW)
```
Purpose: Product recognition in AI search
Size: ~40 lines
Priority: MEDIUM
Dependencies: Screenshot image
```

**Schema Type:** SoftwareApplication

**Key Fields:**
- name, description, category
- offers (pricing)
- featureList
- screenshot

---

### `src/components/schema/HowToSchema.tsx` (NEW)
```
Purpose: Process-based queries
Size: ~60 lines
Priority: MEDIUM
Dependencies: How It Works page
```

**Schema Type:** HowTo

**Key Fields:**
- name, description
- step[] array (3 steps)
- totalTime

---

## 📊 FILE SIZE IMPACT

| Category | Before | After | Change |
|----------|--------|-------|--------|
| Public files | 0 | 2 | +2 files |
| Page files | 1 | 4 | +3 pages |
| Components | 3 | 9 | +6 components |
| Docs | 7 | 10 | +3 docs |
| **Total Files** | **~20** | **~32** | **+12 files** |

**Disk Space:** +50KB (schemas + docs)

---

## 🔄 MODIFICATION SUMMARY

### Files to CREATE:
```
public/
  ✅ robots.txt
  ✅ sitemap.xml

src/components/schema/
  ✅ OrganizationSchema.tsx
  ✅ ProductSchema.tsx
  ✅ FAQSchema.tsx
  ✅ HowToSchema.tsx

src/components/seo/
  ✅ AIMeta.tsx

src/app/faq/
  ✅ page.tsx

src/app/about/
  ✅ page.tsx

docs/
  ✅ AI_SEO_IMPLEMENTATION_PLAN.md
  ✅ AI_SEO_CHECKLIST.md
  ✅ AI_SEO_FILE_STRUCTURE.md
```

**Total NEW files: 12**

---

### Files to MODIFY:
```
src/app/
  ✏️ layout.tsx       (Add schema + meta)
  ✏️ page.tsx         (Definitional sentence + Q&A + FAQ schema)
```

**Total MODIFIED files: 2**

---

### Assets NEEDED:
```
public/images/
  📸 logo.png           (512x512 minimum)
  📸 screenshot.png     (Optional - 1200x630 recommended)
```

**Total ASSETS: 1 required, 1 optional**

---

## 🎯 QUICK WIN FILE LIST

**For 45-minute session (70% optimization):**

```
Create:
  ✅ public/robots.txt
  ✅ src/components/schema/OrganizationSchema.tsx
  ✅ src/components/seo/AIMeta.tsx

Modify:
  ✏️ src/app/layout.tsx
  ✏️ src/app/page.tsx (definitional sentence only)

Total: 3 new files, 2 modifications
Time: 45 minutes
```

---

## 📋 IMPLEMENTATION ORDER

### Phase 1 Files (Week 1, Day 1):
```
1. public/robots.txt
2. public/sitemap.xml
3. src/components/schema/OrganizationSchema.tsx
4. src/components/seo/AIMeta.tsx
5. src/app/layout.tsx (modify)
```

### Phase 2 Files (Week 1, Day 2-3):
```
1. src/app/page.tsx (modify - definitional + Q&A + FAQ schema)
```

### Phase 3 Files (Week 2):
```
1. src/app/faq/page.tsx
2. src/app/about/page.tsx
3. src/components/schema/ProductSchema.tsx
4. Update sitemap.xml with new pages
```

### Phase 4 Files (Week 3, Day 1):
```
1. src/components/schema/HowToSchema.tsx
2. Content audit (no new files)
```

### Phase 5 Tasks (Week 3, Day 2-3):
```
External platforms (no file changes)
  - Wikidata
  - Crunchbase
  - LinkedIn
  - Twitter/X
```

---

## ✅ FILE CHECKLIST

### Critical Files (Phase 1):
- [ ] `public/robots.txt` exists
- [ ] `public/sitemap.xml` exists
- [ ] `public/images/logo.png` exists
- [ ] `src/components/schema/OrganizationSchema.tsx` exists
- [ ] `src/components/seo/AIMeta.tsx` exists
- [ ] `src/app/layout.tsx` modified correctly
- [ ] `src/app/page.tsx` has definitional sentence

### Important Files (Phase 2-3):
- [ ] `src/app/page.tsx` has Q&A headings
- [ ] `src/app/page.tsx` has FAQ schema
- [ ] `src/app/faq/page.tsx` exists
- [ ] `src/app/about/page.tsx` exists
- [ ] `src/components/schema/ProductSchema.tsx` exists

### Optional Files (Phase 4-5):
- [ ] `src/components/schema/HowToSchema.tsx` exists
- [ ] `next-sitemap.config.js` if using auto-sitemap
- [ ] `src/lib/metadata.ts` if centralizing metadata
- [ ] `src/lib/schema-generators.ts` if using helpers

---

## 🚀 NEXT STEPS

1. **Review this structure** - Understand what will change
2. **Check dependencies** - Ensure logo, social profiles ready
3. **Choose execution path:**
   - Quick Win (45min) → 3 new files, 2 mods
   - Full Phase 1 (1hr) → 5 new files, 2 mods
   - Complete (3 weeks) → 12 new files, 2 mods

4. **Start with Quick Win** for immediate impact

---

**Document Version:** 1.0
**Companion Docs:**
- Implementation Plan: `AI_SEO_IMPLEMENTATION_PLAN.md`
- Tracking Checklist: `AI_SEO_CHECKLIST.md`
