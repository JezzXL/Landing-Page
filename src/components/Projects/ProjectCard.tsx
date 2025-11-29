import { MapPin } from 'lucide-react'
import ProgressBar from '../Projects/ProgressBar'

interface ProjectCardProps {
  name: string
  location: string
  investment: string
  roi: string
  status: string
  completion: number
  image: string
}

export default function ProjectCard({ 
  name, 
  location, 
  investment, 
  roi, 
  status, 
  completion, 
  image 
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      {/* Image placeholder with emoji */}
      <div className="relative h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center text-8xl">
        {image}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-purple-300 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            status === 'Concluído' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-purple-500/20 text-purple-400'
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
            <span className="text-gray-400">ROI Projetado</span>
            <span className="font-bold text-green-400">{roi}</span>
          </div>
        </div>

        <ProgressBar completion={completion} />

        <button className="w-full py-3 bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 rounded-lg font-bold transition-all">
          Saiba Mais
        </button>
      </div>
    </div>
  )
}