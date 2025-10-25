'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, EyeIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

// Mock blog data (gerçek uygulamada API'den gelecek)
const blogPosts: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'E-Ticaret Sitenizi Optimize Etmenin 10 Yolu',
    excerpt: 'E-ticaret sitenizin performansını artırmak ve satışlarınızı yükseltmek için kanıtlanmış stratejiler.',
    content: `
      <h2>E-Ticaret Optimizasyonu Neden Önemli?</h2>
      <p>E-ticaret sitenizin performansı, satışlarınızı doğrudan etkiler. Yavaş yüklenen sayfalar, karmaşık navigasyon ve kötü kullanıcı deneyimi müşterilerinizi kaçırmanıza neden olur.</p>
      
      <h3>1. Sayfa Hızını Optimize Edin</h3>
      <p>Sayfa yükleme süresinin 1 saniye artması, dönüşüm oranlarını %7 düşürebilir. Görsellerinizi sıkıştırın, CDN kullanın ve gereksiz kodları temizleyin.</p>
      
      <h3>2. Mobil Uyumluluğu Önceliklendirin</h3>
      <p>E-ticaret trafiğinin %60'dan fazlası mobil cihazlardan gelir. Responsive tasarım artık bir lüks değil, zorunluluk.</p>
      
      <h3>3. Ürün Görsellerini İyileştirin</h3>
      <p>Yüksek kaliteli, çoklu açılardan çekilmiş ürün görselleri kullanın. Zoom özelliği ekleyin ve 360 derece görüntüleme sağlayın.</p>
      
      <h3>4. Ödeme Sürecini Basitleştirin</h3>
      <p>Tek sayfalık checkout, misafir ödeme seçeneği ve otomatik form doldurma ile alışveriş sepeti terk oranını düşürün.</p>
      
      <h3>5. Güvenlik Sertifikalarını Gösterin</h3>
      <p>SSL sertifikası, güvenlik rozetleri ve güvenli ödeme logoları müşteri güvenini artırır.</p>
    `,
    date: '15.01.2025',
    views: '5.6k',
    author: 'Seokopat Ekibi',
    tags: ['E-Ticaret', 'SEO', 'Optimizasyon'],
    readTime: '8 dk okuma'
  },
  '2': {
    id: 2,
    title: 'Yapay Zeka ile SEO: Geleceğin Stratejileri',
    excerpt: 'AI ve makine öğrenimi SEO stratejilerinizi nasıl dönüştürüyor? İşte bilmeniz gerekenler.',
    content: `
      <h2>AI Destekli SEO: Yeni Çağ</h2>
      <p>Yapay zeka, SEO dünyasını kökten değiştiriyor. Google'ın algoritmaları her geçen gün daha akıllı hale gelirken, SEO uzmanlarının da AI teknolojilerini kullanması kaçınılmaz hale geldi.</p>
      
      <h3>1. İçerik Üretiminde AI</h3>
      <p>ChatGPT, Claude ve Gemini gibi araçlar içerik üretimini hızlandırıyor. Ancak Google, AI içeriğini tespit edebiliyor ve kalitesiz içeriği cezalandırıyor.</p>
      
      <h3>2. Anahtar Kelime Araştırması</h3>
      <p>AI araçları, anahtar kelime fırsatlarını, rekabet seviyesini ve arama niyetini analiz ederek daha iyi stratejiler geliştirmenize yardımcı olur.</p>
      
      <h3>3. Teknik SEO Otomasyonu</h3>
      <p>Crawling, indexing ve site sağlığı kontrollerini AI ile otomatikleştirerek zamandan tasarruf edin.</p>
    `,
    date: '10.01.2025',
    views: '7.0k',
    author: 'Seokopat Ekibi',
    tags: ['SEO', 'Yapay Zeka', 'Dijital Pazarlama'],
    readTime: '6 dk okuma'
  },
  '3': {
    id: 3,
    title: 'Shopify Mağazanızı Büyütmenin 5 Adımı',
    excerpt: 'Shopify mağazanızı bir sonraki seviyeye taşımak için izlemeniz gereken pratik adımlar.',
    content: `
      <h2>Shopify ile E-Ticaret Başarısı</h2>
      <p>Shopify, dünya çapında 2 milyondan fazla işletme tarafından kullanılan bir e-ticaret platformu. Ancak başarılı olmak için sadece mağaza açmak yetmiyor.</p>
      
      <h3>1. Doğru Temayı Seçin</h3>
      <p>Markanıza uygun, hızlı ve mobil uyumlu bir tema seçin. Ücretsiz temalar da başarılı olabilir, ama premium temalar daha fazla özellik sunar.</p>
      
      <h3>2. Ürün Açıklamalarını Optimize Edin</h3>
      <p>SEO dostu, ikna edici ve detaylı ürün açıklamaları yazın. Anahtar kelimeleri doğal şekilde kullanın.</p>
      
      <h3>3. E-posta Pazarlamaya Yatırım Yapın</h3>
      <p>Shopify Email veya Klaviyo gibi araçlarla terk edilen sepet e-postaları, hoş geldin serileri ve kampanyalar oluşturun.</p>
    `,
    date: '05.01.2025',
    views: '6.0k',
    author: 'Seokopat Ekibi',
    tags: ['Shopify', 'E-Ticaret', 'Büyüme'],
    readTime: '7 dk okuma'
  }
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts[params.id];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Blog'a Dön
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string, index: number) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            <span className="text-sm">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            <span className="text-sm">{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <EyeIcon className="h-5 w-5" />
            <span className="text-sm">{post.views} görüntülenme</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5" />
            <span className="text-sm">{post.readTime}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-xl text-gray-700 mb-12 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-6 prose-li:my-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share & Back */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-xl hover:bg-gray-200 transition-all"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Tüm Yazılar
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}