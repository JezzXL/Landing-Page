import { Play } from 'lucide-react'

interface HeroContentProps {
  mounted: boolean
}

export default function HeroContent({ mounted }: HeroContentProps) {
  return (
    <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
      <div 
        className={`text-center transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-8">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <span className="text-purple-300 text-sm font-medium">Tecnologia de Construção 4.0</span>
        </div>

        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6">
          <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text animate-gradient">
            NEXUS
          </span>
          <span className="block text-4xl md:text-5xl text-purple-200 mt-4 font-light">
            Building Tomorrow
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Projetos imobiliários inteligentes com ROI médio de <span className="text-purple-400 font-bold">+250%</span> e tecnologia sustentável
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <Play className="w-5 h-5" />
              Agendar Apresentação
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 border-2 border-purple-500 rounded-lg font-bold hover:bg-purple-500/10 transition-all hover:scale-105">
            Ver Portfólio
          </button>
        </div>
      </div>
    </div>
  )
}