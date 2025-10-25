// components/admin/AdminNavbar.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  HomeIcon, 
  DocumentTextIcon, 
  ArrowLeftOnRectangleIcon,
  PlusIcon 
} from '@heroicons/react/24/outline'

interface AdminNavbarProps {
  onNewPost?: () => void
  showNewButton?: boolean
}

export default function AdminNavbar({ onNewPost, showNewButton = true }: AdminNavbarProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin')
    router.refresh()
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/admin" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-600 to-blue-600 text-white p-2 rounded-lg">
                <DocumentTextIcon className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-gray-900">
                Seokopat Admin
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 
                         transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <HomeIcon className="h-5 w-5" />
                <span>Ana Sayfa</span>
              </Link>
              
              <Link 
                href="/blog"
                className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 
                         transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <DocumentTextIcon className="h-5 w-5" />
                <span>Blog</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {showNewButton && onNewPost && (
              <button
                onClick={onNewPost}
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-blue-600 
                         text-white px-4 py-2 rounded-lg hover:shadow-lg transform 
                         hover:scale-[1.02] transition-all duration-200"
              >
                <PlusIcon className="h-5 w-5" />
                <span className="hidden sm:inline">Yeni Yazı</span>
              </button>
            )}
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 
                       hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
              <span className="hidden sm:inline">Çıkış</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}