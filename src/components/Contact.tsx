import ContactInfo from './Contact/ContactInfo'
import ContactForm from './Contact/ContactForm'
import Footer from './Contact/Footer'

export default function Contact() {
  return (
    <div className="relative py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-gray-400">Agende uma visita e conheça nossos empreendimentos</p>
        </div>

        <ContactInfo />
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}