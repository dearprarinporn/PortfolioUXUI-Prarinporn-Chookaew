import transcriptPDF from '../assets/Prarinporn_Chookaew_Transcript.pdf'
import graduationPDF from '../assets/Prarinporn_Chookaew_ graduation.pdf'
import psuLogo from '../assets/psuLogo.png'

function Education() {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 md:mb-16 text-center animate-fadeInUp">
          Education
        </h2>
        
        <div className="flex justify-center animate-fadeInUp">
          {/* Education Card */}
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-10 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left - Logo */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-48 md:h-48 flex items-center justify-center">
                  <img src={psuLogo} alt="PSU Logo" className="w-full h-full object-contain" />
                </div>
              </div>
              
              {/* Right - Content */}
              <div className="flex-1">
                {/* Top - Degree and Duration */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-3 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      Bachelor of Science
                    </h3>
                    <p className="text-lg font-semibold text-purple-600">
                      Computer Science
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm font-semibold text-purple-600 mb-1">Duration</p>
                    <p className="text-lg font-bold text-gray-900">2018 - 2022</p>
                  </div>
                </div>
                
                {/* University Info */}
                <div className="space-y-1 mb-6">
                  <p className="text-gray-700 font-medium">
                    Prince of Songkla University (PSU)
                  </p>
                  <p className="text-gray-600">
                    Faculty of Science
                  </p>
                </div>
                
                {/* Download Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleDownload(transcriptPDF, 'Prarinporn_Chookaew_Transcript.pdf')}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Transcript</span>
                  </button>
                  
                  <button
                    onClick={() => handleDownload(graduationPDF, 'Prarinporn_Chookaew_Graduation.pdf')}
                    className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-md font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Graduation Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
