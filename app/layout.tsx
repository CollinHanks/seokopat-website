import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://seokopat.com'),
  title: {
    default: 'Seokopat - AI Destekli SEO & E-Ticaret Çözümleri',
    template: '%s | Seokopat'
  },
  description: 'SEO optimizasyonu, e-ticaret danışmanlığı, Shopify tasarım ve yazılım çözümleri. AI destekli dijital dönüşüm partneri.',
  keywords: ['SEO', 'E-ticaret', 'Shopify', 'Amazon', 'Etsy', 'Trendyol', 'Dijital Pazarlama', 'Web Tasarım'],
  authors: [{ name: 'Seokopat Team' }],
  creator: 'Seokopat',
  publisher: 'Seokopat',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://seokopat.com',
    siteName: 'Seokopat',
    title: 'Seokopat - AI Destekli SEO & E-Ticaret Çözümleri',
    description: 'Dijital dönüşümünüzü AI ile hızlandırın. SEO, e-ticaret ve yazılım çözümleri.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Seokopat - Dijital Çözümler',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seokopat - AI Destekli Dijital Çözümler',
    description: 'SEO, E-ticaret ve Yazılım Çözümleri',
    creator: '@seokopat',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://seokopat.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <head>
        {/* Favicon - Mobilde de Görünsün */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Viewport - Mobil Optimize */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Theme Color - Mobil Browser Bar Rengi */}
        <meta name="theme-color" content="#ec4899" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 overflow-x-hidden`}>
        {/* overflow-x-hidden class'ı eklendi - Yatay scroll engellendi */}
        <Header />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}