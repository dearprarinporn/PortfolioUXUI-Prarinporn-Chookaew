function ProjectCard({ title, year, image, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="glass-card rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
    >
      {/* Header with Title and Year */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="glass-button text-white text-xs px-4 py-1.5 rounded-full">{year}</span>
      </div>
      
      {/* White Divider Line */}
      <div className="w-full h-[1px] bg-white/30 mb-4"></div>
      
      {/* Image Container */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden bg-white/5 h-[280px] flex items-center justify-center transition-transform duration-300">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <p className="text-sm">Add project image</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
