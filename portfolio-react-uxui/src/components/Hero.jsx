import heroImage from '../assets/profileIMG.png'
import cvFile from '../assets/Prarinporn_Chookaew_CV.pdf'

function Hero() {
  const handleDownloadCV = () => {
    // สร้าง link element สำหรับดาวน์โหลด
    const link = document.createElement('a')
    link.href = cvFile
    link.download = 'Prarinporn_Chookaew_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="flex flex-col items-center text-center px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-20 mb-8">      

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-2 animate-fadeInUp ">
        Hey, I'm <span className="text-[#8B5CF6]">Dear</span>
      </h1>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium mb-0 md:-mb-8 tracking-tight animate-fadeInUp animate-delay-200">
        UX/UI Designer
      </h2>
      
      <div className="relative w-full px-0 md:px-4 lg:px-8 -mt-4 md:-mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-start">
          {/* Left Side Content - Hidden on mobile, shown on large screens */}
          <div className="hidden lg:block text-left space-y-4 animate-fadeInLeft lg:mt-48">
            <div className="flex items-start gap-3">
              <span className="text-4xl lg:text-5xl">"</span>
              <div>
                <p className="text-gray-600 font-semibold mt-2 text-sm lg:text-base">Designs is not just a job for me, it's a passion that drives me.</p>
                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                  Design has always been more than just a job - it's my passion.
                </p>
              </div>
            </div>
          </div>

          {/* Center - Hero Image */}
          <div className="relative w-full max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[520px] mx-auto flex items-end justify-center animate-scaleIn animate-delay-400 mb-2 md:mb-4 mt-10">
            {/* Background Circle */}
            <div className="absolute bottom-[-10px] md:bottom-[-20px] left-1/2 -translate-x-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[460px] md:h-[460px] lg:w-[600px] lg:h-[600px] bg-[#E6DEFF] rounded-full"></div>
            
            {/* Hero Image */}
            <img 
              src={heroImage}
              alt="Dear" 
              className="relative -translate-x-2 md:-translate-x-6 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[520px] h-auto object-contain"
            />
          </div>

          {/* Right Side Content - Hidden on mobile, shown on large screens */}
          <div className="hidden lg:block text-right space-y-4 animate-fadeInRight pr-0 lg:pr-4 lg:mt-48">
            <div className="flex flex-col items-end">
              <div className="text-right">
                <p className="text-2xl lg:text-4xl font-medium text-gray-800">Prarinporn Chookaew</p>
                {/* Available for Work Badge */}
                <div className="mb-8 md:mb-12 animate-fadeIn py-4">
                  <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#5BE3E4]/20 text-[#5BE3E4] font-semibold text-xs md:text-sm uppercase tracking-wider border border-[#5BE3E4]/30 ">
                    <span className="w-2 h-2 bg-[#5BE3E4] rounded-full animate-pulse "></span>
                      AVAILABLE FOR WORK
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Info Section - Shown only on mobile */}
        <div className="lg:hidden mt-8 space-y-6 px-4">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-medium text-gray-800 mb-1">Prarinporn Chookaew</p>
            <p className="text-gray-600 font-medium">UX/UI Designer</p>
          </div>
          
          <div className="text-center max-w-md mx-auto">
            <p className="text-gray-600 font-semibold mb-2">Designs is not just a job for me, it's a passion that drives me.</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Design has always been more than just a job - it's my passion.
            </p>
          </div>
        </div>

        {/* Action Buttons - Centered below image */}
        <div className="flex justify-center -mt-42 md:-mt-60">
          <div className="flex flex-col sm:flex-row items-center rounded-full p-1 sm:p-1.5 shadow-2xl bg-white/20 backdrop-blur-md border border-white/30 gap-2 sm:gap-0">
            {/* Contact Us Button */}
            <a 
              href="mailto:your-email@mail.com" 
              className="bg-[#8B5CF6] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105 transform uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center min-w-[120px] sm:min-w-[160px]"
            >
              CONTACT&nbsp;US
            </a>
            
            {/* Download CV Button */}
            <button 
              onClick={handleDownloadCV}
              className="text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 transform uppercase tracking-wider whitespace-nowrap inline-flex items-center justify-center min-w-[100px] sm:min-w-[140px] backdrop-blur-sm"
            >
              Download&nbsp;CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
