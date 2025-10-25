import { Metadata } from 'next'
import Link from 'next/link'
import { CheckIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Uygulamalar',
  description: 'Seokopat SaaS uygulamaları - Squezzly, Stokmatic ve Tagdio ile işinizi büyütün',
}

const apps = [
  {
    id: 'squezzly',
    name: 'Squezzly',
    tagline: 'Akıllı Fiyat Optimizasyonu',
    description: 'E-ticaret platformlarında rekabetçi fiyatlama için AI destekli analiz ve otomatik fiyat güncelleme sistemi.',
    longDescription: 'Squezzly, e-ticaret işletmelerinin rekabetçi kalmasını sağlayan gelişmiş bir fiyatlama aracıdır. Rakip fiyatlarını gerçek zamanlı takip eder, pazar dinamiklerini analiz eder ve kar marjınızı koruyarak otomatik fiyat güncellemeleri yapar.',
    features: [
      { title: 'Rakip Fiyat Takibi', desc: '7/24 rakip fiyatlarını izleyin' },
      { title: 'Otomatik Fiyat Güncelleme', desc: 'Belirlediğiniz kurallara göre otomatik fiyat ayarlama' },
      { title: 'Kar Marjı Koruması', desc: 'Minimum kar marjınızı koruyun' },
      { title: 'Stok Bazlı Fiyatlama', desc: 'Stok durumuna göre dinamik fiyatlama' },
      { title: 'Detaylı Raporlama', desc: 'Fiyat değişimleri ve satış performansı raporları' },
      { title: 'Multi-Platform Destek', desc: 'Trendyol, Amazon, Shopify entegrasyonu' }
    ],
    pricing: [
      { name: 'Başlangıç', price: '₺499', features: ['100 ürüne kadar', '3 rakip takibi', 'Günlük güncelleme'] },
      { name: 'Profesyonel', price: '₺999', features: ['500 ürüne kadar', '10 rakip takibi', 'Saatlik güncelleme'], popular: true },
      { name: 'Kurumsal', price: 'Özel Fiyat', features: ['Sınırsız ürün', 'Sınırsız rakip', 'Anlık güncelleme'] }
    ],
    color: 'from-purple-500 to-pink-500',
    icon: '💰',
    status: 'Beta',
    cta: 'Beta Erişimi Al'
  },
  {
    id: 'stokmatic',
    name: 'Stokmatic',
    tagline: 'Stok & Envanter Yönetimi',
    description: 'Çoklu kanal stok senkronizasyonu, otomatik sipariş yönetimi ve akıllı envanter takibi.',
    longDescription: 'Stokmatic, e-ticaret işletmelerinin stok yönetimini kolaylaştıran kapsamlı bir envanter yönetim sistemidir. Tüm satış kanallarınızdaki stokları senkronize eder, otomatik sipariş oluşturur ve envanter maliyetlerinizi optimize eder.',
    features: [
      { title: 'Çoklu Kanal Senkronizasyonu', desc: 'Tüm platformlarda anlık stok güncelleme' },
      { title: 'Barkod Sistemi', desc: 'Hızlı ürün girişi ve takibi' },
      { title: 'Otomatik Sipariş', desc: 'Minimum stok seviyesinde otomatik tedarik' },
      { title: 'Depo Yönetimi', desc: 'Çoklu depo ve transfer yönetimi' },
      { title: 'Stok Uyarıları', desc: 'Kritik stok seviyeleri için anlık bildirimler' },
      { title: 'Envanter Raporları', desc: 'Detaylı stok hareketleri ve karlılık analizleri' }
    ],
    pricing: [
      { name: 'Başlangıç', price: '₺699', features: ['1000 SKU', '2 satış kanalı', '1 depo'] },
      { name: 'Büyüme', price: '₺1499', features: ['5000 SKU', '5 satış kanalı', '3 depo'], popular: true },
      { name: 'Kurumsal', price: 'Özel Fiyat', features: ['Sınırsız SKU', 'Sınırsız kanal', 'Sınırsız depo'] }
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: '📦',
    status: 'Aktif',
    cta: 'Hemen Başla'
  },
  {
    id: 'tagdio',
    name: 'Tagdio',
    tagline: 'SEO Tag Yönetimi',
    description: 'Meta tag optimizasyonu, schema markup oluşturucu ve SEO performans takibi.',
    longDescription: 'Tagdio, web sitelerinin SEO performansını artıran güçlü bir meta tag yönetim aracıdır. Sayfa başlıkları, açıklamalar, schema markup ve Open Graph taglerini optimize ederek arama motoru görünürlüğünüzü artırır.',
    features: [
      { title: 'Meta Tag Oluşturucu', desc: 'SEO uyumlu başlık ve açıklama üretimi' },
      { title: 'Schema Markup', desc: 'Zengin snippet\'lar için yapılandırılmış veri' },
      { title: 'Open Graph Tags', desc: 'Sosyal medya paylaşım optimizasyonu' },
      { title: 'SEO Skoru', desc: 'Sayfa bazlı SEO performans analizi' },
      { title: 'Rakip Analizi', desc: 'Rakiplerin meta tag stratejilerini inceleyin' },
      { title: 'Toplu Düzenleme', desc: 'Yüzlerce sayfayı tek seferde optimize edin' }
    ],
    pricing: [
      { name: 'Kişisel', price: '₺299', features: ['1 web sitesi', '100 sayfa', 'Aylık rapor'] },
      { name: 'İşletme', price: '₺799', features: ['5 web sitesi', '1000 sayfa', 'Haftalık rapor'], popular: true },
      { name: 'Ajans', price: '₺1999', features: ['Sınırsız site', 'Sınırsız sayfa', 'Günlük rapor'] }
    ],
    color: 'from-green-500 to-teal-500',
    icon: '🏷️',
    status: 'Yakında',
    cta: 'Bekleme Listesi'
  }
]

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-5 w-5" />
              <span className="text-sm font-medium">SaaS Çözümlerimiz</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              İşinizi Büyüten <span className="text-pink-300">Akıllı Uygulamalar</span>
            </h1>
            <p className="text-xl opacity-90">
              E-ticaret ve dijital pazarlama süreçlerinizi otomatikleştiren, verimliliği artıran güçlü SaaS çözümleri
            </p>
          </div>
        </div>
      </section>

      {/* Apps Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {apps.map((app, index) => (
          <div key={app.id} className="mb-24">
            {/* App Header */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{app.icon}</div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className={`text-4xl font-bold bg-gradient-to-r ${app.color} bg-clip-text text-transparent`}>
                  {app.name}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  app.status === 'Aktif' ? 'bg-green-100 text-green-800' :
                  app.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {app.status}
                </span>
              </div>
              <p className="text-xl text-gray-600 mb-4">{app.tagline}</p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{app.longDescription}</p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {app.features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${app.color} flex-shrink-0`}>
                      <CheckIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {app.pricing.map((plan) => (
                <div key={plan.name} className={`bg-white rounded-2xl shadow-xl p-8 relative ${plan.popular ? 'ring-2 ring-pink-600 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        En Popüler
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-6">
                    {plan.price}
                    {plan.price !== 'Özel Fiyat' && <span className="text-sm text-gray-600 font-normal">/ay</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckIcon className="h-5 w-5 text-pink-600 flex-shrink-0" />
                        <span className="text-sm text-gray-900">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/iletisim" 
                    className={`w-full inline-block text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.name === 'Kurumsal' 
                        ? 'bg-blue-900 text-white hover:bg-blue-800'
                        : 'bg-pink-600 text-white hover:bg-pink-700'
                    }`}
                  >
                    {plan.name === 'Kurumsal' ? 'İletişime Geç' : app.cta}
                  </Link>
                </div>
              ))}
            </div>

            {index < apps.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </section>

      {/* Bundle CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tüm Uygulamalarımızı Tek Pakette Alın!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Squezzly + Stokmatic + Tagdio = Komple e-ticaret çözümü
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-5xl font-bold mb-2">₺2499<span className="text-xl font-normal">/ay</span></div>
            <div className="text-sm opacity-90 line-through mb-2">Normal Fiyat: ₺3497/ay</div>
            <div className="text-green-300 font-semibold">%30 İndirimli Paket Fiyatı</div>
          </div>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Paket Teklifi Al
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}