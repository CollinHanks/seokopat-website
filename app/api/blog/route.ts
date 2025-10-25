// app/api/blog/route.ts
import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog-server'

export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Blog posts fetch error:', error)
    return NextResponse.json(
      { error: 'Blog yazıları yüklenemedi' },
      { status: 500 }
    )
  }
}