import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import {
  FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaEye,
  FaReact, FaNodeJs, FaPython, FaDocker, FaLinux

} from 'react-icons/fa'
import { SiGo, SiKubernetes, SiMongodb, SiTailwindcss } from 'react-icons/si'
const profileImg = '/jazz2.jpeg'



const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/jaswinrs', label: 'GitHub', color: '#f8fafc' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jaswin-r-s-9155702a5?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn', color: '#ef4444' },
  { icon: FaEnvelope, href: 'mailto:jaswinjazz25@gmail.com', label: 'Email', color: '#dc2626' },
]

const floatingIcons = [
  { Icon: FaReact, color: '#ef4444', x: '5%', y: '15%', size: 32, delay: 0 },
  { Icon: FaNodeJs, color: '#dc2626', x: '92%', y: '10%', size: 28, delay: 1 },
  { Icon: FaPython, color: '#b91c1c', x: '88%', y: '85%', size: 30, delay: 2 },
  { Icon: FaDocker, color: '#991b1b', x: '8%', y: '80%', size: 28, delay: 1.5 },
  { Icon: SiGo, color: '#ef4444', x: '12%', y: '50%', size: 26, delay: 0.5 },
  { Icon: SiKubernetes, color: '#dc2626', x: '85%', y: '40%', size: 26, delay: 2.5 },
]

export default function Hero({ isDark }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Premium Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-800/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, color, x, y, size, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden xl:flex items-center justify-center pointer-events-none z-10"
          style={{ left: x, top: y }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6 + i, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <div
            className="p-3 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-xl"
            style={{ boxShadow: `0 0 20px rgba(220, 38, 38, 0.15)` }}
          >
            <Icon style={{ color, fontSize: size }} />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className={`text-xs font-mono tracking-wider ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                Available for New Challenges
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Building the <span className="neon-text">Future</span> of Cloud & Web
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-xl md:text-2xl font-display font-medium mb-8 min-h-[40px] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            >
              I'm <span className="text-red-500 font-bold">Jaswin R S</span>, a <br className="md:hidden" />
              <TypeAnimation
                sequence={[
                  'Cloud Computing Engineer', 2000,
                  'Full-Stack Developer', 2000,
                  'DevOps Specialist', 2000,
                  'AI Enthusiast', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg max-w-xl mb-10 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Architecting scalable cloud solutions and crafting high-performance web experiences.
              Specialized in <span className="text-red-400 border-b border-red-400/30">DevOps automation</span> and modern architecture.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12"
            >
              <motion.a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon flex items-center gap-2 px-10 py-4 text-base"
              >
                <FaEye className="w-4 h-4" />
                View Resume
              </motion.a>

            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, color: '#FF0000' }}
                  className={`text-2xl transition-colors duration-300 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="flex-1 relative order-1 lg:order-2 lg:-translate-y-12"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] mx-auto">
              {/* Background Geometric Shapes */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-red-900/20 rounded-3xl rotate-6 blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-bl from-red-500/10 to-red-700/10 rounded-3xl -rotate-6" />

              {/* Image Container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm group">
                <img
                  src={profileImg}
                  alt="Jaswin R S"
                  className="w-full h-full object-cover object-mid transition-transform duration-700 group-hover:scale-110"

                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 p-4 glass-card bg-white/10 border-white/20 backdrop-blur-xl rounded-2xl shadow-xl z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                    <FaReact className="animate-spin-slow" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Experience</p>
                    <p className="text-sm font-display font-bold text-white">Cloud Expert</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 p-4 glass-card bg-white/10 border-white/20 backdrop-blur-xl rounded-2xl shadow-xl z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-800 flex items-center justify-center text-white">
                    <SiKubernetes />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Focus</p>
                    <p className="text-sm font-display font-bold text-white">DevOps & AI</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center p-1 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}
        >
          <div className="w-1 h-2 bg-red-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}
