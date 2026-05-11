import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Altsense Technology Services',
    period: '2024 - Present',
    description:
      'Building modern web applications using React.js, Tailwind CSS, and Framer Motion. Collaborating with cross-functional teams to deliver scalable, high-performance solutions with premium UI/UX.',
    highlights: ['React.js', 'Tailwind CSS', 'Git',"GitHub", 'Framer Motion', 'Responsive Design'],
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'Blue Tick Coder',
    period: 'January 2024 - April 2024',
    description:
      'Designed intuitive, accessible UI/UX components for the Nobel Parenting App (child development), applying WCAG accessibility and early-learning design principles. Improved user flow and interface clarity by iterating on Figma prototypes; collaborated with the product team to align design with application goals.',
    highlights: ['UI/UX Design', 'Content Research', 'Figma', 'Accessibility', 'Early Learning Design'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F9FAFB]">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="heading-label mb-6 inline-flex">Experience</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              Professional journey
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#2563EB] via-[#7c3aed]/30 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="absolute left-4 top-1 w-9 h-9 rounded-full bg-white border-2 border-[#2563EB]/20 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
                  </div>

                  <GlassCard className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-[#111111]">{exp.role}</h3>
                        <p className="text-sm text-[#2563EB] font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs text-[#999999] font-medium px-3 py-1 rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#666666] text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/10 text-xs font-medium text-[#2563EB]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
