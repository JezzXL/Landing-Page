import FeatureCard from './Features/FeatureCard'

export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'IA & BIM 6D',
      description: 'Modelagem inteligente com inteligência artificial para otimização de custos e prazos'
    },
    {
      icon: '📊',
      title: 'ROI Garantido',
      description: 'Retorno sobre investimento médio de 250% nos últimos 5 anos de operação'
    },
    {
      icon: '🌱',
      title: 'Sustentabilidade',
      description: 'Certificação LEED Platinum e Carbon Neutral em todos os nossos projetos'
    },
    {
      icon: '🔒',
      title: 'Segurança Jurídica',
      description: 'Assessoria completa e garantias contratuais para proteção do investimento'
    },
    {
      icon: '⚡',
      title: 'Smart Buildings',
      description: 'Tecnologia IoT integrada para gestão inteligente de energia e recursos'
    },
    {
      icon: '🎯',
      title: 'Localização Premium',
      description: 'Projetos estrategicamente posicionados em zonas de alta valorização'
    },
  ]

  return (
    <div className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Por que Investir
            </span>
          </h2>
          <p className="text-xl text-gray-400">Diferenciais que nos tornam líderes do setor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}