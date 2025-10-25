'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeftIcon,
  PhotoIcon,
  TagIcon,
  CalendarIcon,
  EyeIcon,
  CloudArrowUpIcon,
  XMarkIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

export default function NewBlogPost() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featuredImage: null as File | null,
    gallery: [] as File[],
    author: 'Seokopat Ekibi',
    publishDate: new Date().toISOString().split('T')[0],
    status: 'draft',
    category: '',
    tags: [] as string[],
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    seoSlug: '',
    enableComments: true,
    featured: false,
    relatedPosts: [] as string[]
  });

  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'featured' | 'gallery') => {
    const files = e.target.files;
    if (!files) return;

    if (type === 'featured') {
      const file = files[0];
      setFormData({ ...formData, featuredImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      const newGallery = [...formData.gallery, ...Array.from(files)];
      setFormData({ ...formData, gallery: newGallery });
    }
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

  const handleSubmit = (e: React.FormEvent, status: 'draft' | 'published') => {
    e.preventDefault();
    console.log('Saving post...', { ...formData, status });
    // API call would go here
  };

  const generateSlug = (title: string) => {
    const turkishChars: { [key: string]: string } = {
      'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
      'Ç': 'c', 'Ğ': 'g', 'İ': 'i', 'Ö': 'o', 'Ş': 's', 'Ü': 'u'
    };
    
    return title
      .split('')
      .map(char => turkishChars[char] || char)
      .join('')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
      seoSlug: generateSlug(title),
      metaTitle: title
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar (same as dashboard) */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-30">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-700">
            <Link href="/" className="block">
              <Image 
                src="/logo-white.png" 
                alt="Seokopat" 
                width={150} 
                height={38}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <p className="text-xs text-gray-400 mt-2">Admin Panel</p>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link 
              href="/admin/dashboard" 
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-white/10 transition-all"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Dashboard'a Dön</span>
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
            <p className="text-gray-600">Shopify tarzı kapsamlı blog editörü</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => handleSubmit(e, 'draft')}
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
            >
              Taslak Olarak Kaydet
            </button>
            <button
              onClick={(e) => handleSubmit(e, 'published')}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Yayınla
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
              <p className="text-xs text-gray-500 mt-2">
                URL: /blog/{formData.slug || 'baslik-buraya-gelecek'}
              </p>
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
              
              {/* Toolbar */}
              <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl mb-4 border border-gray-200">
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all" title="Bold">
                  <strong className="font-bold">B</strong>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all" title="Italic">
                  <em className="italic">I</em>
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all" title="Underline">
                  <u>U</u>
                </button>
                <div className="w-px bg-gray-300 mx-2"></div>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all text-sm" title="Heading 1">
                  H1
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all text-sm" title="Heading 2">
                  H2
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all text-sm" title="Heading 3">
                  H3
                </button>
                <div className="w-px bg-gray-300 mx-2"></div>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all" title="Link">
                  🔗
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all" title="Image">
                  🖼️
                </button>
                <button className="p-2 hover:bg-gray-200 rounded-lg transition-all" title="Code">
                  {'</>'}
                </button>
              </div>

              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={20}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none font-mono text-sm"
                placeholder="Yazınızın tam içeriğini buraya yazın... Markdown veya HTML kullanabilirsiniz."
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
                    onClick={() => {
                      setImagePreview(null);
                      setFormData({ ...formData, featuredImage: null });
                    }}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl hover:border-pink-500 cursor-pointer transition-all bg-gray-50 hover:bg-gray-100">
                  <PhotoIcon className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 font-medium">Görsel Yükle</p>
                  <p className="text-xs text-gray-500">PNG, JPG, WebP (Max 2MB)</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'featured')}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Gallery Images */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <label className="block text-sm font-bold text-gray-900 mb-4">
                Galeri Görselleri (Opsiyonel)
              </label>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {formData.gallery.map((file, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={`Gallery ${index}`} 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => {
                        const newGallery = formData.gallery.filter((_, i) => i !== index);
                        setFormData({ ...formData, gallery: newGallery });
                      }}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg hover:border-pink-500 cursor-pointer transition-all">
                  <PlusIcon className="h-8 w-8 text-gray-400" />
                  <p className="text-xs text-gray-500 mt-1">Ekle</p>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleImageUpload(e, 'gallery')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                SEO Ayarları
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
                    {formData.metaTitle.length}/60 karakter (Önerilen: 50-60)
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
                    {formData.metaDescription.length}/160 karakter (Önerilen: 150-160)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Anahtar Kelimeler
                  </label>
                  <input
                    type="text"
                    value={formData.metaKeywords}
                    onChange={(e) => setFormData({ ...formData, metaKeywords: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="SEO, e-ticaret, dijital pazarlama"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={formData.seoSlug}
                    onChange={(e) => setFormData({ ...formData, seoSlug: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all font-mono text-sm"
                    placeholder="e-ticaret-sitesi-optimize"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    https://seokopat.com/blog/{formData.seoSlug}
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
                    Durum
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  >
                    <option value="draft">Taslak</option>
                    <option value="published">Yayında</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Yayın Tarihi
                  </label>
                  <input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>

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

            {/* Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <EyeIcon className="h-5 w-5" />
                Önizleme
              </h3>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200"
              >
                <EyeIcon className="h-5 w-5" />
                Önizlemeyi Görüntüle
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}