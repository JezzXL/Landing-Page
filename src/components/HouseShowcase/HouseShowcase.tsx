import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HouseScene from './HouseScene'

export default function HouseShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentRoom, setCurrentRoom] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Configuração de cada card com distância personalizada
  const cardsConfig = [
    {
      title: "Sala de Estar",
      description: "Amplo ambiente integrado com pé-direito duplo e iluminação natural abundante",
      features: ['42m²', 'Ar condicionado', 'Home theater'],
      position: "left" as const,
      spacing: 0,
      height: 0,
    },
    {
      title: "Cozinha Gourmet",
      description: "Planejada com ilha central, eletrodomésticos premium e acabamento em porcelanato",
      features: ['25m²', 'Fogão cooktop', 'Adega climatizada'],
      position: "right" as const,
      spacing: 70,
      height: 120,
    },
    {
      title: "Área de Jantar",
      description: "Espaço sofisticado com mesa para 8 pessoas e vista panorâmica para o jardim",
      features: ['18m²', 'Iluminação decorativa', 'Deck integrado'],
      position: "left" as const,
      spacing: 120,
      height: 80,
    },
    {
      title: "Hall de Circulação",
      description: "Corredor amplo com armários planejados e acabamento em madeira nobre",
      features: ['12m²', 'Closet', 'Iluminação LED'],
      position: "right" as const,
      spacing: 130,
      height: 130,
    },
    {
      title: "Escritório / Home Office",
      description: "Ambiente privativo ideal para trabalho remoto com estante planejada",
      features: ['15m²', 'Estante embutida', 'Iluminação focada'],
      position: "left" as const,
      spacing: 100,
      height: 120,
    },
    {
      title: "Banheiro Social",
      description: "Acabamento em mármore com box blindex e iluminação LED indireta",
      features: ['8m²', 'Box blindex', 'Ducha elétrica'],
      position: "right" as const,
      spacing: 120,
      height: 100,
    },
    {
      title: "Suíte Master",
      description: "Quarto principal com closet, varanda privativa e vista privilegiada",
      features: ['35m²', 'Closet 8m²', 'Varanda 6m²'],
      position: "left" as const,
      spacing: 100,
      height: 100,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const scrollTop = window.scrollY - container.offsetTop
      const scrollHeight = container.scrollHeight - window.innerHeight

      if (scrollTop < 0) {
        setScrollProgress(0)
        setCurrentRoom(0)
      } else if (scrollTop > scrollHeight) {
        setScrollProgress(1)
        setCurrentRoom(cardsConfig.length - 1)
      } else {
        const progress = scrollTop / scrollHeight
        setScrollProgress(progress)
        
        // Calcular cômodo atual baseado no progress
        const roomIndex = Math.floor(progress * cardsConfig.length)
        setCurrentRoom(Math.min(roomIndex, cardsConfig.length - 1))
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [cardsConfig.length])

  // Navegar para o próximo cômodo
  const goToNextRoom = () => {
    if (currentRoom < cardsConfig.length - 1) {
      goToRoom(currentRoom + 1)
    }
  }

  // Navegar para o cômodo anterior
  const goToPreviousRoom = () => {
    if (currentRoom > 0) {
      goToRoom(currentRoom - 1)
    }
  }

  // Navegar para um cômodo específico
  const goToRoom = (roomIndex: number) => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollHeight = container.scrollHeight - window.innerHeight
    const targetProgress = roomIndex / (cardsConfig.length - 1)
    const targetScroll = container.offsetTop + (scrollHeight * targetProgress)

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={containerRef} className="relative bg-slate-900">
      {/* Seção 3D (sticky) */}
      <HouseScene scrollProgress={scrollProgress} />

      {/* Botões de Navegação - Direita Inferior */}
      <div className="fixed bottom-32 right-8 z-30 flex flex-col gap-4">
        {/* Botão Anterior */}
        <button
          onClick={goToPreviousRoom}
          disabled={currentRoom === 0}
          className={`group p-4 rounded-full backdrop-blur-xl border transition-all duration-300 ${
            currentRoom === 0
              ? 'bg-gray-800/50 border-gray-700/30 cursor-not-allowed opacity-50'
              : 'bg-blue-600/80 border-cyan-400/30 hover:bg-blue-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50'
          }`}
          aria-label="Cômodo anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Indicador de posição */}
        <div className="bg-slate-900/90 backdrop-blur-xl px-4 py-2 rounded-full border border-cyan-400/30 text-center">
          <div className="text-white font-bold text-sm">
            {currentRoom + 1} / {cardsConfig.length}
          </div>
          <div className="text-cyan-400 text-xs mt-1 truncate max-w-[120px]">
            {cardsConfig[currentRoom].title}
          </div>
        </div>

        {/* Botão Próximo */}
        <button
          onClick={goToNextRoom}
          disabled={currentRoom === cardsConfig.length - 1}
          className={`group p-4 rounded-full backdrop-blur-xl border transition-all duration-300 ${
            currentRoom === cardsConfig.length - 1
              ? 'bg-gray-800/50 border-gray-700/30 cursor-not-allowed opacity-50'
              : 'bg-blue-600/80 border-cyan-400/30 hover:bg-blue-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50'
          }`}
          aria-label="Próximo cômodo"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Navegação Rápida - Pontos Laterais Esquerda */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3">
        {cardsConfig.map((card, index) => (
          <button
            key={index}
            onClick={() => goToRoom(index)}
            className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentRoom
                ? 'bg-cyan-400 scale-150 shadow-lg shadow-cyan-400/50'
                : index < currentRoom
                ? 'bg-blue-600 hover:scale-125'
                : 'bg-white/30 hover:bg-white/50 hover:scale-125'
            }`}
            aria-label={`Ir para ${card.title}`}
          >
            {/* Tooltip */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              <div className="bg-slate-900/95 backdrop-blur-xl px-3 py-2 rounded-lg border border-cyan-400/30 shadow-xl">
                <span className="text-white text-sm font-medium">{card.title}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

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