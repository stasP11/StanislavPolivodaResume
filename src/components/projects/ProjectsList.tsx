import React, { useState } from "react";
import ProjectTitle from "./ProjectTitle";
import ProjectInfo from "./ProjectInfo";
import projectsArray from "../../data/projects"

function ProjecstList({id}: any) {
  const [selectedProject, setSelectedProjectId] = useState(projectsArray[0].id);

  return (
    <div id={id}>
      <h2
        className="font-sans mt-4 mb-5 max-w-xl self-start text-left
     text-slate-900 text-2xl lg:text-4xl
      tracking-tight font-bold dark:text-white"
      >
        Work Experience:
      </h2>
      <div className="flex flex-wrap justify-between lg:w-196 w-full">
        <div className="flex lg:flex-col lg:w-2/6 w-full lg:h-screen lg:max-h-[75vh] overflow-auto lg:remove-scroll">
          {projectsArray.map((project: any) => (
            <div key={project.id} className="lg:mb-3">
              <ProjectTitle
                project={project}
                onSelect={() => setSelectedProjectId(project.id)}
                selectedProject={selectedProject}
              />
            </div>
          ))}
        </div>
        <div className="projectInfoContainer lg:w-4/6 w-full">
          <ProjectInfo
            project={projectsArray.find((obj) => obj.id === selectedProject)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjecstList;
