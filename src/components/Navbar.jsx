import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, scrollSpy } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiMoon, HiSun } from 'react-icons/hi2'
import ThemeContext from '../context/ThemeContext'

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar({ isDark }) {
  const { setIsDark } = useContext(ThemeContext)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    scrollSpy.update()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'py-3 bg-[#050000]/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl'
              : 'py-3 bg-white/80 backdrop-blur-2xl border-b border-slate-200 shadow-xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="hero" smooth={true} duration={600} className="cursor-pointer group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:shadow-red-500/40 transition-all duration-500 overflow-hidden relative">
                  <span className="font-display font-black text-lg relative z-10">JS</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className={`font-display font-black text-xl leading-none tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Jaswin<span className="text-red-500">.</span>
                  </span>
                  <span className={`text-[8px] font-bold uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Cloud Architect
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/5 px-8 py-2.5 rounded-2xl backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`relative cursor-pointer text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    activeSection === link.to 
                      ? 'text-red-500' 
                      : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {activeSection === link.to && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-4">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                  isDark
                    ? 'bg-slate-900 border-white/5 text-amber-400 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/10'
                    : 'bg-white border-slate-200 text-red-600 hover:border-red-600/50 hover:shadow-lg shadow-sm'
                }`}
              >
                {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
              </motion.button>

              {/* Hire Me button (desktop) */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex btn-neon px-7 py-3 text-xs font-black uppercase tracking-widest !bg-red-600"
              >
                Connect
              </motion.a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isDark ? 'text-white bg-slate-900 border border-white/5' : 'text-slate-900 bg-white border border-slate-200 shadow-sm'
                }`}
              >
                {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-20 left-6 right-6 z-40 rounded-3xl overflow-hidden shadow-2xl border ${
              isDark ? 'bg-black/95 border-white/10' : 'bg-white/95 border-slate-200'
            } backdrop-blur-2xl lg:hidden`}
          >
            <div className="p-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-4 px-6 rounded-2xl text-sm font-bold tracking-widest uppercase transition-all ${
                      isDark
                        ? 'text-slate-400 hover:text-white hover:bg-white/5'
                        : 'text-slate-600 hover:text-red-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5">
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="btn-neon w-full py-5 text-sm text-center block cursor-pointer font-black uppercase tracking-[0.2em] !bg-red-600"
                >
                  Initiate Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
