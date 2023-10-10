import React, { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ImLinkedin } from "react-icons/im";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-screen  bg-my-white text-[#121212] px-[4rem] py-[2rem]"
    >
      <div className="w-full h-[90%] flex flex-col justify-center items-center">
        <div className="flex w-fit justify-center gap-[1.5rem] relative">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={100} animateOnce={true}>
            <h1 className="text-[12vw] md:text-[5.5rem] contact-text ">Get</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} animateOnce={true}>
            <h1 className="text-[12vw] md:text-[5.5rem] contact-text ">in</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={300} animateOnce={true}>
            <h1 className="text-[12vw] md:text-[5.5rem] contact-text ">
              Touch<span className=" text-my-yellow">.</span>
            </h1>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          delay={650}
          duration={1.5}
          animateOnce={true}
          className="mt-[1rem]"
        >
          <a
            href="mailto:Hosoo.cha@gmail.com"
            className="text-[#0c2bc7] px-[6px] py-[3px] text-[1rem] sm:text-[1.2rem] underline underline-offset-4 relative before:absolute before:z-[-1] before:left-0 before:top-0  before:h-full before:w-0 hover:before:w-full before:bg-my-yellow before:rounded before:transition-[width] before:duration-300 before:ease-linear"
          >
            hosoocha20@gmail.com
          </a>
        </AnimationOnScroll>
      </div>
        <Reveal d={0}>
          <div className="w-full flex justify-center gap-[1.5rem] text-[1.8rem]">
            <a href="https://github.com/hosoocha20" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/hosoo-cha/" target="_blank" rel="noreferrer">
              <ImLinkedin />
            </a>
          </div>
        </Reveal>
    </div>
  );
});

export default Contact;
