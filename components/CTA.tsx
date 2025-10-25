'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-seokopat-navy via-blue-900 to-seokopat-pink">
      <div className="container-custom py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <SparklesIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Ücretsiz Analiz Fırsatı</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            İşletmenizi Büyütmeye Hazır mısınız?
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Web sitenizin SEO performansını ücretsiz analiz edelim ve 
            size özel büyüme stratejisi sunalım. Hemen başlayın!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim" 
              className="inline-flex items-center gap-2 bg-white text-seokopat-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Ücretsiz Analiz Al
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link 
              href="tel:+905555555555" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Hemen Ara: 0555 555 55 55
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-sm text-white/80">Hızlı Başlangıç</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💯</div>
              <div className="text-sm text-white/80">Garanti Sonuçlar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎁</div>
              <div className="text-sm text-white/80">İlk Ay %30 İndirim</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}