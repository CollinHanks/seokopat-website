// app/api/blog/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPost, savePost, deletePost, generateSlug } from '@/lib/blog-client'

// Blog yazısı getir
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPost(params.id)
    
    if (!post) {
      return NextResponse.json(
        { error: 'Blog yazısı bulunamadı' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ post })
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazısı getirilemedi' },
      { status: 500 }
    )
  }
}

// Blog yazısı güncelle
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    
    const post = {
      ...data,
      id: params.id,
      slug: data.slug || generateSlug(data.title)
    }
    
    await savePost(post)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Blog yazısı güncellendi',
      post 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazısı güncellenemedi' },
      { status: 500 }
    )
  }
}

// Blog yazısı sil
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deletePost(params.id)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Blog yazısı silindi' 
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Blog yazısı silinemedi' },
      { status: 500 }
    )
  }
}