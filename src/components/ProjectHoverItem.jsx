import React from "react";

const ProjectHoverItem = ({ projectName, projectDescription,toggleProjHover, arrayOfTools, n }) => {
  return (
    <div
      className={`absolute bottom-[-1rem] w-full px-[3rem] py-[1rem] text-white bg-black/60  ${
        toggleProjHover === n ? "bottom-[0rem] block" : "invisible opacity-60"
      } transition-all ease-in 500ms`}
    >
      <h1 className="text-[1.6rem] font-bold proj-hover-text">{projectName}</h1>
      <p>{projectDescription}</p>
      <div className="flex gap-[1rem]">
        {arrayOfTools.map((i) =>{
            return (
                <div className="px-[0.6rem] py-[0.2rem] border rounded-[1rem] text-xs">
                {i}
                </div> 
            )
          
        })}
      </div>
    </div>
  );
};

export default ProjectHoverItem;
