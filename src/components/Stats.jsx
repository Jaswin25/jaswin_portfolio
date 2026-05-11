import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+', emoji: '🚀', color: '#FF0000' },
  { label: 'Technologies Used', value: 30, suffix: '+', emoji: '⚡', color: '#DC2626' },
  { label: 'Months Experience', value: 18, suffix: '+', emoji: '💼', color: '#991B1B' },
  { label: 'Certifications', value: 5, suffix: '', emoji: '🏆', color: '#7F1D1D' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Stats({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-red-50/30'}`} />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-20">
            <p className="text-red-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Performance Metrics</p>
            <h2 className={`text-4xl md:text-5xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Impact & <span className="neon-text">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-8 sm:p-10 text-center group border-white/5"
              >
                {/* Emoji Float */}
                <motion.div
                  className="text-4xl mb-6 inline-block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  {stat.emoji}
                </motion.div>

                {/* Number Display */}
                <div className="stat-number text-5xl sm:text-6xl font-black mb-4 tracking-tighter">
                  {stat.value}{stat.suffix}
                </div>

                {/* Label */}
                <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                  {stat.label}
                </p>

                {/* Animated underline */}
                <div 
                  className="h-1 mx-auto mt-8 rounded-full transition-all duration-500 w-8 group-hover:w-20"
                  style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
