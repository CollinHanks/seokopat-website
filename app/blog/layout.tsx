import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & İçgörüler - SEO, E-Ticaret ve Dijital Pazarlama | Seokopat',
  description: 'SEO, e-ticaret optimizasyonu, dijital pazarlama stratejileri ve yapay zeka hakkında en güncel blog yazıları. Uzman görüşleri ve pratik ipuçlarıyla işinizi büyütün.',
  keywords: 'SEO blog, e-ticaret blog, dijital pazarlama, Google SEO, SEO stratejileri, e-ticaret optimizasyonu, online pazarlama, içerik pazarlama, anahtar kelime araştırması, backlink stratejileri, teknik SEO, local SEO, yapay zeka SEO',
  openGraph: {
    title: 'SEO & Dijital Pazarlama Blog - Seokopat',
    description: 'SEO, e-ticaret ve dijital pazarlama dünyasından en güncel haberler, stratejiler ve içgörüler',
    images: ['/og-blog.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Dijital Pazarlama Blog',
    description: 'En güncel SEO stratejileri ve dijital pazarlama ipuçları',
  },
  alternates: {
    canonical: 'https://seokopat.com/blog'
  }
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}