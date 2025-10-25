'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const posts = [
  {
    id: 1,
    title: '2025 SEO Trendleri: AI ve Voice Search Optimizasyonu',
    excerpt: 'Google\'ın yeni AI algoritmaları ve sesli arama optimizasyonu stratejileri. İşletmenizi geleceğe hazırlayın.',
    category: 'SEO',
    author: 'Seokopat Team',
    date: '15 Ocak 2025',
    readTime: '5 dk',
    image: '/blog/seo-trends.jpg',
    slug: '2025-seo-trendleri'
  },
  {
    id: 2,
    title: 'Shopify\'da Dönüşüm Oranını %200 Artırmanın 10 Yolu',
    excerpt: 'A/B test sonuçlarımız ve gerçek müşteri verileriyle kanıtlanmış Shopify optimizasyon teknikleri.',
    category: 'E-Ticaret',
    author: 'Seokopat Team',
    date: '12 Ocak 2025',
    readTime: '8 dk',
    image: '/blog/shopify-conversion.jpg',
    slug: 'shopify-donusum-orani'
  },
  {
    id: 3,
    title: 'Amazon FBA vs Trendyol Fulfillment: Karşılaştırmalı Analiz',
    excerpt: 'Hangi platformda satış yapmalısınız? Maliyet, erişim ve karlılık açısından detaylı karşılaştırma.',
    category: 'Lojistik',
    author: 'Seokopat Team',
    date: '10 Ocak 2025',
    readTime: '10 dk',
    image: '/blog/fba-vs-trendyol.jpg',
    slug: 'amazon-fba-vs-trendyol'
  }
]

const categoryColors: { [key: string]: string } = {
  'SEO': 'bg-purple-100 text-purple-800',
  'E-Ticaret': 'bg-blue-100 text-blue-800',
  'Lojistik': 'bg-green-100 text-green-800'
}

export default function BlogPreview() {
  return (
    <section className="bg-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Blog & <span className="gradient-text">İçerikler</span>
          </h2>
          <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
            Dijital dünyadan en güncel haberler, stratejiler ve başarı hikayeleri
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 bg-gradient-to-br from-seokopat-pink/20 to-seokopat-navy/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-50">📝</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 gap-3">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-seokopat-navy mb-3 group-hover:text-seokopat-pink transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-seokopat-blue-gray mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.author}
                    </span>
                    <span className="text-seokopat-pink font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Devamını Oku
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
            Tüm Yazıları Görüntüle
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}