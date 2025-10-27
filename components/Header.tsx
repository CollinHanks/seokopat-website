'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıkken scroll'u engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Uygulamalar', href: '/uygulamalar' },
    { name: 'Blog', href: '/blog' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group relative z-50">
              <Image 
                src="/logo.png" 
                alt="Seokopat" 
                width={180} 
                height={45}
                className="h-8 sm:h-9 md:h-10 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
              {/* Logo Glow Efekti */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>

            {/* Desktop Navigation - Epik Tasarım */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-pink-600'
                        : 'text-gray-700 hover:text-pink-600'
                    }`}
                  >
                    {/* Hover/Active Background */}
                    <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-50 to-purple-50' 
                        : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-pink-50/50 group-hover:to-purple-50/50'
                    }`} />
                    
                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active Indicator - Alt Çizgi */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
                    )}
                    
                    {/* Hover Indicator */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full group-hover:w-8 transition-all duration-300" />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/iletisim"
                className="group relative px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
              >
                {/* Button Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shimmer Efekti */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
                
                <span className="relative z-10 text-sm">Ücretsiz Danışmanlık</span>
              </Link>
            </div>

            {/* Mobile Menu Button - Animasyonlu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-white shadow-2xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6 pb-6">
            {/* Navigation Items */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative px-4 py-4 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-purple-50'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.name}
                      {isActive && (
                        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>
            
            {/* CTA Button - Mobile */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ücretsiz Danışmanlık
              </Link>
              
              {/* İletişim Bilgileri - Mobile */}
              <div className="mt-4 text-center text-sm text-gray-600">
                <a href="tel:+905408484834" className="block py-2 hover:text-pink-600 transition-colors">
                  📞 +90 540 848 48 34
                </a>
                <a href="mailto:info@seokopat.com" className="block py-2 hover:text-pink-600 transition-colors">
                  ✉️ info@seokopat.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}