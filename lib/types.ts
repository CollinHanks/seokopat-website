export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;      // ← ÖNEMLİ: Tam içerik
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: string;     // ← ÖNEMLİ: Okuma süresi
}