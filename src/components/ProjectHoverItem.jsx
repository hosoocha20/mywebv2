import React from "react";

const ProjectHoverItem = ({
  projectName,
  projectDescription,
  toggleProjHover,
  arrayOfTools,
  n,
}) => {
  return (
    <div
      className={`absolute bottom-[-1rem] w-full px-[3rem] py-[1rem] text-white bg-black/60  ${
        toggleProjHover === n ? "bottom-[0rem] block" : "invisible opacity-60"
      } transition-all ease-in 500ms flex flex-col gap-y-[0.2rem] rounded`}
    >
      <h1 className="text-[1rem] sm:text-[1.1rem] md:text-[1.4rem] font-bold leading-none">
        {projectName}
      </h1>
      <p className="text-sm md:text-[14px]">{projectDescription}</p>
      <div className="flex flex-wrap gap-[0.5rem] mt-[0.8rem]">
        {arrayOfTools.map((i) => {
          return (
            <div className="px-[0.6rem] py-[0.2rem]  rounded-[1rem] bg-[#d2d2d2] text-xs text-black">
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectHoverItem;
