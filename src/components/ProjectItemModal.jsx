import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { MdOpenInBrowser } from "react-icons/md";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";

const ProjectItemModal = (props) => {
  return (
    <div
      className={`transition-scale duration-500 delay-200 sm:w-[600px] w-full bg-my-white h-full rounded scale-0  pt-[3.8rem]  overflow-y-auto relative flex flex-col justify-between  ${
        props.openProjModal ? "scale-100" : "delay-0"
      }`}
    >
      <div className="absolute top-0 left-0 flex justify-between w-full pt-[1rem] md:px-[4rem] px-[2rem]">
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
      <div className="relative md:px-[4rem] px-[2rem] flex flex-col gap-y-[1.7rem] pb-[1.5rem]">
        <div>
          <hr></hr>
          <h2 className="text-[1.2rem] lg:text-[1.5rem] font-semibold mt-[2rem] text-[#142e9b]">
            {props.projName}
          </h2>
          <p className="text-sm lg:text-base text-[#0c195a]">
            {props.projDescription}
          </p>
        </div>
        {props.projVideo ? (
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
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
        <div className="text-[#0c195a]">
          <h3 className="text-[1rem] xl:text-[1.1rem] font-semibold">About</h3>
          <p className="text-sm xl:text-base">{props.projAbout}</p>
        </div>
        <div>
          <h3 className="text-[1rem] xl:text-[1.1rem] font-semibold text-[#0c195a]">
            Tools
          </h3>
          <div className="flex flex-row flex-wrap gap-[0.3rem] sm:gap-[1rem] pt-[0.5rem]">
            {props.arrayOfTools.map((i) => {
              return (
                <div className="px-[0.6rem] py-[0.2rem]  rounded text-xs bg-[#5c94ff] text-white font-medium">
                  {i}
                </div>
              );
            })}
          </div>
        </div>
        
          <div className="flex flex-col gap-[0.6rem]">
          {props.projWebsite && (
            <div>
            <div className="flex items-center gap-x-[0.5rem] text-[#0c195a]">
              <ImEarth />
              <h3 className="text-[1rem] xl:text-[1.1rem] font-semibold">
                Website
              </h3>
            </div>
            <a
              href={props.projWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-base hover:underline underline-offset-2 text-[#3985d0] font-medium"
            >
              {props.projWebsite}
            </a>
            </div>
            )}
        {props.projGit && (
          <div>
            <div className="flex items-center gap-x-[0.5rem] text-[#0c195a]">
              <AiFillGithub />
              <h3 className="text-[1rem] xl:text-[1.1rem] font-semibold">
                Github
              </h3>
            </div>
            <a
              href={props.projGit}
              target="_blank"
              rel="noreferrer"
              className="text-xs lg:text-sm hover:underline underline-offset-2 text-[#3985d0] font-medium"
            >
              {props.projGit}
            </a>
          </div>
        )}
          </div>
        
      </div>
      <div className="group sticky bottom-0 left-0 w-full flex items-center justify-center gap-x-[0.5rem] bg-[#376aff] text-white py-[1.25rem] rounded-b-lg-[1rem] cursor-pointer">
        <a
          href={props.projWebsite}
          target="_blank"
          rel="noreferrer"
          className=" text-sm sm:text-[1rem] font-medium group-hover:underline underline-offset-2"
        >
          Open Website
        </a>
        <MdOpenInBrowser className="text-[1.1rem]" />
      </div>
    </div>
  );
};

export default ProjectItemModal;
