interface Particle {
  width: number
  height: number
  left: number
  top: number
  opacity: number
  duration: number
  delay: number
  color: string
}

const generateParticles = (): Particle[] => {
  const colors = ['bg-blue-500', 'bg-cyan-500', 'bg-blue-400', 'bg-cyan-400']
  
  return Array.from({ length: 30 }, () => ({
    width: Math.random() * 4 + 2,
    height: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
}

const PARTICLES = generateParticles()

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0">
      {PARTICLES.map((particle, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${particle.color}`}
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}