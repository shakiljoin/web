import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import GlassCard from '../components/GlassCard'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Shakil has an exceptional ability to bring designs to life with clean, efficient code. His attention to detail and modern approach make every project stand out.',
    author: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    initials: 'SJ',
  },
  {
    quote: 'Working with Shakil was a fantastic experience. He understood our vision perfectly and delivered a polished, premium website that exceeded our expectations.',
    author: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    initials: 'MC',
  },
  {
    quote: 'The level of craftsmanship in Shakil\'s work is remarkable. Every interaction feels thoughtful and every pixel is perfectly placed. A true frontend artist.',
    author: 'Emily Rodriguez',
    role: 'Design Lead, WebAgency',
    initials: 'ER',
  },
  {
    quote: 'Shakil brings a rare combination of design sensibility and technical expertise. He doesn\'t just build websites — he creates premium digital experiences.',
    author: 'David Kim',
    role: 'CTO, InnovateTech',
    initials: 'DK',
  },
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 bg-[#F9FAFB]">
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[1400px]">
          <div className="text-center mb-12 md:mb-16">
            <span className="heading-label mb-6 inline-flex">Testimonials</span>
            <h2 className="heading-section mt-4 text-[#111111]">
              Kind words
            </h2>
          </div>

          <div className="max-w-3xl mx-auto" ref={containerRef}>
            <div className="relative overflow-hidden">
              <motion.div
                key={currentIndex}
                className="flex"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <GlassCard className="text-center p-6 sm:p-8 md:p-12 mx-auto w-full">
                  <div className="w-12 h-12 rounded-full bg-[#2563EB]/5 border border-[#2563EB]/10 flex items-center justify-center mx-auto mb-6">
                    <Quote size={22} className="text-[#2563EB]" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed mb-6 md:mb-8 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7c3aed] flex items-center justify-center text-white text-xs font-bold">
                      {testimonials[currentIndex].initials}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-[#111111]">{testimonials[currentIndex].author}</p>
                      <p className="text-xs text-[#999999]">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-[#2563EB] w-6'
                      : 'bg-[#E5E7EB] hover:bg-[#2563EB]/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
