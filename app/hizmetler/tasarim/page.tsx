import Link from 'next/link';

export default function WebTasarimPage() {
  const ozellikler = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
      baslik: "Modern Tasarım",
      aciklama: "Güncel tasarım trendleri ve estetik yaklaşımlarla markanıza değer katan web siteleri"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
      baslik: "Responsive Yapı",
      aciklama: "Tüm cihazlarda mükemmel görünen, mobil uyumlu tasarımlar"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      baslik: "Hızlı Yükleme",
      aciklama: "Optimize edilmiş kodlar ve görseller ile yıldırım hızında performans"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      baslik: "Temiz Kod",
      aciklama: "SEO dostu, bakımı kolay, standartlara uygun kod yapısı"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
      baslik: "Kullanıcı Odaklı",
      aciklama: "Kullanıcı deneyimi (UX) merkezli tasarım yaklaşımı"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      baslik: "Özgün Tasarım",
      aciklama: "Markanıza özel, benzersiz ve özgün tasarım çözümleri"
    }
  ];

  const surecler = [
    {
      adim: "1",
      baslik: "Keşif & Analiz",
      aciklama: "İhtiyaçlarınızı dinler, hedef kitlenizi analiz eder ve rakip analizi yaparız"
    },
    {
      adim: "2",
      baslik: "Planlama & Strateji",
      aciklama: "Site haritası, içerik stratejisi ve tasarım konsepti oluşturulur"
    },
    {
      adim: "3",
      baslik: "Tasarım & Prototip",
      aciklama: "Wireframe ve mockup çalışmaları ile tasarımınızı şekillendiririz"
    },
    {
      adim: "4",
      baslik: "Geliştirme & Test",
      aciklama: "Modern teknolojilerle kodlama yapılır ve kapsamlı testler gerçekleştirilir"
    },
    {
      adim: "5",
      baslik: "Yayın & Destek",
      aciklama: "Siteniz yayına alınır ve sürekli destek sağlanır"
    }
  ];

  const paketler = [
    {
      isim: "Başlangıç",
      fiyat: "₺9.999",
      ozellikler: [
        "5 Sayfa",
        "Responsive Tasarım",
        "İletişim Formu",
        "Temel SEO",
        "3 Ay Destek"
      ]
    },
    {
      isim: "Profesyonel",
      fiyat: "₺19.999",
      ozellikler: [
        "10 Sayfa",
        "Responsive Tasarım",
        "Blog Modülü",
        "Gelişmiş SEO",
        "6 Ay Destek",
        "Sosyal Medya Entegrasyonu"
      ],
      populer: true
    },
    {
      isim: "Kurumsal",
      fiyat: "₺34.999",
      ozellikler: [
        "Sınırsız Sayfa",
        "Responsive Tasarım",
        "E-Ticaret Modülü",
        "Premium SEO",
        "12 Ay Destek",
        "Çoklu Dil Desteği",
        "Özel Entegrasyonlar"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 opacity-95" />
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
              Modern Web Tasarım Hizmetleri
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Markanızı dijital dünyada en iyi şekilde temsil eden, kullanıcı deneyimini ön planda tutan web siteleri tasarlıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#paketler" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Paketleri İncele
              </Link>
              <Link 
                href="#iletisim" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Web tasarım projelerinizde size sunduğumuz avantajlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ozellikler.map((ozellik, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">
                  {ozellik.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {ozellik.baslik}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {ozellik.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Projenizi baştan sona profesyonelce yönetiyoruz
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {surecler.map((surec, index) => (
              <div 
                key={index}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
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
      <section id="paketler" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Web Tasarım Paketlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun paketi seçin, hemen başlayalım
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paketler.map((paket, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  paket.populer ? 'ring-4 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {paket.populer && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 font-semibold">
                    En Popüler
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {paket.isim}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">
                      {paket.fiyat}
                    </span>
                    <span className="text-gray-600 ml-2">/ Proje</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {paket.ozellikler.map((ozellik, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
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
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
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
      <section id="iletisim" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Projeniz İçin Hemen Teklif Alın
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Size en uygun web tasarım çözümünü birlikte belirleyelim
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>
      </section>
    </div>
  );
}