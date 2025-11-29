import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
  value: string
  label: string
  icon: LucideIcon
}

export default function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <div className="group relative p-8 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <Icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
      <div className="text-5xl font-black text-white mb-2">{value}</div>
      <div className="text-purple-300">{label}</div>
      
      <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
    </div>
  )
}