import { Metadata } from 'next'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  CodeBracketIcon, 
  CubeIcon, 
  PaintBrushIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hizmetler',
  description: 'SEO, e-ticaret danışmanlığı, yazılım geliştirme ve dijital pazarlama hizmetlerimiz',
}

const services = [
  {
    id: 'seo',
    title: 'SEO Optimizasyonu',
    description: 'Google\'da üst sıralara çıkın. AI destekli SEO stratejileri ile organik trafiğinizi %300 artırın.',
    longDescription: 'Kapsamlı SEO analizi, anahtar kelime araştırması, teknik SEO optimizasyonu, içerik stratejisi ve link building hizmetlerimizle Google sıralamalarınızı yükseltin.',
    icon: MagnifyingGlassIcon,
    color: 'from-pink-400 to-pink-600',
    features: [
      'Teknik SEO Denetimi',
      'Anahtar Kelime Analizi',
      'İçerik Optimizasyonu',
      'Link Building Stratejisi',
      'Rakip Analizi',
      'Aylık Raporlama'
    ],
    price: '₺5,000',
    priceNote: 'aylık başlangıç'
  },
  {
    id: 'e-ticaret',
    title: 'E-Ticaret Danışmanlığı',
    description: 'Shopify, Amazon, Etsy ve Trendyol\'da satışlarınızı katlayın.',
    longDescription: 'E-ticaret platformlarında mağaza kurulumu, ürün listesi optimizasyonu, kampanya yönetimi ve büyüme stratejileri ile satışlarınızı artırın.',
    icon: ShoppingCartIcon,
    color: 'from-blue-400 to-blue-600',
    features: [
      'Platform Kurulumu',
      'Ürün Listeleme Optimizasyonu',
      'Fiyatlama Stratejisi',
      'Stok Yönetimi',
      'Kampanya Planlaması',
      'Performans Analizi'
    ],
    price: '₺7,500',
    priceNote: 'aylık başlangıç'
  },
  {
    id: 'yazilim',
    title: 'Yazılım Geliştirme',
    description: 'Özel web uygulamaları, API entegrasyonları ve otomasyon çözümleri.',
    longDescription: 'İşletmenize özel web uygulamaları, mobil uygulamalar, API entegrasyonları ve otomasyon sistemleri geliştiriyoruz.',
    icon: CodeBracketIcon,
    color: 'from-purple-400 to-purple-600',
    features: [
      'Web Uygulama Geliştirme',
      'API Entegrasyonu',
      'Otomasyon Sistemleri',
      'Veritabanı Tasarımı',
      'Cloud Çözümleri',
      'Teknik Destek'
    ],
    price: '₺15,000',
    priceNote: 'projeden başlangıç'
  },
  {
    id: 'lojistik',
    title: 'Stok & Lojistik Yönetimi',
    description: 'Akıllı stok takibi ve lojistik optimizasyonu.',
    longDescription: 'Stok yönetimi, depo optimizasyonu, kargo entegrasyonları ve lojistik süreç iyileştirme hizmetlerimizle maliyetlerinizi düşürün.',
    icon: CubeIcon,
    color: 'from-green-400 to-green-600',
    features: [
      'Stok Takip Sistemi',
      'Depo Yönetimi',
      'Kargo Entegrasyonu',
      'Sipariş Yönetimi',
      'Envanter Optimizasyonu',
      'Lojistik Raporlama'
    ],
    price: '₺8,000',
    priceNote: 'aylık başlangıç'
  },
  {
    id: 'tasarim',
    title: 'Web & Shopify Tasarım',
    description: 'Dönüşüm odaklı, modern ve hızlı web siteleri.',
    longDescription: 'Markanızı dijitalde en iyi şekilde yansıtan, kullanıcı dostu ve dönüşüm odaklı web siteleri ve e-ticaret mağazaları tasarlıyoruz.',
    icon: PaintBrushIcon,
    color: 'from-orange-400 to-orange-600',
    features: [
      'UI/UX Tasarım',
      'Responsive Tasarım',
      'Shopify Tema Geliştirme',
      'A/B Test',
      'Hız Optimizasyonu',
      'SEO Uyumlu Kodlama'
    ],
    price: '₺10,000',
    priceNote: 'projeden başlangıç'
  },
  {
    id: 'pazarlama',
    title: 'Dijital Pazarlama',
    description: 'Google Ads, Facebook Ads ve sosyal medya stratejileri.',
    longDescription: 'PPC kampanyaları, sosyal medya reklamları, içerik pazarlaması ve e-posta pazarlaması ile ROI\'nizi maksimize edin.',
    icon: ChartBarIcon,
    color: 'from-indigo-400 to-indigo-600',
    features: [
      'Google Ads Yönetimi',
      'Facebook & Instagram Ads',
      'Sosyal Medya Yönetimi',
      'İçerik Pazarlaması',
      'E-posta Pazarlaması',
      'Dönüşüm Optimizasyonu'
    ],
    price: '₺6,000',
    priceNote: 'aylık başlangıç'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-seokopat-navy to-seokopat-pink text-white">
        <div className="container-custom py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dijital Başarınız İçin <span className="text-seokopat-light-pink">360° Çözümler</span>
            </h1>
            <p className="text-xl opacity-90">
              SEO\'dan yazılım geliştirmeye, e-ticaretten dijital pazarlamaya kadar tüm ihtiyaçlarınız için tek adres.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container-custom py-16">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-seokopat-navy mb-4">{service.title}</h2>
                <p className="text-lg text-seokopat-blue-gray mb-6">{service.longDescription}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-seokopat-pink mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-seokopat-navy">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-end gap-6">
                  <div>
                    <div className="text-3xl font-bold text-seokopat-pink">{service.price}</div>
                    <div className="text-sm text-seokopat-blue-gray">{service.priceNote}</div>
                  </div>
                  <Link href="/iletisim" className="btn-primary inline-flex items-center gap-2">
                    Teklif Al
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-3xl opacity-20`}></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl">
                  <service.icon className="h-32 w-32 mx-auto text-seokopat-navy opacity-10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-seokopat-pink to-seokopat-navy py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Hangi Hizmet Size Uygun?</h2>
          <p className="text-xl mb-8 opacity-90">
            İhtiyacınıza özel çözüm için ücretsiz danışmanlık alın
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-white text-seokopat-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Ücretsiz Danışmanlık Al
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}