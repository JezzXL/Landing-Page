import { useEffect, useState, Suspense, lazy } from 'react'
import { ChevronDown } from 'lucide-react'
import Grid3D from './Hero/Grid3D'
import FloatingParticles from './Hero/FloatingParticles'
import HeroContent from './Hero/HeroContent'

// Lazy load do Scene3D para melhor performance
const Scene3D = lazy(() => import('./Hero/Scene3D'))

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setMounted(true)
    })
    
    return () => cancelAnimationFrame(timer)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background com gradiente azul/cyan (tema construção) */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900">
        <Grid3D scrollY={scrollY} />
        <FloatingParticles />
        
        {/* Scene 3D com Three.js */}
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
        
        {/* Blueprint pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.3) 2px, rgba(59, 130, 246, 0.3) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.3) 2px, rgba(59, 130, 246, 0.3) 4px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <HeroContent mounted={mounted} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-blue-400" />
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