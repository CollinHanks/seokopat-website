'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  TagIcon, 
  ClockIcon, 
  EyeIcon,
  CalendarIcon,
  ArrowRightIcon,
  SparklesIcon,
  FireIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  views: number;
  author: string;
  tags: string[];
  category: string;
  status: string;
  image?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    // Load from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      const allPosts = JSON.parse(savedPosts);
      // Only show published posts
      setPosts(allPosts.filter((p: BlogPost) => p.status === 'published'));
    }
  }, []);

  const categories = [
    { id: 'all', name: 'Tümü', icon: '📚', count: posts.length },
    { id: 'seo', name: 'SEO', icon: '🔍', count: posts.filter(p => p.category === 'seo').length },
    { id: 'e-ticaret', name: 'E-Ticaret', icon: '🛒', count: posts.filter(p => p.category === 'e-ticaret').length },
    { id: 'dijital-pazarlama', name: 'Dijital Pazarlama', icon: '📱', count: posts.filter(p => p.category === 'dijital-pazarlama').length },
    { id: 'yapay-zeka', name: 'Yapay Zeka', icon: '🤖', count: posts.filter(p => p.category === 'yapay-zeka').length },
    { id: 'web-tasarim', name: 'Web Tasarım', icon: '🎨', count: posts.filter(p => p.category === 'web-tasarim').length },
  ];

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesCategory && matchesTag;
  });

  const featuredPosts = filteredPosts.slice(0, 3);
  const recentPosts = filteredPosts.slice(3);

  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section - EPİK */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-24">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <SparklesIcon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-semibold">SEO & Dijital Pazarlama İçgörüleri</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Blog & <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">İçgörüler</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              SEO, e-ticaret ve dijital pazarlama dünyasından en güncel haberler ve stratejiler
            </p>

            {/* Search Bar - Modern */}
            <div className="max-w-2xl mx-auto relative">
              <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 rounded-2xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-pink-500/50 transition-all text-lg shadow-2xl"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-4xl font-black mb-2">{posts.length}</p>
                <p className="text-sm text-gray-300">Blog Yazısı</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-4xl font-black mb-2">{totalViews.toLocaleString()}</p>
                <p className="text-sm text-gray-300">Toplam Okunma</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-4xl font-black mb-2">{categories.length - 1}</p>
                <p className="text-sm text-gray-300">Kategori</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Categories - Modern Pills */}
      <section className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <TagIcon className="h-6 w-6 text-pink-600" />
            <h2 className="text-xl font-bold text-gray-900">Kategoriler</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts - 3 Büyük Kart */}
      {featuredPosts.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-16">
          <div className="flex items-center gap-3 mb-8">
            <FireIcon className="h-8 w-8 text-orange-500" />
            <h2 className="text-3xl font-black text-gray-900">Öne Çıkan Yazılar</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  
                  {/* Image or Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 overflow-hidden">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-6xl font-black opacity-20">
                        📝
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-pink-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <EyeIcon className="h-4 w-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-pink-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Posts - Liste Format */}
      {recentPosts.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-16 bg-gray-50">
          <div className="flex items-center gap-3 mb-8">
            <ChartBarIcon className="h-8 w-8 text-purple-600" />
            <h2 className="text-3xl font-black text-gray-900">Son Yazılar</h2>
          </div>

          <div className="space-y-6">
            {recentPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group"
              >
                <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    
                    {/* Thumbnail */}
                    <div className="md:w-64 h-48 rounded-xl bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex-shrink-0 overflow-hidden">
                      {post.image ? (
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-5xl opacity-30">
                          📄
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('tr-TR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <EyeIcon className="h-4 w-4" />
                            {post.views.toLocaleString()} okunma
                          </span>
                          <span className="font-semibold text-gray-700">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-pink-600 font-bold">
                          Oku
                          <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tags Cloud */}
      {allTags.length > 0 && (
        <section className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-black mb-8 text-center">Popüler Etiketler</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {allTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-110'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            {selectedTag !== 'all' && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedTag('all')}
                  className="text-pink-400 hover:text-pink-300 font-semibold"
                >
                  Filtreyi Temizle ✕
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-16">
        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              İşinizi Büyütmeye Hazır mısınız?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              SEO ve dijital pazarlama stratejilerinizi bir üst seviyeye taşıyalım
            </p>
            <Link 
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
            >
              Ücretsiz Danışmanlık
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 lg:px-16 py-32 text-center">
          <div className="text-8xl mb-6">🔍</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h3>
          <p className="text-xl text-gray-600 mb-8">
            Aradığınız kriterlere uygun blog yazısı yok. Filtreleri temizleyin veya farklı bir arama yapın.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedTag('all');
            }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  );
}