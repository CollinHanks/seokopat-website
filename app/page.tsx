import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Apps from '@/components/Apps'
import BlogPreview from '@/components/BlogPreview'
import About from '@/components/About'
import CTA from '@/components/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description: 'Seokopat - AI destekli SEO ve e-ticaret çözümleri ile dijital dönüşümünüzü hızlandırın.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Apps />
      <BlogPreview />
      <About />
      <CTA />
    </>
  )
}