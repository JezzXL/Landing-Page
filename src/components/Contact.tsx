import ContactInfo from './Contact/ContactInfo'
import ContactForm from './Contact/ContactForm'
import Footer from './Contact/Footer'

export default function Contact() {
  return (
    <div className="relative py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Fale Conosco
            </span>
          </h2>
          <p className="text-xl text-gray-400">Agende uma reunião e conheça nossas oportunidades</p>
        </div>

        <ContactInfo />
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}