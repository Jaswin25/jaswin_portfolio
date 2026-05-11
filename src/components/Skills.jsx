import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDocker, FaLinux
} from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiGo, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiKubernetes, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'
import { MdNetworkWifi, MdSecurity } from 'react-icons/md'
import { HiCpuChip } from 'react-icons/hi2'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#FF0000',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact, level: 90, color: '#ef4444' },
      { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#dc2626' },
      { name: 'HTML5', icon: FaHtml5, level: 95, color: '#b91c1c' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#991b1b' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88, color: '#7f1d1d' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#DC2626',
    icon: FaNodeJs,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 85, color: '#ef4444' },
      { name: 'Python', icon: FaPython, level: 85, color: '#dc2626' },
      { name: 'GoLang', icon: SiGo, level: 75, color: '#b91c1c' },
      { name: 'Express.js', icon: SiExpress, level: 85, color: '#991b1b' },
    ]
  },
  {
    id: 'database',
    label: 'Database',
    color: '#991B1B',
    icon: SiMongodb,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82, color: '#ef4444' },
      { name: 'MongoDB', icon: SiMongodb, level: 80, color: '#dc2626' },
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#b91c1c' },
    ]
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    color: '#DC2626',
    icon: FaDocker,
    skills: [
      { name: 'Azure', icon: VscAzure, level: 80, color: '#ef4444' },
      { name: 'DevOps', icon: VscAzureDevops, level: 85, color: '#dc2626' },
      { name: 'Docker', icon: FaDocker, level: 82, color: '#b91c1c' },
      { name: 'Kubernetes', icon: SiKubernetes, level: 72, color: '#991b1b' },
    ]
  },
  {
    id: 'networking',
    label: 'Networking & Security',
    color: '#7F1D1D',
    icon: MdNetworkWifi,
    skills: [
      { name: 'TCP/IP', icon: MdNetworkWifi, level: 85, color: '#ef4444' },
      { name: 'DNS & VLAN', icon: MdNetworkWifi, level: 80, color: '#dc2626' },
      { name: 'VPN', icon: MdSecurity, level: 78, color: '#b91c1c' },
      { name: 'Firewall Config', icon: MdSecurity, level: 78, color: '#991b1b' },
    ]
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

function SkillCard({ skill, isVisible, isDark }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 ${isDark ? '' : 'hover:bg-slate-50'}`}>
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `rgba(${hexToRgb(skill.color)}, 0.08)`, border: `1px solid rgba(${hexToRgb(skill.color)}, 0.2)` }}
      >
        <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm font-bold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{skill.name}</span>
          <span className="text-[10px] font-mono font-bold text-red-500">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-red-950/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ 
              background: `linear-gradient(90deg, #FF0000, #991B1B)`,
              boxShadow: `0 0 10px rgba(255, 0, 0, 0.4)`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Skills({ isDark }) {
  const [activeTab, setActiveTab] = useState('frontend')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const activeCategory = skillCategories.find(c => c.id === activeTab)

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-16 lg:mb-20">
            <p className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">Technical Arsenal</p>
            <h2 className={`text-4xl md:text-5xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              My <span className="neon-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map(cat => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-500 border-2 ${
                  activeTab === cat.id
                    ? 'border-red-500 bg-red-500/10 text-red-400 shadow-lg shadow-red-500/10'
                    : isDark
                    ? 'border-slate-800 bg-slate-900/50 text-slate-500 hover:border-slate-700 hover:text-slate-300'
                    : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-600'
                }`}
              >
                <cat.icon className="w-4 h-4" style={{ color: activeTab === cat.id ? '#ef4444' : undefined }} />
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-500/5 to-transparent blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/5">
              <div className="flex items-center gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500"
                  style={{ background: `rgba(220, 38, 38, 0.1)`, border: `1px solid rgba(220, 38, 38, 0.2)` }}
                >
                  <activeCategory.icon className="w-7 h-7" style={{ color: '#DC2626' }} />
                </div>
                <div>
                  <h3 className={`text-2xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeCategory.label}</h3>
                  <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{activeCategory.skills.length} Advanced Skills</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
              {activeCategory.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} isVisible={inView} isDark={isDark} />
              ))}
            </div>
          </motion.div>
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


