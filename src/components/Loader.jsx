import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="loader-container flex-col gap-8 !bg-[#050000]"
    >
      {/* Logo / Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-800 flex items-center justify-center text-xl font-bold text-white shadow-neon font-display">
            JR
          </div>
          <div>
            <h1 className="text-white font-display font-bold text-2xl tracking-tight">Jaswin R S</h1>
            <p className="text-slate-500 text-sm font-mono">Full-Stack Developer | Cloud & DevOps Engineer</p>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-0.5 bg-red-950/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-red-500 via-red-800 to-red-500 rounded-full"
            style={{ backgroundSize: '200% auto' }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-red-500/50 text-xs font-mono mt-3 tracking-widest uppercase"
        >
          Initializing Portfolio...
        </motion.p>
      </motion.div>

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-red-500/5"
            style={{ width: i * 200, height: i * 200 }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-800/5 rounded-full blur-3xl" />
    </motion.div>
  )
}
