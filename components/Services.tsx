'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  CodeBracketIcon, 
  CubeIcon, 
  PaintBrushIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'SEO Optimizasyonu',
    description: 'Google\'da üst sıralara çıkın. AI destekli SEO stratejileri ile organik trafiğinizi %300 artırın.',
    icon: MagnifyingGlassIcon,
    color: 'from-pink-400 to-pink-600',
    href: '/hizmetler/seo'
  },
  {
    title: 'E-Ticaret Danışmanlığı',
    description: 'Shopify, Amazon, Etsy ve Trendyol\'da satışlarınızı katlayın. Uzman ekibimizle büyüyün.',
    icon: ShoppingCartIcon,
    color: 'from-blue-400 to-blue-600',
    href: '/hizmetler/e-ticaret'
  },
  {
    title: 'Yazılım Geliştirme',
    description: 'Özel web uygulamaları, API entegrasyonları ve otomasyon çözümleri ile verimliliği artırın.',
    icon: CodeBracketIcon,
    color: 'from-purple-400 to-purple-600',
    href: '/hizmetler/yazilim'
  },
  {
    title: 'Stok & Lojistik Yönetimi',
    description: 'Akıllı stok takibi ve lojistik optimizasyonu ile maliyetlerinizi %40 düşürün.',
    icon: CubeIcon,
    color: 'from-green-400 to-green-600',
    href: '/hizmetler/lojistik'
  },
  {
    title: 'Web & Shopify Tasarım',
    description: 'Dönüşüm odaklı, modern ve hızlı web siteleri ile müşterilerinizi etkileyin.',
    icon: PaintBrushIcon,
    color: 'from-orange-400 to-orange-600',
    href: '/hizmetler/tasarim'
  },
  {
    title: 'Dijital Pazarlama',
    description: 'Google Ads, Facebook Ads ve sosyal medya stratejileri ile ROI\'nizi maksimize edin.',
    icon: ChartBarIcon,
    color: 'from-indigo-400 to-indigo-600',
    href: '/hizmetler/pazarlama'
  }
]

export default function Services() {
  return (
    <section className="bg-gray-50">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            360° <span className="gradient-text">Dijital Çözümler</span>
          </h2>
          <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
            İşletmenizin ihtiyaç duyduğu tüm dijital hizmetleri tek çatı altında sunuyoruz
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={service.href} className="block group h-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 card-hover h-full flex flex-col">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-seokopat-navy mb-3 group-hover:text-seokopat-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-seokopat-blue-gray mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-seokopat-pink font-semibold mt-auto">
                    <span>Detaylı Bilgi</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}