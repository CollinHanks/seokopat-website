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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-pink-100/50' 
          : 'bg-white/95 backdrop-blur-lg shadow-lg'
      }`}>
        {/* Üstte İnce Gradient Çizgi - Epik Detay */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-80"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo - Premium Hover */}
            <Link href="/" className="flex items-center space-x-2 group relative z-50">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Seokopat" 
                  width={180} 
                  height={45}
                  className="h-8 sm:h-9 md:h-10 w-auto transition-all duration-500 group-hover:scale-110"
                  priority
                />
                {/* Logo Glow - Subtle */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </Link>

            {/* Desktop Navigation - Epik ve Temiz (Icon YOK) */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-pink-600'
                        : 'text-gray-700 hover:text-pink-600'
                    }`}
                  >
                    {/* Background Gradient */}
                    <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-50 to-purple-50 shadow-md' 
                        : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-pink-50/60 group-hover:to-purple-50/60'
                    }`} />
                    
                    {/* Text */}
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active Indicator - Gradient Line */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></span>
                    )}
                    
                    {/* Hover Glow */}
                    <span className="absolute inset-0 bg-pink-400/10 rounded-xl scale-0 group-hover:scale-100 transition-all duration-300 -z-10 blur-md" />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Desktop - ULTRA PREMIUM */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/iletisim"
                className="group relative px-7 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-105"
              >
                {/* Animated Background Layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shimmer Effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000" />
                
                {/* Glow Ring */}
                <span className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
                
                {/* Text */}
                <span className="relative z-10 text-sm font-semibold tracking-wide">
                  Ücretsiz Danışmanlık
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Smooth Animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-xl hover:bg-pink-50/50 transition-all duration-300 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-pink-600' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-pink-600' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop - Gradient Blur */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-blue-900/50 backdrop-blur-lg transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-white shadow-2xl transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
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
                    className={`relative px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-purple-50 shadow-md'
                        : 'text-gray-700 hover:bg-pink-50/50 hover:text-pink-600'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{item.name}</span>
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
            
            {/* CTA + İletişim - Mobile */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
              >
                Ücretsiz Danışmanlık
              </Link>
              
              {/* İletişim Bilgileri */}
              <div className="space-y-2 text-sm text-gray-600">
                <a href="tel:+905408484834" className="flex items-center gap-3 py-2 hover:text-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+90 540 848 48 34</span>
                </a>
                <a href="mailto:info@seokopat.com" className="flex items-center gap-3 py-2 hover:text-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@seokopat.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}