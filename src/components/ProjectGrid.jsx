import React from 'react';
import ProjectCard from './ProjectCard';


const ProjectGrid = ({ projects }) => {
  
if (!projects || projects == []){
  return <>
 no data found
 
  </>
}

return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>

    <div className="w-full flex justify-center mt-8">
      <button className="bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
        تحميل المزيد
      </button>
    </div>
  </>
);
};


export default ProjectGrid;