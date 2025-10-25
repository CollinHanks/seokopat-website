import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircleIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Seokopat - Dijital dönüşümde güvenilir partneriniz. 2018\'den beri AI destekli çözümlerle işletmeleri büyütüyoruz.',
}

const team = [
  { name: 'Ahmet Yılmaz', role: 'CEO & Kurucu', expertise: 'Dijital Strateji' },
  { name: 'Mehmet Kaya', role: 'CTO', expertise: 'Yazılım Geliştirme' },
  { name: 'Ayşe Demir', role: 'CMO', expertise: 'Dijital Pazarlama' },
  { name: 'Fatma Öztürk', role: 'Head of SEO', expertise: 'SEO & İçerik' },
  { name: 'Ali Çelik', role: 'E-Commerce Lead', expertise: 'E-Ticaret' },
  { name: 'Zeynep Arslan', role: 'Design Lead', expertise: 'UI/UX Tasarım' },
]

const milestones = [
  { year: '2018', event: 'Seokopat kuruldu', description: 'İlk ofisimizle İstanbul\'da faaliyete başladık' },
  { year: '2019', event: '100+ müşteri', description: 'İlk yılımızda 100 müşteri barajını aştık' },
  { year: '2020', event: 'E-ticaret odağı', description: 'Pandemi döneminde e-ticaret çözümlerine odaklandık' },
  { year: '2021', event: 'SaaS ürünleri', description: 'Squezzly ve Stokmatic uygulamalarını geliştirdik' },
  { year: '2022', event: '500+ müşteri', description: 'Türkiye\'nin önde gelen dijital ajansları arasına girdik' },
  { year: '2023', event: 'AI entegrasyonu', description: 'Tüm hizmetlerimize AI teknolojilerini entegre ettik' },
  { year: '2024', event: 'Global açılım', description: 'Avrupa pazarına açılma hazırlıkları başladı' },
  { year: '2025', event: 'Yeni ufuklar', description: 'Tagdio lansmanı ve kurumsal müşteri odağı' },
]

const testimonials = [
  {
    name: 'Emre Yılmaz',
    company: 'TechStore',
    role: 'E-Ticaret Müdürü',
    comment: 'Seokopat ile çalışmaya başladıktan sonra online satışlarımız %250 arttı. Özellikle SEO ve Shopify optimizasyonundaki uzmanlıkları muhteşem.',
    rating: 5
  },
  {
    name: 'Seda Kara',
    company: 'Fashion Brand',
    role: 'Kurucu',
    comment: 'Stokmatic sayesinde envanter yönetimimiz çok kolaylaştı. 5 farklı platformdaki stoklarımızı tek yerden yönetebiliyoruz.',
    rating: 5
  },
  {
    name: 'Burak Özdemir',
    company: 'Digital Agency',
    role: 'Genel Müdür',
    comment: 'Müşterilerimizin dijital projelerinde Seokopat ile çalışıyoruz. Teknik bilgileri ve profesyonel yaklaşımları her zaman fark yaratıyor.',
    rating: 5
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Dijital Dönüşümde
                <span className="text-pink-300"> Güvenilir </span>
                Partneriniz
              </h1>
              <p className="text-xl opacity-90 mb-8">
                2018&apos;den beri Türkiye&apos;nin önde gelen markalarına AI destekli dijital çözümler sunuyor, 
                işletmelerin online başarısını garanti altına alıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-pink-300">500+</div>
                  <div className="text-white/80">Mutlu Müşteri</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-300">1500+</div>
                  <div className="text-white/80">Tamamlanan Proje</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-300">%95</div>
                  <div className="text-white/80">Müşteri Memnuniyeti</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-300">7/24</div>
                  <div className="text-white/80">Destek</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
              <div className="relative p-12 text-center">
                <div className="text-9xl font-bold opacity-20">S</div>
                <p className="text-xl italic opacity-90">
                  &ldquo;İnovasyonu ve mükemmeliyeti bir araya getirerek, müşterilerimizin dijital potansiyelini açığa çıkarıyoruz.&rdquo;
                </p>
                <div className="mt-6">
                  <div className="font-semibold">Ahmet Yılmaz</div>
                  <div className="text-sm opacity-80">CEO & Kurucu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-pink-100 to-transparent rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
            <p className="text-lg text-gray-600 mb-6">
              İşletmelerin dijital dünyada sürdürülebilir büyüme elde etmelerini sağlamak için 
              en yenilikçi teknolojileri ve stratejileri kullanarak, ölçülebilir sonuçlar üretmek.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-pink-600 flex-shrink-0" />
                <span className="text-gray-900">Veri odaklı stratejiler geliştirmek</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-pink-600 flex-shrink-0" />
                <span className="text-gray-900">Sürekli inovasyon ve gelişim</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-pink-600 flex-shrink-0" />
                <span className="text-gray-900">Müşteri başarısını önceliklendirmek</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-transparent rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
            <p className="text-lg text-gray-600 mb-6">
              Türkiye&apos;nin ve bölgenin en güvenilir dijital dönüşüm partneri olarak, 
              global standartlarda hizmet veren, teknoloji ve insan odaklı bir ekosistem yaratmak.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-900 flex-shrink-0" />
                <span className="text-gray-900">Sektör lideri olmak</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-900 flex-shrink-0" />
                <span className="text-gray-900">Global pazarlara açılmak</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-900 flex-shrink-0" />
                <span className="text-gray-900">Teknoloji öncüsü olmak</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Yolculuğumuz
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-600 to-blue-900"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-white border-4 border-pink-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-pink-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-5/12">
                    <div className={`bg-white rounded-xl shadow-lg p-6 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                      <div className="text-2xl font-bold text-pink-600 mb-2">{milestone.year}</div>
                      <div className="text-lg font-semibold text-gray-900 mb-1">{milestone.event}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Uzman Ekibimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alanında uzman, tutkulu ve yenilikçi ekibimizle müşterilerimize en iyi hizmeti sunuyoruz.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="relative mb-4">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-600 to-blue-900 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-pink-600">{member.role}</p>
              <p className="text-xs text-gray-600">{member.expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-lg text-gray-600">
              Başarı hikayeleri müşterilerimizin sözlerinde saklı
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-pink-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siz de Başarı Hikayemizin Bir Parçası Olun
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            500+ müşterimiz gibi siz de dijital dönüşümünüzü başlatın
          </p>
          <Link href="/iletisim" className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Hemen Başlayalım
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}