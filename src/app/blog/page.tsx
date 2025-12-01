import Link from 'next/link'
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa'
import { getArticles, formatDate } from '@/lib/strapi'

export const metadata = {
  title: 'Blog | NeoPharma - AI-Powered Pharmaceutical Sales Insights',
  description: 'Expert insights on AI in pharmaceutical sales, Medicare data analytics, physician targeting strategies, and healthcare technology trends.',
}

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              NeoPharma <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights on AI-powered pharmaceutical sales, physician targeting,
              and data-driven healthcare marketing strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section bg-white">
        <div className="container">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article key={article.id} className="card hover:-translate-y-1 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                      <Link
                        href={`/blog/${article.attributes.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {article.attributes.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.attributes.excerpt}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <span className="flex items-center">
                        <FaCalendar className="w-3 h-3 mr-1" />
                        {formatDate(article.attributes.publishedAt)}
                      </span>
                      <span className="flex items-center">
                        <FaUser className="w-3 h-3 mr-1" />
                        {article.attributes.author}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${article.attributes.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <FaArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Ready to Transform Your Pharma Sales?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Put these insights into action with NeoPharma's AI-powered physician targeting platform.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_APP_URL || 'https://app.neopharma.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Request Early Access
            <FaArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  )
}
