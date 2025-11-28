# Contact Page RRD (Requirements & Design Document)

## 📄 Page Overview

**URL**: `/contact`
**Purpose**: Provide contact options for sales, support, and inquiries
**Target Audience**: Enterprise prospects, existing customers, general inquiries

---

## 🎯 Objectives

### Primary:
1. **Capture enterprise leads** - Sales inquiries for custom pricing
2. **Provide support** - Help existing customers
3. **Build accessibility** - Easy to reach the team

### Secondary:
1. Offer multiple contact methods (form, email, calendar)
2. Set response time expectations
3. Route inquiries appropriately

---

## 👥 User Stories

### Story 1: Enterprise Buyer
**As a** VP of Sales evaluating NeoPharma for my team
**I want to** speak with someone about enterprise pricing
**So that** I can get a custom quote and demo

**Acceptance Criteria**:
- "Schedule Demo" option prominent
- Contact form with "Enterprise inquiry" option
- Sales email address visible

### Story 2: Existing Customer
**As an** existing NeoPharma user
**I want to** get help with a technical issue
**So that** I can continue using the platform

**Acceptance Criteria**:
- Support email address visible
- Link to help center (if exists)
- Expected response time stated

### Story 3: General Inquirer
**As a** prospective customer with questions
**I want to** send a message to the team
**So that** I can get answers before signing up

**Acceptance Criteria**:
- Simple contact form
- Multiple inquiry types (dropdown)
- Email address for direct contact

---

## 📐 Layout & Structure

### Section 1: Hero
**Content**:
- **Headline**: "Get in Touch"
- **Subheading**: "Questions? We're here to help. Reach out to our team."

---

### Section 2: Contact Options (3-Column Layout)

#### Option 1: Schedule a Demo
**Icon**: 📅 Calendar

**Content**:
- **Headline**: "Schedule a Demo"
- **Description**: "See NeoPharma in action with a personalized demo for your team."
- **CTA Button**: "Book a Demo" → Calendly link or calendar booking tool
- **Best For**: Enterprise teams, sales directors

**Features**:
- 30-minute live demo
- Q&A with product specialist
- Custom use case walkthrough
- Available: Monday-Friday, 9am-5pm EST

---

#### Option 2: Sales Inquiry
**Icon**: 💼 Briefcase

**Content**:
- **Headline**: "Talk to Sales"
- **Description**: "Interested in Enterprise pricing or custom solutions? Our sales team is ready to help."
- **Email**: sales@neopharma.com
- **CTA Button**: "Contact Sales" → Opens contact form (pre-filled with "Sales Inquiry")
- **Best For**: Enterprise buyers, team purchases

**Response Time**: Within 4 business hours

---

#### Option 3: Customer Support
**Icon**: 🛟 Life Ring

**Content**:
- **Headline**: "Customer Support"
- **Description**: "Existing customer? Get help with your account or technical issues."
- **Email**: support@neopharma.com
- **CTA Button**: "Visit Help Center" → /help (future) or opens email
- **Best For**: Existing customers

**Response Time**: Within 24 hours (Pro/Enterprise: priority)

---

### Section 3: Contact Form

**Title**: "Send Us a Message"

**Form Fields**:
1. **Name** (required, text input)
   - Placeholder: "Your full name"

2. **Email** (required, email input)
   - Placeholder: "you@company.com"
   - Validation: Must be valid email format

3. **Company** (optional, text input)
   - Placeholder: "Your company name"

4. **Inquiry Type** (required, dropdown select)
   - Options:
     - General Question
     - Sales Inquiry (Enterprise)
     - Technical Support
     - Partnership Opportunity
     - Press/Media
     - Other

5. **Message** (required, textarea)
   - Placeholder: "How can we help you?"
   - Min length: 20 characters

6. **Submit Button**: "Send Message"

**Form Behavior**:
- **Validation**: Client-side validation (red error messages)
- **Success**: "Thanks! We'll get back to you within 24 hours." (green banner)
- **Error**: "Something went wrong. Please try again or email us directly." (red banner)
- **Email Notification**: Send to appropriate team based on inquiry type
  - Sales Inquiry → sales@neopharma.com
  - Technical Support → support@neopharma.com
  - Other → contact@neopharma.com

**Technical**:
- Form submission via API (Next.js API route)
- Email service: SendGrid, Resend, or Nodemailer
- Spam protection: Honeypot field (invisible)
- Rate limiting: Max 3 submissions per IP per hour

---

### Section 4: Direct Contact Information

**Title**: "Other Ways to Reach Us"

**Content**:
**Email**:
- General: contact@neopharma.com
- Sales: sales@neopharma.com
- Support: support@neopharma.com
- Press: press@neopharma.com (optional)

**Office** (optional, if applicable):
- Address: [Physical address if available]
- Hours: Monday-Friday, 9am-5pm EST

**Social Media**:
- LinkedIn: linkedin.com/company/neopharma
- Twitter: @neopharma (optional)

**Visual**: Icons for each contact method

---

### Section 5: FAQ (Optional)

**Title**: "Quick Answers to Common Questions"

**Content**: Link to pricing FAQ or top 3 FAQs
1. "Is there a free trial?" → Yes, 14 days
2. "What's included in Enterprise?" → See /pricing
3. "How do I cancel?" → Email support or from account settings

**CTA**: "See All FAQs" → /pricing#faq or /help

---

### Section 6: Map (Optional)

**Title**: "Our Location" (if physical office)

**Content**:
- Embedded Google Map
- Office address
- Directions link

**Note**: Omit if fully remote or no public office

---

## 🎨 Design Specifications

### Layout:
- 3-column contact options (desktop)
- Stack vertically (mobile)
- Form: Single column, max-width 600px, centered

### Colors:
- **Option Cards**: White background, subtle border
- **Icons**: Primary blue (#0ea5e9)
- **Form**: White background, light gray borders
- **Submit Button**: Primary blue, white text
- **Success Message**: Green background (#10b981)
- **Error Message**: Red background (#ef4444)

### Typography:
- **Headlines**: H2, Poppins, 32px
- **Option Titles**: H3, Poppins, 20px
- **Form Labels**: Inter, 14px, medium
- **Input Text**: Inter, 16px

### Form Styling:
- **Inputs**:
  - Height: 48px
  - Border: 1px solid #d1d5db
  - Border-radius: 8px
  - Focus: Blue border (#0ea5e9), subtle shadow
- **Textarea**:
  - Min-height: 120px
  - Resize: vertical
- **Submit Button**:
  - Full width on mobile
  - Width: 200px on desktop
  - Height: 48px
  - Disabled state: Gray background, no hover

---

## 🔧 Technical Requirements

### Components:
- `<ContactOption />` - Contact method card
- `<ContactForm />` - Form component with validation
- `<FormInput />` - Reusable input component
- `<FormTextarea />` - Reusable textarea component

### Form Handling:
- Client-side validation (React Hook Form or Formik)
- Server-side validation (API route)
- Email sending (SendGrid, Resend, or SMTP)
- Success/error state management

### API Route:
```typescript
// pages/api/contact.ts
POST /api/contact
Body: { name, email, company, inquiryType, message }
Response: { success: boolean, message: string }
```

### Email Template:
```
Subject: New Contact Form Submission - [Inquiry Type]

From: [Name]
Email: [Email]
Company: [Company]
Inquiry Type: [Type]

Message:
[Message]

---
Sent from NeoPharma Contact Form
[Date/Time]
```

### Security:
- Honeypot field (hidden, bots fill it)
- Rate limiting (max 3 per IP per hour)
- CSRF protection (if applicable)
- Input sanitization (prevent XSS)

### Performance:
- Form: Client-side validation (instant feedback)
- Submission: Loading state (button disabled, spinner)
- Success: Clear form after 3 seconds

### SEO:
- **Title**: "Contact NeoPharma - Sales, Support, and Demo Requests"
- **Description**: "Get in touch with NeoPharma. Schedule a demo, contact sales for enterprise pricing, or reach support. Email: contact@neopharma.com"
- **Schema**: Organization contact schema (structured data)

---

## ✅ Acceptance Criteria

### Functional:
- [ ] All 3 contact options displayed
- [ ] Demo scheduling link works (Calendly)
- [ ] Contact form submits successfully
- [ ] Form validation works correctly
- [ ] Success message displayed after submission
- [ ] Email sent to correct address based on inquiry type
- [ ] Email addresses clickable (mailto: links)
- [ ] Responsive on all devices
- [ ] Spam protection active (honeypot + rate limit)

### Non-Functional:
- [ ] Form accessible (keyboard navigable, screen reader friendly)
- [ ] Error messages clear and helpful
- [ ] Page loads in <2 seconds
- [ ] Email delivery confirmed (test)

---

## 📊 Success Metrics

### Primary KPIs:
- **Form Submissions**: Target 5%+ of page visitors
- **Demo Bookings**: Track via Calendly (target 10+ per month)
- **Email Opens**: Track if using sales@ email (target 80%+)
- **Response Time**: Internal metric (<4 hours for sales, <24 hours for support)

### Secondary KPIs:
- **Inquiry Type Distribution**: Track which inquiries are most common
- **Spam Rate**: Monitor and adjust protection if needed
- **Conversion Rate**: % of form submissions that become customers

---

## 🚀 Future Enhancements

### V2:
- [ ] Live chat widget (Intercom, Drift)
- [ ] Phone number (if team grows)
- [ ] Help center/knowledge base
- [ ] Automated chatbot for common questions
- [ ] Form auto-save (localStorage)

### V3:
- [ ] Multi-language support
- [ ] Regional contact options (EU, APAC)
- [ ] Customer success manager assignment (Enterprise)
- [ ] Ticketing system integration (Zendesk)

---

## 📋 Calendar Integration (Calendly Setup)

### Calendly Configuration:
1. Create Calendly account (calendly.com)
2. Set up event type: "NeoPharma Demo" (30 minutes)
3. Availability: Monday-Friday, 9am-5pm EST
4. Questions to ask invitees:
   - Name
   - Email
   - Company
   - Team size
   - Use case (optional)
5. Confirmation email template:
   - Thanks for booking
   - What to expect in demo
   - How to prepare (think about your use case)
   - Link to reschedule

### Integration:
- Embed link: calendly.com/neopharma/demo
- Or: Inline embed on /contact page
- CTA button: "Book a Demo" → Opens Calendly modal or new tab

---

**Contact Page RRD v1.0** | Last Updated: 2025-01-27
