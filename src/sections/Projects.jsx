import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'MedJournal Hub Project',
    description:
      'A comprehensive medical journal platform featuring secure user authentication, article management, and an intuitive reading experience.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-[#7c3aed] to-[#db2777]',
    imageBg: 'from-purple-50 to-pink-50',
    liveUrl: 'https://med-journal-hub-front-end.vercel.app/',
    githubUrl: 'https://github.com/shakiljoin/MedJournalHub_FrontEnd',
  },
  {
    title: 'GameCenter - Money & Time',
    description:
      'A money and time management app for gamers with expense tracking, gaming session timers, and personalized insights.',
    tags: ['ReactJS', 'Supabase', 'Tailwind CSS'],
    gradient: 'from-[#2563EB] to-[#7c3aed]',
    imageBg: 'from-blue-50 to-purple-50',
    liveUrl: 'https://game-front-test.vercel.app/',
    githubUrl: 'https://github.com/shakiljoin/game_dashboard',
  },
  {
    title: 'Personal Portfolio',
    description:
      'A premium, minimalist portfolio with smooth animations, glassmorphism design, and a sophisticated visual identity.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    gradient: 'from-[#2563EB] to-[#7c3aed]',
    imageBg: 'from-blue-50 to-indigo-50',
    liveUrl: '#',
    githubUrl: 'https://github.com/shakiljoin/web',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 lg:py-32 bg-[#F9FAFB]">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
          <div className="text-center mb-12 md:mb-16">
            <span className="heading-label mb-6 inline-flex">Projects</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              Featured work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="overflow-hidden p-0 h-full group hover:-translate-y-1">
                  <div className={`relative h-40 sm:h-44 md:h-48 bg-gradient-to-br ${project.imageBg} flex items-center justify-center overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                    <div className="relative z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 backdrop-blur border border-[#E5E7EB] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${project.gradient}`} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/10 text-[10px] sm:text-xs font-medium text-[#2563EB]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#111111] text-white text-[11px] sm:text-xs font-medium hover:bg-[#2563EB] transition-all duration-300 min-h-[40px]"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#E5E7EB] text-[#666666] text-[11px] sm:text-xs font-medium hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300 min-h-[40px]"
                      >
                        <FaGithub size={13} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
