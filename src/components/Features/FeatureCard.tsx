interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-8 bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}