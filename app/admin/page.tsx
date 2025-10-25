// app/admin/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/admin/LoginForm'
import AdminNavbar from '@/components/admin/AdminNavbar'
import PostList from '@/components/admin/PostList'
import PostEditor from '@/components/admin/PostEditor'

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

export default function AdminPage() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [notification, setNotification] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  // Auth kontrolü
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuth')
    if (adminAuth === 'true') {
      setIsLoggedIn(true)
      loadPosts()
    } else {
      setLoading(false)
    }
  }, [])

  // Blog yazılarını yükle
  const loadPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      
      if (data.posts) {
        setPosts(data.posts)
      }
    } catch (error) {
      showNotification('error', 'Blog yazıları yüklenemedi')
    } finally {
      setLoading(false)
    }
  }

  // Bildirim göster
  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 3000)
  }

  // Blog yazısı kaydet
  const handleSave = async (postData: BlogPost) => {
    try {
      const url = editingPost 
        ? `/api/blog/${editingPost.id}`
        : '/api/blog'
      
      const method = editingPost ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      })

      const data = await response.json()

      if (response.ok) {
        showNotification('success', data.message)
        await loadPosts()
        setShowEditor(false)
        setEditingPost(null)
      } else {
        showNotification('error', data.error || 'Bir hata oluştu')
      }
    } catch (error) {
      showNotification('error', 'Blog yazısı kaydedilemedi')
    }
  }

  // Blog yazısı sil
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (response.ok) {
        showNotification('success', data.message)
        await loadPosts()
      } else {
        showNotification('error', data.error || 'Bir hata oluştu')
      }
    } catch (error) {
      showNotification('error', 'Blog yazısı silinemedi')
    }
  }

  // Düzenleme başlat
  const handleEdit = (post: BlogPost) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  // Yeni yazı
  const handleNewPost = () => {
    setEditingPost(null)
    setShowEditor(true)
  }

  // Login başarılı
  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
    loadPosts()
  }

  // Loading durumu
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  // Giriş sayfası
  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLoginSuccess} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar 
        onNewPost={handleNewPost} 
        showNewButton={!showEditor}
      />
      
      {/* Bildirimler */}
      {notification && (
        <div className="fixed top-20 right-4 z-50">
          <div className={`px-6 py-3 rounded-lg shadow-lg ${
            notification.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {notification.message}
          </div>
        </div>
      )}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Yönetimi</h1>
          <p className="text-gray-600 mt-2">
            Blog yazılarınızı buradan yönetebilirsiniz
          </p>
        </div>
        
        <PostList 
          posts={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
      
      {/* Editor Modal */}
      {showEditor && (
        <PostEditor
          post={editingPost}
          onSave={handleSave}
          onCancel={() => {
            setShowEditor(false)
            setEditingPost(null)
          }}
        />
      )}
    </div>
  )
}