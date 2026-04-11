import React from "react";

function ProjectCard({ card }) {
  return (
    // Outer Container: .projectCard
    <div className="w-[300px] h-[300px] rounded-[5px] overflow-hidden cursor-pointer border border-[#e1e1e1] flex flex-col">
      
      {/* Project Cover Image */}
      <img 
        src={card.img} 
        alt="" 
        className="w-full h-[70%] object-cover" 
      />

      {/* Info Section: .info */}
      <div className="flex items-center gap-[20px] p-[15px]">
        
        {/* User Avatar */}
        <img 
          src={card.pp} 
          alt="" 
          className="w-[40px] h-[40px] rounded-full object-cover"
        />

        {/* Text Details: .texts */}
        <div className="flex flex-col">
          <h2 className="text-[14px] font-medium leading-tight">
            {card.cat}
          </h2>
          <span className="text-[14px] font-light">
            {card.username}
          </span>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;