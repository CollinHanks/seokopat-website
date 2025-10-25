// app/api/blog/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getAllPosts, savePost, generateSlug } from '@/lib/blog-client'

// Tüm blog yazılarını getir
export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazıları getirilemedi' },
      { status: 500 }
    )
  }
}

// Yeni blog yazısı oluştur
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Otomatik değerler ata
    const post = {
      ...data,
      id: data.id || `post-${Date.now()}`,
      slug: data.slug || generateSlug(data.title),
      date: data.date || new Date().toISOString(),
      author: data.author || 'Seokopat Team',
      readTime: data.readTime || '5 dk'
    }
    
    await savePost(post)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Blog yazısı kaydedildi',
      post 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazısı kaydedilemedi' },
      { status: 500 }
    )
  }
}