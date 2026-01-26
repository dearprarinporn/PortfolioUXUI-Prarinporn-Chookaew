function Education() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-12 md:mb-16 text-center animate-fadeInUp">
          Education
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>
          
          {/* Education Card */}
          <div className="relative mb-8 md:mb-0 animate-fadeInUp">
            <div className="flex flex-col md:flex-row md:justify-center items-start md:items-center">
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 shadow-lg z-10"></div>
              
              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-5/12 bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-3xl">🎓</span>
                </div>
                
                {/* Degree */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Science
                </h3>
                
                {/* Major */}
                <p className="text-lg font-semibold text-purple-600 mb-3">
                  Computer Science
                </p>
                
                {/* University */}
                <p className="text-gray-700 font-medium mb-2">
                  Prince of Songkla University (PSU)
                </p>
                
                {/* Faculty */}
                <p className="text-gray-600 mb-3">
                  Faculty of Science
                </p>
                
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">2018 - 2022</span>
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
