import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { Code2, Globe, Palette, Smartphone, Layout } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications with modern frameworks and clean, maintainable code.',
  },
  {
    icon: Globe,
    title: 'Mobile Development',
    description: 'Developing scalable single-page applications with React Native, state management, and optimized performance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces with a focus on aesthetics, usability, and seamless interactions.',
  },
  {
    icon: Layout,
    title: 'Support & Maintenance ',
    description: 'Providing ongoing support and maintenance for web and mobile applications to ensure optimal performance and user satisfaction.',
  },
]

export default function Services() {
  return (
    <SectionReveal>
      <section id="services" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="heading-label mb-6 inline-flex">Services</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              What I do
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const isWide = i === services.length - 1
              return (
                <motion.div
                  key={service.title}
                  className={`${isWide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <GlassCard className="h-full group hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/10 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/10 transition-colors">
                      <service.icon size={24} className="text-[#2563EB]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] mb-3">{service.title}</h3>
                    <p className="text-sm text-[#666666] leading-relaxed">{service.description}</p>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
