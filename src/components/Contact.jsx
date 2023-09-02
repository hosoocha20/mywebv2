import React, { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-screen  bg-my-white text-[#121212] px-[4rem] py-[2rem]"
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex w-fit justify-center gap-[1.5rem] relative">
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
            <h1 className="text-[12vw] md:text-[5.5rem] contact-text ">Get</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}>
            <h1 className="text-[12vw] md:text-[5.5rem] contact-text ">in</h1>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}>
            <h1 className="text-[12vw] md:text-[5.5rem] contact-text ">
              Touch<span className=" text-my-yellow">.</span>
            </h1>
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateIn="animate__fadeIn"
          delay={650}
          duration={1.5}
          className="mt-[1rem]"
        >
          <a
            href="mailto:Hosoo.cha@gmail.com"
            className=" px-[6px] py-[3px] text-[1rem] sm:text-[1.2rem] underline underline-offset-4 relative before:absolute before:z-[-1] before:left-0 before:top-0  before:h-full before:w-0 hover:before:w-full before:bg-my-yellow before:rounded before:transition-[width] before:duration-300 before:ease-linear"
          >
            hosoo.cha@gmail.com
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
});

export default Contact;
