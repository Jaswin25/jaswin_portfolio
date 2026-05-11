import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { HiCheckCircle } from 'react-icons/hi2'

const experiences = [
  {
    id: 1,
    company: 'Novitech',
    role: 'Full-Stack & Cloud/DevOps Intern',
    period: '2023 – 2024',
    location: 'India',
    color: '#FF0000',
    badge: 'Full-Stack & Cloud/DevOps',
    achievements: [
      'Built and deployed scalable cloud infrastructure using Azure and Docker',
      'Developed scalable REST APIs with PostgreSQL backend',
      'Automated deployment workflows, reducing release time by 40%',
      'Improved backend performance by optimizing database queries',
      'Designed responsive UI/UX components following modern design systems',
    ]
  },
  {
    id: 2,
    company: 'CodeBind Technologies',
    role: 'Web Development Intern',
    period: '2023',
    location: 'India',
    color: '#DC2626',
    badge: 'Frontend',
    achievements: [
      'Developed responsive React frontend applications with modern UI',
      'Built CRUD systems with full API integration',
      'Created RESTful API integrations for seamless data flow',
      'Collaborated with cross-functional teams on product features',
    ]
  },
  {
    id: 3,
    company: 'ATS Company',
    role: 'Digital Marketing Intern',
    period: '2022',
    location: 'India',
    color: '#991B1B',
    badge: 'Marketing',
    achievements: [
      'Managed and optimized SEO campaigns for multiple clients',
      'Increased organic traffic by 35% through content strategy',
      'Improved user engagement and conversion metrics',
      'Analyzed marketing analytics and generated performance reports',
    ]
  },
  {
    id: 4,
    company: 'TicPin Platform',
    role: 'Frontend Developer & UI/UX Designer',
    period: '2024 – Present',
    location: 'Remote',
    color: '#EF4444',
    badge: '⭐ Trusted Project',
    isTrusted: true,
    achievements: [
      'Developed responsive ticket booking interfaces for 1000+ users',
      'Designed and built complete React frontend component library',
      'Improved UX through user research and iterative design',
      'Built complex booking workflows with seat selection & QR generation',
      'Collaborated closely with backend teams on API integration',
    ]
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r},${g},${b}`
}

export default function Experience({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-16">
            <p className="text-red-500 font-mono text-sm tracking-widest uppercase mb-3">Work History</p>
            <h2 className={`section-title ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My <span className="neon-text">Experience</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-4" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 timeline-line hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="relative flex gap-6 sm:gap-10"
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
                    <div
                      className="timeline-dot mt-1.5 z-10"
                      style={{ boxShadow: `0 0 20px rgba(${hexToRgb(exp.color)}, 0.5)`, background: `linear-gradient(135deg, ${exp.color}, #450a0a)` }}
                    />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.01, x: 4 }}
                    className={`flex-1 glass-card p-6 sm:p-7 relative overflow-hidden ${exp.isTrusted ? 'border-pink-500/30' : ''}`}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                    />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <HiBriefcase className="w-4 h-4" style={{ color: exp.color }} />
                          <h3 className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</span>
                          <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                            <HiCalendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                            <HiLocationMarker className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${exp.isTrusted ? 'animate-pulse' : ''}`}
                        style={{
                          color: exp.color,
                          borderColor: `rgba(${hexToRgb(exp.color)}, 0.4)`,
                          background: `rgba(${hexToRgb(exp.color)}, 0.1)`
                        }}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((a, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <HiCheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: exp.color }} />
                          <span className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{a}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Trusted badge footer */}
                    {exp.isTrusted && (
                      <div className="mt-4 pt-4 border-t border-red-500/20 flex items-center justify-between">
                        <span className="text-xs text-red-500 font-mono">✦ Trusted Platform Collaboration</span>
                        <a
                          href="https://ticpin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1 rounded-lg border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-colors"
                        >
                          Visit Platform ↗
                        </a>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
