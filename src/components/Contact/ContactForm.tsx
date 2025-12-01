import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    interesse: 'Residencial'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensagem enviada! Nossa equipe entrará em contato em breve.')
    setFormData({ nome: '', email: '', telefone: '', mensagem: '', interesse: 'Residencial' })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8 bg-linear-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-2xl backdrop-blur-sm">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            className="px-4 py-3 bg-slate-900/80 border border-blue-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="px-4 py-3 bg-slate-900/80 border border-blue-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Telefone / WhatsApp"
            value={formData.telefone}
            onChange={(e) => handleChange('telefone', e.target.value)}
            className="px-4 py-3 bg-slate-900/80 border border-blue-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
          />
          <select
            value={formData.interesse}
            onChange={(e) => handleChange('interesse', e.target.value)}
            className="px-4 py-3 bg-slate-900/80 border border-blue-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
          >
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Misto">Misto</option>
            <option value="Terreno">Terreno</option>
          </select>
        </div>
        
        <textarea
          placeholder="Conte-nos sobre seu interesse..."
          rows={4}
          value={formData.mensagem}
          onChange={(e) => handleChange('mensagem', e.target.value)}
          className="w-full px-4 py-3 bg-slate-900/80 border border-blue-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none text-white placeholder:text-gray-500"
        />
        
        <button 
          onClick={handleSubmit}
          className="w-full py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50"
        >
          <Send className="w-5 h-5" />
          Enviar Mensagem
        </button>
      </div>
    </div>
  )
}