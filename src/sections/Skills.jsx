import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { Code2, Palette, Wrench, Database, Brain } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'JavaScript/ES6+', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5/CSS3', level: 95 },
    ],
  },
  {
    title: 'UI/UX',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Design Systems', level: 78 },
      { name: 'Prototyping', level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Vite', level: 82 },
      
    ],
  },
  { 
    title:'AI Tools',
    icon: Brain,
    skills: [
      { name: 'ChatGPT', level: 90 },
      { name: 'Claude', level: 80 },
      { name: 'github copilot', level: 75 },
    ],

  },
  {
    title: 'Backend Basics',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'REST APIs', level: 70 },
      { name: 'Supabase', level: 60 },
      { name: 'Sql', level: 55 },
    ],
  },
]

const iconMap = {
  Frontend: Code2,
  'UI/UX': Palette,
  Tools: Wrench,
  'Backend Basics': Database,
  'AI Tools': Brain,
}

export default function Skills() {
  return (
    <SectionReveal>
      <section id="skills" className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
          <div className="text-center mb-12 md:mb-16">
            <span className="heading-label mb-6 inline-flex">Skills</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              Technologies & expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
            {skillCategories.map((category, i) => {
              const Icon = iconMap[category.title]
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <GlassCard className="h-full group hover:-translate-y-1 p-5 md:p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/5 border border-[#2563EB]/10 flex items-center justify-center group-hover:bg-[#2563EB]/10 transition-colors">
                        <Icon size={20} className="text-[#2563EB]" />
                      </div>
                      <h3 className="text-base font-bold text-[#111111]">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm text-[#666666]">{skill.name}</span>
                            <span className="text-[11px] text-[#999999] font-medium">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#E5E7EB] overflow-hidden">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#7c3aed]"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
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
