'use client'

import Link from 'next/link'
import { ArrowRightOnRectangleIcon, HomeIcon } from '@heroicons/react/24/outline'

interface AdminNavbarProps {
  onLogout: () => void
}

export default function AdminNavbar({ onLogout }: AdminNavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="flex items-center gap-2 text-seokopat-navy hover:text-seokopat-primary transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              <span className="font-medium">Ana Sayfa</span>
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-bold text-seokopat-navy">
              Admin Panel
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              target="_blank"
              className="px-4 py-2 text-gray-700 hover:text-seokopat-primary transition-colors"
            >
              Blog'u Görüntüle
            </Link>
            
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}