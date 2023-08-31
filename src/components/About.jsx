import React, {forwardRef} from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { AiFillHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiSass } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { BsFiletypeSql, BsGit } from "react-icons/bs"

const About = forwardRef((props , ref) => {
  return (
    <div ref={ref} className="min-h-screen md:px-[4rem] px-[2rem] py-[3rem] flex flex-col justify-evenly bg-[#f9f9f9]">
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
        <div className=" about-text">
          <p className="overflow-hidden  leading-none flex gap-[1.5%]">
            I am a {' '}
            <span className="text-my-yellow  inline-block"> Front End Developer</span>
          </p>
          <p>with an affinity for creative freedom and expression</p>
          <p className="overflow-hidden  leading-tight">
            and a strong passion for building websites that provide{" "}
          <span className="text-[#50c878]">great user experience</span>.

          </p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={250}>
        <div className="about-text text-center w-[95%] sm:w-[80%] md:w-[70%] mx-auto my-0">
          <p>I am no expert in design however I enjoy implementing <span className="text-[#50c878]">visual harmony</span> and <span className="text-[#50c878]">aesthetic</span> into crafting my websites.</p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={500}>
        <div className=" about-text text-right">
          <p>
            I work primarily with <span className="text-[#5a81fa]">React</span>{" "}
            and <span className="text-[#5a81fa]">Javascript</span>.
          </p>
          <p>However, I am also profficient in the following technologies</p>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" duration={2.5} delay={750}>
        <div className="text-[1rem] mx-auto my-0 grid grid-cols-3 w-[95%] sm:w-[80%] md:w-[60%] gap-y-[1.5rem] mt-[1rem]">
          <div className="flex items-center gap-x-[0.3rem]"> <AiFillHtml5 className="text-[1.5rem] text-[#e34c26]"/><p className="text-sm md:text-base">HTML</p></div>
          <div className="flex items-center gap-x-[0.3rem]"> <SiTailwindcss className="text-[1.5rem] text-[#06b6d4]"/><p className="text-sm md:text-base">Tailwind CSS</p></div>
          <div className="flex items-center gap-x-[0.3rem]"> <SiSass className="text-[1.5rem] text-[#c69]"/><p className="text-sm md:text-base">SASS/SCSS</p></div>
          <div className="flex items-center gap-x-[0.3rem]"> <TbApi className="text-[1.5rem]"/><p className="text-sm md:text-base">REST API</p></div>
          <div className="flex items-center gap-x-[0.3rem]"> <BsFiletypeSql  className="text-[1.5rem]"/><p className="text-sm md:text-base">SQL/no SQL Database</p></div>
          <div className="flex items-center gap-x-[0.3rem]"> <BsGit  className="text-[1.5rem] text-[#f1502f]"/><p className="text-sm md:text-base">Git</p></div>
        </div>
      </AnimationOnScroll>
    </div>
  );
});

export default About;
