// app/blog/page.tsx
import { getAllPosts } from '@/lib/blog-client'
import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Blog - Seokopat',
  description: 'SEO, E-Ticaret ve Dijital Pazarlama üzerine güncel blog yazıları',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Seokopat Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            SEO stratejileri, e-ticaret ipuçları ve dijital pazarlama trendleri 
            hakkında en güncel içerikler
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 transition-all duration-300 
                         overflow-hidden group"
              >
                {/* Görsel */}
                {post.image ? (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 
                                   rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-pink-100 to-blue-100 
                                relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/20">
                        {post.category.charAt(0)}
                      </span>
                    </div>
                    <span className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 
                                   rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                )}

                {/* İçerik */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 
                               group-hover:text-pink-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Bilgiler */}
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Etiketler */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full 
                                   text-xs font-medium bg-gray-100 text-gray-700"
                        >
                          <TagIcon className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Okuma Butonu */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 
                             font-semibold group/link"
                  >
                    Devamını Oku
                    <svg 
                      className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 
                          bg-gray-100 rounded-full mb-6">
              <DocumentTextIcon className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Henüz blog yazısı yok
            </h2>
            <p className="text-gray-600 mb-8">
              İlk blog yazınızı admin panelinden ekleyebilirsiniz.
            </p>
            <Link 
              href="/admin"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r 
                       from-pink-600 to-blue-600 text-white rounded-lg 
                       hover:shadow-lg transform hover:scale-[1.02] transition-all"
            >
              Admin Paneline Git
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}