import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App
