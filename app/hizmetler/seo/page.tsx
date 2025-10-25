'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  DocumentTextIcon,
  SparklesIcon,
  CheckCircleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

const stats = [
  { label: 'Organik Trafik Artışı', value: '%300' },
  { label: 'Başarılı Proje', value: '1000+' },
  { label: 'Müşteri Memnuniyeti', value: '%95' },
  { label: 'Sonuç Süresi', value: '3-6 Ay' }
]

const services = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Teknik SEO Optimizasyonu',
    description: 'Site hızı, mobil uyumluluk, yapısal veri işaretleme, XML sitemap ve robots.txt optimizasyonu.',
    features: ['Core Web Vitals', 'Mobile-First Indexing', 'Schema Markup', 'SSL & HTTPS']
  },
  {
    icon: DocumentTextIcon,
    title: 'İçerik SEO Stratejisi',
    description: 'Anahtar kelime araştırması, içerik optimizasyonu ve kullanıcı niyetine uygun içerik üretimi.',
    features: ['Keyword Research', 'Content Gap Analysis', 'On-Page SEO', 'Competitor Analysis']
  },
  {
    icon: LinkIcon,
    title: 'Link Building & Off-Page',
    description: 'Kaliteli backlink profili oluşturarak domain otoritenizi artırıyor ve Google güvenini kazanıyoruz.',
    features: ['Quality Backlinks', 'Guest Posting', 'Digital PR', 'Brand Mentions']
  },
  {
    icon: ChartBarIcon,
    title: 'SEO Analiz & Raporlama',
    description: 'Detaylı performans raporları, rakip analizi ve veri odaklı stratejiler ile sürekli iyileştirme.',
    features: ['GA4 Analytics', 'Search Console', 'Ranking Reports', 'ROI Tracking']
  },
  {
    icon: SparklesIcon,
    title: 'Yerel SEO',
    description: 'Google My Business optimizasyonu ve yerel arama sıralamaları ile bölgenizdeki müşterilere ulaşın.',
    features: ['GMB Optimization', 'Local Citations', 'Reviews Management', 'Local Link Building']
  },
  {
    icon: SparklesIcon,
    title: 'AI Destekli SEO',
    description: 'Yapay zeka teknolojileri ile anahtar kelime trendlerini önceden tespit ediyoruz.',
    features: ['AI Content Optimization', 'Predictive Analytics', 'Smart Automation', 'Trend Analysis']
  }
]

const process = [
  { step: '01', title: 'Site Analizi ve Denetim', description: 'Mevcut sitenizin teknik, içerik ve link profilini kapsamlı analiz ediyoruz.' },
  { step: '02', title: 'Anahtar Kelime Araştırması', description: 'Yüksek dönüşüm potansiyeli olan anahtar kelimeleri belirliyoruz.' },
  { step: '03', title: 'Teknik Optimizasyon', description: 'Site hızını artırıyor, Core Web Vitals metriklerini optimize ediyoruz.' },
  { step: '04', title: 'İçerik Stratejisi', description: 'SEO-friendly, kullanıcı odaklı içerikler üretiyoruz.' },
  { step: '05', title: 'Link Building', description: 'Kaliteli backlink profili oluşturuyoruz.' },
  { step: '06', title: 'İzleme ve Raporlama', description: 'Performans metriklerini sürekli takip ediyoruz.' }
]

const faqs = [
  {
    question: 'SEO sonuçları ne kadar sürede görülür?',
    answer: 'SEO orta-uzun vadeli bir yatırımdır. İlk sonuçları genellikle 3-6 ay içinde görmeye başlarsınız. Ancak sektör rekabeti, web sitenizin mevcut durumu ve hedeflediğiniz anahtar kelimelere göre bu süre değişebilir.'
  },
  {
    question: 'SEO garantisi verebilir misiniz?',
    answer: 'Google\'ın algoritması sürekli değiştiği için hiçbir SEO ajansı "1. sırada garanti" veremez. Ancak kanıtlanmış stratejiler ve deneyimimiz ile organik trafiğinizi artırmayı garanti edebiliriz.'
  },
  {
    question: 'SEO çalışması süreklilik gerektiriyor mu?',
    answer: 'Evet, SEO sürekli bir süreçtir. Rakipleriniz ve Google algoritması sürekli değiştiği için, sıralamalarınızı korumak ve iyileştirmek için düzenli çalışma gerekir.'
  },
  {
    question: 'Yerel işletmeler için SEO önemli midir?',
    answer: 'Kesinlikle! Yerel SEO ile bölgenizdeki potansiyel müşterilere ulaşabilir, "yakınımdaki" aramalarında öne çıkabilirsiniz. Google My Business optimizasyonu yerel işletmeler için kritik öneme sahiptir.'
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-seokopat-pink transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{faq.question}</span>
        <ChevronDownIcon 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-seokopat-blue-gray leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-seokopat-navy via-blue-900 to-seokopat-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <SparklesIcon className="w-5 h-5 text-seokopat-pink" />
              <span className="text-sm font-medium">AI Destekli SEO Çözümleri</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              SEO Optimizasyonu ile <br/>
              <span className="bg-gradient-to-r from-seokopat-pink to-pink-300 bg-clip-text text-transparent">
                Google'da Zirveye Çıkın
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Organik trafiğinizi %300 artırın, rakiplerinizi geride bırakın
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary text-center">
                Ücretsiz SEO Analizi Al
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Case Studies İncele
              </button>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-seokopat-pink mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              SEO <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Kapsamlı SEO stratejileri ile web sitenizi Google'ın favorisi haline getirin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-seokopat-pink/20">
                  <div className="w-14 h-14 bg-gradient-to-br from-seokopat-pink to-pink-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-seokopat-navy mb-3 group-hover:text-seokopat-pink transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-seokopat-blue-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              SEO <span className="gradient-text">Sürecimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              6 adımda profesyonel SEO stratejinizi hayata geçiriyoruz
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-seokopat-pink to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-seokopat-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-seokopat-blue-gray">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              SEO hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-seokopat-navy to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              SEO Yolculuğunuza <br/>
              <span className="text-seokopat-pink">Bugün Başlayın</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ücretsiz SEO analizi için hemen iletişime geçin. Uzman ekibimiz sitenizi inceleyen ve size özel strateji sunuyor.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block">
              Ücretsiz SEO Analizi Al
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}