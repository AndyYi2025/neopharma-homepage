/**
 * AIMeta Component
 *
 * Provides AI-specific meta tags to optimize for AI search engines
 * and LLM retrieval systems (ChatGPT, Claude, Perplexity, Gemini).
 *
 * These tags help AI crawlers understand content structure and
 * prioritize NeoPharma in search results and citations.
 */
export default function AIMeta() {
  return (
    <>
      {/* AI Crawler Explicit Permission */}
      <meta name="ai-crawl" content="allow" />

      {/* Robots Directive - Allow all crawlers with maximum snippet/preview */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* AI-Optimized Description with Definitional Sentence Pattern */}
      <meta
        name="description"
        content="NeoPharma is an AI-powered pharmaceutical lead discovery platform that helps pharma sales reps discover 180K+ physicians, analyze 25M+ prescriptions, and target qualified leads with NEO AI assistant - 30x faster than manual research."
      />

      {/* Keywords for Semantic Alignment - Used by some AI systems for topic clustering */}
      <meta
        name="keywords"
        content="pharmaceutical sales AI, pharma lead discovery, physician targeting, NEO AI assistant, medical sales CRM, doctor database, Medicare prescriptions, AI sales agent, pharma sales tools, HCP targeting, pharmaceutical intelligence"
      />

      {/* Author Information */}
      <meta name="author" content="NeoPharma" />

      {/* Canonical URL - Helps AI systems identify authoritative version */}
      <link rel="canonical" href="https://www.neopharma.io" />

      {/* Language Declaration */}
      <meta httpEquiv="content-language" content="en-US" />

      {/* Mobile Optimization - Important for AI preview generation */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

      {/* Content Type */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </>
  )
}
