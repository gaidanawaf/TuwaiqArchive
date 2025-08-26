import React, { useState } from 'react';

const ProjectCard = ({ project }) => {

  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="bg-gray-200 rounded-lg shadow p-4">

      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-md object-top mb-3"
        />

      
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow"
          aria-label=" المفضلة"
        >
          <span className={`text-xl ${isFavorited ? 'text-yellow-500' : 'text-gray-400'}`}>
            {isFavorited ? '★' : '☆'}
          </span>
        </button>
      </div>
      
      <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{project.description}</p>

      <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
       
        <span>{project.time}</span>

        <div className="flex  flex-row-reverse items-center gap-2 text-right">
          <img
            src={project.authorImage}
            alt={project.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-800 font-medium text-sm">{project.author}</p>
            <p className="text-gray-500 text-[11px] leading-tight">مصمم واجهات</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

