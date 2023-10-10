import React, { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss, SiSass, SiNodedotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsFiletypeSql, BsGit } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";
import Reveal from "./Reveal";
import RevealFade from "./RevealFade";


const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen  md:px-[4.5rem] sm:px-[6rem] px-[2rem] py-[3rem] flex flex-col justify-evenly bg-[#f9f9f9]"
    >
      <Reveal d={0}>
        <div className="md:text-clamp1 sm:text-clamp2 text-clamp3 ">
          <p className="   inline italic ">
            I am an Entry Level{" "}
            <span className="text-clamp4  text-[#f8d61e] font-semibold  inline not-italic">
              WEB DEVELOPER
            </span>
          </p>
          <p className=" leading-tight">
            with a passion for building websites that provide{" "}
            <span className=" about-emphasis italic">great user experience</span><span className="text-[#f5d008]">.</span>
          </p>
        </div>
      </Reveal>
      <Reveal d={0.3}>
        <div className="md:text-clamp1 sm:text-clamp2 text-clamp3  text-center w-[95%] sm:w-[80%] md:w-[80%] mx-auto my-0">
          <p>
            I am no expert in <span className="baskerville italic font-medium ">DESIGN</span> but I enjoy exploring{" "}
            <span className=" about-emphasis italic">creativity</span> and{" "}
            <span className=" about-emphasis italic">visual harmony</span> and <span className="baskerville italic">CRAFTING </span>
             the elements to create <span className="baskerville italic font-medium">AESTHETIC</span> websites.
          </p>
        </div>
      </Reveal>
      <Reveal d={0.6}>
        <div className=" md:text-clamp1 sm:text-clamp2 text-clamp3  text-right">
          <p>
            I work primarily with <span className="text-[#2a3dfa] font-medium">REACT</span>{" "}
            and <span className="text-[#2a3dfa] font-medium">JAVASCRIPT</span>.
          </p>
          <p>However, I am also knowledgeable in the following technologies:</p>
        </div>
      </Reveal>

        <RevealFade d={0.9}>
          <div className="mx-auto my-0 grid grid-cols-3   w-[95%] sm:w-[80%] md:w-[60%] gap-y-[1.5rem] gap-x-[10px] mt-[1rem]">
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <AiFillHtml5 className="text-[1.5rem] text-[#e34c26]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">HTML</p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <SiTailwindcss className="text-[1.5rem] text-[#06b6d4]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">
                Tailwind CSS
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <SiSass className="text-[1.5rem] text-[#c69]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">SCSS</p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <BiLogoTypescript  className="text-[1.5rem] text-[#3178C6]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">Typescript</p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <TbApi className="text-[1.5rem]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">REST API</p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <SiNodedotjs className="text-[1.5rem] text-[#3cb73a]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">Node JS</p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <BsFiletypeSql className="text-[1.5rem]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">
                SQL
              </p>
            </div>
            <div className="flex items-center justify-center gap-x-[0.3rem] ">
              {" "}
              <BsGit className="text-[1.5rem] text-[#f1502f]" />
              <p className="text-[12px] sm:text-[14px] md:text-base">Git</p>
            </div>
          </div>
        </RevealFade>
    </div>
  );
});

export default About;
