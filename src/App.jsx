import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

  const handleLoadingComplete = useCallback(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!loading) {
      const isMobile = window.innerWidth < 768
      const lenis = new Lenis({
        duration: isMobile ? 0.5 : 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: !isMobile,
        wheelMultiplier: isMobile ? 0.5 : 1,
        touchMultiplier: isMobile ? 1 : 2,
        infinite: false,
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
      window.lenis = lenis

      return () => {
        lenis.destroy()
        delete window.lenis
      }
    }
  }, [loading])

  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor mouseX={mousePosition.x} mouseY={mousePosition.y} />
          <ScrollProgress />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main className="relative">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Services />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </>
      )}
    </div>
  )
}
