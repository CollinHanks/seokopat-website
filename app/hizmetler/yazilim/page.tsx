'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const stats = [
  { label: 'Tamamlanan Proje', value: '300+' },
  { label: 'Aktif Müşteri', value: '150+' },
  { label: 'Kod Kalitesi', value: '%99' },
  { label: 'Müşteri Memnuniyeti', value: '%98' }
]

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Uygulaması Geliştirme',
    description: 'React, Next.js, Vue.js ile modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyoruz.',
    features: ['SPA Development', 'Progressive Web Apps', 'Real-time Applications', 'Dashboard & Admin Panels'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: ServerIcon,
    title: 'Backend & API Geliştirme',
    description: 'Node.js, Python, .NET ile güvenli, hızlı ve ölçeklenebilir backend sistemleri kuruyoruz.',
    features: ['RESTful API', 'GraphQL', 'Microservices', 'Database Design'],
    color: 'from-green-400 to-green-600'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobil Uygulama Geliştirme',
    description: 'React Native ve Flutter ile iOS ve Android için native performanslı uygulamalar.',
    features: ['Cross-platform Apps', 'Native Development', 'App Store Publishing', 'Push Notifications'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: CloudIcon,
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, Google Cloud ile bulut altyapısı kurulumu ve CI/CD pipeline yönetimi.',
    features: ['Cloud Migration', 'Container Orchestration', 'Auto-scaling', 'Monitoring & Logging'],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: CircleStackIcon,
    title: 'Database & Data Engineering',
    description: 'PostgreSQL, MongoDB, Redis ile veritabanı tasarımı ve optimizasyonu.',
    features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup & Recovery'],
    color: 'from-orange-400 to-orange-600'
  },
  {
    icon: CpuChipIcon,
    title: 'AI & Machine Learning',
    description: 'TensorFlow, PyTorch ile yapay zeka ve makine öğrenmesi çözümleri.',
    features: ['Custom AI Models', 'NLP Solutions', 'Computer Vision', 'Predictive Analytics'],
    color: 'from-pink-400 to-pink-600'
  }
]

const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'Django', 'FastAPI', '.NET'] },
  { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Vercel', 'Docker'] },
  { category: 'DevOps', items: ['GitHub Actions', 'Jenkins', 'Kubernetes', 'Terraform'] }
]

const process = [
  { 
    step: '01', 
    title: 'Keşif ve Planlama', 
    description: 'İhtiyaçlarınızı detaylı analiz ediyor, teknik gereksinimler belirliyoruz.'
  },
  { 
    step: '02', 
    title: 'Tasarım & Prototipleme', 
    description: 'UX/UI tasarımları ve interaktif prototip hazırlıyoruz.'
  },
  { 
    step: '03', 
    title: 'Agile Geliştirme', 
    description: 'Sprint\'ler halinde geliştirme yapıyor, düzenli demo sunuyoruz.'
  },
  { 
    step: '04', 
    title: 'Test & QA', 
    description: 'Kapsamlı testler ile yazılım kalitesini garanti altına alıyoruz.'
  },
  { 
    step: '05', 
    title: 'Deployment', 
    description: 'Production ortamına sorunsuz geçiş ve CI/CD kurulumu.'
  },
  { 
    step: '06', 
    title: 'Bakım & Destek', 
    description: 'Sürekli monitoring, güncelleme ve teknik destek sağlıyoruz.'
  }
]

const faqs = [
  {
    question: 'Bir yazılım projesi ne kadar sürer?',
    answer: 'Proje karmaşıklığına göre değişir. Basit bir web uygulaması 4-6 hafta, karmaşık enterprise çözümler 3-6 ay sürebilir. İlk görüşmede size net bir timeline veriyoruz.'
  },
  {
    question: 'Yazılım geliştirme maliyeti nasıl hesaplanır?',
    answer: 'Proje scope\'una, teknoloji stack\'ine ve süreye göre hesaplanır. Saatlik ücret veya proje bazlı fiyatlandırma seçeneklerimiz var. Detaylı teklif için ücretsiz danışmanlık alabilirsiniz.'
  },
  {
    question: 'Hangi teknolojileri kullanıyorsunuz?',
    answer: 'Modern ve güncel teknolojiler kullanıyoruz: React, Next.js, Node.js, Python, AWS, Docker. Projenize en uygun tech stack\'i birlikte belirliyoruz.'
  },
  {
    question: 'Proje sonrası destek veriyor musunuz?',
    answer: 'Evet! Tüm projelerimizde garanti süresi ve bakım-destek paketleri sunuyoruz. 24/7 teknik destek, güncelleme ve yeni özellik ekleme hizmetlerimiz var.'
  },
  {
    question: 'Kaynak kodu bana ait olacak mı?',
    answer: 'Kesinlikle! Tüm kaynak kodlar ve dökümantasyon size teslim edilir. GitHub repository erişimi ve complete ownership sağlıyoruz.'
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-seokopat-pink transition-colors"
      >
        <span className="text-lg font-semibold pr-8">{faq.question}</span>
        <ChevronDownIcon 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-seokopat-blue-gray leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function SoftwarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-seokopat-navy via-purple-900 to-seokopat-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <CodeBracketIcon className="w-5 h-5 text-seokopat-pink" />
              <span className="text-sm font-medium">Enterprise-Grade Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Özel Yazılım Geliştirme ile <br/>
              <span className="bg-gradient-to-r from-seokopat-pink to-purple-300 bg-clip-text text-transparent">
                Dijital Dönüşümünüzü Hızlandırın
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Modern teknolojilerle ölçeklenebilir, güvenli ve performanslı yazılımlar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="btn-primary text-center">
                Proje Teklifi Al
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
                Portfolio İncele
              </button>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-seokopat-pink mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Yazılım <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Full-stack geliştirmeden cloud altyapısına, tüm yazılım ihtiyaçlarınız için buradayız
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-seokopat-pink/20">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-seokopat-navy mb-3 group-hover:text-seokopat-pink transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-seokopat-blue-gray mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Teknoloji <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Modern, güncel ve kanıtlanmış teknolojilerle çalışıyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-seokopat-navy mb-4">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-seokopat-blue-gray border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Geliştirme <span className="gradient-text">Sürecimiz</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Agile metodoloji ile hızlı, kaliteli ve şeffaf geliştirme
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-seokopat-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-seokopat-blue-gray">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sıkça Sorulan <span className="gradient-text">Sorular</span>
            </h2>
            <p className="text-lg text-seokopat-blue-gray max-w-3xl mx-auto">
              Yazılım geliştirme hakkında merak ettikleriniz
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-seokopat-navy to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 text-seokopat-pink" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Projenizi <span className="text-seokopat-pink">Hayata Geçirin</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ücretsiz proje değerlendirmesi için bizimle iletişime geçin. Size özel teknik çözüm önerisi hazırlıyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block">
              Ücretsiz Teklif Al
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}