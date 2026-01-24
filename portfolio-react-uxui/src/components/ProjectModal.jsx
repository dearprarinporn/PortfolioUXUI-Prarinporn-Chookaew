import { useEffect, useRef, useState } from 'react'
import LazyImage from './LazyImage'



function ProjectModal({ isOpen, onClose, project }) {
  const modalContentRef = useRef(null)
  const [loadedImages, setLoadedImages] = useState(new Set())

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset loaded images when modal opens
      setLoadedImages(new Set())
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const scrollToTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  if (!isOpen || !project) return null

  return (
    <div 
      ref={modalContentRef}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-2 md:p-4 pt-16 md:pt-20"
    >
      {/* Modal Content */}
      <div className="relative w-full max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-2xl mb-10 md:mb-20 animate-fadeInUp">
        {/* Floating Close Button - Top Right of Modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Floating Scroll to Top Button - Bottom Right of Modal */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-3 right-3 md:bottom-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#8B5CF6] hover:bg-purple-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#8B5CF6] to-[#8B5CF6] p-4 md:p-8 rounded-t-2xl md:rounded-t-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
            <div className="flex-1 pr-12 sm:pr-4">
              <h2 className="text-2xl md:text-3xl font-medium text-white mt-1">{project.title}</h2>
            </div>
            <span className="bg-white/20 backdrop-blur-md text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/30 text-sm md:text-base whitespace-nowrap">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8">
          {/* Project Image */}
          {project.image && (
            <div className="mb-6 md:mb-8 rounded-xl md:rounded-2xl overflow-hidden">
              <LazyImage 
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Project Description */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">Project Overview</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {project.description || 'This is an amazing project that showcases modern design principles and user-centered approach. The project focuses on creating intuitive and engaging user experiences.'}
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Role</h4>
                <p className="text-sm md:text-base text-gray-600">{project.role || 'UX/UI Designer'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Duration</h4>
                <p className="text-sm md:text-base text-gray-600">{project.duration || '3 months'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Tools</h4>
                <p className="text-sm md:text-base text-gray-600">{project.tools || 'Figma, Adobe XD, Sketch'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">Category</h4>
                <p className="text-sm md:text-base text-gray-600">{project.category || 'Mobile App Design'}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Modern and intuitive user interface design</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>User-centered design approach</span>
                </li>
                <li className="flex items-start gap-2 text-sm md:text-base text-gray-600">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Accessibility compliant</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2 md:pt-4 pb-4 md:pb-6">
              <button className="w-full md:w-auto bg-[#8B5CF6] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 hover:scale-105 text-sm md:text-base">
                View Live Project
              </button>
            </div>

            {/* Additional Project Images */}
            <div className="space-y-4">
              <div className="space-y-4 md:space-y-6">
                {project.additionalImages && project.additionalImages.map((img, index) => (
                  <LazyImage
                    key={index}
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto rounded-xl md:rounded-2xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
