import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactInfo() {
  const contacts = [
    { icon: Mail, text: 'contato@nexus.build', label: 'E-mail' },
    { icon: Phone, text: '(11) 3000-0000', label: 'Telefone' },
    { icon: MapPin, text: 'Av. Paulista, 1000 - SP', label: 'Endereço' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {contacts.map((item, i) => (
        <div key={i} className="group flex flex-col items-center text-center p-6 bg-linear-to-br from-blue-900/10 to-transparent border border-blue-500/20 rounded-lg hover:border-cyan-500/50 transition-all hover:scale-105">
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
            <item.icon className="w-6 h-6 text-blue-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">{item.label}</span>
          <span className="text-gray-300 font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  )
}