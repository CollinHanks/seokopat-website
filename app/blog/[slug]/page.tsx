// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog-server'
import { CalendarIcon, ClockIcon, TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    }
  }

  return {
    title: `${post.title} | Seokopat Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-seokopat-primary hover:text-seokopat-secondary transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Tüm Yazılar</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 max-w-4xl pb-20">
        <header className="mb-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-seokopat-navy mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('tr-TR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Yazar:</span>
              <span>{post.author}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-4 py-2 bg-seokopat-primary/10 text-seokopat-primary text-sm font-medium rounded-full"
              >
                <TagIcon className="h-4 w-4" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 bg-gradient-to-br from-seokopat-primary to-seokopat-secondary rounded-2xl mb-12 overflow-hidden flex items-center justify-center">
          <span className="text-8xl">📝</span>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-seokopat-navy 
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-seokopat-navy prose-strong:font-semibold
            prose-a:text-seokopat-primary hover:prose-a:text-seokopat-secondary
            prose-ul:list-disc prose-ul:ml-6
            prose-ol:list-decimal prose-ol:ml-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Box */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-seokopat-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-seokopat-navy mb-2">
                {post.author}
              </h3>
              <p className="text-gray-600">
                SEO, e-ticaret ve dijital pazarlama uzmanı. 
                İşletmelerin online varlıklarını güçlendirmelerine yardımcı oluyoruz.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}