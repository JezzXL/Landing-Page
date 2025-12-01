import { MapPin, Home } from 'lucide-react'
import ProgressBar from './ProgressBar'

interface ProjectCardProps {
  name: string
  location: string
  investment: string
  roi: string
  status: string
  completion: number
  image: string
  type: string
  units: string
}

export default function ProjectCard({ 
  name, 
  location, 
  investment, 
  roi, 
  status, 
  completion, 
  image,
  type,
  units
}: ProjectCardProps) {
  return (
    <div className="group relative bg-linear-to-br from-blue-900/10 to-transparent border border-blue-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
      {/* Image placeholder with emoji */}
      <div className="relative h-64 bg-linear-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center text-8xl">
        {image}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        
        {/* Type badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-xs font-bold text-white">
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-blue-300 flex items-center gap-1 mb-2">
              <MapPin className="w-4 h-4" />
              {location}
            </p>
            <p className="text-cyan-400 flex items-center gap-1 text-sm">
              <Home className="w-4 h-4" />
              {units}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === 'Concluído' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : status === 'Lançamento'
              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {status}
          </span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-400">Investimento</span>
            <span className="font-bold text-white">{investment}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Valorização</span>
            <span className="font-bold text-green-400">{roi}</span>
          </div>
        </div>

        <ProgressBar completion={completion} />

        <button className="w-full py-3 bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 rounded-lg font-bold transition-all">
          Ver Detalhes
        </button>
      </div>
    </div>
  )
}