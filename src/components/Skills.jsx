import Section from './Section'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Product Design', level: 'Expert' },
  { name: 'Design Systems', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Three.js', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <Section id="skills" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Skills</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900">A balanced toolkit</h2>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-neutral-200 bg-white p-4 hover:shadow-sm transition-shadow"
            >
              <p className="text-neutral-900 font-medium">{s.name}</p>
              <p className="text-neutral-500 text-sm mt-1">{s.level}</p>
              <div className="mt-4 h-1.5 rounded-full bg-neutral-100">
                <motion.div
                  className="h-1.5 rounded-full bg-rose-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${80 + (i % 3) * 7}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
