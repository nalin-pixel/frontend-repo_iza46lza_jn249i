import Section from './Section'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Dashboard',
    desc: 'High-clarity analytics with subtle motion and systemized UI.',
    tags: ['Product', 'Design System', 'React'],
  },
  {
    title: 'E‑commerce Experience',
    desc: 'Premium shopping flows with fast performance and clean UX.',
    tags: ['UX', 'UI', 'Optimization'],
  },
  {
    title: '3D Interaction Site',
    desc: 'Minimal 3D visuals and micro‑interactions with Spline.',
    tags: ['3D', 'Spline', 'WebGL'],
  },
]

export default function Projects() {
  return (
    <Section id="work" className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Work</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900">Selected projects</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />)
          )}
        </div>
      </div>
    </Section>
  )
}

function ProjectCard({ project, i }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group block rounded-2xl border border-neutral-200 overflow-hidden bg-white hover:shadow-md transition-all"
    >
      <div className="aspect-[4/3] bg-neutral-100" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-neutral-800">{project.title}</h3>
          <Arrow />
        </div>
        <p className="mt-2 text-neutral-600 text-sm">{project.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

function Arrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-400 group-hover:text-rose-400 transition-colors">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
