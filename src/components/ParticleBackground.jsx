import { useEffect, useRef } from 'react'

export default function ParticleBackground({ isDark }) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let mouse = { x: null, y: null, radius: 150 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.baseX = this.x
        this.baseY = this.y
        this.density = Math.random() * 30 + 1
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
        this.color = isDark
          ? `rgba(${Math.random() > 0.5 ? '220,38,38' : '127,29,29'}, ${this.opacity})`
          : `rgba(${Math.random() > 0.5 ? '200,30,30' : '150,20,20'}, ${this.opacity * 0.5})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= (dx / distance) * force * 2
            this.y -= (dy / distance) * force * 2
          }
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const initParticles = () => {
      particles = []
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000))
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15
            ctx.save()
            ctx.strokeStyle = isDark
              ? `rgba(220, 38, 38, ${opacity})`
              : `rgba(200, 30, 30, ${opacity * 0.5})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      connectParticles()
      animRef.current = requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
