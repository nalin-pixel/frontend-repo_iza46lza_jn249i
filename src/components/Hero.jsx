import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="max-w-6xl mx-auto h-full flex items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 md:p-10 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-600">Designer • Developer • Strategist</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-neutral-900">
              Crafting premium digital experiences
            </h1>
            <p className="mt-4 md:mt-6 text-neutral-700 max-w-xl">
              I design and build elegant, performant interfaces with a focus on clarity, motion, and delightful micro-interactions.
            </p>
            <div className="mt-6 md:mt-8 flex items-center gap-3">
              <a href="#work" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm hover:bg-neutral-800 transition-colors">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-3 text-sm text-neutral-900 hover:border-neutral-400 transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"></div>
    </section>
  )
}
