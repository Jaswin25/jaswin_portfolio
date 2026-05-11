import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaCloud, FaBrain, FaServer } from 'react-icons/fa'
const profileImg = '/jazz2.jpeg'



const highlights = [
  { icon: FaCloud, label: 'Cloud & DevOps', desc: 'Azure, Docker, Kubernetes, Linux, Terraform', color: '#ef4444' },
  { icon: FaCode, label: 'Backend Development', desc: 'Node.js, GoLang, Python, REST APIs, Microservices', color: '#dc2626' },
  { icon: FaBrain, label: 'AI & ML', desc: 'scikit-learn, NumPy, Predictive Modeling, NLP', color: '#991b1b' },
  { icon: FaServer, label: 'Networking', desc: 'TCP/IP, VPN, VLAN, Firewall, Network Security', color: '#7f1d1d' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function About({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={item} className="text-center mb-16 lg:mb-24">
            <p className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">Discovery</p>
            <h2 className={`text-4xl md:text-5xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              About <span className="neon-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <motion.div variants={item} className="space-y-8">
              {/* Code block badge */}
              <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl font-mono text-xs border ${isDark ? 'bg-slate-900/50 border-red-500/10 text-red-300' : 'bg-red-50 border-red-200 text-red-600 shadow-sm'}`}>
                <span className="text-red-400">const</span>
                <span className="text-rose-400">developer</span>
                <span className="text-white">=</span>
                <span className="text-amber-400">"Jaswin R S"</span>
              </div>

              <div className="space-y-6">
                <p className={`text-lg md:text-xl leading-relaxed font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  I'm a <span className="text-red-500">Cloud & DevOps Architect</span> dedicated to bridging the gap between development and scalable infrastructure.
                </p>

                <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  With a deep passion for <span className="text-white font-medium">automation</span> and <span className="text-white font-medium">performance</span>, I specialize in building cloud-native systems that are both resilient and efficient. My expertise ranges from Kubernetes orchestration to architecting secure network frameworks.
                </p>
              </div>

              {/* Key skills tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {['React.js', 'GoLang', 'Node.js', 'Python', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Linux'].map(tag => (
                  <span 
                    key={tag} 
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                      isDark 
                      ? 'bg-red-950/20 border-red-500/10 text-red-200 hover:border-red-500/30' 
                      : 'bg-white border-red-200 text-red-700 hover:border-red-400 hover:shadow-sm'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Highlight cards */}
            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, label, desc, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-8 group relative"
                >
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg]"
                    style={{ background: `rgba(220, 38, 38, 0.08)`, border: `1px solid rgba(220, 38, 38, 0.2)` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#DC2626' }} />
                  </div>
                  <h3 className={`font-display font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>{label}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{desc}</p>
                </motion.div>
              ))}

              {/* Profile/Quick Info */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card p-8 sm:col-span-2 border-red-500/20"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg shadow-red-600/20 border border-red-500/20">
                      <img src={profileImg} alt="Jaswin" className="w-full h-full object-cover object-top" />

                    </div>

                  <div className="text-center sm:text-left">
                    <h3 className={`font-display font-extrabold text-2xl ${isDark ? 'text-white' : 'text-slate-900'}`}>Jaswin R S</h3>
                    <p className="text-red-400 text-sm font-mono tracking-wide mt-1">Full-Stack | Cloud Architect | AI/ML</p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className={`text-xs font-medium ${isDark ? 'text-red-400' : 'text-red-500'}`}>Exploring Future Technologies</span>
                    </div>
                  </div>
                  <div className="sm:ml-auto">
                    <button className="px-6 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold hover:bg-red-500 hover:text-white transition-all duration-300">
                      Let's Connect
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
