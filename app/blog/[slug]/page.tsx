// app/blog/[slug]/page.tsx
import { getAllPosts, getPost } from '@/lib/blog-client'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  ArrowLeftIcon,
  TagIcon 
} from '@heroicons/react/24/outline'

// Markdown'ı HTML'e çevirmek için
import { remark } from 'remark'
import html from 'remark-html'

// SEO için metadata oluştur
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === params.slug)
  
  if (!post) return { title: 'Yazı Bulunamadı - Seokopat' }
  
  return {
    title: post.seo?.metaTitle || `${post.title} - Seokopat Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.join(', ') || post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

// Static paths oluştur
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  // Markdown'ı HTML'e çevir
  const contentHtml = await markdownToHtml(post.content)

  // İlgili yazıları bul (aynı kategoriden)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {post.image ? (
          <div className="relative h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        ) : (
          <div className="h-96 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600" />
        )}
        
        {/* Başlık Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white/90 hover:text-white 
                       mb-4 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Blog'a Dön
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İçerik */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Özet */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Etiketler */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1.5 rounded-full 
                         text-sm font-medium bg-pink-100 text-pink-800"
              >
                <TagIcon className="h-4 w-4 mr-1.5" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Ana İçerik */}
        <div 
          className="prose prose-lg max-w-none
                   prose-headings:font-bold prose-headings:text-gray-900
                   prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                   prose-p:text-gray-700 prose-p:leading-relaxed
                   prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline
                   prose-strong:text-gray-900
                   prose-ul:list-disc prose-ol:list-decimal
                   prose-li:text-gray-700
                   prose-blockquote:border-l-4 prose-blockquote:border-pink-600 
                   prose-blockquote:pl-4 prose-blockquote:italic
                   prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 
                   prose-code:rounded prose-code:text-sm
                   prose-pre:bg-gray-900 prose-pre:text-gray-100"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gradient-to-r from-pink-600 to-blue-600 
                            rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-600">Yazar</p>
              </div>
            </div>
            
            <Link 
              href="/admin"
              className="text-gray-500 hover:text-pink-600 transition-colors text-sm"
            >
              Bu yazıyı düzenle →
            </Link>
          </div>
        </div>

        {/* İlgili Yazılar */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    {relatedPost.image && (
                      <div className="relative h-32 w-full mb-3 rounded overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 
                                 group-hover:text-pink-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}