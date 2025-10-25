'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const metadata: Metadata = {
  title: 'İletişim',
  description: 'Seokopat ile iletişime geçin. Ücretsiz danışmanlık ve analiz için hemen ulaşın.',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bizimle <span className="gradient-text">İletişime Geçin</span>
          </h1>
          <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
            İşletmenizi dijitalde büyütmek için ücretsiz danışmanlık alın
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-seokopat-navy mb-6">
                Ücretsiz Analiz Formu
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-seokopat-navy mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-pink focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-seokopat-navy mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-pink focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-seokopat-navy mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-pink focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-seokopat-navy mb-2">
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-pink focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-seokopat-navy mb-2">
                    İlgilendiğiniz Hizmet
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-pink focus:border-transparent"
                  >
                    <option value="">Seçiniz...</option>
                    <option value="seo">SEO Optimizasyonu</option>
                    <option value="ecommerce">E-Ticaret Danışmanlığı</option>
                    <option value="software">Yazılım Geliştirme</option>
                    <option value="design">Web Tasarım</option>
                    <option value="marketing">Dijital Pazarlama</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-seokopat-navy mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-seokopat-pink focus:border-transparent"
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Ücretsiz Analiz Al
                </button>
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-seokopat-navy mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-4">
                <a href="tel:+905555555555" className="flex items-start gap-4 group">
                  <PhoneIcon className="h-6 w-6 text-seokopat-pink flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-seokopat-navy group-hover:text-seokopat-pink transition-colors">
                      Telefon
                    </div>
                    <div className="text-seokopat-blue-gray">
                      +90 555 555 55 55
                    </div>
                  </div>
                </a>
                
                <a href="mailto:info@seokopat.com" className="flex items-start gap-4 group">
                  <EnvelopeIcon className="h-6 w-6 text-seokopat-pink flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-seokopat-navy group-hover:text-seokopat-pink transition-colors">
                      E-posta
                    </div>
                    <div className="text-seokopat-blue-gray">
                      info@seokopat.com
                    </div>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-seokopat-pink flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-seokopat-navy">
                      Adres
                    </div>
                    <div className="text-seokopat-blue-gray">
                      Maslak, Sarıyer<br />
                      İstanbul, Türkiye
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-seokopat-pink flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-seokopat-navy">
                      Çalışma Saatleri
                    </div>
                    <div className="text-seokopat-blue-gray">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 10:00 - 14:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-seokopat-pink to-seokopat-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Hızlı Destek
              </h3>
              <p className="mb-4">
                Acil durumlar için WhatsApp hattımızdan 7/24 ulaşabilirsiniz.
              </p>
              <a href="https://wa.me/905555555555" className="inline-flex items-center gap-2 bg-white text-seokopat-navy px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}