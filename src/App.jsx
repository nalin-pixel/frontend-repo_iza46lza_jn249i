import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-700">Twitter</a>
            <a href="#" className="hover:text-neutral-700">LinkedIn</a>
            <a href="#" className="hover:text-neutral-700">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
