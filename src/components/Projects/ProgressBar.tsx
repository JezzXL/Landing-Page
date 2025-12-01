interface ProgressBarProps {
  completion: number
}

export default function ProgressBar({ completion }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Andamento da Obra</span>
        <span className="text-cyan-400 font-bold">{completion}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-linear-to-r from-blue-600 to-cyan-500 transition-all duration-1000 relative overflow-hidden"
          style={{ width: `${completion}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}