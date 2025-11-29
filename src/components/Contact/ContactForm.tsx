import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensagem enviada! Entraremos em contato em breve.')
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="p-8 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            className="px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
          />
        </div>
        <input
          type="tel"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={(e) => handleChange('telefone', e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white placeholder:text-gray-500"
        />
        <textarea
          placeholder="Mensagem"
          rows={4}
          value={formData.mensagem}
          onChange={(e) => handleChange('mensagem', e.target.value)}
          className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-white placeholder:text-gray-500"
        />
        <button 
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:scale-105 transition-transform"
        >
          Enviar Mensagem
        </button>
      </div>
    </div>
  )
}