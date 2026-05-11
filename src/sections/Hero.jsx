import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  }

  const scrollToSection = (href) => {
    const el = document.querySelector(href)
    if (el && window.lenis) {
      window.lenis.scrollTo(el, { offset: -80 })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#2563EB]/5 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[100px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/3 blur-[150px] animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/5 border border-[#2563EB]/10 text-xs font-semibold text-[#2563EB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
                Frontend Developer
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-hero mb-6">
              Shakil <br />
              <span className="text-gradient">Ahamed</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-[#666666] max-w-xl mb-8 leading-relaxed">
              Frontend Developer & UI/UX Designer crafting modern, scalable, and premium web experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#111111] text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-[#2563EB]"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#E5E7EB] text-[#666666] text-sm font-medium hover:border-[#2563EB]/30 hover:text-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300"
              >
                Contact Me
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6">
              {[
                { label: 'GitHub', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Email', href: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-[#999999] hover:text-[#2563EB] transition-colors uppercase tracking-widest font-medium"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full max-w-[420px]">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#2563EB]/20 via-[#7c3aed]/10 to-transparent rounded-3xl blur-2xl animate-pulse-glow" />

              <div className="relative glass-card rounded-2xl p-8 overflow-hidden">
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.3), transparent, rgba(124,58,237,0.3))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className="relative mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#2563EB]/10 to-[#7c3aed]/10 flex items-center justify-center overflow-hidden border border-[#E5E7EB]">
                    <span className="text-5xl font-bold text-gradient">SA</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#2563EB] animate-pulse" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>

                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-[#111111]">Shakil Ahamed</h3>
                  <p className="text-sm text-[#666666]">Frontend Developer & UI/UX Designer</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/5 border border-[#2563EB]/10 text-xs text-[#2563EB] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Available for work
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                  <div className="flex justify-center gap-4">
                    {['Web Application', 'Mobile Development', 'UI/UX Design'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-lg bg-[#F9FAFB] text-xs font-medium text-[#666666] border border-[#E5E7EB]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] text-[#999999] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#2563EB]/50 to-transparent" />
      </motion.div>
    </section>
  )
}
