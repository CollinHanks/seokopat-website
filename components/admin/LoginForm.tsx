// components/admin/LoginForm.tsx
'use client'

import { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/24/outline'

interface LoginFormProps {
  onLogin: () => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basit şifre kontrolü (production'da daha güvenli bir yöntem kullanın)
    if (password === 'seokopat2024') {
      localStorage.setItem('adminAuth', 'true')
      onLogin()
    } else {
      setError('Yanlış şifre!')
      setTimeout(() => setError(''), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-pink-600 to-blue-600 p-4 rounded-full">
              <LockClosedIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Seokopat Blog Yönetimi
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Admin Şifresi
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifrenizi girin"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-pink-600 focus:border-transparent backdrop-blur-sm"
                autoFocus
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 
                            px-4 py-2 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 to-blue-600 text-white 
                       py-3 px-4 rounded-lg font-medium hover:from-pink-700 hover:to-blue-700 
                       transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              Giriş Yap
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Şifre: seokopat2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}