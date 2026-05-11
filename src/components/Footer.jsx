import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com/Jaswin25', label: 'GitHub' },

  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jaswin-r-s-9155702a5?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:jaswinjazz25@gmail.com', label: 'Email' },
]

export default function Footer({ isDark }) {
  return (
    <footer className={`relative border-t ${isDark ? 'border-red-950/20 bg-[#050000]/80' : 'border-red-100 bg-white/80'} backdrop-blur-xl`}>
      {/* Top accent line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-sm font-bold text-white shadow-neon">
                JR
              </div>
              <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Jaswin <span className="text-red-500">R S</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Full-Stack Developer | Cloud Computing & DevOps Engineer | AI/ML & Networking Enthusiast.
            </p>
            <div className="flex items-center gap-1 mt-3">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 text-xs">Available for opportunities</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className={`font-display font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className={`text-sm cursor-pointer transition-colors duration-200 ${
                    isDark ? 'text-slate-400 hover:text-red-500' : 'text-slate-500 hover:text-red-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className={`font-display font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Connect</h3>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3, color: '#ff0000' }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    isDark ? 'bg-slate-900 hover:bg-slate-800 text-slate-300' : 'bg-red-50 hover:bg-red-100 text-red-600 shadow-sm'
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              jaswinjazz25@gmail.com<br />
              +91 9629612006
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${isDark ? 'border-red-950/20' : 'border-red-100'}`}>
          <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} Jaswin R S. All rights reserved.
          </p>
          <p className={`text-xs flex items-center gap-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Built with <FaHeart className="w-3 h-3 text-red-500 animate-pulse" /> using React + Tailwind + Framer Motion
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs text-red-500 font-mono">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
