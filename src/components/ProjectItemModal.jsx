import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { MdOpenInBrowser } from "react-icons/md";

const ProjectItemModal = (props) => {
  return (
    <div
      className={`transition-scale duration-500 delay-200 sm:w-[600px] w-full bg-[#f9f9f9] h-full rounded scale-0 relative sm:px-[4rem] px-[3rem] py-[4rem] flex flex-col gap-y-[1.3rem]  ${
        props.openProjModal ? "scale-100" : "delay-0"
      }`}
    >
      <div className="absolute top-0 left-0 flex justify-between w-full pt-[1rem] px-[2rem]">
        <IoIosArrowDropleft
          className="text-[2rem] cursor-pointer"
          onClick={props.closeProjModal}
        />
        <button onClick={props.closeProjModal}>Back To Projects</button>
      </div>
      <div>
        <h2 className="text-[1.5rem] font-semibold">{props.projName}</h2>
        <p>{props.projDescription}</p>
      </div>
      {props.projVideo ? (
        <video
          autoPlay
          loop
          muted
          className="object-fill rounded-[0.7rem]"
          poster={props.projPoster}
        >
          <source src={props.projVideo} type="video/mp4" />
        </video>
      ) : (
        <img src={props.projPoster} className="object-fill border rounded-[0.7rem]" />
      )}

      <div>
        <h3 className="text-[1.1rem] font-semibold">About</h3>
        <p>{props.projAbout}</p>
      </div>
      <div>
        <h3 className="text-[1.1rem] font-semibold">Tools & Libraries</h3>
        <div className="flex gap-[1rem] pt-[0.5rem]">
          {props.arrayOfTools.map((i) => {
            return (
              <div className="px-[0.6rem] py-[0.2rem] border rounded text-xs">
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-[0.5rem]">
          <ImEarth />
          <h3 className="text-[1.1rem] font-semibold">Website</h3>
        </div>
        <p>Website Link Here</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-x-[0.5rem] bg-slate-500 py-[1.25rem]">
        <h3 className="text-[1rem] font-semibold">Open Website</h3>
        <MdOpenInBrowser className="text-[1.1rem]" />
      </div>
    </div>
  );
};

export default ProjectItemModal;
