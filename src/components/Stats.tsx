import { TrendingUp, Building2, Award } from 'lucide-react'
import StatCard from './Stats/StatCard'

export default function Stats() {
  const stats = [
    { value: 'R$ 2.5Bi+', label: 'Em Obras Ativas', icon: TrendingUp },
    { value: '45+', label: 'Empreendimentos', icon: Building2 },
    { value: '250%', label: 'Valorização Média', icon: Award },
  ]

  return (
    <div className="relative py-20 bg-linear-to-b from-slate-900 to-blue-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}