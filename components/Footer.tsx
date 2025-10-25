'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  hizmetler: [
    { name: 'SEO Optimizasyonu', href: '/hizmetler/seo' },
    { name: 'E-Ticaret Danışmanlığı', href: '/hizmetler/e-ticaret' },
    { name: 'Yazılım Geliştirme', href: '/hizmetler/yazilim' },
    { name: 'Web Tasarım', href: '/hizmetler/tasarim' },
  ],
  uygulamalar: [
    { name: 'Squezzly', href: '/uygulamalar/squezzly' },
    { name: 'Stokmatic', href: '/uygulamalar/stokmatic' },
    { name: 'Tagdio', href: '/uygulamalar/tagdio' },
  ],
  kurumsal: [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Admin', href: '/admin' },
  ],
  legal: [
    { name: 'Gizlilik Politikası', href: '/gizlilik' },
    { name: 'Kullanım Koşulları', href: '/kullanim-kosullari' },
    { name: 'KVKK', href: '/kvkk' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'YouTube', href: '#', icon: '▶️' },
]

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo-white.png" 
                alt="Seokopat" 
                width={150}
                height={42}
                className="h-10 w-auto object-contain"
                onError={(e: any) => {
                  e.currentTarget.src = '/logo.png';
                  e.currentTarget.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              AI destekli dijital çözümlerle işletmenizi büyütün.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Uygulamalar</h3>
            <ul className="space-y-2">
              {footerLinks.uygulamalar.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 İstanbul, Türkiye</li>
              <li>📧 info@seokopat.com</li>
              <li>📱 +90 555 555 55 55</li>
              <li>⏰ Pzt-Cum: 09:00-18:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Seokopat. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}