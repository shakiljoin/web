import { motion } from 'framer-motion'

export default function CustomCursor({ mouseX, mouseY }) {
  return (
    <>
      <motion.div
        className="custom-cursor fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-[#2563EB] mix-blend-multiply"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{ x: mouseX, y: mouseY }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 1, duration: 0.1 }}
      />
      <motion.div
        className="custom-cursor fixed pointer-events-none z-[9998] w-8 h-8 rounded-full bg-[#2563EB]/10"
        style={{ translateX: '-50%', translateY: '-50%' }}
        animate={{ x: mouseX, y: mouseY }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 1, duration: 0.15 }}
      />
    </>
  )
}
