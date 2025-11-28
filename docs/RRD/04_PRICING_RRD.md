# Pricing Page RRD (Requirements & Design Document)

## 📄 Page Overview

**URL**: `/pricing`
**Purpose**: Present pricing tiers transparently and drive plan selection
**Target Audience**: Qualified prospects ready to evaluate costs, decision-makers

---

## 🎯 Objectives

### Primary:
1. **Convert to trial** - Clear path to free trial
2. **Set expectations** - Transparent pricing, no hidden fees
3. **Qualify leads** - Different tiers for different needs

### Secondary:
1. Build trust through transparency
2. Offer enterprise option for large teams
3. Handle objections (ROI, value justification)

---

## 👥 User Stories

### Story 1: Individual Sales Rep
**As a** pharmaceutical sales rep
**I want to** see if NeoPharma fits my budget
**So that** I can decide if it's worth trying

**Acceptance Criteria**:
- Starter plan < $100/month
- Free trial prominently displayed
- Feature comparison visible

### Story 2: Sales Director
**As a** sales director evaluating for a team
**I want to** see team pricing and discounts
**So that** I can budget for my department

**Acceptance Criteria**:
- Professional plan for small teams
- Enterprise plan for large organizations
- Team discount information
- "Contact Sales" option for custom pricing

---

## 📐 Layout & Structure

### Section 1: Hero
**Content**:
- **Headline**: "Simple, Transparent Pricing"
- **Subheading**: "Start free for 14 days. No credit card required. Cancel anytime."
- **Toggle**: Monthly / Annual (save 20%)

---

### Section 2: Pricing Tiers (3-Column Layout)

#### Tier 1: Starter (Left Column)
**Price**: $99/month ($79/month annual)

**Target**: Individual sales reps, small territories

**Features Included**:
- ✅ 100 searches per month
- ✅ Basic search filters (specialty, location, prescribing)
- ✅ NEO AI (100 queries/month)
- ✅ Prescribing data (Medicare Part D)
- ✅ Export up to 50 leads/month
- ✅ Email support
- ❌ Advanced filters
- ❌ API access
- ❌ Team collaboration

**CTA**: "Start Free Trial" → app.neopharma.com/signup?plan=starter

**Best For**:
- New sales reps
- Small territories
- Limited budget

---

#### Tier 2: Professional (Middle Column - FEATURED)
**Price**: $299/month ($239/month annual)

**Badge**: "Most Popular" or "Best Value"

**Target**: Experienced reps, growing teams, power users

**Features Included**:
- ✅ **Unlimited searches**
- ✅ **All advanced filters** (research, payments, affiliations)
- ✅ **NEO AI (unlimited queries)**
- ✅ Prescribing data (Medicare Part D)
- ✅ Research activity (clinical trials, publications, NIH grants)
- ✅ Payment transparency (Open Payments)
- ✅ **Export up to 500 leads/month**
- ✅ **Priority email support**
- ✅ **Saved searches & alerts**
- ❌ API access
- ❌ Team collaboration

**CTA**: "Start Free Trial" → app.neopharma.com/signup?plan=professional

**Best For**:
- Experienced reps
- Large territories
- High-volume users
- KOL identification

**Highlight**: Featured with border, subtle shadow, "Recommended" badge

---

#### Tier 3: Enterprise (Right Column)
**Price**: Custom Pricing

**Target**: Large organizations, teams of 10+, custom needs

**Features Included**:
- ✅ **Everything in Professional**
- ✅ **Unlimited everything**
- ✅ **API access (RESTful)**
- ✅ **Team collaboration & sharing**
- ✅ **CRM integrations** (Salesforce, Veeva)
- ✅ **Custom data exports**
- ✅ **Dedicated account manager**
- ✅ **Priority support (phone, Slack)**
- ✅ **Onboarding & training**
- ✅ **White-label options**
- ✅ **Custom SLA**

**CTA**: "Contact Sales" → /contact or schedule demo

**Best For**:
- Sales teams (10+ users)
- Enterprise organizations
- Custom integration needs
- Compliance requirements

---

### Section 3: Feature Comparison Table

**Title**: "Compare Plans"

**Table**:
| Feature | Starter | Professional | Enterprise |
|---------|---------|--------------|------------|
| **Searches per month** | 100 | Unlimited | Unlimited |
| **NEO AI queries** | 100 | Unlimited | Unlimited |
| **Basic filters** | ✅ | ✅ | ✅ |
| **Advanced filters** | ❌ | ✅ | ✅ |
| **Prescribing data** | ✅ | ✅ | ✅ |
| **Research activity** | ❌ | ✅ | ✅ |
| **Payment transparency** | ❌ | ✅ | ✅ |
| **Export limit** | 50/month | 500/month | Unlimited |
| **Saved searches** | ❌ | ✅ | ✅ |
| **API access** | ❌ | ❌ | ✅ |
| **Team collaboration** | ❌ | ❌ | ✅ |
| **CRM integrations** | ❌ | ❌ | ✅ |
| **Support** | Email | Priority email | Phone + Slack |
| **Onboarding** | Self-serve | Self-serve | Dedicated |
| **Price** | $99/mo | $299/mo | Custom |

**Mobile**: Collapsible accordions for each plan

---

### Section 4: Team Discounts

**Title**: "Team Pricing"

**Content**:
**Volume Discounts (Professional Plan)**:
- 5-9 users: **20% off** ($239/user/month → $191/user/month)
- 10-19 users: **30% off** ($239/user/month → $167/user/month)
- 20+ users: **40% off** ($239/user/month → $143/user/month)

**Or**: Switch to Enterprise for unlimited users + additional features

**CTA**: "Contact Sales for Team Quote" → /contact

---

### Section 5: ROI Calculator (Interactive)

**Title**: "Calculate Your ROI"

**Content**:
**Inputs** (Sliders or number fields):
1. Current time spent on lead research (hours/week)
2. Number of leads researched (per week)
3. Your hourly rate ($/hour)

**Calculation**:
- **Time Savings**: Current time × 90% (NeoPharma saves 90% of research time)
- **Cost Savings**: Time savings × Hourly rate × 52 weeks
- **ROI**: (Cost savings - NeoPharma subscription) / NeoPharma subscription × 100%

**Example Output**:
```
Current time spent: 20 hours/week
With NeoPharma: 2 hours/week
Time saved: 18 hours/week = 936 hours/year

Hourly rate: $60/hour
Cost savings: $56,160/year
NeoPharma cost: $3,588/year (Professional)

ROI: 1,466% return on investment
Payback period: 2.5 weeks
```

**Visual**: Progress bar or animated numbers

---

### Section 6: FAQ

**Title**: "Pricing Questions Answered"

**FAQs**:
1. **Is there a free trial?**
   - Yes! 14-day free trial, no credit card required. Full access to Professional plan features.

2. **Can I cancel anytime?**
   - Absolutely. No contracts, no penalties. Cancel anytime from your account settings.

3. **What happens after my trial ends?**
   - If you don't choose a paid plan, your account switches to read-only mode. You can reactivate anytime.

4. **Do you offer refunds?**
   - Yes. 30-day money-back guarantee if you're not satisfied.

5. **Can I upgrade or downgrade?**
   - Yes. Upgrade or downgrade anytime. Changes take effect immediately, with pro-rated billing.

6. **What payment methods do you accept?**
   - Credit card (Visa, Mastercard, Amex), ACM bank transfer (Enterprise only).

7. **Is there a setup fee?**
   - No setup fees. Ever.

8. **Can I get an invoice for my company?**
   - Yes. Invoices automatically sent after each payment. Enterprise customers can request net-30 terms.

9. **What if I need more than 500 exports/month?**
   - Upgrade to Enterprise for unlimited exports, or contact us for custom limits.

10. **Do you offer non-profit or academic discounts?**
    - Yes! Contact sales@neopharma.com for special pricing.

**Format**: Accordion (expand/collapse)

---

### Section 7: Social Proof

**Title**: "Trusted by Pharmaceutical Sales Teams"

**Content**:
- "500+ reps saving 18 hours/week with NeoPharma" (if applicable)
- Customer logos (if available)
- Quick testimonial: "NeoPharma paid for itself in the first week" - Sales Rep

---

### Section 8: Final CTA

**Content**:
- **Headline**: "Start Your Free Trial Today"
- **Subheading**: "No credit card required. Full access to Professional features for 14 days."
- **CTA Button**: "Start Free Trial" → app.neopharma.com/signup
- **Secondary**: "Contact Sales" → /contact
- **Trust Badges**:
  - 14-day free trial
  - No credit card required
  - Cancel anytime
  - 30-day money-back guarantee

---

## 🎨 Design Specifications

### Layout:
- 3-column pricing cards (desktop)
- Stack vertically (mobile)
- Professional plan elevated/featured (larger, border, shadow)

### Colors:
- **Cards**: White background, subtle border
- **Professional Badge**: Accent purple or gradient
- **CTA Buttons**: Primary blue (Starter, Pro), Dark blue (Enterprise)
- **Checkmarks**: Green (#10b981)
- **X-marks**: Light gray (#d1d5db)

### Typography:
- **Price**: Large, bold, Poppins, 48px
- **Plan Name**: H3, Poppins, 24px
- **Features**: Body, Inter, 16px, line-height 1.8 (readable lists)

### Spacing:
- Generous padding in pricing cards (40px)
- Clear visual separation between tiers

### Toggle (Monthly/Annual):
- Pill-style toggle
- "Save 20%" badge next to Annual
- Smooth animation on switch

---

## 🔧 Technical Requirements

### Components:
- `<PricingCard />` - Individual pricing tier
- `<PricingToggle />` - Monthly/Annual switch
- `<FeatureTable />` - Comparison table
- `<ROICalculator />` - Interactive ROI widget
- `<FAQAccordion />` - FAQ section

### State Management:
- Toggle state (monthly/annual)
- ROI calculator inputs/outputs
- FAQ accordion expand/collapse

### Performance:
- Static content (no API calls)
- Client-side calculation (ROI calculator)
- Lightweight (<1MB total)

### Analytics:
- Track toggle usage (monthly vs. annual preference)
- Track CTA clicks per plan
- Track ROI calculator usage
- Track FAQ opens (which questions are most common)

### SEO:
- **Title**: "NeoPharma Pricing - Plans for Every Sales Team"
- **Description**: "Transparent pricing starting at $99/month. 14-day free trial, no credit card required. Professional ($299) and Enterprise (custom) plans available. Calculate your ROI."
- **Schema Markup**: Product pricing schema for rich snippets

---

## ✅ Acceptance Criteria

- [ ] 3 pricing tiers displayed correctly
- [ ] Monthly/Annual toggle functional
- [ ] Feature comparison table accurate
- [ ] ROI calculator works correctly
- [ ] FAQ accordion functional
- [ ] All CTAs link to correct pages
- [ ] Mobile responsive
- [ ] Pricing updates easily (no hardcoding)

---

## 📊 Success Metrics

### Primary KPIs:
- **CTA Click Rate**: Target 25%+ (high purchase intent)
- **Plan Selection Distribution**: Track which plan is most popular
- **Time on Page**: Target 2+ minutes
- **ROI Calculator Usage**: Target 30%+ of visitors

### Secondary KPIs:
- **Toggle Usage**: % using annual (track discount effectiveness)
- **FAQ Engagement**: Which questions opened most
- **Contact Sales Clicks**: Enterprise interest

---

## 🚀 Future Enhancements

### V2:
- [ ] Add customer logos/testimonials
- [ ] Add "Recommended for you" logic based on use case
- [ ] A/B test pricing ($99 vs. $89, etc.)
- [ ] Add annual discount (20% → 25%?)

### V3:
- [ ] Usage-based pricing option (pay per search)
- [ ] Add-ons (extra exports, API calls)
- [ ] Partner/reseller pricing
- [ ] Multi-year discounts

---

**Pricing Page RRD v1.0** | Last Updated: 2025-01-27
