const STRAPI_URL = process.env.STRAPI_URL || 'https://blog.neopharma.io'

export interface Article {
  id: number
  attributes: {
    title: string
    slug: string
    excerpt: string
    content: string
    author: string
    seoTitle: string
    seoDescription: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface Tag {
  id: number
  attributes: {
    name: string
    slug: string
  }
}

export interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: T
  meta: {}
}

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?sort=publishedAt:desc`, {
      next: { revalidate: 3600 }, // Revalidate every hour during dev
    })

    if (!res.ok) {
      console.error('Failed to fetch articles:', res.status)
      return []
    }

    const data: StrapiResponse<Article> = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}`,
      { next: { revalidate: 3600 } }
    )

    if (!res.ok) {
      console.error('Failed to fetch article:', res.status)
      return null
    }

    const data: StrapiResponse<Article> = await res.json()
    return data.data[0] || null
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const articles = await getArticles()
  return articles.map((article) => article.attributes.slug)
}

export async function getTags(): Promise<Tag[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/tags`, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error('Failed to fetch tags:', res.status)
      return []
    }

    const data: StrapiResponse<Tag> = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching tags:', error)
    return []
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Convert markdown to HTML (basic conversion for content)
export function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-4">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:underline">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
    // Horizontal rule
    .replace(/^---$/gim, '<hr class="my-8 border-gray-200" />')
    // Paragraphs (lines not starting with < or empty)
    .replace(/^(?!<|$)(.*$)/gim, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc mb-6 space-y-2">$&</ul>')
}
