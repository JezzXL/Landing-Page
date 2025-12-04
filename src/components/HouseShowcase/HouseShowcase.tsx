import { useState, useEffect, useRef } from 'react'
import HouseScene from './HouseScene'

export default function HouseShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollTop = window.scrollY - container.offsetTop
      const scrollHeight = container.scrollHeight - window.innerHeight

      if (scrollTop < 0) {
        setScrollProgress(0)
      } else if (scrollTop > scrollHeight) {
        setScrollProgress(1)
      } else {
        setScrollProgress(scrollTop / scrollHeight)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Configuração de cada card com distância personalizada
  const cardsConfig = [
    {
      title: "Sala de Estar",
      description: "Amplo ambiente integrado com pé-direito duplo e iluminação natural abundante",
      features: ['42m²', 'Ar condicionado', 'Home theater'],
      position: "left" as const,
      spacing: 0, // Altura antes do card aparecer (em vh)
      height: 0, // Altura do card (em vh)
    },
    {
      title: "Cozinha Gourmet",
      description: "Planejada com ilha central, eletrodomésticos premium e acabamento em porcelanato",
      features: ['25m²', 'Fogão cooktop', 'Adega climatizada'],
      position: "right" as const,
      spacing: 0,
      height: 120,
    },
    {
      title: "Área de Jantar",
      description: "Espaço sofisticado com mesa para 8 pessoas e vista panorâmica para o jardim",
      features: ['18m²', 'Iluminação decorativa', 'Deck integrado'],
      position: "left" as const,
      spacing: 40,
      height: 40,
    },
    {
      title: "Hall de Circulação",
      description: "Corredor amplo com armários planejados e acabamento em madeira nobre",
      features: ['12m²', 'Closet', 'Iluminação LED'],
      position: "right" as const,
      spacing: 60,
      height: 130,
    },
    {
      title: "Escritório / Home Office",
      description: "Ambiente privativo ideal para trabalho remoto com estante planejada",
      features: ['15m²', 'Estante embutida', 'Iluminação focada'],
      position: "left" as const,
      spacing: 60,
      height: 100,
    },
    {
      title: "Banheiro Social",
      description: "Acabamento em mármore com box blindex e iluminação LED indireta",
      features: ['8m²', 'Box blindex', 'Ducha elétrica'],
      position: "right" as const,
      spacing: 90,
      height: 100,
    },
    {
      title: "Suíte Master",
      description: "Quarto principal com closet, varanda privativa e vista privilegiada",
      features: ['35m²', 'Closet 8m²', 'Varanda 6m²'],
      position: "left" as const,
      spacing: 70,
      height: 100,
    },
  ]

  return (
    <div ref={containerRef} className="relative bg-slate-900">
      {/* Seção 3D (sticky) */}
      <HouseScene scrollProgress={scrollProgress} />

      {/* Conteúdo com informações */}
      <div className="relative z-10 pointer-events-none">
        {cardsConfig.map((card, index) => (
          <div key={index}>
            {/* Espaçamento antes do card */}
            {card.spacing > 0 && (
              <div style={{ height: `${card.spacing}vh` }} />
            )}
            
            {/* Card */}
            <InfoCard
              title={card.title}
              description={card.description}
              features={card.features}
              position={card.position}
              height={card.height}
            />
          </div>
        ))}

        {/* Espaçamento final */}
        <div className="h-screen" />
      </div>
    </div>
  )
}

interface InfoCardProps {
  title: string
  description: string
  features: string[]
  position: 'left' | 'right'
  height: number
}

function InfoCard({ title, description, features, position, height }: InfoCardProps) {
  return (
    <div 
      className={`flex items-center ${position === 'left' ? 'justify-start' : 'justify-end'} px-8 md:px-12`}
      style={{ height: `${height}vh` }}
    >
      <div className={`pointer-events-auto max-w-md p-6 md:p-8 bg-gradient-to-br from-blue-900/95 to-cyan-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl ${
        position === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">{description}</p>
        
        {/* Features badges */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-200 text-sm font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}