import { experienceData } from '../data/experienceData'
import certificateOfEmployment from '../assets/Prarinporn_Chookaew_ Certificate of Employment.pdf'

function Experience() {
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 md:mb-16 text-center animate-fadeInUp">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          
          <div className="space-y-12 md:space-y-16">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.id} 
                className="relative pl-20 md:pl-28 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot with Logo */}
                <div className="absolute left-0 md:left-4 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2 md:p-3 border border-gray-200">
                  {exp.image ? (
                    <img src={exp.image} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl md:text-3xl">{exp.icon}</span>
                  )}
                </div>
                
                {/* Content */}
                <div>
                  {/* Header with Period and Duration on Right */}
                  <div className="flex items-start justify-between gap-32 md:gap-48 mb-3">
                    <div className="max-w-[500px]" >
                      {/* Position */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 ">
                        {exp.position}
                      </h3>
                      
                      {/* Company */}
                      <p className="text-lg font-semibold text-purple-600">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Period and Duration - Right Side */}
                    <div className="text-right flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100 mb-2 whitespace-nowrap">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </div>
                      {exp.duration && (
                        <p className="text-sm font-medium text-gray-500 whitespace-nowrap">
                          {exp.duration}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Download All Certificates Button */}
        <div className="flex justify-center mt-12 md:mt-16 animate-fadeInUp">
          <button
            onClick={() => handleDownload(certificateOfEmployment, 'Prarinporn_Chookaew_Certificate_of_Employment.pdf')}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg font-medium text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Certificates of Employment</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Experience
