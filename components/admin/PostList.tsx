// components/admin/PostList.tsx
'use client'

import { BlogPost } from '@/lib/types'
import { PencilIcon, TrashIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

interface PostListProps {
  posts: BlogPost[]
  onEdit: (post: BlogPost) => void
  onDelete: (id: string) => void
}

export default function PostList({ posts, onEdit, onDelete }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <DocumentTextIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">Henüz blog yazısı yok</p>
        <p className="text-gray-400 text-sm mt-2">
          Yeni yazı eklemek için yukarıdaki butonu kullanın
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Title */}
              <h3 className="text-xl font-bold text-seokopat-navy mb-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  📅 {new Date(post.date).toLocaleDateString('tr-TR')}
                </span>
                <span className="flex items-center gap-1">
                  ⏱️ {post.readTime}
                </span>
                <span className="flex items-center gap-1">
                  ✍️ {post.author}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-seokopat-primary/10 text-seokopat-primary text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-start gap-2 ml-4">
              <button
                onClick={() => onEdit(post)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title="Düzenle"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  if (confirm(`"${post.title}" yazısını silmek istediğinize emin misiniz?`)) {
                    onDelete(post.id)
                  }
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Sil"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}