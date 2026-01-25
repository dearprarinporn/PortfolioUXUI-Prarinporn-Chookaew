import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'
import projectBackground from '../assets/projectBlackground.jpg'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden -mt-8 md:-mt-12 rounded-3xl md:rounded-[3rem] mx-4 md:mx-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 rounded-3xl md:rounded-[3rem]">
          <img 
            src={projectBackground} 
            alt="Project Background" 
            className="w-full h-full object-cover rounded-3xl md:rounded-[3rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/60 to-[#6D28D9]/70 rounded-3xl md:rounded-[3rem]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 md:mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">Project</h2>
            <a href="#" className="glass-button text-white text-xs md:text-sm font-medium px-4 md:px-6 py-2 rounded-full hover:bg-white/25 transition">
              See All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {projectsData.map((project, index) => (
              <div 
                key={project.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                <ProjectCard 
                  title={project.title} 
                  year={project.year}
                  image={project.image}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default Projects
