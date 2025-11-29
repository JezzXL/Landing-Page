import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Features from './components/Features'
import Contact from './components/Contact'

export default function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white">
      <Hero scrollY={scrollY} />
      <Stats />
      <Projects />
      <Features />
      <Contact />
    </div>
  )
}