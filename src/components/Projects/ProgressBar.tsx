interface ProgressBarProps {
  completion: number
}

export default function ProgressBar({ completion }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">Progresso</span>
        <span className="text-purple-400 font-bold">{completion}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000"
          style={{ width: `${completion}%` }}
        />
      </div>
    </div>
  )
}