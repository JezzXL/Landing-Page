import { Play, Building2 } from 'lucide-react'

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
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-blue-300 text-sm font-medium">🏗️ Construção Inteligente 4.0</span>
        </div>

        {/* Título principal */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6">
          <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text animate-gradient">
            NEXUS
          </span>
          <span className="block text-4xl md:text-5xl text-blue-200 mt-4 font-light">
            Construindo o Futuro
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Empreendimentos imobiliários de alto padrão com{' '}
          <span className="text-cyan-400 font-bold">ROI médio de +250%</span>
          {' '}e tecnologia sustentável
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <Play className="w-5 h-5" />
              Agendar Visita
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-blue-500 rounded-lg font-bold hover:bg-blue-500/10 transition-all hover:scale-105 flex items-center gap-2 justify-center">
            <Building2 className="w-5 h-5" />
            Ver Empreendimentos
          </button>
        </div>

        {/* Mini stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 mb-1">45+</div>
            <div className="text-sm text-gray-400">Obras Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-blue-400 mb-1">2.5Bi</div>
            <div className="text-sm text-gray-400">Investidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 mb-1">250%</div>
            <div className="text-sm text-gray-400">ROI Médio</div>
          </div>
        </div>
      </div>
    </div>
  )
}