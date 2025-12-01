import { Building2, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-blue-500/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Logo e descrição */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-black text-white">NEXUS</span>
          </div>
          <p className="text-gray-400 text-sm">
            Construindo o futuro com excelência, tecnologia e sustentabilidade desde 1998.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Empreendimentos</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Investidores</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Trabalhe Conosco</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-cyan-500/50 transition-all">
              <Facebook className="w-5 h-5 text-blue-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-cyan-500/50 transition-all">
              <Instagram className="w-5 h-5 text-blue-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-cyan-500/50 transition-all">
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 hover:border-cyan-500/50 transition-all">
              <Youtube className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm pt-8 border-t border-blue-500/10">
        <p>&copy; 2024 NEXUS Construction. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00 | CRECI: 12345-J</p>
      </div>
    </div>
  )
}