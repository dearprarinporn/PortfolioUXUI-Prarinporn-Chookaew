function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Company',
      position: 'UX/UI Designer',
      period: '2023 - Present',
      description: 'Leading design projects and creating user-centered solutions.'
    },
    {
      id: 2,
      company: 'Design Studio',
      position: 'Junior Designer',
      period: '2021 - 2023',
      description: 'Worked on various client projects and improved design skills.'
    }
  ]

  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-8 md:mb-12">Experience</h2>
        
        <div className="space-y-4 md:space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 md:mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-[#8B5CF6] font-medium text-sm md:text-base">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-xs md:text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-600 text-sm md:text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
