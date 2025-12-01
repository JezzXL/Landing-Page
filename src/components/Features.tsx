import FeatureCard from './Features/FeatureCard'

export default function Features() {
  const features = [
    {
      icon: '🏗️',
      title: 'BIM & Modelagem 3D',
      description: 'Tecnologia Building Information Modeling para planejamento preciso e redução de custos em até 30%'
    },
    {
      icon: '📈',
      title: 'Alto Padrão',
      description: 'Empreendimentos premium com valorização média de 250% e localização estratégica'
    },
    {
      icon: '🌿',
      title: 'Construção Verde',
      description: 'Certificação LEED e AQUA-HQE com eficiência energética e sustentabilidade'
    },
    {
      icon: '🔐',
      title: 'Garantia Total',
      description: 'Patrimônio de afetação, seguro obra e assessoria jurídica completa'
    },
    {
      icon: '🏢',
      title: 'Smart Buildings',
      description: 'Automação predial, IoT e sistemas inteligentes de gestão de energia'
    },
    {
      icon: '📍',
      title: 'Localização Prime',
      description: 'Terrenos em regiões de alta valorização e infraestrutura completa'
    },
  ]

  return (
    <div className="relative py-32 bg-linear-to-b from-slate-900 via-blue-950/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Diferenciais NEXUS
            </span>
          </h2>
          <p className="text-xl text-gray-400">Excelência em cada detalhe da construção</p>
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