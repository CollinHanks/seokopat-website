import Link from 'next/link';

export default function HizmetlerPage() {
  const hizmetler = [
    {
      id: 'seo',
      slug: 'seo',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      baslik: 'SEO Optimizasyonu',
      kisa: 'Arama motorlarında üst sıralarda yer alın',
      aciklama: 'Kapsamlı SEO analizi, anahtar kelime araştırması, teknik SEO optimizasyonu ve link building hizmetlerimizle Google sıralamalarınızı yükseltin.',
      ozellikler: [
        'Teknik SEO Denetimi',
        'Anahtar Kelime Analizi',
        'İçerik Optimizasyonu',
        'Link Building Stratejisi',
        'Rakip Analizi',
        'Aylık Raporlama'
      ],
      gradient: 'from-pink-500 via-pink-600 to-pink-700',
      iconBg: 'bg-pink-100 text-pink-600'
    },
    {
      id: 'web-tasarim',
      slug: 'tasarim',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      baslik: 'Web Tasarım',
      kisa: 'Markanızı dijitalde en iyi şekilde temsil edin',
      aciklama: 'Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. UI/UX tasarım prensipleriyle markanıza değer katan özgün web çözümleri.',
      ozellikler: [
        'Modern & Responsive Tasarım',
        'UI/UX Odaklı Yaklaşım',
        'Hızlı Yükleme Performansı',
        'SEO Dostu Kod Yapısı',
        'Mobil Uyumlu',
        'Özgün Tasarım Konsepti'
      ],
      gradient: 'from-blue-500 via-blue-600 to-indigo-700',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'dijital-pazarlama',
      slug: 'pazarlama',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      baslik: 'Dijital Pazarlama',
      kisa: 'Hedef kitlenize en etkili şekilde ulaşın',
      aciklama: 'PPC kampanyaları, sosyal medya reklamları, içerik pazarlaması ve e-posta pazarlaması ile ROI\'nizi maksimize edin.',
      ozellikler: [
        'Google Ads Yönetimi',
        'Facebook & Instagram Ads',
        'Sosyal Medya Yönetimi',
        'İçerik Pazarlaması',
        'E-posta Pazarlaması',
        'Dönüşüm Optimizasyonu'
      ],
      gradient: 'from-purple-500 via-pink-600 to-orange-500',
      iconBg: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'e-ticaret',
      slug: 'e-ticaret',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      baslik: 'E-Ticaret Danışmanlığı',
      kisa: 'Online satışlarınızı katbekat artırın',
      aciklama: 'E-ticaret platformlarında mağaza kurulumu, ürün listeleme optimizasyonu, kampanya yönetimi ve büyüme stratejileri ile satışlarınızı artırın.',
      ozellikler: [
        'Platform Kurulumu',
        'Fiyatlama Stratejisi',
        'Ürün Listeleme Optimizasyonu',
        'Kampanya Yönetimi',
        'Stok Yönetimi',
        'Performans Analizi'
      ],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'yazilim',
      slug: 'yazilim',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      baslik: 'Yazılım Geliştirme',
      kisa: 'İşletmenize özel yazılım çözümleri',
      aciklama: 'İşletmenize özel web uygulamaları, mobil uygulamalar, API entegrasyonları ve otomasyon sistemleri geliştiriyoruz.',
      ozellikler: [
        'Web Uygulama Geliştirme',
        'Mobil Uygulama',
        'API Entegrasyonu',
        'Otomasyon Sistemleri',
        'Cloud Çözümleri',
        'Teknik Destek'
      ],
      gradient: 'from-violet-500 via-purple-600 to-indigo-700',
      iconBg: 'bg-violet-100 text-violet-600'
    },
    {
      id: 'lojistik',
      slug: 'lojistik',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      baslik: 'Stok & Lojistik Yönetimi',
      kisa: 'Tedarik zincirinizi optimize edin',
      aciklama: 'Stok yönetimi, depo optimizasyonu, kargo entegrasyonları ve lojistik süreç iyileştirme hizmetlerimizle maliyetlerinizi düşürün.',
      ozellikler: [
        'Stok Takip Sistemi',
        'Kargo Entegrasyonu',
        'Envanter Optimizasyonu',
        'Depo Yönetimi',
        'Sipariş Yönetimi',
        'Lojistik Raporlama'
      ],
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      iconBg: 'bg-green-100 text-green-600'
    }
  ];

  const surecAdimlar = [
    {
      numara: '01',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      baslik: 'Keşif & Analiz',
      kisaAciklama: 'İhtiyaçlarınızı dinler, hedeflerinizi belirler ve detaylı analiz yaparız',
      detaylar: [
        'Mevcut durum analizi ve rakip araştırması',
        'Hedef kitle ve pazar araştırması',
        'SWOT analizi ile güçlü/zayıf yönlerin tespiti',
        'Bütçe ve zaman planlaması'
      ],
      renk: 'from-blue-500 to-cyan-500'
    },
    {
      numara: '02',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      baslik: 'Strateji Geliştirme',
      kisaAciklama: 'Size özel, hedefe yönelik kapsamlı bir dijital strateji oluştururuz',
      detaylar: [
        'Hedefe özel aksiyon planı hazırlama',
        'KPI belirleme ve ölçüm metrikleri',
        'Kanal ve platform seçimi',
        'İçerik ve kampanya takvimi oluşturma'
      ],
      renk: 'from-purple-500 to-pink-500'
    },
    {
      numara: '03',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      baslik: 'Uygulama & Yürütme',
      kisaAciklama: 'Planı hayata geçirir ve her adımda şeffaf bilgilendirme yaparız',
      detaylar: [
        'Profesyonel ekip ile hızlı başlangıç',
        'Düzenli ilerleme raporları',
        'Şeffaf iletişim ve anlık geri bildirim',
        'Agile metodoloji ile esnek çalışma'
      ],
      renk: 'from-orange-500 to-red-500'
    },
    {
      numara: '04',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      baslik: 'Optimizasyon & Büyüme',
      kisaAciklama: 'Sürekli izler, optimize eder ve işinizi büyütürüz',
      detaylar: [
        'Performans takibi ve A/B testleri',
        'Veri analizi ile sürekli iyileştirme',
        'ROI maksimizasyonu için optimizasyon',
        'Ölçeklenebilir büyüme stratejileri'
      ],
      renk: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dijital Başarınız İçin <span className="text-yellow-300">360°</span> Çözümler
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              SEO'dan yazılım geliştirmeye, e-ticaretten dijital pazarlamaya kadar tüm ihtiyaçlarınız için tek adres.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="#hizmetler" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Hizmetleri Keşfet
              </Link>
              <Link 
                href="/iletisim" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Ücretsiz Danışmanlık
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-gray-600 font-medium">Mutlu Müşteri</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                %350
              </div>
              <div className="text-gray-600 font-medium">Ortalama ROI Artışı</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                7/24
              </div>
              <div className="text-gray-600 font-medium">Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Grid */}
      <section id="hizmetler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşletmenizin dijital dönüşümü için ihtiyacınız olan her şey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hizmetler.map((hizmet) => (
              <Link
                key={hizmet.id}
                href={`/hizmetler/${hizmet.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${hizmet.gradient}`} />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-20 h-20 ${hizmet.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {hizmet.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {hizmet.baslik}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-lg font-medium">
                    {hizmet.kisa}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hizmet.aciklama}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {hizmet.ozellikler.slice(0, 3).map((ozellik, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {ozellik}
                      </div>
                    ))}
                    {hizmet.ozellikler.length > 3 && (
                      <div className="text-sm text-gray-500 font-medium mt-2">
                        +{hizmet.ozellikler.length - 3} özellik daha
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    Detayları İncele
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Süreci */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dijital Başarıya 4 Adımda Ulaşın
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kanıtlanmış metodolojimiz ile projenizi baştan sona profesyonelce yönetiyoruz. Her adımda şeffaflık, kalite ve sonuç odaklı çalışma garantisi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {surecAdimlar.map((adim, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-t-4 border-transparent hover:border-blue-500">
                  {/* Number Badge */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${adim.renk} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{adim.numara}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-gray-400 mb-4">
                    {adim.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {adim.baslik}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {adim.kisaAciklama}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {adim.detaylar.map((detay, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {detay}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < surecAdimlar.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 transform z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-gray-700 font-semibold">Ortalama proje tamamlanma süresi: 2-4 hafta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Neden Seokopat?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dijital dünyada fark yaratan özellikleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kanıtlanmış Başarı</h3>
              <p className="text-gray-600">200+ mutlu müşteri ve 500+ başarılı proje ile sektörde güvenilir isim</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı & Etkili</h3>
              <p className="text-gray-600">Hızlı teslimat ve etkili çözümlerle işinizi bir adım öne taşıyoruz</p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">7/24 Destek</h3>
              <p className="text-gray-600">Her zaman yanınızdayız. Sorularınıza hızlı ve profesyonel yanıt</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projenize Hemen Başlayalım
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ücretsiz danışmanlık için iletişime geçin, size özel çözümler geliştirelim
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/iletisim"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Ücretsiz Danışmanlık Al
            </Link>
            <Link
              href="/hakkimizda"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/20"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}