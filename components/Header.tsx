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
    { name: 'Ana Sayfa', href: '/', icon: '🏠' },
    { name: 'Hizmetler', href: '/hizmetler', icon: '🚀' },
    { name: 'Uygulamalar', href: '/uygulamalar', icon: '📱' },
    { name: 'Blog', href: '/blog', icon: '✍️' },
    { name: 'Hakkımızda', href: '/hakkimizda', icon: '👥' },
    { name: 'İletişim', href: '/iletisim', icon: '📞' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-pink-100' 
          : 'bg-white/95 backdrop-blur-md shadow-md'
      }`}>
        {/* Üstte ince gradient çizgi - Canlandırma */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo - Epik Animasyon */}
            <Link href="/" className="flex items-center space-x-2 group relative z-50">
              <div className="relative">
                <Image 
                  src="/logo.png" 
                  alt="Seokopat" 
                  width={180} 
                  height={45}
                  className="h-8 sm:h-9 md:h-10 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                  priority
                />
                {/* Logo Pulse Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-600/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 animate-pulse" />
              </div>
            </Link>

            {/* Desktop Navigation - Epik Canlandırma */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
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
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Animated Background */}
                    <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg' 
                        : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-pink-50/50 group-hover:to-purple-50/50'
                    }`} />
                    
                    {/* Icon + Text */}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="text-base group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                    
                    {/* Active Indicator - Animated Line */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse" />
                    )}
                    
                    {/* Hover Sparkle Effect */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-pink-400/30 rounded-full group-hover:w-full group-hover:h-full transition-all duration-300 -z-10 blur-xl" />
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Desktop - Ultra Epik */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/iletisim"
                className="group relative px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110"
              >
                {/* Animated Gradient Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Moving Shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000" />
                
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-pink-400/50" />
                
                {/* Text */}
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">✨</span>
                  Ücretsiz Danışmanlık
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Animasyonlu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-xl hover:bg-pink-50 transition-all duration-300 z-50 group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-pink-600' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-pink-600' : ''
                }`} />
              </div>
              {/* Hover Glow */}
              <span className="absolute inset-0 bg-pink-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10 blur" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Epik Full Screen */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Animated Backdrop */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-blue-900/50 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel - Slide + Fade */}
        <div className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-white shadow-2xl transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6 pb-6">
            
            {/* Navigation Items - Staggered Animation */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`relative px-4 py-4 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-purple-50 shadow-md'
                        : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.5s ease-out' : 'none'
                    }}
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="text-xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                      {isActive && (
                        <svg className="w-5 h-5 text-pink-500 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </span>
                    {/* Hover Glow */}
                    <span className="absolute inset-0 bg-pink-400/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                  </Link>
                );
              })}
            </nav>
            
            {/* CTA + İletişim - Mobile */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-4"
              >
                ✨ Ücretsiz Danışmanlık
              </Link>
              
              {/* İletişim Bilgileri */}
              <div className="space-y-2 text-sm text-gray-600">
                <a href="tel:+905408484834" className="flex items-center gap-2 py-2 hover:text-pink-600 transition-colors">
                  <span className="text-base">📞</span>
                  <span>+90 540 848 48 34</span>
                </a>
                <a href="mailto:info@seokopat.com" className="flex items-center gap-2 py-2 hover:text-pink-600 transition-colors">
                  <span className="text-base">✉️</span>
                  <span>info@seokopat.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for mobile menu animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}