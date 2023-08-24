import React, {forwardRef} from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const About = forwardRef((props , ref) => {
  return (
    <div ref={ref} className="min-h-screen md:px-[4rem] px-[2rem] py-[2rem] flex flex-col justify-center gap-[2rem] bg-[#f9f9f9]">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className=" about-text">
          <h1 className="overflow-hidden  leading-none flex gap-[1.5%]">
            I am a {' '}
            <AnimationOnScroll animateIn="about-text-slanted">
            <span className="text-my-yellow  inline-block"> Front End Developer</span>
            </AnimationOnScroll>
          </h1>
          <h1>with an affinity for creative freedom and expression</h1>
          <h1 className="overflow-hidden  leading-tight flex gap-[1.5%]">
            and a strong passion for building websites that provide{" "}
            <AnimationOnScroll animateIn="about-text-slanted">
            <span className="text-my-yellow">great user experience</span>.
            </AnimationOnScroll>
          </h1>
        </div>
        </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}>
        <div className=" about-text text-right">
          <h1>
            I work primarily with <span className="text-[#5a81fa]">React</span>{" "}
            and <span className="text-[#5a81fa]">Javascript</span>.
          </h1>
          <h1>However, I am also profficient in the following technologies</h1>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={600}>
        <div className="text-[1rem] text-center grid grid-cols-3 w-[60%]">
          <p>HTML</p>
          <p>Tailwind CSS</p>
          <p>SASS/SCSS</p>
          <p>REST API</p>
          <p>SQL/no SQL Database</p>
        </div>
      </AnimationOnScroll>
    </div>
  );
});

export default About;
