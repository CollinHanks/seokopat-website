// lib/blog-server.ts
import fs from 'fs'
import path from 'path'
import { BlogPost } from './types'

const contentDir = path.join(process.cwd(), 'content', 'blog')

// Klasörü oluştur (yoksa)
function ensureContentDir() {
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true })
  }
}

// Tüm blog yazılarını getir (Server-side)
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    ensureContentDir()
    
    const files = fs.readdirSync(contentDir)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    if (jsonFiles.length === 0) {
      // İlk kurulumda varsayılan yazılar
      return getDefaultServerPosts()
    }
    
    const posts = jsonFiles.map(file => {
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      return JSON.parse(fileContent) as BlogPost
    })
    
    // Tarihe göre sırala (yeniden eskiye)
    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Blog yazıları okunamadı:', error)
    return getDefaultServerPosts()
  }
}

// Slug'a göre tekil yazı getir (Server-side)
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getAllPosts()
    return posts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Blog yazısı bulunamadı:', error)
    return null
  }
}

// Varsayılan blog yazıları (Server-side için)
function getDefaultServerPosts(): BlogPost[] {
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