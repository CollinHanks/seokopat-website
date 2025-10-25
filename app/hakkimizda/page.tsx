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
    metric: '10 müşteri'
  },
  { 
    year: '2019', 
    title: 'Büyüme', 
    description: 'İlk yılımızda 100 müşteri barajını aştık',
    metric: '100+ müşteri'
  },
  { 
    year: '2020', 
    title: 'E-Ticaret', 
    description: 'Pandemi döneminde e-ticaret çözümlerine odaklandık',
    metric: '200% büyüme'
  },
  { 
    year: '2021', 
    title: 'SaaS Ürünler', 
    description: 'Squezzly ve Stokmatic uygulamalarını geliştirdik',
    metric: '3 SaaS ürün'
  },
  { 
    year: '2022', 
    title: 'Liderlik', 
    description: 'Türkiye\'nin önde gelen dijital ajansları arasına girdik',
    metric: '500+ müşteri'
  },
  { 
    year: '2023', 
    title: 'AI Entegrasyonu', 
    description: 'Tüm hizmetlerimize yapay zeka teknolojilerini entegre ettik',
    metric: 'AI-powered'
  },
  { 
    year: '2024', 
    title: 'Global Vizyon', 
    description: 'Avrupa pazarına açılma hazırlıklarına başladık',
    metric: 'EU expansion'
  },
  { 
    year: '2025', 
    title: 'Yeni Ufuklar', 
    description: 'Tagdio lansmanı ve kurumsal müşteri odağı',
    metric: 'Enterprise'
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <SparklesIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">2018'den Beri Dijital Dönüşüm Partneri</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Dijital Başarınızın
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mimarı
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              AI destekli çözümler, veri odaklı stratejiler ve uzman ekibimizle işletmenizin 
              online potansiyelini açığa çıkarıyor, sürdürülebilir büyüme sağlıyoruz.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
              >
                Ücretsiz Danışmanlık
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Values - 3D Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Değerlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Başarımızın temelindeki prensipler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
              
              {/* Decorative gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline - Horizontal Scroll */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-xl text-gray-600">
              2018'den bugüne başarı hikayemiz
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-pink-600 rounded-full z-10" />
                  
                  {/* Card */}
                  <div className={`bg-white rounded-2xl shadow-xl p-6 ${index % 2 === 0 ? 'mb-20' : 'mt-20'} hover:shadow-2xl transition-all hover:-translate-y-2`}>
                    <div className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-2">
                      {milestone.year}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {milestone.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 text-xs font-bold rounded-full">
                      {milestone.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Uzmanlık Alanlarımız
          </h2>
          <p className="text-xl text-gray-600">
            Geniş hizmet yelpazesiyle tam çözüm ortağınız
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.name}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
                <span className="px-4 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 text-sm font-bold rounded-full">
                  {service.projects}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {service.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all shadow-xl hover:scale-105"
          >
            Tüm Hizmetleri Keşfedin
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Testimonials - Elegant Cards */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Müşterilerimizin Sesi
            </h2>
            <p className="text-xl text-gray-200">
              Başarı hikayelerine göz atın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-100 mb-6 text-lg leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Result Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6">
                  <span className="text-white font-bold text-sm">
                    {testimonial.result}
                  </span>
                </div>

                {/* Company Info */}
                <div className="pt-6 border-t border-white/20">
                  <div className="font-bold text-white text-lg">
                    {testimonial.company}
                  </div>
                  <div className="text-sm text-gray-300">
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Screen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Mission */}
          <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <RocketLaunchIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Misyonumuz
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                İşletmelerin dijital dünyada sürdürülebilir büyüme elde etmelerini sağlamak için 
                en yenilikçi teknolojileri ve veri odaklı stratejileri kullanarak, 
                ölçülebilir sonuçlar üretmek ve uzun vadeli değer yaratmak.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">AI ve veri analitiği ile stratejiler geliştirmek</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Sürekli inovasyon ve teknolojik gelişim</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Müşteri başarısını mutlak öncelik haline getirmek</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Vizyonumuz
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Türkiye'nin ve bölgenin en güvenilir dijital dönüşüm ortağı olarak, 
                global standartlarda hizmet veren, teknoloji ve insan odaklı, 
                sürdürülebilir bir ekosistem yaratmak.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Dijital dönüşümde sektör lideri olmak</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">Avrupa ve global pazarlara açılmak</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-900 font-medium">AI teknolojilerinde öncü olmak</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Epic */}
      <section className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <SparklesIcon className="h-5 w-5" />
            <span className="text-sm font-semibold">Dijital Dönüşümünüz Bir Tık Uzakta</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Siz de Başarı Hikayemizin
            <span className="block">Bir Parçası Olun</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            500+ müşterimiz gibi siz de işinizi bir sonraki seviyeye taşıyın. 
            Ücretsiz danışmanlık için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-gray-900 font-black rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 text-lg"
            >
              <RocketLaunchIcon className="h-6 w-6" />
              Ücretsiz Danışmanlık Alın
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all text-lg"
            >
              Blog & İçgörüler
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black mb-2">500+</div>
              <div className="text-sm opacity-90">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">%250</div>
              <div className="text-sm opacity-90">Ortalama ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">7 Yıl</div>
              <div className="text-sm opacity-90">Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">%95</div>
              <div className="text-sm opacity-90">Memnuniyet</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}