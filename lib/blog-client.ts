// lib/blog.ts
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
  image?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

// Klasör yoksa oluştur
async function ensurePostsDirectory() {
  try {
    await fs.access(postsDirectory)
  } catch {
    await fs.mkdir(postsDirectory, { recursive: true })
  }
}

// Tüm blog yazılarını getir
export async function getAllPosts(): Promise<BlogPost[]> {
  await ensurePostsDirectory()
  
  try {
    // Markdown dosyalarını oku
    const files = await fs.readdir(postsDirectory)
    const markdownFiles = files.filter(file => file.endsWith('.md'))
    
    const posts = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(postsDirectory, file)
        const fileContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        return {
          id: file.replace('.md', ''),
          slug: data.slug || file.replace('.md', ''),
          title: data.title || '',
          excerpt: data.excerpt || '',
          content: content,
          category: data.category || 'Genel',
          tags: data.tags || [],
          author: data.author || 'Seokopat Team',
          date: data.date || new Date().toISOString(),
          readTime: data.readTime || '5 dk',
          image: data.image,
          seo: data.seo
        } as BlogPost
      })
    )
    
    // Tarihe göre sırala (yeni → eski)
    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Blog yazıları okunamadı:', error)
    return []
  }
}

// Tek bir blog yazısı getir
export async function getPost(id: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(postsDirectory, `${id}.md`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    return {
      id,
      slug: data.slug || id,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: content,
      category: data.category || 'Genel',
      tags: data.tags || [],
      author: data.author || 'Seokopat Team',
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || '5 dk',
      image: data.image,
      seo: data.seo
    } as BlogPost
  } catch {
    return null
  }
}

// Blog yazısı oluştur veya güncelle
export async function savePost(post: BlogPost): Promise<void> {
  await ensurePostsDirectory()
  
  const frontMatter = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    author: post.author,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    seo: post.seo
  }
  
  // Gray-matter formatında dosya içeriği oluştur
  const fileContent = matter.stringify(post.content, frontMatter)
  
  // Dosyayı kaydet
  const filePath = path.join(postsDirectory, `${post.id}.md`)
  await fs.writeFile(filePath, fileContent, 'utf8')
}

// Blog yazısı sil
export async function deletePost(id: string): Promise<void> {
  const filePath = path.join(postsDirectory, `${id}.md`)
  try {
    await fs.unlink(filePath)
  } catch (error) {
    console.error('Blog yazısı silinemedi:', error)
    throw error
  }
}

// Slug oluştur
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}