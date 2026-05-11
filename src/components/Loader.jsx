import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7c3aed]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.p
          className="text-sm text-[#666666] font-medium tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  )
}
