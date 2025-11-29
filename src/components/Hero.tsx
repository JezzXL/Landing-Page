import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Grid3D from './Hero/Grid3D'
import FloatingParticles from './Hero/FloatingParticles'
import Building3D from './Hero/Building3D'
import HeroContent from './Hero/HeroContent'

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Usa requestAnimationFrame para evitar setState síncrono
    const timer = requestAnimationFrame(() => {
      setMounted(true)
    })
    
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black">
        <Grid3D scrollY={scrollY} />
        <FloatingParticles />
        <Building3D scrollY={scrollY} />
      </div>

      {/* Conteúdo principal */}
      <HeroContent mounted={mounted} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>

      {/* Estilos inline para animações */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}