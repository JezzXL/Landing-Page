import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactInfo() {
  const contacts = [
    { icon: Mail, text: 'contato@nexus.build' },
    { icon: Phone, text: '+55 11 9999-9999' },
    { icon: MapPin, text: 'São Paulo, SP' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {contacts.map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg">
          <item.icon className="w-6 h-6 text-purple-400" />
          <span className="text-gray-300">{item.text}</span>
        </div>
      ))}
    </div>
  )
}