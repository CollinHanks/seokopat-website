import { Metadata } from 'next'
import Link from 'next/link'
import { 
  CheckCircleIcon, 
  ArrowRightIcon, 
  StarIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  UsersIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hakkımızda - Dijital Dönüşüm ve SEO Uzmanları | Seokopat',
  description: '2018\'den beri işletmelere AI destekli SEO, e-ticaret optimizasyonu ve dijital pazarlama çözümleri sunuyoruz. 500+ mutlu müşteri, 1500+ başarılı proje.',
  keywords: 'dijital ajans, SEO uzmanı, e-ticaret danışmanlığı, dijital pazarlama ajansı, web tasarım, Shopify uzmanı, Trendyol danışmanı, AI pazarlama, online satış artırma',
  openGraph: {
    title: 'Hakkımızda - Dijital Dönüşüm Partneri | Seokopat',
    description: '500+ işletmeye dijital dönüşüm çözümleri sunuyoruz. SEO, e-ticaret, dijital pazarlama.',
    images: ['/og-about.jpg'],
  },
}

const stats = [
  { number: '500+', label: 'Mutlu Müşteri', icon: UsersIcon, color: 'from-pink-500 to-rose-500' },
  { number: '1500+', label: 'Tamamlanan Proje', icon: RocketLaunchIcon, color: 'from-purple-500 to-indigo-500' },
  { number: '%250', label: 'Ortalama Satış Artışı', icon: ChartBarIcon, color: 'from-blue-500 to-cyan-500' },
  { number: '7/24', label: 'Kesintisiz Destek', icon: ShieldCheckIcon, color: 'from-green-500 to-emerald-500' },
]

const values = [
  {
    icon: LightBulbIcon,
    title: 'İnovasyon',
    description: 'En son teknolojileri ve stratejileri kullanarak sürekli yenilik yapıyoruz. AI destekli çözümlerimizle sektörde öncü oluyoruz.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: TrophyIcon,
    title: 'Mükemmellik',
    description: 'Her projede en yüksek kalite standartlarını hedefliyoruz. Müşterilerimizin başarısı bizim başarımızdır.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: HeartIcon,
    title: 'Müşteri Odaklılık',
    description: 'Müşterilerimizin hedeflerini anlıyor, onların başarısı için çalışıyoruz. Uzun vadeli partnerlikler kuruyoruz.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: BoltIcon,
    title: 'Hız & Verimlilik',
    description: 'Hızlı sonuçlar, verimli süreçler. Zamanınızı ve kaynaklarınızı optimize ederek maksimum ROI sağlıyoruz.',
    color: 'from-blue-500 to-cyan-500'
  },
]

const milestones = [
  { 
    year: '2018', 
    title: 'Kuruluş', 
    description: 'İlk müşterilerimizle dijital dönüşüm yolculuğuna başladık',
    metric: '10 müşteri',
    color: 'from-pink-500 to-rose-500',
    icon: '🚀'
  },
  { 
    year: '2019', 
    title: 'Büyüme', 
    description: 'İlk yılımızda 100 müşteri barajını aştık',
    metric: '100+ müşteri',
    color: 'from-purple-500 to-pink-500',
    icon: '📈'
  },
  { 
    year: '2020', 
    title: 'E-Ticaret', 
    description: 'Pandemi döneminde e-ticaret çözümlerine odaklandık',
    metric: '200% büyüme',
    color: 'from-blue-500 to-purple-500',
    icon: '🛒'
  },
  { 
    year: '2021', 
    title: 'SaaS Ürünler', 
    description: 'Squezzly ve Stokmatic uygulamalarını geliştirdik',
    metric: '3 SaaS ürün',
    color: 'from-cyan-500 to-blue-500',
    icon: '⚡'
  },
  { 
    year: '2022', 
    title: 'Liderlik', 
    description: 'Türkiye\'nin önde gelen dijital ajansları arasına girdik',
    metric: '500+ müşteri',
    color: 'from-green-500 to-cyan-500',
    icon: '🏆'
  },
  { 
    year: '2023', 
    title: 'AI Entegrasyonu', 
    description: 'Tüm hizmetlerimize yapay zeka teknolojilerini entegre ettik',
    metric: 'AI-powered',
    color: 'from-yellow-500 to-green-500',
    icon: '🤖'
  },
  { 
    year: '2024', 
    title: 'Global Vizyon', 
    description: 'Avrupa pazarına açılma hazırlıklarına başladık',
    metric: 'EU expansion',
    color: 'from-orange-500 to-yellow-500',
    icon: '🌍'
  },
  { 
    year: '2025', 
    title: 'Yeni Ufuklar', 
    description: 'Tagdio lansmanı ve kurumsal müşteri odağı',
    metric: 'Enterprise',
    color: 'from-red-500 to-orange-500',
    icon: '✨'
  },
]

const testimonials = [
  {
    company: 'E-Ticaret Platformu',
    industry: 'E-Ticaret',
    comment: 'Seokopat ile çalışmaya başladıktan sonra online satışlarımız %250 arttı. SEO ve Shopify optimizasyonundaki uzmanlıkları gerçekten fark yaratıyor.',
    result: '%250 Satış Artışı',
    rating: 5
  },
  {
    company: 'Fashion Brand',
    industry: 'Moda & Tekstil',
    comment: 'Stokmatic sayesinde envanter yönetimimiz çok kolaylaştı. 5 farklı platformdaki stoklarımızı tek yerden yönetebiliyoruz.',
    result: '%80 Zaman Tasarrufu',
    rating: 5
  },
  {
    company: 'Digital Agency',
    industry: 'Dijital Pazarlama',
    comment: 'Müşterilerimizin projelerinde Seokopat ile çalışıyoruz. Teknik bilgileri ve profesyonel yaklaşımları her zaman fark yaratıyor.',
    result: '%95 Müşteri Memnuniyeti',
    rating: 5
  }
]

const services = [
  { name: 'SEO & İçerik Pazarlama', projects: '300+' },
  { name: 'E-Ticaret Optimizasyonu', projects: '250+' },
  { name: 'Dijital Pazarlama', projects: '400+' },
  { name: 'Web & Uygulama Geliştirme', projects: '200+' },
  { name: 'SaaS Ürünler', projects: '3 ürün' },
  { name: 'Eğitim & Danışmanlık', projects: '150+' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - EPİK Animated */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20">
              <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
              <span className="text-xs sm:text-sm font-semibold">2018'den Beri Dijital Dönüşüm Partneri</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              Dijital Başarınızın
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mimarı
              </span>
            </h1>
            
            <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed px-4">
              AI destekli çözümler, veri odaklı stratejiler ve uzman ekibimizle işletmenizin 
              online potansiyelini açığa çıkarıyor, sürdürülebilir büyüme sağlıyoruz.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                  >
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-200">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link 
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 text-sm sm:text-base"
              >
                <RocketLaunchIcon className="h-5 w-5" />
                Hemen Başlayalım
              </Link>
              <Link 
                href="#yolculugumuz"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all text-sm sm:text-base"
              >
                Hikayemiz
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Değerlerimiz
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Başarımızın temeli, güçlü değerlerimiz ve ilkelerimizdir
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={index}
                className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                
                <div className="relative">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Journey Section - MODERN TIMELINE */}
      <section id="yolculugumuz" className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-pink-600" />
              <span className="text-xs sm:text-sm font-bold text-pink-900">7 Yıllık Başarı Hikayesi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              Yolculuğumuz
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              2018'den bugüne başarı dolu yolculuğumuz
            </p>
          </div>

          {/* Timeline - Desktop Version (Hidden on Mobile) */}
          <div className="hidden lg:block relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 via-blue-500 to-cyan-500 transform -translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-12' : 'pl-12'}`}>
                      <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-gray-100">
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                        
                        <div className="relative">
                          {/* Icon & Year */}
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-5xl">{milestone.icon}</span>
                            <span className={`text-3xl font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                              {milestone.year}
                            </span>
                          </div>

                          {/* Content */}
                          <h3 className="text-2xl font-black text-gray-900 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {milestone.description}
                          </p>

                          {/* Metric Badge */}
                          <div className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} rounded-full`}>
                            <span className="text-white font-bold text-sm">
                              {milestone.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-pink-500 to-purple-500 group-hover:scale-125 transition-transform z-10" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Timeline - Mobile/Tablet Version (Hidden on Desktop) */}
          <div className="lg:hidden relative pl-8 sm:pl-12">
            {/* Left Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 via-blue-500 to-cyan-500" />

            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div className={`absolute -left-[1.6rem] sm:-left-[2.1rem] top-6 w-5 h-5 rounded-full border-4 border-white shadow-lg bg-gradient-to-br ${milestone.color}`} />

                  {/* Card */}
                  <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border border-gray-100">
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-5 rounded-2xl sm:rounded-3xl transition-opacity`} />
                    
                    <div className="relative">
                      {/* Icon & Year */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl sm:text-5xl">{milestone.icon}</span>
                        <span className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                          {milestone.year}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Metric Badge */}
                      <div className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${milestone.color} rounded-full`}>
                        <span className="text-white font-bold text-xs sm:text-sm">
                          {milestone.metric}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Hizmetlerimiz
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Her alanda uzman çözümler
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 hover:border-pink-500 hover:shadow-xl transition-all hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {service.name}
                </h3>
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" style={{ width: '100%' }} />
                </div>
                <span className="text-sm font-bold text-gray-700">
                  {service.projects}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials - GRADIENT Background */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-blue-900 py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-white/20">
              <StarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
              <span className="text-xs sm:text-sm font-semibold">Müşteri Memnuniyeti</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 px-4">
              Başarı hikayelerine göz atın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                {/* Stars */}
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-100 mb-4 sm:mb-6 text-sm sm:text-lg leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Result Badge */}
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4 sm:mb-6">
                  <span className="text-white font-bold text-xs sm:text-sm">
                    {testimonial.result}
                  </span>
                </div>

                {/* Company Info */}
                <div className="pt-4 sm:pt-6 border-t border-white/20">
                  <div className="font-bold text-white text-base sm:text-lg">
                    {testimonial.company}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Screen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Mission */}
          <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <RocketLaunchIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6">
                Misyonumuz
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                İşletmelerin dijital dünyada sürdürülebilir büyüme elde etmelerini sağlamak için 
                en yenilikçi teknolojileri ve veri odaklı stratejileri kullanarak, 
                ölçülebilir sonuçlar üretmek ve uzun vadeli değer yaratmak.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-900 font-medium">AI ve veri analitiği ile stratejiler geliştirmek</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-900 font-medium">Sürekli inovasyon ve teknolojik gelişim</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-900 font-medium">Müşteri başarısını mutlak öncelik haline getirmek</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <TrophyIcon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 sm:mb-6">
                Vizyonumuz
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Türkiye'nin ve bölgenin en güvenilir dijital dönüşüm ortağı olarak, 
                global standartlarda hizmet veren, teknoloji ve insan odaklı, 
                sürdürülebilir bir ekosistem yaratmak.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-900 font-medium">Dijital dönüşümde sektör lideri olmak</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-900 font-medium">Avrupa ve global pazarlara açılmak</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-gray-900 font-medium">AI teknolojilerinde öncü olmak</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Epic */}
      <section className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-semibold">Dijital Dönüşümünüz Bir Tık Uzakta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight px-4">
            Siz de Başarı Hikayemizin
            <span className="block">Bir Parçası Olun</span>
          </h2>
          
          <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto px-4">
            500+ müşterimiz gibi siz de işinizi bir sonraki seviyeye taşıyın. 
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link 
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 font-black rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 text-base sm:text-lg"
            >
              <RocketLaunchIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              Ücretsiz Danışmanlık Alın
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all text-base sm:text-lg"
            >
              Blog & İçgörüler
              <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">500+</div>
              <div className="text-xs sm:text-sm opacity-90">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">%250</div>
              <div className="text-xs sm:text-sm opacity-90">Ortalama ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">7 Yıl</div>
              <div className="text-xs sm:text-sm opacity-90">Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black mb-1 sm:mb-2">%95</div>
              <div className="text-xs sm:text-sm opacity-90">Memnuniyet</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}