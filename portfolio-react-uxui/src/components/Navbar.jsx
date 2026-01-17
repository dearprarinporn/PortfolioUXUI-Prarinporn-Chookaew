import { useState, useEffect } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'glass-navbar py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Portfolio</div>
        
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-700 hover:text-[#8B5CF6] transition">Home</a>
          <a href="#projects" className="text-gray-700 hover:text-[#8B5CF6] transition">Works</a>
          <a href="#experience" className="text-gray-700 hover:text-[#8B5CF6] transition">Experiences</a>
        </div>

        <a 
          href="mailto:your-email@mail.com" 
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}

export default Navbar
