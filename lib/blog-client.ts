// lib/blog-client.ts
'use client'

import { BlogPost } from './types'

// LocalStorage'dan blog yazılarını oku
export const getBlogPosts = (): BlogPost[] => {
  if (typeof window === 'undefined') return []
  
  try {
    const stored = localStorage.getItem('blogPosts')
    return stored ? JSON.parse(stored) : getDefaultPosts()
  } catch (error) {
    console.error('Blog posts yüklenemedi:', error)
    return getDefaultPosts()
  }
}

// LocalStorage'a blog yazısı kaydet
export const saveBlogPost = (post: BlogPost): void => {
  if (typeof window === 'undefined') return
  
  try {
    const posts = getBlogPosts()
    const existingIndex = posts.findIndex(p => p.id === post.id)
    
    if (existingIndex >= 0) {
      posts[existingIndex] = post
    } else {
      posts.push(post)
    }
    
    localStorage.setItem('blogPosts', JSON.stringify(posts))
  } catch (error) {
    console.error('Blog post kaydedilemedi:', error)
  }
}

// Blog yazısını sil
export const deleteBlogPost = (id: string): void => {
  if (typeof window === 'undefined') return
  
  try {
    const posts = getBlogPosts().filter(p => p.id !== id)
    localStorage.setItem('blogPosts', JSON.stringify(posts))
  } catch (error) {
    console.error('Blog post silinemedi:', error)
  }
}

// Slug'a göre tekil yazı getir
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getBlogPosts()
  return posts.find(post => post.slug === slug)
}

// Varsayılan (demo) blog yazıları
function getDefaultPosts(): BlogPost[] {
  return [
    {
      id: '1',
      title: 'E-Ticaret Sitenizi Optimize Etmenin 10 Yolu',
      slug: 'e-ticaret-optimizasyon',
      excerpt: 'E-ticaret sitenizin performansını artırmak ve satışlarınızı yükseltmek için kanıtlanmış stratejiler.',
      content: `
        <h2>E-Ticaret Optimizasyonunun Önemi</h2>
        <p>Modern e-ticaret dünyasında rekabet her geçen gün artıyor. Müşterilerinize en iyi deneyimi sunmak için sitenizi sürekli optimize etmeniz gerekiyor.</p>
        
        <h3>1. Hızlı Yükleme Süreleri</h3>
        <p>Araştırmalar gösteriyor ki, 3 saniyeden uzun yüklenen siteler %40 oranında ziyaretçi kaybediyor.</p>
        
        <h3>2. Mobil Optimizasyon</h3>
        <p>E-ticaret trafiğinin %60'ı mobil cihazlardan geliyor. Responsive tasarım artık opsiyonel değil, zorunlu!</p>
        
        <h3>3. SEO ve İçerik</h3>
        <p>Ürün açıklamalarınız SEO-friendly mi? Anahtar kelimelerinizi doğal bir şekilde kullanıyor musunuz?</p>
        
        <p><strong>Sonuç:</strong> Bu stratejileri uygulayarak dönüşüm oranlarınızı %30'a kadar artırabilirsiniz.</p>
      `,
      author: 'Seokopat Ekibi',
      date: '2025-01-15',
      image: '/blog/ecommerce-optimization.jpg',
      tags: ['E-Ticaret', 'SEO', 'Optimizasyon'],
      readTime: '5 dk okuma'
    },
    {
      id: '2',
      title: 'Yapay Zeka ile SEO: Geleceğin Stratejileri',
      slug: 'yapay-zeka-seo',
      excerpt: 'AI ve makine öğrenimi SEO stratejilerinizi nasıl dönüştürüyor? İşte bilmeniz gerekenler.',
      content: `
        <h2>SEO'da AI Devrimi</h2>
        <p>Yapay zeka, SEO çalışmalarını tamamen değiştiriyor. Google'ın algoritmaları her geçen gün daha akıllı hale geliyor.</p>
        
        <h3>AI Destekli Anahtar Kelime Araştırması</h3>
        <p>Geleneksel yöntemler artık yeterli değil. AI araçları, kullanıcı niyetini anlayarak daha etkili anahtar kelimeler bulmamızı sağlıyor.</p>
        
        <h3>İçerik Optimizasyonu</h3>
        <p>ChatGPT ve benzeri araçlar içerik üretimini hızlandırırken, kaliteyi korumak hala bizim sorumluluğumuzda.</p>
        
        <h3>Teknik SEO Otomasyonu</h3>
        <p>AI, teknik SEO hatalarını otomatik tespit edip düzeltme önerileri sunabiliyor.</p>
        
        <p><strong>Geleceğe Hazır Olun:</strong> AI'ı doğru kullanan işletmeler, rekabette öne geçiyor.</p>
      `,
      author: 'Seokopat Ekibi',
      date: '2025-01-10',
      image: '/blog/ai-seo.jpg',
      tags: ['SEO', 'Yapay Zeka', 'Dijital Pazarlama'],
      readTime: '7 dk okuma'
    },
    {
      id: '3',
      title: 'Shopify Mağazanızı Büyütmenin 5 Adımı',
      slug: 'shopify-buyutme',
      excerpt: 'Shopify mağazanızı bir sonraki seviyeye taşımak için izlemeniz gereken pratik adımlar.',
      content: `
        <h2>Shopify ile Başarı Hikayeleri</h2>
        <p>Shopify, dünya çapında milyonlarca başarılı e-ticaret mağazasına ev sahipliği yapıyor. Peki siz nasıl öne çıkabilirsiniz?</p>
        
        <h3>1. Doğru Tema Seçimi</h3>
        <p>Temanız markanızı yansıtmalı ve kullanıcı dostu olmalı. Hız ve mobil uyumluluk kritik faktörler.</p>
        
        <h3>2. Ürün Sayfası Optimizasyonu</h3>
        <p>Yüksek kaliteli görseller, detaylı açıklamalar ve müşteri yorumları vazgeçilmez.</p>
        
        <h3>3. Ödeme Süreci</h3>
        <p>Basit ve hızlı checkout süreci, sepet terk oranlarını düşürür.</p>
        
        <h3>4. E-posta Pazarlama</h3>
        <p>Shopify Email ile müşterilerinizle düzenli iletişimde kalın.</p>
        
        <h3>5. Analitik ve Optimizasyon</h3>
        <p>Veriye dayalı kararlar alın. Google Analytics entegrasyonu mutlaka yapılmalı.</p>
        
        <p><strong>Bonus İpucu:</strong> Shopify Apps ile mağazanıza süper güçler kazandırın!</p>
      `,
      author: 'Seokopat Ekibi',
      date: '2025-01-05',
      image: '/blog/shopify-growth.jpg',
      tags: ['Shopify', 'E-Ticaret', 'Büyüme'],
      readTime: '6 dk okuma'
    }
  ]
}