'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import AdminNavbar from '@/components/admin/AdminNavbar'
import LoginForm from '@/components/admin/LoginForm'
import PostList from '@/components/admin/PostList'
import { BlogPost } from '@/lib/types'
import { getBlogPosts, saveBlogPost, deleteBlogPost } from '@/lib/blog-client'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

// React Quill - SSR safe
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[400px] flex items-center justify-center bg-gray-50">
      <p className="text-gray-500">Editor yükleniyor...</p>
    </div>
  ),
})

const ADMIN_PASSWORD = 'seokopat2024'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [view, setView] = useState<'list' | 'create' | 'edit'>('list')
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  // Form states
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [author, setAuthor] = useState('Seokopat Ekibi')
  const [image, setImage] = useState('')
  const [tags, setTags] = useState('')

  // Load posts on mount
  useEffect(() => {
    if (isAuthenticated) {
      loadPosts()
    }
  }, [isAuthenticated])

  const loadPosts = () => {
    const loadedPosts = getBlogPosts()
    setPosts(loadedPosts)
  }

  const handleLogin = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Yanlış şifre!')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setView('list')
    resetForm()
  }

  const resetForm = () => {
    setTitle('')
    setContent('')
    setExcerpt('')
    setAuthor('Seokopat Ekibi')
    setImage('')
    setTags('')
    setEditingPost(null)
  }

  const generateSlug = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const calculateReadTime = (text: string): string => {
    const wordsPerMinute = 200
    const words = text.replace(/<[^>]*>/g, '').split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} dk okuma`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !content || !excerpt) {
      alert('Lütfen tüm zorunlu alanları doldurun!')
      return
    }

    const slug = generateSlug(title)
    const readTime = calculateReadTime(content)

    const newPost: BlogPost = {
      id: editingPost?.id || Date.now().toString(),
      title,
      slug,
      excerpt,
      content,
      author,
      date: editingPost?.date || new Date().toISOString(),
      image: image || '/blog/default.jpg', // ← Varsayılan değer
      tags: tags.split(',').map((tag) => tag.trim()).filter((tag) => tag),
      readTime,
    }

    saveBlogPost(newPost)
    loadPosts()
    setView('list')
    resetForm()
    alert(editingPost ? 'Yazı güncellendi!' : 'Yeni yazı eklendi!')
  }

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setTitle(post.title)
    setContent(post.content)
    setExcerpt(post.excerpt)
    setAuthor(post.author)
    setImage(post.image)
    setTags(post.tags.join(', '))
    setView('edit')
  }

  const handleDelete = (id: string) => {
    deleteBlogPost(id)
    loadPosts()
    alert('Yazı silindi!')
  }

  const handleCancel = () => {
    setView('list')
    resetForm()
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-seokopat-navy to-seokopat-primary flex items-center justify-center p-6">
        <LoginForm onLogin={handleLogin} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar onLogout={handleLogout} />

      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-seokopat-navy">
              {view === 'list' && 'Blog Yönetimi'}
              {view === 'create' && 'Yeni Blog Yazısı'}
              {view === 'edit' && 'Blog Yazısını Düzenle'}
            </h1>
            <p className="text-gray-600 mt-2">
              {view === 'list' && `Toplam ${posts.length} yazı`}
              {view === 'create' && 'Yeni bir blog yazısı oluşturun'}
              {view === 'edit' && 'Mevcut yazıyı düzenleyin'}
            </p>
          </div>

          {view === 'list' && (
            <button
              onClick={() => setView('create')}
              className="px-6 py-3 bg-seokopat-primary text-white font-medium rounded-lg hover:bg-seokopat-secondary transition-colors"
            >
              + Yeni Yazı Ekle
            </button>
          )}
        </div>

        {/* List View */}
        {view === 'list' && (
          <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
        )}

        {/* Create/Edit Form */}
        {(view === 'create' || view === 'edit') && (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Başlık *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-primary focus:border-transparent"
                placeholder="Blog yazısının başlığı..."
                required
              />
            </div>

            {/* Excerpt */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Özet *
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-primary focus:border-transparent"
                placeholder="Kısa açıklama (1-2 cümle)..."
                required
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                İçerik *
              </label>
              <ReactQuill
                value={content}
                onChange={setContent}
                className="bg-white"
                theme="snow"
                modules={{
                  toolbar: [
                    [{ header: [2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link'],
                    ['clean'],
                  ],
                }}
              />
            </div>

            {/* Author */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yazar
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-primary focus:border-transparent"
                placeholder="Yazar adı..."
              />
            </div>

            {/* Image URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Görsel URL (Opsiyonel)
              </label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-primary focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Etiketler
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-primary focus:border-transparent"
                placeholder="SEO, E-ticaret, Shopify (virgülle ayırın)"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-seokopat-primary text-white font-medium rounded-lg hover:bg-seokopat-secondary transition-colors"
              >
                {editingPost ? 'Güncelle' : 'Yayınla'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  )
}