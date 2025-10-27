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

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Uygulamalar', href: '/uygulamalar' },
    { name: 'Blog', href: '/blog' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image 
              src="/logo.png" 
              alt="Seokopat" 
              width={180} 
              height={45}
              className="h-9 md:h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 ${
                  pathname === item.href
                    ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-purple-50'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/iletisim"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-[15px]"
            >
              Ücretsiz Danışmanlık
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-pink-600 bg-gradient-to-r from-pink-50 to-purple-50'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/iletisim"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg text-center text-[15px]"
              >
                Ücretsiz Danışmanlık
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}