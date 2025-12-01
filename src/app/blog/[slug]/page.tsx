import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import { getArticleBySlug, getAllSlugs, formatDate, markdownToHtml } from '@/lib/strapi'

interface PageProps {
  params: { slug: string }
}

// Generate static paths for all articles
export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return { title: 'Article Not Found | NeoPharma Blog' }
  }

  return {
    title: article.attributes.seoTitle || `${article.attributes.title} | NeoPharma Blog`,
    description: article.attributes.seoDescription || article.attributes.excerpt,
    openGraph: {
      title: article.attributes.seoTitle || article.attributes.title,
      description: article.attributes.seoDescription || article.attributes.excerpt,
      type: 'article',
      publishedTime: article.attributes.publishedAt,
      authors: [article.attributes.author],
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const contentHtml = markdownToHtml(article.attributes.content)

  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
            >
              <FaArrowLeft className="w-3 h-3 mr-2" />
              Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              {article.attributes.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {article.attributes.excerpt}
            </p>

            <div className="flex items-center text-sm text-gray-500 space-x-6">
              <span className="flex items-center">
                <FaCalendar className="w-4 h-4 mr-2" />
                {formatDate(article.attributes.publishedAt)}
              </span>
              <span className="flex items-center">
                <FaUser className="w-4 h-4 mr-2" />
                {article.attributes.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section bg-white">
        <div className="container">
          <article className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Ready to Put These Insights Into Action?
            </h2>
            <p className="text-gray-600 mb-8">
              NeoPharma gives you AI-powered access to physician profiles, prescribing data,
              and intelligent targeting—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.neopharma.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Request Early Access
                <FaArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link href="/blog" className="btn btn-secondary btn-large">
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
