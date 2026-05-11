import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCheckBadge } from 'react-icons/hi2'
import { SiRedhat, SiPython } from 'react-icons/si'
import { FaLinux } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'

const certifications = [
  {
    id: 1,
    title: 'Microsoft Azure Fundamentals',
    code: 'AZ-900',
    issuer: 'Microsoft',
    icon: VscAzure,
    color: '#ef4444',
    year: '2023',
    desc: 'Core Azure cloud concepts, services, and pricing models.',
    verified: true,
  },
  {
    id: 2,
    title: 'Azure Administrator Associate',
    code: 'AZ-104',
    issuer: 'Microsoft',
    icon: VscAzure,
    color: '#dc2626',
    year: '2023',
    desc: 'Managing Azure identities, governance, storage, compute, and networking.',
    verified: true,
  },
  {
    id: 3,
    title: 'Red Hat Certified System Administrator',
    code: 'RHCSA',
    issuer: 'Red Hat',
    icon: SiRedhat,
    color: '#b91c1c',
    year: '2023',
    desc: 'Linux system administration, file systems, and automation with RHEL.',
    verified: true,
  },
  {
    id: 4,
    title: 'Python for Data Science',
    code: 'PDS-101',
    issuer: 'IBM',
    icon: SiPython,
    color: '#991b1b',
    year: '2023',
    desc: 'Enterprise Linux administration and system management.',
    verified: true,
  },
  {
    id: 5,
    title: 'Python Programming Certification',
    code: 'Python',
    issuer: 'Python Institute',
    icon: SiPython,
    color: '#3776ab',
    year: '2022',
    desc: 'Core Python programming, OOP, data structures, and algorithms.',
    verified: true,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
}


export default function Certifications({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `${r},${g},${b}`
  }

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-16 lg:mb-24">
            <p className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">Credentials</p>
            <h2 className={`text-4xl md:text-5xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My <span className="neon-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Certs grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map(cert => (
              <motion.div
                key={cert.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 group relative"
              >
                {/* Visual Area */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg]"
                    style={{
                      background: `rgba(220, 38, 38, 0.08)`,
                      border: `1px solid rgba(220, 38, 38, 0.2)`
                    }}
                  >
                    <cert.icon className="w-8 h-8" style={{ color: '#DC2626' }} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest"
                      style={{ background: `rgba(220, 38, 38, 0.1)`, color: '#DC2626' }}
                    >
                      {cert.code}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Title & Info */}
                <h3 className={`text-xl font-display font-extrabold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  {cert.verified && (
                    <HiCheckBadge className="w-5 h-5 text-red-500" />
                  )}
                  <span className="text-sm font-bold text-red-500 tracking-wide uppercase">{cert.issuer}</span>
                </div>

                <p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {cert.desc}
                </p>

                {/* Footer Stamp */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <HiAcademicCap className="w-4 h-4 text-red-500" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Verified Professional
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Upcoming/Teaser card */}
            <motion.div
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 border-dashed border-red-500/20 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HiAcademicCap className="w-8 h-8 text-red-500/30" />
              </div>
              <p className={`text-base font-bold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                More on the way...
              </p>
              <p className={`text-xs font-mono text-red-500/50 uppercase tracking-widest`}>
                AZ-305, CKA, AWS-CS
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


