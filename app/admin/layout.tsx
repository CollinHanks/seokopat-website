// app/admin/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Panel - Seokopat',
  description: 'Seokopat Blog Yönetim Paneli',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  )
}