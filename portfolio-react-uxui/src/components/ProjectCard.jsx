function ProjectCard({ title, year, image, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="glass-card rounded-2xl md:rounded-3xl p-4 md:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
    >
      {/* Header with Title and Year */}
      <div className="flex justify-between items-center mb-2 md:mb-3">
        <h3 className="text-base md:text-lg font-semibold text-white truncate pr-2">{title}</h3>
        <span className="glass-button text-white text-xs px-3 md:px-4 py-1 md:py-1.5 rounded-full whitespace-nowrap">{year}</span>
      </div>
      
      {/* White Divider Line */}
      <div className="w-full h-[1px] bg-white/30 mb-3 md:mb-4"></div>
      
      {/* Image Container */}
      <div className="relative">
        <div className="rounded-xl md:rounded-2xl overflow-hidden bg-white/5 h-[200px] md:h-[280px] flex items-center justify-center transition-transform duration-300">
          {image && (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
