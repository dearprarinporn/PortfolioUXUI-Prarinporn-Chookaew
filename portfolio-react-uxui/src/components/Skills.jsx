import figmaLogo from '../assets/figmaLogo.jpeg'
import framerLogo from '../assets/framerLogo.jpeg' 
import xdLogo from '../assets/xdLogo.svg.png'


function Skills() {
  const designSkills = [
    {
      name: 'Figma',
      logo: figmaLogo,
      percentage: 95,
      color: '#A259FF',
      
    },
    {
      name: 'Framer',
      logo: framerLogo,
      percentage: 80,
      color: '#0D99FF',
      
    },
    {
      name: 'Adobe XD',
      logo: xdLogo,
      percentage: 70,
      color: '#FF61F6',
     
    }
  ]

  const devSkills = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Angular', icon: '🅰️', color: '#DD0031' },
    { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'PHP', icon: '🐘', color: '#777BB4' },
    { name: 'C', icon: '©️', color: '#A8B9CC' },
    { name: 'HTML', icon: '🌐', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', color: '#1572B6' },
    { name: 'MySQL', icon: '🗄️', color: '#4479A1' },
    { name: 'Robot Framework', icon: '🤖', color: '#000000' }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-600 text-lg">
            Design tools and technologies I use
          </p>
        </div>

        {/* Design Skills */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {designSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circular Progress Ring */}
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  {/* Background Circle */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={skill.color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.percentage / 100)}`}
                      className="transition-all duration-1000 ease-out"
                      
                    />
                  </svg>

                  {/* Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Logo or Icon */}
                    {skill.logo ? (
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-16 h-16 md:w-20 md:h-20 mb-2 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-5xl md:text-6xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                    )}
                    {/* Percentage */}
                    <div className="text-2xl md:text-3xl font-semibold text-gray-900">
                      {skill.percentage}%
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-6">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Development Skills */}
        <div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {devSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-white rounded-2xl px-6 py-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeInUp border border-gray-100"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  {/* Skill Name */}
                  <span className="text-base md:text-lg font-semibold text-gray-900">
                    {skill.name}
                  </span>
                </div>
                {/* Hover Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
