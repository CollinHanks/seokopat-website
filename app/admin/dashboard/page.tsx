'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  HomeIcon, 
  DocumentTextIcon, 
  PlusIcon, 
  PencilIcon, 
  TrashIcon,
  EyeIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon
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
  status: 'published' | 'draft';
}

export default function AllBlogsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Load posts from localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Mock initial data
      const initialPosts: BlogPost[] = [
        {
          id: '1',
          title: 'E-Ticaret Sitenizi Optimize Etmenin 10 Yolu',
          excerpt: 'E-ticaret sitenizin performansını artırmak ve satışlarınızı yükseltmek için kanıtlanmış stratejiler.',
          content: 'Full content here...',
          date: new Date().toISOString(),
          views: 5600,
          author: 'Seokopat Ekibi',
          tags: ['E-Ticaret', 'SEO', 'Optimizasyon'],
          category: 'e-ticaret',
          status: 'published'
        },
        {
          id: '2',
          title: 'Yapay Zeka ile SEO: Geleceğin Stratejileri',
          excerpt: 'AI ve makine öğrenimi SEO stratejilerinizi nasıl dönüştürüyor?',
          content: 'Full content here...',
          date: new Date().toISOString(),
          views: 7000,
          author: 'Seokopat Ekibi',
          tags: ['SEO', 'Yapay Zeka', 'Dijital Pazarlama'],
          category: 'seo',
          status: 'published'
        },
        {
          id: '3',
          title: 'Shopify Mağazanızı Büyütmenin 5 Adımı',
          excerpt: 'Shopify mağazanızı bir sonraki seviyeye taşımak için pratik adımlar.',
          content: 'Full content here...',
          date: new Date().toISOString(),
          views: 6000,
          author: 'Seokopat Ekibi',
          tags: ['Shopify', 'E-Ticaret', 'Büyüme'],
          category: 'e-ticaret',
          status: 'draft'
        }
      ];
      localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
      setPosts(initialPosts);
    }
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Bu yazıyı silmek istediğinize emin misiniz?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    }
  };

  const handleLogout = () => {
    if (confirm('Çıkış yapmak istediğinize emin misiniz?')) {
      router.push('/admin');
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const stats = {
    total: posts.length,
    views: posts.reduce((sum, post) => sum + post.views, 0),
    published: posts.filter(p => p.status === 'published').length,
    draft: posts.filter(p => p.status === 'draft').length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-30">
        <div className="flex flex-col h-full">
          
          {/* Logo */}
          <div className="p-6 border-b border-gray-700">
            <Link href="/" className="block">
              <h1 className="text-2xl font-bold text-white">Seokopat</h1>
            </Link>
            <p className="text-xs text-gray-400 mt-2">Admin Panel</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link 
              href="/admin/dashboard" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Ana Sayfa</span>
            </Link>
            
            <Link 
              href="/admin/blog/new" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Yeni Yazı</span>
            </Link>
            
            <Link 
              href="/admin/blog" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
            >
              <DocumentTextIcon className="h-5 w-5" />
              <span className="font-semibold">Tüm Yazılar</span>
            </Link>
            
            <Link 
              href="/admin/settings" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              <Cog6ToothIcon className="h-5 w-5" />
              <span>Ayarlar</span>
            </Link>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Admin</p>
                <p className="text-xs text-gray-400">admin@seokopat.com</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-all"
            >
              <ArrowRightOnRectangleIcon className="h-4 w-4" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Tüm Yazılar</h1>
              <p className="text-gray-600">Toplam {stats.total} yazı</p>
            </div>
            <Link 
              href="/admin/blog/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <PlusIcon className="h-5 w-5" />
              Yeni Yazı Ekle
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</p>
              <p className="text-sm text-gray-600">Toplam Yazı</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <EyeIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stats.views.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Toplam Görüntülenme</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500">
                  <DocumentTextIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stats.published}</p>
              <p className="text-sm text-gray-600">Yayında</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500">
                  <PencilIcon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stats.draft}</p>
              <p className="text-sm text-gray-600">Taslak</p>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Yazı ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                />
              </div>
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              >
                <option value="all">Tüm Durumlar</option>
                <option value="published">Yayında</option>
                <option value="draft">Taslak</option>
              </select>
              <select 
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              >
                <option value="all">Tüm Kategoriler</option>
                <option value="seo">SEO</option>
                <option value="e-ticaret">E-Ticaret</option>
                <option value="dijital-pazarlama">Dijital Pazarlama</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Yazı
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Etiketler
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Tarih
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Görüntülenme
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {post.excerpt}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Yazar: {post.author}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <p className="text-sm text-gray-600">
                        {new Date(post.date).toLocaleDateString('tr-TR')}
                      </p>
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <EyeIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-900">
                          {post.views.toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      {post.status === 'published' ? (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                          Yayında
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                          Taslak
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.id}`}
                          target="_blank"
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="Görüntüle"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </Link>
                        <Link
                          href={`/admin/blog/${post.id}/edit`}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                          title="Düzenle"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Sil"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Blog'u Görüntüle Link */}
        <div className="mt-6 text-center">
          <Link 
            href="/blog" 
            target="_blank"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
          >
            <EyeIcon className="h-5 w-5" />
            Blog'u Görüntüle
          </Link>
        </div>
      </main>
    </div>
  );
}