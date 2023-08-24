import React, { useState, forwardRef } from "react";
import ProjectHoverItem from "./ProjectHoverItem";

const Projects = forwardRef((props , ref) => {
  const [toggleProjHover, setToggleProjHover] = useState();
  const onMouseOverHoverElement = (i) => {
    setToggleProjHover(i);
  };
  const onMouseOutHoverElement = (e) => {
    setToggleProjHover();
  };
  return (
    <div ref={ref} className="w-full min-h-screen sm:px-[10%] px-[1rem] py-[2rem] bg-[#f9f9f9]">
      <h1 className="text-[3.5rem] font-semibold">MY PROJECTS</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[1rem] gap-x-[1.5rem] w-full">
        <div
          className="border rounded-[0.5rem] h-[300px] relative cursor-pointer"
          onMouseOver={() => onMouseOverHoverElement("1")}
          onMouseLeave={onMouseOutHoverElement}
        >
          Game Academy
          <ProjectHoverItem
            projectName="Game Academy"
            projectDescription="Browse through products and play chess online"
            toggleProjHover={toggleProjHover}
            arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
            n="1"
          />
        </div>

        <div
          className=" border rounded-[0.5rem]  h-[300px] relative cursor-pointer"
          onMouseOver={() => onMouseOverHoverElement("2")}
          onMouseLeave={onMouseOutHoverElement}
        >
          Personal Website
          <ProjectHoverItem
            projectName="Personal Website"
            projectDescription="Portfolio Website"
            toggleProjHover={toggleProjHover}
            arrayOfTools={["React", "Tailwind CSS", "JavaScript"]}
            n="2"
          />
        </div>
        <div
          className=" border rounded-[0.5rem]  h-[300px] relative cursor-pointer"
          onMouseOver={() => onMouseOverHoverElement("3")}
          onMouseLeave={onMouseOutHoverElement}
        >
          To do App
          <ProjectHoverItem
            projectName="To Do App"
            projectDescription="Make a list of things to do and write notes"
            toggleProjHover={toggleProjHover}
            arrayOfTools={["React", "CSS", "JavaScript"]}
            n="3"
          />
        </div>
      </div>
    </div>
  );
});

export default Projects;
