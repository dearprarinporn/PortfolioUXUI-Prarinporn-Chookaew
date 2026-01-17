import heroImage from '../assets/IMG_8060-Photoroom.png'

function Hero() {
  return (
    <section id="home" className="flex flex-col items-center text-center px-8 pt-32 pb-20">
      {/* Available for Work Badge */}
      <div className="mb-12 animate-fadeIn">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5BE3E4]/20 text-[#5BE3E4] font-semibold text-sm uppercase tracking-wider border border-[#5BE3E4]/30">
          <span className="w-2 h-2 bg-[#5BE3E4] rounded-full animate-pulse"></span>
          AVAILABLE FOR WORK
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-medium mb-2 animate-fadeInUp">
        Hey, I'm <span className="text-[#8B5CF6]">Dear</span>
      </h1>
      <h2 className="text-6xl md:text-8xl font-medium mb-8 tracking-tight animate-fadeInUp animate-delay-200">
        UX/UI Designer
      </h2>
      
      <div className="relative w-full px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {/* Left Side Content */}
          <div className="text-left space-y-4 animate-fadeInLeft md:mt-16">
            <div className="flex items-start gap-3">
              <span className="text-5xl">"</span>
              <div>
                <p className="text-gray-600 font-semibold mt-2">Designs is not just a job for me, it's a passion that drives me.</p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Design has always been more than just a job - it's my passion.
                </p>
              </div>
            </div>
          </div>

          {/* Center - Hero Image */}
          <div className="relative w-80 h-100 md:w-[700px] md:h-[550px] mb-10 mx-auto flex items-end justify-center animate-scaleIn animate-delay-400">
            {/* Background Circle */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[600px] h-[550px] md:w-[600px] md:h-[550px] bg-[#E6DEFF] rounded-full"></div>
            
            {/* Hero Image */}
            <img 
              src={heroImage}
              alt="Dear" 
              className="relative -translate-x-6 w-[700px] h-200 md:w-[700px] object-contain"
            />
            
            <div className="absolute bottom-32 left-1/2 translate-x-8 z-20">
              {/* Glass Container */}
              <div className="flex items-center rounded-full p-1.5 shadow-2xl bg-white/20 backdrop-blur-md border border-white/30">
                {/* Contact Us Button */}
                <a 
                  href="mailto:your-email@mail.com" 
                  className="bg-[#8B5CF6] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105 transform uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center min-w-[160px]"
                >
                  CONTACT&nbsp;US
                </a>
                
                {/* Hire Me Button */}
                <button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="text-white px-10 py-3 rounded-full text-sm font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 transform uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center min-w-[140px] backdrop-blur-sm"
                >
                  HIRE&nbsp;ME
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="text-right space-y-4 animate-fadeInRight pr-0 md:pr-4 md:mt-16">
            <div className="flex flex-col items-end">
              <div className="text-right">
                <p className="text-4xl font-medium text-gray-800">Prarinporn Chookaew</p>
                <p className="text-gray-600 font-medium">UX/UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
