import { Metadata } from 'next'
import Link from 'next/link'
import { CheckIcon, ArrowRightIcon, SparklesIcon, RocketLaunchIcon, BoltIcon, CloudArrowUpIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'AI Destekli Dijital Uygulamalarımız | Squezzly, Tagdio, Stokmatic - Seokopat',
  description: 'Squezzly online görsel sıkıştırma aracı ile fotoğraf, PDF ve Excel dosyalarınızı optimize edin. Tagdio barkod etiket tasarım yazılımı ve Stokmatic AI destekli stok takip sistemi ile işletmenizi dijitalleştirin. Web tabanlı, BarTender alternatifi, KOBI ve kurumsal çözümler.',
  keywords: 'görsel sıkıştırma aracı, image compressor, PDF sıkıştırma, Excel sıkıştırma, barkod etiket yazılımı, BarTender alternatifi, Seagull BarTender, etiket tasarım programı, stok takip programı, AI lojistik yönetimi, envanter yönetim sistemi, KOBI yazılımları, e-ticaret araçları, web tabanlı stok programı',
  openGraph: {
    title: 'AI Destekli Dijital Uygulamalarımız - Squezzly, Tagdio, Stokmatic',
    description: 'Görsel sıkıştırma, barkod etiket tasarımı ve AI destekli stok yönetimi için profesyonel çözümler',
    images: ['/og-uygulamalar.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Destekli Dijital Uygulamalar - Seokopat',
    description: 'Squezzly, Tagdio ve Stokmatic ile işletmenizi dijitalleştirin',
  }
};

const apps = [
  {
    id: 'squezzly',
    name: 'Squezzly',
    tagline: 'Online Görsel ve Dosya Sıkıştırma Aracı',
    shortDesc: 'Fotoğraf, PDF, Excel ve tüm görsellerinizi kalite kaybı olmadan %70\'e kadar sıkıştırın',
    longDescription: 'Squezzly, sosyal medya yöneticileri, e-ticaret firmaları ve web geliştiricileri için tasarlanmış profesyonel bir online sıkıştırma aracıdır. Fotoğraflarınızı, PDF belgelerinizi, Excel dosyalarınızı ve tüm görsellerinizi kalite kaybı olmadan optimize eder. Google PageSpeed skorunuzu artırır, web sitenizin yüklenme hızını iyileştirir ve SEO performansınızı maksimuma çıkarır.',
    seoDescription: 'Squezzly online image compressor ile fotoğraf, resim, PNG, JPG, JPEG, WebP görsellerinizi sıkıştırın. PDF ve Excel dosya boyutlarını küçültün. E-ticaret ürün görselleri, sosyal medya içerikleri ve web sitesi optimizasyonu için ideal. Toplu sıkıştırma, kalite koruma ve API entegrasyonu ile profesyonel çözüm.',
    features: [
      { 
        title: 'Çoklu Format Desteği', 
        desc: 'JPG, PNG, WebP, PDF, Excel, Word ve 20+ format',
        detail: 'Tüm görsel ve döküman formatlarını tek platformda sıkıştırın'
      },
      { 
        title: 'Kalite Kaybı Yok', 
        desc: 'Akıllı sıkıştırma algoritması ile %70\'e kadar boyut azaltma',
        detail: 'Gözle görülür kalite farkı olmadan dosya boyutlarını optimize edin'
      },
      { 
        title: 'Toplu İşlem', 
        desc: 'Tek seferde 100\'e kadar dosya yükleyin ve işleyin',
        detail: 'Zamandan tasarruf edin, tüm ürün görsellerinizi toplu optimize edin'
      },
      { 
        title: 'API Entegrasyonu', 
        desc: 'E-ticaret platformlarınıza otomatik entegre edin',
        detail: 'Trendyol, Hepsiburada, N11, Shopify otomatik görsel optimizasyonu'
      },
      { 
        title: 'SEO Optimizasyonu', 
        desc: 'Google PageSpeed için optimize edilmiş çıktılar',
        detail: 'Meta data koruma, dosya adı optimizasyonu ve alt text önerileri'
      },
      { 
        title: 'Bulut Depolama', 
        desc: 'Sıkıştırılmış dosyalarınızı 30 gün süreyle saklayın',
        detail: 'İstediğiniz zaman erişin, tekrar indirin veya paylaşın'
      }
    ],
    useCases: [
      {
        title: 'E-Ticaret',
        desc: 'Ürün görsellerinizi optimize ederek sayfa yüklenme hızını %300 artırın',
        icon: '🛒'
      },
      {
        title: 'Sosyal Medya',
        desc: 'Instagram, Facebook, LinkedIn için optimize boyutlarda görseller',
        icon: '📱'
      },
      {
        title: 'Web Siteleri',
        desc: 'Google Core Web Vitals skorunu iyileştirin, SEO\'nuzu güçlendirin',
        icon: '🌐'
      },
      {
        title: 'Dijital Ajanslar',
        desc: 'Müşteri projeleriniz için toplu görsel optimizasyonu',
        icon: '🎨'
      }
    ],
    benefits: [
      'Sayfa yükleme hızını %300 artırın',
      'Sunucu maliyetlerinden %40 tasarruf edin',
      'Google PageSpeed skorunu 90+ çıkarın',
      'Mobil kullanıcı deneyimini iyileştirin',
      'SEO sıralamanızı yükseltin',
      'Bandwidth kullanımını azaltın'
    ],
    color: 'from-purple-500 to-pink-500',
    icon: '🎨',
    iconBg: 'bg-gradient-to-br from-purple-100 to-pink-100',
    status: 'Aktif',
    statusColor: 'bg-green-100 text-green-800',
    cta: 'Ücretsiz Deneyin',
    ctaLink: '/iletisim?uygulama=squezzly'
  },
  {
    id: 'tagdio',
    name: 'Tagdio',
    tagline: 'Web Tabanlı Barkod Etiket Tasarım ve Yazdırma Yazılımı',
    shortDesc: 'BarTender alternatifi, profesyonel etiket tasarımı - Agrox uyumlu',
    longDescription: 'Tagdio, BarTender Seagull\'ın modern ve web tabanlı alternatifidir. Hem KOBI\'ler hem de büyük markalar için geliştirilmiş profesyonel bir barkod etiket tasarım ve yazdırma platformudur. Agrox, SAP, Logo Tiger gibi ERP sistemleri ile entegre çalışır. Tarayıcınızdan erişin, sınırsız etiket tasarlayın, QR kod ve barkod oluşturun. Zebra, TSC, Citizen yazıcılarla tam uyumlu.',
    seoDescription: 'Tagdio web tabanlı barkod etiket tasarım programı, BarTender Seagull alternatifi. QR kod, barkod, EAN, GS1, GTIN etiket oluşturma. Agrox, SAP, Logo Tiger ERP entegrasyonu. Zebra, TSC, Citizen yazıcı desteği. KOBI ve kurumsal çözümler. Online etiket tasarımı, toplu yazdırma, şablon yönetimi.',
    features: [
      { 
        title: 'BarTender Alternatifi', 
        desc: 'Seagull BarTender\'dan daha uygun fiyatlı ve modern',
        detail: 'Lisans maliyetlerinden %60 tasarruf, bulut tabanlı erişim'
      },
      { 
        title: 'ERP Entegrasyonu', 
        desc: 'Agrox, SAP, Logo Tiger, Netsis tam entegrasyon',
        detail: 'Ürün verileriniz otomatik çekilir, manuel veri girişi gerekmez'
      },
      { 
        title: 'Sınırsız Tasarım', 
        desc: 'İstediğiniz kadar etiket şablonu oluşturun',
        detail: 'Ürün etiketi, kargo etiketi, fiyat etiketi, raf etiketi ve daha fazlası'
      },
      { 
        title: 'QR Kod & Barkod', 
        desc: 'EAN-13, Code 128, QR, DataMatrix ve 30+ format',
        detail: 'GS1 standardında, e-ticaret ve lojistik uyumlu barkodlar'
      },
      { 
        title: 'Yazıcı Desteği', 
        desc: 'Zebra, TSC, Citizen, Brother, Honeywell uyumlu',
        detail: 'Tüm endüstriyel etiket yazıcılarla sorunsuz çalışır'
      },
      { 
        title: 'Toplu Yazdırma', 
        desc: 'Excel\'den veri çekin, binlerce etiketi tek seferde yazdırın',
        detail: 'Envanter sayımı, ürün etiketleme, kargo paketleme süreçlerini hızlandırın'
      }
    ],
    useCases: [
      {
        title: 'Üretim Tesisleri',
        desc: 'Ürün etiketleme, seri numarası, lot takibi için endüstriyel etiketler',
        icon: '🏭'
      },
      {
        title: 'E-Ticaret & Lojistik',
        desc: 'Kargo etiketi, fatura, iade etiketi otomasyonu',
        icon: '📦'
      },
      {
        title: 'Perakende',
        desc: 'Fiyat etiketi, raf etiketi, promosyon etiketi tasarımı',
        icon: '🏪'
      },
      {
        title: 'Gıda & İlaç',
        desc: 'GS1 uyumlu, son kullanma tarihli, izlenebilir etiketler',
        icon: '🍎'
      }
    ],
    benefits: [
      'BarTender lisans maliyetinden %60 tasarruf',
      'Her yerden tarayıcıyla erişim',
      'ERP sistemlerinizle otomatik senkronizasyon',
      'Sınırsız kullanıcı, sınırsız tasarım',
      'Mobil etiket yazdırma desteği',
      '7/24 teknik destek ve eğitim'
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: '🏷️',
    iconBg: 'bg-gradient-to-br from-blue-100 to-cyan-100',
    status: 'Aktif',
    statusColor: 'bg-green-100 text-green-800',
    cta: 'Demo Talep Edin',
    ctaLink: '/iletisim?uygulama=tagdio'
  },
  {
    id: 'stokmatic',
    name: 'Stokmatic',
    tagline: 'AI Destekli Stok Takip ve Lojistik Yönetim Sistemi',
    shortDesc: 'KOBI ve büyük firmalar için akıllı envanter yönetimi',
    longDescription: 'Stokmatic, yapay zeka destekli stok takip ve lojistik yönetim yazılımıdır. Hem KOBI\'ler hem de büyük ölçekli işletmeler için tasarlanmış kapsamlı envanter yönetim sistemidir. Çoklu depo yönetimi, otomatik sipariş önerileri, ABC analizi, minimum stok uyarıları ve tahmine dayalı stok planlaması sunar. Trendyol, Hepsiburada, N11, Amazon, Shopify ile entegre çalışır. Gerçek zamanlı stok senkronizasyonu ile stok fazlası ve eksiğini önler.',
    seoDescription: 'Stokmatic AI destekli stok takip programı, envanter yönetim sistemi. KOBI ve kurumsal stok yönetimi çözümleri. Çoklu depo, ABC analizi, minimum stok uyarısı, otomatik sipariş önerisi. Trendyol, Hepsiburada, N11, Amazon entegrasyonu. Barkod okuyucu, RFID desteği. Online stok takibi, lojistik yönetimi, tedarik zinciri optimizasyonu.',
    features: [
      { 
        title: 'AI Tahmin Motoru', 
        desc: 'Gelecek 3 aylık satış tahmini ve stok planlaması',
        detail: 'Geçmiş satış verilerinizi analiz eder, mevsimsellik ve trendleri hesaba katar'
      },
      { 
        title: 'Çoklu Depo Yönetimi', 
        desc: 'Sınırsız depo, şube ve mağaza yönetimi',
        detail: 'Depo transferleri, sevkiyat takibi ve lokasyon bazlı stok kontrolü'
      },
      { 
        title: 'E-Ticaret Entegrasyonu', 
        desc: 'Trendyol, Hepsiburada, N11, Amazon, Shopify senkronizasyonu',
        detail: 'Tüm platformlardaki stoklarınız otomatik güncellenir, stok aşımı yaşamazsınız'
      },
      { 
        title: 'Otomatik Sipariş', 
        desc: 'Minimum stok seviyesine düştüğünde otomatik tedarikçi siparişi',
        detail: 'Stok aşımı ve eksiği olmadan optimal stok seviyesini korur'
      },
      { 
        title: 'ABC Analizi', 
        desc: 'Ürünlerinizi karlılık ve ciro hızına göre kategorize edin',
        detail: 'Hangi ürünlere odaklanacağınızı, hangilerini çıkaracağınızı görün'
      },
      { 
        title: 'Barkod & RFID', 
        desc: 'Mobil barkod okuyucu, RFID etiket okuma desteği',
        detail: 'Hızlı ürün girişi, envanter sayımı ve paketleme işlemleri'
      }
    ],
    useCases: [
      {
        title: 'E-Ticaret',
        desc: 'Çoklu kanallarda stok senkronizasyonu, aşırı satış önleme',
        icon: '🛍️'
      },
      {
        title: 'Toptan & Distribütör',
        desc: 'Çoklu depo yönetimi, tedarikçi entegrasyonu, fiyat listesi',
        icon: '📊'
      },
      {
        title: 'Üretim',
        desc: 'Hammadde takibi, yarı mamul, mamul stok yönetimi',
        icon: '⚙️'
      },
      {
        title: 'Perakende Zincir',
        desc: 'Şubeler arası transfer, merkezi stok yönetimi, raporlama',
        icon: '🏬'
      }
    ],
    benefits: [
      'Stok maliyetlerini %30 azaltın',
      'Stok aşımı ve eksiğini %95 önleyin',
      'Envanter sayım süresini %80 kısaltın',
      'Depo verimliliğini %40 artırın',
      'Tedarik süreçlerini otomatikleştirin',
      'Gerçek zamanlı stok görünürlüğü'
    ],
    color: 'from-green-500 to-emerald-500',
    icon: '📦',
    iconBg: 'bg-gradient-to-br from-green-100 to-emerald-100',
    status: 'Aktif',
    statusColor: 'bg-green-100 text-green-800',
    cta: 'Ücretsiz Demo',
    ctaLink: '/iletisim?uygulama=stokmatic'
  }
]

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - EPİK */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <SparklesIcon className="h-6 w-6 text-yellow-300" />
              <span className="text-sm font-semibold text-white">3 Güçlü SaaS Çözümü</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              İşletmenizi Dijitalleştiren
              <span className="block mt-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Destekli Uygulamalar
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-12 leading-relaxed">
              Görsel optimizasyonundan stok yönetimine, barkod etiketlemeden lojistik takibine kadar işinizi büyüten profesyonel yazılımlar
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#apps" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
              >
                <RocketLaunchIcon className="h-6 w-6" />
                Uygulamaları Keşfet
              </Link>
              <Link 
                href="/iletisim" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Ücretsiz Danışmanlık
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text mb-2">
                500+
              </div>
              <p className="text-gray-600 font-medium">Aktif Kullanıcı</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text mb-2">
                1M+
              </div>
              <p className="text-gray-600 font-medium">İşlenen Dosya</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text mb-2">
                %99.9
              </div>
              <p className="text-gray-600 font-medium">Uptime Garantisi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text mb-2">
                7/24
              </div>
              <p className="text-gray-600 font-medium">Teknik Destek</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Detail Section */}
      <section id="apps" className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-20">
        {apps.map((app, index) => (
          <div key={app.id} className="mb-32">
            {/* App Header */}
            <div className="text-center mb-16">
              <div className={`inline-flex items-center justify-center w-24 h-24 ${app.iconBg} rounded-3xl text-5xl mb-6 shadow-xl`}>
                {app.icon}
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  {app.name}
                </h2>
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${app.statusColor}`}>
                  {app.status}
                </span>
              </div>
              
              <p className="text-2xl text-gray-700 font-semibold mb-4">{app.tagline}</p>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">{app.shortDesc}</p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{app.longDescription}</p>
            </div>

            {/* Features Grid - EPİK */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                <span className={`bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  Özellikler
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {app.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:scale-105"
                    style={{
                      background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, transparent 0%, rgba(236, 72, 153, 0.3) 100%) border-box'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${app.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <CheckIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{feature.desc}</p>
                        <p className="text-xs text-gray-500">{feature.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                <span className={`bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  Kimler Kullanmalı?
                </span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {app.useCases.map((useCase, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="text-5xl mb-4">{useCase.icon}</div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{useCase.title}</h4>
                    <p className="text-sm text-gray-600">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                <span className={`bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  Avantajlar
                </span>
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-r ${app.color} flex-shrink-0 mt-1`}>
                        <BoltIcon className="h-4 w-4 text-white" />
                      </div>
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className={`bg-gradient-to-r ${app.color} rounded-3xl p-12 shadow-2xl text-white text-center max-w-4xl mx-auto`}>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {app.name} ile Başlayın
              </h3>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Ücretsiz demo talep edin, ekibimiz sizinle iletişime geçsin. Tüm sorularınızı yanıtlayalım ve işletmeniz için en uygun çözümü birlikte belirleyelim.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href={app.ctaLink} 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
                >
                  <CloudArrowUpIcon className="h-6 w-6" />
                  {app.cta}
                </Link>
                <Link 
                  href="/iletisim" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 transition-all"
                >
                  Teklif Al
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {index < apps.length - 1 && (
              <div className="mt-32 pt-16 border-t-2 border-gray-200" />
            )}
          </div>
        ))}
      </section>

      {/* Bundle CTA Section - EPİK - FOOTER ÖNCESİ GAP */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 py-20 mb-16 relative overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <SparklesIcon className="h-6 w-6 text-yellow-300" />
            <span className="text-sm font-semibold">Özel Paket Fırsatı</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            3 Uygulamayı Birlikte Kullanın,
            <span className="block mt-2 text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text">
              İşletmenizi Dönüştürün!
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Squezzly + Tagdio + Stokmatic = Kapsamlı dijital dönüşüm çözümü. Görsel optimizasyonundan envanter yönetimine tam entegrasyon.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-bold text-lg mb-2">Squezzly</h3>
              <p className="text-sm opacity-90">Görsel Optimizasyonu</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-3">🏷️</div>
              <h3 className="font-bold text-lg mb-2">Tagdio</h3>
              <p className="text-sm opacity-90">Barkod & Etiket</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-lg mb-2">Stokmatic</h3>
              <p className="text-sm opacity-90">AI Stok Yönetimi</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-2xl mx-auto mb-12 border-2 border-white/30">
            <div className="text-sm text-yellow-300 font-semibold mb-2">🔥 Özel İndirim</div>
            <div className="text-6xl font-bold mb-4">
              Özel Teklif
            </div>
            <p className="text-lg opacity-90 mb-6">
              3 uygulama için size özel hazırlanmış paket fiyatı alın
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CheckIcon className="h-5 w-5 text-green-300" />
              <span className="text-sm">Kurulum desteği dahil</span>
              <CheckIcon className="h-5 w-5 text-green-300" />
              <span className="text-sm">Ücretsiz eğitim</span>
              <CheckIcon className="h-5 w-5 text-green-300" />
              <span className="text-sm">Öncelikli destek</span>
            </div>
          </div>

          <Link 
            href="/iletisim?paket=combo" 
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <SparklesIcon className="h-6 w-6" />
            Paket Teklifi İste
            <ArrowRightIcon className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}