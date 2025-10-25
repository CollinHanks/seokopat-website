'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  ShoppingCartIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

const stats = [
  { label: 'Başarılı E-Ticaret Projesi', value: '500+' },
  { label: 'Ortalama Satış Artışı', value: '%250' },
  { label: 'Destek Hizmeti', value: '24/7' },
  { label: 'Yönetilen Ciro', value: '50M+' }
]

const platforms = [
  { name: 'Shopify', icon: '🛍️', color: 'from-green-400 to-green-600' },
  { name: 'Amazon', icon: '📦', color: 'from-orange-400 to-orange-600' },
  { name: 'Etsy', icon: '🎨', color: 'from-orange-400 to-red-500' },
  { name: 'Trendyol', icon: '🇹🇷', color: 'from-orange-500 to-pink-500' },
  { name: 'Hepsiburada', icon: '🛒', color: 'from-orange-400 to-yellow-500' },
  { name: 'N11', icon: '🏪', color: 'from-purple-400 to-purple-600' }
]

const services = [
  {
    icon: ShoppingCartIcon,
    title: 'Shopify Mağaza Kurulumu',
    description: 'Profesyonel Shopify mağazanızı sıfırdan kuruyoruz. Tema özelleştirme, ödeme entegrasyonları ve tüm teknik ayarları yapıyoruz.',
    features: ['Özel Tema Tasarımı', 'Ödeme Entegrasyonları', 'Ürün Yükleme', 'SEO Optimizasyonu']
  },
  {
    icon: ChartBarIcon,
    title: 'Amazon Satıcı Optimizasyonu',
    description: 'Amazon\'da listing optimizasyonu, FBA yönetimi, reklam kampanyaları ve satış stratejileri geliştiriyoruz.',
    features: ['Listing Optimization', 'FBA Management', 'PPC Campaigns', 'Review Management']
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Trendyol Satıcı Danışmanlığı',
    description: 'Trendyol\'da başarılı satıcı olmak için kategori optimizasyonu, kampanya yönetimi ve lojistik çözümleri sağlıyoruz.',
    features: ['Kategori Optimizasyonu', 'Kampanya Yönetimi', 'Stok Yönetimi', 'Müşteri Hizmetleri']
  },
  {
    icon: TruckIcon,
    title: 'Lojistik & Kargo Entegrasyonu',
    description: 'Hızlı ve güvenilir kargo çözümleri, stok yönetimi ve iade süreçlerini optimize ediyoruz.',
    features: ['Çoklu Kargo Entegrasyonu', 'Stok Senkronizasyonu', 'İade Yönetimi', 'Takip Sistemi']
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobil E-Ticaret',
    description: 'Mobil uygulamalar ve mobil-first tasarımlar ile mobil satışlarınızı artırıyoruz.',
    features: ['iOS & Android Apps', 'PWA Development', 'Mobile Optimization', 'App Store SEO']
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Dönüşüm Oranı Optimizasyonu',
    description: 'A/B testler, kullanıcı deneyimi iyileştirmeleri ile satış huninizi optimize ediyoruz.',
    features: ['A/B Testing', 'UX Optimization', 'Cart Abandonment', 'Conversion Tracking']
  }
]

const process = [
  { 
    step: '01', 
    title: 'İş Analizi', 
    description: 'Mevcut durumunuzu, hedeflerinizi ve rakiplerinizi detaylı analiz ediyoruz.'
  },
  { 
    step: '02', 
    title: 'Strateji Geliştirme', 
    description: 'Size özel e-ticaret stratejisi ve yol haritası oluşturuyoruz.'
  },
  { 
    step: '03', 
    title: 'Platform Seçimi', 
    description: 'İşinize en uygun e-ticaret platformunu belirliyoruz.'
  },
  { 
    step: '04', 
    title: 'Kurulum ve Optimizasyon', 
    description: 'Mağazanızı kuruyor ve tüm detayları optimize ediyoruz.'
  },
  { 
    step: '05', 
    title: 'Pazarlama Kampanyaları', 
    description: 'Dijital pazarlama stratejileri ile ilk satışlarınızı başlatıyoruz.'
  },
  { 
    step: '06', 
    title: 'Sürekli İyileştirme', 
    description: 'Performansı izliyor ve sürekli iyileştirmeler yapıyoruz.'
  }
]

const pricingPlans = [
  {
    name: 'Başlangıç',
    price: '15.000₺',
    description: 'Yeni başlayanlar için ideal',
    features: [
      'Platform kurulumu',
      '50 ürün yükleme',
      'Temel tasarım',
      'Ödeme entegrasyonu',
      '1 ay destek'
    ],
    popular: false
  },
  {
    name: 'Profesyonel',
    price: '35.000₺',
    description: 'Büyüyen işletmeler için',
    features: [
      'Özel mağaza tasarımı',
      '200 ürün yükleme',
      'SEO optimizasyonu',
      'Çoklu ödeme sistemi',
      'Kargo entegrasyonları',
      '3 ay destek',
      'Pazarlama danışmanlığı'
    ],
    popular: true
  },
  {
    name: 'Kurumsal',
    price: 'Özel Fiyat',
    description: 'Büyük hacimli işletmeler',
    features: [
      'Tam özel çözüm',
      'Sınırsız ürün',
      'Çoklu dil & para birimi',
      'ERP entegrasyonu',
      'Özel yazılım geliştirme',
      '12 ay premium destek'
    ],
    popular: false
  }
]

const faqs = [
  {
    question: 'Hangi e-ticaret platformu benim için uygun?',
    answer: 'İşinizin büyüklüğüne, bütçenize ve hedeflerinize göre platform önerisi yapıyoruz. Shopify kullanımı kolay ve hızlı başlangıç için idealdir. WooCommerce esneklik sağlar. Amazon ve Trendyol ise hazır müşteri kitlesine erişim sunar.'
  },
  {
    question: 'E-ticaret başlatmak için ne kadar bütçe gerekli?',
    answer: 'Minimum 10.000-15.000 TL ile başlayabilirsiniz. Bu bütçe platform maliyetleri, ilk stok ve pazarlama kampanyalarını içerir. Detaylı bütçe planlaması için ücretsiz danışmanlık alabilirsiniz.'
  },
  {
    question: 'İlk satışımı ne zaman yapabilirim?',
    answer: 'Mağaza kurulumu ve ürün yüklemesi 2-4 hafta sürer. Pazarlama kampanyaları ile ilk satışlarınızı genellikle 1-2 ay içinde almaya başlarsınız.'
  },
  {
    question: 'Çoklu platformda satış yapabilir miyim?',
    answer: 'Evet! Shopify, Trendyol, Hepsiburada ve diğer platformlarda aynı anda satış yapabilirsiniz. Stok senkronizasyonu ve merkezi yönetim sistemleri ile tüm platformları tek yerden yönetebilirsiniz.'
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

export default function ECommercePage() {
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
              <ShoppingCartIcon className="w-5 h-5 text-seokopat-pink" />
              <span className="text-sm font-medium">E-Ticaret Uzmanları</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              E-Ticaret Danışmanlığı ile <br/>
              <span className="bg-gradient-to-r from-seokopat-pink to-pink-300 bg-clip-text text-transparent">
                Satışlarınızı Katlayın
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Shopify, Amazon, Etsy ve Trendyol'da uzman ekibimizle büyüyün
            </p>
            
            {/* Platform Icons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="text-sm font-medium">{platform.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary text-center">
                Ücretsiz Danışmanlık Al
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Başarı Hikayeleri
              </button>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
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
              E-Ticaret <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Baştan sona e-ticaret sürecinizi yönetiyor, satışlarınızı artırıyoruz
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

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Fiyatlandırma <span className="gradient-text">Paketleri</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun paket seçin, hemen başlayın
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                  plan.popular ? 'ring-2 ring-seokopat-pink scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-seokopat-pink to-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popüler
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-seokopat-navy mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-seokopat-pink mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/iletisim"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-seokopat-pink text-white hover:bg-pink-600'
                      : 'bg-gray-100 text-seokopat-navy hover:bg-gray-200'
                  }`}
                >
                  Hemen Başla
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Çalışma <span className="gradient-text">Sürecimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              6 adımda e-ticaret başarınızı garantiliyoruz
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
                <div className="flex-1 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
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
      <section className="section-padding bg-white">
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
              E-ticaret hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8">
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
              E-Ticaret Yolculuğunuza <br/>
              <span className="text-seokopat-pink">Bugün Başlayın</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ücretsiz danışmanlık için hemen iletişime geçin. Size özel e-ticaret stratejisi hazırlıyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block">
              Ücretsiz Danışmanlık Al
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}