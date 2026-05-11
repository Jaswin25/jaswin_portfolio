import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Stats from './components/Stats'
import TrustedPlatforms from './components/TrustedPlatforms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'
import ThemeContext from './context/ThemeContext'

function App() {
  const [loading, setLoading] = useState(true)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-mode')
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.body.classList.add('light-mode')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative min-h-screen ${isDark ? 'bg-black' : 'bg-red-50'}`}
          >
            {/* Particle background */}
            <ParticleBackground isDark={isDark} />

            {/* Grid background */}
            <div className={`fixed inset-0 pointer-events-none ${isDark ? 'bg-grid' : 'bg-grid-light'}`} />

            {/* Navigation */}
            <Navbar isDark={isDark} />

            {/* Main content */}
            <main>
              <Hero isDark={isDark} />
              <About isDark={isDark} />
              <Skills isDark={isDark} />
              <Experience isDark={isDark} />
              <Projects isDark={isDark} />
              <Certifications isDark={isDark} />
              <Stats isDark={isDark} />
              <TrustedPlatforms isDark={isDark} />
              <Contact isDark={isDark} />
            </main>

            {/* Footer */}
            <Footer isDark={isDark} />

            {/* Scroll to top */}
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  )
}

export default App
