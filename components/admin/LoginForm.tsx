'use client'

import { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/24/outline'

interface LoginFormProps {
  onLogin: (password: string) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(password)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-seokopat-primary rounded-full mb-4">
            <LockClosedIcon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-seokopat-navy mb-2">
            Admin Girişi
          </h2>
          <p className="text-gray-600">
            Blog yönetim paneline erişim için şifrenizi girin
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-primary focus:border-transparent transition-all"
              placeholder="Şifrenizi girin..."
              required
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-seokopat-primary text-white font-medium rounded-lg hover:bg-seokopat-secondary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Giriş Yap
          </button>
        </form>

        {/* Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            🔒 Güvenli bağlantı üzerinden giriş yapıyorsunuz
          </p>
        </div>
      </div>
    </div>
  )
}