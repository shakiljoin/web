import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  
  {
    title: 'MedJournal Hub Project',
    description:
      'A comprehensive medical journal platform featuring secure user authentication, article management, and an intuitive reading experience. Built with modern web technologies for optimal performance.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    gradient: 'from-[#7c3aed] to-[#db2777]',
    imageBg: 'from-purple-50 to-pink-50',
    liveUrl: 'https://med-journal-hub-front-end.vercel.app/',
    githubUrl: 'https://github.com/shakiljoin/MedJournalHub_FrontEnd',
  },
   {
    title:"GameCenter - Money and time management",
    description:
      "A money and time management app for gamers, built with ReactJS and Supabase. Features include expense tracking, gaming session timers, and personalized insights to help users balance gaming with real-life responsibilities.",
    tags: ['ReactJS', 'Supabase', 'Tailwind CSS'],
    gradient: 'from-[#2563EB] to-[#7c3aed]',
    imageBg: 'from-blue-50 to-purple-50',
    liveUrl: 'https://game-front-test.vercel.app/',
    githubUrl: 'https://github.com/shakiljoin/game_dashboard',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A premium, minimalist portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism design, and a sophisticated visual identity inspired by modern SaaS platforms.',
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    gradient: 'from-[#2563EB] to-[#7c3aed]',
    imageBg: 'from-blue-50 to-indigo-50',
    liveUrl: '#',
    githubUrl: '#',
  }
 
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F9FAFB]">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="heading-label mb-6 inline-flex">Projects</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              Featured work
            </h2>
          </div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="overflow-hidden p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className={`relative h-64 md:h-full min-h-[300px] bg-gradient-to-br ${project.imageBg} flex items-center justify-center overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                      <div className="relative z-10 text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/80 backdrop-blur border border-[#E5E7EB] flex items-center justify-center shadow-sm">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient}`} />
                        </div>
                        <h3 className="text-xl font-bold text-[#111111]">{project.title}</h3>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#2563EB] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#666666] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/10 text-xs font-medium text-[#2563EB]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-medium hover:bg-[#2563EB] transition-all duration-300"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#E5E7EB] text-[#666666] text-xs font-medium hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
                        >
                          <FaGithub size={14} />
                          GitHub
                        </a>
                      </div>
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
