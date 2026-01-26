import { useEffect, useRef } from 'react'
import LazyImage from './LazyImage'



function ProjectModal({ isOpen, onClose, project, onNext, onPrev, currentIndex, totalProjects }) {
  const modalContentRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    // Scroll to top when project changes
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo(0, 0)
    }
  }, [project])

  const scrollToTop = () => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  if (!isOpen || !project) return null

  return (
    <div 
      ref={modalContentRef}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-2 md:p-4 pt-16 md:pt-20"
    >
      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl bg-white rounded-2xl md:rounded-3xl shadow-2xl mb-10 md:mb-20 animate-fadeInUp"
      >
        {/* Floating Close Button - Top Right of Modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Navigation Buttons */}
        {/* Previous Button - Left Side */}
        <button
          onClick={onPrev}
          className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button - Right Side */}
        <button
          onClick={onNext}
          className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
          aria-label="Next project"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Project Counter - Top Left */}
        <div className="absolute top-3 left-3 md:top-6 md:left-6 z-50 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
          <span className="text-sm md:text-base font-medium text-gray-800">
            {currentIndex + 1} / {totalProjects}
          </span>
        </div>

        {/* Floating Scroll to Top Button - Bottom Right of Modal */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-3 right-3 md:bottom-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#8B5CF6] hover:bg-purple-700 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>

        {/* Content - Only Screenshots */}
        <div className="overflow-hidden rounded-2xl md:rounded-3xl">
          <div>
            {project.additionalImages && project.additionalImages.map((img, index) => (
              <LazyImage
                key={index}
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
