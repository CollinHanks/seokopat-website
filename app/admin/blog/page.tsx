'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  PhotoIcon,
  XMarkIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

export default function NewBlogPost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Seokopat Ekibi',
    status: 'draft' as 'draft' | 'published',
    category: '',
    tags: [] as string[],
    metaTitle: '',
    metaDescription: '',
    featured: false,
    enableComments: true,
  });

  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      metaTitle: title
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const handleSubmit = (status: 'draft' | 'published') => {
    if (!formData.title || !formData.content) {
      alert('Lütfen başlık ve içerik alanlarını doldurun!');
      return;
    }

    setSaving(true);

    // Get existing posts
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');

    // Create new post
    const newPost = {
      id: generateId(),
      title: formData.title,
      excerpt: formData.excerpt || formData.content.substring(0, 160),
      content: formData.content,
      date: new Date().toISOString(),
      views: 0,
      author: formData.author,
      tags: formData.tags,
      category: formData.category,
      status: status,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      featured: formData.featured,
      enableComments: formData.enableComments,
      image: imagePreview
    };

    // Add to posts
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    setTimeout(() => {
      setSaving(false);
      alert(`✅ Blog yazısı ${status === 'published' ? 'yayınlandı' : 'taslak olarak kaydedildi'}!`);
      router.push('/admin/blog');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-30">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-700">
            <Link href="/" className="block">
              <h1 className="text-2xl font-bold text-white">Seokopat</h1>
            </Link>
            <p className="text-xs text-gray-400 mt-2">Admin Panel</p>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link 
              href="/admin/blog" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Tüm Yazılara Dön</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Yeni Blog Yazısı</h1>
            <p className="text-gray-600">✨ localStorage ile kaydedilecek (backend yok)</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSubmit('draft')}
              disabled={saving}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all disabled:opacity-50"
            >
              Taslak Kaydet
            </button>
            <button
              onClick={() => handleSubmit('published')}
              disabled={saving}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {saving ? '⏳ Kaydediliyor...' : '🚀 Yayınla'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Title */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Başlık *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-lg font-semibold"
                placeholder="Örn: E-Ticaret Sitenizi Optimize Etmenin 10 Yolu"
                required
              />
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Özet (Excerpt)
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                placeholder="Yazınızın kısa özeti (150-160 karakter önerilir)"
              />
              <p className="text-xs text-gray-500 mt-2">
                {formData.excerpt.length}/160 karakter
              </p>
            </div>

            {/* Content Editor */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-bold text-gray-900 mb-4">
                İçerik *
              </label>
              
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={20}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                placeholder="Yazınızın tam içeriğini buraya yazın..."
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                {formData.content.split(' ').filter(w => w).length} kelime
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-bold text-gray-900 mb-4">
                Öne Çıkan Görsel
              </label>
              
              {imagePreview ? (
                <div className="relative">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <button
                    onClick={() => setImagePreview(null)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl hover:border-pink-500 cursor-pointer transition-all bg-gray-50 hover:bg-gray-100">
                  <PhotoIcon className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">Görsel Yükle</p>
                  <p className="text-xs text-gray-500">PNG, JPG, WebP</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                🔍 SEO Ayarları
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    SEO Başlık
                  </label>
                  <input
                    type="text"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Google'da görünecek başlık"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.metaTitle.length}/60 karakter
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Meta Açıklama
                  </label>
                  <textarea
                    value={formData.metaDescription}
                    onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                    placeholder="Google'da görünecek açıklama"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.metaDescription.length}/160 karakter
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Settings */}
          <div className="space-y-6">
            
            {/* Publish Settings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Yayın Ayarları</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Yazar
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                    Öne Çıkarılan Yazı
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="comments"
                    checked={formData.enableComments}
                    onChange={(e) => setFormData({ ...formData, enableComments: e.target.checked })}
                    className="w-5 h-5 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="comments" className="text-sm font-medium text-gray-700">
                    Yorumlara İzin Ver
                  </label>
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Kategori</h3>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              >
                <option value="">Kategori Seçin</option>
                <option value="seo">SEO</option>
                <option value="e-ticaret">E-Ticaret</option>
                <option value="dijital-pazarlama">Dijital Pazarlama</option>
                <option value="web-tasarim">Web Tasarım</option>
                <option value="sosyal-medya">Sosyal Medya</option>
                <option value="yapay-zeka">Yapay Zeka</option>
              </select>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Etiketler</h3>
              
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Etiket ekle..."
                />
                <button
                  onClick={addTag}
                  className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all"
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="hover:text-blue-900"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}