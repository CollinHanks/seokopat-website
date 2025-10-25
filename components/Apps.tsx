'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const apps = [
  {
    name: 'Squezzly',
    tagline: 'Akıllı Fiyat Optimizasyonu',
    description: 'E-ticaret platformlarında rekabetçi fiyatlama için AI destekli analiz ve otomatik fiyat güncelleme sistemi.',
    features: ['Rakip Analizi', 'Otomatik Fiyatlama', 'Kar Marjı Koruması', 'Anlık Bildirimler'],
    color: 'from-purple-500 to-pink-500',
    icon: '💰',
    status: 'Beta',
    href: '/uygulamalar/squezzly'
  },
  {
    name: 'Stokmatic',
    tagline: 'Stok & Envanter Yönetimi',
    description: 'Çoklu kanal stok senkronizasyonu, otomatik sipariş yönetimi ve akıllı envanter takibi.',
    features: ['Gerçek Zamanlı Senkronizasyon', 'Stok Uyarıları', 'Barkod Sistemi', 'Raporlama'],
    color: 'from-blue-500 to-cyan-500',
    icon: '📦',
    status: 'Aktif',
    href: '/uygulamalar/stokmatic'
  },
  {
    name: 'Tagdio',
    tagline: 'SEO Tag Yönetimi',
    description: 'Meta tag optimizasyonu, schema markup oluşturucu ve SEO performans takibi.',
    features: ['Tag Oluşturucu', 'Schema Markup', 'SEO Skoru', 'Rakip Analizi'],
    color: 'from-green-500 to-teal-500',
    icon: '🏷️',
    status: 'Yakında',
    href: '/uygulamalar/tagdio'
  }
]

export default function Apps() {
  return (
    <section className="bg-gradient-to-br from-seokopat-navy via-blue-900 to-seokopat-navy text-white">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Güçlü <span className="text-seokopat-pink">Uygulamalarımız</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            İşletmenizi dijitalleştiren, verimliliği artıran özel geliştirdiğimiz SaaS çözümleri
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-seokopat-pink to-seokopat-light-pink rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl">{app.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    app.status === 'Aktif' ? 'bg-green-500/20 text-green-300' :
                    app.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {app.status}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  {app.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{app.tagline}</p>
                <p className="text-gray-300 mb-6">{app.description}</p>
                
                <div className="space-y-2 mb-8">
                  {app.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-seokopat-pink mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={app.href} 
                  className="inline-flex items-center text-seokopat-pink hover:text-seokopat-light-pink font-semibold transition-colors"
                >
                  Detayları İncele
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}