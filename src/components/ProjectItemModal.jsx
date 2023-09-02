import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { MdOpenInBrowser } from "react-icons/md";

const ProjectItemModal = (props) => {
  return (
    <div
      className={`transition-scale duration-500 delay-200 sm:w-[600px] w-full bg-[#f9f9f9] h-full rounded scale-0  pt-[3.8rem]  overflow-y-auto relative flex flex-col justify-between  ${
        props.openProjModal ? "scale-100" : "delay-0"
      }`}
    >
      <div className="absolute top-0 left-0 flex justify-between w-full pt-[1rem] sm:px-[4rem] px-[3rem]">
        <IoIosArrowDropleft
          className="text-[2rem] text-[#3f3f3f] cursor-pointer"
          onClick={props.closeProjModal}
        />
        <button
          onClick={props.closeProjModal}
          className="font-medium hover:underline underline-offset-2 text-[#3f3f3f]"
        >
          Back To Projects
        </button>
      </div>
      <div className="relative sm:px-[4rem] px-[3rem] flex flex-col gap-y-[1.7rem] pb-[1.5rem]">
        <div>
          <hr className=""></hr>
          <h2 className="text-[1.2rem] sm:text-[1.5rem] font-semibold mt-[2rem]">
            {props.projName}
          </h2>
          <p className="text-sm sm:text-base">{props.projDescription}</p>
        </div>
        {props.projVideo ? (
          <video
            autoPlay
            loop
            muted
            className="object-fill rounded-[0.7rem] border"
            poster={props.projPoster}
          >
            <source src={props.projVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={props.projPoster}
            className="object-fill border rounded-[0.7rem]"
          />
        )}
        <div>
          <h3 className="text-[1rem] sm:text-[1.1rem] font-semibold">About</h3>
          <p className="text-sm sm:text-base">{props.projAbout}</p>
        </div>
        <div>
          <h3 className="text-[1rem] sm:text-[1.1rem] font-semibold">
            Tools & Libraries
          </h3>
          <div className="flex flex-row flex-wrap gap-[0.3rem] sm:gap-[1rem] pt-[0.5rem]">
            {props.arrayOfTools.map((i) => {
              return (
                <div className="px-[0.6rem] py-[0.2rem]  rounded text-xs bg-[#d2d2d2] font-medium">
                  {i}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-[0.5rem]">
            <ImEarth />
            <h3 className="text-[1rem] sm:text-[1.1rem] font-semibold">
              Website
            </h3>
          </div>
          <p className="text-sm sm:text-base">Website Link Here</p>
        </div>
      </div>
      <div className="group sticky bottom-0 left-0 w-full flex items-center justify-center gap-x-[0.5rem] bg-[#c0c0c0] py-[1.25rem] rounded cursor-pointer">
        <h3 className=" text-sm sm:text-[1rem] font-medium group-hover:underline underline-offset-2">
          Open Website
        </h3>
        <MdOpenInBrowser className="text-[1.1rem]" />
      </div>
    </div>
  );
};

export default ProjectItemModal;
