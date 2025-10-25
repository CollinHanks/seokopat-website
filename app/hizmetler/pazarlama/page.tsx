import Link from 'next/link';

export default function DijitalPazarlamaPage() {
  const hizmetler = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      baslik: "SEO Optimizasyonu",
      aciklama: "Arama motorlarında üst sıralara çıkın, organik trafiğinizi artırın"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
      baslik: "Google Ads",
      aciklama: "Hedefli reklamlarla doğru müşterilere ulaşın, dönüşüm oranlarınızı yükseltin"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>,
      baslik: "Sosyal Medya Yönetimi",
      aciklama: "Sosyal medya platformlarında güçlü bir varlık oluşturun"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      baslik: "E-posta Pazarlama",
      aciklama: "Müşterilerinizle etkili iletişim kurun, sadakati artırın"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
      baslik: "İçerik Pazarlama",
      aciklama: "Değerli içeriklerle markanızı öne çıkarın, otorite kazanın"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      baslik: "Analiz & Raporlama",
      aciklama: "Detaylı analizlerle stratejilerinizi sürekli optimize edin"
    }
  ];

  const avantajlar = [
    {
      baslik: "Ölçülebilir Sonuçlar",
      aciklama: "Her kampanyanın performansını detaylı raporlarla takip edin"
    },
    {
      baslik: "Hedef Kitle Odaklı",
      aciklama: "Doğru mesajı, doğru kişilere, doğru zamanda iletin"
    },
    {
      baslik: "Bütçe Dostu",
      aciklama: "Geleneksel pazarlamaya göre daha düşük maliyetlerle daha fazla erişim"
    },
    {
      baslik: "Hızlı Sonuçlar",
      aciklama: "Kampanyalarınızı hızlıca başlatın ve sonuçları anında görün"
    }
  ];

  const surecler = [
    {
      adim: "1",
      baslik: "Durum Analizi",
      aciklama: "Mevcut dijital varlığınızı, rakiplerinizi ve hedef kitlenizi analiz ederiz"
    },
    {
      adim: "2",
      baslik: "Strateji Geliştirme",
      aciklama: "Hedeflerinize uygun, kapsamlı dijital pazarlama stratejisi oluştururuz"
    },
    {
      adim: "3",
      baslik: "Uygulama",
      aciklama: "Kampanyalarınızı planlanan strateji doğrultusunda hayata geçiririz"
    },
    {
      adim: "4",
      baslik: "İzleme & Optimizasyon",
      aciklama: "Sürekli izleyerek kampanyalarınızı optimize eder, performansı artırırız"
    },
    {
      adim: "5",
      baslik: "Raporlama",
      aciklama: "Detaylı raporlarla sonuçları paylaşır, stratejilerimizi geliştiririz"
    }
  ];

  const paketler = [
    {
      isim: "Temel",
      fiyat: "₺2.999",
      donem: "/ Ay",
      ozellikler: [
        "Sosyal Medya Yönetimi (2 Platform)",
        "Aylık 12 Gönderi",
        "Temel SEO Optimizasyonu",
        "Aylık Performans Raporu",
        "E-posta Desteği"
      ]
    },
    {
      isim: "Profesyonel",
      fiyat: "₺5.999",
      donem: "/ Ay",
      ozellikler: [
        "Sosyal Medya Yönetimi (4 Platform)",
        "Aylık 24 Gönderi",
        "Gelişmiş SEO & Google Ads",
        "Haftalık Performans Raporu",
        "İçerik Pazarlama",
        "Öncelikli Destek"
      ],
      populer: true
    },
    {
      isim: "Kurumsal",
      fiyat: "₺12.999",
      donem: "/ Ay",
      ozellikler: [
        "Tam Dijital Pazarlama Yönetimi",
        "Sınırsız Platform",
        "Aylık 50+ Gönderi",
        "Premium SEO & SEM",
        "E-posta Pazarlama Kampanyaları",
        "Özel Strateji Geliştirme",
        "7/24 Destek",
        "Özel Hesap Yöneticisi"
      ]
    }
  ];

  const istatistikler = [
    { sayi: "500+", baslik: "Başarılı Kampanya" },
    { sayi: "%350", baslik: "Ortalama ROI Artışı" },
    { sayi: "200+", baslik: "Mutlu Müşteri" },
    { sayi: "10M+", baslik: "Erişim" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 opacity-95" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/hizmetler" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Hizmetlere Dön
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Dijital Pazarlama ile Büyüyün
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Veri odaklı stratejiler ve yaratıcı kampanyalarla dijital dünyada markanızı zirveye taşıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#paketler" 
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl"
              >
                Paketleri İncele
              </Link>
              <Link 
                href="#iletisim" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Ücretsiz Danışmanlık
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {istatistikler.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.sayi}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.baslik}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dijital Pazarlama Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Her ihtiyaca uygun, sonuç odaklı pazarlama çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hizmetler.map((hizmet, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="text-purple-600 mb-4">
                  {hizmet.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {hizmet.baslik}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {hizmet.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dijital Pazarlamanın Avantajları
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantajlar.map((avantaj, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                  <svg className="w-12 h-12 text-purple-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {avantaj.baslik}
                </h3>
                <p className="text-gray-600">
                  {avantaj.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              5 adımda dijital pazarlama başarısı
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {surecler.map((surec, index) => (
              <div 
                key={index}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {surec.adim}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {surec.baslik}
                  </h3>
                  <p className="text-gray-600">
                    {surec.aciklama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section id="paketler" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dijital Pazarlama Paketlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşinize en uygun paketi seçin, büyümeye başlayın
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paketler.map((paket, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  paket.populer ? 'ring-4 ring-purple-500 transform scale-105' : ''
                }`}
              >
                {paket.populer && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 font-semibold">
                    En Popüler
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {paket.isim}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-600">
                      {paket.fiyat}
                    </span>
                    <span className="text-gray-600 ml-2">{paket.donem}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {paket.ozellikler.map((ozellik, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {ozellik}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#iletisim"
                    className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                      paket.populer
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Hemen Başla
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="iletisim" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
          <h2 className="text-4xl font-bold text-white mb-6">
            Dijital Pazarlama Yolculuğunuza Bugün Başlayın
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ücretsiz danışmanlık için hemen bizimle iletişime geçin
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Ücretsiz Danışmanlık Al
          </Link>
        </div>
      </section>
    </div>
  );
}