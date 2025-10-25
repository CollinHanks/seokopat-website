// app/api/blog/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPostBySlug } from '@/lib/blog-server'
import fs from 'fs'
import path from 'path'
import { BlogPost } from '@/lib/types'

const contentDir = path.join(process.cwd(), 'content', 'blog')

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPostBySlug(params.id)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog yazısı bulunamadı' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(post)
  } catch (error) {
    console.error('Blog post fetch error:', error)
    return NextResponse.json(
      { error: 'Blog yazısı yüklenemedi' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post: BlogPost = await request.json()
    
    // Klasörü oluştur (yoksa)
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true })
    }
    
    // Dosyaya kaydet
    const filename = `${post.slug}.json`
    const filepath = path.join(contentDir, filename)
    fs.writeFileSync(filepath, JSON.stringify(post, null, 2), 'utf8')
    
    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error('Blog post update error:', error)
    return NextResponse.json(
      { error: 'Blog yazısı güncellenemedi' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const filename = `${params.id}.json`
    const filepath = path.join(contentDir, filename)
    
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath)
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Blog post delete error:', error)
    return NextResponse.json(
      { error: 'Blog yazısı silinemedi' },
      { status: 500 }
    )
  }
}