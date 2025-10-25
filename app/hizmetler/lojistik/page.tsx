'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  CubeIcon,
  TruckIcon,
  ChartBarIcon,
  QrCodeIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline'

const stats = [
  { label: 'Maliyet Düşüşü', value: '%40' },
  { label: 'Stok Doğruluğu', value: '%99' },
  { label: 'İşlem Hızı', value: '3x' },
  { label: 'Müşteri Memnuniyeti', value: '%96' }
]

const services = [
  {
    icon: CubeIcon,
    title: 'Akıllı Envanter Yönetimi',
    description: 'Gerçek zamanlı stok takibi, otomatik sipariş önerileri ve minimum stok uyarıları.',
    features: ['Real-time Tracking', 'Auto-Reorder', 'Stock Alerts', 'Multi-location'],
    color: 'from-green-400 to-green-600'
  },
  {
    icon: BuildingStorefrontIcon,
    title: 'Depo Yönetim Sistemi (WMS)',
    description: 'Depo operasyonlarını optimize edin. Yerleşim planlaması ve picking rotaları.',
    features: ['Warehouse Layout', 'Picking Optimization', 'Bin Management', 'Space Utilization'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: TruckIcon,
    title: 'Lojistik Optimizasyonu',
    description: 'Rota optimizasyonu, nakliye yönetimi ve kargo entegrasyonları.',
    features: ['Route Planning', 'Carrier Integration', 'Tracking System', 'Cost Optimization'],
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: QrCodeIcon,
    title: 'Barkod & RFID Sistemi',
    description: 'Barkod okuyucu ve RFID teknolojisi ile hızlı ve hatasız işlemler.',
    features: ['Barcode Scanning', 'RFID Tracking', 'Mobile Apps', 'Instant Updates'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: 'ERP Entegrasyonu',
    description: 'SAP, Oracle, Microsoft Dynamics ile sorunsuz entegrasyon.',
    features: ['SAP Integration', 'Oracle NetSuite', 'MS Dynamics', 'API Connections'],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    icon: ChartBarIcon,
    title: 'Analitik & Raporlama',
    description: 'Detaylı stok raporları, ABC analizi ve performans metrikleri.',
    features: ['ABC Analysis', 'Turnover Reports', 'Demand Forecasting', 'KPI Dashboards'],
    color: 'from-pink-400 to-pink-600'
  }
]

const features = [
  { 
    icon: ArrowTrendingDownIcon,
    title: 'Maliyet Tasarrufu', 
    description: 'Fazla stok ve stoksuzluktan kaynaklanan maliyetleri %40\'a kadar azaltın'
  },
  { 
    icon: ChartBarIcon,
    title: 'Veri Odaklı Kararlar', 
    description: 'Gerçek zamanlı veriler ile stratejik satın alma kararları alın'
  },
  { 
    icon: TruckIcon,
    title: 'Hızlı Teslimat', 
    description: 'Optimized lojistik ile müşterilerinize daha hızlı ulaşın'
  }
]

const process = [
  { 
    step: '01', 
    title: 'İhtiyaç Analizi', 
    description: 'Mevcut süreçlerinizi analiz ediyor, ihtiyaçlarınızı belirliyoruz.'
  },
  { 
    step: '02', 
    title: 'Sistem Tasarımı', 
    description: 'Size özel stok yönetim sistemi mimarisi oluşturuyoruz.'
  },
  { 
    step: '03', 
    title: 'Kurulum ve Entegrasyon', 
    description: 'Yazılım kurulumu, veri aktarımı ve mevcut sistemlerle entegrasyon.'
  },
  { 
    step: '04', 
    title: 'Eğitim ve Test', 
    description: 'Ekibinize detaylı eğitim veriyor ve test süreçlerini yönetiyoruz.'
  },
  { 
    step: '05', 
    title: 'Devreye Alma', 
    description: 'Sistemi canlıya alıyor ve ilk günlerde yerinde destek veriyoruz.'
  },
  { 
    step: '06', 
    title: 'Sürekli Optimizasyon', 
    description: 'Kullanım verilerine göre süreçleri optimize ediyor ve iyileştiriyoruz.'
  }
]

const integrations = [
  'SAP', 'Oracle', 'Microsoft Dynamics', 'Ticimax', 'İdeasoft', 
  'Shopify', 'Trendyol', 'Hepsiburada', 'N11', 'Amazon'
]

const faqs = [
  {
    question: 'Stok yönetim sistemi ne kadar sürede devreye alınır?',
    answer: 'İşletmenizin büyüklüğüne göre 2-8 hafta arasında değişir. Küçük işletmeler için daha hızlı kurulum mümkündür. Pilot uygulama ile başlayıp adım adım genişletebiliriz.'
  },
  {
    question: 'Mevcut ERP sistemimle entegre olabilir mi?',
    answer: 'Evet, SAP, Oracle, Microsoft Dynamics ve diğer popüler ERP sistemleri ile API entegrasyonu yapabiliyoruz. Veri senkronizasyonu otomatik ve gerçek zamanlı çalışır.'
  },
  {
    question: 'Barkod okuyucu donanım desteği var mı?',
    answer: 'Evet, mobil barkod okuyucular, el terminalleri ve RFID sistemleri ile uyumludur. İhtiyacınız olan donanımların tedariki için de destek veriyoruz.'
  },
  {
    question: 'Çoklu depo yönetimi yapabilir miyim?',
    answer: 'Evet, sınırsız sayıda depo, raf ve lokasyon tanımlayabilir, depolar arası transfer işlemlerini yönetebilirsiniz. Her depo için ayrı raporlama yapılabilir.'
  },
  {
    question: 'Sistem mobil cihazlardan kullanılabilir mi?',
    answer: 'Evet, iOS ve Android uyumlu mobil uygulamalarımız var. Depo personeli mobil cihazlardan stok giriş-çıkış işlemlerini yapabilir, sayım gerçekleştirebilir.'
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

export default function LogisticsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white overflow-hidden">
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
              <CubeIcon className="w-5 h-5 text-green-300" />
              <span className="text-sm font-medium">Akıllı Stok Yönetimi</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stok & Lojistik Yönetimi ile <br/>
              <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                Maliyetleri %40 Düşürün
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Gerçek zamanlı takip, otomatik sipariş ve akıllı analitik çözümler
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary text-center">
                Ücretsiz Demo Talep Et
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
                ROI Hesapla
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
                <div className="text-4xl md:text-5xl font-bold text-green-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-200">
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
              Stok & Lojistik <span className="gradient-text">Çözümlerimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Baştan sona entegre stok ve lojistik yönetim sistemi
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
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-green-500/20">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-seokopat-navy mb-3 group-hover:text-green-600 transition-colors">
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

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-seokopat-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-seokopat-blue-gray">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Entegrasyon</span> Desteği
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-2xl mx-auto">
              Kullandığınız tüm sistemlerle sorunsuz entegrasyon
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold text-seokopat-navy">{integration}</span>
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
              Uygulama <span className="gradient-text">Sürecimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              6 adımda kesintisiz geçiş ve optimizasyon
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
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
              Stok ve lojistik yönetimi hakkında merak ettikleriniz
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
      <section className="section-padding bg-gradient-to-br from-green-700 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stok Yönetiminizi <br/>
              <span className="text-green-300">Dijitalleştirin</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ücretsiz demo ile sistemimizi test edin. Size özel çözüm önerisi hazırlıyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block">
              Ücretsiz Demo Talep Et
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}