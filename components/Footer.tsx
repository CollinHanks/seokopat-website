'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const hizmetler = [
    { isim: 'SEO Optimizasyonu', link: '/hizmetler/seo' },
    { isim: 'Web Tasarım', link: '/hizmetler/tasarim' },
    { isim: 'Dijital Pazarlama', link: '/hizmetler/pazarlama' },
    { isim: 'E-Ticaret Danışmanlığı', link: '/hizmetler/e-ticaret' },
    { isim: 'Yazılım Geliştirme', link: '/hizmetler/yazilim' },
    { isim: 'Stok & Lojistik', link: '/hizmetler/lojistik' }
  ];

  const uygulamalar = [
    { isim: 'Squezzly', link: '/uygulamalar/squezzly' },
    { isim: 'Stokmatic', link: '/uygulamalar/stokmatic' },
    { isim: 'Tagdio', link: '/uygulamalar/tagdio' }
  ];

  const kurumsal = [
    { isim: 'Hakkımızda', link: '/hakkimizda' },
    { isim: 'Blog', link: '/blog' },
    { isim: 'İletişim', link: '/iletisim' },
    { isim: 'Kariyer', link: '/kariyer' }
  ];

  const yasal = [
    { isim: 'Gizlilik Politikası', link: '/gizlilik-politikasi' },
    { isim: 'Kullanım Koşulları', link: '/kullanim-kosullari' },
    { isim: 'KVKK', link: '/kvkk' },
    { isim: 'Çerez Politikası', link: '/cerez-politikasi' }
  ];

  // Koordinatlar
  const officeLocation = {
    lat: 41.05790364248265,
    lng: 28.975364424273387,
    address: 'Şişli, İstanbul'
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      {/* Subtle Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 pt-16 sm:pt-20 pb-8">
          
          {/* Ana Grid: Logo + Menüler */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            
            {/* Sol: Logo + Açıklama + Sosyal Medya */}
            <div className="lg:col-span-3">
              <Link href="/" className="inline-block mb-6 group">
                <Image 
                  src="/logo-white.png" 
                  alt="Seokopat" 
                  width={180} 
                  height={45}
                  className="h-9 w-auto transition-transform group-hover:scale-105"
                  priority
                />
              </Link>
              
              <p className="text-blue-200 mb-8 leading-relaxed text-sm sm:text-[15px]">
                AI destekli dijital çözümlerle işletmenizi büyütün. SEO'dan yazılım geliştirmeye, tek adres.
              </p>

              {/* Sosyal Medya - Modern */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10" aria-label="Twitter">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10" aria-label="LinkedIn">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10" aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm border border-white/10" aria-label="YouTube">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Sağ: 4 Menü Kolonu */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                
                {/* Hizmetler */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 flex items-center">
                    <span className="w-1 h-5 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full mr-3"></span>
                    Hizmetler
                  </h3>
                  <ul className="space-y-3">
                    {hizmetler.map((hizmet, index) => (
                      <li key={index}>
                        <Link 
                          href={hizmet.link}
                          className="text-blue-200 hover:text-white transition-colors text-sm sm:text-[15px] block relative group"
                        >
                          <span className="relative inline-block">
                            {hizmet.isim}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Uygulamalar */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 flex items-center">
                    <span className="w-1 h-5 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full mr-3"></span>
                    Uygulamalar
                  </h3>
                  <ul className="space-y-3">
                    {uygulamalar.map((app, index) => (
                      <li key={index}>
                        <Link 
                          href={app.link}
                          className="text-blue-200 hover:text-white transition-colors text-sm sm:text-[15px] block relative group"
                        >
                          <span className="relative inline-block">
                            {app.isim}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kurumsal */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 flex items-center">
                    <span className="w-1 h-5 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full mr-3"></span>
                    Kurumsal
                  </h3>
                  <ul className="space-y-3">
                    {kurumsal.map((item, index) => (
                      <li key={index}>
                        <Link 
                          href={item.link}
                          className="text-blue-200 hover:text-white transition-colors text-sm sm:text-[15px] block relative group"
                        >
                          <span className="relative inline-block">
                            {item.isim}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* İletişim */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 flex items-center">
                    <span className="w-1 h-5 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full mr-3"></span>
                    İletişim
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-blue-200 text-sm sm:text-[15px] group">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${officeLocation.lat},${officeLocation.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        {officeLocation.address}
                      </a>
                    </li>
                    
                    <li className="flex items-start text-blue-200 text-sm sm:text-[15px] group">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:info@seokopat.com" className="hover:text-white transition-colors break-all">
                        info@seokopat.com
                      </a>
                    </li>
                    
                    <li className="flex items-start text-blue-200 text-sm sm:text-[15px] group">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:+905408484834" className="hover:text-white transition-colors whitespace-nowrap">
                        +90 540 848 48 34
                      </a>
                    </li>
                    
                    <li className="flex items-start text-blue-200 text-sm sm:text-[15px] group">
                      <svg className="w-4 h-4 mr-3 flex-shrink-0 mt-1 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="group-hover:text-white transition-colors">Pzt-Cum: 09:00-18:00</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>

          {/* Newsletter - TAM HİZALI */}
          <div className="border-t border-white/20 py-10">
            <div className="bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-white/20 shadow-2xl">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
                  
                  {/* Sol: Text */}
                  <div className="text-center md:text-left flex-shrink-0">
                    <h3 className="text-white font-bold text-lg mb-1 flex items-center justify-center md:justify-start gap-2">
                      <span className="text-2xl">📬</span>
                      Dijital İpuçları
                    </h3>
                    <p className="text-blue-200 text-sm">
                      Haftalık SEO ve dijital pazarlama ipuçları alın
                    </p>
                  </div>

                  {/* Sağ: Form */}
                  <div className="w-full md:flex-1 md:max-w-md">
                    {!subscribed ? (
                      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="E-posta adresiniz"
                          className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm transition-all backdrop-blur-sm"
                          required
                        />
                        <button
                          type="submit"
                          className="px-7 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-sm whitespace-nowrap"
                        >
                          Abone Ol
                        </button>
                      </form>
                    ) : (
                      <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center justify-center gap-3">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-green-400 font-semibold text-sm">Başarıyla abone oldunuz!</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Modern */}
        <div className="border-t border-white/10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-7">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              <p className="text-blue-200 text-sm text-center md:text-left">
                © 2025 Seokopat. Tüm hakları saklıdır.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {yasal.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.link}
                    className="text-blue-200 hover:text-white transition-colors whitespace-nowrap relative group"
                  >
                    {item.isim}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}