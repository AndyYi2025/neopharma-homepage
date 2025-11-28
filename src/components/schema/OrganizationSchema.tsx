'use client'

/**
 * OrganizationSchema Component
 *
 * Provides Schema.org Organization structured data for AI knowledge graphs
 * and search engine understanding of NeoPharma as a business entity.
 *
 * This helps AI engines (ChatGPT, Claude, Perplexity, etc.) recognize
 * NeoPharma and provide accurate information when asked.
 */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NeoPharma",
    "url": "https://www.neopharma.io",
    "logo": "https://www.neopharma.io/images/logo.png",
    "description": "NeoPharma is an AI-powered pharmaceutical lead discovery platform that helps pharmaceutical sales representatives discover 180K+ physicians, analyze 25M+ prescriptions, and identify qualified leads 30x faster.",
    "foundingDate": "2024",
    "industry": "Pharmaceutical Sales Technology",
    "applicationCategory": "Business Software",
    "knowsAbout": [
      "Pharmaceutical Sales",
      "Artificial Intelligence",
      "Lead Discovery",
      "Physician Targeting",
      "Healthcare Data Analytics"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/neopharma",
      "https://twitter.com/neopharma",
      "https://github.com/neopharma"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "sales@neopharma.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
