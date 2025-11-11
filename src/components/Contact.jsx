import Section from './Section'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Contact</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900">Let’s build something exceptional</h2>
        <p className="mt-4 text-neutral-700">
          Open to select collaborations, product design, and front‑end engineering engagements.
        </p>

        <motion.a
          href="mailto:hello@example.com"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center mt-8 px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
        >
          hello@example.com
        </motion.a>
      </div>
    </Section>
  )
}
