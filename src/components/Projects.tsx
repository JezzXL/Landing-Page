import ProjectCard from './Projects/ProjectCard'

export default function Projects() {
  const projects = [
    {
      name: 'Quantum Tower',
      location: 'São Paulo, SP',
      investment: 'R$ 450M',
      roi: '+245%',
      status: 'Em Construção',
      completion: 75,
      image: '🏢',
      type: 'Comercial',
      units: '248 salas'
    },
    {
      name: 'Neo District',
      location: 'Rio de Janeiro, RJ',
      investment: 'R$ 820M',
      roi: '+312%',
      status: 'Lançamento',
      completion: 45,
      image: '🌆',
      type: 'Residencial',
      units: '420 unidades'
    },
    {
      name: 'Skyline Plaza',
      location: 'Brasília, DF',
      investment: 'R$ 650M',
      roi: '+198%',
      status: 'Concluído',
      completion: 100,
      image: '🏗️',
      type: 'Misto',
      units: '180 unidades'
    },
  ]

  return (
    <div className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Empreendimentos em Destaque
            </span>
          </h2>
          <p className="text-xl text-gray-400">Investimentos de alto padrão com retorno garantido</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}