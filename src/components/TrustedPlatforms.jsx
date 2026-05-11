import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiTicket, HiShoppingCart, HiScale, HiUser } from 'react-icons/hi2'

const platforms = [
  {
    id: 1,
    name: 'TicPin Platform',
    desc: 'Event ticket booking platform — seat selection, QR tickets, and seamless payment integration.',
    url: 'https://www.ticpin.in/dining',
    icon: HiTicket,
    color: '#FF0000',
    badge: '⭐ Trusted Partner',
    tags: ['React', 'Booking', 'Tickets'],
  },
  {
    id: 2,
    name: 'Quick Canteen Demo',
    desc: 'Real-time canteen food ordering system with live order tracking and admin dashboard.',
    url: '#',
    icon: HiShoppingCart,
    color: '#DC2626',
    badge: 'Live Demo',
    tags: ['GoLang', 'Real-time', 'Food'],
  },
  {
    id: 3,
    name: 'Ofran LegalTech',
    desc: 'Modern legal services platform connecting lawyers and clients with secure document management.',
    url: 'https://www.ofran.in/',
    icon: HiScale,
    color: '#991B1B',
    badge: 'Platform',
    tags: ['LegalTech', 'MongoDB', 'React'],
  },
  {
    id: 4,
    name: 'LinkedIn Profile',
    desc: 'Connect with me professionally — view my full work history, recommendations, and achievements.',
    url: 'https://www.linkedin.com/in/jaswin-r-s-9155702a5?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: FaLinkedin,
    color: '#DC2626',
    badge: 'Connect',
    tags: ['Professional', 'Network'],
  },
  {
    id: 5,
    name: 'GitHub Portfolio',
    desc: 'Browse all my open-source projects, code repositories, and contributions on GitHub.',
    url: 'https://github.com/jaswinrs',
    icon: FaGithub,
    color: '#7F1D1D',
    badge: 'Open Source',
    tags: ['Code', 'Repos', 'Projects'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

export default function TrustedPlatforms({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="platforms" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-800/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-14">
            <p className="text-red-500 font-mono text-sm tracking-widest uppercase mb-3">Ecosystem</p>
            <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Trusted Platforms & <span className="neon-text">Links</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-4" />
            <p className={`mt-4 text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Platforms I've built, contributed to, or maintain a professional presence on.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map(platform => (
              <motion.a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="glass-card p-6 group cursor-pointer block relative overflow-hidden"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(90deg, ${platform.color}, transparent)` }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `rgba(${hexToRgb(platform.color)}, 0.12)`,
                      border: `1px solid rgba(${hexToRgb(platform.color)}, 0.3)`
                    }}
                  >
                    <platform.icon className="w-6 h-6" style={{ color: platform.color }} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                      style={{
                        color: platform.color,
                        borderColor: `rgba(${hexToRgb(platform.color)}, 0.4)`,
                        background: `rgba(${hexToRgb(platform.color)}, 0.1)`
                      }}
                    >
                      {platform.badge}
                    </span>
                  </div>
                </div>

                <h3 className={`font-display font-bold text-base mb-2 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {platform.name}
                  <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: platform.color }} />
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  {platform.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {platform.tags.map(tag => (
                    <span key={tag} className="tech-badge text-xs py-0.5">{tag}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
