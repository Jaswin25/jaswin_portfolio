import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'jaswinjazz25@gmail.com', href: 'mailto:jaswinjazz25@gmail.com', color: '#FF0000' },
  { icon: FaPhone, label: 'Phone', value: '+91 96296 12006', href: 'tel:+919629612006', color: '#DC2626' },
  { icon: HiLocationMarker, label: 'Location', value: 'India', href: '#', color: '#991B1B' },
]

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/jaswinrs', color: '#f8fafc' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaswin-r-s-9155702a5?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#EF4444' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:jaswinjazz25@gmail.com', color: '#DC2626' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Contact({ isDark }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    
    setSending(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSending(false)
    setSent(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `${r},${g},${b}`
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-800/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-16 lg:mb-20">
            <p className="text-red-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">Communication</p>
            <h2 className={`text-4xl md:text-5xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Get In <span className="neon-text">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <motion.div variants={item} className="lg:col-span-2 space-y-6">
              {/* Status Badge */}
              <div className="glass-card p-6 flex items-center gap-5 border-red-500/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-white font-extrabold text-2xl font-display shadow-lg shadow-red-500/20">
                  JS
                </div>
                <div>
                  <h3 className={`text-xl font-display font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Jaswin R S</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Active & Available</span>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="glass-card p-5 flex items-center gap-5 group cursor-pointer border-white/5"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:rotate-[360deg]"
                      style={{ background: `rgba(220, 38, 38, 0.08)`, border: `1px solid rgba(220, 38, 38, 0.2)` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#DC2626' }} />
                    </div>
                    <div>
                      <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</p>
                      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Connect */}
              <div className="glass-card p-8 border-white/5">
                <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Connect Elsewhere</p>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5, color: color }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isDark ? 'bg-red-950/20 hover:bg-red-900/30' : 'bg-red-50 hover:bg-red-100 shadow-sm'
                      }`}
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" style={{ color: isDark ? '#94a3b8' : '#64748b' }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Modern Form */}
            <motion.div variants={item} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-12 space-y-8 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-800" />
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Cooper"
                      className="form-input !bg-red-950/20 !border-red-500/10 focus:!border-red-500/50 !rounded-2xl py-4"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="form-input !bg-red-950/20 !border-red-500/10 focus:!border-red-500/50 !rounded-2xl py-4"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Subject of Inquiry</label>
                  <input
                    type="text"
                    required
                    placeholder="Collaboration Opportunity"
                    className="form-input !bg-slate-900/50 !border-white/5 focus:!border-red-500/50 !rounded-2xl py-4"
                    value={formState.subject}
                    onChange={e => setFormState({ ...formState, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-[10px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Your Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project or just say hi..."
                    className="form-input !bg-slate-900/50 !border-white/5 focus:!border-red-500/50 !rounded-2xl py-4 resize-none"
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-neon py-5 text-sm font-bold disabled:opacity-70 flex items-center justify-center gap-3 !rounded-2xl !bg-red-600"
                >
                  {sent ? (
                    <>
                      <span className="text-lg">✨</span>
                      <span>Message Sent Successfully</span>
                    </>
                  ) : sending ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Initiate Contact</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
