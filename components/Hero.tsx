'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-seokopat-white via-pink-50 to-blue-50">
      {/* ÖNEMLİ: pt-24 (mobil) ve md:pt-32 (desktop) - Header'ın altında kalmasını sağlar */}
      <div className="container-custom section-padding pt-24 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* AI Destekli Çözümler Badge - Artık Görünür! */}
            <div className="inline-flex items-center gap-2 bg-seokopat-light-pink/10 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-5 w-5 text-seokopat-pink" />
              <span className="text-sm font-medium text-seokopat-navy">AI Destekli Çözümler</span>
            </div>
            
            {/* Ana Başlık - Türkçe Karakterler Düzeltildi */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Dijital Başarınızı
              <span className="gradient-text"> AI ile </span>
              Hızlandırın
            </h1>
            
            {/* Açıklama - Türkçe Karakterler Düzeltildi */}
            <p className="text-lg text-seokopat-blue-gray mb-8 leading-relaxed">
              SEO optimizasyonu, e-ticaret danışmanlığı ve özel yazılım çözümleri ile 
              işletmenizi dijital dünyada zirveye taşıyoruz. Shopify, Amazon, Etsy ve 
              Trendyol'da satışlarınızı katlamanın en akıllı yolu.
            </p>
            
            {/* CTA Buttons - Mobil Responsive */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hizmetler" className="btn-primary inline-flex items-center justify-center gap-2">
                Hizmetlerimizi Keşfedin
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link href="/iletisim" className="btn-secondary text-center">
                Ücretsiz Analiz
              </Link>
            </div>
            
            {/* Stats - Mobil Optimize */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-seokopat-pink">500+</div>
                <div className="text-xs sm:text-sm text-seokopat-blue-gray">Mutlu Müşteri</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-seokopat-pink">%95</div>
                <div className="text-xs sm:text-sm text-seokopat-blue-gray">Başarı Oranı</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-seokopat-pink">7/24</div>
                <div className="text-xs sm:text-sm text-seokopat-blue-gray">Destek</div>
              </div>
            </div>
          </motion.div>
          
          {/* Sağ Taraf - Servis Kartları */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-seokopat-pink to-seokopat-navy rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Kartlar Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* SEO Kartı */}
                  <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">🚀</div>
                    <div className="font-semibold text-seokopat-navy">SEO Optimizasyonu</div>
                  </div>
                  
                  {/* E-Ticaret Kartı */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">🛒</div>
                    <div className="font-semibold text-seokopat-navy">E-Ticaret Çözümleri</div>
                  </div>
                  
                  {/* Yazılım Kartı */}
                  <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">💻</div>
                    <div className="font-semibold text-seokopat-navy">Yazılım Geliştirme</div>
                  </div>
                  
                  {/* Tasarım Kartı */}
                  <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">🎨</div>
                    <div className="font-semibold text-seokopat-navy">Web Tasarım</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Dekoratif Elementler */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-seokopat-pink/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-seokopat-navy/10 rounded-full blur-2xl"></div>
    </section>
  )
}