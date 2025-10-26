'use client'

import { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setSubmitSuccess(true)
    
    // Show success message
    setTimeout(() => {
      setSubmitSuccess(false)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      })
    }, 3000)
    
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Contact info - SINPAŞ QUEEN RESIDENCE, BOMONTİ
  const contactInfo = {
    phone: '+90 540 848 48 34',
    phoneClean: '905408484834',
    phoneDisplay: '+90 (540) 848 48 34',
    email: 'hello@seokopat.com',
    address: {
      building: 'Bomonti Sinpaş Queen Residence',
      street: 'Cumhuriyet, İncirli Dede Cd. No:8',
      district: 'Şişli',
      city: 'İstanbul',
      postalCode: '34380',
      fullAddress: 'Bomonti Sinpaş Queen Residence, Cumhuriyet, İncirli Dede Cd. No:8, 34380 Şişli/İstanbul',
      // Sinpaş Queen Residence Bomonti koordinatları
      lat: 41.0588,
      lng: 28.9867
    },
    hours: {
      weekday: 'Pazartesi - Cuma: 09:00 - 18:00',
      saturday: 'Cumartesi: 10:00 - 14:00',
      sunday: 'Pazar: Kapalı'
    },
    socialProof: {
      responseTime: '15 dk',
      clients: '500+',
      satisfaction: '%95',
      projects: '1500+'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION - ULTRA EPİK */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 sm:px-8 py-2.5 sm:py-3 mb-6 sm:mb-8 border border-white/20 shadow-xl">
              <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
              <span className="text-xs sm:text-sm font-bold">7/24 Destek • 15 Dakika Yanıt Süresi</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
              <span className="block mb-2">Bizimle</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                İletişime Geçin
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-10 sm:mb-14 leading-relaxed px-4 max-w-4xl mx-auto font-medium">
              Dijital dünyada işinizi büyütmek için <span className="text-yellow-300 font-bold">ücretsiz danışmanlık</span> alın.
              <span className="block mt-2">Uzman ekibimiz size özel çözümler sunmaya hazır! 🚀</span>
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-10 sm:mb-14">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm opacity-90">Kesintisiz Destek</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm opacity-90">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">15dk</div>
                <div className="text-xs sm:text-sm opacity-90">Ortalama Yanıt</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 sm:mb-2">%95</div>
                <div className="text-xs sm:text-sm opacity-90">Memnuniyet</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white text-purple-900 font-black rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 text-base sm:text-lg"
              >
                <RocketLaunchIcon className="h-6 w-6" />
                Hemen Başlayalım
              </a>
              <a
                href={`https://wa.me/${contactInfo.phoneClean}?text=Merhaba, bilgi almak istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-green-500 text-white font-black rounded-xl hover:bg-green-600 transition-all shadow-2xl hover:scale-105 text-base sm:text-lg"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* LEFT: CONTACT FORM - 2 Columns */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-white via-gray-50 to-purple-50 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border-2 border-purple-100 overflow-hidden">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-20 -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 -ml-32 -mb-32" />
              
              <div className="relative">
                {/* Form Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-full px-5 py-2.5 mb-4">
                    <RocketLaunchIcon className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-black text-purple-900">Ücretsiz Analiz & Danışmanlık</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
                    Projenizi Anlatın
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg">
                    Size özel çözümler için formu doldurun, <span className="text-purple-600 font-bold">15 dakika içinde</span> geri dönüş yapalım.
                  </p>
                </div>

                {/* Success Message */}
                {submitSuccess && (
                  <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center gap-3 animate-pulse">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-green-900">Mesajınız başarıyla gönderildi! ✨</div>
                      <div className="text-sm text-green-700">En kısa sürede size dönüş yapacağız.</div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-black text-gray-900 mb-2">
                        Ad Soyad <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-black text-gray-900 mb-2">
                        E-posta <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  
                  {/* Phone & Company */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-black text-gray-900 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-black text-gray-900 mb-2">
                        Firma Adı
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-400 font-medium"
                        placeholder="Firma Adınız (opsiyonel)"
                      />
                    </div>
                  </div>
                  
                  {/* Service & Budget */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-black text-gray-900 mb-2">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 bg-white font-medium"
                      >
                        <option value="">Hizmet Seçiniz...</option>
                        <option value="seo">🔍 SEO & İçerik Pazarlama</option>
                        <option value="ecommerce">🛒 E-Ticaret Danışmanlığı</option>
                        <option value="software">💻 Yazılım Geliştirme</option>
                        <option value="design">🎨 Web & UI/UX Tasarım</option>
                        <option value="marketing">📱 Dijital Pazarlama</option>
                        <option value="saas">☁️ SaaS Ürünler</option>
                        <option value="consulting">💼 Kurumsal Danışmanlık</option>
                        <option value="branding">✨ Marka Yönetimi</option>
                        <option value="other">🚀 Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-black text-gray-900 mb-2">
                        Bütçe Aralığı
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 bg-white font-medium"
                      >
                        <option value="">Bütçe Seçiniz...</option>
                        <option value="5k-15k">💰 5.000₺ - 15.000₺</option>
                        <option value="15k-30k">💰💰 15.000₺ - 30.000₺</option>
                        <option value="30k-50k">💰💰💰 30.000₺ - 50.000₺</option>
                        <option value="50k+">💎 50.000₺+</option>
                        <option value="flexible">🤝 Esnek / Görüşülür</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-black text-gray-900 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all text-gray-900 placeholder-gray-400 resize-none font-medium"
                      placeholder="Projeniz hakkında detaylı bilgi verin... 

• Hedefleriniz nedir?
• Hangi sorunları çözmek istiyorsunuz?
• Timeline (zaman çizelgesi) var mı?
• Özel istekleriniz neler?"
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-black py-5 rounded-xl hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 transition-all shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-3 hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <RocketLaunchIcon className="h-6 w-6" />
                        Ücretsiz Analiz Al 🚀
                      </>
                    )}
                  </button>

                  {/* Privacy & Trust */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t-2 border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">KVKK uyumlu • SSL güvenli</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <span className="font-medium">15 dk içinde yanıt</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* RIGHT: SIDEBAR - 1 Column */}
          <div className="space-y-6 lg:space-y-8">
            
            {/* Contact Info Card - COLORFUL GRADIENT */}
            <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl shadow-2xl p-6 sm:p-8 text-white border-2 border-purple-400 overflow-hidden">
              {/* Decorative Orbs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                  <BuildingOfficeIcon className="h-7 w-7" />
                  İletişim Bilgileri
                </h3>
                
                <div className="space-y-5">
                  
                  {/* Phone */}
                  <a 
                    href={`tel:${contactInfo.phoneClean}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-lg">
                      <PhoneIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-black text-white group-hover:text-yellow-300 transition-colors mb-1">
                        Telefon
                      </div>
                      <div className="text-white/90 text-sm font-semibold">
                        {contactInfo.phoneDisplay}
                      </div>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/30 transition-all shadow-lg">
                      <EnvelopeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-black text-white group-hover:text-yellow-300 transition-colors mb-1">
                        E-posta
                      </div>
                      <div className="text-white/90 text-sm font-semibold">
                        {contactInfo.email}
                      </div>
                    </div>
                  </a>
                  
                  {/* Address with Building Name */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-black text-white mb-1">
                        Adres
                      </div>
                      <div className="text-white/90 text-sm font-semibold leading-relaxed">
                        {contactInfo.address.building}<br />
                        {contactInfo.address.street}<br />
                        {contactInfo.address.postalCode} {contactInfo.address.district}/{contactInfo.address.city}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ClockIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-black text-white mb-1">
                        Çalışma Saatleri
                      </div>
                      <div className="text-white/90 text-sm space-y-1 font-semibold">
                        <div>{contactInfo.hours.weekday}</div>
                        <div>{contactInfo.hours.saturday}</div>
                        <div className="text-yellow-300">{contactInfo.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Card */}
            <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-green-600 rounded-3xl p-6 sm:p-8 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 shadow-xl">
                  <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-black mb-4">
                  Hızlı WhatsApp Destek
                </h3>
                
                <p className="mb-6 text-white/95 text-base leading-relaxed font-medium">
                  Acil durumlar için WhatsApp hattımızdan <span className="font-black">7/24</span> ulaşabilirsiniz. 
                  <span className="block mt-1">⚡ Anında yanıt garantisi!</span>
                </p>
                
                <a 
                  href={`https://wa.me/${contactInfo.phoneClean}?text=Merhaba! Seokopat hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-white text-green-600 px-6 py-4 rounded-xl font-black hover:bg-gray-100 transition-all shadow-2xl text-base hover:scale-105"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp'tan Yaz 💬
                </a>
              </div>
            </div>

            {/* Why Us Card */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 shadow-xl">
              <h3 className="text-xl font-black text-gray-900 mb-5 flex items-center gap-2">
                <SparklesIcon className="h-6 w-6 text-purple-600" />
                Neden Seokopat?
              </h3>
              <div className="space-y-3">
                {[
                  '500+ başarılı proje deneyimi',
                  'Ortalama %250 satış artışı',
                  '7/24 teknik destek hizmeti',
                  '15 dakika içinde geri dönüş',
                  '%95 müşteri memnuniyeti',
                  'AI destekli çözümler'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                    <span className="text-sm text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS - SINPAŞ QUEEN RESIDENCE */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-5 py-2.5 mb-4">
              <MapPinIcon className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-black text-purple-900">Sinpaş Queen Residence, Bomonti</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Bizi Ziyaret Edin
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ofisimize yakınsanız kahve içmeye bekleriz! ☕<br />
              Randevu için önceden arayın: <a href={`tel:${contactInfo.phoneClean}`} className="text-purple-600 font-bold hover:underline">{contactInfo.phoneDisplay}</a>
            </p>
          </div>

          {/* Map Container */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1234567890123!2d${contactInfo.address.lng}!3d${contactInfo.address.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzMxLjciTiAyOMKwNTknMTIuMSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seokopat Ofis - Sinpaş Queen Residence Bomonti"
                className="grayscale-[50%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Map Info Bar */}
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <div className="font-black text-lg sm:text-xl mb-1">
                      {contactInfo.address.fullAddress}
                    </div>
                    <div className="text-sm text-white/90 font-medium">
                      Posta Kodu: {contactInfo.address.postalCode}
                    </div>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${contactInfo.address.lat},${contactInfo.address.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3.5 rounded-xl font-black hover:bg-gray-100 transition-all shadow-xl text-base hover:scale-105"
                >
                  <MapPinIcon className="h-5 w-5" />
                  Yol Tarifi Al 🗺️
                </a>
              </div>
            </div>
          </div>

          {/* Location Benefits */}
          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚇', title: 'Metro Yakın', desc: '5 dakika yürüme' },
              { icon: '🚗', title: 'Otopark', desc: 'Ücretsiz park' },
              { icon: '☕', title: 'Çevre', desc: 'Cafe & Restaurant' },
              { icon: '🏢', title: 'Merkezi', desc: 'Bomonti iş merkezi' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-500 transition-all hover:shadow-xl text-center group">
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{item.icon}</div>
                <div className="font-black text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}