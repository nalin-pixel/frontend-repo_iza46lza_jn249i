import Section from './Section'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'They brought clarity and polish to our product. The motion work elevated the entire experience.',
    author: 'Alex P., Product Lead',
  },
  {
    quote: 'A rare blend of taste and technical depth. Fast, thoughtful, and detail‑oriented.',
    author: 'Jamie L., Founder',
  },
  {
    quote: 'Set up a scalable design system and shipped on time with beautiful execution.',
    author: 'Priya R., Design Director',
  },
]

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Testimonials</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-neutral-900">What clients say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <p className="text-neutral-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-neutral-500">{t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </Section>
  )
}
