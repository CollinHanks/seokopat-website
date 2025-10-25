'use client'

import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const stats = [
  { value: '500+', label: 'Mutlu Müşteri' },
  { value: '1500+', label: 'Tamamlanan Proje' },
  { value: '15+', label: 'Uzman Ekip' },
  { value: '7', label: 'Yıllık Deneyim' },
]

const values = [
  'Müşteri odaklı yaklaşım',
  'Veri bazlı kararlar',
  'Sürekli inovasyon',
  'Şeffaf iletişim',
  'Sonuç odaklı stratejiler',
  '7/24 destek'
]

export default function About() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Dijital Dönüşümde
              <span className="gradient-text"> Güvenilir </span>
              Partneriniz
            </h2>
            
            <p className="text-lg text-seokopat-blue-gray mb-6">
              Seokopat olarak, 2018&apos;den beri Türkiye&apos;nin önde gelen markalarına 
              dijital çözümler sunuyoruz. AI teknolojileri ve uzman ekibimizle, 
              işletmelerin dijital dünyada rekabet avantajı elde etmesini sağlıyoruz.
            </p>
            
            <p className="text-lg text-seokopat-blue-gray mb-8">
              SEO optimizasyonu, e-ticaret danışmanlığı, özel yazılım geliştirme ve 
              dijital pazarlama alanlarında sunduğumuz entegre çözümlerle, müşterilerimizin 
              satışlarını ortalama %250 artırıyoruz.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <CheckCircleIcon className="h-5 w-5 text-seokopat-pink flex-shrink-0" />
                  <span className="text-seokopat-navy font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center card-hover"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-seokopat-blue-gray">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-seokopat-pink to-seokopat-navy rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Neden Seokopat?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <strong>Kanıtlanmış Başarı:</strong> %95 müşteri memnuniyeti oranı
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <strong>Hızlı Sonuçlar:</strong> İlk 30 günde görünür iyileşme
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <strong>360° Destek:</strong> Tek noktadan tüm dijital ihtiyaçlar
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}