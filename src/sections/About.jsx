import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { Code2, Sparkles, Layers } from 'lucide-react'

const stats = [
  { value: '2+', label: 'Years Experience', icon: Code2 },
  { value: '20+', label: 'Projects Completed', icon: Layers },
  { value: '12+', label: 'Technologies', icon: Sparkles },
]

export default function About() {
  return (
    <SectionReveal>
      <section id="about" className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center lg:text-left"
            >
              <span className="heading-label mb-6 inline-flex lg:block">About</span>
              <h2 className="heading-section mb-6 text-[#111111]">
                Crafting exceptional digital experiences
              </h2>
              <div className="space-y-4 text-[#666666] leading-relaxed">
                <p>
                  I'm Shakil Ahamed, a Frontend Developer and UI/UX Designer with over 2 years
                  of experience building modern, scalable web applications. I specialize in
                  React.js, Tailwind CSS, and creating intuitive user interfaces.
                </p>
                <p>
                  My passion lies in bridging the gap between design and engineering —
                  transforming complex problems into simple, beautiful, and accessible
                  digital experiences. Every pixel matters, every interaction counts.
                </p>
                <p>
                  Currently focused on building premium web experiences with cutting-edge
                  technologies and delivering high-quality solutions that make a real impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              {stats.map((stat, i) => (
                <GlassCard
                  key={stat.label}
                  className={`flex flex-col items-center text-center p-6 md:p-8 hover:-translate-y-1 ${
                    i === 2 ? 'sm:col-span-2 sm:flex-row sm:text-left sm:gap-6' : ''
                  }`}
                >
                  <div className={`${i === 2 ? 'sm:flex-shrink-0' : 'mb-4'}`}>
                    <div className="w-12 h-12 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/10 flex items-center justify-center">
                      <stat.icon size={22} className="text-[#2563EB]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#111111] mb-1">{stat.value}</div>
                    <div className="text-sm text-[#666666]">{stat.label}</div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}
