import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiTag, HiStar } from 'react-icons/hi2'

const projects = [
  {
    id: 1,
    title: 'Quick Canteen',
    subtitle: 'Food Ordering Ecosystem',
    description: 'A real-time food ordering platform with token generation, live tracking, and comprehensive admin dashboard. Built for high-speed operations.',
    tech: ['React', 'GoLang', 'PostgreSQL', 'WebSocket'],
    color: '#ef4444',
    gradient: 'from-red-500/20 to-red-900/10',
    emoji: '🍔',
    features: ['Token generation', 'Live order tracking', 'Admin dashboard', 'Real-time serve'],
    github: '#',
    demo: '#',
    category: 'Cloud & DevOps',
  },
  {
    id: 2,
    title: 'Experienced India',
    subtitle: 'Trust-Based Experience Platform',
    description: "A secure, verified platform showcasing India's finest experiences. Built on a foundation of trust, providing authentic itineraries and expert-vetted cultural insights.",
    tech: ['React', 'Next.js', 'Mapbox', 'Tailwind'],
    color: '#dc2626',
    gradient: 'from-red-600/20 to-red-950/10',
    emoji: '🇮🇳',
    features: ['Curated itineraries', 'Interactive maps', 'Cultural insights', 'Booking UI'],
    github: '#',
    demo: 'https://experiencedindia.com',
    category: 'Travel & Culture',
    featured: true,
    trusted: true,
  },
  {
    id: 3,
    title: 'TicPin Booking',
    subtitle: 'Event Management System',
    description: 'A premium ticketing platform with seat selection, QR generation, and modern user dashboard. Built for seamless experiences.',
    tech: ['React', 'Node.js', 'Express.js'],
    color: '#991b1b',
    gradient: 'from-red-700/20 to-red-950/10',
    emoji: '🎫',
    features: ['Seat selection', 'QR generation', 'Payment UI', 'User dashboard'],
    github: '#',
    demo: 'https://www.ticpin.in/dining',
    category: 'Booking Platform',
    trusted: true,
  },
  {
    id: 4,
    title: 'Ofran LegalTech',
    subtitle: 'Legal Services Gateway',
    description: 'Modern legal platform connecting lawyers with clients. Features dual dashboards, appointment booking, and document management.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    color: '#7f1d1d',
    gradient: 'from-red-600/20 to-red-950/10',
    emoji: '⚖️',
    features: ['Lawyer & client dashboards', 'Secure auth', 'Document management', 'Case tracking'],
    github: '#',
    demo: 'https://www.ofran.in/',
    category: 'LegalTech',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}


function ProjectCard({ project, isDark }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={item}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-slate-950/60 rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/10"
    >
      {/* Visual Area */}
      <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Animated Background Elements */}
        <motion.div 
          animate={hovered ? { scale: 1.2, opacity: 0.3 } : { scale: 1, opacity: 0.1 }}
          className="absolute inset-0 bg-grid pointer-events-none" 
        />
        
        {/* Project Icon/Emoji */}
        <motion.div
          animate={hovered ? { y: -10, scale: 1.1, rotate: [0, -5, 5, 0] } : { y: 0, scale: 1 }}
          className="text-7xl z-10 filter drop-shadow-2xl"
        >
          {project.emoji}
        </motion.div>

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {project.featured && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-500 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
              <HiStar className="w-3 h-3" />
              Featured
            </div>
          )}
          {project.trusted && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
              Verified
            </div>
          )}
        </div>

        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-white/70 text-[10px] font-mono backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className={`text-2xl font-display font-extrabold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {project.title}
            </h3>
            <p className="text-sm font-medium text-red-500">{project.subtitle}</p>
          </div>
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              whileHover={{ y: -3, color: '#DC2626' }}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <p className={`text-sm leading-relaxed mb-6 line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span 
              key={t} 
              className="px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-tighter"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-red-600 text-white font-bold text-sm shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all group"
        >
          View Project
          <FaExternalLinkAlt className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default function Projects({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `${r},${g},${b}`
  }

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-20">
            <p className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">Masterpieces</p>
            <h2 className={`text-4xl md:text-5xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Featured <span className="neon-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} isDark={isDark} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
