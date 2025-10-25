// app/blog/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog-server'
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Blog | Seokopat',
  description: 'SEO, e-ticaret ve dijital pazarlama üzerine güncel içerikler.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-seokopat-navy to-seokopat-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blog & İçgörüler
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            SEO, e-ticaret ve dijital pazarlama dünyasından en güncel haberler ve stratejiler
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">Henüz blog yazısı yok.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-seokopat-primary to-seokopat-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                      📝
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-seokopat-primary/10 text-seokopat-primary text-xs font-medium rounded-full"
                        >
                          <TagIcon className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-seokopat-navy mb-3 group-hover:text-seokopat-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}