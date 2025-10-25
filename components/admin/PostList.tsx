// components/admin/PostList.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  PencilIcon, 
  TrashIcon, 
  EyeIcon,
  MagnifyingGlassIcon,
  TagIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  author: string
  date: string
  slug: string
}

interface PostListProps {
  posts: BlogPost[]
  onEdit: (post: BlogPost) => void
  onDelete: (id: string) => void
}

export default function PostList({ posts, onEdit, onDelete }: PostListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Kategorileri çıkar
  const categories = ['all', ...new Set(posts.map(p => p.category))]

  // Filtreleme
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDelete = (id: string, title: string) => {
    if (confirm(`"${title}" yazısını silmek istediğinize emin misiniz?`)) {
      onDelete(id)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="space-y-6">
      {/* Filtreler */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Yazı ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Tüm Kategoriler' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl p-4 text-white">
          <p className="text-pink-100 text-sm">Toplam Yazı</p>
          <p className="text-2xl font-bold">{posts.length}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <p className="text-blue-100 text-sm">Kategori</p>
          <p className="text-2xl font-bold">{categories.length - 1}</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <p className="text-purple-100 text-sm">Filtrelenen</p>
          <p className="text-2xl font-bold">{filteredPosts.length}</p>
        </div>
      </div>

      {/* Yazı Listesi */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {filteredPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Başlık
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Yazar
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Tarih
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{post.title}</span>
                        <span className="text-sm text-gray-500 mt-1 line-clamp-1">
                          {post.excerpt}
                        </span>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center px-2 py-0.5 rounded-full 
                                         text-xs font-medium bg-gray-100 text-gray-600"
                              >
                                <TagIcon className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full 
                                     text-xs font-medium bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex items-center text-sm text-gray-600">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="flex items-center text-sm text-gray-600">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end space-x-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-blue-600 hover:text-blue-700 p-1.5 hover:bg-blue-50 
                                   rounded-lg transition-all"
                          title="Görüntüle"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </Link>
                        <button
                          onClick={() => onEdit(post)}
                          className="text-yellow-600 hover:text-yellow-700 p-1.5 hover:bg-yellow-50 
                                   rounded-lg transition-all"
                          title="Düzenle"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="text-red-600 hover:text-red-700 p-1.5 hover:bg-red-50 
                                   rounded-lg transition-all"
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
        ) : (
          <div className="text-center py-12">
            <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-gray-500">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Filtrelere uygun yazı bulunamadı' 
                : 'Henüz blog yazısı eklenmemiş'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}