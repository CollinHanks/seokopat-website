// components/admin/PostEditor.tsx
'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { 
  XMarkIcon, 
  PhotoIcon,
  TagIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

// Rich text editor - SSR'ı devre dışı bırak
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css'

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  image?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

interface PostEditorProps {
  post?: BlogPost | null
  onSave: (post: BlogPost) => void
  onCancel: () => void
}

export default function PostEditor({ post, onSave, onCancel }: PostEditorProps) {
  const [formData, setFormData] = useState<BlogPost>({
    id: '',
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'SEO',
    tags: [],
    author: 'Seokopat Team',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 dk',
    image: '',
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: []
    }
  })

  const [tagInput, setTagInput] = useState('')
  const [keywordInput, setKeywordInput] = useState('')

  useEffect(() => {
    if (post) {
      setFormData(post)
    }
  }, [post])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Slug oluştur (eğer yoksa)
    const slug = formData.slug || formData.title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')

    // ID oluştur (eğer yoksa)
    const id = formData.id || `post-${Date.now()}`

    onSave({
      ...formData,
      id,
      slug
    })
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()]
      })
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const addKeyword = () => {
    if (keywordInput.trim() && formData.seo?.keywords && !formData.seo.keywords.includes(keywordInput.trim())) {
      setFormData({
        ...formData,
        seo: {
          ...formData.seo,
          keywords: [...(formData.seo.keywords || []), keywordInput.trim()]
        }
      })
      setKeywordInput('')
    }
  }

  const removeKeyword = (keywordToRemove: string) => {
    setFormData({
      ...formData,
      seo: {
        ...formData.seo,
        keywords: formData.seo?.keywords?.filter(kw => kw !== keywordToRemove) || []
      }
    })
  }

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }

  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="border-b border-gray-200 px-8 py-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {post ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı'}
              </h2>
              <button
                onClick={onCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Temel Bilgiler */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Başlık *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug (URL)
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                    placeholder="Otomatik oluşturulur"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Özet */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Özet *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  placeholder="Blog yazısının kısa açıklaması..."
                />
              </div>

              {/* Meta Bilgiler */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  >
                    <option value="SEO">SEO</option>
                    <option value="E-Ticaret">E-Ticaret</option>
                    <option value="Lojistik">Lojistik</option>
                    <option value="Yazılım">Yazılım</option>
                    <option value="Tasarım">Tasarım</option>
                    <option value="Dijital Pazarlama">Dijital Pazarlama</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yazar
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Okuma Süresi
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Görsel ve Tarih */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <PhotoIcon className="h-4 w-4 inline mr-1" />
                    Kapak Görseli URL
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tarih
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Etiketler */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <TagIcon className="h-4 w-4 inline mr-1" />
                  Etiketler
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Etiket ekle..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                             focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg 
                             hover:bg-gray-200 transition-colors"
                  >
                    Ekle
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                               bg-pink-100 text-pink-800"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-pink-600 hover:text-pink-800"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* İçerik Editörü */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  İçerik *
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <ReactQuill
                    theme="snow"
                    value={formData.content}
                    onChange={(content) => setFormData({...formData, content})}
                    modules={quillModules}
                    className="bg-white"
                    style={{ minHeight: '400px' }}
                  />
                </div>
              </div>

              {/* SEO Ayarları */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                  SEO Ayarları
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Başlık
                    </label>
                    <input
                      type="text"
                      value={formData.seo?.metaTitle || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        seo: { ...formData.seo, metaTitle: e.target.value }
                      })}
                      placeholder="Arama sonuçlarında görünecek başlık"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Meta Açıklama
                    </label>
                    <textarea
                      rows={2}
                      value={formData.seo?.metaDescription || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        seo: { ...formData.seo, metaDescription: e.target.value }
                      })}
                      placeholder="Arama sonuçlarında görünecek açıklama"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anahtar Kelimeler
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={keywordInput}
                        onChange={(e) => setKeywordInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                        placeholder="Anahtar kelime ekle..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                                 focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={addKeyword}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg 
                                 hover:bg-gray-200 transition-colors"
                      >
                        Ekle
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.seo?.keywords?.map((keyword) => (
                        <span
                          key={keyword}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                   bg-blue-100 text-blue-800"
                        >
                          {keyword}
                          <button
                            type="button"
                            onClick={() => removeKeyword(keyword)}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={onCancel}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg 
                           hover:bg-gray-300 transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-pink-600 to-blue-600 
                           text-white rounded-lg hover:shadow-lg transform 
                           hover:scale-[1.02] transition-all duration-200"
                >
                  {post ? 'Güncelle' : 'Yayınla'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}